function callback() {
    console.log('Hello world')
}
setTimeout(callback,2000);

// Function callback được truyền vào setTimeout là 1 callback. Nó sẽ được gọi vào sau n giây khi setTimeout được gọi
// Dùng trong bất đồng bộ, nhưng lưu ý rằng callback vẫn có thể là đồng bộ, không nhất thiết cứ callback là bất đồng bộ

function syncFunction(cb) {
    cb();
}
syncFunction(callback);

// Ví dụ callback được truyền vào syncFunction được gọi là 1 callback. Nó sẽ được gọi ngay lập tức khi syncFunction được gọi
// => Chả có gì bất đồng bộ
// node callback.js sẽ thấy rõ hơn 
// function syncFunction sẽ in ra Hello world ngay lập tức, nhưng function callback ở trên khi setTimeout sẽ sau 2 giây mới in ra
