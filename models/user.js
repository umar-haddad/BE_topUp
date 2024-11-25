//inputan buat user
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sqlConfig');

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false

    },
    email   : {
        type: DataTypes.STRING(50),
        defaultValue: false,
        unique: true, 
        validate: {
            isEmail: true,
        }
    }
}, {
    tableName : "user",
});

module.exports = user;
