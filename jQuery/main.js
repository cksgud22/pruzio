$(function(){
    // 메뉴
    $(".main >li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })

    // 이미지슬라이드 영역

    $(".fade li").eq(0).siblings().hide();
     // 모든 li 포지션 엡솔로마지막 그림이 위에 보여서 첫번째 그림이 보이도록 설정


    var n = 0; //  현재 보이는 li 번호 

    var count =  $(".fade li").length - 1;
        // li 전체 개수(3)  -1은 인텍스 번호 0번부터 시작이므로 

    setInterval(fadeInOut, 3000);

    // setInterval 은 일정 시간에 한번씩 주기적으로 함수를 호출함


    function fadeInOut(){

        $(".fade li").eq(n).fadeOut();

        if( n ==  count  ) {
            // 0 ==  2
            n=0;
        }else{
            n++;
        }

        $(".fade li").eq(n).fadeIn();

        console.log(n)  // 지금 보이는 n fadein

        // $(".fade li").eq(n).fadeIn().siblings().fadeOut();        

    }//

    //탭
    $(".tab h2").click(function(){
        $(".tab h2").removeClass("on");
        $(this).addClass("on");

        $(".tab ul").hide();
        $(this).next().css({display:"flex"})
    })
    
    //팝업

    $(".p_click").click(function(){
        $(".pop").fadeIn();
    })
    $(".close").click(function(){
        $(".pop").fadeOut();
    })




})//jquery