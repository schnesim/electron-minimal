const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 800, height: 600, webPreferences: {
      experimentalFeatures: true,
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});