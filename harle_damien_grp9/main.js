
/* On met les images dans un tableau */
let images = [
	{image:"img/slider/1.jpg"},
	{image:"img/slider/2.jpg"},
	{image:"img/slider/3.jpg"}
]


let i = 1;
let interval;

/* Slide automatique des images */
function apparitionImages(){
    i++;
    
    if(i > images.length -1){
        i = 0;
    }
    $(".balaco").attr("src", images[i].image);
}

/* Slide manuel des images */
$(".fa-arrow-left").click(function(){
    i--;
    if(i<0){
        i = images.length -1;
    }
    $(".balaco").attr("src", images[i].image);
})

$(".fa-arrow-right").click(function(){
    i++;
    if(i>0){
        i = images.length -1;
    }
    $(".balaco").attr("src", images[i].image);
})

/* Effet paralaxe */
$(window).scroll(function(){
    console.log(scrollY);
    let vit = - scrollY/25;
    $(".moto1").css("background-position-y", vit + "px")
})

$(window).scroll(function(){
    console.log(scrollY);
    let vit = - scrollY/25;
    $(".moto2").css("background-position-y", vit + "px")
})

$(window).scroll(function(){
    console.log(scrollY);
    let vit = - scrollY/25;
    $(".moto3").css("background-position-y", vit + "px")
})

$(window).scroll(function(){
    console.log(scrollY);
    let vit = - scrollY/25;
    $(".moto4").css("background-position-y", vit + "px")
})

/* On règle le temps de cyclage des images */
interval = setInterval(apparitionImages, 2000);