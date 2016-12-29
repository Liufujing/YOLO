/**
 * Created by hp on 2016/11/7.
 */
$(function(){
    var $search = $('#search-input');
    $search.on('focus',function(){
        if(this.value== this.defaultValue){
            this.value = ''
        }
    }).on('blur',function(){
        if(this.value == ''){
            this.value = this.defaultValue
        }
    })
});