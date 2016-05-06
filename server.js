// OPBEAT_APPID=a100223e18
// OPBEAT_ORGID=707bc536d3794808a2d89bec776dac46
// OPBEAT_TOKEN=b560dd51115180f17322ae8776aaa2deba619a69
var opbeat = require('opbeat').start({
  appId: process.env.OPBEAT_APPID,
  organizationId: process.env.OPBEAT_ORGID,
  secretToken: process.env.OPBEAT_TOKEN
});

var gzippo = require('gzippo');
var express = require('express');
var app = express();
 
app.use(gzippo.staticGzip('' + __dirname + '/dist'));
app.listen(process.env.PORT || 3000);