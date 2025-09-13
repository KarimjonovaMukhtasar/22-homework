/*
4. Node.js process.argv va Tizim Xotirasining Bo'sh Joyini Hisoblash
Masala tavsifi:
Node.js dasturida process.argv yordamida dasturga berilgan argumentlar orqali xotira haqida ma'lumot olish. Dastur ishga tushirilganda foydalanuvchidan xotira haqida
ma'lumot olish talab etiladi, va dastur tizimda qancha xotira bo'sh ekanligini konsolga chiqaradi.
Vazifa:
Node.js dasturini yozing, bu dastur komanda qatoridan ishga tushirilganda, operatsion tizimning joriy bo'sh xotira hajmini hisoblab, uni konsolga chiqaradi.
Dastur talablari:
Dastur node app.js check-memory kabi komanda qatori orqali ishga tushirilishi kerak.
Agar "check-memory" argumenti kiritilsa, dastur tizimning joriy bo'sh xotira hajmini konsolga chiqarishi lozim.
Agar bu argument kiritilmasa, dastur "No command provided" deb xabar chiqarishi kerak.
Dasturlash ko'rsatmalari:
Dastur ishga tushirish:
Dasturni ishga tushirish uchun komanda qatoriga quyidagini yozing:
node app.js check-memory / Free memory: 1000 MB
node app.js check-memory / Free memory: 1 GB
Bu buyruq tizimning joriy bo'sh xotira hajmini MB (Megabayt)da chiqaradi.
Qo'shimcha maslahatlar:
os moduli Node.js bilan birga keladi va uni alohida o'rnatish shart emas. Bu modul tizim haqidagi ma'lumotlarni olish uchun juda qulay.
Dasturni yaxshilash uchun xotira bilan bog'liq boshqa ma'lumotlarni ham chiqarib ko'rish mumkin, masalan umumiy xotira hajmi va ishlatilayotgan xotira.
Foydalanuvchilarga qulay bo'lishi uchun xotirani boshqa o'lchov birliklarida (gigabayt yoki kilobayt) ham ko'rsatish mumkin.
Bu vazifa orqali o'quvchilar Node.js'da process.argv dan foydalanishni, shuningdek, tizimning xotira holatini qanday qilib tekshirish mumkinligini o'rganadilar, bu
esa ularga Node.js ilovalarini samarali boshqarishga yordam beradi.
*/
import os from 'node:os';
let input = process.argv[2]
if(input === "check-memory"){
    let res = os.freemem()/ 1024 ** 3
    res = res.toFixed(2)
    console.log(`Free memory: ${res} GB`)

    let mb = os.freemem() / 1024 ** 2
    mb = mb.toFixed(2)
    console.log(`Free memory: ${mb} MB`)
}
else{
    console.log('No command provided')
}