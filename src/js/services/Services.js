(function() {
  var data = [
    {
      "type":"hero",
      "name":"Batman",
    },
    {
      "type":"hero",
      "name":"Robin",
    },
    {
      "type":"hero",
      "name":"Dave Grohl"
    },
    {
      "type":"villain",
      "name":"Lex Luthor"
    },
    {
      "type":"villain",
      "name":"The Joker"
    },
    {
      "type":"villain",
      "name":"The Penguin"
    },
    {
      "type":"villain",
      "name":"Cancer"
    }
  ];
  function playgroundService(dataService) {
    this.data = dataService;
    this.getPlaymates = function (type) {
      var output = [];
      angular.forEach(this.data, function (playmate) {
        if (type && playmate.type === type) {
          output.push(playmate.name);
        }
      });
      return output;
    }
  }
  angular.module("playground").service("PlaygroundService", ["DataService",playgroundService]);
  angular.module("playground").value("DataService",data);
})();
