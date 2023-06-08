$(function(){

    if(matchMedia("screen and (min-width:1340px)").matches){
        let baseline = -600;
        let pos1 = $(".con3_2").offset().top+baseline;
        let pos2 = $(".con4_2").offset().top+baseline;
        let pos3 = $(".con5").offset().top+baseline;
        let pos4 = $(".con16").offset().top+baseline;
        let pos5 = $(".con5").offset().top+baseline;
        $(window).on("scroll",function(){
            let scroll = $(this).scrollTop();
            if(scroll >= pos1){
                $(".con3_2").addClass("on");
                $(".con3_3").delay(500).fadeIn();            
            }
            
            if(scroll >= pos2){
                $(".con4_2").addClass("on");
                $(".con4_3").delay(500).fadeIn();
            }
            if(scroll>=50){
                $(".con2").addClass("on");
            }
    
            if(scroll >= pos3){
                $(".con5").addClass("on");          
            }
    
            if(pos4 <= scroll){
                $(".con16").addClass("on")
            }
            if(pos5<=scroll){
                $(".con5").addClass("move")
    
            }
        })
    
    
        let a = 0;
    
        $(".gnb_1").on("click",function(){
            a=$(this).index();
            if($(".gnb>ul>li").eq(a).children(".sub").is(":hidden")){
                $(".sub").stop().slideUp();
                $(".gnb>ul>li").stop().eq(a).children(".sub").slideDown();
            }else{
                $(this).children(".sub").stop().slideUp();
            }
            console.log(a)
        })
    
        autovisual();
        function autovisual(){
            let b=0;
            let c=$(".visualimg li").length;    
            auto = setInterval(function(){
                b++;
                if(b==c-1){
                    b=0;
                    $(".visualimg").animate({left:"-400%"},function(){
                        $(".visualimg").css({left:"0px"})
                    });
                    
                }else{
                    $(".visualimg").animate({left:-b*100+"%"})
                }
                $(".nav li>div").animate({width:"10px"})
                $(".nav li>div").eq(b).animate({width:"50%"})
            },2500)
        }
    
        $(".nav li").on("click",function(){
            d = $(this).index();
            clearInterval(auto);
            $(".nav li>div").animate({width:"10px"})
            $(".nav li>div").eq(d).animate({width:"50%"})
            autovisual();
    
            $(".visualimg").animate({left:-d*100+"%"})
    
        })
    
        $(".con14").on("click",function(){
            $(".popup").fadeIn();
            $(".con14_1 img").delay(500).animate({opacity:"1"})
        })
        $(".con15").on("click",function(){
            $(".popup").fadeIn();
            $(".con15_1 img").delay(500).animate({opacity:"1"})
        })
        $(".popup ul").on("click",function(){
            $(".popup").fadeOut();
            $(".popup img").animate({opacity:"0"})
        })
     
    
        $(".con22>ul>li").on("click",function(){
            f = $(this).index();
            if($(".con23>ul li").eq(f).children("img").is(":hidden")){
                $(".con23>ul li").children("img").fadeOut();
                $(".con23>ul li").eq(f).children("img").fadeIn();
                $(".con22>ul>li").removeClass("on");
                $(".con22>ul>li").eq(f).addClass("on");
            }
        })
    
        $(".scrolltop").on("click",function(){
            $("html, body").animate({scrollTop:"0"}, 800);
        })
    
        $(".arrow1").on("click",function(){
            arrow = $(".arrow1").hasClass("on")
            if(arrow == true){
                $("#side").stop().animate({right:"0px"})
                $(".arrow1").stop().removeClass("on")
            }else{
                $("#side").stop().animate({right:"-250px"})
                $(".arrow1").stop().addClass("on")
            }
        })
    
    
        $(".con2 a").on("mouseenter",function(){
            con2 = $(this).index();
            $(".con2 img").eq(con2).css({transform:"scale(110%)"})
        })
        $(".con2 a").on("mouseleave",function(){
            con2 = $(this).index();
            $(".con2 img").eq(con2).css({transform:"scale(100%)"})
        })
    
        $(".con5>ul>li").on("mouseenter",function(){
            card = $(this).index();
            $(".con5>ul>li").eq(card).css({transform:"translateY(-20px)","box-shadow":"1px 1px 10px #ccc"})        
        })
    
        $(".con5>ul>li").on("mouseleave",function(){
            card = $(this).index();
            $(".con5>ul>li").eq(card).css({transform:"translateY(0px)","box-shadow":"0px 0px 0px #ccc"})        
        })

        $(".con14,.con15").on("mouseenter",function(){
            $(this).children(".bg,.fullscreen").stop().fadeIn();
            $(this).children(".fullscreen").addClass("on")
        })
        $(".con14,.con15").on("mouseleave",function(){
            $(this).children(".bg,.fullscreen").stop().fadeOut();
            $(this).children(".fullscreen").removeClass("on");
        })
    }


    if(matchMedia("screen and (max-width:1339px) and (min-width:768px)").matches){
        let baseline = -600;
        let pos1 = $(".con3_2").offset().top+baseline;
        let pos2 = $(".con4_2").offset().top+baseline;
        let pos3 = $(".con5").offset().top+baseline;
        let pos4 = $(".con16").offset().top+baseline;
        let pos5 = $(".con5").offset().top+baseline;
        $(window).on("scroll",function(){
            let scroll = $(this).scrollTop();
            if(scroll >= pos1){
                $(".con3_2").addClass("on");
                $(".con3_3").delay(500).fadeIn();            
            }
            
            if(scroll >= pos2){
                $(".con4_2").addClass("on");
                $(".con4_3").delay(500).fadeIn();
            }
            if(scroll>=50){
                $(".con2").addClass("on");
            }
    
            if(scroll >= pos3){
                $(".con5").addClass("on");          
            }
    
            if(pos4 <= scroll){
                $(".con16").addClass("on")
            }
            if(pos5<=scroll){
                $(".con5").addClass("move")
    
            }
        })
    
        let a = 0;
    
        $(".gnb_1").on("click",function(){
            a=$(this).index();
            if($(".gnb>ul>li").eq(a).children(".sub").is(":hidden")){
                $(".sub").stop().slideUp();
                $(".gnb>ul>li").stop().eq(a).children(".sub").slideDown();
            }else{
                $(this).children(".sub").stop().slideUp();
            }
            console.log(a)
        })
    
        autovisual();
        function autovisual(){
            let b=0;
            let c=$(".visualimg li").length;    
            auto = setInterval(function(){
                b++;
                if(b==c-1){
                    b=0;
                    $(".visualimg").animate({left:"-400%"},function(){
                        $(".visualimg").css({left:"0px"})
                    });
                    
                }else{
                    $(".visualimg").animate({left:-b*100+"%"})
                }
                $(".nav li>div").animate({width:"10px"})
                $(".nav li>div").eq(b).animate({width:"50%"})
            },2500)
        }
    
        $(".nav li").on("click",function(){
            d = $(this).index();
            clearInterval(auto);
            $(".nav li>div").animate({width:"10px"})
            $(".nav li>div").eq(d).animate({width:"50%"})
            autovisual();
    
            $(".visualimg").animate({left:-d*100+"%"})
    
        })
    
        $(".con14").on("click",function(){
            $(".popup").fadeIn();
            $(".con14_1 img").delay(500).animate({opacity:"1"})
        })
        $(".con15").on("click",function(){
            $(".popup").fadeIn();
            $(".con15_1 img").delay(500).animate({opacity:"1"})
        })
        $(".popup ul").on("click",function(){
            $(".popup").fadeOut();
            $(".popup img").animate({opacity:"0"})
        })
     
    
        $(".con22>ul>li").on("click",function(){
            f = $(this).index();
            if($(".con23>ul li").eq(f).children("img").is(":hidden")){
                $(".con23>ul li").children("img").fadeOut();
                $(".con23>ul li").eq(f).children("img").fadeIn();
                $(".con22>ul>li").removeClass("on");
                $(".con22>ul>li").eq(f).addClass("on");
            }
        })
    
        $(".scrolltop").on("click",function(){
            $("html, body").animate({scrollTop:"0"}, 800);
        })
    
        $(".arrow1").on("click",function(){
            arrow = $(".arrow1").hasClass("on")
            if(arrow == true){
                $("#side").stop().animate({right:"0px"})
                $(".arrow1").stop().removeClass("on")
            }else{
                $("#side").stop().animate({right:"-250px"})
                $(".arrow1").stop().addClass("on")
            }
        })
    
    
        $(".con2 a").on("mouseenter",function(){
            con2 = $(this).index();
            $(".con2 img").eq(con2).css({transform:"scale(110%)"})
        })
        $(".con2 a").on("mouseleave",function(){
            con2 = $(this).index();
            $(".con2 img").eq(con2).css({transform:"scale(100%)"})
        })
    
        $(".con5>ul>li").on("mouseenter",function(){
            card = $(this).index();
            $(".con5>ul>li").eq(card).css({transform:"translateY(-20px)","box-shadow":"1px 1px 10px #ccc"})        
        })
    
        $(".con5>ul>li").on("mouseleave",function(){
            card = $(this).index();
            $(".con5>ul>li").eq(card).css({transform:"translateY(0px)","box-shadow":"0px 0px 0px #ccc"})        
        })

        $(".magazinearrow .right").on("click",function(){
            $(".slidebox>ul").addClass("right")
            if($(".slidebox>ul").hasClass("right")){                
                $(".slidebox>ul").removeClass("left")                                             
            }
        })
        $(".magazinearrow .left").on("click",function(){
            $(".slidebox>ul").addClass("left")   
            if($(".slidebox>ul").hasClass("left")){
                $(".slidebox>ul").removeClass("right")                             
            }
        })

        $(".con14,.con15").on("mouseenter",function(){
            $(this).children(".bg,.fullscreen").stop().fadeIn();
            $(this).children(".fullscreen").addClass("on")
        })
        $(".con14,.con15").on("mouseleave",function(){
            $(this).children(".bg,.fullscreen").stop().fadeOut();
            $(this).children(".fullscreen").removeClass("on");
        })
        
    }
    if(matchMedia("screen and (max-width:767px)").matches){
        let baseline = -300;
        let pos1 = $(".con3_2").offset().top+baseline;
        let pos2 = $(".con4_2").offset().top+baseline;
        let pos3 = $(".con5").offset().top+baseline;
        let pos4 = $(".con16").offset().top+baseline;
        let pos5 = $(".con5").offset().top+baseline;
        $(window).on("scroll",function(){
            let scroll = $(this).scrollTop();
            if(scroll >= pos1){
                $(".con3_2").addClass("on");
                $(".con3_3").delay(500).fadeIn();            
            }
            
            if(scroll >= pos2){
                $(".con4_2").addClass("on");
                $(".con4_3").delay(500).fadeIn();
            }
            if(scroll>=50){
                $(".con2").addClass("on");
            }
    
            if(scroll >= pos3){
                $(".con5").addClass("on");          
            }
    
            if(pos4 <= scroll){
                $(".con16").addClass("on")
            }
            if(pos5<=scroll){
                $(".con5").addClass("move")
    
            }
        })
    
        let a = 0;
    
        $(".gnb_1").on("click",function(){
            a=$(this).index();
            if($(".gnb>ul>li").eq(a).children(".sub").is(":hidden")){
                $(".sub").stop().slideUp();
                $(".gnb>ul>li").stop().eq(a).children(".sub").slideDown();
            }else{
                $(this).children(".sub").stop().slideUp();
            }            
        })
    
        autovisual();
        function autovisual(){
            let b = 0;
            let c = $(".visualimg li").length;    
            auto = setInterval(function(){
                b++;
                if(b == c-1){
                    b=0;
                    $(".visualimg").animate({left:"-400%"},function(){
                        $(".visualimg").css({left:"0px"})
                    });                    
                }else{
                    $(".visualimg").animate({left:-b*100+"%"})
                }
                $(".nav li>div").animate({width:"10px"})
                $(".nav li>div").eq(b).animate({width:"50%"})
            },2500)
        }
    
        $(".nav li").on("click",function(){
            d = $(this).index();
            clearInterval(auto);
            $(".nav li>div").animate({width:"10px"})
            $(".nav li>div").eq(d).animate({width:"50%"})    
            $(".visualimg").animate({left:-d*100+"%"});
            autovisual()
        })
    
        $(".con14").on("click",function(){
            $(".popup").fadeIn();
            $(".con14_1 img").delay(500).animate({opacity:"1"});
        })
        $(".con15").on("click",function(){
            $(".popup").fadeIn();
            $(".con15_1 img").delay(500).animate({opacity:"1"});
        })
        $(".popup ul").on("click",function(){
            $(".popup").fadeOut();
            $(".popup img").animate({opacity:"0"});
        })
     
    
        $(".con22>ul>li").on("click",function(){
            f = $(this).index();
            if($(".con23>ul li").eq(f).children("img").is(":hidden")){
                $(".con23>ul li").children("img").fadeOut();
                $(".con23>ul li").eq(f).children("img").fadeIn();
                $(".con22>ul>li").removeClass("on");
                $(".con22>ul>li").eq(f).addClass("on");
            }
        })
    
        $(".scrolltop").on("click",function(){
            $("html, body").animate({scrollTop:"0"}, 800);
        })
    
        $(".arrow1").on("click",function(){
            arrow = $(".arrow1").hasClass("on")
            if(arrow == true){
                $("#side").stop().animate({right:"0px"})
                $(".arrow1").stop().removeClass("on")
            }else{
                $("#side").stop().animate({right:"-270px"})
                $(".arrow1").stop().addClass("on")
            }
        })
    
    
        $(".con2 a").on("mouseenter",function(){
            con2 = $(this).index();
            $(".con2 img").eq(con2).css({transform:"scale(110%)"})
        })
        $(".con2 a").on("mouseleave",function(){
            con2 = $(this).index();
            $(".con2 img").eq(con2).css({transform:"scale(100%)"})
        })
    
        $(".con5>ul>li").on("mouseenter",function(){
            card = $(this).index();
            $(".con5>ul>li").eq(card).css({transform:"translateY(-20px)","box-shadow":"1px 1px 10px #ccc"})        
        })
    
        $(".con5>ul>li").on("mouseleave",function(){
            card = $(this).index();
            $(".con5>ul>li").eq(card).css({transform:"translateY(0px)","box-shadow":"0px 0px 0px #ccc"})        
        })

        $(".magazinearrow .right").on("click",function(){
            $(".slidebox>ul").addClass("right")
            if($(".slidebox>ul").hasClass("right")){                
                $(".slidebox>ul").removeClass("left");
            }
        })
        $(".magazinearrow .left").on("click",function(){
            $(".slidebox>ul").addClass("left")   
            if($(".slidebox>ul").hasClass("left")){
                $(".slidebox>ul").removeClass("right");                             
            }
        })

        $(".con14,.con15").on("mouseenter",function(){
            $(this).children(".bg,.fullscreen").stop().fadeIn();
            $(this).children(".fullscreen").addClass("on")
        })
        $(".con14,.con15").on("mouseleave",function(){
            $(this).children(".bg,.fullscreen").stop().fadeOut();
            $(this).children(".fullscreen").removeClass("on");
        })

        $(".gnb .menu").on("click",function(){
            
            if($(this).children("ul").hasClass("on")){
                $(".gnb>ul").animate({right:"-110%"})
                $(this).children("ul").removeClass("on");
            }else{
                $(this).children("ul").addClass("on");
                $(".gnb>ul").animate({right:"0px"},function(){
                    
                })
            }
        })
        
    }

    

})