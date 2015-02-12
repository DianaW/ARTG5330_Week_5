/* Find the width and height of the .canvas elements
   Note that there are more than 1
 */

var canvasWidth = $('.canvas').width(),
    canvasHeight = $('.canvas').height();
console.log(canvasWidth, canvasHeight);
var margin = {t:20,r:20,b:20,l:20};
var plotWidth = canvasWidth - margin.l - margin.r,
    plotHeight = canvasHeight - margin.t - margin.b;

/* Ignore this part; the purpose is to draw some axes to guide our drawing */
d3.selectAll('.canvas')
    .each(appendGuide);

/*TODO: Part 1 */


/*TODO: Part 2 */


/*TODO: Part 3 */
//Hint: think about different ways of structuring the DOM

function appendGuide(d,i){
    //Check this out in the console
    console.log(i, this);

    var plot = d3.select(this)
        .append('svg')
        .attr('width',canvasWidth)
        .attr('height',canvasHeight)
        .append('g')
        .attr('transform','translate('+margin.l+','+margin.t+')')
        .attr('class','plot-'+i);

    plot.append('rect')
        .attr('width',plotWidth)
        .attr('height',plotHeight)
        .style('fill','none')
        .style('stroke','#fff')
        .style('stroke-width','2px');

    for(var x = 0; x < plotWidth; x+=50){
        plot.append('line')
            .attr('class','tick x')
            .attr('x1',x)
            .attr('x2',x)
            .attr('y1',0)
            .attr('y2',plotHeight);
    }
    for(var y=0; y < plotHeight; y+=50){
        plot.append('line')
            .attr('class','tick y')
            .attr('x1',0)
            .attr('x2',plotWidth)
            .attr('y1',y)
            .attr('y2',y);
    }
}