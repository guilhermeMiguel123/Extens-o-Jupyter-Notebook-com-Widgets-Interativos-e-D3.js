define([
    'nbextensions/main',
    'nbextensions/widgets'
], function(
    extension,
    widgets
) {

    function load_widgets() {
        extension.load_ipython();

        var slider = widgets.FloatSlider({
            value: 0,
            min: 0,
            max: 10,
            steo: 0.1,
            description: 'Valor:'
        });

        slider.on('change', function(){
            var value = slider.value;
            var square = value * value;
            alert('O quadrado de' + value + 'e' + square);
        });
        


        Jupyter.notebook.get_cell(0).element.append(slider.el);

    }

    return {
        load_ipython_extension:load_ipython_extension
    };
    
    
});