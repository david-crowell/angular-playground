!function(){angular.module("playground",[])}(),function(){function a(a){var e=this;e.clickedCheckbox=function(){e.data=[],e.hero===!0&&(e.data=e.data.concat(a.getPlaymates("hero"))),e.villain===!0&&(e.data=e.data.concat(a.getPlaymates("villain")))},e.isChecked=function(){return e.hero||e.villain}}angular.module("playground").controller("PlaygroundController",["PlaygroundService",a])}(),function(){function a(a){this.data=a,this.getPlaymates=function(a){var e=[];return angular.forEach(this.data,function(n){a&&n.type===a&&e.push(n.name)}),e}}var e=[{type:"hero",name:"Batman"},{type:"hero",name:"Robin"},{type:"hero",name:"Dave Grohl"},{type:"villain",name:"Lex Luthor"},{type:"villain",name:"The Joker"},{type:"villain",name:"The Penguin"},{type:"villain",name:"Cancer"}];angular.module("playground").service("PlaygroundService",["DataService",a]),angular.module("playground").value("DataService",e)}();