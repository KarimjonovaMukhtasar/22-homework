/*
7. Turli Amallarni Bajaruvchi Node.js Dasturini Yaratish
Masala tavsifi:
Sizdan Node.js platformasida os va process modullari bilan birga ES Module formatida turli ma'lumot turlari bilan amallarni bajaruvchi dastur yaratishingiz
so'raladi. Dastur komanda qatori orqali berilgan argumentlar asosida ma'lumotlarni filtrlaydi, saralaydi, matn amallarini bajaradi va boshqalar.
Fayllar strukturasi va vazifalari:
src papkasi:
dataOperations:
filterArray.js
sortArray.js
index.js / filterArray va sortArray lardan import qilish va export qilib yuborish kerak
stringOperations:
convertToASCII.js
changeCase.js
index.js / convertToASCII va changeCase lardan import qilish va export qilib yuborish kerak
index.js (barcha modullarni birlashtiradi)
main.js (dasturning boshlang'ich nuqtasi)
node main.js filter [1, 2, 3, 4, 5] 'x =4'
node main.js sort [1, 2, 3, 4, 5]
node main.js ascii "ABCSS"
node main.js uppercase "abc"
node main.js lowercase "ABC"
*/
import "./index.js"