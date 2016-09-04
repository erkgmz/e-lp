# My Website
Checkout my site at [erikgomez.co](http://erikgomez.co/)

## Technologies used
This is my personal website. I chose to develop this as a technology demonstration and portfolio piece.

I decided to use this design because of its simplicity and scalability. I plan on adding About, Work, Contact, and Portfolio sections in the future.

The technologies used in the development of this site include:

* HTML, CSS, JavaScript
* Bootstrap
* ES6 features
* Node.js/NPM
* Angular.js 1.5.8
  * Angular Animate 1.5.8
  * Angular UI Bootstrap
  * Angular Material Design
* Webpack
* Sass
* Babel
* Git
* Trello

### Angular 1.5.8
controller/function exports/ index.js files/ angular bootstrap/ angular 1.5/ inline injection

The Angular module lives in `./js/index.js`, where we are importing Angular, Angular Animate, and Angular UI Bootstrap using ___ES6 syntax___ and injecting ui.bootstrap & ngAnimate dependencies.

Webpack default behavior looks for _index_ files in paths that end inside a directory.

For example:

```javascript
require('./content')(app);
```

Since no specific file is mentioned, Webpack will go into the `./content` directory and look for an _index_ file. I decided to use index files so I can `require` in files synchronously and keep code maintainable.

The controller in `./js/content/content-controller.js` exports a function that takes 1 argument. This function is called in `./js/content/index.js` and passes a reference to the Angular module from `./js/index.js` as an argument.

We also pass in the `$scope` object via [Inline Array Annotation](https://docs.angularjs.org/guide/di) so we can expose our variables for use in the HTML.

[Angular Animate documentation](https://docs.angularjs.org/api/ngAnimate)

[Angular UI Bootstrap documentation](https://angular-ui.github.io/bootstrap/)

[Angular Material Design Icons](https://klarsys.github.io/angular-material-icons/#)

### Webpack
To generate a bundle file in `./public` run `webpack` in root directory.

To generate minified bundle file in `./public`  run `webpack -p` in root directory.

Run `webpack-dev-server` in root directory to run the `content-base` on `http://localhost:8080/webpack-dev-server`. The content-base is configured in the `webpack.config.js` file, in this case the content base is `./public`

You can also simply run `npm start` which will then run `webpack-dev-server --inline --hot`, then navitgate to `http://localhost:8080/index.html`.

Documentation for [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html).

All output is being added to the `./public` directory.

### SASS
Edit styles in `/css/main.scss`.

Compile sass into css by running `sass main.scss:main.css` from `/css` directory.

You will need to re-run `webpack` to generate bundle file with new styles from the root directory.

### Setup
To get started, fork this repo and clone a copy on your local machine.

Run `npm install` to install all npm packages and dev dependencies.

Run `npm start` to start the webpack-dev-server, and navigate to `http://localhost:8080/index.html` in your browser.

##### Editing CSS
This project uses SASS to compile CSS. Edits to styles must be done in `css/main.scss`.

In order to compile CSS stylesheet run `sass main.scss:main.css` from within `css/` folder.

### Future Edits
- Configure Webpack to compile SASS files into CSS using the Webpack's sass-loader & node-sass loaders instead of running `sass` command from terminal each time a new stylesheet needs to be generated.

### Bugs
- Background image not cropping correctly when switching from portrait to landscape modes on mbile devices.
