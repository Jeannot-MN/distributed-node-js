const server = require('fastify')();
const fetch = require('node-fetch');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;
const RECIPE_API_ENDPOINT = process.env.RECIPE_API_ENDPOINT || 'localhost:4000';


server.get('/', async() => {
    const response = await fetch(`http://${RECIPE_API_ENDPOINT}/recipes/42`);
    const producer_data = await response.json();

    return {
        consumer_pid: process.pid,
        producer_data
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Consumer ${process.pid} running at http://${HOST}:${PORT}/`);
});