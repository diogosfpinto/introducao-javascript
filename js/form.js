
var btAdicionarPaciente = document.querySelector("#adicionar-paciente");
btAdicionarPaciente.addEventListener("click",
  function(event) {
    event.preventDefault();

    var form = document.querySelector("form");

    var paciente = obtemPacienteDoForm(form);



    var erros = validaPaciente(paciente);

    if (erros.length > 0){
      exibirMensagensErro(erros);
      return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function exibirMensagensErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function montaTr(paciente){

  var pacienteTr = document.createElement("tr");

  pacienteTr.appendChild(montaTd(paciente.nome), "info-nome");
  pacienteTr.appendChild(montaTd(paciente.peso), "info-peso");
  pacienteTr.appendChild(montaTd(paciente.altura), "info-altura");
  pacienteTr.appendChild(montaTd(paciente.gordura), "info-gordura");
  pacienteTr.appendChild(montaTd(paciente.imc), "info-imc");

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td
}

function obtemPacienteDoForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function validaPaciente(paciente){
  var erros = [];

  if (paciente.nome.length == 0){
    erros.push("O nome não pode ser branco.");
  }

  if (paciente.peso.length == 0){
    erros.push("O peso não pode ser branco.");
  }

  if (paciente.altura.length == 0){
    erros.push("A altura não pode ser branco.")
  }

  if (paciente.gordura.length == 0){
    erros.push("A gordura não pode ser branco.");
  }

  if (!validaPeso(paciente.peso) && paciente.peso.length > 0){
    erros.push("Peso inválido!");
  }

  if (!validaAltura(paciente.altura) && paciente.altura.length > 0){
    erros.push("Altura inválida!");
  }

  return erros;
}
