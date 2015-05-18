// JavaScript Document

function validarSenha () {
	var senha = document.getElementById("txtSenha");
	
	if(senha.value.length < 8) {
		alert("Senha deve conter no mínimo 8 caracteres!");
	}
}

function confirmar() {
	var nome = document.getElementById("txtNome");
	var email = document.getElementById("txtEmail");
	var confsenha = document.getElementById("txtConfSenha");
	var senha = document.getElementById("txtSenha");
	
	if(confsenha.value != senha.value) {
		alert("A senha não confere!");
	}
	else {
		if(nome.value != "" && email.value != "" && confsenha.value != "" && senha.value != "") {	
			alert("Cadastro efetuado com sucesso!");
		}
	}
}