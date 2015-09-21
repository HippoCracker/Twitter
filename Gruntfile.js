'use strict'

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-wiredep');
	
	require('load-grunt-tasks')(grunt);

	require('time-grunt')(grunt);

	var config = {
		app: 'app',
		dist: 'dist'
	}

	grunt.initConfig({

		config: config,

		uglify: {
			my_target: {
				files: {
					'<%= config.app %>/js/main.js': ['<%= config.app %>/components/js/main.js', '<%= config.app %>/components/js/controllers.js','<%= config.app %>/components/js/ajax.js']
					
				} //files
			} //my_target
		}, //uglify

		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass

		watch: {
			options: { livereload: true },
			scripts: {
				files: ['<%= config.app %>/components/js/main.js', '<%= config.app %>/components/js/controllers.js','<%= config.app %>/components/js/ajax.js'],
				tasks: ['uglify']
			}, //scripts
			sass: {
				files: ['<%= config.app %>/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['<%= config.app %>/*.html']
			} //html
		}, //watch

		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						
					]
				}]
			}, //dist
			server: '.tmp'
		}, //clean

		connect: {
			options: {
				port: 9000,
				hostname: 'localhost',
				livereload: 35729,
			}, //options
			livereload: {
				options: {
					open: true,

				}
			}//livereload
		},//connect

		wiredep: {
			task: {
				src: ['<%= config.app %>/*.html']
			}
		},

		php: {
      dist: {
        options: {
					base: 'app',
	    		port: 5000,
	    		open: 'true'
      	}
    	}
    }
	}); //initConfig

	grunt.registerTask('serve', 'Comlipe then start a connect web server', function(target) {
		if (target == 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'php',
			'watch'
		]);//run
	});//serve

	grunt.registerTask('server', 'DEPRECATED TASK. User the "serve" task instead', function(target) {
		grunt.log.warn('The `server` task has been deprecated. User `grunt serve` to start a server.');
		grunt.task.run(['serve:' + target]);
	});

} //exports