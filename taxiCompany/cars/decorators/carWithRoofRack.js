const CarDecorator = require('./carDecorator');

class CarWithRoofRack extends CarDecorator {
    constructor(car) {
        super(car);
        this.car = car;
    }

    getTrunkCapacity() {
        return this.car.getTrunkCapacity() + 500;
    }
}

module.exports = CarWithRoofRack;
