app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";
    $scope.left = function() {
        return 200 - $scope.message.length;
    };
    $scope.clear = function() {
        $scope.message = "";
    };
    $scope.save = function() {
        alert("Note Saved");
    };
    // onTextChange(value)
    // {
    //   this.textValue = value;
    //   if(this.textValue == '')
    //   {
    //     this.message="Textbox is empty !!!";
    //   }
      
    // }
});