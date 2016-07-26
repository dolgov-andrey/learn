'use strict';
var salaries1 = {
//	'Petya': 100,
//	'Vasya': 300,
//	'Dasha': 250
};
var currency = '$';

console.log(sumSalaries(salaries1));
console.log(minSalaries(salaries1));
console.log(maxSalaries(salaries1));

function sumSalaries(salaries){
  var sum = 0;
  var state = 0;	
  var hasWorkers = false;
  for (var name in salaries){
	sum += +salaries[name];
	hasWorkers = true;
	state++;
  } if (hasWorkers === false) {
  return 'к сожалению на вашей фирме официальных сотрудников'+
		  ' c зарплатой не найдено';
	} 

  return 'Штат ваших сотрудников: '+ state +
		 ' Общая З/П: '+ sum.toFixed(2) + currency +
		 ' средняя зарплата по фирме: ' +
		 ( (sum / state).toFixed(2) )+ currency;
};

function minSalaries(salaries){
var res = Infinity;
	for(var min in salaries){
		if (res > +salaries[min]){
			res = +salaries[min];
		} 
	return 'минимальный оклад на вашей фирме составляет: '+
		res.toFixed(2) + currency;
	}
};


function maxSalaries(salaries){
var res = -Infinity;
	for(var max in salaries){
		if(res <= +salaries[max]){
		  res = +salaries[max]; 
		} 
	return 'Самый большой оклад на вашей фирме составляет:' +
		res.toFixed(2) + currency;
	}
};