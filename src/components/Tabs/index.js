import React, { useState } from "react";
import { tabLables } from "./constant";
import Tabs from "./Tabs";

function TabComponent() {
  const [activeTab, setActiveTab] = useState(tabLables.CANCEL_AT_ANY_TIME);

  const onClickTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Tabs activeTabName={activeTab} onClickTab/>
    </div>
  );
}

export default TabComponent;
