const Car = require('./car');

class ChryslerPacifica extends Car {
    constructor(color) {
        super(color);
        this._model = 'Chrysler Pacifica';
        this._cost = 45000;
        this._fuelConsumption = 13;
        this._seatsCount = 8;
        this._segment = 'comfort';
        this._trunkCapacity = 915;
    }
}

module.exports = ChryslerPacifica;