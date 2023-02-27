import React from 'react'
import s from './Footer.module.css'
import c from '../common/styles/Container.module.css'

type FooterPropsType = {}

export function Footer(props: FooterPropsType) {
  return (
    <div className={s.hireMe}>
      <div className={`${c.container} ${s.footerContainer}`}>
        <h2 className={s.title}>Sidor Sidorov</h2>
        <div className={s.sns}>
          <div className={s.socialIcon}/>
          <div className={s.socialIcon}/>
          <div className={s.socialIcon}/>
          <div className={s.socialIcon}/>
        </div>
        <span className={s.copyright}>© 2023 All rights reserved</span>
      </div>
    </div>
  )
}