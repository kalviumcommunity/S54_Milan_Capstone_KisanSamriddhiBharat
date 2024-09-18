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

const postCrops = async (req,res) => {
  try {
    res.status(201).json(req.body)
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in receiving data", error: error.message });
  }
}

const Crop = require('../models/Crop');

const updateCropByID = async (req, res) => {
  try {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid crop ID format." });
    }

    const updatedCrop = await Crop.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCrop) {
      return res.status(404).json({ message: "Crop not found." });
    }

    res.status(200).json(updatedCrop);
  } catch (error) {
    res.status(500).json({ message: "Error in updating data", error: error.message });
  }
};


module.exports = { getAllCrops, getOneCropByID ,postCrops,updateCropByID};