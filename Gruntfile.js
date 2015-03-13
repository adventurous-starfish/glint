module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['server/spec/serverSpec.js']
      }
    },

    jshint: {
      files: ['client/**/*.js', 'server/**/*.js'],
      options: {
        force: 'true',
        jshintrc: '.jshintrc'
      }
    },
    
    karma: {
      unit: {
        configFile: 'client/karma.conf.js'
      }
    },

    nodemon: {
      def: {
        script: 'index.js'
      }
    }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('test', ['mochaTest', 'jshint', 'karma']);
  grunt.registerTask('default', ['test', 'nodemon']);

};