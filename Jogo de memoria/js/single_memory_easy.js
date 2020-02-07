//variavel para acertos
let matches = 0;
//variavel para tempo do jogo
let start, end
//variavel para Nome do jogador
let playerName
//variavel para tempo de jogo
let seconds
//variavel para as imagens das cartas 
let images = [];
//variavel para certificação de cartas viradadas(2)
let flippedCards = [];
//imagens de gameOver 
let modalGameOver = document.querySelector('#modalGameOver')

//Nome do jogador
function checkName() {

    playerName = prompt('Como te Chamas?')    
    if (playerName === null || playerName === '' ) {

        document.getElementById('player').innerHTML = `Nome do Jogador: Anónimo`

    } else {
        

        document.getElementById('player').innerHTML = `Nome do Jogador:${playerName}`
        
    }
}
checkName()

//ciclo de arrays das imagens das cartas
for (let i = 0 ; i < 16; i++){
    let img = {
        src: '../img/' + i +'.jpg' + '.jpg',
        id: i % 8
    };
    images.push(img);
}

//função para gerar um novo tabuleiro de forma aleatória
startGame();

    function startGame(){
        matches = 0;
        start = Date.now()


        flippedCards = [];
        //chamada da função random que distribui as cartas aleatoriamente
        images = randomSort(images);
        //variaveis das cartas front e back
        let frontFaces = document.getElementsByClassName("front");
        let backFaces = document.getElementsByClassName("back");
       for(let i = 0; i < 16; i++){
           //para remover as classes 'flipped' e 'match'
           frontFaces[i].classList.remove('flipped','match');
           backFaces[i].classList.remove('flipped','match');

         
           //posicionamento das cartas no container
           let card = document.querySelector('#card' + i);
           card.style.left = (i === 0 || i === 8) ? 5 + 'px' : i % 8 * 165 + 5 + 'px';
           card.style.top = i < 8 ? 5 + 'px' : 250 + 'px';

           //rotação das cartas
           card.addEventListener('click',flipCard,false);
           //inserir as imagens em css através do array das imagens
           frontFaces[i].style.background = "url('"+ images[i].src +"')";
           frontFaces[i].setAttribute('id', images[i].id);
           
           
       }
       modalGameOver.style.zIndex = -2 ;
       modalGameOver.removeEventListener('click',startGame,false)
    };

    //embaralhar as cartas (random )
    function randomSort(oldArray){
        let newArray = [];
        //enquanto o array antigo for diferente do array novo , sempre vai gerar um posicionamento de forma aleatoria
        while(newArray.length !== oldArray.length){
            let i = Math.floor(Math.random()*oldArray.length);

            if(newArray.indexOf(oldArray[i]) < 0) {
                newArray.push(oldArray[i]);
            }
        }

        return newArray;


    }
//certificação de 2 cartas voltadas
    function flipCard(){
        if (flippedCards.length < 2){
            let faces = this.getElementsByClassName('face');

            if(faces[0].classList.length > 2){
                return;
            }
            //[0] = face back , [1] = face front
        //adição nas cartas frente e back o class flipped(voltada)
        faces[0].classList.toggle('flipped');
        faces[1].classList.toggle('flipped');

        flippedCards.push(this);

        if(flippedCards.length ===2){
            if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
                //childNodes são os atributos dentro das cartas através do nodelist
                //match é a classe atribuida para o acerto das cartas (efeitos visuais em css)
                flippedCards[0].childNodes[1].classList.toggle('match');
                flippedCards[0].childNodes[3].classList.toggle('match');
                flippedCards[1].childNodes[1].classList.toggle('match');
                flippedCards[1].childNodes[3].classList.toggle('match');

                

                matches++;

                flippedCards = []

                if(matches === 8){
                    end = Date.now();
                    setPoints();
                    savePoints();
                    gameOver();
                }
            }
                
            
        }
        } else {
            flippedCards[0].childNodes[1].classList.toggle('flipped');
            flippedCards[0].childNodes[3].classList.toggle('flipped');
            flippedCards[1].childNodes[1].classList.toggle('flipped');
            flippedCards[1].childNodes[3].classList.toggle('flipped');

            flippedCards = [];
        }
                
    }
    
    //gameover
    function gameOver(){
        modalGameOver.style.zIndex = 10;
        modalGameOver.addEventListener('click',startGame,false)
    }

    //sistema do tempo total de jogo do jogador 
    function setPoints() {
    
    seconds = (end - start) / 1000
    alert(`Terminaste o jogo em ${seconds} segundos!!!`)
    }
    // 1. obter o ranking que esta no local storage
function savePoints() {
    let scores

    if (localStorage.getItem('rankingEasy')) {
        scores = JSON.parse(localStorage.getItem('rankingEasy'))
    } else {
        scores = []
    }

    
    
    
    
    //ciclo para percorrer o local storage
   const txtPlayer = playerName
   const txtTime = seconds


    //objeto para guardar pontos
    let saver = {
            player: txtPlayer,
            time: txtTime
        }

    //verificação de pontos
    scores.sort(function(a, b){return b - a});
    scores.push(saver)
    localStorage.setItem('rankingEasy', JSON.stringify(scores))


}
