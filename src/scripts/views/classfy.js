var classfyTpl = require('../tpl/classfy.string');

SPA.defineView('classfy',{
	html:classfyTpl,
	plugins: ['delegated'],
	init:{
		classfySwiper: null
	},
	bindActions: {
	    'switch.swiper': function (e) {
	      this.setActive($(e.el));
	      this.classfySwiper.slideTo($(e.el).index()+1);
	    }
	},  
	bindEvents:{
		'beforeShow':function(){
			 this.classfySwiper = new Swiper('#classfy-swiper',{
				direction: 'vertical',
				loop: true,
		        onSlideChangeStart: function (swiper) {
		          $('.classfy1 li').eq(swiper.activeIndex-1)
		            .addClass('active').siblings().removeClass('active');
		        }
			})
		}
	}
})