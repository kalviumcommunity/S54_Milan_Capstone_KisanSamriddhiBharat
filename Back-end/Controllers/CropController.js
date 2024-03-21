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
    res.status(200).json({message:`Crop(${id}) has been retrieved from the database.`})
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in receiving data", error: error.message });
  }
};

module.exports = { getAllCrops, getOneCropByID };