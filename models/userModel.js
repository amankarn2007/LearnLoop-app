const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        ref: "purchase",
    }
})

module.exports = mongoose.model("User", userSchema);