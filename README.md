## 10 things about [AMD](http://requirejs.org/docs/whyamd.html)

### TOC

1. __Simplified CommonJS Wrapper__ - don't maintain long list of dependencies
2. __Cajon__ - get rid of module wrapper at all
3. __Circular Dependencies__ - avoid, detect and live with those
4. __Almond__ - don't keep XHR loading code when in production
5. __text!__ - don't store all your templates in one template überfile (applies to any other text resource, too)
6. __i18n!__ - localize JS apps right way
7. __jQuery__ - use jQuery in an AMD manner
8. __Bootstrap__ - customize your libraries with no effort (applies to many other libs, too) (todo)
9. __Packages__ - find best place for every piece of code (todo)
10. __browserify__ - know alternative (todo)

As you can see: work is in progress :)

### Vendors

If directory contains:

1. `bower.json`, then install vendors with `bower install`
2. `package.json`, then install using `npm install`

To install madge as a global binary: `npm install -g madge` (possibly with `sudo`).

r.js optimizer can also be installed using npm. Package name is `requirejs`.
