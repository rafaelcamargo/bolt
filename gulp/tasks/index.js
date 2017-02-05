const es = require('event-stream');

module.exports = (gulp, options, plugins) => {
	gulp.task('index', () => {
		let scripts, styles;

		styles = `${options.folder}/assets/styles/**/*.css`;

		if(options.argv.compress) {
			scripts = [
				`${options.folder}/app/dependencies-*.js`,
				`${options.folder}/app/templates-*.js`,
				`${options.folder}/app/main-*.js`
			]
		} else {
			scripts = `${options.folder}/app/**/*.js`;
		}

		return gulp.src(options.devPaths.index)
			.pipe(
				plugins.inject(
					es.merge(
						gulp.src(styles, {
							read: false
						}), 
						gulp.src(scripts, {
							read: false
						})
					), {
						ignorePath: options.folder,
						addRootSlash: false
					}
				)
			)
			.pipe(
				gulp.dest(options.folder)
			);
	});
};