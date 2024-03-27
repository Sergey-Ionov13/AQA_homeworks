const Car = require('./car');

class MercedesE extends Car {
    constructor(color) {
        super(color);
        this._model = 'Mercedes-Benz E-class';
        this._cost = 70000;
        this._fuelConsumption = 16;
        this._segment = 'business';
        this._trunkCapacity = 615;
    }
}

module.exports = MercedesE;