// JavaScript Document
function validaCpf(inputCpf) {
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

function validaRg(inputRg) {
	if(inputRg.value.length == 3) {
		inputRg.value = inputRg.value +".";
	}
}

function validaCep(inputCep) {
	if(inputCep.value.length == 5) {
		inputCep.value = inputCep.value +"-";
	}
}

function validaOab(inputOab) {
	if(inputOab.value.length == 2) {
		inputOab.value = inputOab.value +".";
	}
}