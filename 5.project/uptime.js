import os from "node:os"
export async function uptime(){
    let res = os.uptime()
    return `UPTIME: ${res}`
}