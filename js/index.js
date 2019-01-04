$(function(){
    $("#gg button").click(function(){
        $('#gg').fadeOut(900);
    })

    var timer;

    $(".area").mouseenter(function(){
        clearTimeout(timer);
        $("#area").show();

    })

    $(".area").mouseleave(function(){
        timer=setTimeout(function(){
            $("#area").hide();
        },100)
    })
    $('#area').mouseenter(function(){
        clearTimeout(timer);
    })
    $('#area').mouseleave(function(){
        $(this).hide();
    })




    $("#myjd").mouseenter(function(){
        clearTimeout(timer);
        $(".myjd").show();

    })

    $("#myjd").mouseleave(function(){
        timer=setTimeout(function(){
            $(".myjd").hide();
        },100)
    })
    $('.myjd').mouseenter(function(){
        clearTimeout(timer);
    })
    $('.myjd').mouseleave(function(){
        $(this).hide();
    })



    $("#qycg").mouseenter(function(){
        clearTimeout(timer);
        $(".qycg").show();

    })

    $("#qycg").mouseleave(function(){
        timer=setTimeout(function(){
            $(".qycg").hide();
        },100)
    })
    $('.qycg').mouseenter(function(){
        clearTimeout(timer);
    })
    $('.qycg').mouseleave(function(){
        $(this).hide();
    })




    $("#khfu").mouseenter(function(){
        clearTimeout(timer);
        $(".khfu").show();

    })

    $("#khfu").mouseleave(function(){
        timer=setTimeout(function(){
            $(".khfu").hide();
        },100)
    })
    $('.khfu').mouseenter(function(){
        clearTimeout(timer);
    })
    $('.khfu').mouseleave(function(){
        $(this).hide();
    })


    $("#wzdh").mouseenter(function(){
        clearTimeout(timer);
        $(".wzdh").show();

    })

    $("#wzdh").mouseleave(function(){
        timer=setTimeout(function(){
            $(".wzdh").hide();
        },100)
    })
    $('.wzdh').mouseenter(function(){
        clearTimeout(timer);
    })
    $('.wzdh').mouseleave(function(){
        $(this).hide();
    })


    // $("#myjd").click(function(){
    //     $(".myjd").toggle();
    // })
    // $("#qycg").click(function(){
    //     $(".qycg").toggle();
    // })
    // $("#khfu").click(function(){
    //     $(".khfu").toggle();
    // })
    // $("#wzdh").click(function(){
    //     $(".wzdh").toggle();
    // })
    $('#area ul li').click(function(){

        $('.area').html($(this).find('a').html());
        // $(this).removeClass("hover");
        $(this).find('a').toggleClass("hover").end().siblings().find('a').removeClass("hover");
    })

    // var fs=document.getElementsByClassName('fs-list');
    // var oDiv=document.getElementsByClassName('mune');
    // var oLi=fs.getElementsByTagName('li');
    // for(var i=0;i<=fs.length;i++){
    //     fs[i].index=i;
    //     fs[i].onmouseover=function(){
    //         for(var j=0;j<=fs.length;j++){
    //             oDiv[j].className="mune";
    //         }
    //         oDiv[this.index].className="mune mune-open"
    //     }
    // }

    $(".fs-col1 ul li").mouseenter(function(){
        clearTimeout(timer);
        var index=$(this).index();
        $(".mune:eq("+index+")").addClass('mune-open').siblings(".mune").removeClass("mune-open")
    })
    $(".fs-col1 ul li").mouseleave(function(){
        timer=setTimeout(function(){
            $('.mune').removeClass("mune-open")
        },100)

    })
    $('.mune').mouseenter(function(){
        clearTimeout(timer);
    })
    $('.mune').mouseleave(function(){
        $('.mune').removeClass("mune-open")
    })

    // 轮播图淡入淡出
    var m=0;
    function sh(){
        $('.picture').eq(m).fadeIn(1000).siblings('.picture').fadeOut(500);
        $(".pick li").eq(m).addClass("c").siblings('li').removeClass('c')
    }

    function run(){
        s=setInterval(function(){
            m++;
            if(m>7){
                m=0;
            }
            sh(m);
        },1900)
    }
    run();
    $(".pic").mouseenter(function(){
        clearInterval(s);

    }).mouseleave(function(){
        run();
    })
    $('.pick li').mouseenter(function(){
        m=$(this).index();
        sh(m);
    })

    $('.right').click(function(){
        m++;
        if(m>7){
            m=0;
        }
        sh(m);
    })
    $('.left').click(function(){
        m--;
        if(m<0){
            m=7;
        }
        sh(m);
    })

    // 选项卡1

    $(".tab-cx").mouseenter(function(){
        $(".item1").show();
        $(".item2").hide();
    })
    $(".tab-gg").mouseenter(function(){
        $(".item2").show();
        $(".item1").hide();
    })

    // 选项卡下面那个很烦的东西

    $(".pho").click(function(){
        var b=200;
        var speed=-10;
        var a;
        a=setInterval(function(){
            $(".phone").css('top',b+speed+'px');
            speed--;
            if(b+speed==20){
                clearInterval(a);
            }
        },5)
        // setTimeout(function(){
        //     $('.service').css("overflow","visible")
        // },1000)


    })

    $('.up').click(function(){
        var c=20;
        var w=10;
        var e;
        e=setInterval(function(){
            $('.phone').css('top',c+w+"px");
            w++;
            if(c+w==200){
                clearInterval(e);
            }
        },5)
        $('.service').css("overflow","hidden")
    })

    // 京东闪购倒计时
    var da=document.getElementsByClassName('day')[0];
    var hour=document.getElementsByClassName('hour')[0];
    var minute=document.getElementsByClassName('minutes')[0];
    var second=document.getElementsByClassName('seconds')[0];
    // console.log(hour,minute,second);

//
    setInterval(getTime,1000);
    function getTime(){
            var d = new Date();
            var ctime = d.getTime();
            var f = new Date('2018-11-01 00:00:00');
            var ftime = f.getTime();
            var sytime = ftime -ctime;
            var day =  Math.floor(sytime /(1000*60*60*24));
            var sytime = sytime % (1000*60*60*24);
            var hours = Math.floor(sytime/(1000*60*60))
            var sytime = sytime %(1000*60*60);
            var minutes = Math.floor(sytime/(1000*60));
            var sytime = sytime %(1000*60);
            var seconds = Math.floor(sytime/1000);
            da.innerHTML=day;
            hour.innerHTML=hours;
            minute.innerHTML=minutes;
            second.innerHTML=seconds;
            // console.log(hours,minutes,seconds);
        }


// 闪购旁边的死亡轮播图
    
    var bo=document.getElementsByClassName('slider_list')[0];
    var prev=document.getElementsByClassName('prev')[0];
    var next=document.getElementsByClassName('next')[0];
    var bul=bo.getElementsByClassName('slider_lister')[0];
    var oli=bo.getElementsByTagName("li");
    next.onclick=function(){
    if(isok){
        isok=false;
        var newa=oli[0].cloneNode(true);
        bul.appendChild(newa);
        ln=setInterval(function(){
            var spc=(-oli[0].offsetWidth - bo.offsetLeft)/8;
            spc = spc > 0 ? Math.ceil(spc) : Math.floor(spc);
            bo.style.left=spc+bo.offsetLeft+'px';
            if(-oli[0].offsetWidth == bo.offsetLeft){
                clearInterval(ln);
                isok=true;
                bul.removeChild(oli[0]);
                bo.style.left=0;
            }
        },20)
    }
}

prev.onclick=function(){
    if(isok){
        isok=false;
        var newa=oli[oli.length-1].cloneNode(true);
        bul.insertBefore(newa,oli[0]);
        bo.style.left="-350px";
        rt=setInterval(function(){
            var spc=(0 - bo.offsetLeft)/8;
            spc = spc > 0 ? Math.ceil(spc) : Math.floor(spc);
            bo.style.left=spc+bo.offsetLeft+'px';
            if(0 == bo.offsetLeft){
                clearInterval(rt);
                isok=true;
                bul.removeChild(oli[oli.length-1]);

            }
        },20)
    }
}


//死亡三连轮播图

var isok=true;
var slider_list1=document.getElementsByClassName('slider_list1');
var poin=document.getElementsByClassName('slider_indicators_btn');
// console.log(slider_list1,poin);
poin[0].onmouseenter=function(){
    poin[0].className="slider_indicators_btn slider_indicators_btn_active";
    poin[1].className="slider_indicators_btn ";

    slider_list1[0].style.left=0;
}
poin[1].onmouseenter=function(){
    poin[1].className="slider_indicators_btn slider_indicators_btn_active";
    poin[0].className="slider_indicators_btn ";
    slider_list1[0].style.left=-350+"px";
}
poin[2].onmouseenter=function(){
    poin[2].className="slider_indicators_btn slider_indicators_btn_active";
    poin[3].className="slider_indicators_btn ";

    slider_list1[1].style.left=0;
}
poin[3].onmouseenter=function(){
    poin[3].className="slider_indicators_btn slider_indicators_btn_active";
    poin[2].className="slider_indicators_btn ";
    slider_list1[1].style.left=-350+"px";
}
poin[4].onmouseenter=function(){
    poin[4].className="slider_indicators_btn slider_indicators_btn_active";
    poin[5].className="slider_indicators_btn ";

    slider_list1[2].style.left=0;
}
poin[5].onmouseenter=function(){
    poin[5].className="slider_indicators_btn slider_indicators_btn_active";
    poin[4].className="slider_indicators_btn ";
    slider_list1[2].style.left=-350+"px";
}
poin[6].onmouseenter=function(){
    poin[6].className="slider_indicators_btn slider_indicators_btn_active";
    poin[7].className="slider_indicators_btn ";

    slider_list1[3].style.left=0;
}
poin[7].onmouseenter=function(){
    poin[7].className="slider_indicators_btn slider_indicators_btn_active";
    poin[6].className="slider_indicators_btn ";
    slider_list1[3].style.left=-350+"px";
}


// console.log($(".slider_list1:eq(0)"));

$('.tab_head_item:eq(0)').mouseenter(function(){
    $(".tab_body_item:eq(0)").css("display","block").siblings('div').css('display',"none")
})
$('.tab_head_item:eq(1)').mouseenter(function(){
    $(".tab_body_item:eq(1)").css("display","block").siblings('div').css('display',"none")
})
$('.tab_head_item:eq(2)').mouseenter(function(){
    $(".tab_body_item:eq(2)").css("display","block").siblings('div').css('display',"none")
})
$('.tab_head_item:eq(3)').mouseenter(function(){
    $(".tab_body_item:eq(3)").css("display","block").siblings('div').css('display',"none")
})
$('.tab_head_item:eq(4)').mouseenter(function(){
    $(".tab_body_item:eq(4)").css("display","block").siblings('div').css('display',"none")
})


    var ccc=document.getElementsByClassName('ccc')[0];
    var ccc_pic=ccc.getElementsByTagName('img');
    var no01=document.getElementsByClassName('no1');
    var no02=document.getElementsByClassName('no2');
    $('.no1').mouseenter(function(){
        $(this).addClass('aaa').siblings('i').removeClass('aaa');
        $('.coupon_list:eq(0)').show().siblings('div').hide();
    })
    $('.no2').mouseenter(function(){
        $(this).addClass('aaa').siblings('i').removeClass('aaa');
        $('.coupon_list:eq(1)').show().siblings('div').hide();

    })
    var right007=document.getElementById('right007');
    var left007=document.getElementById('left007');
    var inner007=document.getElementsByClassName('inner007')[0];
    var imgs=inner007.getElementsByTagName('img');
    var lis=document.getElementsByClassName('lis');
    // console.log(-imgs[0].offsetWidth);
    right007.onclick=function() {
        if(isok){
            isok=false;

            var newNode=imgs[0].cloneNode(true);

            inner007.appendChild(newNode);

            timer=setInterval(function(){

                var speed= (-imgs[0].offsetWidth - inner007.offsetLeft) / 8;

                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                inner007.style.left=speed+inner007.offsetLeft+'px';

                if(-imgs[0].offsetWidth == inner007.offsetLeft){

                    clearInterval(timer);

                    isok=true;

                    inner007.removeChild(imgs[0]);

                    inner007.style.left=0+'px';
                }

            },20);

        }
    }



    left007.onclick=function() {
        if(isok){
            isok=false;

            var newNode=imgs[imgs.length-1].cloneNode(true);

            inner007.insertBefore(newNode,imgs[0]);
            inner007.style.left='-350px';
            timer=setInterval(function(){

                var speed= (0 - inner007.offsetLeft) / 8;

                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                inner007.style.left=speed+inner007.offsetLeft+'px';

                if(0 == inner007.offsetLeft){

                    clearInterval(timer);

                    isok=true;

                    inner007.removeChild(imgs[imgs.length-1]);


                }

            },20);

        }
    }
    yy=setInterval(rune,1500);
    $(".box11").mouseover(function(){
        clearInterval(yy);
    })
    $(".box11").mouseout(function(){
        yy=setInterval(rune,1500);
    })
    function rune(){
         if(isok){
            isok=false;

            var newNode=imgs[0].cloneNode(true);

            inner007.appendChild(newNode);

            timer=setInterval(function(){

                var speed= (-imgs[0].offsetWidth - inner007.offsetLeft) / 8;

                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                inner007.style.left=speed+inner007.offsetLeft+'px';

                if(-imgs[0].offsetWidth == inner007.offsetLeft){

                    clearInterval(timer);

                    isok=true;

                    inner007.removeChild(imgs[0]);

                    inner007.style.left=0+'px';
                }

            },20);

        }
    }

var lastbox=document.getElementsByClassName('swlb_last')[0];
var lastli=lastbox.getElementsByTagName('li');
var lastnext=document.getElementById('next_last');
var lastprev=document.getElementById('prev_last');
// console.log(lastnext,lastbox,lastli);
var isok2=true;
 // console.log(lastbox.offsetLeft);
lastnext.onclick=function(){
    // alert(111);
    if(isok2){
        isok2=false;
        var newa=lastli[0].cloneNode(true);
        lastbox.appendChild(newa);
        last=setInterval(function(){
            // console.log(this);
            var spc=(-lastli[0].offsetWidth - lastbox.offsetLeft)/8;
            spc = spc > 0 ? Math.ceil(spc) : Math.floor(spc);
            lastbox.style.left=spc+lastbox.offsetLeft+'px';
            // console.log(lastli[0].offsetWidth);

            if(-lastli[0].offsetWidth == lastbox.offsetLeft){
                clearInterval(last);
                isok2=true;
                lastbox.removeChild(lastli[0]);
                lastbox.style.left=0;
            }
        },20)
    }
}
lastprev.onclick=function(){
    if(isok2){
        isok2=false;
        var newa=lastli[lastli.length-1].cloneNode(true);
        lastbox.insertBefore(newa,lastli[0]);
        lastbox.style.left="-1190px";
        rt=setInterval(function(){
            var spc=(0 - lastbox.offsetLeft)/8;
            spc = spc > 0 ? Math.ceil(spc) : Math.floor(spc);
            lastbox.style.left=spc+lastbox.offsetLeft+'px';
            if(0 == lastbox.offsetLeft){
                clearInterval(rt);
                isok2=true;
                lastbox.removeChild(lastli[lastli.length-1]);

            }
        },20)
    }
}

// 返回顶部
// var back=document.getElementById('back');
$('#back').click(function(){
    $(document).scrollTop(0);
})
    
                
            


})
