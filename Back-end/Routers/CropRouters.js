const express = require("express");
const {
  getAllCrops,
  getOneCropByID,
  postCrops,
  updateCropID
  
} = require("../Controllers/CropController");
const CropRouter = express.Router();

CropRouter.get("/all", getAllCrops);
CropRouter.get("/one/:id", getOneCropByID);
CropRouter.post("/post",postCrops)
CropRouter.put("/put/:id", updateCropID);

module.exports = CropRouter;
