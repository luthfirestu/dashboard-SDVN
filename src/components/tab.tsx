'use client'
import React, { useState } from "react";

const TabHistory = ({ tab1Content, tab2Content, tab3Content, tab4Content }: any) => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <button
                    role="tab"
                    className={`tab tab-lifted ${activeTab === "tab1" ? "tab-active" : ""}`}
                    onClick={() => handleTabClick("tab1")}
                >
                    Throughput
                </button>
                <button
                    role="tab"
                    className={`tab tab-lifted ${activeTab === "tab2" ? "tab-active" : ""}`}
                    onClick={() => handleTabClick("tab2")}
                >
                    RTT
                </button>
                <button
                    role="tab"
                    className={`tab tab-lifted ${activeTab === "tab3" ? "tab-active" : ""}`}
                    onClick={() => handleTabClick("tab3")}
                >
                    Power
                </button>
                <button
                    role="tab"
                    className={`tab tab-lifted ${activeTab === "tab4" ? "tab-active" : ""}`}
                    onClick={() => handleTabClick("tab4")}
                >
                    Mobility Component
                </button>
            </div>
            <div>
                {activeTab === 'tab1' && (
                    <div>{tab1Content}</div>
                )}
                {activeTab === 'tab2' && (
                    <div>{tab2Content}</div>
                )}
                {activeTab === 'tab3' && (
                    <div>{tab3Content}</div>
                )}
                {activeTab === 'tab4' && (
                    <div>{tab4Content}</div>
                )}
            </div>
        </div>
    );
};

export default TabHistory;
