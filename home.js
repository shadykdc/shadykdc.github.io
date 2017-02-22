/* kqshea.com javascript */

/**
 * Change the top image every 5 seconds
 */
var images = ["images/sunrise_small.jpg",
              "images/colorado_small.jpg",
              "images/dock.jpg"];
var captions = ["Mt. Whiteny, CA | June, 2015",
                "Colorado | August, 2015",
                "Roche Harbor, WA | May, 2015"];
var i = 0;
var show = setInterval(nextSlideShowImage, 5000);

function refreshImage(){
    if (i < 0) { i = images.length-1; }
    i = i%images.length;
    image = images[i];
    caption = captions[i];
    document.getElementById("slide").src=image;
    document.getElementById("slideCaption").innerHTML=caption;
    clearInterval(show);
    show = setInterval(nextSlideShowImage, 5000);
}

function nextSlideShowImage() {
    i++;
    refreshImage();
}

function prevSlideShowImage() {
    i--;
    refreshImage();
}

/**
 * Insert buttons for images
 */
var nextButton = document.createElement("button");
nextButton.className = "button-next";
document.getElementById("show").appendChild(nextButton);
nextButton.onclick = function() {
    nextSlideShowImage();
}

var prevButton = document.createElement("button");
prevButton.className = "button-prev";
document.getElementById("show").appendChild(prevButton);
prevButton.onclick = function() {
    prevSlideShowImage();
}

var prevTriangle = document.createElement("div");
prevTriangle.className = "triangle-prev";
prevButton.appendChild(prevTriangle);


var nextTriangle = document.createElement("div");
nextTriangle.className = "triangle-next";
nextButton.appendChild(nextTriangle);

/**
 * Add embedded soundcloud feature
 */

var soundcloud = document.createElement("iframe");
soundcloud.allowTransparency="true";
soundcloud.scrolling="no";
soundcloud.frameborder="no";
soundcloud.src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/250699884&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
soundcloud.width="100%";
soundcloud.height="400px";

//document.getElementById("about").appendChild(soundcloud);

//document.getElementsByClassName("tidbit")[3].innerHTML += "<br></br>";
//document.getElementsByClassName("tidbit")[3].appendChild(soundcloud);