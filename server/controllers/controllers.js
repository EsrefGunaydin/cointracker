const { Coin } = require('../models/coin.model');
const axios = require('axios'); 
const specialURL = 'prices'
const apiKEY = '951a9767e03f76162b39becc0393f7ba'

module.exports = {
    // C
    createCoin: (req, res) => {
        Coin.create(req.body)
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    // R
    allCoins: (req,res) => {
        Coin.find()
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    oneCoin: (req,res) => {
        Coin.findOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    // U
    updateCoin: (req,res) => {
        Coin.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err}))
    },
    // D
    deleteCoin: (req,res) => {
        Coin.deleteOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },

    //post coin price
    findCoinPrice: async (req, res) => {
        await axios.get(`https://api.nomics.com/v1/${specialURL}?key=${apiKEY}`)
        .then(data => res.json({ message: "success", data: data.data }))
        .catch(err=>console.log(err))
    }
}