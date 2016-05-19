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


.controller('medecinCtrl', function($scope) {

})

.controller('commentCtrl' ,['$scope',function($scope){

  $scope.form = {} ;

  $scope.addComment = function(){
    $scope.comments.push($scope.form);
    $scope.form = {};
  }
  $scope.comments = [
    {
      title: "Recherche de remplacement",
      content :'Contenu Contenu Contenu Contenu Contenu ContenuContenuContenu Contenu ',
      by: 'John'
    },
    {
      title: "Remplacement 2506",
      content :'Second comment',
      by : 'Daniel  '
    }
  ];
}])


.controller('annonceCtrl', function($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up',
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

    $scope.submit = function(title,description,region){
      $scope.announcements.push(
        {
          title: title ,
            description: description ,
            region: region
          }
      )
    }
    $scope.title = null ;
    $scope.description =  null ;
    $scope.region = null ;
    $scope.announcements = [
      {
        title : "MEDECIN CARDIOLOGUE H/F " ,
        description : "Remplacement du vendredi 29 avril (17h) jusqu'au lundi 2 mai (8h) Rémunération  sur la totalité du remplacement 1500 € net Logé sur place Frais de déplacement rembo... " ,
        region : "Bourgogne 24 ",
      }] ;
  })
