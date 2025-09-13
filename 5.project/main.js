/*
5. Node.js'da ES Module va os Hamda process Modullaridan Foydalanish
Masala tavsifi:
Node.js platformasida os va process modullarini ES Module formatida ishlatib, tizim haqidagi ma'lumotlarni yig'ish va 
ularni bitta asosiy modul orqali boshqarish.
Ushbu vazifada sizdan alohida fayllar yaratishingiz va har birida ma'lum bir tizim ma'lumotini qaytarishingiz so'raladi: 
bo'sh xotira miqdori, 
jarayon (process)
ma'lumotlari, va 
tizimning ish vaqtini qaytaruvchi dasturlar yaratish talab etiladi.
Fayllar strukturasi va vazifalari:
1. memory.js: Tizimdagi bo'sh xotira miqdorini qaytaradi.
2. process.js: Jarayon haqidagi ma'lumotlarni qaytaradi.
3. uptime.js: Tizimning ishga tushganidan beri o'tgan vaqt (uptime)ni qaytaradi.
4. index.js: Yuqoridagi uchta modulni import qilib, ularni bitta joyda birlashtiradi va natijalarni chiqaradi.
5. main.js: Boshlang'ich nuqta; index.js faylini import qiladi va uni ishga tushiradi.
*/
import "./index.js"

