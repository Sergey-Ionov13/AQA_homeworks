const Car = require('./car');

class VwPolo extends Car {
    constructor(color) {
        super(color);
        this._model = 'Volkswagen Polo';
        this._cost = 22000;
        this._fuelConsumption = 9;
        this._trunkCapacity = 550;
    }

    // implementation of the prototype pattern
    clone(color) {
        return new this.constructor(color);
    }
}

module.exports = VwPolo;