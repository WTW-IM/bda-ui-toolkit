/*!
 * Bootstrap Grunt task for Glyphicons data generation
 * http://getbootstrap.com
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict';

var fs = require('fs');

module.exports = function generateGlyphiconsData(grunt) {
  // Pass encoding, utf8, so `readFileSync` will return a string instead of a
  // buffer
  var glyphiconsFile = fs.readFileSync('less/glyphicons.less', 'utf8');
  var glyphiconsLines = glyphiconsFile.split('\n');
  
  var glyphiconsLightFile = fs.readFileSync('less/glyphicons-light.less', 'utf8');
  var glyphiconsLightLines = glyphiconsLightFile.split('\n');
  
  var indvMktIconFile = fs.readFileSync('less/indv-mkt-icons.less', 'utf8');
  var indvMktIconLines = indvMktIconFile.split('\n');

  // Use any line that starts with ".glyphicon-" and capture the class name
  //var iconClassName = /^\.(glyphicon-[a-zA-Z0-9-]+)/;
  var iconClassName = /^\.(oe-icon-[a-zA-Z0-9-]+)/;
  var glyphiconsData = '# This file is generated via Grunt task. **Do not edit directly.**\n' +
                       '# See the \'build-glyphicons-data\' task in Gruntfile.js.\n\n';
  var glyphiconsYml = 'docs/_data/glyphicons.yml';
  for (var i = 0, len = glyphiconsLines.length; i < len; i++) {
    var match = glyphiconsLines[i].match(iconClassName);

    if (match !== null) {
      glyphiconsData += '- ' + match[1] + '\n';
    }
  }
  
  var iconLightClassName = /^\.(oe-icon-lt-[a-zA-Z0-9-]+)/;
  var glyphiconsLightData = '# This file is generated via Grunt task. **Do not edit directly.**\n' +
                       '# See the \'build-glyphicons-data\' task in Gruntfile.js.\n\n';
  var glyphiconsLightYml = 'docs/_data/glyphicons-light.yml';
  for (var i = 0, len = glyphiconsLightLines.length; i < len; i++) {
    var match = glyphiconsLightLines[i].match(iconLightClassName);

    if (match !== null) {
      glyphiconsLightData += '- ' + match[1] + '\n';
    }
  }
  
  var indvMktIconName = /\.(?!eot)(?!woff)(?!svg)(?!ttf)(?!icon)([a-zA-Z0-9-]+)/;
  // var indvMktIconName = /^\s*\&\.([a-zA-Z0-9-]+)/;
  var indvMktIconData = '# This file is generated via Grunt task. **Do not edit directly.**\n' +
                       '# See the \'build-glyphicons-data\' task in Gruntfile.js.\n\n';
  var indvMktIconYml = 'docs/_data/indv-mkt-icons.yml';
  for (var i = 0, len = indvMktIconLines.length; i < len; i++) {
    var match = indvMktIconLines[i].match(indvMktIconName);

    if (match !== null) {
      indvMktIconData += '- ' + match[1] + '\n';
    }
  }

  // Create the `_data` directory if it doesn't already exist
  if (!fs.existsSync('docs/_data')) {
    fs.mkdirSync('docs/_data');
  }

  try {
    fs.writeFileSync(glyphiconsYml, glyphiconsData);
    fs.writeFileSync(glyphiconsLightYml, glyphiconsLightData);
    fs.writeFileSync(indvMktIconYml, indvMktIconData);
  } catch (err) {
    grunt.fail.warn(err);
  }
  grunt.log.writeln('File ' + glyphiconsYml.cyan + ' created.');
  grunt.log.writeln('File ' + glyphiconsLightYml.cyan + ' created.');
  grunt.log.writeln('File ' + indvMktIconYml.cyan + ' created.');
};
