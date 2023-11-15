import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
const EditProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()
  const getProductById = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/${id}`
    )
    setName(response.data.name)
    setPrice(response.data.price)
  }
  useEffect(() => {
    getProductById()
  }, [id])

  const EditProduct = async (e) => {
    e.preventDefault()
    await axios.patch(`${import.meta.env.VITE_BASE_API_URL}/${id}`, {
      name,
      price: parseInt(price),
    })
    navigate("/")
  }

  return (
    <div className="max-w-lg p-8 mx-auto my-10 bg-white shadow rounded-xl shadow-slate-300 ">
      <Link
        to="/"
        className="px-2 py-2 font-semibold text-white rounded-full bg-sky-500 hover:bg-sky-700 border-sky-400"
      >
        Back
      </Link>
      <form className="my-10" onSubmit={EditProduct}>
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Product Name</label>
            <input
              type="text"
              className="w-full px-3 py-3 mt-1 border rounded-lg border-slate-200 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Product Name.."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Price</label>
            <input
              type="text"
              className="w-full px-3 py-3 mt-1 border rounded-lg border-slate-200 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Price.."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-green-500 rounded-lg hover:bg-green-400 "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProduct
