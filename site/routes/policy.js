var express = require('express');
var router = express.Router();

const policyController = require ('../controllers/policyController');

/* GET home page. */
router.get('/',policyController.policy);
module.exports = router;

