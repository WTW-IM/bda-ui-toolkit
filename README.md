Welcome to your ES UI Guidelines project.
This is a Jekyll served site, that uses Grunt to compile.

### Source Code
es-ui-guidelines
1. ── less/
2. ── js/
3. ── fonts/
4. ── dist/
    1.    ── css/
    2.    ── js/
    3.    ── fonts/
5. ── docs/
6. ── grunt/ (not source, config files for Jekyll serve)

### Getting started
1. Install Node `install npm`
2. Install Grunt `npm install -g grunt-cli`
3. Available Grunt commands:
    1. `grunt dist` (Just compile CSS and JavaScript) Regenerates the /dist/ directory with compiled and minified CSS and JavaScript files. As a Bootstrap user, this is normally the command you want.
    2. `grunt watch` (Watch) Watches the Less source files and automatically recompiles them to CSS whenever you save a change.
    3. `grunt test` (Run tests) Runs JSHint and runs the QUnit tests headlessly in PhantomJS.
    4. `grunt docs` (Build & test the docs assets) Builds and tests CSS, JavaScript, and other assets which are used when running the documentation locally via jekyll serve. This blows away `bootstrap.less` for some reason, so you'll want to run `grunt dist` afterwards.
    5. `grunt cssmin:docs` this will simply recompile the css for the Docs themselves. Useful for after you make updates to `docs.css` for example.
    6. `grunt build-glyphicons-data` Re/builds the `glyphicons.yml` file that populates the list that appears on the /media/ page.


### Running Jekyll on C9.io
1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v3.0.x).
2. Install the Ruby-based syntax highlighter, [Rouge](https://github.com/jneen/rouge), with `gem install rouge`.
3. From the root directory, run `jekyll serve --host $IP --port $PORT --baseurl ''` in the command line.
4. Watch for a notification for C9.io with link that will open in new browser tab, and voilà.
5. Edit Gruntfile.js lines 166 & 178 to compile .css files into /docs/dist/css under the _site directory so you can see the changes (not sure if there is a smarter way)
6. In separate command window, run `grunt watch` to complile the less file changes.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

### Pushing to AWS s3 ["Production"](prototypes-wtw.net)
1. Install s3_website, update s3_website.yml to point to s3
2. From ~/workspace, run `s3_website push` to sync files.
3. More documentation is available on the [s3_website github page](https://github.com/laurilehmijoki/s3_website).