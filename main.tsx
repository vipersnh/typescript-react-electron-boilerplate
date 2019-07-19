'use strict'
import {app, BrowserWindow} from 'electron'

let mainWindow: any = null

function createWindow () {
    mainWindow = new BrowserWindow(
        {
            width: 880, 
            height: 600, 
            minWidth: 880,
            minHeight: 400,
            webPreferences: {
                nodeIntegration: true,
            },
        }
    )
    mainWindow.setMenu(null)
    mainWindow.setResizable(false)
    mainWindow.loadURL('file://' + __dirname + '/index.html')
    console.log('file://' + __dirname + '/index.html')
    mainWindow.on('closed', function() {
        mainWindow = null
    })

    let webContents = mainWindow.webContents
    webContents.on('did-finish-load', function() {
        webContents.setZoomFactor(1)
    })

    mainWindow.webContents.openDevTools({mode:'undocked'})
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
}
)

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
}
)
