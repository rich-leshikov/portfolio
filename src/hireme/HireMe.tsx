import React from 'react'
import s from './HireMe.module.css'
import c from '../common/styles/Container.module.css'

type HireMePropsType = {}

export function HireMe(props: HireMePropsType) {
  const clickButton = () => alert('redirection to email')

  return (
    <div className={s.hireMe}>
      <div className={`${c.container} ${s.hireMeContainer}`}>
        <h2 className={s.title}>Searching for remote job!</h2>
        <button className={s.hireMeButton} onClick={clickButton}>Hire me</button>
      </div>
    </div>
  )
}