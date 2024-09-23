const getAllCrops = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "All Crops have been retrieved from the database." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in receiving data", error: error.message });
  }
};

const getOneCropByID = async (req, res) => {
  try {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid crop ID format." });
    }


    res.status(200).json({ message: `Crop(${id}) has been retrieved from the database.` });
  } catch (error) {
    res.status(500).json({ message: "Error in receiving data", error: error.message });
  }
};

const isValidObjectId = (id) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

const Crop = require('../models/Crop');

const postCrops = async (req, res) => {
  try {
    const newCrop = new Crop(req.body);
    await newCrop.save(); 
    res.status(201).json(newCrop);
  } catch (error) {
    res.status(500).json({ message: "Error in saving data", error: error.message });
  }
};


const updateCropID = async (req, res) => {
  try {
    const id = req.params.id;
    res
      .status(201)
      .json({ message: `Crop(${id}) has been updated.`, body: req.body });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in updating data", error: error.message });
  }
};

