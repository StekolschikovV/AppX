const convertToWindowsStore = require('electron-windows-store')

convertToWindowsStore({
   containerVirtualization: false,
   inputDirectory: 'C:\\Users\\\steko\\Desktop\\AppX\\Brain-plus-plus\\',
   outputDirectory: 'C:\\Users\\\steko\\Desktop\\AppX\\output\\',
   flatten: false,
   packageVersion: '1.0.0.0',
   packageName: 'Ghost',
   packageDisplayName: 'Ghost Desktop',
   packageDescription: 'Ghost for Desktops',
   packageExecutable: 'app/Ghost.exe',
   assets: 'C:\\Users\\\steko\\Desktop\\AppX\\Assets',
   manifest: 'C:\\Users\\\steko\\Desktop\\AppX\\AppXManifest.xml',
   deploy: false,
   publisher: 'CN=developmentca',
   windowsKit: 'C:\\Program Files (x86)\\Windows Kits\\10\\bin\\x64 ',
   devCert: 'C:\\Users\\\steko\\Desktop\\AppX\\devcert.pfx',
   certPass: '123456',
   desktopConverter: 'C:\\desktop-converter-tools',
   expandedBaseImage: 'C:\\BaseImage.wim', // BaseImage-16257.wim https://www.microsoft.com/en-us/download/details.aspx 
   makeappxParams: ['/l'],
   signtoolParams: ['/p'],
   makePri: true,
   createConfigParams: ['/a'],
   createPriParams: ['/b'],
   finalSay: function () {
     return new Promise((resolve, reject) => resolve())
   }
})