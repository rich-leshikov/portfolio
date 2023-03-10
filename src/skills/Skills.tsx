import React from 'react'
import s from './Skills.module.css'
import c from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill'

type SkillsPropsType = {}

export function Skills(props: SkillsPropsType) {
  return (
    <div className={s.skillsBlock}>
      <div className={`${c.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill
            title={'HTML&CSS'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          />
          <Skill
            title={'TypeScript'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          />
          <Skill
            title={'React'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          />
          <Skill
            title={'HTML&CSS'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          />
        </div>
      </div>
    </div>
  )
}