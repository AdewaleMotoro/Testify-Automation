// My personal library 2: Methods

const books = {
    title:'Ounje',
    description:'The little elf.',
    numberOfPages: 12,
    author:'Moro Jackson',
    reading: true,
    toggleReadingStatus: function(){
        if(books.reading === true){
            books.reading = false
        } else {
            books.reading = true
        }
    }
}

books.toggleReadingStatus()

console.log(books.reading)