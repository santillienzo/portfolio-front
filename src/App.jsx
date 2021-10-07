import React, { Fragment } from 'react'
import './app.css'

import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Language from './components/language/Language'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Service from './components/service/Service'

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <article>
        <About/>
        <Language/>
        <Works/>
        <Service/>
        <Contact/>
      </article>
    </>
  );
}

export default App;
