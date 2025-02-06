var express = require('express');
var router = express.Router();
var user =require('../controller/usercontroller');
/* GET home page. */
router.post('/', user.insert);
router.get('/getdata', user.getdata);
router.get('/update_getdata/:id', user.update_getdata);
router.post('/update/:id', user.update);
router.get('/delete/:id', user.delete);
router.post('/login',user.login);

module.exports = router;
