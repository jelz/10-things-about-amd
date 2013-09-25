require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    },
    packages: [
        'bootstrap', {
            name: 'bootstrap',
            location: '../bower_components/bootstrap/js'
        }
    ],
    shim: {
        bootstrap: ['jquery']
    }
});

require(['jquery', 'app'], function ($, app) {
    $(function () {
        app.start();
    });
});
