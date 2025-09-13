export function stringToBoolean(str) {
        if(!str){
            return false
        }
        else{
            str = str.toLowerCase().trim()
            if(str.includes("no")|| str.includes("0")|| str.includes("false") || str.includes("yo'q") || str.includes("not")){
                return false
            }
            else{
                return true
            }
        }
}