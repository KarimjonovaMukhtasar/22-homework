
import {memory} from "./memory.js"
import {process} from "./process.js"
import {uptime} from "./uptime.js"

let mem = await memory()
let proc = await process()
let upt = await uptime()

export {mem, proc, upt}
console.log(mem)
console.log(proc)
console.log(upt)
