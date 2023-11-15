import express from "express"
import cors from "cors"
import "dotenv/config"
import ProductRoute from "./src/routes/index.js"
const port = 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(ProductRoute)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
