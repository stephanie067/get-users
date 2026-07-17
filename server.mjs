import http from 'node:http';

const users = [{
    name: 'Stephanie Andrade',
    age: 18,
    status: true
}, {
    name: 'Angelica Maria',
    age: 55,
    status: true
}, {
    name: 'Douglas Andrade',
    age: 36,
    status: false
}];

const usersJSON = JSON.stringify(users);

http.createServer((request, response ) => {
    if (request.url === '/users') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(users));
    } else {
        response.writeHead(404, { 'content-type': 'application/json'});
        response.end(JSON.stringify({message: 'Página não encontrada.'}));
    }
    
}).listen(3000);