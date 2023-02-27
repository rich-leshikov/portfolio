import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Works} from './works/Works';
import {HireMe} from './hireme/HireMe';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

export function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <HireMe/>
      <Contacts/>
      <Footer/>
    </div>
  )
}
