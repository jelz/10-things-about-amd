## 10 things about [AMD](http://requirejs.org/docs/whyamd.html)

1. __Simplified CommonJS Wrapper__ - don't maintain long list of dependencies
2. __Cajon__ - get rid of wrapper at all
3. __Circular Dependencies__ - avoid, detect and live with
4. __Almond__ - don't keep XHR loading code when in production
5. __text!__ - don't store all your templates in one template überfile (applies to any other text resource, too)

As you can see: work is in progress :)

### Vendors

If directory contains:

1. `bower.json`, then install vendors with `bower install`
2. `package.json`, then install using `npm install`

To install madge as a global binary: `npm install -g madge` (possibly with `sudo`).

r.js optimizer can also be installed using npm. Package name is `requirejs`.
