const http = require('http');
const createLinkHandler = require('./routes/createLink');
const LinkList = require('./models/link-list');

// Set up global instance of LinkList which has access to all active links, methods to delete expired links, etc..
// All links are stored in memory for now... eventually will use a DB
global.linkList = new LinkList();

const linkServer = http.createServer((req, res) => {
    if(req.url === '/createlink'){
        createLinkHandler();
    }
    if(req.url === '/test'){
        console.log("test");
    }
})

linkServer.listen(3000, _ => console.log("Linkshare API running"));