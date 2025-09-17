export class BookService{
    constructor(){
        this.books = []
    }
    addBook(book){
        this.books.push(book)
        return `A new book added to the list`
    }
    getAllBooks(){
        return this.books
    }
    findBookById(id){
        let res = this.books.find((a)=> a.id === id)
        if(!res){
            return `Not found such an id ${id}`
        }
        return res
    }
    async borrowBook(bookId, user){
        return new Promise((resolve,reject)=>{
                let book = this.findBookById(bookId)
                if(!book){
                    return reject(new Error(`This book ${bookId} is not found`))
                }
                if(book.isBorrowed === true){
                return reject(new Error(`This book is already borrowed`))
                }
                book.isBorrowed = true
                user.borrowedBooks.push(book)
                resolve(`The ${book.title} has been borrowed by ${user.name}`)
            })
    }
    async returnBook(bookId, user){
        return new Promise((resolve, reject)=>{
             let res = this.books.find((a)=> a.id === bookId)
        if(res){
             res.isBorrowed = true
             let index = user.borrowedBooks.indexOf(res)
             if(index > -1){
                    user.borrowedBooks.splice(index, 1)
             }
             resolve(`${res.title} has been returned back by ${user.name}`)
        }
        else{
            return reject(new Error(`Not found such an id ${bookId} book`))
        }
        })
    }
}