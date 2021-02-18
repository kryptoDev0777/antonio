
$('#bars').click(
    ()=>{

    if($('.main-list').hasClass('show')){
        $('.dropdown').removeClass('show')
    }
    $('.main-list').toggleClass('show');

})


$('#services').click(
    ()=>{$('.dropdown').toggleClass('show')
})


