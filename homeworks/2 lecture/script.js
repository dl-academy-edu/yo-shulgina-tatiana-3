// Программа 1
let userNum = prompt("Введите число");
for ( i = 1; i <= userNum; i++) {
  if (i%4 == 0) continue;
  alert(i);
}


//программа 2
let number = prompt("Введите число:"); // Запрос числа у пользователя
let factorial = 1;
let i = 1;

while (i <= number) { // Вычисление факториала с помощью цикла while
  factorial *= i;
  i++;
}

alert(`Факториал числа ${number} равен ${factorial}`); 


//программа 3

for (userNumber = prompt('Введите число, которое хотите возвести в степень'); userDeg = prompt('Введите степень числа'); userDeg != 0) {
  alert(Math.pow(userNumber, userDeg));
}

//программа 4

// let zxc = prompt('Введите число, факториал которого хотите получить');
// while (zxc != 0) 