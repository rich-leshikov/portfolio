import React from 'react'
import s from './Contacts.module.css'
import c from '../common/styles/Container.module.css'

type ContactsPropsType = {}

export function Contacts(props: ContactsPropsType) {
  const clickButton = () => alert('redirection to email')

  return (
    <div className={s.hireMe}>
      <div className={`${c.container} ${s.contactsContainer}`}>
        <h2 className={s.title}>Contacts</h2>
        <form className={s.contactsForm}>
          <input type="text"/>
          <input type="text"/>
          <textarea id="1"/>
        </form>
        <button className={s.button} onClick={clickButton}>Send</button>
      </div>
    </div>
  )
}