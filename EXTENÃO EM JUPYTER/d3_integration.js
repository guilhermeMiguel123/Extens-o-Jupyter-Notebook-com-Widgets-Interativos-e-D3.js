define([
    'nbextensions/main',
    'https://d3js.org/d3.v7.min.js'
], function(
    extension,
    d3
) {

    function integrate_d3() {
        extension.load_ipython_extension();

       
        var cell = Jupyter.notebook.insert_cell_at_index('code', Jupyter.notebook.ncells());

        
        cell.set_text(`
            var data = "Insira uma string aqui";

            var vowels = data.match(/[aeiou]/gi);
            var vowelCounts = {};
            vowels.forEach(function(vowel) {
                vowelCounts[vowel] = (vowelCounts[vowel] || 0) + 1;
            });

            var svg = d3.select(element.get(0)).append('svg')
                .attr('width', 400)
                .attr('height', 200);

            svg.selectAll('rect')
                .data(Object.entries(vowelCounts))
                .enter()
                .append('rect')
                .attr('x', function(d, i) { return i * 50; })
                .attr('y', function(d) { return 200 - d[1] * 10; })
                .attr('width', 40)
                .attr('height', function(d) { return d[1] * 10; })
                .attr('fill', 'teal');

            svg.selectAll('text')
                .data(Object.entries(vowelCounts))
                .enter()
                .append('text')
                .text(function(d) { return d[0] + ': ' + d[1]; })
                .attr('x', function(d, i) { return i * 50 + 15; })
                .attr('y', function(d) { return 200 - d[1] * 10 - 5; })
                .attr('fill', 'white');
        `);


        cell.execute();

    }

    return {
        integrate_d3: integrate_d3
    };
    
    
});