//validasi buat items seperti gambar dan is_active

const Item = require('../models/item');

exports.createItem = async (req, res) => {
    try {
        const { description, image, is_actived } = req.body;
        const newItem = await Item.create({ description, image, is_actived });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        if (req.isVip) {
            // Apply discount or additional benefits if needed
            item.discountedPrice = item.price - (item.price * 0.1); // Example 10% discount for VIP
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
