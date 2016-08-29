module.exports = function(myApp) {
  myApp.controller('ContentController', [ '$scope', ($scope) => {
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
      new CTA('TWITTER', 'https://twitter.com/egomez2040'),
      new CTA('GITHUB', 'https://github.com/erkgmz'),
      new CTA('LINKEDIN', 'https://www.linkedin.com/in/erkgmz')
    ];

    $scope.contentCTA = new CTA('CONTACT ME', undefined,'e@erikgomez.co');
  }]);
};
