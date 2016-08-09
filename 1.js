'use strict';

var	ourPlanet = prompt('введите название планеты');
var	visitorOld = +prompt('введите Свой возвраст');
var	girlfriendAge;

if (!isNaN(visitorOld)) {
    girlfriendAge = visitorOld / 2 + 7;
    alert('возвраст допустимой особи обожания ' + girlfriendAge);
	  } else {
    alert('введите ваш возвраст');
	  }
 // а так проще)
/*бла бла
проводим тут всякое*/
