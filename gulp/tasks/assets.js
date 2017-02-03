module.exports = (gulp, options, plugins) => {
	gulp.task('templates', () => {
		return gulp.src(options.devPaths.templates)
			.pipe(
				plugins.htmlmin({collapseWhitespace: true})
			)
			.pipe(
				plugins.angularTemplatecache('templates', {
					standalone: true,
					root: '/app/'
				})
			)
			.pipe(
				plugins.rename({
					extname: '.js'
				})
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

	gulp.task('styles', () => {
		return gulp.src(options.devPaths.baseStyle)
			.pipe(
				plugins.less()
			)
			.pipe(
				plugins.if(options.argv.compress, plugins.rev())
			)
			.pipe(
				plugins.if(options.argv.compress, plugins.uglifycss({
					'maxLineLen': 80,
					'uglyComments': true
				}))
			)
			.pipe(
				gulp.dest(options.distPaths.styles)
			);
	});

	gulp.task('styles:reload', () => {
		return gulp.src(options.devPaths.baseStyle)
			.pipe(
				plugins.less()
			)
			.pipe(
				gulp.dest(options.distPaths.styles)
			)
			.pipe(
				plugins.connect.reload()
			);
	});

	gulp.task('fonts', () => {
		return gulp.src(options.devPaths.fonts)
			.pipe(
				plugins.cached('fonts')
			)
			.pipe(
				gulp.dest(options.distPaths.fonts)
			);
	});

	gulp.task('images', () => {
		return gulp.src(options.devPaths.images)
			.pipe(
				plugins.cached('images')
			)
			.pipe(
				plugins.if(options.argv.compress, plugins.imagemin())
			)
			.pipe(
				gulp.dest(options.distPaths.images)
			);
	});
};