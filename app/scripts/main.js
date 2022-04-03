const { app, BrowserWindow } = require('electron')
const path = require('path')

function newWindow() {
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		autoHideMenuBar: true,
		webPreferences: {
			preload: path.join(__dirname, './app/pages/preload.js')
		}
	})

	window.removeMenu()
	window.loadFile('./app/pages/loading.html')
}

app.whenReady().then(() => {
	newWindow()
})
