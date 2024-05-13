definne([
    'base/js/namespace' ,
    'nbextensions/main',
    'nbextensions/widgets',
    'nbextensions/d3_integrations'


], function(
    Jupyter,
    extension,
    widgets,
    d3_integration
) {
    function load_ipython_extension() {
        extension.load_ipython_extension();
        widgets.load_ipython_extension();
        d3_integration.integrate_d3();
    }

    return {
        load_ipython_extension: load_ipython_extension

    };
});