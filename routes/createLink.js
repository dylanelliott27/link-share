const Link = require('../models/link');

module.exports = function createLink(url){

    global.linkList.addLink(new Link(url, "testdate", Math.floor(1000 + Math.random() * 9000)));

}