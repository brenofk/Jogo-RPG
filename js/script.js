
const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}   

const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(tuboPosition)
    
    if (tuboPosition <= 120 && tuboPosition && marioPosition < 90) {

        tubo.style.animation = 'none'
        tubo.style.left = '${tuboPosition}px';

        mario.style.animation = ('none');
        mario.style.bottom = '${marioPosition}px'; 
        
        mario.src = "./images/mario-over.png"
        
        mario.style.width = "75px";
        mario.style.marginLeft = "-35px"
       
        clearInterval(loop);
    }
},10)      

    document.addEventListener('keydown', jump);



