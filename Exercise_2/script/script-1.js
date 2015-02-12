//Now let's determine the size of the plots
var margin = {t:200,r:200,b:300,l:200},
    width = $('.canvas').width() - margin.l - margin.r,
    height = $('.canvas').height() - margin.t - margin.b;

//Set up SVG drawing elements
var canvas = d3.select('.canvas')
    .append('svg')
    .attr('width', width + margin.l + margin.r)
    .attr('height', height + margin.t + margin.b)
    .append('g')
    .attr('transform','translate('+margin.l+','+margin.t+')');

console.log("Start to load data...")

//Now we have load in data
//...
d3.csv('data/data.csv',
    function(d){
        //write an accessor function here
    },
    function(error,rows){
        console.log("Data is loaded");
    });

console.log("Starting drawing with data");


