import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from './App'

const element = <App />

ReactDOM.render(element, document.getElementById('root') as HTMLElement)

export {element}

