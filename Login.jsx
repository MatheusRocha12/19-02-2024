var login = "teste";
var senha = "teste";

var txtLogin = document.getElementById("txtLogin");
var txtSenha = document.getElementById("txtSenha");

var fazerLogin = (e) => {
    if (txtLogin.value == login && txtSenha.value == senha){
        console.log("Acesso liberado");
    } else {
        console.log("Login ou senha inválidos");
    }
}