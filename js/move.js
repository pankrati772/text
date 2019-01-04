/*  */
$(function(){
    // console.log(1231231);

var box3=document.getElementsByClassName('slider_wrapper')[0];
var btnl=document.getElementsByClassName('xleft')[0];
var btnr=document.getElementsByClassName('xright')[0];
var contts=box3.getElementsByTagName("a");
// console.log(box3,btnr,btnl,contts);
var isok=true;

var lon;
btnr.onclick=function(){
    if(isok){
        isok=false;
        var newa=contts[0].cloneNode(true);
        box3.appendChild(newa);
        lon=setInterval(function(){
            var spc=(-contts[0].offsetWidth - box3.offsetLeft)/8;
            spc = spc > 0 ? Math.ceil(spc) : Math.floor(spc);
            box3.style.left=spc+box3.offsetLeft+'px';
            if(-contts[0].offsetWidth == box3.offsetLeft){
                clearInterval(lon);
                isok=true;
                box3.removeChild(contts[0]);
                box3.style.left=0;
            }
        },20)
    }
}
btnl.onclick=function(){
    if(isok){
        isok=false;
        var newa=contts[contts.length-1].cloneNode(true);
        box3.insertBefore(newa,contts[0]);
        box3.style.left="-350px";
        rt=setInterval(function(){
            var spc=(0 - box3.offsetLeft)/8;
            spc = spc > 0 ? Math.ceil(spc) : Math.floor(spc);
            box3.style.left=spc+box3.offsetLeft+'px';
            if(0 == box3.offsetLeft){
                clearInterval(rt);
                isok=true;
                box3.removeChild(contts[contts.length-1]);

            }
        },20)
    }
}
    tt=setInterval(running,1500);
    $(".daily_slider").mouseover(function(){
        clearInterval(tt);
    })
    $(".daily_slider").mouseout(function(){
        tt=setInterval(running,1500);
    })
    function running(){
        if(isok){
        isok=false;
        var newa=contts[0].cloneNode(true);
        box3.appendChild(newa);
        lon=setInterval(function(){
            var spc=(-contts[0].offsetWidth - box3.offsetLeft)/8;
            spc = spc > 0 ? Math.ceil(spc) : Math.floor(spc);
            box3.style.left=spc+box3.offsetLeft+'px';
            if(-contts[0].offsetWidth == box3.offsetLeft){
                clearInterval(lon);
                isok=true;
                box3.removeChild(contts[0]);
                box3.style.left=0;
                }
            },20)
        }
    }



});