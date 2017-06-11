import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'

// Wraps the init in a IIFE to be able to abort before the render
// if certain application-specific conditions are not met
(() => {
  render(
    <App/>,
    document.getElementById('root')
  )
})()
