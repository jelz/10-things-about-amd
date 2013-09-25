define([
    'jquery', 'i18n!nls/labels', 'i18n!nls/messages'
], function (
    $, labels, messages
) {
    return {
        start: function () {
            $('#change')
                .text(labels.change_lang)
                .on('click', function () {
                    var current = localStorage.getItem('locale') || 'en';
                    var next = 'en' === current ? 'pl' : 'en';
                    localStorage.setItem('locale', next);
                    window.location.reload();
                })
            
            $('#show_message')
                .text(labels.show_message)
                .on('click', function () {
                    alert(messages.hello);
                });
        }
    };
});
