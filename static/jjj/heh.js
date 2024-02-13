// by me :]]] Justxd22
//
// https://justxd22.me
//
// https://github.com/justxd22
//
// :3 :] <3
//
// dump way to animate things bc idk how to use tween
//
//

var l = ['i01', 'i02', 'i03', 'i04'];
var runn = true;
var indi = 0;
var userName = "PANDA"

function bb(){
ii()
}

function vcv(){
    var e3 = document.getElementById("bg")
    e3.style.display = "block"
    createDynamicSVG()
    //e4.style.display = "block"
}
function ee(){
    var e1 = document.getElementById("hii")
    var e111 = document.getElementById("btt")
    var e2 = document.getElementById("prog")
    var f2 = document.getElementById("foot")
    e1.classList.add('fadeO');
    e2.classList.add('fadeO');
    e111.style.animation = "fadeOUT 3s forwards";
    f2.style.animation = "fadeOUT 3s forwards";
    setTimeout(vcv, 3000);
}
function rrr(){
    var e11 = document.getElementById("btt")
    e11.style.display = "block";
    e11.addEventListener('click', function() { ee() });
}
function ii(){

    setTimeout(rrr, 2000);
    //setTimeout(ee, 4000);

}

function cx(){
    var e66 = document.getElementById("bbo")
    var e44 = document.getElementById('svg-container');
    var e5 = document.getElementById("tweny")
    e66.classList.add('torr');
    e44.classList.add('torr');
    e5.classList.add('fadeO');
    setTimeout(qqqw, 2000);


}

function blinkyblinky() {
    var pp = Array.from(document.querySelectorAll('.yea'));
    pp.forEach(function(item) {
        l.forEach(function (i) { item.classList.remove(i); })
        item.classList.add(l[Math.floor(Math.random() * l.length)]);
    });
}

function slideshow(){
    var pp = Array.from(document.querySelectorAll('.yea'));
    pp.forEach(function(item) {
        l.forEach(function (i) { item.classList.remove(i); })
        item.classList.add("i01");
    });
    pp[Math.floor(Math.random() * pp.length)].classList.add("i02");
    if (runn == true){
        setTimeout(slideshow, 2000);}
    else{
        pp.forEach(function(item) {
            item.style.display = "none";
        });
    }
}

function slideshow2(){
    var pp = Array.from(document.querySelectorAll('.art'));
    if ("vibrate" in navigator) {
        navigator.vibrate(2000);
      } else {
        console.log("Vibration not supported");
      }
    pp.forEach(function(item) {
        l.forEach(function (i) { item.classList.remove(i); })
        item.classList.add("i01");
    });
    pp[indi].classList.add("i02");
    if (indi == (pp.length -1)) {indi = 0; setTimeout(fin, 3000);}
    else{ indi = indi + 1;}
    console.log(indi);
    if (runn == true){
        setTimeout(slideshow2, 5000);}
    else{
        pp.forEach(function(item) {
            item.style.display = "none";
        });
    }
}

function fin(){
    runn = false;
    // enable reload
    // create ur own and share w fam/friends
    // Thanks For watching ;]
    // stay happy for 2024 long run
    var f2 = document.getElementById("foot")
    f2.style.animation = "";

    var pp = Array.from(document.querySelectorAll('.bbafin'));
    var pp1 = Array.from(document.querySelectorAll('.mmb'));
    pp.forEach(function(item) {
        item.style.display = "block";
    });
    pp1.forEach(function(item) {
        item.style.display = "block";
    });

    var b1 = document.getElementById("btt1");
    var b2 = document.getElementById("btt2");
    b1.addEventListener('click', function() { window.location.href = `/edit?name=${userName}`; });
    b2.addEventListener('click', function() { window.location.reload(true); });


}
function pos(){
    var pp = Array.from(document.querySelectorAll('.yea'));
    var pp2 = Array.from(document.querySelectorAll('.art'));
    pp2.forEach(function(item) {
        item.style.display = "block";
    });
    pp.forEach(function(item) {
        item.style.top = "69%";
    });
        var e90 = document.getElementById("hell")
        e90.classList.remove('fadeO');
    slideshow();
    slideshow2();
    //setTimeout(fin, 12000);
}

function sh() {
    var pp = Array.from(document.querySelectorAll('.yea'));
    pp.forEach(function(item) {
        l.forEach(function (i) { item.classList.remove(i); })
    });
    console.log("HIIIIIIIIII")
    setTimeout(fax, 2000);
}

function fax(){
    var e90 = document.getElementById("hell")
    e90.classList.add('fadeO');
    setTimeout(pos, 2000);
    
}
function qqqw(){
    var e90 = document.getElementById("hell")
    e90.style.display = "block"
    if ("vibrate" in navigator) {
        // Vibrate for 1000 milliseconds (1 second)
        navigator.vibrate(5000);
      } else {
        console.log("Vibration not supported");
      }
    for (var i = 0; i < 30000; i++) {
        setTimeout(blinkyblinky, 1500);
    }
    setTimeout(sh, 4000);

    //e90.classList.add('fadeO');

}

function cxx(){
    var e5 = document.getElementById("tweny")
    e5.style.display = "flex"
    setTimeout(cx, 10000);


}
function createDynamicSVG() {
    const dis = document.getElementById('svg-container');

    const textElement = document.getElementById('text-content');
    if (typeof nameFF !== 'undefined') {userName = nameFF}
    textElement.textContent = userName;
    dis.style.display = " block";
    setTimeout(cxx, 4000);

}