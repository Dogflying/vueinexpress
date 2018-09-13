const express = require('express');
const router = express.Router();

router.get('/seen', (req, res, next) => {
  res.jsonp([{
    id: 1,
    name: "China",
    teachername: "liuxuan",
    period: 12
  }, {
    id: 2,
    name: "China",
    teachername: "liuxuan",
    period: 12
  }, {
    id: 3,
    name: "China",
    teachername: "liuxuan",
    period: 12
  }, {
    id: 4,
    name: "China",
    teachername: "liuxuan",
    period: 12
  }]);
});


module.exports = router;