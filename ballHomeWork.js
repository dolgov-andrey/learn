window.getPositionY = function (startPosY, startSpeedY, curTime) {
    'use strict';
    if (startPosY === 0 && startSpeedY === 0) {
        return 0;
    }
    var g = 9.81;
    var t1;
    var t2;
    var phase;
    var posY;

    t1 = (startSpeedY - Math.sqrt(startSpeedY * startSpeedY + 2 * g * startPosY)) / g;
    t2 = (startSpeedY + Math.sqrt(startSpeedY * startSpeedY + 2 * g * startPosY)) / g;
    phase = t2 - t1;

    if (curTime <= t2) {
        posY = startPosY + startSpeedY * curTime - g * curTime * curTime / 2;
        return posY.toFixed(2);
    } else {
        /*
         для отскока берем новую задачу
         с броском. 0Y = 0, и новой нач. скорость
         */
        var newStarSpeedY = g * phase / 2;
        curTime = ((curTime - t2) % phase);
        posY = newStarSpeedY * curTime - g * curTime * curTime / 2;

        return posY.toFixed(2);
    }
};

window.getPositionX = function (startPosX, startSpeedX, curTime){
    'use strict'
    if (startPosX === 0 && startSpeedX === 0){
        return 0;
    }
    var distance = 0;
    distance = startPosX + startSpeedX * curTime;
    return distance.toFixed(2);
};

    /*
    тест на начальные условия по оси 0Y: нач. скорость 0, положение Yo = 0
     */
console.log(window.getPositionY(0, 0, 100) === 0);
console.log(window.getPositionY(0, 0, 100));

    /*
    тетс на начальные условия по оси 0Х: нач. скорость 0. положение Xo = 0
     */
console.log(window.getPositionX(0, 0, 100) === 0);
console.log(window.getPositionX(0, 0, 100));
