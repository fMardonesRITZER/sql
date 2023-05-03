const express = require ('express');
const router = express.Router();
const movieController = require('../controllers/movies');


router.get('/', movieController.list);



module.exports = router;
