'use strict';

module.exports = function (grunt) {
    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').join(__dirname, 'tasks')
    });
    require('time-grunt')(grunt);

    // App tasks 123
    grunt.registerTask('test', ['karma:test']);
};
