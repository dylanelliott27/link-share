function LinkList(){
    this.links = [];
}

LinkList.prototype.getLinks = function(){
    return this.links;
}

LinkList.prototype.addLink = function(link){
    this.links.push(link);
}

module.exports = LinkList;