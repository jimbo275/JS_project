// from data.js
console.log(data)

const tableData = data;
// get table references with d3.select()
const tbody = d3.select("tbody");

// clear out any existing data in tbody by setting the .html() to an empty string
tbody.html("");

data.forEach(buildTable);

// define a function called buildTable that takes an argument called data
// the job of this function is to parse out the data and create an html table
function buildTable(data) {
    // console.log(data);
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {

        var cell = row.append("td");
        cell.text(value);
    });
};

// Select the button
var button = d3.select("#filter-btn");

// define a function handleClick() that takes no arguments
button.on("click", handleClick);

// this function triggers when the button is clicked
function handleClick() {
    d3.select("tbody").html("");

    // Grab the #datetime value from the filter with d3.select().property()
    var date = d3.select('#datetime');
    var dateValue = date.property('value');


    if (dateValue === "") {
        data.forEach(buildTable);

    } else {
        var filteredData = tableData.filter(sightingEvent => sightingEvent.datetime === dateValue);
        // console.log(filteredData);
        filteredData.forEach(buildTable);

    }
}