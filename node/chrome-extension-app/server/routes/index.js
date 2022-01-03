var express = require('express');
var router = express.Router();
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.array('files', 1), function (req, res, next) {
  console.log('post');
  console.log(req.files);
  console.log(req.body.name);
  // fs.renameSync(req.files[0].path, req.body.name)
  res.send("Received POST Data!");
});

module.exports = router;
