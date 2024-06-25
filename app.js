import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import router from './src/Routers/post.router.js';

const app = express();

mongoose.connect(process.env.DB_URL)
.then(() => console.log('Connected!'))
.catch(()=> console.log('Failed'));

app.use(express.json())

app.use('/api', router);



app.get('/', (request, response) => {
    console.log("Test");
    //response.status(200).json("Work!");
});



app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })




