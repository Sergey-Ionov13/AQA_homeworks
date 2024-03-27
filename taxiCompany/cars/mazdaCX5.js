const Car = require('./car');

class MazdaCX5 extends Car {
    constructor(color) {
        super(color);
        this._model = 'Mazda CX-5';
        this._cost = 32000;
        this._fuelConsumption = 11;
        this._seatsCount = 7;
        this._segment = 'comfort';
        this._trunkCapacity = 506;
    }
}

module.exports = MazdaCX5;