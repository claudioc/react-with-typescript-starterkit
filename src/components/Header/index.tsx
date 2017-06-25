import * as React from 'react'
import * as style from './style.css'
import * as renderHTML from 'react-render-html'
import * as content from '../../content/header.md'

export const Header:React.SFC<React.Props<any>> = () => (
  <div className={style.header}>
    <h1>Come se fosse antani</h1>
    <p>
      { renderHTML(content) }
    </p>
  </div>
)
