var dates = require('dates');
var DateDiff = require('date-diff');
console.log("Books time estimator with no dates");

var numPages = 260;
var numDaysAvailable = 5;
var startingFromPage = 101;

pagesPerDay = (numPages - startingFromPage) / numDaysAvailable;

console.log("Pages: " + numPages);
console.log("Starting from: " + startingFromPage);
console.log("Number of days available: " + numDaysAvailable);
console.log("Pages per day: " + pagesPerDay);


console.log("Books time estimator with dates");

var numPages = 260;
var numDaysAvailable = 0;
var startingFromPage = 101;

//Format: mm/dd/yyyy
var startingDate = "08/17/2020";
var endingDate = "08/22/2020";

var startDate = new Date(startingDate);
var endDate = new Date(endingDate);


var diff = new DateDiff(endDate, startDate);
var numDaysAvailable = diff.days();

pagesPerDay = (numPages - startingFromPage) / numDaysAvailable;

console.log("Pages: " + numPages);
console.log("Starting from: " + startingFromPage);
console.log("Number of days available: " + numDaysAvailable);
console.log("Pages per day: " + pagesPerDay);