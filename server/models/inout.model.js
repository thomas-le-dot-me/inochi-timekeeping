const mongoose = require('mongoose');

let InOutSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    check_in_time : {
        type : Date,
        default: Date.now()
    },
    check_out_time : {
        type : Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('InOut', InOutSchema);