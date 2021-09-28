var song1 = document.getElementById('song1');
var song2 = document.getElementById('song2');
var song3 = document.getElementById('song3');
var song4 = document.getElementById('song4');
var song5 = document.getElementById('song5');
var song6 = document.getElementById('song6');
var song7 = document.getElementById('song7');
var song8 = document.getElementById('song8');
var song9 = document.getElementById('song9');

var keyList = [];

var key = document.querySelectorAll('div');
console.log(key);

window.addEventListener("keydown", kitaClicked);
window.addEventListener("keyup", takTekan);

function kitaClicked (evt) {
    console.log(evt);
    keyList[evt.keyCode] = true;

    if (keyList[65]) {
        song1.play();
        key[0].classList.add("active");
    }
    if (keyList[87]) {
        song2.play();
        key[1].classList.add("active");
    }
    if (keyList[83]) {
        song3.play();
        key[2].classList.add("active");
    }
    if (keyList[68]) {
        song4.play();
        key[3].classList.add("active");
    }
    if (keyList[38]) {
        song5.play();
        key[6].classList.add("active");
    }
    if (keyList[13]) {
        song6.play();
        key[4].classList.add("active");
    }
    if (keyList[39]) {
        song7.play();
        key[7].classList.add("active");
    }
    if (keyList[40]) {
        song8.play();
        key[8].classList.add("active");
    }
    if (keyList[37]) {
        song9.play();
        key[5].classList.add("active");
    }
}
function takTekan (evt) {
    if (keyList[65]) {
        song1.play();
        key[0].classList.remove("active");
    }
    if (keyList[87]) {
        song2.play();
        key[1].classList.remove("active");
    }
    if (keyList[83]) {
        song3.play();
        key[2].classList.remove("active");
    }
    if (keyList[68]) {
        song4.play();
        key[3].classList.remove("active");
    }
    if (keyList[38]) {
        song5.play();
        key[6].classList.remove("active");
    }
    if (keyList[13]) {
        song6.play();
        key[4].classList.remove("active");
    }
    if (keyList[39]) {
        song7.play();
        key[7].classList.remove("active");
    }
    if (keyList[40]) {
        song8.play();
        key[8].classList.remove("active");
    }
    if (keyList[37]) {
        song9.play();
        key[5].classList.remove("active");
    }
    delete keyList[evt.keyCode];
}