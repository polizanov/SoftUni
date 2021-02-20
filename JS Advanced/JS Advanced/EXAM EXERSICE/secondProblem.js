class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }


    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }

        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let isFind = false;
        if (id == undefined) {
            this._comments.push({ id: this._comments.length + 1, username, content, replies: [] });
            return `${username} commented on ${this.title}`;
        }

        this._comments.forEach(obj => {
            if(obj.id == id){
                isFind = true;
            }
        })

        if(!isFind){
            this._comments.push({ id: this._comments.length + 1, username, content, replies: [] });
            return `${username} commented on ${this.title}`;
        }

        for (const commnet of this._comments) {
            if (commnet.id == id) {
                commnet.replies.push({ id: `${id}.${commnet.replies.length + 1}`, username, content });
                return "You replied successfully";
            }
        }
    }

    toString(sortingType) {
        
        
        let output = "";
        output += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;
        if (sortingType == "asc") {
            Object.entries(this._comments)
                .sort((a, b) => a[1].id - b[1].id)
                .forEach(element => {
                    output += `-- ${element[1].id}. ${element[1].username}: ${element[1].content}\n`
                    if(element[1].replies.length > 0){
                        Object.entries(element[1].replies)
                        .sort((a, b) => a[1].id - b[1].id)
                        .forEach(reply => {
                            output += `--- ${reply[1].id}. ${reply[1].username}: ${reply[1].content}\n`
                        })
                    }
                });
                return output.trim();
        } else if(sortingType == "desc") {
            Object.entries(this._comments)
                .sort((a, b) => b[1].id - a[1].id)
                .forEach(element => {
                    output += `-- ${element[1].id}. ${element[1].username}: ${element[1].content}\n`
                    if(element[1].replies.length > 0){
                        Object.entries(element[1].replies)
                        .sort((a, b) => b[1].id - a[1].id)
                        .forEach(reply => {
                            output += `--- ${reply[1].id}. ${reply[1].username}: ${reply[1].content}\n`
                        })
                    }
                });
                return output.trim();
        } else if(sortingType == "username"){
            Object.entries(this._comments)
                .sort((a, b) => a[1].username.localeCompare(b[1].username))
                .forEach(element => {
                    output += `-- ${element[1].id}. ${element[1].username}: ${element[1].content}\n`
                    if(element[1].replies.length > 0){
                        Object.entries(element[1].replies)
                        .sort((a, b) => a[1].username.localeCompare(b[1].username))
                        .forEach(reply => {
                            output += `--- ${reply[1].id}. ${reply[1].username}: ${reply[1].content}\n`
                        })
                    }
                });
                return output.trim();
        }
    }

}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
console.log(art.comment("Zane", "Reply", 1));
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));


