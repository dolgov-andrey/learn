var startPos = {
    x: 3,
    y: 4
};
var startSpeed = {
    x: 4,
    y: 4
};
var curTime = 5;
window.getPosition = function (startPos, startSpeed, curTime) {
    'use strict';
    var pos = {
        x: 0,
        y: 0
    };
    if (startPos.y === 0 && startPos.x === 0 && startSpeed.y === 0 && startSpeed.x ===0) {
        return pos;
    }

    var g = 9.81;
    var t1;
    var t2;
    var phase;
    t1 = (startSpeed.y - Math.sqrt(startSpeed.y * startSpeed.y + 2 * g * startPos.y)) / g;
    t2 = (startSpeed.y + Math.sqrt(startSpeed.y * startSpeed.y + 2 * g * startPos.y)) / g;
    phase = t2 - t1;

    pos.x = (startPos.x + startSpeed.x * curTime).toFixed(2);
    if (curTime <= t2) {
        pos.y = function positionY() {
            var posY;
            posY =  (startPos.y + startSpeed.y * curTime - g * curTime * curTime / 2).toFixed(2);
            return posY;
        };
        return pos;
    } else {
        /*
         для отскока берем новую задачу
         с броском. 0Y = 0, и новой нач. скоростью
         */
        startPos.y = 0;
        startSpeed.y = g * phase / 2;
        curTime = ((curTime - t2) % phase);
        return positionY ();
    };
};
console.log(window.getPosition(startPos, startSpeed, curTime))
// /*
//  тест на начальные условия по оси 0Y: нач. скорость 0, положение Yo = 0
//  */
// console.log(window.getPositionY(0, 0, 100) === 0);
// console.log(window.getPositionY(0, 0, 100));
//
// /*
//  тест свободного падения мячика с высоты Yo != 0
//  */
// console.log(window.getPositionY(5, 0, 7) > 0);
// console.log(window.getPositionY(5, 0, 7));
// /*
//  тест броска мячика с высоты Yo = 0, startSpeedY =  Vo
//  */
// console.log(window.getPositionY(0, 8, 3) > 0);
// console.log(window.getPositionY(0, 8, 3));
//
// /*
//  тест броска мячика с высоты Yo = 0, startSpeedY =  - Vo
//  */
// console.log(window.getPositionY(0, -8, 3) > 0);
// console.log(window.getPositionY(0, -8, 3));
// /*
//  тест броска мячика с высоты Yo != 0, и - Vo
//  */
// console.log(window.getPositionY(7, -8, 3) > 0);
// console.log(window.getPositionY(7, -8, 3));
// /*
//  тетс на начальные условия по оси 0Х: нач. скорость 0. положение Xo = 0
//  мячик движется вертикально
//  */
// console.log(window.getPositionX(0, 0, 100) === 0);
// console.log(window.getPositionX(0, 0, 100));
//
// /*
//  тесты на положительные скорости:
//  Yo = 0
//  Xo = 0
//  угол броска 45deg; startSpeedY * cos(45deg) = startSpeedX * sin(45deg)
//  */
// console.log(window.getPositionY(0, 15, 8) > 0);
// console.log(window.getPositionY(0, 15, 8));
//
// console.log(window.getPositionX(0, 15, 8) > 0);
// console.log(window.getPositionX(0, 15, 8));
//
// /*
//  тесты на положительные скорости:
//  Yo != 0
//  Xo != 0
//  угол броска 45deg
//  */
// console.log(window.getPositionY(7, 18, 9) > 0);
// console.log(window.getPositionY(7, 18, 9));
//
// console.log(window.getPositionX(3, 18, 9) > 0);
// console.log(window.getPositionX(3, 18, 9));
//
// /*
//  тесты на отрицательные скорости скорости:
//  Yo != 0
//  Xo != 0
//  угол броска 45deg
//  */
// console.log(window.getPositionY(3, -3, 3) > 0);
// console.log(window.getPositionY(3, -3, 3));
//
// console.log(window.getPositionX(3, 3, 9) > 0);
// console.log(window.getPositionX(3, 3, 9));