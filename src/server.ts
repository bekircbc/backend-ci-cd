import express from "express"
import { greetings } from "./user"

const app = express()
app.get("/", (req,res) => res.send("This app"))
app.get("/ping", (req,res) => res.send("Success"))
app.get("/home", (req,res) => res.send("Home page"))
app.get("/hello/:name", (req,res) => {
  res.json({message:greeting(req.params.name)})
})

export default app
