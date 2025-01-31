

document.addEventListener("DOMContentLoaded", function(e){
    rightMenuHandler();
    mainPartnerSlide();
    privayPopup();
    adminClosePopup()
})

const adminClosePopup = () => {
    $('.loadPopupSection .popupContent .btnDiv').click(function(){
        $(this).closest('.loadPopupSection').removeClass('show');
        $(this).closest('.contentWrapDiv').scrollTop(0);
    })

    $('.loadPopupSection .popupContent .popupCloseBtn').click(function(){
        $(this).closest('.loadPopupSection').removeClass('show');
        $(this).closest('.contentWrapDiv').scrollTop(0);
    })
}

const privayPopup = () => {
    /* privacy popup */
    $('.privacy_view').click(function(e){
        e.preventDefault();
        $('.f_popup_bg').addClass('on');
    })
    $('.f_popup_bg').click(function(){
        $('.f_popup_bg').removeClass('on');
    })
    $('.f_popup_bg .content_wrap').click(function(e){
        e.stopPropagation();
    })
}

const mainPartnerSlide = () => {
    var swiper = new Swiper(".main .partnerSection .slideWrap .mySwiper", {
        loop : true,
        spaceBetween: 10,
        loopedSlides: 1,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".main .partnerSection .slideWrap .pnBtnWrap .nextBtn",
          prevEl: ".main .partnerSection .slideWrap .pnBtnWrap .prevBtn",
        },
    });
}


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
