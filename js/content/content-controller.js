module.exports = function(myApp) {
  myApp.controller('ContentController', [ '$scope', ($scope) => {
    $scope.headline = 'Thanks for visiting';
    $scope.byline = 'This page is no longer active, please go to';

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

    $scope.bylineCTA = new CTA('erikgomez.co', 'https://goo.gl/0UngW1', undefined);
  }]);
};
