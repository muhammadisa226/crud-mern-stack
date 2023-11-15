import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import useSWR, { useSWRConfig } from "swr"
const Productlist = () => {
  const { mutate } = useSWRConfig()
  const url = import.meta.env.VITE_BASE_API_URL
  const fetching = async () => {
    // const response = await axios.get("http://localhost:5000/products")
    const response = await axios.get(url)
    return response.data
  }
  const { data } = useSWR("products", fetching)
  if (!data) return <h2>Loading...</h2>
  const deleteProduct = async (productId) => {
    await axios.delete(`${url}/${productId}`)
    mutate("products")
  }

  return (
    <div className="flex flex-col mt-5">
      <div className="w-full">
        <Link
          to="/add"
          className="px-2 py-2 font-semibold text-white rounded-full bg-sky-500 hover:bg-sky-700 border-sky-400"
        >
          Add Product
        </Link>
        <div className="relative mt-3 rounded-lg shadow">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-1 py-3 text-center">No</th>
                <th className="px-6 py-3 ">Product Name</th>
                <th className="px-6 py-3 ">Price</th>
                <th className="px-1 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr className="bg-white border-b" key={product.id}>
                  <td className="px-1 py-3 text-center">{index + 1}</td>
                  <td className="px-6 py-3 font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-3 ">{product.price}</td>
                  <td className="px-1 py-3 text-center">
                    <Link
                      to={`/edit/${product.id}`}
                      className="px-3 py-1 mr-1 font-medium text-white bg-yellow-500 border-yellow-400 rounded-sm hover:bg-yellow-700"
                    >
                      Edit Product
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="px-3 py-1 font-medium text-white bg-red-500 border-red-400 rounded-sm hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Productlist
