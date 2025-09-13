import { sortArray } from "./sortArray.js";
import { filterArray } from "./filterArray.js";
import { changeCase } from "./changeCase.js";
import { convertToASCII } from "./convertToASCII.js";

let operation = process.argv[2]
if (operation === undefined) {
    console.log("Please, enter the operation after filename and its value")
}
else {
    operation = operation.toLowerCase()
    if (operation === "filter") {
        let arr = process.argv[3]
        try {
            arr = JSON.parse(arr)
            let condition = process.argv[4]
            if (!condition.includes("x") || condition.length < 4 || !/^x\s*(===|==|>=|<=|>|<)\s*\d+$/.test(condition)) {
                console.log("Please, Enter the filter condition with x... e.g: x >= 4 or x === 4")
            }
            else {
                console.log(filterArray(arr, condition))
            }
        } catch (error) {
            console.error("Error in the JSON format of your array", error.message)
        }
    }
    else if (operation === "sort") {
        let arr = process.argv[3]
        try {
            arr = JSON.parse(arr)
            console.log(sortArray(arr))
        } catch (error) {
            console.error("Error in the JSON format of your array", error.message)
        }

    }
    else if (operation === "uppercase" || operation === "lowercase") {
        let value = process.argv[3]
        let Case = process.argv[2]
        console.log(changeCase(value, Case))
    }
    else if (operation === "ascii") {
        let value = process.argv[3]
        console.log(convertToASCII(value))
    }
    else {
        console.log("Not found such an operation so far, you may choose SORT, FILTER, CASES, ASCII for now :)")
    }
}