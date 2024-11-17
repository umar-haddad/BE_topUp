#!/usr/bin/env node

const app = require('../app');
const http = require('http');


const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

logger.info('connected to port ' + port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on port ${port}`));