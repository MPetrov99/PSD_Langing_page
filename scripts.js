// Feedback Slider

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            loop: false
        },
        600: {
            items: 2,
            loop: false
        },
        1000: {
            items: 3,
            loop: false
        },
        1300: {
            items: 4,
            loop: false
        }
    }
})

// Lightbox

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const selectedImage1 = document.querySelectorAll('.phone1_1');
selectedImage1.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');

        const img = document.createElement('img');
        img.src = 'images/hover_img1.png';

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);

        }
        lightbox.appendChild(img);
    })
})

const selectedImage2 = document.querySelectorAll('.phone2_2');
selectedImage2.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');

        const img = document.createElement('img');
        img.src = 'images/hover_img2.png';

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);

        }
        lightbox.appendChild(img);
    })
})

const selectedImage3 = document.querySelectorAll('.phone3_3');
selectedImage3.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');

        const img = document.createElement('img');
        img.src = 'images/hover_img3.png';

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);

        }
        lightbox.appendChild(img);
    })
})

const selectedImage4 = document.querySelectorAll('.phone4_4');
selectedImage4.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');

        const img = document.createElement('img');
        img.src = 'images/hover_img4.png';

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);

        }
        lightbox.appendChild(img);
    })
})

const selectedImage5 = document.querySelectorAll('.phone5_5');
selectedImage5.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');

        const img = document.createElement('img');
        img.src = 'images/hover_img5.png';

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);

        }
        lightbox.appendChild(img);
    })
})

lightbox.addEventListener('click', e => {
    if (e.target != e.currentTarget) return
    lightbox.classList.remove('active')
})