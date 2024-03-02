const Car = require('./car');

class RenaultLogan extends Car {
    constructor(color) {
        super(color);
        this._model = 'Renault Logan';
    }

    // implementation of the prototype pattern
    clone(color) {
        return new this.constructor(color);
    }
}

module.exports = RenaultLogan;