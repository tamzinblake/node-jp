#!/usr/bin/env node
/* global process require */

var util = require('util')

var data = ''

process.stdin.setEncoding('utf8')

process.stdin.on('readable' ,function () {
  var chunk = process.stdin.read()
  if (chunk !== null) {
    data += chunk
  }
})

process.stdin.on('end' ,function () {
  try {
    var json = JSON.parse(data)
    process.stdout.write(util.format('%j' ,json))
  }
  finally {
    process.stdout.write('\n')
  }
})
