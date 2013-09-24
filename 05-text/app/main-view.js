define(function (require) {
    var $ = require('jquery'),
        t = require('template-cache');
    
    var menu = ['About us', 'Offer', 'Contact'];
    
    var products = [
        { name: 'RequireJS', desc: 'Best AMD loader ever' },
        { name: 'r.js', desc: 'Best AMD optimizer ever' },
        { name: 'Almond', desc: 'AMD loader for production use' }
    ];  
    
    return {
        appendToBody: function () {
            $('body').append(t('layout')());
            $('.header').append(t('header')());
            $('.footer').append(t('footer')());
            $('.sidebar').append(t('menu')({ menu: menu }));
            $('.content').append(t('content')({ products: products }));
        }
    };  
});
