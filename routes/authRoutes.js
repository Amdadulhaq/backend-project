const express = require('express');
const { getToken, postBody } = require('../controllers/authController');

const router = express.Router();

router.get('/token', getToken);
router.post('/body', postBody);

module.exports = router;
