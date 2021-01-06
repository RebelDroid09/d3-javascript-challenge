// @TODO: YOUR CODE HERE!
var  dataset;

d3.json("./assets/data/data.json").then(function(data)
{ 
    dataset = data;

    console.log(data);

    subjectNames = dataset.names;

    var dropdown = d3.select("#selDataset");

    var subjectOptions = dropdown.selectAll('option')
        .data(subjectNames)
        .enter()
        .append("option")
        .attr("value", function(d) {
            return d;
        })
        .text(function(d) {
            return d;
        }); 

    updatePlotly();
});