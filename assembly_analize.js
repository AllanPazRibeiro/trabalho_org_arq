
const fs = require('fs');

const leArquivo = () => {
	fs.readFile('assembly.txt', 'utf8', function(err, data) { 
	let lines = data.split('\n');
	var variables_next_arr = [];
	var variables_arr = [];
	var inst_arr = [];
	var inst_next_arr = [];

	for (line in lines) {
		//let words = lines[line].split('\t');
		let variables = lines[line].match(/((\$[TS])\S?\d,\$[TS]\d)\S((,\$[TS]\d)|(,\w*)\S)?/g);
		let inst = lines[line].match(/ADDI|ADD|SUB|LW|J|BNE/g);
		let variables_next = lines[parseInt(line) + 1] ? lines[parseInt(line)  + 1].match(/((\$[TS])\S?\d,\$[TS]\d)\S((,\$[TS]\d)|(,\w*)\S)?/g) : '';
		let inst2 = lines[parseInt(line)  + 1] ? lines[parseInt(line) + 1].match(/ADDI|ADD|SUB|LW|J|BNE/g) : '';
		inst_next_arr.push(inst2);
		variables_next_arr.push(variables_next);
		inst_arr.push(inst);
		variables_arr.push(variables);
	
		
	}		
		console.log('-------------intersection---------------------------------------------');
		intersection(variables_arr, variables_next_arr, inst_arr, inst_next_arr);
		console.log('----------------------------------------------------------------------');
		console.log('\n');
		
	});
}
leArquivo();

//Verifica a intersecção
var intersection = (a, b, inst, inst_next) => {
	let aux = [];
	let aux2 = [];
	let aux3 = [];
	let aux4 = [];
	let aux5 = [];
	//console.log(inst_next);

	a.map( value => aux.push(value));
	b.map( value => aux2.push(value));
	inst.map( value => aux3.push(value));
	inst_next.map( value => aux4.push(value));

	aux5.concat(aux,aux2,aux3,aux5);
	console.log(aux5.concat(aux,aux2,aux3,aux5));


	// console.log((aux.filter((value) => aux2.includes(value)+"\n")));
	for (i in (aux.filter((value) => aux2.includes(value) + "\n"))) {
		//if (aux.filter((value) => aux2.includes(value)+"\n"))
		console.log(aux5[i] + " tem conflito com " + aux5[i]);
	}
	
}

