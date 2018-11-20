var express = require('express');
var router = express.Router();
var Users = require('../../models/users');

router.post('/register', function(req,res,next){
  var data = req.body;

  Users.register(new Users({
    username: data.username,
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name
  }), 
  data.password, 
  function(err, user){

    if(err){

      return res.json({
        success: false, 
        user: req.body, 
        errors: err
      });
      
    }

    return res.json({
      success: true,
      user: user
    });

  });

});

module.exports = router;
