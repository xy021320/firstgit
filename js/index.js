//header下拉
window.onload = function(){

	var xiala = document.querySelector('.xiala');
	var li = document.querySelector('.xiala i');
	xiala.onmouseover = function(){
		li.style.backgroundImage='url(./icon/下.png)'
	}
	xiala.onmouseout = function(){
		li.style.backgroundImage=''
	}


}


//轮播图
$(function(){
		var index = 0;
		var len = $('.photobox li').length;
		var timer = 0;
		function run(){	
			timer = setInterval(function(){
				// 1.1 当前图片隐藏，当前数字恢复默认样式
				$('.photobox li:eq('+index+')').fadeOut(500);
				$('.indes li:eq('+index+')').removeClass('active');
				index++;
				if (index > len-1) {
					index = 0;
				}
				$('.photobox li:eq('+index+')').fadeIn(500);
				$('.indes li:eq('+index+')').addClass('active');
			},2000);
		}
		run();
		$('.picture').mouseover(function(){
			clearInterval(timer);
		}).mouseout(function(){
			run();
		})
		$('.indes li').mouseover(function(){
			// 让所有正在执行的动画效果停止执行
			$('.photobox li:animated').stop().hide();
			// 3.1 隐藏当前图片
			$('.photobox li:eq('+index+')').fadeOut(1000);
			$('.indes li:eq('+index+')').removeClass('active');
			// 3.2 获取鼠标移入li的索引值
			index = $(this).index();
			// 3.3 新的图片显示
			$('.photobox li:eq('+index+')').fadeIn(1000);
			$('.indes li:eq('+index+')').addClass('active');
		})
		// 4.点击左键
		$('.icon-zuo').click(function(){
			$('.photobox li:animated').stop().hide();
			// 4.1 隐藏当前图片
			$('.photobox li:eq('+index+')').fadeOut(1000);
			$('.indes li:eq('+index+')').removeClass('active');
			index--;
			if (index < 0) {
				index = len-1;
			}
			$('.photobox li:eq('+index+')').fadeIn(1000);
			$('.indes li:eq('+index+')').addClass('active');
		})
		$('.icon-your').click(function(){
			// 让所有正在执行的动画效果停止执行
			$('.photobox li:animated').stop().hide();
			$('.photobox li:eq('+index+')').fadeOut(1000);
			$('.indes li:eq('+index+')').removeClass('active');
			index++;
			if (index > len-1) {
				index = 0;
			}
			// 4.3 显示新索引对应的图片
			$('.photobox li:eq('+index+')').fadeIn(1000);
			$('.indes li:eq('+index+')').addClass('active');
		})
	})

//下拉选项卡
$(function(){
	var index=0;
	$('.nav-tab > li').mouseover(function(){
		$('.nav-tab > li:eq('+index+').item').addClass('hide')
		index = $(this).index();
		$('.nav-tab > li:eq('+index+') .item').removeClass('hide')
	}).mouseout(function(){
		$('.nav-tab > li:eq('+index+') .item').removeClass('hide')
		index = $(this).index();
		$('.nav-tab > li:eq('+index+') .item').addClass('hide')
	})
})
//顶部菜单栏隐藏显示
$(function(){   
    var winHeight = $(document).scrollTop();
 
    $(window).scroll(function() {
        var y = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
 
        if (y > 200){ //如果滚动距离大于550px则隐藏，否则删除隐藏类
            $('.top-scroll').removeClass('hide').slideDown(600);
            $('.top-scroll').css('border-bottom','1px solid #ddd');
            var index=0;
			$('.top-nav-tab > li').mouseover(function(){
				$('.top-nav-tab > li:eq('+index+') .top-item').addClass('hide')
				index = $(this).index();
				$('.top-nav-tab > li:eq('+index+') .top-item').removeClass('hide')
			}).mouseout(function(){
				$('.top-nav-tab > li:eq('+index+') .top-item').removeClass('hide')
				index = $(this).index();
				$('.top-nav-tab > li:eq('+index+') .top-item').addClass('hide')
			})
        } 
        else {
            $('.top-scroll').addClass('hide').slideUp(600);
        }              
 
     });
});
//第三页
$(function(){
	var index=0;
	$('.lita').mouseover(function(){
		$('.big').css('background-image','url(./image/big'+index+'.png)')
		index = $(this).index();
		$('.big').css('background-image','url(./image/big'+index+'.png)')
	}).mouseout(function(){
		
	})
})