import React from 'react'
import "./App.scss"
import { Outlet } from 'react-router'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

type Props = {}

const App = (props: Props) => {
  return (
    <div className="app">
      <Nav />
      <div className='app-body'><Outlet /></div>
      <Footer />
    </div>
  )
}

export default App