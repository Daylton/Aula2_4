// Imports
import express from "express";
import mongoose from "mongoose";
import "./config.js";
//import {} from 'dotenv/config'
//import dotenv from 'dotenv'

import { studentRouter } from "./routes/studentRouter.js";

process.env.USER_DB = "admin";

const app = express();

//require('dotenv').config();

// Conectar ao MongoDB pelo Mongoose
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@cluster0.h9u45.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log("Conectado ao Mongoose")
    );
  } catch (error) {
    console.log("Erro ao conectar no Mongodb" + error);
  }
})();

app.use(express.json());
app.use(studentRouter);

// Porta
app.listen(process.env.PORT, () => console.log("API iniciada"));
