/*
6. Node.js'da Turli Ma'lumot Tuzilmalarini Konvertatsiya Qilish
Masala tavsifi:
Node.js dasturida turli ma'lumot tuzilmalarini (obyekt, massiv, satr va mantiqiy qiymat) bir-biriga o'zgartirish va ulardan ma'lumotlarni qayta ishlashni amalga
oshirish. Bunda har bir amal uchun alohida modullar yaratiladi va bitta asosiy modul orqali boshqariladi.
Dastur tuzilishi:
Dastur quyidagi fayllar va papkalardan iborat bo'ladi:
converters/ - bu papka konvertatsiya amallarini bajaradigan modullarni saqlaydi.
objectToArray.js - obyektni massivga o'zgartiradi.
arrayToObject.js - massivni obyektga o'zgartiradi.
stringToBoolean.js - satrni mantiqiy qiymatga o'zgartiradi.
index.js - bu fayl barcha konvertatsiya funksiyalarini import qilib export qilish kerak.
main.js - dasturning kirish nuqtasi; index.js faylini ishga tushiradi.
Bu dastur uchun turli ma'lumot turlarini sinab ko'rish uchun komanda qatori orqali argumentlar beriladi:
node main.js Object "{name:'val'}"
node main.js Array "[['name', 'val']]"
node main.js String "true"
node main.js Boolean "1"
*/
import "./index.js"