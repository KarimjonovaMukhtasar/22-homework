import {delay} from "../utils/delay.js"

export class ActorService{
    constructor(){
        this.actors = []
    }
    addActor(actor){
        if(!this.actors.includes(actor)){
            this.actors.push(actor)
            return `A new actor has been added`
        }
        else{
            return `This actor has already been added`
        }
    }
    getAllActors(){
            return this.actors
    }
    async findActorById(id){
        await(delay(1000))
     let actor = this.actors.find((a)=> a.id === id)
     if(!actor){
        return Promise.reject(`NOT FOUND SUCH AN ID ACTOR`)
     }
     else{
        return actor
     }
    }  
}