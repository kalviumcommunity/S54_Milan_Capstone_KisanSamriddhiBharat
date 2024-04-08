const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
const router = require("./Routes");
app.use(router)

const dotenv = require("dotenv").config();
const CropRouter = require("./Routers/CropRouters");

const PORT = process.env.PORT;
app.use(express.json())
app.use("/Crops" , CropRouter);

const connectDB=require("./connectionDB")
connectDB()
app.get("/", (req, res) => {
  res.send(`Server is running`);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});