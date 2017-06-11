import * as React from 'react'
import { Header } from '../Header'
import { getTime } from '../../lib/getTime'
import './style.css'

export class App extends React.Component<React.Props<any>, undefined> {
  public render() {
    return (
      <div className="App">
        <Header/>
        <img src="assets/images/ts-react.png"/>
        <p>It's around {getTime()} and everything is fine.</p>
      </div>
    )
  }
}
