// tính giai thừa khi nhập số nguyên dương bất kỳ nhập vào
// input : 5
// output : 120

let number = parseInt(prompt("Nhập số nguyên dương bất kỳ: "));

if(number < 0){
    console.error("Số nhập ko được phép âm");
}
else{
    let factorial = 1;

    for(let i = 2; i <= number; i++){
        factorial *= i;
    }

    console.log(`result = ${factorial}`);
}