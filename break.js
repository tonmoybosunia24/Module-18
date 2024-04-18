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
