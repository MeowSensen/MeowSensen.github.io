$(document).ready(function(){$(".body-main").scroll(function(){var t=$(document).scrollTop();30<t?$(".top-bar").css({opacity:1}):$(".top-bar").css({opacity:.5}),setTimeout(function(){(scrollTopY=$(document).scrollTop())>t&&30<scrollTopY?(t=scrollTopY,$(".top-bar").slideUp("slow")):scrollTopY<t&&(t=scrollTopY,$(".top-bar").slideDown("slow"))},1e3)});var a=0;jQuery(document).ready(function(n){n("body").click(function(t){var e=new Array("😘","🤓","👍","❤","😍","🤩","😉","🎈","✨","✌","🎓","😎"),o=n("<span/>").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}).text(e[a]),e=(a=(a+1)%e.length,t.pageX),t=t.pageY;o.css({"z-index":5,top:t-20,left:e,position:"absolute","font-weight":"bold",color:"#FF0000"}),n("body").append(o),o.animate({top:t-180,opacity:0},3e3,function(){o.remove()})}),setTimeout("delay()",2e3)})}),$(".start-inner h1").text("开始"),$(".start-inner").animate({rotate:"-90deg"},1010),$(".start-inner2").animate({rotate:"540deg"},1010),$(".start-inner2 h1").animate({rotate:"-810deg"},1010);var timeid1=setTimeout(function(){$(".start-top").animate({top:"-50vh"},500),$(".start-bottom").animate({bottom:"-50vh"},500),clearTimeout(timeid1)},10),timeid2=setTimeout(function(){$(".start-left").animate({left:"-50vw"},500),$(".start-right").animate({right:"-50vw"},500),clearTimeout(timeid2)},510);setTimeout(function(){$(".start-inner").hide(100),$(".start").css({display:"none"})},1010);