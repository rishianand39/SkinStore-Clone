

var i = 0;
var images = [];
var time = 4000;

//IMAGES LIST

images[0] = "slidingImage1.PNG";
images[1] = "slidingImage2.PNG";
images[2] = "slidingImage3.PNG";


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


