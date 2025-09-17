export class UserService{
    constructor(){
    this.users = []
    }
    addUser(user){
        this.users.push(user)
        return `A new user has been added`
    }
    getAllUsers(){
        return this.users
    }
    findUserById(id){
        let res = this.users.find((a)=> a.id === id)
        if(!res){
            return `Not found such an id ${id} of a user`
        }
        return res
    }
}