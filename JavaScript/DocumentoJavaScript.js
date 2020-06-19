// script da caixa cadastro:

function validarCadastro(){
    
if (form.nomeC.value == "") || (form.nomeC.value == null){
    alert("Por favor digite o seu nome.");
    return false;
}
if (form.senhaC.value == "") || (form.nomeC.value == null){
    alert("Por favor digite a senha.");
    return false;
}

if (form.emailC.value == "") || (form.nomeC.value == null){
    alert("E-mail inválido!");
    return false;
}

if (form.estado.selected == 0) || (form.nomeC.value == null){
    alert("Por favor selecione o estado.");
    return false;

}else{
    alert("Cadastro concluído.");
    return true;
  }
}

// script da caixa do login:

function validarLogin(){

if (form.nomeL.value == "") || (form.nomeL.value == null){
    alert("Por favor digite o seu nome.");
    return false;
}
if (form.senhaL.value == "") || (form.nomeL.value == null){
    alert("Por favor digite a senha.");
    return false;
}
if (form.confirmacao.value == "") || (form.nomeL.value == null){
    alert("Por favor digite a senha de confirmação.");
    return false;

}else{
   alert("Acesso permitido.");
   return true;
  }
}


