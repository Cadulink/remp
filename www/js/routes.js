angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
    $stateProvider
  .state('menu.remplacement', {
    url: '/remplacement',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement.html',
        controller: 'remplacementCtrl'
      }
    }
  })

  .state('menu.collaboration', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/collaboration.html',
        controller: 'collaborationCtrl'
      }
    }
  })

  .state('menu.patient', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patient.html',
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.medecin', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/medecin.html',
        controller :'medecinCtrl'
      }
    }
  })

  .state('menu.cardiologue', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/cardiologue.html',
      }
    }
  })

  .state('menu.dentiste', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/dentiste.html',
      }
    }
  })

  .state('menu.infirmier', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/infirmier.html',
      }
    }
  })

  .state('menu.kinesitherapeute', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/kinesitherapeute.html',
      }
    }
  })

  .state('menu.liberal', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/liberal.html',
      }
    }
  })

  .state('home', {
    url: '/root',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })


  $urlRouterProvider.otherwise('/root') })
