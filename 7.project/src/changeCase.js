export function changeCase(str, Case){
    Case = Case.toLowerCase()
    if(Case === "uppercase"){
        str = str.toUpperCase()
        return str
    }
    else if(Case === "lowercase"){
        str = str.toLowerCase()
        return str
    }
    else{
        return `YOU ENTERED A WRONG CASE RECTIFY YOUR ERROR!`
    }
}