$(document).ready(function(){
    $('.accordion-item').click(function(){
        
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).find('.accordion-content').slideup();
        }else{
            $(this).addclass('open');
            $(this).find('.accordion-content').slideDown();
        }
       
    });

}
)