var numbers = [21, 22, 23, 23, 4552, 26, 27,101,29,30, 11, 200,201]; /* (অ্যারে এর মধ্যে কোন লুপ কে চালানো।) */
for(t = 0; t < numbers.length; t++){
    var number = numbers[t];
    if(number > 26){
        continue;
    }
    console.log(number)
}