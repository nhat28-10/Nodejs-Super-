const promise = new Promise((resolve,reject)=> {
    console.log('Executing promise');
    resolve('Success');
});

promise.then((result)=> {
    console.log('Promise resolved', result);
})

console.log('Promise created');