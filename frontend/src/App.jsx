import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Leftsidebar from './components/Leftsidebar'
import Main from './components/Main'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
    <Leftsidebar /> 

    <Main/>

    </>
    
  )
}

export default App
