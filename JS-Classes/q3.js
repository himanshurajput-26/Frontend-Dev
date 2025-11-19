class Book {
    constructor(title, author, ISBN, isIssued=false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }
    issueBook() {
        if(!this.isIssued) {
            this.isIssued = true;
            console.log("Book Issued Successfully");
        } else console.log("Already Issued");
    }
    returnBook() {
        this.isIssued = false;
        console.log("Book Returned");
    }
}

const books = [
    new Book("A", "Author1", "101"),
    new Book("B", "Author2", "102", true),
    new Book("C", "Author3", "103")
];

console.log("Available Books:");
console.log(books.filter(b => !b.isIssued));

function issueByISBN(code) {
    const found = books.find(b => b.ISBN === code);
    if(found) found.issueBook();
    else console.log("Book Not Found");
}

issueByISBN("103");
