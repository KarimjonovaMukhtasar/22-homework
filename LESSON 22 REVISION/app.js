import {Actor} from "./models/actor.js"
import {Movie} from "./models/movie.js"
import {ActorService} from "./services/actorService.js"
import { MovieService } from "./services/movieService.js"

async function main(){
    let actorService = new ActorService()
    let movieService = new MovieService()

    let actor1 = new Actor(1,"Kate Austen", 32)
    let actor2 = new Actor(2, "Sarah Johnson", 22)
    let actor3 = new Actor(3, "Kim Tan Jo", 18)

    actorService.addActor(actor1)
    actorService.addActor(actor2)
    actorService.addActor(actor3)

    let movie1 = new Movie(11, "Success Chase", 1996)
    let movie2 = new Movie(12, "Home alone", 2003)

    movieService.addMovie(movie1)
    movieService.addMovie(movie2)

    try{
            await movieService.addActorToMovie(11, 1)
            await movieService.addActorToMovie(11, 2)
            await movieService.addActorToMovie(12, 3)

    }catch(error){
        console.log("Error", error)
    }
    console.log("Movies: ", movieService.getAllMovies())
    console.log("Actors: ", actorService.getAllActors())
    try{
       let movieWithActors = await movieService.getMovieWithActors(11, actorService)
        console.log("Movies with Actors", movieWithActors)
    }catch(error){
        console.log('Error', error)
    }
    try{
        let movieWithActors = await movieService.getMovieWithActors(99, actorService)
        console.log("Movies with Actors", movieWithActors)
    }catch(error){
        console.log("Error", error)
    }
}
main()