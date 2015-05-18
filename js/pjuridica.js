// JavaScript Document

function validaCnpj(inputCnpj) {
	if(inputCnpj.value.length == 2) {
		inputCnpj.value = inputCnpj.value +".";
	}
	if(inputCnpj.value.length == 6) {
		inputCnpj.value = inputCnpj.value +".";
	}
	if(inputCnpj.value.length == 10) {
		inputCnpj.value = inputCnpj.value +"/";
	}
	if(inputCnpj.value.length == 15) {
		inputCnpj.value = inputCnpj.value +"-";
	}
}

function validaCep(inputCep) {
	if(inputCep.value.length == 5) {
		inputCep.value = inputCep.value +"-";
	}
}