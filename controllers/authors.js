var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('HELLO WORLD! - authors');
});

module.exports = router;