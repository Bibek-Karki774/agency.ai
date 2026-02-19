import { useState } from "react"
import NavBar from "./components/NavBar"


function App() {
  const [theme, setTheme]= useState("light")

  return (
    <>
   <NavBar theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App
