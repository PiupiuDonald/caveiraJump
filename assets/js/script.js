
const esqueleto = document.querySelector('.esqueleto');
const lixo = document.querySelector('.lixo');
const estrelas = document.querySelector('.estrela');

let score = 0;
let record = localStorage.getItem('record') || 0;

const recordElement = document.querySelector('.Recorde');
recordElement.innerHTML = `Recorde : ${record}`;

document.addEventListener('keydown', (jump) => {

    score +=1;

    if(score > record){
        record = score;
    }

    localStorage.setItem('record', record);

    recordElement.innerHTML = `Recorde : ${record}`;

    const scoreElement = document.querySelector('.point');
    scoreElement.innerHTML = `Placar: ${score}`;

  });



const jump = () => {
    esqueleto.classList.add('jump');

    setTimeout(() => {
         esqueleto.classList.remove('jump');
    }, 600);
}

if(Mobile >= 500){
const loop = setInterval(() => {
const lixoPosition = lixo.offsetLeft;
const esqueletoPosition = +window.getComputedStyle(esqueleto).bottom.replace('px', '');
const estrelasPosition =  +window.getComputedStyle(estrelas).right.replace('px', '');

 if(lixoPosition <= 105 && lixoPosition > 0 && esqueletoPosition < 80){
    lixo.style.animation = 'none';
    lixo.style.left = `${lixoPosition}px`;

    esqueleto.style.animation = 'none';
    esqueleto.style.bottom = `${esqueletoPosition}px`;

    esqueleto.src = './img/pose.webp' ;
    esqueleto.style.margin = 0;

    estrelas.style.animation = 'none';
    estrelas.style.right = `${estrelasPosition}px`;

    score = 0;
    const scoreElement = document.querySelector('.point');
    scoreElement.innerHTML = `Placar: ${score}`;


    clearInterval(loop);
 }
}, 10)
}
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

var Mobile = window.innerWidth;

if(Mobile <= 450){
    document.addEventListener('touchstart', (jump) =>{
        score +=1;
    
        if(score > record){
            record = score;
        }
    
        localStorage.setItem('record', record);
    
        recordElement.innerHTML = `Recorde : ${record}`;
    
        const scoreElement = document.querySelector('.point');
        scoreElement.innerHTML = `Placar: ${score}`;
    });

    const loop = setInterval(() => {
        const lixoPosition = lixo.offsetLeft;
        const esqueletoPosition = +window.getComputedStyle(esqueleto).bottom.replace('px', '');
        const estrelasPosition =  +window.getComputedStyle(estrelas).right.replace('px', '');
        
         if(lixoPosition <= 80 && lixoPosition > 0 && esqueletoPosition < 90){
            lixo.style.animation = 'none';
            lixo.style.left = `${lixoPosition}px`;
        
            esqueleto.style.animation = 'none';
            esqueleto.style.bottom = `${esqueletoPosition}px`;
        
            esqueleto.src = './img/pose.webp' ;
            esqueleto.style.margin = 0;
        
            estrelas.style.animation = 'none';
            estrelas.style.right = `${estrelasPosition}px`;
        
            score = 0;
            const scoreElement = document.querySelector('.point');
            scoreElement.innerHTML = `Placar: ${score}`;
        
        
            clearInterval(loop);
         }
        }, 10)

}