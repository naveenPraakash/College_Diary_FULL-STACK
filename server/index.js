import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}));
app.use(cors());

import postRoutes from './routes/posts.js';
app.use('/posts', postRoutes);


const PORT =  process.env.PORT;
mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log('connected')))
.catch((error) => console.log(error.message+' error'));
mongoose.set('useFindAndModify', false);