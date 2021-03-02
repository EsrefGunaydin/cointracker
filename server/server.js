const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/index')(app);

app.get('/', (req, res)=>{
    res.send("Test")
})

app.listen(5000, ()=>console.log('app is working on port 5000'));