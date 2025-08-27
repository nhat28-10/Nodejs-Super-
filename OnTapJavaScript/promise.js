const promise = new Promise((resolve, reject) => {
  console.log('Executing promise')
  resolve('Success')
})

promise.then((result) => {
  console.log('Promise resolved:', result)
})

console.log('Promise created')
//------------------------------------//
const promiseFunc = () => 
    new Promise((resolve,reject) => {
    console.log('Executing promise');
    resolve('Success');
});

promiseFunc().then((result)=> {
    console.log('Promise solved:', result);
});

console.log("Promise created")

// Nhìn thì giống nhau nhưng khi bạn thư comment promise.then và promiseFunc.then thì sự khác biệt ở đây là đoạn code trên vẫn sẽ in ra Executing promise 
// nhưng đoạn code dưới chỉ in được Promised created ⇒ với cách gọi trên thì khi chúng ta gọi promiseFunc thì clg Executing promise mới được log ra
// -------------------
const getProduct = new Promise((resolve) => {
  // setTimeout sẽ được gọi ngay lập tức
  setTimeout(() => {
    // còn callback trong này sau 1s sẽ chạy
    console.log('setTimeout')
    resolve([])
  }, 1000)
})
// ------------
// Tạo nhanh 1 promise mà sẽ resovle 
const presolve = Promise.resolve(100)
// Tạo nhanh 1 promise sẽ reject
// const prereject = Promise.reject(new Error('Lỗi rồi'));
//-------------------------------
// Một async function sẽ return về một promise
// Cho dù giá trị return bên trong function không phải là promise
const handle = async () => {
  return 'hello'
}

// Trong trường hợp giá trị return là một promise
// Thì mọi thứ vẫn không thay đổi, vẫn như trên
// Không có chuyện lồng nhau như `handle().then(promise => promise.then(res => {console.log(res)}))`
const handle2 = async () => {
  return Promise.resolve('hello')
}
// Đây cũng là một function return promise tương tự 2 trường hợp trên
// Chỉ khác là nó không khai báo async thôi
const handle3 = () => {
  return Promise.resolve('hello')
}

// ----------------------------------------------- //
handle3()
    .then((res) => {
        return res + ' hi'
    })
    .then((res) => {
        console.log(res)
    })
// ------------//
handle3()
    .then((res) => {
        return Promise.reject(new Error('Lỗi rồi bạn ơi'))
        // Dùng new Error để khi nó log ra nó kèm dấu vết bị lỗi
        // throw new Error('error')
    })
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e);
    })
//--------------------//
const handle4 = (value) => {
    return Promise.resolve('handle4 ' + value);
    // ❌ callback hell, không nên dùng
// handle2().then((res) => {
//   handle4(res).then((v) => {
//     console.log(v)
//   })
// })
}
handle2()
    .then((res) => {
        return handle4(res);
    })
    .then((v) => {
        console.log(v);
    })
//--------------------/
const handle5 = () => {
    return Promise.resolve(true);
}
handle5()
    .then((res) => {
        throw new Error('Error');
    })
    .catch((e) => {
        console.log('Chắc chắn sẽ nhảy vào đây')
        return Promise.reject(e)
    })
    .then((v) => {
        console.log(v);
        console.log('Nhảy vào đây vì trước đó đã catch, và giá trị v là undefined vì trong catch không return gì cả')
    })
    .catch((e) => {
        console.log(e)
    })
///////////////////////////////////////////
const var1 = 1;
const var2 = 2;
const var3 = var1 + var2;