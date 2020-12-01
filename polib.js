// let answer = document.getElementById('answer');

// // функция для шифрования 
// function encryptMod(){
//     // получение данных из формы ввода 
//     var str = document.getElementById('inpt').value;
    
//     var vert = [];
//     var hor = [];

//     if(selectedValue == "eng"){
//         // создание исходной матрицы  J = I
//         var matrix = [
//             ['A', 'B', 'C', 'D', 'E'],
//             ['F', 'G', 'H', 'I', 'K'],
//             ['L', 'M', 'N', 'O', 'P'],              
//             ['Q', 'R', 'S', 'T', 'U'],
//             ['V', 'W', 'X', 'Y', 'Z']
//         ]

//         // замена пробелов и перевод в верхний регистр
//         readyStr = ((str.replace(/\s/g, '')).toUpperCase()).replace("J", "I");

//         // переменная для ответа
//         encryptedStr = "";

//         //цикл для шифрования 
//         for(let i = 0; i<readyStr.length; i++){
//             for(let r = 0; r<5; r++){
//                 for(let c = 0; c<5; c++){
//                     if(readyStr[i] == matrix[r][c]){
//                         vert.push(c);
//                         hor.push(r);
//                     }
//                 }
//             }
//         }

//         console.log(vert);
//         console.log(hor);

//         // // вывод ответа 
//         // console.log(encryptedStr);
//         // answer.innerText = encryptedStr;
//     }
// }