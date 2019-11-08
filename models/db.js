const mongoose = require('mongoose');



// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true},(err) => {
//     if (!err) { console.log('MongoDB connection succeeded.'); }
//     else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
// });
mongoose.connect('mongodb://lahiru dilruwan:dilruwan78569@ds125486.mlab.com:25486/table_booking', {useNewUrlParser: true},function(err){
    if(err){
        console.log("Database connecting error "+err)
    }
    else{
        console.log("Database connection succesfull");
    }
});

 
 
require('./product.model');
require('./customer.model'); 
require('./order.model');
 