const Car = require('./car');

class Bmw5 extends Car {
    constructor(color) {
        super(color);
        this._model = 'BMW 5 Series';
        this._cost = 65000;
        this._fuelConsumption = 15;
        this._segment = 'business';
        this._trunkCapacity = 520;
    }
}

module.exports = Bmw5;