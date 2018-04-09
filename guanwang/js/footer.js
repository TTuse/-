$(function(){
	
	$(".container").css("height",$(window).height())
	$(".container").css("width",$(window).width())
	
	//二级菜单
	$(".header_ul>li").eq(1).hover(function(){
//		$(".erji").css("display","block")
		$(".erji").stop().fadeIn(600)
	},function(){
//		$(".erji").css("display","none")
		$(".erji").stop().fadeOut(600)
	})
	
	var index = 0;
	$(".erji ul li").hover(function(){
		index = $(this).index()
		$(".jiantou").eq(index).css("display","block")
	},function(){
		$(".jiantou").css("display","none")
	})
	
	//导航隐藏显示
	$(".header_hidden").on("click",function(){
		$(".header").animate({"right":"-500px"},400,function(){
			$(".header_show").animate({"right":"0"},500)
		})
	})
	
	$(".header_show").on("click",function(){
		$(".header_show").animate({"right":"-60"},500,function(){
			$(".header").animate({"right":"0"},400)
		})
	})
	
	//放大镜
	 $(".contact_fot .fot_left .fe_fot .f_le").on("mouseenter",function(){
    	$(".fot_left .fangdajing").fadeIn(1000);
    })
     $(".contact_fot .fot_left .fe_fot .f_le").on("mouseleave",function(){
    	$(".fot_left .fangdajing").fadeOut(1000);
    })
	
})