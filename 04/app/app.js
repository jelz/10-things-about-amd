define(['underscore'], function (_) {
    
    var names = ['Jan', 'Jakub', 'Jarek', 'Jędrzej'];
    
    var scream = function (s) {
        return s.toUpperCase() + '!!!';
    };
    
    return {
        start: function () {
            _.each(names, function (name) {
                console.log(scream(name));
            });
        }
    };
});
