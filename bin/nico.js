#! /usr/bin/env node

var nico = require('..');

var argvBool = !process.argv[2] || process.argv[2] === 'help';
argvBool ? nico.help() : nico.fetch(process.argv[2]);

