module.exports = (gulp, options, plugins) => {
	gulp.task('scripts', () => {
		return gulp.src(options.devPaths.scripts)
		.pipe(
			plugins.cached('scripts')
		)
		.pipe(
			plugins.preprocess({
				context: {
					NODE_ENV: options.env
				}
			})
		)
		.pipe(
			plugins.if(options.argv.compress, plugins.ngAnnotate())
		)
		.pipe(
			plugins.if(options.argv.compress, plugins.uglify())
		)
		.pipe(
			plugins.if(options.argv.compress, plugins.concat('main.js'))
		)
		.pipe(
			plugins.if(options.argv.compress, plugins.rev())
		)
		.pipe(
			gulp.dest(options.distPaths.app)
		);
	});
};