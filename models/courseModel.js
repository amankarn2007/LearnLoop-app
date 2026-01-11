const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin",
    },
    purchase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "purchase",
    }
})

module.exports = mongoose.model("Course", courseSchema);