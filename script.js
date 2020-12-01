let answer = document.getElementById('answer');

// функция для шифрования 
function encrypt(){
    // получение данных из формы ввода 
    var str = document.getElementById('inpt').value;
    var vert = [];
    var hor = [];
    var concated = [];

    // создание исходной матрицы  J = I
    var matrix = [
        ['A', 'B', 'C', 'D', 'E'],
        ['F', 'G', 'H', 'I', 'K'],
        ['L', 'M', 'N', 'O', 'P'],              
        ['Q', 'R', 'S', 'T', 'U'],
        ['V', 'W', 'X', 'Y', 'Z']
    ]

    // замена пробелов и перевод в верхний регистр
    readyStr = ((str.replace(/\s/g, '')).toUpperCase()).replace("J", "I");

    // переменная для ответа
    encryptedStr = "";

    for(let i = 0; i<readyStr.length; i++){
        for(let r = 0; r<5; r++){
            for(let c = 0; c<5; c++){
                if(readyStr[i] == matrix[r][c]){
                    vert.push(c);                   // разбиение на вертикальные и горизонтальные координаты
                    hor.push(r);
                }
            }
        }
    }
    
    concated = vert.concat(hor); // объединение в один массив вертикальных и горизонтальных координат (считывание по строкам)
    var newVert = [];
    var newHor = [];

    for(let i = 0; i<concated.length; i++){
        if(i %2 == 0){
            newVert.push(concated[i]); // новые координаты для букв
        }
        else{
            newHor.push(concated[i]);
        }
    }

    console.log('word: ' + readyStr);
    console.log('vert ' + vert);
    console.log('hor ' + hor);
    console.log('concated ' + concated);
    console.log('New vert ' + newVert);
    console.log('New hor ' + newHor);

    for(let s = 0; s<newVert.length; s++){
        encryptedStr += matrix[newHor[s]][newVert[s]];
    }
        
    // вывод ответа 
    console.log(encryptedStr);
    answer.innerText = encryptedStr;
    
}

// функция для шифрования 
function decrypt(){
    // получение данных из формы ввода 
    var str = document.getElementById('inpt').value;
    var vert = [];
    var hor = [];
    var concated = [];

    // создание исходной матрицы  J = I
    var matrix = [
        ['A', 'B', 'C', 'D', 'E'],
        ['F', 'G', 'H', 'I', 'K'],
        ['L', 'M', 'N', 'O', 'P'],              
        ['Q', 'R', 'S', 'T', 'U'],
        ['V', 'W', 'X', 'Y', 'Z']
    ]

    // замена пробелов и перевод в верхний регистр
    readyStr = ((str.replace(/\s/g, '')).toUpperCase()).replace("J", "I");

    // переменная для ответа
    decryptedStr = "";

    for(let i = 0; i<readyStr.length; i++){
        for(let r = 0; r<5; r++){
            for(let c = 0; c<5; c++){
                if(readyStr[i] == matrix[r][c]){
                    vert.push(c);
                    hor.push(r);                        // разбиение на вертикальные и горизонтальные координаты
                }
            }
        }
    }

    console.log('vert ' + vert);
    console.log('hor ' + hor);
    
    newArr = [];
    var newVert = [];

    for(let i = 0; i<vert.length; i++){ // запись координат в общий массив 
        newArr.push(vert[i]);
        newArr.push(hor[i]);
    }

    console.log('newArr concated ' + newArr);

    newVert = newArr.splice(0, (newArr.length)/2); // разделение на 2 массива с вертикальными и горизонтальными координатами 
    console.log('newVert ' + newVert);
    console.log('newArr ' + newArr);
    
    for(let s = 0; s<newVert.length; s++){          // запись итогового результата
        decryptedStr += matrix[newArr[s]][newVert[s]];
    }
        
    // вывод ответа 
    console.log(decryptedStr);
    answer.innerText = decryptedStr;
    
}

































// // функция для дешифрования 
// function decrypt(){

//     // получение данных из формы ввода
//     var str = document.getElementById('inpt').value;

//     // проверка выбора языка
//     const selector = document.querySelectorAll('input[name="language"]');
//     let selectedValue;
//     for(const selection of selector){
//         if(selection.checked){
//             selectedValue = selection.value;
//             break;
//         }
//     }

//     if(selectedValue == "eng"){
//         // создание исходной матрицы
//         var matrix = [
//             ['A', 'B', 'C', 'D', 'E'],
//             ['F', 'G', 'H', 'I', 'K'],
//             ['L', 'M', 'N', 'O', 'P'],              
//             ['Q', 'R', 'S', 'T', 'U'],
//             ['V', 'W', 'X', 'Y', 'Z']
//         ]

//         // замена пробелов и перевод в верхний регистр
//         readyStr = (str.replace(/\s/g, '')).toUpperCase();

//         // переменная для ответа
//         decryptedStr = "";

//         //цикл для шифрования 
//         for(let i = 0; i<readyStr.length; i++){
//             for(let r = 0; r<5; r++){
//                 for(let c = 0; c<5; c++){
//                     if(readyStr[i] == matrix[r][c]){
//                         if(r!=0){
//                             decryptedStr+=matrix[r-1][c];
//                         }
                        
//                         else{
//                             decryptedStr+=matrix[4][c];
//                         } 
//                     }
//                 }
//             }
//         }

//         // вывод ответа 
//         console.log(decryptedStr);
//         answer.innerText = decryptedStr;
//     }

//     else{
//         var matrix = [
//             ['А', 'Б', 'В', 'Г', 'Д', 'Е'],
//             ['Ж', 'З', 'И', 'К', 'Л', 'М'],
//             ['Н', 'О', 'П', 'Р', 'С', 'Т'],
//             ['У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш'],
//             ['Щ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
//         ]

//         // замена пробелов и перевод в верхний регистр
//         readyStr = (str.replace(/\s/g, '')).toUpperCase();

//         // переменная для ответа
//         decryptedStr = "";

//         //цикл для шифрования 
//         for(let i = 0; i<readyStr.length; i++){
//             for(let r = 0; r<5; r++){
//                 for(let c = 0; c<6; c++){
//                     if(readyStr[i] == matrix[r][c]){
//                         if(r!=0){
//                             decryptedStr+=matrix[r-1][c];
//                         }
                        
//                         else{
//                             decryptedStr+=matrix[4][c];
//                         } 
//                     }
//                 }
//             }
//         }
//         // вывод ответа 
//         console.log(decryptedStr);
//         answer.innerText = decryptedStr;
//     }
// }

