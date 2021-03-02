const mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name must be entered."],
        minlength: [2, "Name must be at least 2 characters in length."]
    },
    type: {
        type: String
    },
    date: {
        type: String
    },
    amount: {
        type: Number
    },
    unitPrice: {
        type: Number
    },

}, { timestamps: true });

const Coin = mongoose.model("Coin", CoinSchema);

module.exports = { Coin }