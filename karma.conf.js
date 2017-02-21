module.exports = (config) => {
	config.set( {
		basePath : './',
		files : [
			`${config.folder}/**/dependencies.js`,
			`${config.folder}/**/templates.js`,
			`${config.folder}/**/main.js`,
			`${config.folder}/**/*.js`,
			config.testsJs
		],
		autoWatch : false,
		singleRun: true,
		frameworks: [ 'jasmine' ],
		browsers : [ 'jsdom' ],
		plugins : [
			'karma-jsdom-launcher',
			'karma-jasmine'
		]
	} );
};
