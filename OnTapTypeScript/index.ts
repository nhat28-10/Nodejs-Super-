// Generic

type User = {
    name: string,
    age: number,
}

interface Identity<Input>  {
    (value: Input) : Input
}

const identity = <Type>(value: Type) => value // Generic với arrow function

function identity1<Type>(value: Type) {
    return value;
} // Generic với function thường

const myIdentity1: <Type>(value: Type) => Type = identity1

const myIdentity2: {<T>(value: T) : T} = identity1

const myIdentity3 : Identity<number> = identity // Truyền kiểu number vào

myIdentity3(5)

// Lưu ý: Chỉ dùng any khi bị bí quá
// Có thể dùng để truyền thuộc tính cho 1 Object

const result = identity<User>({
    name: 'Nhat',
    age:22
})

// cách ràng buộc Generic
// Thì phải dùng extends với thuộc tính của Object đó
// Để rút gọn thì nên khởi tạo interface hoặc type 

interface LengthObj {
    length: number,
    age: number
}
const logIdentity = <T extends LengthObj>(value: T) => {
    console.log(value.length)
    console.log(value.age)
    return value;
}

logIdentity({
    length: 200,
    age: 22
})

const getValue = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) => {
    console.log(obj);
    console.log(key)
    return obj[key];
}
// để báo cho thằng Key luôn luôn là key của thằng object
// thì dùng extends keyof Obj
getValue({
    name: 'Nhat',
    age: 22,
}, 'name')
// Lưu ý: Nếu key không tồn tại thì object sẽ báo lỗi VD
// getValue({name: 'Nhat', age: 30}, 'address') thì ở đây sẽ báo lỗi là address không phải là kiểu dữ liệu phù hợp với key của obj đó


// Default Generic 
// interface Box<T>  {
//     value: T
// }

// const box: Box = {
//     value: 'John'
// }

// Như bạn có thể thấy,
// Box<T> định nghĩa một interface với một thuộc tính value có kiểu dữ liệu là T. Tuy nhiên, nếu bạn muốn cung cấp một kiểu dữ liệu mặc định cho T trong trường hợp người dùng không chỉ định kiểu dữ liệu khi sử dụng interface này, bạn có thể làm như sau:

// const box:Box<string> = {
//     value: 'John'
// }

// hoặc là 

// interface Box<T = String> {
//     value: T
// }