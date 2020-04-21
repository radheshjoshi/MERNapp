var express  = require('express')
var router = express.Router();
let userData = require('../models/signup_models');
// var logIn = require('../controllers/login');


router.route('/').get((req,res)=>{
    userData.find()
    .then(users=>res.json(users))
    .catch(err=>console.log(`${err.message}`));
})
router.route('/add').post((req,res)=>{
    const username = req.body.userName;
    const email = req.body.userEmail;
    const password= req.body.userPass;
    const newUser = new userData({
        username,
        password,
        email,
    })

    newUser.save()
        .then(()=>res.json('User added'))
        .catch(err=>res.status(400).json('Error is:'+err.message))
})
router.route('/edit/:id').put((req,res)=>{
    userData.findById(req.params.id)
        .then(users=>{
            users.username=req.body.username,
            users.email=req.body.email,
            users.password=req.body.password?req.body.password:users.password    
        users.save()})
        .catch(err=>res.json('Cannot update user. Error: '+err.message));
})

module.exports = router;

  

