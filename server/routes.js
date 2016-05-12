var express = require('express');
var router = express.Router();

// dev server API
router.get('/system_setting/get_config_for_sale_page_word', function(req, res, next) {
	var sample = {
		"rtnCode": 0,
		"rtnMsg": "OK!",
		"data": ""
	}
	res.json(sample)
})

// router.post('/xxx', function(req, res, next) {
// 
// })

module.exports = router;