// input : a = 6; b = 2
// output: 2, 4, 6

let a = prompt("Nhập a");
let b = prompt("Nhập b");

for(let i = 1; i <= a; i++){
    if(i % b == 0){
        console.log(`result = ${i}`);
    }
}