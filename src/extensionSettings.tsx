import { saveSettingsDebounced } from "@ST/script.js";
import { extension_settings } from "@ST/scripts/extensions.js";

interface IExtenstionSettings {
  name: string,
  enabled: boolean,
  removeExtras: boolean
}
const defaultExtensionSettings: IExtenstionSettings = {
  name: 'KingAbdul Hacks',
  enabled: true,
  removeExtras: true,
};


// export const ExtensionSettingsContext = React.createContext({});

// export function ExtensionSettingsProvider(props: any) {
//   const [extensionSettings, setExtensionSettings] = React.useState({});

//   return (
//     <ExtensionSettingsContext.Provider value={{extensionSettings, setExtensionSettings}}>
//       {...props}
//     </ExtensionSettingsContext.Provider>
//   )
// }

export function getExtensionSettings() {
  // @ts-expect-error global extension settings
  if (!extension_settings[defaultExtensionSettings.name]) {
  // @ts-expect-error global extensions settings
    extension_settings[defaultExtensionSettings.name] = defaultExtensionSettings;
  }

  // @ts-expect-error global extensions settings
  const extensionSettingsGlobal: IExtenstionSettings = extension_settings[defaultExtensionSettings.name];
  return extensionSettingsGlobal;
}

export function setExtensionSettings(extensionSettings: IExtenstionSettings) {
  // @ts-expect-error global extensions settings
  extension_settings[defaultExtensionSettings.name] = extensionSettings;
  saveSettingsDebounced();
  return extensionSettings;
}