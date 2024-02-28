const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const image = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
const alts = {
    'pic1.jpg':'Human eye close up',
     'pic2.jpg': 'Rock that resembles a wave',
      'pic3.jpg': 'Purple and white flowers',
       'pic4.jpg': 'Hieroglyphics of pharaoh', 
       'pic5.jpg': 'Moth on a leaf'
}

/* Declaring the alternative text for each image file */

for (const image of image) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    
}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
