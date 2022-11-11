console.log("Array cocepts");
var numbers=[1,2,-3,4,-5];     //initialize the numbers to an array
console.log("The list of numbers in array is "+numbers);

// calculating the sum of numbers in array

function calculateSum(arr) {     
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var total=calculateSum(numbers);
console.log("Sum of all numbers in array is "+total);

//function that filters out negative numbers

var negativenumbers=numbers.filter(checkNegative);    //Here numbers is an array and checknegative is function
function checkNegative(number){
    return number<0;
}

console.log("negative numbers in an array is "+ negativenumbers);

//Return the number of vowels in string


// defining vowels
var vowels = ["a", "e", "i", "o", "u"]
var  string = "DhaksInI";
function countVowel(str) {
    let count = 0;
// loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

var result=countVowel(string);
console.log("The string is "+string)
console.log("The number of vowels in string is "+result);