var detTpl = require('../tpl/det.string');

SPA.defineView('det',{
	html:detTpl,
	plugins:['delegated',{
			name:'avalon',
			options:function(vm){
				vm.detlist = [];
			}
	}],
	bindActions:{
		'goto.classfy':function(){
			this.hide();
		}
	},
	bindEvents:{
		'show':function(){
			var vm = this.getVM();
			$.ajax({
				url: '/duoshangwang/mock/det.json',
				success:function(res){
						var det = res.det;
						console.log(0);
						var dettempArr = [];
							for(var i=0;i<Math.ceil(det.length/2);i++){
									dettempArr[i] = [];
									dettempArr[i][0] = det[2*i];
									dettempArr[i][1] = det[2*i+1];
							}
						vm.detlist = dettempArr;
				}
			})
		}
	}
})
