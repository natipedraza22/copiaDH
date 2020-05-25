var express = require('express');
var router = express.Router();

const bagController = require ('../controllers/bagController');

/* GET home page. */
router.get('/',bagController.bag);
module.exports = router;