function LinkList(){
    this.links = [];
}

LinkList.prototype.getLinks = function(){
    this.links.forEach(link => {
        console.log(link.getUrl());
    })
}

LinkList.prototype.addLink = function(link){
    this.links.push(link);
}

module.exports = LinkList;