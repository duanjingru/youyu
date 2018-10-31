$(function(){
	// 导航栏
	var dropLayer=$(".dropdown-layer");
	var dropLayerPar=dropLayer.parent();
	dropLayerPar.mouseenter(function(){dropLayer.show();});
	dropLayerPar.mouseleave(function(){dropLayer.hide();});

	//图片轮转
	/* 要求：    1图片自动向右轮播，小圆球跟着变化
			    2鼠标移入，轮播停止，鼠标移除，轮播继续
			    3按左右箭头，向右或向左切换 */
	var index=0;
	var imglist=$('.c3_b1_img div');
	//图片左右切换
	function right(){
		index++;
		//边界检测
		if (index==imglist.length){
			index=0;
		}
		//eq 找到索引项  fadeIn渐显(通过调整透明度)  显示sibling找到除了该项的其他项  fadeOut渐隐藏 通过调整透明度 
		imglist.eq(index).fadeIn().siblings().fadeOut();
		$(".circle_btns i").eq(index).addClass("current").siblings().removeClass('current');
	}
	function left(){
		//边界检测
		if (index==0){
			index=imglist.length-1;
		}else{
			index--;
		}
		imglist.eq(index).fadeIn().siblings().fadeOut();
		$(".circle_btns i").eq(index).addClass("current").siblings().removeClass('current');
	}
	//左右箭头事件
	$(".right_arrow").click(function(){right();});
	$(".left_arrow").click(function(){ left()});
	
	//小圆球
	$(".circle_btn").mouseenter(function(){
		//每项上有一自定义属性 index,记录索引
		index=$(this).attr('index');
		imglist.eq(index).fadeIn().siblings().fadeOut();
		$(".circle_btns i").eq(index).addClass("current").siblings().removeClass('current');
	})
	//自动轮播
	 var timeid = setInterval(function(){right()}, 3000);
	//鼠标移入图片停止轮播
	 $('.c3_b1_img div img').mouseleave(function(){
        timeid = setInterval(function () {right()}, 3000)})
    //鼠标移入div时,清除定时器
     $('.c3_b1_img div img').mouseenter(function(){clearInterval(timeid)})			
})


