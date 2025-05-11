import React, { useState } from "react";

const extensionConfig = {
    name: 'KingAbdul Hacks',
  };
  
  export default function Settings() {
    const [enabled, setEnabled] = useState(true);

    function handleEnabledClick() {
      setEnabled(!enabled);
      console.log("enable toggled ", enabled);
    }

    return (
      <>
        <div id="hacks_settings" className="extension_container">
          <div className="inline-drawer">
            <div className="inline-drawer-toggle inline-drawer-header">
              <b>{extensionConfig.name}</b>
              <div className="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
            </div>
            <div className="inline-drawer-content">
              <div className="tracker-block flex-container">
                <input id="tracker_enable" type="checkbox" onClick={handleEnabledClick}/>
                  <label htmlFor="tracker_enable">Enable Hacks</label>
              </div>
              <hr className="sysHR" />
            </div>
          </div>
        </div>
      </>
    );
  }