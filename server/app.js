const express = require("express");
const routes = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || 'mongodb://inochi:inc123456@ds253840.mlab.com:53840/inochi-catalog';

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'dquw8pmyf',
    api_key: '453458232142563',
    api_secret: 'utpTakg4iCsShxgeEGCechEiOZ0'
})

/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })    
} catch (error) {
    
}

let port = 3000 || process.env.PORT;

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});