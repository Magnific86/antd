import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Context from './components/Context'


function Provider({ Component, pageProps }) {
const [theme, setTheme] = useState("dark")
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")

useEffect(() => {
  if(theme === "dark") {
    document.documentElement.classList.add("dark")
  } else if(theme === "light") {
    document.documentElement.classList.remove("dark")
  }
}, [theme])


function handleEmail(e) {
  setEmail(e.target.value)
}

function handlePass(e) {
  setPass(e.target.value)
}

function onSubmit(data) {
  alert("Success")
  setEmail("")
  setPass("")
}

function handleTheme() {
  setTheme(theme === "dark" ? "light" : "dark")
}

  return <Context.Provider
  value={{
    theme, handleTheme, email, pass, handleEmail, handlePass, onSubmit
  }}
  >
    <Component {...pageProps} />
  </Context.Provider>
}

export default Provider
