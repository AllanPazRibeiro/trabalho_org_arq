
const fs = require('fs');


const leArquivo = () => {
	fs.readFile('assembly.txt', 'utf8', function(err, data) { 
	let lines = data.split('\n');
	var variables_next_arr = [];
	var variables_arr = [];

	for(let line = 0; line < lines.length; line++){
		//let words = lines[line].split('\t');
		var variables = lines[line].match(/((\$[TS])?\d,\$[TS]\d)((,\$[TS]\d)|(,\w*))?/g) != null ? 
		lines[line].match(/((\$[TS])?\d,\$[TS]\d)((,\$[TS]\d)|(,\w*))?/g) : '\t';
		//console.log(variables);
	}

	//Pula 1
	for(let i = 1; i < lines.length; i++){
		var variables_next = lines[i].match(/((\$[TS])?\d,\$[TS]\d)((,\$[TS]\d)|(,\w*))?/g) != null ? 
		lines[i].match(/((\$[TS])?\d,\$[TS]\d)((,\$[TS]\d)|(,\w*))?/g) : '\t';
		console.log(intersection(variables, variables_next));
	}

		//intersection(variables_arr, variables_next_arr);
		console.log('\n');
		console.log('\n');
		console.log('-------------variables_arr--------------------------------------------');
		console.log(variables_arr+ '\n');
		console.log('----------------------------------------------------------------------');
		console.log('\n');
		console.log('\n');
		console.log('-------------variables_next_arr---------------------------------------');
		console.log(Array.isArray(variables_next) + '\n');
		console.log('\n');
		console.log('\n');
		console.log('----------------------------------------------------------------------');
		console.log('-------------intersection---------------------------------------------');
		console.log(intersection(variables, variables_next));
		console.log('----------------------------------------------------------------------');
		
	});
}
leArquivo();

const intersection = (a, b) => {
	return a.filter(value => -1 !== b.indexOf(value));
}
