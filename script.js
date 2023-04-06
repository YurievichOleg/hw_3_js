const cube = (number) => {
    return Math.pow(number, 3);
}
console.log(cube(2) + cube(3));

// let a = prompt('rus');
// console.log(Number.isFinite(Number(a)));

// const salary = () => {
//     let number = prompt('Введите значение:')
//     if (Number.isFinite(Number(number))) {
//         return number * 0.87;
//     } else {
//         return 'Значение введено неверно!'
//     }


// }
// console.log(salary());

// const maxNum = () => {
//     let num1 = prompt('Введите значение 1');
//     let num2 = prompt('Введите значение 2');
//     let num3 = prompt('Введите значение 3');
//     let max;
//     if (Number.isFinite(Number(num1)) && Number.isFinite(Number(num2)) && Number.isFinite(Number(num3))) {
//         num1 = Number(num1);
//         num2 = Number(num2);
//         num3 = Number(num3);
//     } else {
//         return 'Введены неверные значения!'
//     }
//     if (num1 > num2) {
//         (num1 > num3) ? max = num1 : max = num3;
//     } else {
//         (num2 > num3) ? max = num2 : max = num3;
//     }
//     return max;

// }

// console.log(maxNum());

let sum = (num1, num2) => num1 + num2;
console.log(sum(5, 6));

let diff = (num1, num2) => (num1 > num2) ? num1 - num2 : num2 - num1;
console.log(diff(10, 233));

let mult = (num1, num2) => num1 * num2;
console.log(mult(3, 5));

let divide = (num1, num2) => num1 / num2;
console.log(divide(14, 3));
