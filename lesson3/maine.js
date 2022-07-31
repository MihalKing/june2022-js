// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt(100500);
//
// if (x === 0) {
//     console.log('okay');
// }else {
//     console.log('not');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let time = +prompt('hve minutes')
//
// if (time > 0 && time <= 15) {
//     console.log('one quarters')
// }else if (time > 15 && time <= 30) {
//     console.log('two quarters');
// }else if (time > 30 && time <= 45) {
//     console.log('three quarters');
// }else if (time > 45 && time <= 60) {
//     console.log('four quarters');
// } else {
//     console.log('I don\'t know what time it is')
// }
//
// let day = +prompt('hav day')
//
// if (day > 0 && day <= 10) {
//     console.log('the first half of the month');
// }else if (day > 10 && day <= 20) {
//     console.log('the second half of the month');
// }else if (day > 20 && day <= 31) {
//     console.log('the three half of the month');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// //
// let day = +prompt('have day')
//
// switch (day) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('frday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let number = +prompt('random number');
// let number2 = +prompt('random number 2');
//
// console.log(number > number2 ? number : number < number2  ? number2:0);
//
// if (number > number2) {
//     console.log(number)
// }else if (number < number2) {
//     console.log(number2)
// }else if (number === number2) {
//     console.log(0)
// }
//

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//
// let a = prompt('something');
// a = (a || "default");
// console.log(a);
//
//
// let x = undefined;
//
// x = (x || 'default');
// console.log(x)