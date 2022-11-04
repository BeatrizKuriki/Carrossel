const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run(){
    idx++
    changeImage();
}

function changeImage(){
    if(idx > img.length -1){
        idx = 0
    }else if(idx < 0 ){
        idx = img.length -1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

rightBtn.addEventListener('click', ()=>{
    idd--;

    changeImage();
})

