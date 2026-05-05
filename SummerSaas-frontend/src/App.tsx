import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Dashboard } from "./pages/dashboard"
import { Signin } from "./pages/signin"


function App() {


  return <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>






}

export default App
