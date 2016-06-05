var detTpl = require('../tpl/det.string');

SPA.defineView('det',{
	html:detTpl,
	plugins:['delegated'],
	bindActions:{
		'goto.classfy':function(){
			SPA.open('classfy')
		}
	}
})
