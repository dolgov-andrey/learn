/* global getPositionY*/
describe('getPositionY', function () {
    'use strict';
    it('тест на начальные условия по оси 0Y: нач. скорость 0, положение Yo = 0', function () {
        expect(getPositionY(0, 0, 100)).to.equal(0, 'лежачий мяч остается лежать неподвижно');
    });
});

/*...*/
describe('getPositionY', function () {
    'use strict';
    it('тест свободного падения мячика с высоты Yo != 0', function () {
        expect(getPositionY(5, 0, 7)).to.above(0, 'мячик падает');
    });
});

/*...*/
describe('getPositionY', function () {
    'use strict';
    it('тест броска мячика с высоты Yo = 0, startSpeedY =  Vo', function () {
       expect(getPositionY(0, 8, 3)).to.above(0,',бросок мячика с высоты 0');
    });
});

/*...*/
describe('getPosition', function () {
    'use strict';
    it('тест броска мячика с высоты Yo = 0, startSpeedY =  - Vo', function () {
       expect(getPositionY(0, -8, 3)).to.above(0, 'мячик бросают в низ и он отскакивает')
    });
});
