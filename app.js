const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint dasar
app.get('/', (req, res) => {
    res.send('Halo, ini backend Node.js dengan Express!');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
