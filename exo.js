
/* TASK: write a simple count down clock that triggers the following behaviours,

=> for multiples at 5, background of the page becomes green
=> less than 10, background becomes red
=> multiplies at 2, background become yellow
NOTES: count down at 60 and reduces by 5 use the % to get the multples of a number*/


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    document.getElementById('time').innerHTML = "local Time : " + h + ":" + m + ":" + s; var t = setTimeout(startTime, 60);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

startTime();