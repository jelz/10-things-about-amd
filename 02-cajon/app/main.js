require.config({
    paths: {
        underscore: '../bower_components/underscore-amd/underscore',
        jquery: '../bower_components/jquery/jquery',
        moment: '../bower_components/momentjs/moment'
    }
});

require(['jquery', 'common-js-style'], function ($, clock) {
    $(function () {
        clock.start();
    });
});
