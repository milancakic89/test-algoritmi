function factorialCalculation(num){

    let summ = 1;
    let currentNum = num;

    while(currentNum >= 1){ 
            summ *= currentNum;
            currentNum--;
    }
    return summ;
}

function reverseWords(word){
    let words = word.split(' ');
    words.reverse();
    let output = words.join(' ');
    return output;
}
function distinctNumbers(arr){
    let proccessed = [];
    for(let i = 0; i < arr.length; i++){
        if(!proccessed.includes(arr[i])){
            proccessed.push(arr[i]);
        }
    }
    return proccessed;

}

function letterCount(string){
    let output = [];
    let wordsAndNumbers = new RegExp(/[^A-Za-z0-9]+/);
    let summ;
    for(let i = 0; i < arr.length; i++){
        summ = 1;
        for(let j = 0; j < arr.length; j++){          
            if(j != i){
                summ *= arr[j];
            }
        }
        output.push(summ);
    }
    let removePunc = output.filter(letter =>{
        if(letter == " "){
            return false;
        }
        if(wordsAndNumbers.test(letter)){
           return true
        }
    })
    return removePunc;

}

function targetSum(arr, target){
    let output = [];

    for(let i= 0; i < arr.length; i++){
        for(let j= 0; j < arr.length; j++){
            let current = arr[i] + arr[j];
            if(current == target){
                output.push(arr[i], arr[j]);
                break;
            }
        }
    }
    return output;
}
function multiplyOthers(arr){
    let output = [];
    let summ;
    for(let i = 0; i < arr.length; i++){
        summ = 1;
        for(let j = 0; j < arr.length; j++){          
            if(j != i){
                summ *= arr[j];
            }
        }
        output.push(summ);
    }
    return output;
}
console.log(multiplyOthers([3,5,6,8]));
