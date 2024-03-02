const Car = require('./car');

class ToyotaPrius extends Car {
    constructor(color) {
        super(color);
        this._model = 'Toyota Prius';
        this._cost = 32000;
        this._fuelConsumption = 5;
        this._trunkCapacity = 501;
    }
}

module.exports = ToyotaPrius;