var dialog = require('dialog')

module.exports = function(opt){
	var d = dialog({
	    title: opt.hasOwnProperty('title') ? opt.title : '提示',
	    content:opt.hasOwnProperty('content') ? opt.content : '提示内容'
	}); 
	d.showModal();
}