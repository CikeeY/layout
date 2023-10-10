window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let 
        btn1 = document.querySelector('.button1'),
        btn2 = document.querySelector('.button2'),
        i = 0,
        contents = document.querySelectorAll('.contentn');


    btn1.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('button1')) {
            contents[i].classList.add('hide');
            i--;
            if (i<0) {
                i=2;
            }
            contents[i].classList.remove('hide');
        }
    });

    btn2.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('button2')) {
            contents[i].classList.add('hide');
            i++;
            if (i>2) {
                i=0;
            }
            contents[i].classList.remove('hide');
        }
    });
});