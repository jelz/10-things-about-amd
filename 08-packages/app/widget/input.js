define(['jquery'], function ($) {
    return function (type, id) {
        return $([
            '<div id="' + id + '">',
                '<input type="' + type + '">',
            '</div>'
        ].join(''));
    };
});
