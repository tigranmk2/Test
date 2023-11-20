
window.onscroll = function () {
    let logo = document.querySelector('.logo_bottom')
    let titleBottom = document.querySelector('.title_bottom')

    if (scrollY >= logo.offsetTop - screen.availHeight + 200) {
        logo.classList.add('animate__bounce')
        titleBottom.classList.add('animate__flash')
    }

    let hand = document.querySelector('.hand')
    let shw = document.querySelector('.shawurma')
    let title = document.querySelector('.mobile_title')

    if (scrollY >= hand.offsetTop - screen.height + 100) {
        hand.classList.remove('efect_one')
        hand.classList.add('animate__fadeInLeft')
        shw.classList.remove('efect_two')
        shw.classList.add('animate__fadeInRight')
        title.classList.remove('efect_one')
        title.classList.add('animate__bounceInUp')
    }

    let el = document.querySelector('.effect_one')
    let eqq = document.querySelector('.effect_two')

    if (scrollY >= eqq.offsetTop - screen.availHeight) {

        eqq.classList.remove('effect_two')
        eqq.classList.add('animate__fadeInLeft')

    }



    if (scrollY >= el.offsetTop - screen.availHeight) {
        el.classList.remove('effect_one')
        el.classList.add('animate__fadeInRight')


    }


}



let offset = 0;
let sliderLine = document.querySelector('.itc-slider__items');
let nextElement = document.querySelector(".next");
let prevElement = document.querySelector('.prev')

nextElement.addEventListener('click', function () {
    offset = offset + 500;
    if (offset > 3000) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
})

prevElement.addEventListener('click', function () {
    offset = offset - 500;
    if (offset < 0) {
        offset = 3000
    }
    sliderLine.style.left = -offset + 'px';
})

const chatOutput = document.getElementById('chatOutput');
const chatInput = document.getElementById('chatInput');

function sendMessage() {
    const message = chatInput.value;
    if (message.trim() !== '') {
        chatOutput.innerHTML += '<p style="background-color: #aec5eb; padding: 10px 5px; border-radius: 10px;"><strong>Դուք:</strong> ' + message + '</p>';
        chatOutput.innerHTML += '<p style="background-color: #c1e6d4; padding: 10px 5px; border-radius: 10px;"><strong>Քարտուղար:</strong> ' + "Ձեր նամակը հասել է` սպասեք պատասխանին:" + '</p>';

        chatInput.value = '';
    }
}

let icon = document.querySelector('.chat_icon');
let chat = document.querySelector('.chat');

icon.onclick = function () {
    chat.classList.toggle('none')
    // icon.addEventListener('click', function(){
    //     chat.classList.add('none')
    // })
}

let movableElement = document.querySelector('.pepperoni');

let initialX;
let initialY;
let cursorX;
let cursorY;

function startMove(event) {
  event.preventDefault(); 
  initialX = event.clientX;
  initialY = event.clientY;
  document.addEventListener('mousemove', moveElement);
  document.addEventListener('mouseup', endMove);
}

function moveElement(event) {
  cursorX = event.clientX ;
  cursorY = event.clientY ;
  let moveX = cursorX ;
  let moveY = cursorY ;
  movableElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

function endMove() {
  document.removeEventListener('mousemove', moveElement);
  document.removeEventListener('mouseup', endMove);
}

movableElement.addEventListener('mousedown', startMove);


