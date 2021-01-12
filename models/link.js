function Link(url, owner){
    this.url = url;
    this.owner = owner;
}

Link.prototype.getUrl = function(){
    return this.url;
}

Link.prototype.getOwner = function(){
    return this.owner;
}
