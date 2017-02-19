module.exports = (gulp, options, plugins) => {
	const Server = require('karma').Server;

	gulp.task('tests:javascript', (done) => {
		return new Server({
			configFile: options.karmaConfig,
			folder : options.folder,
			testsJs : options.tests.js
		}, done).start();
	});
};
