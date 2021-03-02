const mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name must be entered."],
        minlength: [2, "Name must be at least 2 characters in length."]
    }
}, { timestamps: true });

const coin = mongoose.model("coin", CoinSchema);

module.exports = { coin }