
// Bài 1: Viết arrow function trả về giá trị nhỏ nhất của hai số (giả sử giá trị truyền nào luôn là số). 
let min = (a,b) => a < b ? a : b;
console.log(min(5,3));
console.log(min(-1,3));
console.log(min(10,-10));
console.log(min(-5,10));

// Bài 2: Viết arrow function kiểm tra xem một số có phải là số nguyên tố hay không. Nếu là số nguyên tố thì trả về true. Ngược lại, trả về false.Sau đó, in ra các số nguyên tố từ 1 đến 10.

// Dùng kiểm trả số nguyên tố
const isPrime = (number) => {

    if (isNaN(number)) return false; // không phải số => loại
    if ( number < 2) return false; // bé hơn 2 => loại
    if ( number === 2) return true; // 2 là số nguyên tố
    
    for (let i = 2; i * i <= number; i ++) { // Kiểm trả các ước từ 2 đến căn bậc 2 của number 
        if ( number % i === 0) return false; // chia hết => khphai số nguyên tố => false
    }
    return true; // không chia hết cho ai ngoài chính number => là nguyên tố

};
for ( let i = 1; i <= 10; i ++) {
    if(isPrime(i)) {
        console.log(i)
    }
}
