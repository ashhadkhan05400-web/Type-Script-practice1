export {};

interface user {
  name: string;
  age: number;
}

const u1: user = {
  name: " ashhad ",
  age: 18,
};

console.log(u1);

const u2: user = {
  name: "test",
  age: 12,
};

console.log(`${u1}${u2}`);

class Person {
  name: string;
  agee: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.agee = a;
  }

  greet() : string{
    return `Hi ${this.name} welcome to our web`
  }
}

const P1 = new Person('Ashh' , 15)
console.log(P1.greet());


class UserDetails{
    constructor(public name : string, private balance : number, public country? : string){
        name : name
        balance : balance
        country : country
    }

    message() : string{
        return `Hi ${this.name} your balance is this ${this.balance} and in this balance you can visit ${this.country}`
    }
}

const b1 = new UserDetails('jarvis', 4500000, 'spain')
console.log(b1.message());

const b2 = new UserDetails("ash" , 60000 ,)
console.log(b2.message());
