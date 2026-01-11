const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    email: String,
    password: String,
    firstName: {
        type: String,
        minLength: 3,
    },
    lastName: {
        type: String,
        minLength: 3,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
    }
})

module.exports = mongoose.model("Admin", adminSchema);