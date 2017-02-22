angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.pastQuestionsAndAnswers', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pastQuestionsAndAnswers.html',
        controller: 'pastQuestionsAndAnswersCtrl'
      }
    }
  })

  .state('menu.onlinePamphelt', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/onlinePamphelt.html',
        controller: 'onlinePampheltCtrl'
      }
    }
  })

  .state('menu.talkToACounselor', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/talkToACounselor.html',
        controller: 'talkToACounselorCtrl'
      }
    }
  })

  .state('menu.aboutTheGCEBoard', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutTheGCEBoard.html',
        controller: 'aboutTheGCEBoardCtrl'
      }
    }
  })

  .state('settings', {
    url: '/page6',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('menu.aboutUs', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});