let sales: number = 212_324_239; // annotations are not necessary when adding value, see example below
let course = 'Typescript';
let is_published: boolean = true;
let level; // type any; acts as JS || use whn migrating to TS (see error in the function below)
level = 1;
level = 'a';

function foo(a: any) {
  console.log(a);
}

let numbers: number[] = [1, 3, 4, 5]; // array of numbers, offers code completion for numbers later when in use

let user: [number, string] = [1, 'joe']; // tuple, restrict to 2 elements
user.push(2); // TS will not throw an error!!!!

const enum Sizes { // enums
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

let mySize: Sizes = Sizes.Medium;

function calculateTax(income: number, taxYear = 2022): number {
  // taxYear is optional with default value of 2022
  // function returns number
  if (taxYear < 2017) {
    return income * 1.1;
  }
  return income * 1.2;
}

calculateTax(10_000);

// ============== Objects ==============
let employeeVerbose: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  },
};
employeeVerbose.name = 'Joe';

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Joe',
  retire: (date: Date) => {
    console.log(date);
  },
};

// ================ Unions =====
function kgToLbs(weight: number | string): number {
  // Narrowing https://www.typescriptlang.org/docs/handbook/2/narrowing.html
  if (typeof weight === 'number') {
    return weight * 0.45359237;
  }

  return Number(weight) * 0.45359237;
}

// =========== intersection ============
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type DraggableAndResizable = Draggable & Resizable; // intersection

let draggable: DraggableAndResizable = {
  drag: () => {
    console.log('draggable');
  },
  resize: () => {
    console.log('resizable');
  },
};

// ======== Literal types =======
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// ======= Nullable types ======
function greet(name: string | null | undefined): void {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log('Hello');
  }
}

type Customer = {
  birthday?: Date; // optional property
};

function getCustomer(id: number): Customer | null | undefined {
  if (id === 0) {
    return null;
  }
  return { birthday: new Date() };
}

let customer = getCustomer(0);
// optional property access operator
console.log(customer?.birthday?.getFullYear());

// optional elemenet access operator
// customers?.[0]

// Optional call
let log: any = null;

log?.('a');
