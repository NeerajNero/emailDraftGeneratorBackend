import express from 'express'
import dotenv from 'dotenv'
import initializeDatabase from './db/db.connect.js'
import emailDraftRoute from './routes/emailDraft.routes.js'
import cors from 'cors'
dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors({
    origin: "https://email-draft-generator.vercel.app"
}))
initializeDatabase()
app.get('/', (req,res) => {
    res.send("welcome")
})


app.use('/api',emailDraftRoute)

app.listen(PORT, () => {
    console.log("Server connected to PORT:",PORT)
})


