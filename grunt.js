module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
		meta: {
			banner: "/* Ação é isso aí */"
		},
		concat: {
			def: {
				src: ['<banner>', 'lib/gruntiso.js'],
				dest: 'prod/gruntiso.js'
			}
		},
		min: {
			def: {
				src: 'prod/gruntiso.js',
				dest: 'prod/gruntiso.min.js'
			}
		},
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint test concat min');

};
