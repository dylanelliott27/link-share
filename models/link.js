function Link(url, expiry){
    this.url = url;
    this.expiry = expiry;
}

Link.prototype.getUrl = function(){
    return this.url;
}

Link.prototype.getOwner = function(){
    return this.owner;
}


module.exports = Link;