let age = window.prompt("Nhập số tuổi cuả bạn");

if(age <= 0){
    document.write("Tuổi không hợp lệ");
}
else{
    document.write(`Bạn ${age} tuổi`);
}