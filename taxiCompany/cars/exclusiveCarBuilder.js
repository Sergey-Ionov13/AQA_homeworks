const Car = require('./car');

class ExclusiveCarBuilder {
    constructor(color) {
        this.car = new Car(color);
    }

    setModel(model) {
        this.car._model = model;
        return this;
    }

    setCost(cost) {
        this.car._cost = cost;
        return this;
    }

    setFuelConsumption(fuelConsumption) {
        this.car._fuelConsumption = fuelConsumption;
        return this;
    }

    setSeatsCount(seatsCount) {
        this.car._seatsCount = seatsCount;
        return this;
    }

    setSegment(segment) {
        this.car._segment = segment;
        return this;
    }

    setTrunkCapacity(trunkCapacity) {
        this.car._trunkCapacity = trunkCapacity;
        return this;
    }

    overrideDeliverPassenger() {
        this.car.deliverPassenger = () => 'VIP passenger delivery';
        return this;
    }

    build() {
        return this.car;
    }
}

module.exports = ExclusiveCarBuilder;
