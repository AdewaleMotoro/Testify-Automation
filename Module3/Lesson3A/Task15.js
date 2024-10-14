// My personal library 3: Arrays

const books = [
    {
        title: "In our prime",
        description: "How to live a fruitful life.",
        numberOfPages: 96,
        author: "Knight Author",
        reading: true
    },
    {
        title: "The Suite",
        description: "How to get away with murder.",
        numberOfPages: 328,
        author: "Tunde Babs",
        reading: false
    },
    {
        title: "The game plan",
        description: "My country Nigeria.",
        numberOfPages: 212,
        author: "James Bob",
        reading: true
    }
]

for (let book = 0; book < books.length; book = book + 1) {
    if (books[book].reading) {
        console.log("Title: " + books[book].title);
        console.log("Description: " + books[book].description);
        console.log("Number of Pages: " + books[book].numberOfPages);
        console.log("Author: " + books[book].author);
        console.log("Reading: " + books[book].reading);
        console.log("---------------------------------------");
    }
}