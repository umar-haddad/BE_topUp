//configurasi untuk ke mysql nya 

const { Sequelize } = require('sequelize');
require('dotenv').config();


// Membaca konfigurasi database dari .env
const sequelize = new Sequelize(
    process.env.DB_NAME, // Pastikan ini nama variabel yang benar
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql', 
        logging: false, 
    }
   
);

console.log('Database:', process.env.DB_NAME),
console.log('User:', process.env.DB_USER),
console.log('Host:', process.env.DB_HOST)

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));

// Sinkronisasi database untuk membuat tabel jika belum ada
sequelize.sync({ alter: true }) 
    .then(() => console.log('Database synchronized'))
    .catch(err => console.log('Sync error: ' + err));

module.exports = sequelize;
