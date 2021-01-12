function Link(url, expiry, code){
    this.url = url;
    this.expiry = expiry;
    this.code = code;
}

Link.prototype.getUrl = function(){
    return this.url;
}

Link.prototype.getOwner = function(){
    return this.owner;
}

Link.prototype.getCode = function(){
    return this.code;
}

module.exports = Link;