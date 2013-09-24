define(function (require, exports, module) {
    var cat = require('cat');
    console.log('Alice\'s cat object: ', cat);
    
    exports.name = 'Alice';
    exports.haveWhat = function () {
        console.log('I\'m ' + this.name);
        console.log('I have ' + cat.name);
    };
});
