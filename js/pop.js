var pop = {
	loading : function(content) {
		return layer.open({
			type : 2,
			shadeClose : false,
			content : content
		});
	},
	alert : function(content,func) {
		content = '<span style="font-size:18px;">'+content+'</span>';
		layer.open({
			content : content,
			btn : [ '<div style="color: #00a189;">我知道了</div>' ],
			yes : function(){
				layer.closeAll();
				if($.isFunction(func)){
					func();
				}
			}
		});
	},
	a : function(content,func) {
		content = '<span style="font-size:18px;">'+content+'</span>';
		layer.open({
			content : content,
			btn : [ '<div style="color: #00a189;">我知道了</div>' ],
			yes : function(){
				layer.closeAll();
				if($.isFunction(func)){
					func();
				}
			}
		});
	},
	b : function(content,func) {
		content = '<span style="font-size:18px;">'+content+'</span>';
		layer.open({
			content : content,
			btn : [ '<div style="opacity: 0.5;color: #00a189;">我知道了</div>' ],
			yes : function(){
				layer.closeAll();
				if($.isFunction(func)){
					func();
				}
			}
		});
	},
	confirm : function(content, func) {
		content = '<span style="font-size:18px;">'+content+'</span>';
		layer.open({
			content : content,
			btn : [ '<div style="color: #00a189;border-left:1px solid #d9d9d9;">确认</div>', '取消' ],
			shadeClose : false,
			yes : function() {//点击确认执行的方法
				layer.closeAll();
				func();
			},
			no : function() {//点击取消执行的方法
				layer.closeAll();
			}
		});
	},
	close : function() {//关闭所有遮罩层
		try{
			layer.closeAll();
		}catch(e){
			$('div[index]').remove();
		}
	},
	toast : function(content,time) {//提示信息，自动关闭
		layer.open({
		    content: content,
		    style: 'border:none;text-align: center;',
		    time: time
		});
	},

	ok : function(content, func) {//ok中只有确认按钮
		layer.open({
			content : content,
			btn : [ '确认'],
			shadeClose : false,
			yes : function() {//点击确认执行的方法
				layer.closeAll();
				func();
			}
		});
	}
};