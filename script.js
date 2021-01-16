let image = document.querySelector('#image-container img')
let i = 0;
function changeImage(){
     if (i<10){
          i++;
          image.src = `Images/${i}.jpg`;
     }
     else{
          i=0;
     }
     setTimeout("changeImage()", 3000);
}

window.onload = changeImage;