import React from 'react'
import s from './Main.module.css'
import c from '../common/styles/Container.module.css'

type MainPropsType = {}

export function Main(props: MainPropsType) {
  return (
    <div className={s.main}>
      <div className={`${c.container} ${s.mainContainer}`}>
        <div className={s.text}>
          <span>Hi there!</span>
          <h1>My name is Slim Shady</h1>
          <p>Frontend developer</p>
        </div>
        <div className={s.photo}>
          <img src={require('../common/img/slimshady.png')} alt={'main avatar'}/>
        </div>
      </div>
    </div>
  )
}