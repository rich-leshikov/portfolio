import React from 'react'
import s from './Works.module.css'
import c from '../common/styles/Container.module.css'
import {Work} from './work/Work'

type WorksPropsType = {}

export function Works(props: WorksPropsType) {
  return (
    <div className={s.worksBlock}>
      <div className={`${c.container} ${s.worksContainer}`}>
        <h2 className={s.title}>My works</h2>
        <div className={s.works}>
          <Work
            title={'HTML&CSS'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
          />
          <Work
            title={'TypeScript'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
          />
        </div>
      </div>
    </div>
  )
}