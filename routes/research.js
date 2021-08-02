var express = require('express');
<<<<<<< HEAD
//Creating Router() object
var router = express.Router();
// console.log("My research");

=======
var router = express.Router();
// console.log("My research");
>>>>>>> 9944725342eb1be427e19aaa839a820e8a9b9b94
router.post('/research',function(req, res, next){
    console.log("My research");
    res.send("Hello");
})
<<<<<<< HEAD
module.exports = router;
=======

module.exports = router;
>>>>>>> 9944725342eb1be427e19aaa839a820e8a9b9b94
