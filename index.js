console.log("Books time estimator");

var numPages = 260;
var numDaysAvailable = 5;
var startingFromPage = 101;
var pagesPerDay = 0;

pagesPerDay = (numPages - startingFromPage) / numDaysAvailable;


console.log("Pages: " + numPages);
console.log("Starting from: " + startingFromPage);
console.log("Number of days available: " + numDaysAvailable);
console.log("Pages per day: " + pagesPerDay);

