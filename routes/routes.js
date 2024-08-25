const express = require('express');
const { postData, getOperationCode } = require('../controllers/controller');
const router = express.Router();

router.post('/bfhl', postData);
router.get('/bfhl', getOperationCode);

module.exports = router;