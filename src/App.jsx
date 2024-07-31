/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import Navbar from "./components/Navbar"
import MainPart from "./components/MainPart"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
      <div className="container">
        <Navbar darkMode={darkMode} toggleDarkMode={setDarkMode} />
        <MainPart darkMode={darkMode}/>
      </div>
  )
}

export default App
