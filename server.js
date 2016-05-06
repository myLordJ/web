var opbeat = require('opbeat').start({
  appId: process.env.OPBEAT_APPID,
  organizationId: process.env.OPBEAT_ORGID,
  secretToken: process.env.OPBEAT_TOKEN
});

require('dotenv').load();

var gzippo = require('gzippo');
var express = require('express');
var app = express();
 
app.use(gzippo.staticGzip('' + __dirname + '/dist'));
app.listen(process.env.PORT || 3000);