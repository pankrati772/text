$(function(){
    var cont = document.getElementsByClassName('more_list')[0];

    // 滚动事件
        window.onscroll=function(){
            // 每次滚到到底部 就请求数据

            // 文档总高度
            var aHeight=document.documentElement.offsetHeight;
            var af=footer.offsetHeight;
            // console.log(aHeight);
            // 可视区域高度
            var cHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
            // console.log(cHeight);
            // console.log(af);
            // 滚动高度
            var sHeight=document.documentElement.scrollTop||document.body.scrollTop;
            // console.log(aHeight-cHeight-af+":"+sHeight);

            // 每次滚到到底部=总高度-可视区域高度
            if(aHeight-cHeight-800<=sHeight){
                // 建立ajax请求数据
                Ajax().get('./js/3.php',function(msg){
                    // console.log(msg);

                    // 如果加载到高度为20000
                    if(aHeight>=15000){
                        cont.innerHTML=cont.innerHTML;

                    }else{
                        // 原有的图片加上闲情请求的图
                            cont.innerHTML+=msg;
                    }         

                });

            }

        }

});