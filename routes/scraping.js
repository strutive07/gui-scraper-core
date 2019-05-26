const express = require('express');
const router = express.Router();
const json_parser = require('../core/json_parser');

router.get('/health_check', (req, res, next) => {
    res.status(200).json({
        status: 200,
        data: ['ok']
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
