#!/usr/bin/env node

/**
 * Module dependencies.
 */
const app = require('../app');
const http = require('http');
const logger = require('../utils/logger/index');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

logger.info('connected to port ' + port);

/**
 * buat HTTP server.
 */

const server = http.createServer(app);

/**
 * ditampilkan di port yang disediakan, di semua antarmuka jaringan.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalisasikan port menjadi angka, string, atau false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // saluran
        return val;
    }

    if (port >= 0) {
        // port nomor
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port == 'string' ? 'Pipe ' + port : 'Port ' + port;

    // menangani kesalahan listen tertentu dengan pesan santuy
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener untuk menampilkan HTTP.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr == 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    logger.info('Listening on ' + bind);
}