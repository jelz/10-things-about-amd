require.config({
    paths: {
        underscore: '../bower_components/underscore-amd/underscore',
        jquery: '../bower_components/jquery/jquery',
        moment: '../bower_components/momentjs/moment'
    }
});

require(['jquery', 'regular', 'wrapper'], function ($, regular, wrapper) {
    $(function () {
        regular.start();
        wrapper.start();
    });
});
