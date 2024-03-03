interface User {
  name: string,
  age: number,
  occupation: string,
}

interface Admin {
  role: string,
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver',
  },
];

for (let i = 0; i < persons.length; i++) console.log(persons[i]);
