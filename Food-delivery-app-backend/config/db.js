import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://henokzena650:RBlWi0PbCMtF8Chr@cluster0.r9avl.mongodb.net/tumfood').then(()=>{console.log("DB Connected")});
}