module.exports = {
  packagerConfig: {
    asar: true,
    icon: 'build/icon', // No file extension!
    appId: 'com.awgcor.awglauncher', //  CHANGE THIS!!!  Make it unique.
    productName: 'AWG Launcher',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};