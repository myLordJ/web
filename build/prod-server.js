const gzippo = require('gzippo');
const express = require('express');
const app = express();

app.use(gzippo.staticGzip(__dirname.replace('/build', '/docs')));
app.listen(process.env.PORT || 3000);
