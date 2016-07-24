'use strict';
var salaries1= {
	'Petya': 100,
	'Vasya': 300,
	'Dasha': 250
};
var currency = '$';

console.log(sumSalares(salaries1));
console.log(minSalary(salaries1));
console.log(maxSalary(salaries1));

function sumSalares(salaries){
var sum = 0;
var state = 0;	
	for (var name in salaries){
		sum += +salaries[name];
		state++;
		} if (0 === state) {
	return 'к сожалению на вашей фирме официальных сотрудников'+
		' c зарплатой не найдено';
		} 

	return 'Штат ваших сотрудников: '+ state +
		' Общая З/П: '+ sum + currency +
		' средняя зарплата по фирме: ' +
		(Math.ceil(sum/state))+ currency;
}

function minSalary(salaries){
var res;
	for(var min in salaries){
		if (res > +salaries[min]){
			res = +salaries[min];
		} 
	return 'минимальный оклад на вашей фирме составляет: '+
		res + currency;
	}
//		if (0 === res){									// проверка на 0			
//return	'кажется у вас появились рабы, без З/П '+
//		res + currency;	
//		}
};


function maxSalary(salaries){
var res;
	for(var max in salaries){
		if(res <= +salaries[max]){
			res = +salaries[max]; 
		} 
//		if(0 === res) {									// проверка на 0
//	return 'Если вы считаете что отличная зарплата' +
//		' это корочка хлеба и стакан теплой воды...' +
//		' то пора задуматься о премиях';
//		}
	return 'Самый большой оклад на вашей фирме составляет:' +
		res + currency;
	}
};