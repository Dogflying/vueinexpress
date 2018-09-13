const express = require('express');
const router = express.Router();

router.get('/seen', (req, res) => {
    res.send('user');
});

module.exports = router;
