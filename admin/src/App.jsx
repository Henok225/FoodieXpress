import React from 'react'
import Sidebar from './component/sidebar/Sidebar'
import Navbar from './component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/Add'
import Orders from './pages/orders/Orders'
import List from './pages/list/List'
import { ToastContainer } from 'react-toastify';

const App = () => {
  const url = "https://foodiexpress.onrender.com"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
          
        </Routes>
      </div>
    </div>
  )
}

export default App
