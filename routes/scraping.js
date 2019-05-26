const express = require('express');
const router = express.Router();
const json_parser = require('../core/json_parser');
const exec = require('child_process').exec;

router.get('/health_check', (req, res, next) => {
    exec('npm install chromedriver --chromedriver-force-download', function(err, stdout, stderr){
        if (err) {
            res.status(500).json({status: 500, data: error})
        }else{
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            res.status(200).json({
                status: 200,
                data: ['ok']
            });
        }
    });
});

router.post('/run', function(req, res, next) {
  const jsonObject = req.body.jsonObject;
  console.log(jsonObject);
  const parser = new json_parser(jsonObject);
  parser.run()
      .then( output_list =>
          res.status(200).json({status: 200, data: output_list})
      )
      .catch(error =>
          res.status(500).json({status: 500, data: error})
      );
});

module.exports = router;
