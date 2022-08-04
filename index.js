const img_review=document.querySelector('.img-review');
const practice = document.querySelector('.process');

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
        document.querySelector('.slogan').classList.add('slg-animation');
        box_button();
        document.querySelector('.main').style.display = 'block';
        count = 0;
    }
},5);

let process_list = document.querySelectorAll('.arrow');
console.log(process_list.length);

document.addEventListener('scroll',()=>{
  document.querySelector('.nav').classList.toggle('scroll', window.scrollY > 0);
  document.getElementById('logo').classList.toggle('scroll-logo', window.scrollY > 0);
  document.getElementById('text-logo').classList.toggle('scroll-text-logo', window.scrollY > 0);
  let count = 0;
if(window.scrollY + window.innerHeight > practice.offsetTop){
    let interval_process = setInterval(() => {
        process_list[count].style.opacity = '1';
        console.log(count);
        count++;
        if (count == process_list.length) {
            clearInterval(interval_process);
            count = 0;
        }
    },350);
};

})
function box_button() {
    //  box button
    var a =50;
    var c = document.querySelector(".box-button");
    var h = c.offsetHeight;
    var w = c.offsetWidth;
    var list = [[w,0],[w,h+50],[0,h+50],[0,a],[a,0]];
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(a,0);
    list.forEach((value)=>{ctx.lineTo(value[0],value[1]);});
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.stroke();
    // hover box button
    var check = false;
    c.addEventListener('mouseover',()=>{return check = true;});
    c.addEventListener('mouseout',()=>{ return check = false;});
    if (check) {
        box_button_animation_out()
    }
    else {
        box_button_animation_in()
    }
    function box_button_animation_out() {
        if(a>0){
            let interval_box_button = setInterval(() => {
                ctx.globalCompositeOperation='source-out';
                ctx.beginPath();
                var list = [[w,0],[w,h+50],[0,h+50],[0,a],[a,0]];
                ctx.moveTo(a,0);
                list.forEach((value)=>{ctx.lineTo(value[0],value[1]);});
                ctx.strokeStyle = "white";
                ctx.lineWidth = 3;
                ctx.stroke();
                a--;

                if(a == 0){
                    clearInterval(interval_box_button);
                    return a = 0;
                }
            },1);
        }
    }
    function box_button_animation_in() {
        if(a<50){
            if(a<50){
                let interval_box_button = setInterval(() => {
                    ctx.globalCompositeOperation='source-out';
                    ctx.beginPath();
                    var list = [[w,0],[w,h+50],[0,h+50],[0,a],[a,0]];
                    ctx.moveTo(a,0);
                    list.forEach((value)=>{ctx.lineTo(value[0],value[1]);});
                    ctx.strokeStyle = "white";
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    a++;
                    if(a == 50){
                        clearInterval(interval_box_button);
                       return a = 50;
                    }
                },1);
            }
        }
    }

    // button
    document.querySelector('.button').addEventListener('click',()=>{});

} 
