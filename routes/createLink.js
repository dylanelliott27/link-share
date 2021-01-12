const Link = require('../models/link');

module.exports = function createLink(url){

    global.linkList.addLink(new Link(url, "testdate"));

}