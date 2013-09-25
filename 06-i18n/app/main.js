require.config({
    paths: {
        i18n: '../bower_components/requirejs-i18n/i18n',
        jquery: '../bower_components/jquery/jquery'
    },
    config: {
        i18n: {
            locale: localStorage.getItem('locale') || 'en'
        }
    }
});

require(['jquery', 'app'], function ($, app) {
    $(function () {
        app.start();
    });
});
