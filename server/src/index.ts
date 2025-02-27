import express from 'express';
import { checkMongoConnection } from './mongodb';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { login } from './login';

type Signin = {
  name: string,
  email: string,
  password: string
}

const prisma = new PrismaClient()

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  checkMongoConnection()
  res.send('Hello from Express!');
});

// app.post('/signup', async (req, res)=>{
//   res.send('Created user succefully')
// })

app.post('/signin', async (req, res)=>{
  const signin: Signin = req.body
  
  // console.log(req)
  const user = await login(signin.name,signin.email, signin.password)
  res.status(200).json({message: user?.message, token: user?.token})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  process.exit(0); // Gracefully shut down the server
});