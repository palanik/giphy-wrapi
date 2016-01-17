# Giphy API Wrapper

Client interface for accessing [Giphy API](http://api.giphy.com/).

[![NPM version](https://img.shields.io/npm/v/giphy-wrapi.svg?style=flat)](https://www.npmjs.org/package/giphy-wrapi)

## Installation

Install via [npm](https://www.npmjs.org/package/giphy-wrapi)

```bash
npm install giphy-wrapi --save
```

## Usage

Create a client object to connect to Giphy API [endpoints](https://github.com/Giphy/GiphyAPI).

```JS
var giphyWrapi = require('giphy-wrapi');

var client = new giphyWrapi(GIPHY_API_KEY);

// Now you are ready to make API calls to Giphy.
```

Provide parameters and a callback. 

API calls follow this syntax:

`client.apigroup.action(queryString, callback);`

* `queryString` - (*as required*) API method parameters as key-value pairs.

### Examples

#### Search all Giphy GIFs for a word or phrase.
```JS
client.gifs.search(
  {
    q: 'lol cats'
  },
  function(err, data) {
    if (!err) {
      console.log(data);
    } 
  }
);
```

#### Get GIF by ID Endpoint.
```JS
client.gifs.get('feqkVgjJpYtjy', function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```

#### Fetch GIFs currently trending online.
```JS
client.gifs.trending(function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```

#### Get a random sticker from Giphy's sticker collection.
```JS
client.stickers.random(function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```

## API Functions

### gifs
* [gifs.search](https://github.com/Giphy/GiphyAPI#search-endpoint)
* [gifs.get](https://github.com/Giphy/GiphyAPI#get-gif-by-id-endpoint)
* [gifs.list](https://github.com/Giphy/GiphyAPI#get-gifs-by-id-endpoint)
* [gifs.translate](https://github.com/Giphy/GiphyAPI#translate-endpoint)
* [gifs.random](https://github.com/Giphy/GiphyAPI#random-endpoint)
* [gifs.trending](https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint)

### stickers
* [stickers.search](https://github.com/Giphy/GiphyAPI#sticker-search-endpoint)
* [stickers.random](https://github.com/Giphy/GiphyAPI#sticker-roulette-random-endpoint)
* [stickers.trending](https://github.com/Giphy/GiphyAPI#sticker-trending-endpoint)
* [stickers.translate](https://github.com/Giphy/GiphyAPI#sticker-translate-endpoint)

## License

  [MIT](LICENSE)
