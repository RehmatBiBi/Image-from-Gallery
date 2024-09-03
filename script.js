// JavaScript Code
const images = [
    'https://avatars.mds.yandex.net/i?id=01ceb3020c5cb558fe0d134ce2deb4c9_l-5240131-images-thumbs&ref=rim&n=13&w=1920&h=1080',
    'https://i.pinimg.com/originals/4a/7f/5a/4a7f5a7573b1900ae8292d42c5c186c5.jpg',
    'https://veritusgroup.com/wp-content/uploads/2017/09/gratitude-2017-Sep06-2.jpg',
    'https://i.pinimg.com/originals/3c/76/21/3c7621562c6d6bfbe0eebe5a80e9ef3f.jpg',
    'https://i.pinimg.com/originals/a0/8f/03/a08f0388e61bd73c687347605c52d848.jpg',
    'https://www.phipps.conservatory.org/assets/images/as_blog_image/arbor_day_web2.jpg',
    'https://i.pinimg.com/originals/51/78/c5/5178c5441eba0140373435247096efef.jpg',
    'https://magazin-naturalist.ru/photos/catalog_photos/16965.jpg',
    'https://i.pinimg.com/originals/b3/b2/15/b3b2157c984e78c7f780b78211da5303.jpg'
];

let currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    document.getElementById('gallery-image').src = images[currentIndex];
}
