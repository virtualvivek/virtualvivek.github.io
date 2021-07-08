const images = [
    { img: './assets/img/anim_avatar.png', time: 2000 },
    { img: './assets/img/anim_avatar2.png', time: 80 },
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