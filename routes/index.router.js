const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
 

const jwtHelper = require('../config/jwtHelper');

 

  

 
 


 router.get('/productlist',ctrlUser.findproduct);
 router.get('/product/:id',ctrlUser.findProductById);
 
router.post('/regcus',ctrlUser.regCustomer);
router.post('/signin',ctrlUser.signIn);
router.get('/ecomuserprofile', jwtHelper.verifyJwtToken ,ctrlUser.ecomUserProfile);
 router.get('/getcusbyid/:id', ctrlUser.findCustomerById);


  router.post('/addOrder' , jwtHelper.verifyJwtToken , ctrlUser.addOrder);
   
router.get('/getorders',ctrlUser.getOrder);
 router.get('/getordersbyuserid', jwtHelper.verifyJwtToken , ctrlUser.getOrderbyuserid);
router.get('/order/:id',ctrlUser.findOrderById);
 
module.exports = router;



