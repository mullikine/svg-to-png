#!/usr/bin/nodejs
// npm install -g svg-to-png
// This one worked. Not sure why.
// cd $NOTES; npm install svg-to-png

var svg_to_png = require('svg-to-png');

var firstarg = process.argv[process.argv.length - 2];
var lastarg = process.argv[process.argv.length - 1];

// console.log(firstarg)
// console.log(lastarg)

// Use grep.app to find how to invoke this
// It uses file path followed by output dir
svg_to_png.convert(firstarg, lastarg) // async, returns promise
.then( function(){
  // Do tons of stuff
});