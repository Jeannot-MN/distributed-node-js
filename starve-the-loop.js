const recursive = () => {
    console.log("I will be called again and again!");
    wait(500);
    setImmediate(recursive);
}

process.nextTick(recursive);

setTimeout(() => {
    console.log("Will I ever run?");
});

function wait(timeInMillis) {
    let endTime = new Date().getTime() + timeInMillis;

    while (new Date().getTime() < endTime) {}
}