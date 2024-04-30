import math

def tpa():
    N = int(input())
    neighbours = N-1
    load_threshold = 5.1774 * math.log(N)

    txPower_ini = int(input())
    txPower_min = 0
    txPower_max = 32
    delta = 1 #power adjustment step

    # PRR
    # BeaconLoad

    if neighbours < load_threshold :
        if txPower_ini <= txPower_max :
            txPower = min(txPower_ini + delta, txPower_max)
        else :
            txPower = max(txPower_ini - delta, txPower_min)
    elif neighbours > load_threshold :
        if txPower_ini >= txPower_min :
            txPower = max(txPower_ini - delta, txPower_min)
        else :
            txPower = min(txPower_ini + delta, txPower_max)

    return txPower

if __name__ == '__main__' :
    tpa()        