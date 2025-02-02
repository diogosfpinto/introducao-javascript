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

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido){
    tdImc.textContent = "Peso Inválido";
    pesoEhValido = false;
    trPaciente.classList.add("imc-invalido");
  }

  if (!alturaEhValida){
    tdImc.textContent = "Altura Inválida!";
    alturaEhValida = false;
    trPaciente.classList.add("imc-invalido");
  }

  if (pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if (peso > 0 && peso <= 500){
    return true;
  } else {
    return false
  }
}

function validaAltura(altura){
  if (altura > 0 && altura <= 3.00){
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura){
  var imc=0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
