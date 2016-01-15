# AngularScaffold
Basic scaffold for building Angular apps, using Node tools.

Pre-installation steps:
```
npm install -g bower
npm install -g karma
npm install -g gulp
```
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
gulp autorun: starts a Node server, initiates auto-refresh in the browser when dist changes
```