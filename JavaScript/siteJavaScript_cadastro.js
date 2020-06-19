// script da caixa cadastro:

function validarCadastro(){
    
if (form.nome.value==""){
    alert("Por favor digite o seu nome.");
    return false;
}
if (form.senha.value==""){
    alert("Por favor digite a senha.");
    return false;
}

if (form.email.value==""){
    alert("E-mail inválido!");
    return false;
}

if (form.estado.selected == 0){
    alert("Por favor selecione o estado.");
    return false;
}
  return true;
}

// script da caixa login:

function validarLogin(){
if (form.nome.value.length < 5 || form.nome.value.length > 15)
    alert("O nome deve conter entre 5 e 15 caracteres!");
    return false;
}

if (form.login.value ==""){
    alert("Digite o seu nome!");
    return false;
}

if (form.senha.value.length < 5 || nomeform.senha.value.length > 15)
    alert("A senha deve conter entre 5 e 15 caracteres!");
    return false;
}

if (form.senha.value ==""){
    alert("A senha não pode conter espaços em branco!");
    return false;
}

if (form.senha.value != form.confirmação.value){
    alert ("Senhas não conferem, você digitou duas senhas diferentes!");
    return false;
}

if (form.confirmação.value ==""){
    alert ("Digite a senha de confirmação!");
    return false;
}
    return true;
}
