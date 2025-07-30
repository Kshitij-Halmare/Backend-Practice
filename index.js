import express from express;
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './Routes/UserRoutes';
dotenv.config();
const app=express();
app.use(express.json());
app.use("/route",router);
const PORT=process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, ()=>{
    console.log('MongoDb Connected')
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})