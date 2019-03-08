
const fs = require('fs');

const leArquivo = () => {
	fs.readFile('assembly.txt', 'utf8', function(err, data) { 
	let lines = data.split('\n');
	var variables_next_arr = [];
	var variables_arr = [];

	for(let line = 0; line < lines.length; line++){
		//let words = lines[line].split('\t');
		let variables = lines[line].match(/((\$[TS])\S?\d,\$[TS]\d)\S((,\$[TS]\d)|(,\w*)\S)?/g);
		if (variables != null && variables.length > 0){
			variables_arr.push(variables);
		}
	}

	//Pula 1
	for(let line2 = 1; line2 < lines.length; line2++){
		let variables = lines[line2].match(/((\$[TS])\S?\d,\$[TS]\d)\S((,\$[TS]\d)|(,\w*)\S)?/g);
		if (variables != null && variables.length > 0) {
			variables_next_arr.push(variables);
		}
	}
	
		console.log('\n');
		console.log('-------------variables_arr--------------------------------------------');
		console.log(variables_arr+ '\n');
		console.log('----------------------------------------------------------------------');
		console.log('\n');
		console.log('-------------variables_next_arr---------------------------------------');
		console.log(variables_next_arr + '\n');
		console.log('\n');
		console.log('----------------------------------------------------------------------');
		console.log('\n');
		console.log('-------------intersection---------------------------------------------');
		console.log(intersection(variables_arr, variables_next_arr));
		console.log('----------------------------------------------------------------------');
		console.log('\n');
		
	});
}
leArquivo();

//Verifica a intersecção
const intersection = (a, b) => {
	var aux = [];
	var aux2 = [];
	for(let i = 0; i < a.length; i++) {
		aux.push(a[i]);
	}

	for(let j = 0; j < b.length; j++) {
		aux2.push(b[j]);
	}
	return aux.filter(value => aux2.includes(value)+"\n");
}

