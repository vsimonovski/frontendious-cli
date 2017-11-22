const express = require('express');
const app = express();

const api = require('./api/api.index');

app.get('/api/hello-world', api.hello);

if (process.env.NODE_ENV === 'prod') {
    app.use(express.static(`${__dirname}/../dist/`));
}

app.listen('3001');
