import express from 'express'
import dotenv from 'dotenv'
import initializeDatabase from './db/db.connect.js'
dotenv.config()

const PORT = process.env.PORT
const app = express()

initializeDatabase()

app.use(express.json())

app.listen(PORT, () => {
    console.log("Server connected to PORT:",PORT)
})


