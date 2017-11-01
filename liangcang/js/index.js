



//$('.main01-l ul li:eq(0)').show().siblings().hide();
//
//var n = 0;
//var timer;
//function autoPlay(){
//	timer = setInterval(function(){
//		n++;
//		if(n > 4){
//			n = 0;
//		}	
//		$('.main01-l ul li').eq(n).show().siblings().hide();
//		$('.number span').eq(n).addClass('active').siblings().removeClass('active')
//	},1000)
//}
//autoPlay();
//
//$('.main01-l').hover(function(){
//	clearInterval(timer)
//},function(){
//	autoPlay();
//})
//
//$('.number span').each(function(index){
//	$(this).click(function(){
////		alert(index)
//		n = index;
//		$('.main01-l ul li').eq(n).show().siblings().hide();
//		$('.number span').eq(n).addClass('active').siblings().removeClass('active')
//	})
//})


$(document).scroll(function(){
	var oTop = $(document).scrollTop();
	$('#btt').css('display','none')
	if(oTop > 600){
		$('#btt').css('display','block')
	}else{
		$('#btt').css('display','none')	
	}
})

$('#btt').click(function(){
	$('body,html').animate({'scrollTop':0},100)
})

move();	
function move(){	
	$("#finger").animate({"left":20},1000,function(){
        $("#finger").animate({"left":0},1000,move)
	})
}


//$(document).mousewheel(function(e){
//	console.log(e.deltaY )
//	if ($("#big").is(":animated")) {
//		return
//	}
//	if (e.deltaY > 0) {
//		$("").animate({"top": },1000)
//	} else{
//		$("").animate({"top": },1000)
//	}
//})	
//
//$("").click(function (e){
//	e.stopPropagation();
//	$("").animate({"left": 0})
//})
//$(document).click(function (){
//	$("").animate({"left": })
//})