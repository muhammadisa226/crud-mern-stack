import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productlist from "./components/Productlist"
import AddProduct from "./components/addProduct"
import EditProduct from "./components/editProduct"
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
