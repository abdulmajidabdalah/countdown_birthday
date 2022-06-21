// set the date we're counting down to
var countDownDate = new Date("May 27, 2023 00:00:00").getTime();

// update the count down every 1 second
var x = setInterval(function() {
    // get todays date and time
    var now = new Date().getTime();

    // find the distance between now and the count down date
    var distance = countDownDate - now;

    // time calculation for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "-Hari /" + hours + "-Jam /" + minutes + "-Menit /" + seconds + "-Detik ";

    // if the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "KADALUARSA!";
    }
}, 1000);

var mainContent = document.getElementById('main-content');
var tombol = document.querySelector('#tombol');

tombol.onclick = function() {
    mainContent.classList.toggle('dark-mode');
    tombol.classList.toggle('bg-light');
}