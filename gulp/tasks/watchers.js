module.exports = (gulp, options, plugins) => {
	gulp.task('watchers', () => {
		gulp.watch(options.devPaths.templates, ['compile']);
		gulp.watch(options.devPaths.scripts, ['compile']);
		gulp.watch(options.devPaths.styles, ['styles:reload']);
		gulp.watch(options.devPaths.images, ['compile']);
		gulp.watch(options.devPaths.index, ['compile']);
	});
};