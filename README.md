## 10 things about [AMD](http://requirejs.org/docs/whyamd.html)

### TOC

1. __Simplified CommonJS Wrapper__ - don't maintain long list of dependencies
2. __Cajon__ - get rid of module wrapper at all
3. __Circular Dependencies__ - avoid, detect and live with those
4. __Almond__ - don't keep XHR loading code when in production
5. __text!__ - don't store all your templates in one template überfile (applies to any other text resource, too)
6. __i18n!__ - localize JS apps right way
7. __jQuery__ - use jQuery in an AMD manner
8. __Packages__ - find the best place for every piece of code (todo)
9. __Bootstrap__ - customize your libraries with no effort (applies to many other libs, too)
10. __browserify__ - know alternative

As you can see: work is in progress :)

### Server

You need running webserver to be able to use XHR. Just jump to repository root, type `python -m SimpleHTTPServer` and visit `localhost:8000`.

### Binaries

First - grab node.js from [nodejs.org](http://nodejs.org). Then:

* bower: `npm install -g bower`
* madge: `npm install -g madge`
* graphviz: `aptitude install graphviz` (Debian/Ubuntu)
* r.js: `npm install -g requirejs`
* browserify: `npm install -g browserify`

### Vendors

If directory contains (can be both):

* `bower.json`, then install vendors with `bower install`
* `package.json`, then install vendors with `npm install`
