const u1 = {
    name: " ashhad ",
    age: 18,
};
console.log(u1);
const u2 = {
    name: "test",
    age: 12,
};
console.log(`${u1}${u2}`);
class Person {
    name;
    agee;
    constructor(n, a) {
        this.name = n;
        this.agee = a;
    }
    greet() {
        return `Hi ${this.name} welcome to our web`;
    }
}
const P1 = new Person('Ashh', 15);
console.log(P1.greet());
class UserDetails {
    name;
    balance;
    country;
    constructor(name, balance, country) {
        this.name = name;
        this.balance = balance;
        this.country = country;
        name: name;
        balance: balance;
        country: country;
    }
    message() {
        return `Hi ${this.name} your balance is this ${this.balance} and in this balance you can visit ${this.country}`;
    }
}
const b1 = new UserDetails('jarvis', 4500000, 'spain');
console.log(b1.message());
const b2 = new UserDetails("ash", 60000);
console.log(b2.message());
export {};
