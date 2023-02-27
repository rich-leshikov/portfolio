import React from 'react'
import s from './Work.module.css'

type SkillPropsType = {
  title: string
  description: string
}

export function Work(props: SkillPropsType) {
  const clickButton = () => alert('picture scale up')

  return (
    <div className={s.work}>
      <div className={s.picture}>
        <button className={s.pictureButton} onClick={clickButton}>Watch</button>
      </div>
      <div className={s.info}>
        <h3 className={s.title}>{props.title}</h3>
        <span className={s.description}>{props.description}</span>
      </div>
    </div>
  )
}