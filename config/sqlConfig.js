//configurasi untuk ke mysql nya 

const { Sequelize } = require('sequelize');
require('dotenv').config();


// Membaca konfigurasi database dari .env
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql', //sesuaiin sama apa yang mau dipakai jenis apa SQL nya 
        logging: false,
    }
);

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));

// Sinkronisasi database untuk membuat tabel jika belum ada
sequelize.sync({ alter: true }) 
    .then(() => console.log('Database synchronized'))
    .catch(err => console.log('Sync error: ' + err));

module.exports = sequelize;
