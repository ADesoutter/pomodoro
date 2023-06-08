let sp, btn_start, btn_stop, t, s, min;

window.onload = () => {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms=0, s=30, min=25;
}

function update_chrono() {
    ms-=1;
    if(ms==10) {
        ms=1,
        s-=1
    }
    if(s==59) {
        s=0,
        min-=1
    }
    sp[0].innerHTML = min + "min" ;
    sp[1].innerHTML = s + "s" ;
    sp[2].innerHTML = ms + "ms" ;
}

// Mettre en place la fonction start
function start() {
    t=setInterval(update_chrono, 100) ;
    btn_start.disabled = true;
}

// stopper le chrono
function stop() {
    clearInterval(t);
    btn_start.disabled = false;
}
