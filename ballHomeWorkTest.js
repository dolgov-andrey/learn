/* global getPositionY*/
describe('getPositionY', function () {
    'use strict';
    it('тест на начальные условия по оси 0Y: нач. скорость 0, положение Yo = 0', function () {
        expect(getPositionY(0, 0, 100)).to.equal(0, 'лежачий мяч остается лежать неподвижно');
    });
});
