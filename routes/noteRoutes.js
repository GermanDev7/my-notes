
const express = require('express')
const { protect} = require('../middlewares/authMiddleware');
const { create, getAll, update, remove } = require('../controllers/noteController');

const router = express.Router();

router.get('/', protect, getAll);

router.post('/', protect, create)

router.put('/:id', protect, update);

router.delete('/:id', protect, remove)


module.exports = router;