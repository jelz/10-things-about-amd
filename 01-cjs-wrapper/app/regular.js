define([
    'underscore', 'jquery', 'moment'
], function (
    _, $, moment
) {
    var updateClock = _.throttle(function () {
        var t = moment().format('H:mm:ss')
        $('#clock1').text(t);
    }, 1000);
    
    return {
        start: function () {
            updateClock();
            setInterval(updateClock, 990);
        }
    };
});
