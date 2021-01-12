const Link = require('../models/link');

module.exports = function createLink(){

    global.linkList.addLink(new Link("test", "test"));

    global.linkList.getLinks();
}