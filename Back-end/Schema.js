
const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    schemeName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const Scheme = mongoose.model("Scheme", schemeSchema);

module.exports = Scheme;
