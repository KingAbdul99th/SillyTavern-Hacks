import React from "react";

const extensionConfig = {
    name: 'KingAbdul Hacks',
  };
  
  export default function Settings() {
    return (
      <>
        <div id="hacks_settings" className="extension_container">
          <div className="inline-drawer-toggle inline-drawer-header">
            <b>{extensionConfig.name}</b>
            <div className="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
          </div>
        </div>
      </>
    );
  }