Package.describe({
  name: 'osxi:jit',
  version: '2.0.1',
  summary: 'JIT (JavaScript InfoVis Toolkit) packaged for Meteor',
  git: 'https://github.com/osxi/meteor-jit.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('jit-yc.js', 'client');
  api.addFiles('jit.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('osxi:jit');
  api.addFiles('jit-tests.js');
});
