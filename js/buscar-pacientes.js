var botaoBuscarPaciente = document.querySelector("#buscar-pacientes");

botaoBuscarPaciente.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function() {

    var mensagem = document.querySelector("#erro-ajax");
    if (xhr.status == 200){
      mensagem.classList.add("invisivel");
      console.log(xhr.responseText);
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      console.log(pacientes);

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      });
    } else {

      mensagem.classList.remove("invisivel");
    }
  });

  xhr.send();
})
