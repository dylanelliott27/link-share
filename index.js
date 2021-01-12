const http = require('http');
const createLinkHandler = require('./routes/createLink');
const LinkList = require('./models/link-list');

// Set up global instance of LinkList which has access to all active links, methods to delete expired links, etc..
// All links are stored in memory for now... eventually will use a DB
global.linkList = new LinkList();

const linkServer = http.createServer((req, res) => {
    if(req.url === '/createlink'){
        // TODO: add limit per IP, to avoid creating objects
        let urlFromUser = '';

        req.on('data', chunk => {
            urlFromUser += chunk;
        })

        req.on('end', _ => {
            createLinkHandler(urlFromUser);
            res.writeHead(200, {'Access-Control-Allow-Origin' : '*'});
            res.end();
        })
    }
    else if(req.url === '/getlinks'){
        res.writeHead(200, {'Access-Control-Allow-Origin' : '*'});
        res.end(JSON.stringify(global.linkList.getLinks()));
    }
    else if(req.url === '/findlink'){
        let requestedCode = '';
        
        req.on('data', chunk => {
            requestedCode += chunk;
        })

        req.on('end', () => {
            global.linkList.getLinks().forEach(link => {
                if(link.getCode() == requestedCode){
                    res.writeHead(200, {'Access-Control-Allow-Origin' : '*'});
                    res.end(JSON.stringify(link));
                }
            })
            res.writeHead(404, {'Access-Control-Allow-Origin' : '*'});
            res.end("none found...");
        })
    }
})

linkServer.listen(3000, _ => console.log("Linkshare API running"));