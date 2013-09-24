define(function (require) {
    var alice = require('alice');
    
    return {
        name: 'Cat George',
        haveWhat: function () {
            console.log('I\'m ' + this.name);
            console.log('I have ' + alice.name);
        }
    };
});
