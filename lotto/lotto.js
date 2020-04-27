
window.onload = init;

function init() {
    var button = document.getElementById("button");
    var ball1 = document.getElementById("ball1");
    var ball2 = document.getElementById("ball2");
    var ball3 = document.getElementById("ball3");
    var ball4 = document.getElementById("ball4");
    var ball5 = document.getElementById("ball5");
    var ball6 = document.getElementById("ball6");
    button.onclick = createLotto;
}

function createLotto() {
    var array = [];
    for(var i=0; i<6; i++) {
        var num = Math.floor(Math.random() * 45) + 1;
        for(var j=0; j<i; j++) {
            if(array[j] == num) {
                i-=i;
                continue;
            }
        }
        array[i] = num;
    }

    array.sort(function(a,b) {
        return a - b;
    });

    ball1.innerHTML = array[0];
    ball2.innerHTML = array[1];
    ball3.innerHTML = array[2];
    ball4.innerHTML = array[3];
    ball5.innerHTML = array[4];
    ball6.innerHTML = array[5];
}