const express = require('express');
const { register, login } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Rutas protegidas
router.get('/admin-only', protect, checkRole(['admin']), (req, res) => {
    res.json({ message: 'Bienvenido, administrador' });
});

module.exports = router;
