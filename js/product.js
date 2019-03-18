var width =$(window).width()
var n=0;
var num=0;
var l=0;
var flag=true;
function ad(){
	if(width<748){
		$('.box-list').hide()
		$('.box-title span').removeClass('roate')
		$('.title').unbind()
		$('.text-li').removeClass('text-two')
		$('.title').click(function(){
			var index =$(this).parent().index()
			console.log(index)
			$('.box-list').eq(index).stop().slideToggle(100)
		    $('.box-title span').eq(index).toggleClass('roate')
		   
		})
	}
	else{
		$('.title').unbind()
		$('.box-list').show()
		$('.text-li').eq(1).addClass('text-two')

	}
}
ad()
$(window).resize(function(){
	 width = $(window).width()	
	ad(width)
})
$('.header-list li').hover(function(){
	var index = $(this).index()
	$('.meun-list').hide()
	$('.header-list .tip').removeClass('after')
	$('.meun-list').eq(index).show()
	$('.header-list .tip').eq(index).addClass('after')
})
$('.meun-list').mouseleave(function(){
	var index = $(this).index()
	$('.meun-list').hide()
	$('.header-list .tip').removeClass('after')
})
$('.nav-two-style').click(function(){
	var index = $(this).index()-1
	if(index == -1){
		return
	}	
	$('.list-two').eq(index).slideToggle(100)
	$('.nav-two-style span').eq(index).toggleClass('right-roate')
})
$('.nav-two-l').click(function(){
	$('.nav-two-list').fadeToggle()
	$('.nav-two-r').toggle()
})
$('.nav-two-r').click(function(){
	n++;
	$('.nav-two-search').fadeToggle()
	$('.nav-two-l').fadeToggle()
	if(n==1){
		$('.nav-two-r span').eq(0).hide()
		$('.nav-two-r span').eq(1).show()
	}
	if(n==2){
		$('.nav-two-r span').eq(1).hide()
		$('.nav-two-r span').eq(0).show()
		n=0;
	}
})
$('.nav-two-l').click(function(){
	
	if(flag == true){
	$('.nav-two-l span:nth-of-type(1)').addClass('spanro')
	$('.nav-two-l span:nth-of-type(2)').animate({'opacity':0},50)
	$('.nav-two-l span:nth-of-type(3)').addClass('spanrotwo')	
	  flag = false;
	}
	else{
	$('.nav-two-l span:nth-of-type(1)').removeClass('spanro')
	$('.nav-two-l span:nth-of-type(2)').animate({'opacity':1},50)
	$('.nav-two-l span:nth-of-type(3)').removeClass('spanrotwo')		
	 flag =true;
	}
})
$('.nav-box').click(function(){
	$('.nav-box ul').slideToggle(100)
	$('.nav-box li').toggleClass('move')
	$('.nav-box-r span').toggleClass('roate180')
})
$(window).scroll(function(){
	var s = $(window).scrollTop()
	console.log(s)
	var top = $('.section-show').offset().top
	if(s>top){
		$('.search-list-fix').fadeIn()
	}
	else{
		$('.search-list-fix').fadeOut()
	}
})
