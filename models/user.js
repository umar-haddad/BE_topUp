//inputan buat user
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sqlConfig');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER(50),
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
    tableName : user,
});

module.exports = User;
