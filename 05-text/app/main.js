require.config({
    paths: {
        underscore: '../bower_components/underscore-amd/underscore',
        jquery: '../bower_components/jquery/jquery',
        text: '../bower_components/requirejs-text/text'
    }
});

require(['jquery', 'main-view'], function ($, mainView) {
    $(function () {
        mainView.appendToBody();
    });
});
