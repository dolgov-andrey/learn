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
        expect(getPositionY(0, 8, 3)).to.above(0, 'бросок мячика с высоты 0');
    });
});

/*...*/
describe('getPositionY', function () {
    'use strict';
    it('тест броска мячика с высоты Yo = 0, startSpeedY =  - Vo', function () {
        expect(getPositionY(0, -8, 3)).to.above(0, 'мячик отскакивает при броске в низ из нулевой точки');
    });
});

/*...*/
describe('getPositionY', function () {
    'use strict';
    it('тест броска мячика с высоты Yo != 0, и - Vo', function () {
        expect(getPositionY(7, -8, 3)).to.above(0, ' мячик отскакивает от земли при броске с произвольной высоты');
    });
});

/*...*/
describe('getPositionY', function () {
    'use strict';
    it('тест на положительную скорость при 0Y = 0', function () {
        expect(getPositionY(0, 15, 8)).to.above(0, 'мяч летит из нулевой точки');
    });
});

/*...*/
describe('getPositionY', function () {
    'use strict';
    it('бросок мячика из произвольной точки', function () {
        expect(getPositionY(7, 18, 9)).to.above(0, 'мяч вылетает из произвольной точки 0Y');
    });
});



/*...*/
describe('getPositionX', function () {
    'use strict';
    it('тетс на начальные условия по оси 0Х: нач. скорость 0. положение Xo = 0', function () {
        expect(getPositionX(0, 0, 100)).to.equal(0, 'мячик движется вертикально');
    });
});

/*...*/
describe('getPositionX', function () {
    'use strict';
    it('тест на положительную скорость при 0X = 0', function () {
        expect(getPositionX(0, 15, 8)).to.above(0, 'мяч летит из нулевой точки');
    });
});

/*...*/
describe('getPositionX', function () {
    'use strict';
    it('бросок мячика из произвольной точки', function () {
        expect(getPositionX(7, 18, 9)).to.above(0, 'мяч вылетает из произвольной точки 0Y');
    });
});

