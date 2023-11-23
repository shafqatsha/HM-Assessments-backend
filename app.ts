import express from "express";
import { connect } from "mongoose";
import cors from 'cors';
import questionRoutes from './src/api/question'

const app = express();
app.use(cors());

app.use("/api/question", questionRoutes);

async function Start() {
  await connect(
    "mongodb+srv://stylezone:shafqat@cluster0.mariis7.mongodb.net/HBAssesment?retryWrites=true&w=majority"
  );
  app.listen(9100, () => {
    console.log("server is up and running");
  });
}

Start().catch((err) => console.log(err));
