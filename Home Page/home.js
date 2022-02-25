

var i = 0;
var images = [];
var time = 4000;

//IMAGES LIST

images[0] = "sliding1.webp";
images[1] = "sliding2.webp";
images[2] = "sliding3.webp";
images[3] = "sliding4.webp";


//change image

function changeImg(){

    document.slide.src = images[i];
    

    if(i<images.length -1){

        i++;
    }
    else{
        
        i=0;
    }
    setTimeout("changeImg()",time)
}
window.onload = changeImg;


