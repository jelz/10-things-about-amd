define(function (require) {
    var _ = require('underscore'),
        $ = require('jquery'),
        moment = require('moment');
        
    var updateClock = _.throttle(function () {
        var t = moment().format('H:mm:ss');
        $('#clock2').text(t);
    }, 1000);
        
    return {
        start: function () {
            updateClock();
            setInterval(updateClock, 990);
        }
    };
});
