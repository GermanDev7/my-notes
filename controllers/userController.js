const { registerUser, loginUser } = require('../services/userService');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await registerUser(username, email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, accessToken, refreshToken } = await loginUser(email, password);
        res.json({ user, accessToken, refreshToken });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = { register, login };
