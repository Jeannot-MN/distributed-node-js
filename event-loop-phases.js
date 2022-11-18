const fs = require('fs');

console.log("POLL STAGE");

setImmediate(() => {
    console.log("CHECK STAGE");

    setImmediate(() => {
        console.log("CHECK STAGE 2");
    });
});

setTimeout(() => {
    console.log("TIMERS STAGE");
}, 0);

Promise.resolve().then(() => {
    console.log("PROMISE MICROTASK QUEUE");
});

process.nextTick(() => {
    console.log("NEXT TICK QUEUE");
});

fs.readFile("test.txt", (data) => {
    console.log("PENDING CALLBACK");

    setTimeout(() => {
        console.log("TIMERS STAGE NEXT ITERATION");
    }, 0);

    setImmediate(() => {
        console.log("CHECK STAGE NEXT ITERATION");
    });

    process.nextTick(() => {
        console.log("THIS IS JUST AFTER THE PENDING CALLBACK");
    });
});

console.log("Last Statement");