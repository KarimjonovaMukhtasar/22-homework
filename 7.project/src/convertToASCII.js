export function convertToASCII(str){
    let res = []
    for(let i=0; i<str.length; i++){
            let x = str[i].charCodeAt(0)
            res.push(x)
    }
    return res.join(",")
}