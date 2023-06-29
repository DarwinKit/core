import React, { useState } from "react";
import "./tabBar.css";

export interface Tab {
  icon: JSX.Element;
  label: string;
  link?: string;
}

export interface TabBarProps {
  tabs: Array<Tab>;
}

const TabBar = (props: TabBarProps) => {
  const [isActive, setIsActive] = useState<null | number>(null);

  return (
    <div className="darwinKit-tabBar-wrapper">
      {props.tabs.map((tab, idx) => (
        <div
          onClick={() => setIsActive(idx)}
          className={`darwinKit-tabBar-tab ${isActive === idx && "active"}`}
          role="button"
          key={idx}
        >
          <div className="darwinKit-tabBar-icon">{tab.icon}</div>
          <span className="darwinKit-tabBar-label">{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
