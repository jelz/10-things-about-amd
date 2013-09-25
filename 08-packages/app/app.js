define(function (require) {
    var scream = require('util/scream'),
        whisper = require('util/whisper'),
        widget = require('widget'),
        $body = $('body');
        
    return {
        start: function () {
            widget.input('text', 'scream-widget')
                .appendTo($body)
                .find('input').val(scream('scream widget'));
            
            widget.input('text', 'whisper-widget')
                .appendTo($body)
                .find('input').val(whisper('WHISPER widget'));
            
            widget.date('time-widget')
                .appendTo($body);
        }
    };
});
