var _ = require('underscore'),
    $ = require('jquery'),
    moment = require('moment');

var updateClock = _.throttle(function () {
    var t = moment().format('H:mm:ss');
    $('#clock').text(t);
}, 1000);

module.exports = {
    start: function () {
        updateClock();
        setInterval(updateClock, 1000);
    }
};
