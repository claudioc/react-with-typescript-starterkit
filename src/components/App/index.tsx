import * as React from 'react'
import * as style from './style.css'
import { Header } from '../Header'

export class App extends React.Component<React.Props<any>, undefined> {
  public render() {
    return (
      <div className={style.app}>
        <Header />
      </div>
    )
  }
}
