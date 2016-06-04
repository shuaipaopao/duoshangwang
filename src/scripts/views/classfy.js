var classfyTpl = require('../tpl/classfy.string');

SPA.defineView('classfy',{
	html:classfyTpl,
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){
			vm.livelist = [];
			vm.livelist1 = [];
			vm.nvlist = [];
			vm.nvqlist = [];
			vm.nvbao = [];
			vm.nanbao = [];
		}
	}],

	bindActions: {
	    'class.tap': function (e) {
	      $(e.el).addClass('active').siblings().removeClass('active');
				$(".classfy-container").eq($(e.el).index()).addClass('active').siblings().removeClass('active');
	    }
	},

	// init:{
	// 	classfySwiper: null
	// },

	bindEvents: {
		'show':function(){
			var vm = this.getVM();
			$.ajax({
				url: '/api/getclassfynan.php',
				success: function (res){

					var data = res.data;
					var kuzi = res.kuzi;
					var nvlist = res.nvlist;
					var nvqlist = res.nvqlist;
					var nvbao = res.nvbao;
					var nanbao = res.nanbao;
					var tempArr =[];
					var kuzitempArr = [];
					var nvtempArr = [];
					var nvqtempArr = [];
					var nvbaotempArr = [];
					var nanbaotempArr = [];

					function list(data,tempArr,data){
						for(var i=0;i<Math.ceil(data.length/3);i++){
								tempArr[i] = [];
								tempArr[i][0] = data[3*i];
								tempArr[i][1] = data[3*i+1];
								tempArr[i][2] = data[3*i+2];
						}
					}
					list(data,tempArr,data);
					list(kuzi,kuzitempArr,kuzi);
					list(nvlist,nvtempArr,nvlist);
					list(nvqlist,nvqtempArr,nvqlist);
					list(nvbao,nvbaotempArr,nvbao);
					list(nanbao,nanbaotempArr,nanbao);

					vm.livelist = tempArr;
					vm.livelist1 = kuzitempArr;
					vm.nvlist = nvtempArr;
					vm.nvqlist = nvqtempArr;
					vm.nvbao = nvbaotempArr;
					vm.nanbao = nanbaotempArr;
				}
			})
		}
	}
})
