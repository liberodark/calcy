const path = require('path');

const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 350,
    height: 500,
    resizable: false,
    title: 'Calcy',
    backgroundColor:'#bccfc7',
    icon: path.join(__dirname, 'assets/icons/png/64x64.png')
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  const menuConfig = Menu.buildFromTemplate([
    {
      label: 'Options',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CommandOrControl+R',
          role: 'reload',
        },
        {
          label: 'Quit',
          accelerator: 'CommandOrControl+W',
          role: 'close',
        },
      ],
    },

  ]);

  Menu.setApplicationMenu(menuConfig);
});
