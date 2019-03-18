
// const fs = require('fs');

// const leArquivo = () => {
// 	fs.readFile('assembly.txt', 'utf8', function(err, data) { 
// 	let lines = data.split('\n');
// 	var variables_next_arr = [];
// 	var variables_arr = [];
// 	var inst_arr = [];
// 	var inst_next_arr = [];

// 	for (line in lines) {
// 		//let words = lines[line].split('\t');
// 		let variables = lines[line].match(/((\$[TS])\S?\d,\$[TS]\d)\S((,\$[TS]\d)|(,\w*)\S)?/g);
// 		let inst = lines[line].match(/ADDI|ADD|SUB|LW|J|BNE/g);
// 		let variables_next = lines[parseInt(line) + 1] ? lines[parseInt(line)  + 1].match(/((\$[TS])\S?\d,\$[TS]\d)\S((,\$[TS]\d)|(,\w*)\S)?/g) : '';
// 		let inst2 = lines[parseInt(line)  + 1] ? lines[parseInt(line) + 1].match(/ADDI|ADD|SUB|LW|J|BNE/g) : '';
// 		inst_next_arr.push(inst2);
// 		variables_next_arr.push(variables_next);
// 		inst_arr.push(inst);
// 		variables_arr.push(variables);
	
		
// 	}		
// 		console.log('-------------intersection---------------------------------------------');
// 		intersection(variables_arr, variables_next_arr, inst_arr, inst_next_arr);
// 		console.log('----------------------------------------------------------------------');
// 		console.log('\n');
		
// 	});
// }
// leArquivo();

// //Verifica a intersecção
// var intersection = (a, b, inst, inst_next) => {
// 	let aux = [];
// 	let aux2 = [];
// 	let aux3 = [];
// 	let aux4 = [];
// 	let aux5 = [];
// 	//console.log(inst_next);

// 	a.map( value => aux.push(value));
// 	b.map( value => aux2.push(value));
// 	inst.map( value => aux3.push(value));
// 	inst_next.map( value => aux4.push(value));
// 	inst_next.map( value => aux4.push(value));

// 	aux5.concat(aux,aux2,aux3,aux5);
// 	console.log(aux5.concat(aux,aux2,aux3,aux5));


// 	// console.log((aux.filter((value) => aux2.includes(value)+"\n")));
// 	for (i in (aux.filter((value) => aux2.includes(value) + "\n"))) {
// 		//if (aux.filter((value) => aux2.includes(value)+"\n"))
// 		console.log(aux5[i] + " tem conflito com " + aux5[i]);
// 	}
	
// }
const _ = require('lodash');
const fs = require('fs');

const ParseArquivo = () => {
	fs.readFile('assembly.txt', 'utf8', function(err, data) { 
	let lines = data.split('\n');
	var linesObj = [];
	lines.map(line => {
		line = line.replace(/\r/g, '');
		let regexp = /^(?:(?:(\w+)\:\t)|(?:\t\t))(\w{1,4})\t((?:\$\w+)|(?:\w+)|(?:\d))(?:\,((?:\$\w+)|(?:\w+)|(?:\d)))?(?:\,((?:\$\w+)|(?:\w+)|(?:\d)))?$/;
		let matches = regexp.exec(line);
		linesObj.push({
			linesItSelf : line,
			branch: matches ? matches[1] : '',  
			inst: matches ? matches[2] : '',
			parameters: matches ? matches.slice(3) : ''
		})
		
	});

	for(linesIndex in linesObj) {
		intersection(linesObj[linesIndex], linesObj[parseInt(linesIndex) + 1], linesObj[parseInt(linesIndex) + 2]);
	}

	

	// for(lines in linesObj) 
	// 	if(linesObj[parseInt(lines)+1])
			
	// 			console.log(linesObj[lines].inst + ' tem conflito com ' + linesObj[parseInt(lines)+1].inst);
	

		// console.log();
		// console.log('-------------intersection---------------------------------------------');
		// console.log(JSON.stringify(linesObj));
		// console.log('----------------------------------------------------------------------');
		// console.log(JSON.stringify(linesObjNext));
		// console.log('----------------------------------------------------------------------');
		//console.log(intersection(linesObj[0], linesObj[1]));
		// // console.log(intersection(JSON.stringify(linesObj), JSON.stringify(linesObjNext)));
		// console.log('\n');
	});
}
ParseArquivo();

var intersection = (line1, line2, line3) => {
	if(line2 && line3){
		for(let parameter of line2.parameters) {
			if(line1.inst == 'ADD' || line1.inst == 'SUB' || line1.inst == 'ADDI'){

				if(line1.parameters[0] == parameter)
					console.log(line1.inst + ' tem conflito com ' + line2.inst);

			} else if(line1.inst == 'SW' || line1.inst == 'LW') {
				
				if(line1.parameters[1] == parameter)
					console.log(line1.inst + ' tem conflito com ' + line2.inst);

				if(line1.parameters[2] == parameter)
					console.log(line1.inst + ' tem conflito com ' + line2.inst);
			}	
					
		}

		for(let parameter2 of line3.parameters) {
			if(line1.inst == 'ADD' || line1.inst == 'SUB' || line1.inst == 'ADDI'){
					
				if(line1.parameters[0] == parameter2)
				console.log(line1.inst + ' tem conflito com ' + line3.inst);

			} else if(line1.inst == 'SW' || line1.inst == 'LW'){
				
				if(line1.parameters[1] == parameter2)
				console.log(line1.inst + ' tem conflito com ' + line3.inst);

				if(line1.parameters[2] == parameter2)
					console.log(line1.inst + ' tem conflito com ' + line3.inst);
			}
		}
	}
		
			
}


