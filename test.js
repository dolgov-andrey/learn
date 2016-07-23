'use strict';
var schedule1 = {
	'8:22':'first',
	'8:33':'second',
	'9:00':'third'
};
function checkSchedule(schedule){	
	var count=0;
	for(var time in schedule){
		count++;
	}
	switch(count){
		case 0:
		return 'Будильник не установлен';
		break;
		case 1:
		case 2:
		return 'вы установили '+ 
		count +
		' будильник(а),зная что бы любите поспать..'+
		format(schedule) +
		'советуем вам увеличить их число';
		break;
		default:
		return 'вы установили '+
		count +
		'будильников(а)' +
		format(schedule);
	} 
	function format(schedule){
		var text='';
		for(var time in schedule){
			text += time+';';
			}
			return text;
	}
}

console.log(checkSchedule(schedule1));