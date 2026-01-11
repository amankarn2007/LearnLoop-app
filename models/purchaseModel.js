const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
})