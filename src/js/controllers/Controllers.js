(function() {
  function playgroundController(playgroundService) {
    var vm = this;
    vm.clickedCheckbox = function() {
      vm.data = [];
      if(vm.hero === true) {
        vm.data = vm.data.concat(playgroundService.getPlaymates("hero"));
      }
      if(vm.villain === true) {
        vm.data = vm.data.concat(playgroundService.getPlaymates("villain"));
      }
    };
    vm.isChecked = function() {
      return vm.hero || vm.villain;
    };
  }
  angular.module("playground").controller("PlaygroundController", ["PlaygroundService",playgroundController]);
})();
