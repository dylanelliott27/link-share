const http = require('http');
const createLinkHandler = require('./routes/createLink');
const LinkList = require('./models/link-list');

// Set up global instance of LinkList which has access to all active links, methods to delete expired links, etc..
// All links are stored in memory for now... eventually will use a DB
global.linkList = new LinkList();

const linkServer = http.createServer((req, res) => {
    if(req.url === '/createlink'){
        let chunk = '';
        req.on('data', buf => {
            chunk += buf;
        })
        req.on('end', _ => {
            console.log(chunk);
            createLinkHandler(chunk);
            res.writeHead(200, {'Access-Control-Allow-Origin' : '*'});
            res.end();
        })
    }
    else if(req.url === '/getlinks'){


        res.writeHead(200, {'Access-Control-Allow-Origin' : '*'});
        res.end(JSON.stringify(global.linkList.getLinks()));
    }
})

linkServer.listen(3000, _ => console.log("Linkshare API running"));