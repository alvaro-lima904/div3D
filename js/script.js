$('body').mousemove(function(p) {
    let rotateX =  -($(window).innerHeight()/2-p.pageY)/-10;
    let rotateY =  -($(window).innerWidth()/2-p.pageX)/20;
    $('.card').css("transform", "rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)");
});

$(document).mouseout(function(){
    $('.card').css('transform','');
});