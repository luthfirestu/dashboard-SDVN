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
                    Vehicle Position
                </button>
                <button
                    role="tab"
                    className={`tab tab-lifted ${activeTab === "tab2" ? "tab-active" : ""}`}
                    onClick={() => handleTabClick("tab2")}
                >
                    Vehicle Speed
                </button>
                <button
                    role="tab"
                    className={`tab tab-lifted ${activeTab === "tab3" ? "tab-active" : ""}`}
                    onClick={() => handleTabClick("tab3")}
                >
                    RSSI Result
                </button>
                <button
                    role="tab"
                    className={`tab tab-lifted ${activeTab === "tab4" ? "tab-active" : ""}`}
                    onClick={() => handleTabClick("tab4")}
                >
                    Power Consumption
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
