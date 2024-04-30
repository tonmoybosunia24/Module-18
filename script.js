// While.js


/* var roastGiven = 0;
while(roastGiven < 7){
    console.log("Roast Den PLz")
    console.log(roastGiven)
    roastGiven++;
} */
var num = 1;
while(num < 20){ /* (While) লেখার নিয়ম। */
    console.log(num)
    num++; /* (num++;) এটা না দিলে কল্ডিশন টা চলতেই থাকবে। */
}


// Number.js


var number = 1;
while(number <= 20){
    console.log(number)
    number++;
}


// Even.js


// var number = 0;
// while(number <= 20){
//     console.log(number)
//     number = number + 2; /* কত করে বড়াব তার জন্য। */
// }
var number = 1;
while(number <+ 500){
    console.log(number)
    number = number + 2
}


// For.js


// var roastGiven = 0;
// while(roastGiven < 7){
//     console.log("Roast Den Plz")
//     roastGiven++;
// }
/* For Loop */
// for(var roastGiven = 0; roastGiven < 7; roastGiven++){ /*  */
//     console.log("Roast Den Plz")
// }

/* Simple Verson For Forloop */
for(var i = 0; i <= 20; i+=2){
       console.log(i)
}


// Array-Loop.js


// for(i = 0; i < 10; i++){
//     console.log(i)
// }
/* Display Every ELement Of An Array */
// var numbers = [45, 87, 45, 52, 458, 78, 21, 54, 75];
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number)
// }
var numbers = [21, 22, 23, 24, 25, 26, 27,28,29,30, 40]; /* (অ্যারে এর মধ্যে কোন লুপ কে চালানো।) */
for(t = 0; t < numbers.length; t++){
    var number = numbers[t];
    console.log(number)
}


// Break.js


// for(var i = 0; i < 20; i++){
//     console.log(i)
//     if(i > 10){
//         break; /* (break;) কোন একটা লুপ এর কোন শর্ত সাপেক্ষে ব্রেক দেওয়ার জন্য। */
//     }
// }
// var i = 0;
// while(i < 20){
//     console.log(i);
//     if(i > 10){
//         break;
//     }
//     i++;  
// }
var numbers = [21, 22, 29, 24, 25, 26, 27, 28, 29, 30, 40, 200,201]; /* (অ্যারে এর মধ্যে কোন লুপ কে চালানো।) */
for(t = 0; t < numbers.length; t++){
    var number = numbers[t];
    if(number > 27){
        break;
    }
    console.log(number)
}


// Continue.js


var numbers = [21, 22, 23, 23, 4552, 26, 27,101,29,30, 11, 200,201]; /* (অ্যারে এর মধ্যে কোন লুপ কে চালানো।) */
for(t = 0; t < numbers.length; t++){
    var number = numbers[t];
    if(number > 26){
        continue;
    }
    console.log(number)
}


// Reverse.js


var number = 10;
while(number >= 1){
    console.log(number)
    number--; /* (For/While) লুপ কে রিভারস এ চালানোর নিয়ম। */
}
for(var i = 10; i >= 0; i = i - 2){
    console.log(i)
}