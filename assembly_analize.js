
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
		inst_arr.push(inst);
		variables_arr.push(variables);
	}
	for (let line2 = 1; line2 < lines.length; line2++){
		let variables_next = lines[line2].match(/((\$[TS])\S?\d,\$[TS]\d)\S((,\$[TS]\d)|(,\w*)\S)?/g);
		let inst2 = lines[line2].match(/ADDI|ADD|SUB|LW|J|BNE/g);
		inst_next_arr.push(inst2);
		variables_next_arr.push(variables_next);
	}

	// //Pula 1
	// for (let line2 = 1; line2 < lines.length; line2++) {
	// 	let variables = lines[line2 + 1].match(/((\$[TS])\S?\d,\$[TS]\d)\S((,\$[TS]\d)|(,\w*)\S)?/g);
	// 	let inst = lines[line2 + 1].match(/ADDI|ADD|SUB|LW|J|BNE/g);
	// 	if (variables != null && variables.length > 0)
	// 		variables_next_arr.push(variables);
	// 	if(inst != undefined && inst.length > 0)
	// 		inst_next_arr.push(inst);
		
	// }
		
		console.log('-------------intersection---------------------------------------------');
		intersection(variables_arr, variables_next_arr, inst_arr, inst_next_arr);
		console.log('----------------------------------------------------------------------');
		console.log('\n');
		
	});
}
leArquivo();

//Verifica a intersecção
var intersection = (a, b, inst, inst_next) => {
	var aux = [];
	var aux2 = [];
	var aux3 = [];
	var aux4 = [];
	var aux5 = [];
	console.log(inst_next);

	a.map( value => aux.push(value));
	b.map( value => aux2.push(value));
	inst.map( value => aux3.push(value));
	inst_next.map( value => aux4.push(value));

	// console.log((aux.filter((value) => aux2.includes(value)+"\n")));
	for (i in (aux.filter((value) => aux2.includes(value)+"\n"))){
		//if (aux.filter((value) => aux2.includes(value)+"\n"))
		console.log(inst[i] + " tem conflito com " + inst_next[i]);
	}
	
}

