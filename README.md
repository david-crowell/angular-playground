# AngularScaffold
Basic scaffold for building Angular apps, using Node tools.

Pre-installation steps:
```
npm install -g bower
npm install -g jasmine
npm install -g jasmine-core
npm install -g karma
npm install -g gulp
npm install -g phantomjs-prebuilt 
```
Note: you only need to do this once on a given machine. -g installs these tools globally.

Known problem: need to deal with the angular-html preprocessor somehow. Otherwise, this will cause problems if we try to test directives & template code.

Download this scaffold, then run:
```
npm install
bower install
```

Useful commands:
```
gulp: runs build & test
gulp build: copies source into dist
gulp test: runs karma (spec-running tool) & jshint (linter)
gulp autorun: starts a Node server, automatically runs gulp build when source changes, initiates auto-refresh in the browser when dist changes
```
autorun starts up a Node server, generally accessible by pointing your browser to localhost:8080

Note: gulp & gulp test will likely throw an error until you add some specs for it to run.