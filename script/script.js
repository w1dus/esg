

document.addEventListener("DOMContentLoaded", function(e){
    rightMenuHandler();
})

const rightMenuHandler = () => {
    $('header .mainSection .menuBtn').click(function(){
        $('.menuCloseBg').addClass('show');
        $('.rightMenuSection').addClass('show')
    })
    $('.menuCloseBg').click(function(){
        $('.menuCloseBg').removeClass('show');
        $('.rightMenuSection').removeClass('show')
    })
    $('.rightMenuSection .btnWrap .closeBtn').click(function(){
        $('.menuCloseBg').removeClass('show');
        $('.rightMenuSection').removeClass('show')
    })

    $('.rightMenuSection .menuList .subMenuBtn').click(function(e){
        e.preventDefault();
        $(this).siblings('.subMenuList').slideToggle();
        $(this).toggleClass('active');
    })
}
