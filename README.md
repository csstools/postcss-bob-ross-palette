# Bob Ross Palette

<img align="right" width="135" height="95" src="http://postcss.github.io/postcss/logo-leftp.png" title="Philosopher’s stone, logo of PostCSS">

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[Bob Ross Palette] allows you to use [Bob Ross]’ [Color Palette] in CSS. In this world, everything can be happy.

This is probably the greatest thing to happen in my life - to be able to share this with you. I sincerely wish for you every possible joy life could bring.

![Bob Ross](https://cloud.githubusercontent.com/assets/188426/11495888/9ce081a0-97dc-11e5-87f9-6c3da8bedf86.png)

> Everything is happy if you choose to make it that way.

```css
/* before */

.happy-little-trees {
	background-color: titanium-white;
	color: prussian-blue;
}

/* after */

.happy-little-trees {
	background-color: #ffffff;
	color: #021e44;
}
```

## Usage

When you do it your way you can go anywhere you choose. You can create the world you want to see and be a part of. You have that power.

Add [Bob Ross Palette] to your build tool:

```bash
npm install postcss-bob-ross-palette --save-dev
```

#### Node

```js
require('postcss-bob-ross-palette').process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Bob Ross Palette] as a PostCSS plugin:

```js
postcss([
    require('postcss-bob-ross-palette')()
]);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Bob Ross Palette] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    return gulp.src('./css/src/*.css').pipe(
        postcss([
            require('postcss-bob-ross-palette')()
        ])
    ).pipe(
        gulp.dest('./css')
    );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Bob Ross Palette] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
    postcss: {
        options: {
            processors: [
                require('postcss-bob-ross-palette')()
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    }
});
```

---

> If what you’re doing doesn’t make you happy - you’re doing the wrong thing.

[ci]:      https://travis-ci.org/jonathantneal/postcss-bob-ross-palette
[ci-img]:  https://img.shields.io/travis/jonathantneal/postcss-bob-ross-palette.svg
[npm]:     https://www.npmjs.com/package/postcss-bob-ross-palette
[npm-img]: https://img.shields.io/npm/v/postcss-bob-ross-palette.svg

[Bob Ross]:      https://www.youtube.com/user/BobRossInc/videos
[Color Palette]: http://thomaspark.co/2015/11/bob-ross-color-palette-in-css/
[Gulp PostCSS]:  https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]:       https://github.com/postcss/postcss

[Bob Ross Palette]: https://github.com/jonathantneal/postcss-bob-ross-palette
