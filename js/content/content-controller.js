module.exports = function(myApp) {
  myApp.controller('ContentController', [ '$scope', ($scope) => {
    $scope.headline = 'Hi, I\'m Erik.';
    $scope.byline = 'Web developer and JavaScript whisperer in Bakersfield, CA. My site is currently under construction. Please contact me in the meantime.';

    class CTA {
      constructor(text, src, mailTo, logo) {
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
