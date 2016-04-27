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

.controller('commentCtrl' ,['$scope',function($scope){

$scope.form = {} ;

$scope.addComment = function(){
    $scope.comments.push($scope.form);
    $scope.form = {};
}
 $scope.comments = [
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
}])

.controller('annonceCtrl', function($scope,$state) {
$scope.annonces = [
  {
  title : "MEDECIN CARDIOLOGUE H/F",
  content : "Remplacement du vendredi 29 avril (17h) jusqu'au lundi 2 mai (8h) Rémunération  sur la totalité du remplacement 1500 € net Logé sur place Frais de déplacement rembo...",
  department : "Bourgogne 24"
  },
  {
    title : "aller les bleus",
    content :"testetstestetstets",
    department :"NPDC 59 "
  }
];
});

// .controller('collaborationCtrl'), function($scope,$state) {
//
//   $scope.collaboration = {}
//
//
//   } ;
