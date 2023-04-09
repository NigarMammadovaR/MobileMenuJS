


let toggleStatus = 1;
function toggleMenu() {
  if(toggleStatus == 1){
    document.getElementById("drop").style.display = "block";
    toggleStatus = 0;
  } else if(toggleStatus == 0 ){
    document.getElementById("drop").style.display = "none";
    toggleStatus = 1;
  }
}

let blurBack = document.querySelector("#blur");
let rotateImg = 1;
let mobileMenu = document.querySelector("#menu");
function rotateImage() {
  if(rotateImg == 1){
    document.getElementById('rotated').style.transform = 'rotate(90deg)';
    blurBack.classList.add("blur");
    mobileMenu.classList.add("active")
    rotateImg = 0;
  } else if(rotateImg == 0){
    document.getElementById('rotated').style.transform = 'rotate(0deg)';
    blurBack.classList.remove("blur");
    mobileMenu.classList.remove("active")
    rotateImg = 1;
  }
}