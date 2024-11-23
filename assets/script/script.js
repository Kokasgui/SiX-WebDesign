const textoEvents = document.getElementById("events-box").innerHTML;
const textoResearch = document.getElementById("research-box").innerHTML;

// console.log(textoEvents);

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

function changeResearch() {
  if (document.getElementById("research-box").className == "hidden") {
    document.getElementById("research-box").className = "showing";
    document.getElementById("research-box").innerHTML = textoResearch;
  } else {
    document.getElementById("research-box").className = "hidden";
    document.getElementById("research-box").innerHTML = "";
  }
}
