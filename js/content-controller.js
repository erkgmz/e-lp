angular.module('myApp')
  .controller('ContentController', ContentController);

  function ContentController($scope) {
    $scope.headline = 'WEB DEVELOPER.';
    $scope.byline = 'I\'m Erik - creative thinker, passionate learner, and JavaScript developer.';

    class CTA {
      constructor(text, src = '#') {
        this.text = text;
        this.src = src;
      }
    }

    $scope.socialCTAs = [
      new CTA('FACEBOOK', '#fb'),
      new CTA('TWITTER', '#tw'),
      new CTA('LINKEDIN', '#lk'),
      new CTA('GITHUB', '#gh')
    ];

    $scope.contentBlockCTAText = new CTA('LET\'S BUILD');
  }
