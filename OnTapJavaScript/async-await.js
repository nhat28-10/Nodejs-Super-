const promise1 = () => 
    new Promise((resolve,reject) => {
        setTimeout(() => resolve ('Promise 1'), 2000);
    })

const promise2 = () =>
    new Promise((resolve,reject) => {
        setTimeout(() => resolve ('Promise 2'), 1000);
    })

const promise3 = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve ('Promise 3'), 1500);
    })

Promise.all([promise1(), promise2(), promise3()])
    .then((res) => {
        console.log('Result: ', res)
    })
    .catch((err) => {
        console.log( 'Error: ',err);
    })
// Hoặc dùng async await với destructuring 

const main = async () => {
    try {
        const [result1, result3] = await Promise.all([promise1(), promise3()])
        console.log('Kết quả là: ',result1, result3);
    } catch (err) {
        console.log('Error:', err);
    }
}
// cũng là dùng async await nhưng lấy nguyên mảng 
const main2 = async () => {
    try {
        const result = await Promise.all([promise1(), promise2(), promise3()]); 
        console.log(result)
    } catch (err) {
        console.log('Err:', err)
    }
}
main()
main2();