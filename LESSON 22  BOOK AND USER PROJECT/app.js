import {Book} from "./models/book.js"
import {User} from "./models/user.js"
import {BookService} from "./services/bookService.js"
import {UserService} from "./services/userService.js"

async function main(){
    let book1 = new Book(1, "O'tkan kunlar", "Abdulla Qodiriy", 1946)
    let book2  = new Book(2, "Mehr-la", "Men", 2003)
    let book3 = new Book(3, "U-la", "U", 1998)

    let user1 = new User(11, "Sabina")
    let user2 = new User(12, "Oybarchin")

    let bookService = new BookService()
    let userService = new UserService()

    console.log(bookService.addBook(book1))
    console.log(bookService.addBook(book2))
    console.log(bookService.addBook(book3))

    console.log(userService.addUser(user1))
    console.log(userService.addUser(user2))

    console.log(await bookService.borrowBook(1, user1))
    console.log(await bookService.borrowBook(2, user2))
    console.log(await bookService.returnBook(1,user1))

    console.log(bookService.getAllBooks())
    console.log(userService.getAllUsers())
    try{
        console.log(await bookService.returnBook(15, user2))
    }catch(error){
        console.log("Error", error.message)
    }
    console.log(userService.findUserById(11))
    console.log(userService.findUserById(25))
}
main()