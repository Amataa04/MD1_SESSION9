let number = window.prompt("Nhập số bất kỳ");
if(number % 2 == 0 && number != 0){
    console.log("Số chẵn");
}
else if(number % 2 != 0){
    console.log("Số lẻ");
}

else{
    console.log("Số không hợp lệ");
}