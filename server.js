import express from "express";
import dotenv from "dotenv";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import connectDB from "./database/conn.js";
import blogRoutes from "./routes/blogRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
		credentials: true,
}));

app.use(cookieParser());
app.use(express.json());


//All the routes
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/category", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Connected to server successfully");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 7000;

const start = async () => {
  try {
    console.log(`Server has started`);
    await connectDB();
    app.listen(port, () => {
      console.log(`Successfully started and listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
