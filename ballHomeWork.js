
'use strict';

var sSy = 10;
var sPY = 15;
var g = 9.81;
var t;

console.log(getPositoinY(0, 0, 100) === 0);
console.log(getPositoinY(0, 0, 100));

function getPositoinY(startPosY, startSpeedY, curTime) {

	                                        if (startPosY === 0, startSpeedY === 0) {

		                                        return 0;
	}

    var t1, t2;
    var phase;
    var posY;
    var nt1, nt2;
    var testPhase;
// фаза, время от отскока до удара

    t1 = (startSpeedY - Math.sqrt(startSpeedY * startSpeedY + 2 * g * startPosY)) / g;
    t2 = (startSpeedY + Math.sqrt(startSpeedY * startSpeedY + 2 * g * startPosY)) / g;

    phase = t2 - t1;

	                                        if (curTime <= t2) {
		                                        posY = startPosY + startSpeedY * curTime - g * curTime * curTime / 2;

		                                        return posY.toFixed(2);

	} else { // для отскока берем новую задачу
			//с броском. 0Y = 0, и новой нач. скорость

		                                        var newStarSpeedY = g * phase / 2;
		                                        var newStartPosY = 0;
		                                        curTime = ((curTime - t2) % phase);
		                                        posY = newStarSpeedY * curTime - g * curTime * curTime / 2;

		                                        nt1 = (newStarSpeedY - Math.sqrt(newStarSpeedY * newStarSpeedY +
				2 * g * newStartPosY)) / g;

		                                        nt2 = (newStarSpeedY + Math.sqrt(newStarSpeedY * newStarSpeedY +
				2 * g * newStartPosY)) / 2;

		                                        testPhase = nt2 - nt1;

		                                        return posY.toFixed(2);
	}

}
