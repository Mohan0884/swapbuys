import * as dotenv from 'dotenv'
dotenv.config();
import 'express-async-errors';
import  express from 'express';
const app=express()
import bodyParser from "body-parser";
import router from "./routes/main.js"
import connectDB from "./MongoDB/Connect.js"
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimiter from 'express-rate-limit';
import helmet from 'helmet';
import xss from 'xss-clean';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

app.use(bodyParser.json({ limit: '10mb' }));
//app.use(bodyParser.json()) 

 
app.use('/api/v1',router);

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);

app.use(express.static(path.join(__dirname,'/client/build')));
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser() );
console.log(__dirname);
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'/client/build','index.html')));
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

 
  const port=process.env.PORT || 5000;
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`the server running on the port${port}`)
        })
    } catch (error) {
        console.log(error)
        
    }
}
start();
 