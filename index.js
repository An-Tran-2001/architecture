const img_review=document.querySelector('.img-review');
for(let i=0;i<500;i++){
    let box = document.createElement('div');
    box.classList.add('box');
    img_review.appendChild(box);
}
let boxs = document.querySelectorAll('.box');
let count = 0;
let interval = setInterval(() => {
    boxs[count].classList.add('show');
    count++;
    if (count == boxs.length) {
        clearInterval(interval);
    }
},20);
document.addEventListener('scroll',()=>{
  document.getElementsByClassName('container').toggleClass('scroll', window.scrollY > 0);
})