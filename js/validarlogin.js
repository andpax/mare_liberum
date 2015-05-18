// JavaScript Document
function validarNome() {
	var nome = document.getElementById("txtLogin").value;

	if(nome == "") {
		alert("Campo nome não pode ser vazio!");
	}
	else {
		if(nome.length < 5) {
			alert("Nome deve ter mais de 5 caracteres!");
		}
	}
}

function validarSenha() {
	var senha = document.getElementById("txtSenha").value;
	
	if(senha == "") {
		alert("Campo senha não pode ser vazio!");
	}
}

alert("Bem vindo " + nome.returnValue);