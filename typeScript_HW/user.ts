interface User {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const max: User = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW',
};

const kate: User = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2,
};

const users = [
    max,
    kate,
];

for (let i = 0; i < users.length; i++) console.log(users[i]);
