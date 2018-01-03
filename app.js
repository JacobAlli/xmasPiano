document.addEventListener('keydown', function(e){
    var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    audio.load();
    audio.play();
});

var keys = Array.from(document.querySelectorAll('.piano-tile'));

keys.forEach(key => key.addEventListener('transitionend', function(e){
    if(e.propertyName !== 'border-left-color') return;
    this.classList.remove('playing');
}));



jingleBells();







//jingle bells logic...


function ddd(){

    const ddd = setInterval(function(){
        var d = new Event('keydown');
        d.keyCode = 68;
        document.dispatchEvent(d);
    }, 300);

    setTimeout(function(){
        clearInterval(ddd);
    }, 901);

};

function dgasd(){

    var d = new Event('keydown');
    var g = new Event('keydown');
    var a = new Event('keydown');
    var s = new Event('keydown');

    d.keyCode = 68;
    g.keyCode = 71;
    a.keyCode = 65;
    s.keyCode = 83;

    document.dispatchEvent(d);

    setTimeout(function(){
        document.dispatchEvent(g);
    }, 300);

    setTimeout(function(){
        document.dispatchEvent(a);
    }, 600);

    setTimeout(function(){
        document.dispatchEvent(s);
    }, 1100);

    setTimeout(function(){
        document.dispatchEvent(d);
    }, 1250);

};

function fffffdddddssdsg(){
    var f = new Event('keydown');
    var d = new Event('keydown');
    var s = new Event('keydown');
    var g = new Event('keydown');

    d.keyCode = 68;
    f.keyCode = 70;
    s.keyCode = 83;
    g.keyCode = 71;

    document.dispatchEvent(f);

    setTimeout(function(){
        document.dispatchEvent(f);
    }, 300);

    setTimeout(function(){
        document.dispatchEvent(f);
    }, 600);

    setTimeout(function(){
        document.dispatchEvent(f);
    }, 1150);

    setTimeout(function(){
        document.dispatchEvent(f);
    }, 1350);

    setTimeout(function(){
        document.dispatchEvent(d);
    }, 1650);

    setTimeout(function(){
        document.dispatchEvent(d);
    }, 1950);

    setTimeout(function(){
        document.dispatchEvent(d);
    }, 2300);
    setTimeout(function(){
        document.dispatchEvent(d);
    }, 2500);
    setTimeout(function(){
        document.dispatchEvent(d);
    }, 2650);

    setTimeout(function(){
        document.dispatchEvent(s);
    }, 3050);

    setTimeout(function(){
        document.dispatchEvent(s);
    }, 3350);

    setTimeout(function(){
        document.dispatchEvent(d);
    }, 3650);

    setTimeout(function(){
        document.dispatchEvent(s);
    }, 3950);

    setTimeout(function(){
        document.dispatchEvent(g);
    }, 4600);

}

function asd(){
    var f = new Event('keydown');
    var d = new Event('keydown');
    var s = new Event('keydown');
    var g = new Event('keydown');
    var a = new Event('keydown');

    d.keyCode = 68;
    f.keyCode = 70;
    s.keyCode = 83;
    g.keyCode = 71;
    a.keyCode = 65;

    document.dispatchEvent(f);

    setTimeout(function(){
        document.dispatchEvent(f);
    }, 300);

    setTimeout(function(){
        document.dispatchEvent(f);
    }, 600);

    setTimeout(function(){
        document.dispatchEvent(f);
    }, 1150);

    setTimeout(function(){
        document.dispatchEvent(f);
    }, 1350);

    setTimeout(function(){
        document.dispatchEvent(d);
    }, 1650);

    setTimeout(function(){
        document.dispatchEvent(d);
    }, 1950);

    setTimeout(function(){
        document.dispatchEvent(d);
    }, 2300);
    setTimeout(function(){
        document.dispatchEvent(d);
    }, 2500);

    setTimeout(function(){
        document.dispatchEvent(g);
    }, 2650);

    setTimeout(function(){
        document.dispatchEvent(g);
    }, 3050);

    setTimeout(function(){
        document.dispatchEvent(f);
    }, 3350);

    setTimeout(function(){
        document.dispatchEvent(s);
    }, 3650);

    setTimeout(function(){
        document.dispatchEvent(a);
    }, 3950);

}

function jingleBells(){

    ddd();

    setTimeout(function(){
        ddd();
    }, 1200);

    setTimeout(function(){
        dgasd();
    } ,2700);

    setTimeout(function(){
        fffffdddddssdsg();
    } ,5100);

    setTimeout(function(){
        ddd();
    }, 10000);

    setTimeout(function(){
        ddd();
    }, 11200);

    setTimeout(function(){
        dgasd();
    } ,12700);

    setTimeout(function(){
        asd();
    } ,15100);

};
