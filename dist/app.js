"use strict";
/**
 * Arrow functions and implicit returns
 */
/*const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];

const mappedPizzas = pizzas.map((pizza, index) =>
  pizza.name.toLocaleUpperCase()
);

console.log(mappedPizzas);

const pizza = {
  name: 'Blazing Inferno',
  getName: function () {
    setTimeout(() => console.log(this), 1000);
  },
};

pizza.getName();*/
/**
 * Default Function parameters
 */
/*function multiply(a: number, b: number = 25) {
  return a * b;
}

console.log(multiply(5, 6));*/
/**
 * Object literal improvements
 */
/*const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return this.name;
  },
};

console.log(pizza.getName());

const toppings = ['pepperony'];

const order = { pizza, toppings };

console.log(order);*/
/**
 * Rest Parameters
 */
/*function sumAll(...arr: number[]) {
  console.log(arguments);
  return arr.reduce((sum, num) => sum + num, 0);
}

const sum = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);*/
/**
 * Array Spread Operator
 */
/*const toppings = ['bacon', 'chilly'];
const newToppings = ['pepperoni'];

const allToppings = [...toppings, ...newToppings];

const allToppingsFrom = Array.from(toppings);

console.log(allToppings);
console.log(allToppingsFrom);*/
/**
 * Object Spread Operator
 */
/* const pizza = {
  name: 'Pepperoni',
};

const toppings = ['pepperoni'];

const order = {
  ...pizza,
  toppings,
};

console.log(order);*/
/**
 * Destructuring Arrays and Objects
 */
/*const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni'],
};

function order({
  name: pizzaName,
  toppings: pizzaTopping,
}: {
  name: string;
  toppings: string[];
}) {
  console.log(pizzaName, pizzaTopping);
}

order(pizza);*/
/**
 * Number Types, arguments and functions
 */
/*const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);

console.log(`Pizza costs: ${cost}`);*/
/**
 * String Type, String Literals
 */
/*const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
  return code.toLocaleUpperCase();
}

const normilezedCoupon: string = normalizeCoupon(coupon);

console.log(normilezedCoupon);*/
/**
 * Boolean Type, Boolean Literals
 */
/*const pizzas: number = 5;

function offerDiscount(orders: number): boolean {
  return orders > 3;
}

if (offerDiscount(pizzas)) {
  console.log(`You're entitled to a discount`);
} else {
  console.log(`Order more than 3 pizzas for a discount!`);
}*/
/**
 * The "Any" type
 */
/*let coupon;

coupon = true;
coupon = 25;
coupon = '25';*/
/**
 * Implicit vs Explicit Types
 */
/*let implicitCoupon = 'pizza25';
let explicitCoupon: string = 'pizza25';*/
/**
 * Void Type
 */
/*let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
  selectedTopping = topping;
}

selectTopping('bacon');

console.log(selectedTopping);*/
/**
 * Never Type
 */
/*function orderError(error: string): never {
  throw new Error(error);
}

orderError('Something went wrong');*/
/**
 * Null, Undefined, Strict Null checks
 */
/*let coupon: string | null = 'pizza25';

function removeCoupon(): void {
  coupon = null;
}

console.log(coupon);

removeCoupon();

console.log(coupon);*/
/**
 * Union and Literal Types
 */
/*let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size;
}

selectSize('medium');

console.log(`Pizza size: ${pizzaSize};`);*/
/**
 * Function Types
 */
/*let sumOrder: (price: number, quantity: number) => number;

sumOrder = (x, y) => x * y;

const sum = sumOrder(25, 5);

console.log(`Total sum: ${sum}`);*/
/**
 * Functions and Optional Arg...
 */
/*let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => x * y;

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);*/
/**
 * Typed Functions and Default
 */
/*let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => x * y;

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);*/
/**
 * Object Types
 */
/*let pizza: { name: string; price: number; getName(): string };

pizza = {
  name: 'PLain Old Pepperoni',
  price: 20,
  getName() {
    return this.name;
  },
};*/
/**
 * Array Types and Generics
 */
/*let sizes: string[];

sizes = ['small', 'medium', 'large'];

let toppings: Array<string>;

toppings = ['pepperoni', 'tomato', 'bacon'];*/
/**
 * Tuple Types for Arrays
 */
/*let pizza: [string, number, boolean];

pizza = ['Pepperoni', 20, true];*/
/**
 * Type Aliases
 */
/*type Size = 'small' | 'dedium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize: Callback = (x) => {
  pizzaSize = x;
};

selectSize('large');*/
/**
 * Type Assertions
 */
/*type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: 'Blazing Inderno', toppings: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
  return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialized);*/
/**
 * Creating Interfaces
 */
/*interface Pizza {
  name: string;
  sizes: string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
  };
}
*/
/**
 * Interfaces with Function Types
 */
/*interface Pizza {
  name: string;
  sizes: string[];
  getAvailableSizes(): string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}*/
/**
 * Extending Interface
 */
/*interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  getAvailableSizes(): string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}*/
/**
 * Interfaces and Optional Properties
 */
/*interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);

pizza.toppings = 1;*/
/**
 * Interfaces with Index Signatures
 */
/*interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): string[];
  [key: number]: string;
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);

pizza.toppings = 1;*/
/**
 * Understanding Classes and Constructors
 * Public and Private Members
 * Readonly Members
 * Setters and Getters (Accessors)
 * Classes and Inhritance
 * Abstract Classes
 * Protected Members and Inheritance
 * Interface contracts with implements
 */
/*interface SizesInterface {
  availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
  constructor(protected sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

interface PizzaInterface extends SizesInterface {
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

class Pizza extends Sizes implements PizzaInterface {
  toppings: string[] = [];

  constructor(private name: string, sizes: string[]) {
    super(sizes);
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }

  updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);
pizza.addTopping('pepperoni');

console.log(pizza);*/
/**
 * Static Properties and Methods
 */
const date = new Date();
const date2 = Date.now();
console.log(date2);
class Coupon {
    static create(percentage) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}
Coupon.allowed = ['Pepperonni', 'Blazing Inferno'];
console.log(Coupon.create(25));
