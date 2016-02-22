module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'dist/jmj-diretivas.js',
            'src/**/*spec.js'
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
          'src/**/*.js': ['coverage']
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }
    });
};
