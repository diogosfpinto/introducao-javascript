var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var trPaciente = pacientes[i];

  var tdPeso = trPaciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = trPaciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = trPaciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso <= 0 || peso >= 1000){
    tdImc.textContent = "Peso Inválido";
    pesoEhValido = false;
    trPaciente.classList.add("imc-invalido");
  }

  if (altura <= 0 || altura >= 3){
    tdImc.textContent = "Altura Inválida!";
    alturaEhValida = false;
    trPaciente.classList.add("imc-invalido");
  }

  if (pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura){
  var imc=0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
