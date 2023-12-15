let img = document.querySelectorAll('img')
let in_galery = document.querySelector('.in_gallery')
let galery = document.querySelector('.gallery')
let closed = document.querySelector('#close')
closed.addEventListener('click', opening)

let fornt = document.getElementById('front')
fornt.addEventListener('click', next)

let back = document.getElementById('back')
back.addEventListener('click', pre)
let display = document.getElementById('display')
let pics = document.getElementById('pics')
let fade_out = null
let c = null
let find = false

img.forEach(
    function (i) {
        i.addEventListener('click', function () { clicked(this) })
    }
)

let nature = ['Gallery Images/nature-1.jpeg', 'Gallery Images/nature-2.jpeg', 'Gallery Images/nature-3.jpeg']
let cities = ['Gallery Images/city-1.jpeg', 'Gallery Images/city-2.jpeg', 'Gallery Images/city-3.jpeg', 'Gallery Images/city-4.jpeg', 'Gallery Images/city-5.jpeg']


function clicked(l) {
    console.log(l)
    c = null
    fade_out = null
    in_galery.classList.remove('d_none')
    galery.classList.add('d_none')
    fade_out = l.src.slice(22).replace('%', ' ').replace('20', '');
    console.log(l.src);

    if (l.parentElement.id == 'g1') {
        display.src = l.src

        document.getElementById('p').innerHTML = 'Nature'

        for (let i in nature) {
            let image = document.createElement('img')
            image.src = nature[i]
            image.setAttribute('class', 'fading fade')

            if (l.src == image.src) image.className = 'fading'; old, c = nature.indexOf(fade_out); find = true;
            pics.append(image)
        }
        console.log(c)
    } else {
        document.getElementById('p').innerHTML = 'Cities'

        display.src = l.src
        for (i in cities) {
            let image = document.createElement('img')
            image.src = cities[i]
            image.setAttribute('class', 'fading fade')

            if (l.src == image.src) image.className = 'fading'; old, c = cities.indexOf(fade_out); find = false;
            pics.append(image)

        }
    }
}

function opening() {

    in_galery.classList.add('d_none')
    galery.classList.remove('d_none')

    let childs = pics.children
    old = null
    c = null
    for (i in childs) {

        pics.lastElementChild.remove()

    }
}

let old = c
let pic = document.getElementsByClassName('fading')
let first = c

let prev_Img;

function next() {

    prev_Img = c;
    c++

    if (find == true) {

        if (c == 3) {
            c = 0
        }
        // d=2

        display.src = nature[c]
        pic[c].classList.remove('fade')
        pic[prev_Img].classList.add('fade')

    } else {

        if (c == 5) {
            c = 0;
        }
        display.src = cities[c]
        pic[c].classList.remove('fade')
        pic[prev_Img].classList.add('fade')
    }
}

function pre() {

    c--
    if (find == true) {
        if (c == -1) {
            c = 2
            d = 0

            display.src = nature[c]
            pic[c].classList.remove('fade')
            pic[d].classList.add('fade')

        } else {
            display.src = nature[c]
            pic[c].classList.remove('fade')
            pic[d = c + 1].classList.add('fade')
        }
    } else {
        if (c == -1) {
            c = 4
            d = 0

            display.src = cities[c]
            pic[c].classList.remove('fade')
            pic[d].classList.add('fade')

        } else {
            display.src = cities[c]
            pic[c].classList.remove('fade')
            pic[d = c + 1].classList.add('fade')
        }
    }
}

document.addEventListener('click', (event) => {
    if (event.target.className == 'fading' || event.target.className == 'fading fade') {

        display.src = event.target.src
        fade_out = display.src.slice(22).replace('%20', ' ')
        let yes = 0
        b = nature.indexOf(fade_out)

        if (b != -1) yes = nature

        if (yes) {
            for (i in nature) {
                if (nature[i] == fade_out) {
                    event.target.classList.remove('fade')
                    c = i
                    console.log("c : " + c)
                } else {
                    pic[i].classList.add('fade')
                }
            }
        } else {
            for (i in cities) {
                if (cities[i] == fade_out) {
                    event.target.classList.remove('fade')
                    c = i
                } else {
                    pic[i].classList.add('fade')
                }
            }
        }
    }
    console.log("c : " + c)
})