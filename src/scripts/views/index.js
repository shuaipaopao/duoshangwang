var indexTpl = require('../tpl/index.string');

//document.body.innerHTML +=indexTpl; 
var Swiper = require('../lib/swiper-3.3.1.min.js')
window.onload=function(){
	var mySwiper = new Swiper ('#banner', {
	     direction: 'horizontal',
	    autoplay:1500,
//	    autoplayDisableOnInteration:false;
	    loop: true,
	    pagination: '.swiper-pagination',
	});
}
SPA.defineView('index',{
	html:indexTpl,
	
	plugins:['delegated'],
	
	//子视图嵌套定义
	modules: [{
	    name: 'content',
	    container: '.m-index-container',
	    views: ['home', 'classfy', 'shopcar', 'msg'],
	    defaultTag: 'classfy'
	}],
	
	init: {
//	    indexSwiper: null,
	    setActive: function (obj) {
	      obj.addClass('active').siblings().removeClass('active');
	    }
	  },
	
	bindActions:{
		'switch.view':function(e){
			this.setActive($(e.el));
			this.modules.content.launch(e.data.tag);
		}
	}
//	init:{
//		
//	}
})
