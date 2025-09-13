import { cwd } from 'node:process'
export async function process(){
  return `Current directory: ${cwd()}`
}