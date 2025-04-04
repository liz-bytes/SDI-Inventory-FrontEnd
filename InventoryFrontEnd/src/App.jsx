import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/auth/Signup.jsx'
import Login from './components/auth/Login.jsx'
import InventoryList from './components/inventory/InventoryList.jsx'
import ItemDetail from './components/inventory/ItemDetails.jsx'  
import CreateItem from './components/inventory/CreateItem.jsx'
import EditItem from './components/inventory/EditItem.jsx'
import Home from './components/Home.jsx'
import UserInventory from './components/inventory/UserInventory.jsx'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/create-item" element={<CreateItem />} />
        <Route path="/edit-item/:id" element={<EditItem />} />
        <Route path="/users/:id/items" element={<UserInventory />} />
        
      </Routes>
    </Router>
  );
}


export default App
