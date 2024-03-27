class TaxyCompany {
    constructor() {
        this.autopark = [];
    }

    addCar(car) {
        this.autopark.push(car);
    }

    getCarsTotalCost() {
        return this.autopark.reduce((sum, car) => sum + car.getCost(), 0);
    }

    sortCarsByFuelConsumption() {
        this.autopark.sort((carA, carB) => {
            return carA.getFuelConsumption() - carB.getFuelConsumption();
        });
    }

    filterCarsBySeats(minValue, maxValue) {
        return this.autopark.filter(car => car.getSeatsCount() >= minValue && car.getSeatsCount() <= maxValue);
    }

    getBusinessClassCars() {
        return this.autopark.filter(car => car.getSegment() === 'business');
    }

    getLuxuryCars() {
        return this.autopark.filter(car => car.getSegment() === 'luxury');
    }
}

module.exports = new TaxyCompany();