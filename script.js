let answer = document.getElementById('answer');

// функция для шифрования 
function encrypt(){
    // получение данных из формы ввода 
    var str = document.getElementById('inpt').value;

    //проверка выбранного языка
    const selector = document.querySelectorAll('input[name="language"]');
    let selectedValue;
    for(const selection of selector){
        if(selection.checked){
            selectedValue = selection.value;
            break;
        }
    }

    if(selectedValue == "eng"){
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

        //цикл для шифрования 
        for(let i = 0; i<readyStr.length; i++){
            if(readyStr[i] == 'J'){
                readyStr[i] = 'I';
                console.log(1)
            }
            for(let r = 0; r<5; r++){
                for(let c = 0; c<5; c++){
                    if(readyStr[i] == matrix[r][c]){
                        if(r!=4){
                            encryptedStr+=matrix[r+1][c];
                        }
                        
                        else{
                            encryptedStr+=matrix[0][c];
                        } 
                    }
                }
            }
        }

        // вывод ответа 
        console.log(encryptedStr);
        answer.innerText = encryptedStr;
    }

    else{
        var matrix = [
            ['А', 'Б', 'В', 'Г', 'Д', 'Е'],
            ['Ж', 'З', 'И', 'К', 'Л', 'М'],
            ['Н', 'О', 'П', 'Р', 'С', 'Т'],
            ['У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш'],
            ['Щ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
        ]

        // замена пробелов и перевод в верхний регистр и смена недостоющих букв на те, которые есть в матрице
        readyStr = ((str.replace(/\s/g, '')).toUpperCase()).replace('Ё', 'Е').replace('Й', 'И').replace('Ъ', 'Ь');

        // переменная для ответа
        encryptedStr = "";

        //цикл для шифрования 
        for(let i = 0; i<readyStr.length; i++){
            for(let r = 0; r<5; r++){
                for(let c = 0; c<6; c++){
                    if(readyStr[i] == matrix[r][c]){
                        if(r!=4){
                            encryptedStr+=matrix[r+1][c];
                        }
                        
                        else{
                            encryptedStr+=matrix[0][c];
                        } 
                    }
                }
            }
        }
        // вывод ответа 
        console.log(encryptedStr);
        answer.innerText = encryptedStr;
    }
}

// функция для дешифрования 
function decrypt(){

    // получение данных из формы ввода
    var str = document.getElementById('inpt').value;

    // проверка выбора языка
    const selector = document.querySelectorAll('input[name="language"]');
    let selectedValue;
    for(const selection of selector){
        if(selection.checked){
            selectedValue = selection.value;
            break;
        }
    }

    if(selectedValue == "eng"){
        // создание исходной матрицы
        var matrix = [
            ['A', 'B', 'C', 'D', 'E'],
            ['F', 'G', 'H', 'I', 'K'],
            ['L', 'M', 'N', 'O', 'P'],              
            ['Q', 'R', 'S', 'T', 'U'],
            ['V', 'W', 'X', 'Y', 'Z']
        ]

        // замена пробелов и перевод в верхний регистр
        readyStr = (str.replace(/\s/g, '')).toUpperCase();

        // переменная для ответа
        decryptedStr = "";

        //цикл для шифрования 
        for(let i = 0; i<readyStr.length; i++){
            for(let r = 0; r<5; r++){
                for(let c = 0; c<5; c++){
                    if(readyStr[i] == matrix[r][c]){
                        if(r!=0){
                            decryptedStr+=matrix[r-1][c];
                        }
                        
                        else{
                            decryptedStr+=matrix[4][c];
                        } 
                    }
                }
            }
        }

        // вывод ответа 
        console.log(decryptedStr);
        answer.innerText = decryptedStr;
    }

    else{
        var matrix = [
            ['А', 'Б', 'В', 'Г', 'Д', 'Е'],
            ['Ж', 'З', 'И', 'К', 'Л', 'М'],
            ['Н', 'О', 'П', 'Р', 'С', 'Т'],
            ['У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш'],
            ['Щ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
        ]

        // замена пробелов и перевод в верхний регистр
        readyStr = (str.replace(/\s/g, '')).toUpperCase();

        // переменная для ответа
        decryptedStr = "";

        //цикл для шифрования 
        for(let i = 0; i<readyStr.length; i++){
            for(let r = 0; r<5; r++){
                for(let c = 0; c<6; c++){
                    if(readyStr[i] == matrix[r][c]){
                        if(r!=0){
                            decryptedStr+=matrix[r-1][c];
                        }
                        
                        else{
                            decryptedStr+=matrix[4][c];
                        } 
                    }
                }
            }
        }
        // вывод ответа 
        console.log(decryptedStr);
        answer.innerText = decryptedStr;
    }
}

