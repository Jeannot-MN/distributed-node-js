const cluster = require('cluster');

console.log(`Master pid=${process.id}`);

cluster.setupMaster({
    exec: __dirname + '/web-api/consumer-http-basic.js'
});

cluster.fork();
cluster.fork();

cluster
    .on('disconnect', (worker) => {
        console.log('Disconnecting ', worker.id);
    })
    .on('exit', (worker, code, signal) => {
        console.log('Exiting ', worker.id, code, signal);
    })
    .on('listening', (worker, { address, port }) => {
        console.log('listening', worker.id, `${address}:${port}`);
    })