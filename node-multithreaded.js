const fs = require('fs');

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    console.log(data);
});

setImmediate(() => {
    console.log("Let's wait here.");
    wait(1000);
    console.log("This is running while the file is being read");
})

function wait(timeInMillis) {
    let endTime = new Date().getTime() + timeInMillis;

    while (new Date().getTime() < endTime) {}
}