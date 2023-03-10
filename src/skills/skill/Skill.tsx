import React from 'react'
import s from './Skill.module.css'

type SkillPropsType = {
  title: string
  description: string
}

export function Skill(props: SkillPropsType) {
  return (
    <div className={s.skillBlock}>
      <div className={s.icon}>
        <img src={require('../../common/img/cat.PNG')}/>
      </div>
      <h3 className={s.title}>{props.title}</h3>
      <span className={s.description}>{props.description}</span>
    </div>
  )
}