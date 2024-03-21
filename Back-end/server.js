const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const CropRouter = require("./Routers/CropRouters");

const PORT = process.env.PORT;
app.use(express.json())
app.use('/Crops' , CropRouter)

app.get("/", (req, res) => {
  res.send(`Server is running`);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});