import {delay} from "../utils/delay.js" 
export class MovieService {
    constructor() {
        this.movies = []
    }
    addMovie(movie) {
        if (!this.movies.includes(movie)) {
            this.movies.push(movie)
            return `A NEW MOVIE ADDED TO THE LIST`
        }
        else {
            return `THIS MOVIE IS ALREADY IN THE LIST`
        }
    }
    getAllMovies() {
        return this.movies
    }
    async addActorToMovie(movieId, actorId) {
        let movie = this.movies.find((a) => a.id === movieId)
        if (!movie) {
            return Promise.reject(`NOT FOUND SUCH AN ID OF A MOVIE`)
        }
       if(!movie.actors.includes(actorId)){
        movie.actors.push(actorId)
       }
       return movie
    }
    async getMovieWithActors(movieId, actorService){
        await(delay(1000))
        let movie = this.movies.find((a)=> a.id === movieId)
        if(!movie){
            return Promise.reject(`NOT FOUND SUCH AN ID ${movieId}`)
        }
        else{
            const actors = []
            for(let actorID of movie.actors){
            try{
            let actor = await actorService.findActorById(actorID)
            actors.push(actor)
            }catch(error){
                console.log("Error while searching")
            } 
             return {
                id: movie.id,
                title: movie.title,
                year: movie.year,
                actors
            }
        }
             
        }
    }
}