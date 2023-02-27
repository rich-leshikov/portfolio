import React from 'react'
import s from './Header.module.css'
import {Nav} from '../nav/Nav'

type HeaderPropsType = {}

export function Header(props: HeaderPropsType) {
  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        <Nav/>
      </div>
    </div>
  )
}