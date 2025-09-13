/*
2-vazifa: Global Ob'ektlar bilan Ishlash
Node.js da global ob'ektida o'zgaruvchini saqlang va uni boshqa modulda ishlating.
Talablar:
Bitta modulda global.myVar = "Hello, world!" deb qiymat belgilang.
Boshqa modulda ushbu o'zgaruvchini o'qing va konsolga chiqaring.
*/
import "./2.2.js"
console.log(globalThis.myVar)