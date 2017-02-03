const runSequence = require('run-sequence');

module.exports = (gulp, options, plugins) => {

	gulp.task('lint', (cb) => {
		runSequence(
			'lint:js',
			cb
		);
	});

	gulp.task('lint:js', () => {
		return gulp.src(options.devPaths.scripts)
			.pipe(plugins.eslint({
				fix: !!options.argv.fix
			}))
			.pipe(plugins.eslint.format())
			.pipe(plugins.eslint.failAfterError())
			.pipe(gulp.dest(options.devPaths.baseApp));
	});
};