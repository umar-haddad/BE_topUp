//memasukkan data ke database
const { body, validationResult } = require('express-validator')

const validateUserInput = [
    body('username').isString().isLength({ min: 3 }),
    body('id').isNumeric(),
    body('email').isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// const validateItemInput = [
//     body('description').isString(),
//     body('image').isURL(),
//     body('is_actived').isBoolean(),
//     (req, res, next) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//         next();
//     }
// ];

module.exports = { validateUserInput };
