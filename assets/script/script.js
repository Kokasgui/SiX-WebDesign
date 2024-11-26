// Isto vai buscar o HTML de cada caixa para depois mostrar quando é preciso
const textoEvents = document.getElementById("events-box").innerHTML;
const textoResearch = document.getElementById("research-box").innerHTML;
const textoExploratory = document.getElementById("exploratory-box").innerHTML;
const textoDevelopment = document.getElementById("development-box").innerHTML;
const textoDissemination =
  document.getElementById("dissemination-box").innerHTML;

// console.log(textoEvents);
// console.log(textoResearch);
// console.log(textoExploratory);
// console.log(textoDevelopment);
// console.log(textoDissemination);

// Estado inicial para as caixas acordeão
document.getElementById("events-box").innerHTML = "";
document.getElementById("research-box").innerHTML = "";
document.getElementById("exploratory-box").innerHTML = "";
document.getElementById("development-box").innerHTML = "";
document.getElementById("dissemination-box").innerHTML = "";

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

// // Muda a classe e mostra/esconde o texto de Exploratory
function changeExploratory() {
  if (document.getElementById("exploratory-box").className == "hidden") {
    document.getElementById("exploratory-box").className = "showing";
    document.getElementById("exploratory-box").innerHTML = textoExploratory;
  } else {
    document.getElementById("exploratory-box").className = "hidden";
    document.getElementById("exploratory-box").innerHTML = "";
  }
}

// // Muda a classe e mostra/esconde o texto de Development
function changeDevelopment() {
  if (document.getElementById("development-box").className == "hidden") {
    document.getElementById("development-box").className = "showing";
    document.getElementById("development-box").innerHTML = textoDevelopment;
  } else {
    document.getElementById("development-box").className = "hidden";
    document.getElementById("development-box").innerHTML = "";
  }
}

// // Muda a classe e mostra/esconde o texto de Dissemination
function changeDissemination() {
  if (document.getElementById("dissemination-box").className == "hidden") {
    document.getElementById("dissemination-box").className = "showing";
    document.getElementById("dissemination-box").innerHTML = textoDissemination;
  } else {
    document.getElementById("dissemination-box").className = "hidden";
    document.getElementById("dissemination-box").innerHTML = "";
  }
}
