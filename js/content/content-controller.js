module.exports = function(myApp) {
  myApp.controller('ContentController', [ '$scope', ($scope) => {
    $scope.headline = 'Hi, I\'m Erik.';
    $scope.byline = 'Creative thinker, JavaScript whisperer, and Web Developer in Bakersfield, CA';

    class CTA {
      constructor(text, src = null, mailTo = null, logo = null) {
        this.text = text;
        this.logo = logo;
        this.hyperText = {
          src: src,
          mailTo: mailTo
        };
      }
    }

    $scope.socialCTAs = [
      new CTA('TWITTER', 'https://twitter.com/egomez2040', undefined, 'twitter'),
      new CTA('GITHUB', 'https://github.com/erkgmz', undefined, 'github-circle'),
      new CTA('LINKEDIN', 'https://www.linkedin.com/in/erkgmz', undefined, 'linkedin')
    ];

    $scope.contentCTA = new CTA('CONTACT ME', undefined,'e@erikgomez.co');
  }]);
};
