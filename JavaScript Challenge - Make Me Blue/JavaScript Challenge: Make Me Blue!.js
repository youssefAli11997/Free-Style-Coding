// challenge link : https://tutorialzine.com/2014/05/javascript-challenge-make-me-blue

//01
$('#me').blue();

//02
$(".wants-to-be-blue").blue();

//03
$("li").eq(3).blue();

//04
$("#make-me-blue").blue();
$("section").eq(0).children().eq(3).blue();
$("section").eq(1).children().eq(0).children().eq(0).blue();
$("section").eq(1).children().eq(3).children().eq(0).children().eq(1).blue();
$("section").eq(1).children().eq(4).children().eq(0).blue();

//05
var arr = [7,1,8,5,3,0,2,6,4];
for(var i=0; i<9; i++)
    $('div').eq(arr[i]).blue();
    
//06
$("div:not(.bomb)").blue();

//07
setTimeout(function(){
    $('div').blue();
}, 1000);

//08
$('button').trigger('click');
$('div').blue();

//09
$('#' + $('#map').text().split(' ').join(', #')).blue();

// another solution // same result
var ids = $('#map').text().split(' ');
for(var i=0; i<5; i++)
    $('#'+ids[i]).blue();
    
//10
setInterval(function(){
    $('div:not(.bomb)').blue();
},100);
