import { useState } from 'react'
import './App.css'
import Navbar from './compoents/Navbar'
import Home from './compoents/Home'
import AddBlog from './compoents/AddBlog'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     

   <Routes>
   <Route path='/h' element={<Home/>}/>
   <Route path='/b' element={<AddBlog/>}/>
   
   
   </Routes>
   </>
    
  )
}

export default App
