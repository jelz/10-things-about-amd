var $ = require('jquery-browserify'),
    moment = require('moment');

var updateClock = function () {
    var t = moment().format('H:mm:ss');
    $('#clock').text(t);
};

updateClock();
setInterval(updateClock, 1000);
