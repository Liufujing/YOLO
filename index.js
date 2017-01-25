/**
 * Created by Administrator on 2016/11/2 0002.
 */
$(function() {

    $("#search input").on("focus", function () {
        if (this.value == this.defaultValue) {
            this.value = '';
        }
    }).blur(function () {
        if(this.value == ''){
            this.value = this.defaultValue;
        }
    });
    $("#search span").on("click",function(){
        alert($("#search input").val());
    });
    $("#search input").on("keyup",function() {
        if (event.keyCode == 13) {
            alert($("#search input").val());
        }
    })
});
$(function () {
    $('#next').on("click",function () {
        if(!$("#content").is(":animated")){
            $("#content").animate({marginLeft:"-1002px"},600, function () {
            $("#content>li").eq(0).appendTo($("#content"));
            $("#content").css('marginLeft','0px');
            });
        }
    });
    $('#prev').on("click",function () {
        if(!$("#content").is(":animated")){
        $("#content").css('marginLeft','-1002px');
        $("#content>li").eq(2).prependTo($("#content"));
        $("#content").animate({marginLeft:"0px"},600);
    }
    })
    var timer;
    function run(){
        timer = setInterval(function(){
            $('#next').trigger("click");
        },2000)
    }
    run ();
    $("#content,#next,#prev").mouseover(function(){
        clearInterval(timer);
    });
    $("#content,#next,#prev").mouseout(function(){
        run();
    })
});
$(function(){
    $('#next2').on("click",function () {
        if(!$("#img-box").is(":animated")){
            $("#img-box").animate({marginLeft:"-238px"},600, function () {
                $("#img-box>li").eq(0).appendTo($("#img-box"));
                $("#img-box").css('marginLeft','0px');
            });
        }
    });
    $('#prev2').on("click",function () {
        if(!$("#img-box").is(":animated")){
            $("#img-box").css('marginLeft','-1002px');
            $("#img-box>li").eq(3).prependTo($("#img-box"));
            $("#img-box").animate({marginLeft:"0px"},600);
        }
    })
    var timer;
    function run(){
        timer = setInterval(function(){
            $('#next2').trigger("click");
        },2000)
    }
    run ();
    $("#img-box").mouseover(function(){
        clearInterval(timer);
    });
    $("#img-box").mouseout(function(){
        run();
    })
})
