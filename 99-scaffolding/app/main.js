require.config({
    paths: {
        underscore: '../bower_components/underscore-amd/underscore'
    }
});

require(['app'], function (app) {
    app.start();
});
