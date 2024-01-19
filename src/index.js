import mongoose from "mongoose";
import {DB_NAME} from "./constants"

import { Express } from "express";

const app=express()
;(async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error")

    }catch(error){
        console.error("ERROR",error)
        throw error

    }
} )()
