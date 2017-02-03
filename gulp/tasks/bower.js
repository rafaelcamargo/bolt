const bowerFiles = require('main-bower-files');

module.exports = (gulp, options, plugins) => {
	gulp.task('bower:scripts', () => {
		const jsBowerFiles = bowerFiles({
			filter: /\.js$/i,
			paths: {
				bowerDirectory: './bower_components'
			}
		});

		return gulp.src(jsBowerFiles)
			.pipe(
				plugins.concat('dependencies.js')
			)
			.pipe(
				plugins.if(options.argv.compress, plugins.uglify())
			)
			.pipe(
				plugins.if(options.argv.compress, plugins.rev())
			)
			.pipe(
				gulp.dest(options.distPaths.app)
			);
	});

	gulp.task('bower:styles', () => {
		const cssBowerFiles = bowerFiles({
			filter: /\.css$/i,
			paths: {
				bowerDirectory: './bower_components'
			}
		});

		return gulp.src(cssBowerFiles)
			.pipe(
				plugins.concat('bower.css')
			)
			.pipe(
				plugins.cleanCss({compatibility: 'ie8'})
			)
			.pipe(
				plugins.if(options.argv.compress, plugins.rev())
			)
			.pipe(
				gulp.dest(options.distPaths.styles)
			);
	});
};