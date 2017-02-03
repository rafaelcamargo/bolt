const rimraf = require('rimraf');

module.exports = (gulp, options, plugins) => {
	gulp.task('clean', (cb) => {
		rimraf.sync(options.folder);
		cb(null);
	});
};