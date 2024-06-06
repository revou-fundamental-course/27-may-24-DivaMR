// ini js
function replaceName () {
    let name = prompt ("Halo, Siapa nama anda?", "");
    document.getElementById("name"). innerHTML = name
}

replaceName();

let namaInput = document.getElementById("nama")

// form validation
function formValidation() {
    let namaInput = document.getElementById('nama').value;
    console.log(namaInput);
}

// form-input


let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;
    
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log('index ' + (indexSlide) + ' Adalah index image yang ditampilkan');
}

setInterval (() => nextSlide(1),  3000); 