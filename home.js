
var images = ["colorado_small.jpg",
                "sunrise_small.jpg"];
var captions = ["Colorado | August, 2015",
                "Mt. Whiteny, CA | June, 2015"];
var i = 0;
var interval = setInterval(slideShow, 5000);

function slideShow() {
    i = i%images.length;
    image = images[i];
    caption = captions[i];
    document.getElementById("slide").src=image;
    document.getElementById("slideCaption").innerHTML=caption;
    i++;
}