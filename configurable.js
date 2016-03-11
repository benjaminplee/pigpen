#!/usr/bin/env nodejs

var fs = require("fs");
var SpahQL = require("spahql");

var args = process.argv.slice(2);
var file = args[0];
var product_selector = '/menu_categories/data/menuCategories/*/sections/*/productGroups/*/products/*'

var data = JSON.parse(fs.readFileSync(file));
var db = SpahQL.db(data);

var selection = db.select(product_selector);
var values = selection.values();

var d = "|";

function isNonEmpty(x) {
	return x !== null && x.length > 0;
}

for(var i = 0; i < values.length; i++) {
	var product = values[i];
	var hasInstructions = isNonEmpty(product.instructionList);
	var hasSauces = isNonEmpty(product.allowedSauces);
	var hasToppings = isNonEmpty(product.allowedToppings);
	var hasSides = isNonEmpty(product.complimentarySides);
	var isConfigurable = hasInstructions || hasSauces || hasToppings || hasSides;

	console.log(product.productSKU.sku + d + product.title + d + hasInstructions + d + hasSauces + d + hasToppings + d + hasSides + d + isConfigurable);
}

//console.log(JSON.stringify(values));


