export function filterArray(arr, condition){
    let res = arr.filter((x)=> {return eval(condition)})
    return res
}