const mongoose = require('mongoose');
 const _ = require('lodash');


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


  
const Product = mongoose.model('Product');
const Customer = mongoose.model('Customer');
 const Order = mongoose.model('Order');

   



module.exports.findproduct = (req, res) => {
    Product.find((err, products) => {
        if (err)
            console.log(err);
        else
            res.json(products);
    });
}


module.exports.findProductById = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err)
            console.log(err);
        else
            res.json(product);
    });
}
 


 


module.exports.regCustomer = (req, res, next) => {
    console.log("In register route")

    var newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.password

    })

    newCustomer.save((err, doc) => {
        if (!err)
        return res.status(200).json(doc);
        else {
            if (err.code == 11000)
            return res.status(201).json({msg: 'Duplicate email adrress found.'});
            else
                return next(err);
        }

    });

}

 




module.exports.signIn = (req, res) => {
  console.log("Sign in route");
    Customer.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) throw err;

        if (!user) {
            return  res.status(201).json({  "msg": "Authentication failed. User not found."});
        } else {

      
                if ( user.verifyPassword(req.body.password)) {
                    return res.status(200).json({ "token": user.generateJwt() });
                } else {
                    return res.status(201).json({  "msg": "Authentication failed. Wrong password." });
                }
      
        }
    });

}


module.exports.ecomUserProfile = (req, res, next) => {

    Customer.findOne({ _id: req._id },
        (err,Customer) => {
            if (!Customer)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, uid: Customer._id, Customer: _.pick(Customer, ['_id', 'name', 'email', 'gender']) });
        }
    );


}


module.exports.findCustomerById = (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if (err)
            console.log(err);
        else
            res.json(customer);
    });
}


 

module.exports.addOrder = (req, res, next) => {



    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;



    var neworder = new Order({
        cus_id:req._id,
        customername: req.body.customername,
        email: req.body.email,
        telephone:req.body.telephone,
        deliveraddress: req.body.deliveraddress,
        orderitems:req.body.orderitems,
        datetime:dateTime
    })

    neworder.save().then(doc => {

        res.status(200).json(doc)

    }).catch(err => console.log(err))

}


module.exports.getOrder = (req, res) => {
    Order.find((err, order) => {
        if (err)
            console.log(err);
        else
            res.json(order);
    });
}


 

module.exports.getOrderbyuserid = (req, res) => {
    Order.find({ cus_id: req._id },(err, order) => {
        if (err)
            console.log(err);
        else
            res.json(order);
    });
}


module.exports.findOrderById = (req, res) => {
    Order.findById(req.params.id, (err, order) => {
        if (err)
            console.log(err);
        else
            res.json(order);
    });
}
 