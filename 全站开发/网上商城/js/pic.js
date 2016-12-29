/**
 * Created by hp on 2016/11/7.
 */
$(function(){
    var index = 0;
    var $picChose = $('#picChose ul li');
    var $picImg = $('#picImg a');
    $picChose.hover(function(){
        index = $picChose.index(this);
        $picImg.eq(index).fadeIn().siblings().fadeOut();
        $picChose.removeClass('cho').css('opacity','0.7').eq(index).addClass('cho').css('opacity','1');
    })

});