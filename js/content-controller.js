angular.module('myApp')
  .controller('ContentController', ContentController);

  function ContentController($scope) {
    $scope.headline = 'Hi, I\'m Erik.';
    $scope.byline = 'Creative thinker, passionate learner, and front-end JavaScript developer.';

    class CTA {
      constructor(text, src = null, mailTo = null) {
        this.text = text;
        this.hyperText = {
          src: src,
          mailTo: mailTo
        };
      }
    }

    $scope.socialCTAs = [
      // new CTA('FACEBOOK', 'https://www.facebook.com/profile.php?id=100012252583651'),
      new CTA('TWITTER', 'https://twitter.com/?lang=en'),
      new CTA('GITHUB', 'https://github.com/erkgmz'),
      new CTA('LINKEDIN', 'https://www.linkedin.com/in/erkgmz')
    ];

    $scope.contentCTA = new CTA('CONTACT ME', '','e@erikgomez.co');
  }
