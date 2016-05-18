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
    url: '/collaboration',
    views: {
      'side-menu21': {
        templateUrl: 'templates/collaboration.html',
        controller: 'collaborationCtrl'
      }
    }
  })

  .state('menu.pharmacien',{
    url : "/rem_pharmacien",
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/pharmacien.html',
      }
       }
  })

  .state('emploi', {
    url :'/emploi',
    templateUrl :"templates/emploi.html",
  })

  .state('installation', {
    url : '/installation',
    templateUrl : "templates/installation.html",
  })

  .state('menu.patient', {
    url: '/patient',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patient.html',
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.medecin', {
    url: '/rem-medecin',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/medecin.html',
        controller :'medecinCtrl'
      }
    }
  })

  .state('menu.cardiologue', {
    url: '/rem-cardiologue',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/cardiologue.html',
      }
    }
  })

  .state('menu.dentiste', {
    url: '/rem-dentiste',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/dentiste.html',
      }
    }
  })

  .state('menu.infirmier', {
    url: '/rem-infirmier',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/infirmier.html',
      }
    }
  })

  .state('menu.kinesitherapeute', {
    url: '/rem-kinesitherapeute',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/kinesitherapeute.html',
      }
    }
  })


  .state('map', {
    url : '/map',
    templateUrl : "templates/map.html"
  })

  
  .state('menu.liberal', {
    url: '/rem-liberal',
    views: {
      'side-menu21': {
        templateUrl: 'templates/remplacement/liberal.html',
      }
    }
  })

  .state('home', {
    url: '/accueil',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  $urlRouterProvider.otherwise('/accueil') })
