const controller = require('../controllers/controllers');

module.exports = app => {
    // C
    app.post('/api/coins', controller.createCoin);
    // R
    app.get('/api/coins', controller.allCoins);
    app.get('/api/coin/:id', controller.oneCoin);
    // U
    app.patch('/api/coin/:id', controller.updateCoin);
    // D
    app.delete('/api/coin/:id/', controller.deleteCoin);
}
