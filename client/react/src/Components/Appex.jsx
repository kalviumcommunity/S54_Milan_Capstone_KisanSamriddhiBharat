
import React from "react"

import { Routes, Route } from "react-router-dom"

// import { AuthProvider } from "../contexts/AuthContext"

// import Chats from "./Chats"
import Login from "../Components/Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
        {/* <AuthProvider> */}
          <Routes>
            {/* <Route path="/chats" component={Chats} /> */}
            <Route path="/" component={Login} />
          </Routes>
        {/* </AuthProvider> */}
    </div>
  )
}

export default App
