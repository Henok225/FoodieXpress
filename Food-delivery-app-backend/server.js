import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRout.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import authMiddleware from "./midleware/auth.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

//  db connection
connectDB();

// API end point
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{

    res.send("API working")
})



app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)

})

// mongodb+srv://henokzena650:<db_password>@cluster0.r9avl.mongodb.net/?