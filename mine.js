let img1 = document.getElementById("section_home_div1");
let img2 = document.getElementById("section_home_div2");
let img3 = document.getElementById("section_home_div3");

let arr = [img1, img2, img3];
let i = 0;
let j = 1;
let l = 2;
setInterval(() => {
    if(i == 3){
        i = 0
    }
    if(j == 3){
        j = 0
    }
    if(l == 3){
        l = 0
    }
    arr[i].style.display = "none";
    i++;
    arr[j].style.display = "block";
    j++;
    arr[l].style.display = "none";
    l++;
}, 2000);

let header_phone_menu = document.getElementsByClassName("header_phone_menu")[0];
let header_phone = document.getElementsByClassName("header_phone")[0];
header_phone_menu.onclick = click;
function click(){
    header_phone.style.display = "block";
    header_phone_menu.onclick = function(){
        header_phone.style.display = "none";
        header_phone_menu.onclick = click;
    }
}
header_phone.onclick = function(){
    header_phone.style.display = "none";
};