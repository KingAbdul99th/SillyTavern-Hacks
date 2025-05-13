import { saveSettingsDebounced } from "@ST/script.js";
import { extension_settings } from "@ST/scripts/extensions.js";
import React, { useState } from "react";


const defaultExtensionSettings = {
  name: 'KingAbdul Hacks',
  enabled: true,
  removeExtras: true,
};

// @ts-expect-error global extension settings
if (!extension_settings[defaultExtensionSettings.name]) {
// @ts-expect-error global extensions settings
  extension_settings[defaultExtensionSettings.name] = defaultExtensionSettings;
}

// @ts-expect-error global extensions settings
const extensionSettingsGlobal: defaultExtensionSettings = extension_settings[defaultExtensionSettings.name];

function toggleRemoveExtrasFromExtensionsBlock() {
  const extensionsBlock = document.getElementById("rm_extensions_block");
  const parent = extensionsBlock?.children[0];
  const children = parent?.children as HTMLCollectionOf<HTMLElement>;
  const child1 = children[4];
  const child2 = children[5];

  if(extensionSettingsGlobal.removeExtras) {
    child1.style.display = "none";
    child2.style.display = "none";
  }
  else {
    child1.style.display = "";
    child2.style.display = "";
  }
}  

export default function Settings() {
  const [enabled, setEnabled] = useState(extensionSettingsGlobal.enabled);
  const [removeExtras, setRemoveExtras] = useState(extensionSettingsGlobal.enabled);

  if(enabled) {
    toggleRemoveExtrasFromExtensionsBlock();
  }

  async function handleEnabledClick() {
    extensionSettingsGlobal.enabled = !extensionSettingsGlobal.enabled;
    console.log("enable toggled ", extensionSettingsGlobal.enabled);
    await saveSettingsDebounced();
    setEnabled(extensionSettingsGlobal.enabled);
  }

  async function handleRemoveExtrasClick() {
    extensionSettingsGlobal.removeExtras = !extensionSettingsGlobal.removeExtras;
    console.log("removeExtras toggled ", extensionSettingsGlobal.removeExtras);
    await saveSettingsDebounced();
    setRemoveExtras(extensionSettingsGlobal.removeExtras);
    if(enabled) {
      toggleRemoveExtrasFromExtensionsBlock();
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
            <div className="hacks-block flex-container">
              <input id="hacks-enable" type="checkbox" onClick={handleEnabledClick} checked={enabled}/>
              <label htmlFor="hacks-enable">Enable Hacks</label>
              <input id="hacks-remove-extras" type="checkbox" onClick={handleRemoveExtrasClick} checked={removeExtras}/>
              <label htmlFor="hacks-remove-extras">Remove Extras Block</label>
            </div>
            <hr className="sysHR" />
          </div>
        </div>
      </div>
    </>
  );
}