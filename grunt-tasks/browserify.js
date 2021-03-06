var cssify = require("cssify")
	, partialify = require("partialify/custom");

module.exports = {
	options: {
		transform: [ cssify, partialify.onlyAllow(["html"]) ],
		banner: "/*!\n@name <%= pkg.name %>\n@version <%= grunt.option('buildNumber') || pkg.version %> | <%= grunt.template.today('yyyy-mm-dd') %>\n*/\n"
	},
	dist: {
		files: {
			"dist/tophat.dev.js": [ "./temp/tophat.js" ]
		}
	}
};

