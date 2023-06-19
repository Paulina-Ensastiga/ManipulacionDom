//Simulación de una petición asincrona
/*
async function f(){ 
    let promise = new Promise ((res, rej) => {
        setTimeout(() => res("done"), 3000);
    })
    
    let result = await promise;

   alert(result);
}
*/
//f();

const btn = document.getElementById("btn-count");
const btns = document.getElementById("btns-count");
const p= document.getElementById("contador");
const btnt = document.getElementById("btnt-actualizarTiempo");
const p2 = document.getElementById("actualizarTiempo");





let counter = 0;
p.textContent = counter;

btn.addEventListener("click", async () => {
    await setTimeout(() => {
        counter++;
        p.textContent = counter;
    }, 1000);
})

btns.addEventListener("click", async () => {
    await setTimeout(() => {
        counter--;
        p.textContent = counter;
    }, 1000);
})

let tiempo = 10;
let intervalo;

function actualizarTiempo() {
  tiempo = parseInt(p2.value);
  document.getElementById("tiempoTranscurrido").textContent = tiempo +" segundos";
  document.getElementById("btn-start").disabled = true;
}

function iniciarTemporizador() {
  intervalo = setInterval(() => {
    tiempo--;
    document.getElementById("tiempoTranscurrido").textContent = tiempo + " segundos";

    if (tiempo <= 0) {
      clearInterval(intervalo);
      tiempo = 0;
      alert("¡Tiempo finalizado!");
    }
  }, 1000);
}