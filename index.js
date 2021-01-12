const http = require('http');

const linkServer = http.createServer((req, res) => {
    if(req.url === '/'){
        console.log("main");
    }
    if(req.url === '/test'){
        console.log("test");
    }
})

linkServer.listen(3000, _ => console.log("running"));