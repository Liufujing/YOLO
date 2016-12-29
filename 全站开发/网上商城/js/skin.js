/**
 * Created by hp on 2016/11/7.
 */
$(function(){
    var $nav = $('#nav');
    var $menu = $('#menu-h');
    $('#skin0').on('click',function(){
        $('#skin0').addClass('selected').siblings().removeClass('selected');
        $nav.css('background','#4a4a4a');
        $menu.css('background','#6e6e6e');
    });
    $('#skin1').on('click',function(){
        $('#skin1').addClass('selected').siblings().removeClass('selected');
        $nav.css('background','#B1D410');
        $menu.css('background','#CDE074');
    });
    $('#skin2').on('click',function(){
        $('#skin2').addClass('selected').siblings().removeClass('selected');
        $nav.css('background','#F9AF2A');
        $menu.css('background','#FFCF78');
    });
    $('#skin3').on('click',function(){
        $('#skin3').addClass('selected').siblings().removeClass('selected');
        $nav.css('background','#37C7D4');
        $menu.css('background','#98E0E6');
    });
    $('#skin4').on('click',function(){
        $('#skin4').addClass('selected').siblings().removeClass('selected');
        $nav.css('background','#E44072');
        $menu.css('background','#F296B2');
    });
    $('#skin5').on('click',function(){
        $('#skin5').addClass('selected').siblings().removeClass('selected');
        $nav.css('background','#BE46D8');
        $menu.css('background','#D49AE1');
    })
});