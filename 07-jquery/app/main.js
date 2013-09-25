require.config({
    paths: {
        jquery: (function () {
            var local = window.location.host.match(/localhost/);
            var paths = [
                'http://codeorigin.jquery.com/jquery-2.0.3.min',
                '../bower_components/jquery/jquery'];
            return local ? paths.reverse() : paths;
        }()),
        'jquery.payment': '../bower_components/jquery.payment/lib/jquery.payment'
    },
    shim: {
        'jquery.payment': ['jquery']
    }
});

require(['jquery', 'app', 'jquery.fart'], function ($, app) {
    $(function () {
        app.start();
        $('body').fart();
    });
});
