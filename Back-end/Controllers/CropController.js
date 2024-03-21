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


module.exports = { getAllCrops, getOneCropByID };