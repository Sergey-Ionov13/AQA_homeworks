const CarDecorator = require('./carDecorator');

class CarWithPoliteDriver extends CarDecorator{
    constructor(car) {
        super(car);
        this.car = car;
    }

    deliverPassenger() {
        return this.car.deliverPassenger() + ' with a polite driver';
    }
}

module.exports = CarWithPoliteDriver;
