const argv = require('yargs').argv;
const gulp = require('gulp');

const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins({
	scope: ['devDependencies']
});

const folder = argv.compress ? 'dist' : 'www';

const options = {
	argv,
	folder,
	pattern : ['gulp/**/*.js'],
	env : argv.compress ? 'production' : 'testing',
	bowerDirectory : './bower_components',
	devPaths : {
		base      : 'src/',
		baseApp   : 'src/app',
		allFiles  : 'src/app/**/*',
		index     : 'src/index.html',
		fonts     : 'src/assets/fonts/**/*',
		images    : 'src/assets/images/**/*',
		styles    : 'src/assets/styles/**/*.less',
		baseStyle : 'src/assets/styles/main.less',
		scripts   : 'src/app/**/*.js',
		templates : 'src/app/**/*.html'
	},
	distPaths : {
		app      : `${folder}/app`,
		allFiles : `${folder}/**/*`,
		styles   : `${folder}/assets/styles`,
		images   : `${folder}/assets/images`,
		fonts    : `${folder}/assets/fonts`
	}
}

require('load-gulp-tasks')(gulp, options, plugins);