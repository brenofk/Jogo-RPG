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
    console.log(tuboPosition)


}, 10)  

    document.addEventListener('keydown', jump);



