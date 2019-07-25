// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
//objective: create a function that oscilates the speed of an action

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function increase(wait) {
    base = 2;
    return action => {
        setInterval(timeIt, wait);
        function timeIt() {
            base = action(base);
            console.log(base);
        }
    };
}

let base2 = increase(1000);
//base2(x => x * 2);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    let count = 1;
    return () => {
        return count++;
    };
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

let newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let count = 1;
    let factory = {
        increment() {
            return count++;
        },
        decrement() {
            return count--;
        },
    };
    return factory;
};

let newFactory = counterFactory();
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.decrement());
console.log(newFactory.decrement());
console.log(newFactory.decrement());
console.log(newFactory.decrement());
console.log(newFactory.decrement());
console.log(newFactory.decrement());
