const fs = require('fs');
const credentials = JSON.parse(fs.readFileSync('./aws/credentials.json'));

module.exports = (gulp, options, plugins) => {
	gulp.task('publish', () => {
		const publisher = plugins.awspublish.create(credentials);

		const headers = {
			'Cache-Control': 'max-age=315360000, no-transform, public'
		};

		return gulp.src(options.distPaths.allFiles)
			.pipe(publisher.publish(headers))
			.pipe(publisher.cache())
			.pipe(plugins.awspublish.reporter());
	});
};