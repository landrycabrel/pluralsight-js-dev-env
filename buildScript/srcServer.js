import express from 'express';
import path from 'path';
import open from 'open';

// var express = require('express');
// var path = require('path');
// var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config';

var port = 3000;
var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:'+port);
  }
});
