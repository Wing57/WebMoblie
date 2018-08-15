new WOW().init();//WOWjs动画
$(function () {
    TriggerAnimation();// 指定div可视执行动画
})
// function TriggerAnimation() {
//     var TAwinheight = $(window).height();
//     var TAoffset = $(".XXX").offset().top;
//     $(window).scroll(function () {
//         var TAscroll = $(window).scrollTop();
//         if (TAscroll + TAwinheight > TAoffset && TAoffset > TAscroll) {
//             $(".XXX").addClass("XX");
//         }
//         else {
//             $(".XXX").removeClass("XX");
//         }
//     });
// }

