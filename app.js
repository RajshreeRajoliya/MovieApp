import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";
dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);



mongoose.connect(`mongodb://admin:${process.env.MONGODB_PASSWORD}@ac-ixtbdpt-shard-00-00.ahpnpso.mongodb.net:27017,ac-ixtbdpt-shard-00-01.ahpnpso.mongodb.net:27017,ac-ixtbdpt-shard-00-02.ahpnpso.mongodb.net:27017/?ssl=true&replicaSet=atlas-klwjl7-shard-0&authSource=admin&retryWrites=true&w=majority`)

.then(()=>
app.listen(8080 , () =>
console.log("Connected To Database And Server Is Running")
)
).catch((err) =>console.log(err))
