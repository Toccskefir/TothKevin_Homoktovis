import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

document.addEventListener("DOMContentLoaded", init);

let clicked1;
let clicked2;
let clicked3;
let clicked4;

function init(){
    document.getElementById("img1").addEventListener("click", imgclicked(1));
    document.getElementById("img2").addEventListener("click", imgclicked(2));
    document.getElementById("img3").addEventListener("click", imgclicked(3));
    document.getElementById("img4").addEventListener("click", imgclicked(4));
    clicked1 = 0;
    clicked2 = 0;
    clicked3 = 0;
    clicked4 = 0;
}

function imgclicked(id) {
    switch(id){
        case 1:
            clicked1++;
            document.getElementById("figcap1").textContent = `Kattintások száma: ${clicked1}`;
            break;
        case 2:
            clicked2++;
            document.getElementById("figcap2").textContent = `Kattintások száma: ${clicked2}`;
            break;
        case 3:
            clicked3++;
            document.getElementById("figcap3").textContent = `Kattintások száma: ${clicked3}`;
            break;
        case 4:
            clicked4++;
            document.getElementById("figcap4").textContent = `Kattintások száma: ${clicked4}`;
            break;
    }
}