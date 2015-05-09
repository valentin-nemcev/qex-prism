Prism.languages.ctpl = Prism.languages.extend('clike', {
	'keyword': /\b(CALL|AS|SET|WHEN|CHOOSE|OTHERWISE|ELSE|TEST|MEM|ACT|JS|EXPOSE)\b/g,
    'punctuation': /[{}[\];(),.@:]/g,
	'variables': /\$[a-zA-Z0-9_]+/g,
	'function': {
		pattern: /([a-z0-9]+::[a-z0-9_-]*)/ig,
		inside: {
			punctuation: /(::)/
		}
	},
    'backbone': /\b(Backbone|Model|Collection|extend)\b/g,
    'js': /\b(function|var|return|if|else|switch|new|for|while|break|continue|void|catch|default|delete|do|import|export|in|this|throw|try|typeof|instanceof)\b/g,

});
