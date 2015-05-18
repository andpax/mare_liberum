// JavaScript Document

function formataCpf(inputCpf) {
	if(inputCpf.value.length == 3) {
		inputCpf.value = inputCpf.value +".";
	}
	if(inputCpf.value.length == 7) {
		inputCpf.value = inputCpf.value +".";
	}
	if(inputCpf.value.length == 11) {
		inputCpf.value = inputCpf.value +"-";
	}
}

function formataRg(inputRg) {
	if(inputRg.value.length == 3) {
		inputRg.value = inputRg.value +".";
	}
}

function formataCep(inputCep) {
	if(inputCep.value.length == 5) {
		inputCep.value = inputCep.value +"-";
	}
}

function estado(op) {
	if(op.value == 0) {
		alert("Selecione um Estado!");
	}
}

function escolariedade(op) {
	if(op.value == 0) {
		alert("Selecione uma nível de escolariedade!");
	}
}