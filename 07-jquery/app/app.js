define(['jquery', 'jquery.payment'], function ($) {
    return {
        start: function () {
            $('#cc').payment('formatCardNumber');
        }
    };
});
