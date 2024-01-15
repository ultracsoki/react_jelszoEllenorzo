import { useDebugValue, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PasswordCheckerProps } from './PasswordCheckerProps'

function Header() {
  return <header>
    <div>
      <h1>Jelszó ellenőrző applikáció</h1>
      <p>Kérjük adja meg a jelszót</p>
    </div>
  </header>
}

function Main() {

  const [password, setPassword] = useState('');

  return <div>
  <input type="text" onInput={e => { setPassword(e.currentTarget.value) }}/>
  <PasswordCheckerProps jelszo = {password}/>
  </div>
}

function Footer()
{
  return <footer>
    <div>
      <p>Halasi-Czalbert Tibor -------- 2024.01.15</p>
    </div>
  </footer>
}

function App() {
  
  return (
  <>
    <Header/>
    <Main/>
    <Footer/>
  </>)
}

export default App
