import { objectToArray } from "./objectToArray.js";
import { arrayToObject } from "./arrayToObject.js";
import { stringToBoolean } from "./stringToBoolean.js";

let input = process.argv[2]
let value = process.argv[3]
if(input === undefined){
    console.log("Please, write down the type and its value after filename")
}
else{
    input = input.toLowerCase().trim()
if(input === "object"){
    let parsed;
    try{
        parsed = JSON.parse(value)
        console.log(objectToArray(parsed))
    }catch (error) {
        console.error("Wrong format of JSON!", error.message)
    } 
}
else if(input === "array"){
    let parsed;
    try{
    parsed = JSON.parse(value)
    console.log(arrayToObject(parsed))}
    catch(error){
        console.error("Wrong format of JSON!", error.message)
    }
}
else if(input === "string"){
    console.log(stringToBoolean(value))
}
else{
    console.log("Not found such a command")
}
}