import React, { useState } from "react";
import { getExtensionSettings, setExtensionSettings } from "./extensionSettings.js";


function toggleRemoveExtrasFromExtensionsBlock(removeExtras: boolean) {
  const extensionsBlock = document.getElementById("rm_extensions_block");
  const parent = extensionsBlock?.children[0];
  const children = parent?.children as HTMLCollectionOf<HTMLElement>;
  const child1 = children[4];
  const child2 = children[5];

  if(removeExtras) {
    child1.style.display = "none";
    child2.style.display = "none";
  }
  else {
    child1.style.display = "";
    child2.style.display = "";
  }
}  

export default function Settings() {
  let extensionSettings = getExtensionSettings();
  const [enabled, setEnabled] = useState(extensionSettings.enabled);
  const [removeExtras, setRemoveExtras] = useState(extensionSettings.removeExtras);

  if(enabled) {
    toggleRemoveExtrasFromExtensionsBlock(extensionSettings.removeExtras);
  }

  async function handleEnabledClick() {
    extensionSettings = setExtensionSettings({...extensionSettings, enabled: !extensionSettings.enabled});
    console.log("enable toggled ", extensionSettings.enabled);
    setEnabled(extensionSettings.enabled);
  }

  async function handleRemoveExtrasClick() {
    extensionSettings = setExtensionSettings({...extensionSettings, removeExtras: !extensionSettings.removeExtras});
    console.log("removeExtras toggled ", extensionSettings.removeExtras);
    setRemoveExtras(extensionSettings.removeExtras);
    if(enabled) {
      toggleRemoveExtrasFromExtensionsBlock(extensionSettings.removeExtras);
    }
  }

  return (
    <>
      <div className="inline-drawer">
        <div className="inline-drawer-toggle inline-drawer-header">
          <b>{extensionSettings.name}</b>
          <div className="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
        </div>
        <div className="inline-drawer-content">
          <div className="hacks-block flex-container">
            <input id="hacks-enable" type="checkbox" onClick={handleEnabledClick} checked={enabled}/>
            <label htmlFor="hacks-enable">Enable Hacks</label>
            <input id="hacks-remove-extras" type="checkbox" onClick={handleRemoveExtrasClick} checked={removeExtras}/>
            <label htmlFor="hacks-remove-extras">Remove Extras Block</label>
          </div>
          <hr className="sysHR" />
        </div>
      </div>
    </>
  );
}