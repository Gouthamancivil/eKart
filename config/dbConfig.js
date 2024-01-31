import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

import {dbconfig} from '../config/dbConfig.js'

dbconfig()
//app instance

let app=express()
app.get ("/",(req,res)=>{
    res.send("eapparel")
})

export default app;