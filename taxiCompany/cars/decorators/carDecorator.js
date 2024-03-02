const Car = require('../car');

class CarDecorator extends Car {
    constructor(car) {
        super();
        this._model = car.getModel();
        this._color = car.getColor();
        this._cost = car.getCost();
        this._fuelConsumption = car.getFuelConsumption();
        this._seatsCount = car.getSeatsCount();
        this._segment = car.getSegment();
        this._trunkCapacity = car.getTrunkCapacity();
    }
}

module.exports = CarDecorator;
