//masuk dengan ID dan Username Untuk sementara

const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { username, isVip } = req.body;
        const newUser = await User.create({ username, is_vip: isVip });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, { attributes: ['id', 'username', 'is_vip'] });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
