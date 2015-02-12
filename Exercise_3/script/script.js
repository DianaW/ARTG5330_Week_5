//Take a moment to set up the drawing environment yourself


//TODO step 1: load and parse data
d3.csv('data/world_bank_2013.csv',
    function(d){
        //accessor function
        //is run for every row in the table
        //with d representing unparsed, unchanged row as is
        //whatever we return is going to replace that
        return {
          name: d.country,
          internetUser: +d.internet_users_per_100,
          gdpPerCap: +d.GDP_per_capita
        };
    },
    function(error,rows){

        //TODO step 2: mine data for max and min


        //TODO step 3: draw with the data

    });
