var express = require('express');
var router = express.Router();

const addController = require ('../controllers/addController');

/* GET home page. */
router.get('/',addController.add);
module.exports = router;

