//masuk dengan ID dan Username dan email yang terdaftar Untuk sementara

const User = require('../models/users');

exports.createUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const newUser = await User.create({ username, email});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, { attributes: ['id', 'username', 'Email'] });
        res.json(user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
