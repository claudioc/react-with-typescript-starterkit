import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'

const init = () => {
  render(
    <App/>,
    document.getElementById('root')
  )
}

init()
