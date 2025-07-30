import express from express;
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app=express();
app.use(express.json());
const PORT=process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, ()=>{
    console.log('MongoDb Connected')
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})