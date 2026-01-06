import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import AddTask from "./component/AddTask"
import EditTask from "./component/EditTask"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addtask" element={<AddTask/>}/>
      <Route path="/gettask/:id" element={<EditTask/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )}

export default App
