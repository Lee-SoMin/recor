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