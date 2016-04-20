angular.module('app.controllers', [])

.controller('remplacementCtrl', function($scope){

})

.controller('collaborationCtrl', function($scope) {

})

.controller('cloudCtrl', function($scope) {

})

.controller('mDecinCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})


.controller('medecinCtrl', function($scope,$state) {

})

.controller('myCtrl' ,['$scope',function($scope){

$scope.form = {} ;

$scope.addArticle = function(){
    $scope.articles.push($scope.form);
    $scope.form = {};
}
 $scope.articles = [
    {
      title: "Recherche un champion",
      content :' Annonce,Annonce,Annonce,Annonce,Annonce,Annonce',
      by: 'Quentin le king'
    },
   {
     title: "Recherche un champion",
     content :'Second comment',
     by : 'Daniel le Bg'
   }
 ];

}]);
