var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i=0; i <= pacientes.length; i++){
  trPaciente = pacientes[i];

  var tdPeso = trPaciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = trPaciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = trPaciente.querySelector(".info-imc");
  var imc = peso / (altura * altura);

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
    tdImc.textContent = imc.toFixed(2);
  }
}
