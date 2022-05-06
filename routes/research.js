var express = require('express');
//Creating Router() object
var router = express.Router();
// console.log("My research");

router.post('/research',function(req, res, next){
    console.log("My research");
    res.send("Hello");
})
module.exports = router;
