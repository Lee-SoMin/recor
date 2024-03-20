setInterval(function(){
    $("#slide ul").delay(3000);
    $("#slide ul").animate({
        marginLeft: '-1920px'
    });
    $("#slide ul").delay(3000);
    $("#slide ul").animate({
        marginLeft: '-3840px'
    });
    $("#slide ul").animate({
        marginLeft: '0px'
    },0);
});

//tab
function openBoard(evt, boardName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("board");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" opacity", "");
    }
    document.getElementById(boardName).style.display = "block";
    evt.currentTarget.className += " opacity";
}

// img_change

$(function(){
    $(".img").hide();
    $(".img1").show();
    $("#button1").click(function(){

            $(".img1").fadeIn().siblings().fadeOut();
    });	
    $("#button2").click(function(){

            $(".img2").fadeIn().siblings().fadeOut();
    });	
    $("#button3").click(function(){

            $(".img3").fadeIn().siblings().fadeOut();
    });	
    $(".link ul li a").click(function(){
        $(this).parent().addClass("on").siblings().removeClass("on")
    });
});

// scroll
$(".more").click(function(){
    $("body,html").animate({
        scrollTop: 2160
    },700)
});
