import * as React from 'react'
import { Header } from '../Header'
import { getTime } from '../../lib/getTime'
import * as style from './style.css'

// The second paramenter of the extended class is the state object ('undefined' in this case)
export class App extends React.Component<React.Props<any>, undefined> {
  public render() {
    return (
      <div className={style.App}>
        <Header/>
        <img src="assets/images/ts-react.png"/>
        <p>It's around {getTime()} and everything is fine.</p>
      </div>
    )
  }
}
