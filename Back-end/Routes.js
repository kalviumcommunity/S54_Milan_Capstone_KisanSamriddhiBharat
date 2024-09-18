const express = require("express");
const router = express.Router();
const Scheme = require("./Schema.js");



router.get("/schemes", async (req, res) => {
    try {
        const schemes = await Scheme.find();
        res.json(schemes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post("/schemes/Data", async (req, res) => {
    const data=req.body
    const newUserFarmer= new Farmer(data)
    console.log(newUserFarmer)
    try {
      await newUserFarmer.save()
      res.send({message:true,data:newUserFarmer})
    } catch (err) {
      res.send({message:false,response:"please verify the code .",error:err})
    }
  });

module.exports = router;