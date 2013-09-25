require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    },
    packages: ['util', 'widget']
});

require(['jquery', 'app'], function ($, app) {
    $(function () {
        app.start();
    });
});
