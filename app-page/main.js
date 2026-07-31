const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 1700,
    height: 1100,
    webPreferences: {
      
    }
  })
  win.loadFile('app-page/index.html')
  win.removeMenu();
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})