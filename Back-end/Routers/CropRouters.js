const express = require("express");
const {
  getAllCrops,
  getOneCropByID,
  postCrops
  
} = require("../Controllers/CropController");
const CropRouter = express.Router();

CropRouter.get("/all", getAllCrops);
CropRouter.get("/one/:id", getOneCropByID);
CropRouter.post("/post",postCrops)

module.exports = CropRouter;
