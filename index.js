'use strict';

var util = require('util');
var wrapi = require('wrapi');

var endpoints = require('./api/giphy.json');

function giphyWrapi(apiVersion, api_key) {

  if (!api_key) {
    api_key = apiVersion;
    apiVersion = 'v1';
  }
  var opts = {
    qs: {
      api_key: api_key
    },
    headers: {
      'User-Agent': 'giphy-wrapi'
    },
    json: true
  };

  giphyWrapi.super_.call(this,
            'http://api.giphy.com/' + apiVersion + '/',
            endpoints,
            opts);  
};

util.inherits(giphyWrapi, wrapi);
module.exports = giphyWrapi;
