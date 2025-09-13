export function arrayToObject(arr){
   let res = {}
   for(let [key, value] of arr){
      res[key] = value
   }
   return res
}