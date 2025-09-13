import os from 'node:os';
export async function memory(){
    let res =  os.freemem()/ 1024 ** 3
    res = res.toFixed(2)
    return `FREE MEMORY: ${res} GB `
}