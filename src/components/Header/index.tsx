import * as React from 'react'
import './style.css'

// React.SFC is a shorthand for React.StatelessComponent (plus the F of Functional)
export const Header:React.SFC<React.Props<any>> = () => (
  <h1 className='Header'>React with TypeScript: a starter kit</h1>
)
