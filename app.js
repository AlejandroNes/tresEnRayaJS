//variables
const botones = document.querySelector(".botones");
const resultado1 = document.querySelector(".resultado1");
const resultado2 = document.querySelector(".resultado2");
const ganador = document.querySelector(".ganador");
const pPlayer = document.querySelector("#pPlayer");
const pComputer = document.querySelector("#pComputer");
let puntosPlayer = 0;
let puntosComputer = 0;
let player, computer;



//eventos
(()=>{
    botones.addEventListener("click", ejecutarApp);
})()

//funciones
function ejecutarApp(e){
    if(e.target.classList.contains("btn")){
        const opcion = Number(e.target.getAttribute("data-id"));
        player = opcion;
        resultado1.innerHTML = `
        <img class="img-fluid" src="img/${player}.png" alt="">
        `
        computer = Math.ceil(Math.random()*3);
        resultado2.innerHTML = `
        <img class="img-fluid" src="img/${computer}.png" alt="">
        `
        //CONDICIONAR PARA VER EL GANADOR
        if(player === 1 && computer === 3){
            console.log('ganaste');
            resultado1.className = 'player shadow p-2 border-bottom border-5 border-primary'
            resultado2.className = 'player shadow p-2 border-bottom border-5 border-danger'
            puntosPlayer++;
        }else if( player === 2 && computer === 1 ){
            console.log('ganaste')
            resultado1.className = 'player border-bottom border-5 border-primary'
            resultado2.className = 'player border-bottom border-5 border-danger'
            puntosPlayer++;
        }else if( player === 3 && computer === 2 ){
            console.log('ganaste')
            resultado1.className = 'player border-bottom border-5 border-primary'
            resultado2.className = 'player border-bottom border-5 border-danger'
            puntosPlayer++;
        }else if(player === computer){
            console.log('empate')
            resultado1.className = 'player border-bottom border-5 border-primary'
            resultado2.className = 'player border-bottom border-5 border-primary'
        }
        else{
            console.log('perdiste')
            puntosComputer++;
            resultado2.className = 'player border-bottom border-5 border-primary'
            resultado1.className = 'player border-bottom border-5 border-danger'
        }

        pPlayer.textContent = puntosPlayer;
        pComputer.textContent = puntosComputer;

        if(puntosPlayer === 5){
            ganador.innerHTML = `
            <h1 class="text-center text-primary m-0">GANASTE..!</h1>
            <a href="index.html" class="btn btn-outline-danger">Reiniciar</a>
            `
              }
        if(puntosComputer === 5){
            ganador.innerHTML = `
            <h1 class="text-center text-danger m-0">PERDISTE..!</h1>
            <a href="index.html" class="btn btn-outline-danger">Reiniciar</a>
            `
               }
        
    }
}

