'use strict';

module.exports = function fn(grunt) {
    grunt.loadNpmTasks('grunt-karma');

    // Debug options
    // grunt.option('debug', true);
    grunt.option('stack', true);

    var files = grunt.option('files') ? grunt.option('files').split(/\s*,\s*/) : [
        'src/react-components/**/test/test.js'
    ];
    var browsers = grunt.option('browsers') ? grunt.option('browsers').split(/\s*,\s*/) : [
        // a browser needs to be installed to work
        'PhantomJS_IDB'
        //'Chrome',
        // 'ChromeCanary',
        // 'Safari',
        // 'Firefox',
        // 'Opera',
        // 'PhantomJS'
        // 'IE'
    ];

    return {
        test: {
            browsers: browsers,
        },

        coverage: {
            browsers: browsers,
            reporters: [
                'mocha'
            ]
        },
        options: {
            frameworks: [
				'mocha', 'browserify', 'phantomjs-shim'
            ],
            files: files,
			// list of files to exclude
	        exclude: [],

	        // preprocess matching files before serving them to the browser
	        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	        preprocessors: {
	            'src/react-components/**/test/test.js': ['browserify']
	        },

	        browserify: {
	            debug: true,
	            transform: [ 'reactify' ]
	        },

	        // test results reporter to use
	        // possible values: 'dots', 'progress'
	        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
	        reporters: ['progress', 'mocha'],

	        // web server port
	        port: 9876,

	        // enable / disable colors in the output (reporters and logs)
	        colors: true,

	        // level of logging
	        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	        logLevel: grunt.option('debug') ? 'DEBUG' : 'WARN',

	        // enable / disable watching file and executing tests whenever any file changes
	        autoWatch: grunt.option('watch') || false,

	        // start these browsers
	        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	        //browsers: ['Chrome', 'Firefox', 'PhantomJS'],
	        browsers: ['PhantomJS'],

	        // Continuous Integration mode
	        // if true, Karma captures browsers, runs the tests and exits
	        singleRun: true,
            plugins: [
                'karma-chai',
                'karma-mocha',
                'karma-bro',
                'karma-mocha-reporter',
                'karma-phantomjs-launcher',
				'karma-phantomjs-shim'
            ],
            client: {
                mocha: {
                    // set test-case timeout in milliseconds [2000]
                    timeout: 1000,
                    // check for global variable leaks. FIXME
                    ignoreLeaks: true,
                    // specify user-interface (bdd|tdd|exports).
                    ui: 'bdd',
                    // "slow" test threshold in milliseconds [75].
                    slow: 500
                }
            },
            customLaunchers: {
                'PhantomJS_IDB': {
                    base: 'PhantomJS',
                    options: {
                        settings: {
                            webSecurityEnabled: false
                        }
                    },
                    flags: ['--local-storage-path=./.test/html5-storage/']
                }
            }
        }
    };
};
