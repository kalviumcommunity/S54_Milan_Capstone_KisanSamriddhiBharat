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

module.exports = router;