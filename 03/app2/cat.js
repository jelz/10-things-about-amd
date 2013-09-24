define(function (require, exports, module) {
    var alice = require('alice');
    console.log('Cat\'s alice object:', alice);
    
    exports.name = 'Cat George';
    exports.haveWhat = function () {
        console.log('I\'m ' + this.name);
        console.log('I have ' + alice.name);
    };
    exports.sayWhatAliceSays = function () {
        console.log('She says:');
        alice.haveWhat();
    };
});
