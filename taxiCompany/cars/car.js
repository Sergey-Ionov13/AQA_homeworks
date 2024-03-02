class Car {
    constructor(color = 'yellow') {
        this._model = 'Taxi';
        this._color = color;
        this._cost = 15000;
        this._fuelConsumption = 10;
        this._seatsCount = 4;
        this._segment = 'base';
        this._trunkCapacity = 510;
    }

    getModel() {
        return this._model;
    }

    getColor() {
        return this._color;
    }

    getCost() {
        return this._cost;
    }

    getFuelConsumption() {
        return this._fuelConsumption;
    }

    getSeatsCount() {
        return this._seatsCount;
    }

    getSegment() {
        return this._segment;
    }

    deliverPassenger() {
        return 'Deliver a passenger';
    }

    getTrunkCapacity() {
        return this._trunkCapacity;
    }
}

module.exports = Car;
