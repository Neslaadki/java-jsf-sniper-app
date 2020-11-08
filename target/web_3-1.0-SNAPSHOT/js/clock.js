var clock = document.getElementById('clock');

function Timer() {
    var time = new Date();
    var h = (time.getHours() % 24).toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    clock.textContent = h + ':' + m + ':' + s;
}

Timer();
setInterval(Timer, 13000)