import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { environments } from './src/config/environments.js';
import { connectDB } from './src/config/db.js';
import { userRouter } from './src/routes/userRouter.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);

app.listen(environments.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB();
});