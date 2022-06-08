class Post {
    title: String;
    shortSummary: String;
    created: Date;
    photoLink: String;
    content: String;

    constructor(title: String, shortSummary: String, created: Date, photoLink: String, content: String) {
        this.title = title;
        this.shortSummary = shortSummary;
        this.created = created;
        this.photoLink = photoLink;
        this.content = content;
    }

}

export default { Post };