const runSequence = require('run-sequence');

module.exports = (gulp, options, plugins) => {
	gulp.task('compile', (cb) => {
		runSequence(
			'lint',
			[
				'scripts', 
				'styles', 
				'images', 
				'fonts'
			], 
			'templates', 
			'index', 
			'reload', 
			cb
		);
	});

	gulp.task('up', (cb) => {
		runSequence(
			'clean',
			'bower:styles', 
			'bower:scripts', 
			'compile', 
			'watchers', 
			'server', 
			cb
		);
	});

	gulp.task('build', (cb) => {
		runSequence(
			'clean', 
			'bower:styles',
			'bower:scripts', 
			'compile', 
			cb
		);
	});

	gulp.task('default', ['up']);
};