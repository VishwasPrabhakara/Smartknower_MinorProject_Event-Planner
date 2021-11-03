const countDate = new Date('Sep 10,2022 00:00:00').getTime();

function countdown(){
    const now = new Date().getTime();
    gap = countDate - now;

    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    var d = Math.floor((gap/(day)));
    var h = Math.floor((gap % (day))/(hour));
    var m = Math.floor((gap % (hour))/(minute));
    var s = Math.floor((gap % (minute))/(second));

    d = (d < 10) ? "0" + d :d;
    h = (h < 10) ? "0" + h :h;
    m = (m < 10) ? "0" + m :m;
    s = (s < 10) ? "0" + s :s;

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('seconds').innerText = s;
}
setInterval(function(){
    countdown()
},1000)