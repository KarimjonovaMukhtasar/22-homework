/*
3. Node.js Process.argv Bilan Ishlash
Masala tavsifi:
Node.js platformasida process.argv ob'ektini tushunish va uni amaliyotda qo'llash uchun bir dasturlash vazifasini bajarish kerak. process.argv komandalar qatori
orqali berilgan argumentlarni saqlaydi, va bu argumentlarni dastur ichida foydalanish mumkin.
Vazifa: Matematik Amallarni Bajaruvchi Dastur
Sizdan ikkita son va bajariladigan matematik amalni komanda qatori orqali qabul qilib, natijani konsolga chiqaruvchi dastur yaratishingiz so'raladi.
Talablar:
Foydalanuvchi komanda qatoriga ikkita son va amal belgisini kirita olishi kerak ( + , - , * , / ).
Dastur ushbu argumentlarni qabul qilib, tegishli matematik amalni bajarishi va natijani konsolga chiqarishi kerak.
Agar amal bajarilmasa yoki noto'g'ri kiritilgan bo'lsa, foydalanuvchiga xato haqida xabar berishi kerak.
node calculator.js 5 + 3
*/
let valueA = process.argv[2]
let calc = process.argv[3]
console.log(calc)
let valueB = process.argv[4]

if(isNaN(valueA)  || isNaN(valueB)){
    console.log('You entered a wrong format!, please,  just enter a math formula after filename e.g:  5 + 3')
}
else{
    if(calc === "+"){
        let res = +valueA + +valueB
        console.log(`RESULT: ${res}`)
    }
    else if(calc === "-"){
         let res = +valueA - +valueB
        console.log(`RESULT: ${res}`)
    }
    else if(calc === "*"){
         let res = +valueA * +valueB
        console.log(`RESULT: ${res}`)
    }
    else if( calc === "div"){
        let res = +valueA / +valueB
        res = res.toFixed(2)
        console.log(`RESULT: ${res}`)
    }
    else{
        console.log("Wrong format of math calculation PLEASE '*' to multiply ; 'div' to divide")
    }
}