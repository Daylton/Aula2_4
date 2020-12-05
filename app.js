import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRouter.js';

// Conectar ao MongoDB pelo Mongoose
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:MNotlyad14*B@cluster0.h9u45.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log('Conectado ao Mongoose')
    );
  } catch (error) {
    console.log('Erro ao conectar no Mongodb' + error);
  }
})();

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API iniciada'));
