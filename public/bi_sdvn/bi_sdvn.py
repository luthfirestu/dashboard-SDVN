from mininet.log import setLogLevel, info
from mn_wifi.cli import CLI
from mn_wifi.net import Mininet_wifi
from mn_wifi.sumo.runner import sumo
from mn_wifi.link import wmediumd
from mn_wifi.wmediumdConnector import interference
from 

def topology():
    info("*** Create a Network\n")
    net = Mininet_wifi(link=wmediumd, wmediumd_mode=interference, ac_method='ssf')
    info("*** Creating Nodes\n")
    for id in range(0, N):
        net.addCar('car%s' % (id+1), wlans=2)
    kwargs = {'mode': 'ax2', 'client_isolation': True, 'failMode': 'standalone'}
    e1 = net.addAccessPoint('e1', mac='00:00:00:11:00:02', channel='1', 
                            position='300,1000,0' , ssid= 'vanet-ssid1', **kwargs)
    e2 = net.addAccessPoint('e2', mac='00:00:00:11:00:03', channel='11', 
                            position='-300,1000,0', ssid= 'vanet-ssid2', **kwargs)                           
    c1 = net.addController('c1')                          

    info("*** Configuring Propagation Model\n")
    net.setPropagationModel(model="logDistance", exp=2.8)

    info("*** Configuring Nodes\n")
    net.configureNodes()
    
    info("*** Creating Links\n")    
    net.addLink(e1, e2)

    info("*** Calling Sumo\n")
    # exec_order: Tells TraCI to give the current
    # client the given position in the execution order.
    # We may have to change it from 0 to 1 if we want to
    # load/reload the current simulation from a 2nd client
    net.useExternalProgram(program=sumo, port=8813,
                           config_file='bi.sumocfg',
                           clients=1, exec_order=0)

    info("*** Starting Network\n")
    net.build()
    c1.start()
    for enb in net.aps:
        enb.start([c1])
    for id, car in enumerate(net.cars):
        car.setIP('192.168.0.{}/24'.format(id+1),
                  intf='{}'.format(car.wintfs[0].name))
        car.setIP('192.168.1.{}/24'.format(id+1),
                  intf='{}'.format(car.wintfs[1].name))
    e1.cmd('ovs-ofctl add-flow e1 "priority=0,arp,in_port=1,'
                'actions=output:in_port,normal"')
    e1.cmd('ovs-ofctl add-flow e1 "priority=0,icmp,in_port=1,'
                'actions=output:in_port,normal"')
    e1.cmd('ovs-ofctl add-flow e1 "priority=0,udp,in_port=1,'
                'actions=output:in_port,normal"')
    e1.cmd('ovs-ofctl add-flow e1 "priority=0,tcp,in_port=1,'
                'actions=output:in_port,normal"')
    e2.cmd('ovs-ofctl add-flow e2 "priority=0,arp,in_port=1,'
                'actions=output:in_port,normal"')
    e2.cmd('ovs-ofctl add-flow e2 "priority=0,icmp,in_port=1,'
                'actions=output:in_port,normal"')
    e2.cmd('ovs-ofctl add-flow e2 "priority=0,udp,in_port=1,'
                'actions=output:in_port,normal"')
    e2.cmd('ovs-ofctl add-flow e2 "priority=0,tcp,in_port=1,'
                'actions=output:in_port,normal"') 
                  
    "Track The Position of The Nodes"
    nodes = net.cars + net.aps
    net.telemetry(nodes=nodes, data_type='position',
                  min_x=-1000, min_y=500,
                  max_x=1000, max_y=1500)  

    info("*** Running CLI\n")
    CLI(net)

    info("*** Stopping Network\n")
    net.stop()


if __name__ == '__main__':
    setLogLevel('info')
    topology()
