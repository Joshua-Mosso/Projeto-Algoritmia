//Variaveis para guardarem o tempo de jogo
let start, end
//variavel para nome do jogador
let  playerName
let  seconds
//ir buscar as pontuações
//const ranking = JSON.parse(localStorage.getItem('pontuaçao')) || []

//Nome do jogador 
function checkName() {

    playerName = prompt('Como te Chamas?')    
    if (playerName === null || playerName === '') {

        document.getElementById('player').innerHTML = `Nome do Jogador: Anónimo`

    } else {
        

        document.getElementById('player').innerHTML = `Nome do Jogador:${playerName}`
        
    }
}
checkName()
//array para criar as cartas 
let memory_array = [{
        country: 'Cabo verde',
        img: 'data:image/png;base64,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',
    },
    {
        country: 'Cabo verde',
        img: 'data:image/png;base64,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',
    },
    {
        country: 'Portugal',
        img: 'https://www.grupokonecta.com/wp-content/themes/konecta/images/icon-portugal.png',
    },
    {
        country: 'Portugal',
        img: 'https://www.grupokonecta.com/wp-content/themes/konecta/images/icon-portugal.png',
    },
    {
        country: 'Coreia do norte',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnP1Fq6tcEOwPh9Q5Ljk7vG7gZIFVCQ3b8pXQq2N1-xGSG9su&s',
    },
    {
        country: 'Coreia do norte',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnP1Fq6tcEOwPh9Q5Ljk7vG7gZIFVCQ3b8pXQq2N1-xGSG9su&s',
    },
    {
        country: 'Brasil',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfykYhjyq06UsRdAzBWgsFFz-02bU5jeETyeBkMGFowFq5797r-w&s',
    },
    {
        country: 'Brasil',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfykYhjyq06UsRdAzBWgsFFz-02bU5jeETyeBkMGFowFq5797r-w&s',
    },
    {
        country: 'Holanda',
        img: 'data:image/png;base64,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',
    },
    {
        country: 'Holanda',
        img: 'data:image/png;base64,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',
    },
    {
        country: 'China',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMFc1GRdmgsVrQSGy-1GCCC0lgdHnWqKyYDEqNHI2q8n9xY3t&s',
    },
    {
        country: 'China',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMFc1GRdmgsVrQSGy-1GCCC0lgdHnWqKyYDEqNHI2q8n9xY3t&s',
    },
    {
        country: 'Egito',
        img: 'https://www.pngkey.com/png/full/211-2110510_file-egypt-flag-png-bandeira-do-egito-png.png',
    },
    {
        country: 'Egito',
        img: 'https://www.pngkey.com/png/full/211-2110510_file-egypt-flag-png-bandeira-do-egito-png.png',
    },
    {
        country: 'USA',
        img: 'https://m7p7n8w3.stackpathcdn.com/wp-content/uploads/2016/11/usa-flag.png',
    },
    {
        country: 'USA',
        img: 'https://m7p7n8w3.stackpathcdn.com/wp-content/uploads/2016/11/usa-flag.png',
    },
    {
        country: 'Espanha',
        img: 'https://thumbs.dreamstime.com/b/bot%C3%A3o-da-bandeira-espanha-118948314.jpg',
    },
    {
        country: 'Espanha',
        img: 'https://thumbs.dreamstime.com/b/bot%C3%A3o-da-bandeira-espanha-118948314.jpg',
    },
    {
        country: 'Inglaterra',
        img: 'https://img2.gratispng.com/20180330/zwe/kisspng-england-flag-of-the-united-kingdom-flag-of-great-b-france-5abde290a65fd8.2730033515223937446815.jpg',
    },
    {
        country: 'Inglaterra',
        img: 'https://img2.gratispng.com/20180330/zwe/kisspng-england-flag-of-the-united-kingdom-flag-of-great-b-france-5abde290a65fd8.2730033515223937446815.jpg',
    },
    {
        country: 'França',
        img: 'https://everbtn.com/wp-content/uploads/2019/07/france.png',
    },
    {
        country: 'França',
        img: 'https://everbtn.com/wp-content/uploads/2019/07/france.png',
    },
    {
        country: 'Alemanha',
        img: 'https://everbtn.com/wp-content/uploads/2019/07/germany.png',
    },
    {
        country: 'Alemanha',
        img: 'https://everbtn.com/wp-content/uploads/2019/07/germany.png',
    },
]

let memory_values = [];
let memory_tile_ids = [];
let tiles_flipped = 0;
let images = []

//Função para embaralhar as cartas(memory_array)
Array.prototype.memory_tile_shuffle = function () {
    let i = this.length,
        j, temp
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1))
        temp = this[j]
        this[j] = this[i]
        this[i] = temp
    }
}
//função para gerar a tabela 
function newBoard() {
    start = Date.now()
    tiles_flipped = 0;
    let output = '';


    memory_array.memory_tile_shuffle();
    for (let i = 0; i < memory_array.length; i++) {
        output += '<div id ="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i].img + '\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}
newBoard()
//a função memoryFlipTile vai ser executada dentro da função newBoard (onclick)
function memoryFlipTile(tile, val) {
    if (tile.innerHTML == "" && memory_values.length < 2) {
        tile.style.background = '#FFF';
        tile.innerHTML = `<img src="${val}" style="width: 71px;height:71px"></img>`;
        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if (memory_values[0] == memory_values[1]) {
                tiles_flipped += 2;

                memory_values = [];
                memory_tile_ids = [];

                if (tiles_flipped == memory_array.length) {
                    end = Date.now()
                    setPoints()

                    savePoints()
                    alert('JOGO TERMINADO ...JOGAR NOVAMENTE?');
                    document.getElementById('memory_board').innerHTML = "";

                    newBoard()

                }
            } else {
                function flip2Back() {

                    let tile_1 = document.getElementById(memory_tile_ids[0]);
                    let tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url(../img/globo.jpg) no-repeat';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(../img/globo.jpg) no-repeat';
                    tile_2.innerHTML = "";

                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 700)
            }
        }
    }
}
//sistema do tempo total de jogo do jogador 
function setPoints() {
    seconds = (end - start) / 1000
    alert(`Terminaste o jogo em ${seconds} segundos!!!`)
}


// 1. obter o ranking que esta no local storage
function savePoints() {
    let scores

    if (localStorage.getItem('rankingHard')) {
        scores = JSON.parse(localStorage.getItem('rankingHard'))
    } else {
        scores = []
    }

    //objeto para guardar pontos
    
    //let txtScore = document.getElementById('time').innerHTML
    
    //ciclo para percorrer o local storage
    
   const txtPlayer = playerName
   const txtTime = seconds


    let saver = {
            player: txtPlayer,
            time: txtTime
        }
        scores.push(saver)
    

    

    localStorage.setItem('rankingHard', JSON.stringify(scores))

    //verificação de pontos(ranking dos melhores)
    scores.sort(function(a, b){return a.time - b.time});
    

}