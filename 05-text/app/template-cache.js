define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        $body = $('body'),
        cache = {},
        prefix = 'template-';
        
    var templates = [
        require('text!tpl/layout.html'),
        require('text!tpl/content.html'),
        require('text!tpl/menu.html')
    ];
    
    _.each(templates, function (markup) {
        $(markup).appendTo($body);
    });
    
    return function (key) {
        var cacheKey = prefix + key,
            template = cache[cacheKey];
        
        if (!template) {
            template = _.template($('#' + cacheKey).html());
            cache[cacheKey] = template;
        }
        
        return template;
    };
});
