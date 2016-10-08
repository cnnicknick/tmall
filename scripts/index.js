$(function(){
	// 代码中不要使用table和空格混排

	// 上导航列表
	$('.oneblock2').hover(function(){
		$(this).find('.oneblock1').slideDown();
	},function(){
		$(this).find('.oneblock1').slideUp();
	});
	// 字体颜色变化
	$('.site-nav .nav-c a').hover(function(){
		$(this).css({
			color:'#c40000',
			textDecoration: 'underline'
		});
	},function(){
		$(this).css({
			color:'#999',
			textDecoration: 'none'
		});
	});

	// 右侧固定导航
	$('.mytequan').hover(function(){
		$(this).find('.mytequan-logo').css({
			background: '#c40000',
		});
		$(this).find('.mytequn-zi').show();
	},function(){
		$(this).find('.mytequan-logo').css({background: 'none'});
		$(this).find('.mytequn-zi').hide();
	});

	// 楼层左侧图片
	$('.fsmsc-item a').hover(function(){
		$(this).find('img').animate({marginLeft: '-5px'}, "fast");
	},function(){
		$(this).find('img').animate({marginLeft: '0px'}, "fast");
	});

	// 楼层右侧图片
	$('.fbr-list-big-225').hover(function(){
		$(this).find('img').animate({marginLeft: '-5px'}, "fast");
	},function(){
		$(this).find('img').animate({marginLeft: '0px'}, "fast");
	});
	$('.fbr-list-big-166').hover(function(){
		$(this).find('img').animate({marginLeft: '-5px'}, "fast");
	},function(){
		$(this).find('img').animate({marginLeft: '0px'}, "fast");
	});

	
	// 部分图片向左移动5
	$('.imgleft').hover(function(){
		$(this).find('img').animate({marginLeft: '-5px'}, "fast");
	},function(){
		$(this).find('img').animate({marginLeft: '0px'}, "fast");
	});

	// 上边收索框
	var ti;
	$(window).scroll(function(){
		if ($(window).scrollTop()>900) {
			clearTimeout(ti);
			ti = setTimeout(function(){
				$('.blacktop').show();
				$('.zuofixed').show();
			},500);
		}else{
			clearTimeout(ti);
			$('.blacktop').hide();
			$('.zuofixed').hide();
		}
	});

	// 返回顶部
	$('.backtop').click(function(){
		$({top:$(window).scrollTop()}).animate(
			{top:0},
			{
				duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
			}
		);
	});

	// banner
	var index=0;
	var bannback=['#001B2E','#E4E4E4','#F27904','#E2E2E2','#FCEEE3','#DD2726'];
	var lunbo = function(){
		$('.xiao').hide();
		var el = $('.xiao')[index];
		$(el).show();

		$('.mid-slider-btn li').removeClass('red');
		$($('.mid-slider-btn li')[index]).addClass('red');
		$('.lunboback').css({background:bannback[index]});

		index+=1;
		if (index===$('.xiao').length) {
			index = 0;
		}
	};
	$('.mid-slider-btn li').each(function(i){
		$(this).data('index',i);
	});
	$('.mid-slider-btn li').hover(function(){
		clearInterval(timerId);
		$('.mid-slider-btn li').removeClass('red');
		$(this).addClass('red');
		var i = $(this).data('index');
		$('.xiao').hide();
		$($('.xiao')[i]).show();
		$('.lunboback').css({background:bannback[i]});
		index=i;
	},function(){
		clearInterval(timerId);
		timerId = setInterval(lunbo,2000);
	})
	var timerId = setInterval(lunbo,2000);

	// 左侧导航列表
	var bannback2=['#011C31','#FFD44A','#F2F7FD','#5E6369','#D72C61','#FBAA13','#95EAE7','#FDFEDC','#D9070A','#FFEA5D','#FFC9D7','#29A6FF','#E4E2E3','#FEDFDD','#30C4FF','#CCE1B6'];
	$('.left-list').each(function(i){
		$(this).data('index',i);
	});
	$('.left-list').hover(function(){
		var i=$(this).data('index');
		if (i==0) return;
		clearInterval(timerId);
		$('.mid-slider-btn').hide();
		$(this).css({background: '#a90000'});
		$(this).find('.leftlist2').show();
		$($('.navtu')[i]).show();
		$('.youchang').hide();
		$($('.youchang')[i]).show();
		$('.lunboback').css({background:bannback2[i]}); 
	},function(){
		$('.mid-slider-btn').show();
		$(this).css({background: 'none'});
		$(this).find('.leftlist2').hide();
		$('.navtu').hide();	
		clearInterval(timerId);
		timerId = setInterval(lunbo,2000);
		$('.lunboback').css({background:'none'});
	});

	//左侧楼层上下滚动
	$('.hezi a').each(function(i){
		$(this).data('index',i);
	});
	$('.hezi a').hover(function(){
		var i=$(this).data('index');
		$($('.hezi a')[i]).css({background:'url(./img/sn'+(i+1)+'.png) no-repeat'});
	},function(){
		var i=$(this).data('index');
		$($('.hezi a')[i]).css({background:'url(./img/zuofix'+(i+1)+'.png) no-repeat'});
	});
	$('.hezi a').click(function(){
		var i=$(this).data('index');
		var newtop = $($('.floor')[i]).offset().top-180;
		$({top:$(window).scrollTop()}).animate(
			{top:newtop},
			{
				duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
			}
		);
	});

	// 检测楼层滚动
	var height=[];
	for (var i = 0; i < 12; i++) {
		var it = $($('.floor')[i]).offset().top;
		height.push(it);
	};
	$(window).scroll(function(){
		for (var i = 0; i < height.length; i++) {
			var tt=$(window).scrollTop()+150;
			if (tt >= height[i] && tt <= height[i+1] ) {
				$($('.hezi a')[i]).css({background:'url(./img/sn'+(i+1)+'.png) no-repeat'});
			}else{
				$($('.hezi a')[i]).css({background:'url(./img/zuofix'+(i+1)+'.png) no-repeat'});
			}
			if (tt>=height[11] && tt <=6900) {
				$($('.hezi a')[11]).css({background:'url(./img/sn12.png) no-repeat'});
			}
		}
	});

	// 楼层左侧轮播
	var index2=0;
	var currentSlider;
	setInterval(function(){
		$('.floor1 .fsm-slider .fsmsc-item').hide();
		var el = $('.floor1 .fsm-slider .fsmsc-item')[index2];
		$(el).show();
		currentSlider=el;
		index2+=1;
		if (index2===$('.floor1 .fsm-slider .fsmsc-item').length) {
			index2 = 0;
		}
	},2000); 
	
	$('.floor1 .slider-right').click(function(){
		var nex=($(currentSlider).next().length==0)?$('.floor1 .fsm-slider .fsmsc-item')[0]:$(currentSlider).next();
		$(currentSlider).hide();
		$(nex).show();
		currentSlider=nex;
	});
	$('.floor1 .slider-left').click(function(){
		var pre=($(currentSlider).prev().length==0)?$('.floor1 .fsm-slider .fsmsc-item')[2]:$(currentSlider).prev();
		$(currentSlider).hide();
		$(pre).show();
		currentSlider=pre;
	});

	var index3=0;
	var currentSlider2;
	setInterval(function(){
		$('.floor2 .fsm-slider .fsmsc-item').hide();
		var el = $('.floor2 .fsm-slider .fsmsc-item')[index3];
		$(el).show();
		currentSlider2=el
		index3+=1;
		if (index3===$('.floor2 .fsm-slider .fsmsc-item').length) {
			index3 = 0;
		}
	},2000);

	$('.floor2 .slider-right').click(function(){
		var nex=($(currentSlider2).next().length==0)?$('.floor2 .fsm-slider .fsmsc-item')[0]:$(currentSlider2).next();
		$(currentSlider2).hide();
		$(nex).show();
		currentSlider2=nex;
	});
	$('.floor2 .slider-left').click(function(){
		var pre=($(currentSlider2).prev().length==0)?$('.floor2 .fsm-slider .fsmsc-item')[2]:$(currentSlider2).prev();
		$(currentSlider2).hide();
		$(pre).show();
		currentSlider2=pre;
	});

	var index4=0;
	var currentSlider3;
	setInterval(function(){
		$('.floor3 .fsm-slider .fsmsc-item').hide();
		var el = $('.floor3 .fsm-slider .fsmsc-item')[index4];
		$(el).show();
		currentSlider3=el;
		index4+=1;
		if (index4===$('.floor3 .fsm-slider .fsmsc-item').length) {
			index4 = 0;
		}
	},2000);
	$('.floor3 .slider-right').click(function(){
		var nex=($(currentSlider3).next().length==0)?$('.floor3 .fsm-slider .fsmsc-item')[0]:$(currentSlider3).next();
		$(currentSlider3).hide();
		$(nex).show();
		currentSlider3=nex;
	});
	$('.floor3 .slider-left').click(function(){
		var pre=($(currentSlider3).prev().length==0)?$('.floor3 .fsm-slider .fsmsc-item')[2]:$(currentSlider3).prev();
		$(currentSlider3).hide();
		$(pre).show();
		currentSlider3=pre;
	});

	var index5=0;
	var currentSlider4;
	setInterval(function(){
		$('.floor4 .fsm-slider .fsmsc-item').hide();
		var el = $('.floor4 .fsm-slider .fsmsc-item')[index5];
		$(el).show();
		currentSlider4=el;
		index5+=1;
		if (index5===$('.floor4 .fsm-slider .fsmsc-item').length) {
			index5 = 0;
		}
	},2000);
	$('.floor4 .slider-right').click(function(){
		var nex=($(currentSlider4).next().length==0)?$('.floor4 .fsm-slider .fsmsc-item')[0]:$(currentSlider4).next();
		$(currentSlider4).hide();
		$(nex).show();
		currentSlider4=nex;
	});
	$('.floor4 .slider-left').click(function(){
		var pre=($(currentSlider4).prev().length==0)?$('.floor4 .fsm-slider .fsmsc-item')[2]:$(currentSlider4).prev();
		$(currentSlider4).hide();
		$(pre).show();
		currentSlider4=pre;
	});

	var index6=0;
	var currentSlider5;
	setInterval(function(){
		$('.floor5 .fsm-slider .fsmsc-item').hide();
		var el = $('.floor5 .fsm-slider .fsmsc-item')[index6];
		$(el).show();
		currentSlider5=el;
		index6+=1;
		if (index6===$('.floor5 .fsm-slider .fsmsc-item').length) {
			index6 = 0;
		}
	},2000);
	$('.floor5 .slider-right').click(function(){
		var nex=($(currentSlider5).next().length==0)?$('.floor5 .fsm-slider .fsmsc-item')[0]:$(currentSlider5).next();
		$(currentSlider5).hide();
		$(nex).show();
		currentSlider5=nex;
	});
	$('.floor5 .slider-left').click(function(){
		var pre=($(currentSlider5).prev().length==0)?$('.floor5 .fsm-slider .fsmsc-item')[2]:$(currentSlider5).prev();
		$(currentSlider5).hide();
		$(pre).show();
		currentSlider5=pre;
	});

	var index7=0;
	var currentSlider8;
	setInterval(function(){
		$('.floor8 .fsm-slider .fsmsc-item').hide();
		var el = $('.floor8 .fsm-slider .fsmsc-item')[index7];
		$(el).show();
		currentSlider8=el;
		index7+=1;
		if (index7===$('.floor8 .fsm-slider .fsmsc-item').length) {
			index7 = 0;
		}
	},2000);
	$('.floor8 .slider-right').click(function(){
		var nex=($(currentSlider8).next().length==0)?$('.floor8 .fsm-slider .fsmsc-item')[0]:$(currentSlider8).next();
		$(currentSlider8).hide();
		$(nex).show();
		currentSlider8=nex;
	});
	$('.floor8 .slider-left').click(function(){
		var pre=($(currentSlider8).prev().length==0)?$('.floor8 .fsm-slider .fsmsc-item')[2]:$(currentSlider8).prev();
		$(currentSlider8).hide();
		$(pre).show();
		currentSlider8=pre;
	});


	// 大牌名牌
	$('.brand-rec-title li').each(function(i){
		$(this).data('index',i);
	});
	$('.brand-rec-title li').click(function(){
		var i=$(this).data('index');
		$('.brand-rec-title li').removeClass('selected');
		$('.bimg-list').hide();
		$($('.bimg-list')[i]).show();
		$(this).addClass('selected');
	});






});