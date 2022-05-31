//Puanlama ve sayaç kısmı

let point = 0;
let arr = ["otuzikibin", "456905", "onbinleronlarbasamagı", "ellidörtbinbeşyüzkırksekiz", "20000", "24 578", "3300", "121", "300", "40"];
let pointArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function control(qn, ans) {
    let par_id = document.getElementById("quizNumber" + qn);
    if (arr[qn - 1] == ans) {
        par_id.style.backgroundColor = "#80ed99";
        if (pointArr[qn - 1] == 0) {
            point += 10;
        }
        pointArr[qn - 1] = 1;
    } else {
        par_id.style.backgroundColor = "#e63946ff";
        if (pointArr[qn - 1] == 1) {
            point -= 10;
        }
        pointArr[qn - 1] = 0;
    }
    document.getElementById("point").innerHTML = "Puan: " + point;
}

let time_id = document.getElementById("time");
let seconds = 300;
t_int = setInterval(timer, 1000);

function timer() {
    if (seconds <= 0) {
        time_id.innerHTML = "Süre: --:--";
    } else {
        let m = Math.floor(seconds / 60);
        let s = seconds % 60;
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        time_id.innerHTML = m + ":" + s;
        seconds--;
    }
}
