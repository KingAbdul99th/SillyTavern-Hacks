import { saveSettingsDebounced } from "@ST/script.js";
import { extension_settings } from "@ST/scripts/extensions.js";
import React, { useState } from "react";


const defaultExtensionSettings = {
  name: 'KingAbdul Hacks',
  enabled: true
};


function removeExtrasFromExtensionsBlock() {
    const extensionsBlock = document.getElementById("rm_extensions_block");
    const parent = extensionsBlock?.childNodes[1]
    parent?.removeChild(parent.childNodes[11]);
    parent?.removeChild(parent.childNodes[9]);
}  

export default function Settings() {
  // @ts-ignore
  if (!extension_settings[defaultExtensionSettings.name]) {
    // @ts-ignore
    extension_settings[defaultExtensionSettings.name] = defaultExtensionSettings;
  }

  // @ts-ignore
  const extensionSettingsGlobal: defaultExtensionSettings = extension_settings[defaultExtensionSettings.name];

  const [extensionSettings, setSettings] = useState(extensionSettingsGlobal);

  if(extensionSettings.enabled) {
    removeExtrasFromExtensionsBlock();
  }

  function handleEnabledClick() {
    setSettings({...extensionSettings, enabled: !extensionSettings.enabled});
    console.log("enable toggled ", extensionSettings.enabled);
    saveSettingsDebounced();
    if(extensionSettings.enabled) {
      removeExtrasFromExtensionsBlock();
    }
  }

  return (
    <>
      <div id="hacks_settings" className="extension_container">
        <div className="inline-drawer">
          <div className="inline-drawer-toggle inline-drawer-header">
            <b>{defaultExtensionSettings.name}</b>
            <div className="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
          </div>
          <div className="inline-drawer-content">
            <div className="tracker-block flex-container">
              <input id="tracker_enable" type="checkbox" onClick={handleEnabledClick} checked={extensionSettings.enabled}/>
                <label htmlFor="tracker_enable">Enable Hacks</label>
            </div>
            <hr className="sysHR" />
          </div>
        </div>
      </div>
    </>
  );
}