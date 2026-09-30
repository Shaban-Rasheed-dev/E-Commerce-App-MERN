import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { userRouter } from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

const port = process.env.PORT || 5001;

//body parser middleware
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth/user", userRouter);
//checking end ponit
app.get("/", (req, res) => {
  res.send("hello api");
});

//error middleware
app.use(errorMiddleware);

//server connectivity
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
  });
});
