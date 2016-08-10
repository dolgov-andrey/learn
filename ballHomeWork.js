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
     тест свободного падения мячика с высоты Yo != 0
     */
console.log(window.getPositionY(5, 0, 7) > 0);
console.log(window.getPositionY(5, 0, 7));
    /*
    тест броска мячика с высоты Yo = 0, startSpeedY =  Vo
    */
console.log(window.getPositionY(0, 8, 3) > 0);
console.log(window.getPositionY(0, 8, 3));

    /*
     тест броска мячика с высоты Yo = 0, startSpeedY =  - Vo
     */
console.log(window.getPositionY(0, -8, 3) > 0);
console.log(window.getPositionY(0, -8, 3));
    /*
     тест броска мячика с высоты Yo != 0, и - Vo
     */
console.log(window.getPositionY(7, -8, 3) > 0);
console.log(window.getPositionY(7, -8, 3));
    /*
    тетс на начальные условия по оси 0Х: нач. скорость 0. положение Xo = 0
    мячик движется вертикально
     */
console.log(window.getPositionX(0, 0, 100) === 0);
console.log(window.getPositionX(0, 0, 100));

    /*
    тесты на положительные скорости:
     Yo = 0
     Xo = 0
     угол броска 45deg; startSpeedY * cos(45deg) = startSpeedX * sin(45deg)
     */
console.log(window.getPositionY(0, 15, 8) > 0);
console.log(window.getPositionY(0, 15, 8));

console.log(window.getPositionX(0, 15, 8) > 0);
console.log(window.getPositionX(0, 15, 8));

    /*
     тесты на положительные скорости:
     Yo != 0
     Xo != 0
     угол броска 45deg
     */
console.log(window.getPositionY(7, 18, 9) > 0);
console.log(window.getPositionY(7, 18, 9));

console.log(window.getPositionX(3, 18, 9) > 0);
console.log(window.getPositionX(3, 18, 9));

    /*
     тесты на отрицательные скорости скорости:
     Yo != 0
     Xo != 0
     угол броска 45deg
     */
console.log(window.getPositionY(3, -3, 3) > 0);
console.log(window.getPositionY(3, -3, 3));

console.log(window.getPositionX(3, 3, 9) > 0);
console.log(window.getPositionX(3, 3, 9));