// Isto vai buscar o HTML de cada caixa para depois mostrar quando é preciso
const textoEvents = document.getElementById("events-box").innerHTML;
const textoResearch = document.getElementById("research-box").innerHTML;

// console.log(textoEvents);
// console.log(textoResearch);

// Estado inicial para as caixas acordeão
document.getElementById("events-box").innerHTML = "";
document.getElementById("research-box").innerHTML = "";

// Muda a classe e mostra/esconde o texto de Events
function changeEvents() {
  if (document.getElementById("events-box").className == "hidden") {
    document.getElementById("events-box").className = "showing";
    document.getElementById("events-box").innerHTML = textoEvents;
  } else {
    document.getElementById("events-box").className = "hidden";
    document.getElementById("events-box").innerHTML = "";
  }
}

// // Muda a classe e mostra/esconde o texto de Research
function changeResearch() {
  if (document.getElementById("research-box").className == "hidden") {
    document.getElementById("research-box").className = "showing";
    document.getElementById("research-box").innerHTML = textoResearch;
  } else {
    document.getElementById("research-box").className = "hidden";
    document.getElementById("research-box").innerHTML = "";
  }
}
