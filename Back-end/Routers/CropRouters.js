const express = require("express");
const {
  getAllCrops,
  getOneCropByID,
  postCrops,

  
} = require("../Controllers/CropController");
const CropRouter = express.Router();

CropRouter.get("/all", getAllCrops);
CropRouter.get("/one/:id", getOneCropByID);


module.exports = CropRouter;
