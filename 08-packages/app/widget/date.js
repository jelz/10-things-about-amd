define(['jquery'], function ($) {
    return function (id) {
        return $([
            '<div id="' + id + '">',
                '<span>' + new Date() + '</span>',
            '</div>'
        ].join(''));
    };
});
