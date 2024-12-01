//masuk dengan ID dan Username dan email yang terdaftar Untuk sementara

const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { username, email, id } = req.body;
        const newUser = await User.create({ username, email, id });
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

// Update user berdasarkan ID
exports.updateUser = async (req, res) => {
    try {
        // Validasi input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { username, email} = req.body; 

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update data user
        user.username = username || user.username;
        user.email = email || user.email;

        // Simpan perubahan ke database
        await user.save();

        // Kirim respons
        return res.status(200).json({
            message: 'User updated successfully',
            data: user
        });
    } catch (error) {
        console.error('Error updating user:', error.message);
        return res.status(401).json({ message: 'Internal server error' });
    }
};


