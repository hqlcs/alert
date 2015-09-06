var dialog = require('dialog')

module.exports = function(opt){
	if ( typeof opt == 'string' ){
		content = opt
	}else if(opt.hasOwnProperty('content')){
		content = opt.content
	}
	var d = dialog({
	    title: opt.hasOwnProperty('title') ? opt.title : '提示',
	    content:content
	}); 
	d.showModal();
}