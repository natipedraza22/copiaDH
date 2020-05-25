var express = require('express');
var router = express.Router();

const TermsController = require ('../controllers/TermsController');

/* GET home page. */
router.get('/',TermsController.Terms);
module.exports = router;