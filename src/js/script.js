// Dark mode Light Mode Switch Script

if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.documentElement.style.setProperty('--color_background','#636262');
    document.documentElement.style.setProperty('--color_background_page','#282828');
    document.documentElement.style.setProperty('--color_primary','#EFC6BE');
    document.documentElement.style.setProperty('--color_text','#FAFAFA');
    document.documentElement.style.setProperty('--color_light_primary','#634A45');
    
    document.querySelectorAll('.repo-title').forEach(function(element) {
      element.className += " invert";
    });
    document.querySelectorAll('.repo-stars').forEach(function(element) {
      element.className += " invert";
    });
    document.querySelectorAll('.repo-forks').forEach(function(element) {
      element.className += " invert";
    });
}


// Avatar View Animation Script

const images = [
    { img: './assets/img/anim_avatar.png', time: 2000 },
    { img: './assets/img/anim_avatar2.png', time: 90 },
    { img: './assets/img/anim_avatar3.png', time: 110 }
];

const img = document.getElementById('avatar');
let index = 0;

function showNextAvatar() {
  const image = images[index++];
 if(index >= images.length){
     index = 0;
 }
  
  img.src = image.img;
  setTimeout(showNextAvatar, image.time);
};

showNextAvatar();


// Scrolling Animation Script


function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop-45; // -45 for 45px padding
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 55); //here 55 is velocity
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}