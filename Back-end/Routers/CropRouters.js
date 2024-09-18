const express = require("express");
const {
  getAllCrops,
  getOneCropByID,
  postCrops,
  updateCropByID,
  
} = require("../Controllers/CropController");
const CropRouter = express.Router();

CropRouter.get("/all", getAllCrops);
CropRouter.get("/one/:id", getOneCropByID);
CropRouter.post("/post",postCrops)
CropRouter.put("/:id", updateCropByID);

module.exports = CropRouter;
