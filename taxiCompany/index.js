const ExclusiveCarBuilder = require('./cars/exclusiveCarBuilder');
const VwPolo = require('./cars/vwPolo');
const RenaultLogan = require('./cars/renaultLogan');
const ToyotaPrius = require('./cars/toyotaPrius');
const ChryslerPacifica = require('./cars/chryslerPacifica');
const MazdaCX5 = require('./cars/mazdaCX5');
const Bmw5 = require('./cars/bmw5');
const MercedesE = require('./cars/mercedesE');
const taxyCompany = require('./taxyCompany');
const CarWithPoliteDriver = require('./cars/decorators/carWithPoliteDriver');
const CarWithRoofRack = require('./cars/decorators/carWithRoofRack');

const vwPolo1 = new VwPolo();
const renaultLogan1 = new RenaultLogan();
const toyotaPrius1 = new ToyotaPrius();
const chryslerPacifica1 = new ChryslerPacifica();
const mazdaCX51 = new MazdaCX5();
const bmw51 = new Bmw5();
const mercedesE1 = new MercedesE();

// create instances using the Prototype pattern
const vwPolo2 = vwPolo1.clone('white');
const renaultLogan2 = renaultLogan1.clone('white');

// create instances with extended trunk capacity using Decorator pattern
const mazdaCX52 = new CarWithRoofRack(new MazdaCX5('grey'));
const chryslerPacifica2 = new CarWithRoofRack(new ChryslerPacifica('dark-blue'));
const bmw52 = new CarWithPoliteDriver(new Bmw5('black'));
const mercedesE2 = new CarWithPoliteDriver(new MercedesE('dark-silver'));

// create instances with Builder pattern 
const maybach = new ExclusiveCarBuilder('Onyx Black')
    .setModel('Mercedes‑Maybach S‑Class')
    .setCost(215000)
    .setFuelConsumption(20)
    .setSeatsCount(4).setSegment('luxury')
    .setTrunkCapacity(495)
    .overrideDeliverPassenger()
    .build();
const rollsRoyce = new ExclusiveCarBuilder('Gold')
    .setModel('Rolls-Royce Phantom')
    .setCost(555000)
    .setFuelConsumption(24)
    .setSeatsCount(4).setSegment('luxury')
    .setTrunkCapacity(548)
    .overrideDeliverPassenger()
    .build();

taxyCompany.addCar(vwPolo1);
taxyCompany.addCar(renaultLogan1);
taxyCompany.addCar(toyotaPrius1);
taxyCompany.addCar(chryslerPacifica1);
taxyCompany.addCar(mazdaCX51);
taxyCompany.addCar(bmw51);
taxyCompany.addCar(mercedesE1);
taxyCompany.addCar(vwPolo2);
taxyCompany.addCar(renaultLogan2);
taxyCompany.addCar(mazdaCX52);
taxyCompany.addCar(chryslerPacifica2);
taxyCompany.addCar(bmw52);
taxyCompany.addCar(mercedesE2);
taxyCompany.addCar(maybach);
taxyCompany.addCar(rollsRoyce);

console.log(`Стоимость автопарка: ${taxyCompany.getCarsTotalCost()}`);
taxyCompany.sortCarsByFuelConsumption();
console.log(taxyCompany.autopark);
console.log('Авто, вместимостью от 6 до 8 мест:');
console.log(taxyCompany.filterCarsBySeats(6, 8));
