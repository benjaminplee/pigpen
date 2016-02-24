#!/usr/bin/env nodejs

var fs = require("fs");
var SpahQL = require("spahql");

var args = process.argv.slice(2);
var file = args[0];
var selector = args[1];

var data = JSON.parse(fs.readFileSync(file));

var db = SpahQL.db(data);

var selection = db.select(selector);

var values = selection.values();


console.log(JSON.stringify(values));


