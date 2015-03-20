module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      }, 
      dist: {
        src: [
        'client/app/glint.js',
        'client/common/services.js',
        'client/app/ideas/ideas.js',
        'client/app/votes/votes.js',
        'client/app/auth/auth.js',
        'client/app/comments/comments.js'
        ],
        dest: 'client/dist/build.min.js'
      }
    },

    cssmin: {
      dist: {
        files: {
          'client/styles/styles.min.css': 'client/styles/styles.css'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'client/dist/build.min.js': ['client/dist/build.min.js']
        }
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['server/spec/serverSpec.js']
      }
    },

    jshint: {
      files: [
      'Gruntfile.js',
      'client/**/*.js',
      'server/**/*.js'
      ],
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
      dev: {
        script: 'server.js'
      }
    },

    watch: {
      scripts: {
        files: [
          'client/**/*.js',
          'server/**/*.js'
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'client/styles/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
        command: 'git push azure master',
        options: {
          stdout: true,
          stderr: true,
          failOnError: true
        }
      }
    },

  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');


  // Task(s)
  grunt.registerTask('server-dev', function (target) {
    var nodemon = grunt.util.spawn({
      cmd: 'grunt',
      grunt: true,
      args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run(['watch']);
  });

  grunt.registerTask('test', [
    'jshint',
    'mochaTest',
    'karma'
  ]);

  grunt.registerTask('build', [
    'concat',
    'uglify',
    'cssmin'
  ]);

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      grunt.task.run([ 'shell:prodServer']);
    } else {
      grunt.task.run(['server-dev']);
    }
  });

  grunt.registerTask('deploy', [
      'test',
      'build',
      'upload'
  ]);

};