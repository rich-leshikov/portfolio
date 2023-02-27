import React from 'react';
import s from './Nav.module.css'

type NavPropsType = {}

export function Nav(props: NavPropsType) {
  return (
    <div className={s.nav}>
      <a href="/home">Home</a>
      <a href="/skills">Skills</a>
      <a href="/works">Works</a>
      <a href="/contacts">Contacts</a>
    </div>
  )
}