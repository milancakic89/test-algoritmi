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
    let letters = {}
    for(let i =0; i< string.length; i++){
        let current = string[i].toLowerCase();
        if(current in letters){
            console.log(current);
            letters[current]++;
        }else{
            letters[current] = 0;
        }
    }
    for(const [key, value] of Object.entries(letters)){
        output.push([key, value]);
    }

    return output;

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
    let output = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(j != i){
                output *= j;
            }
        }
    }
    return output;
}
multiplyOthers([])