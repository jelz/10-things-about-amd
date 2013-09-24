define(function (require) {
    var cat = require('cat');
    
    return {
        name: 'Alice',
        haveWhat: function () {
            console.log('I\'m ' + this.name);
            console.log('I have ' + cat.name);
        }
    }
});
