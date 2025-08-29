// string
let car: string = 'TOYOTA'
car = 15 // -> Hover vào sẽ báo lỗi ngay vì car được gắn là string

// number
let age:number = 13

// null
let address:null = null

// undefined
let body = undefined

// any: Có thể là string hoặc mọi kiểu mà không bị báo lỗi
let anything : any
anything = 15
anything = 'Hello'

/** 
 * Object
*/
// Ở đây let house: { address: string } chỉ khai báo kiểu biến cho house nhưng bạn chưa gán
// giá trị khởi tạo. Nên mặc định house là undefined
let house : {
    address:string,
}
house.address = 'Da Nang'

// Cách sửa
let house1: {
    address:string
    color?: string // có thể có hoặc không => không báo lỗi
} = {
    address: ''
}
house1.address = 'Da Nang'
house1.color = 'red'

/**
 * Array
 */
let products: any[] = []
products.push(1);
products.push('Hello');

// string []
let names = ['Alex', 'Bob']
let addressess: string [] = []
addressess.push('Da Nang')

// numbers [] 
let numbers: number[] = []
numbers = [1,2,3,4]

// object array
let people : {
    name: string
    age: number
}[] = []
people.push({name: 'Alex', age: 30})

/**
 * Function
 */
const sum = (num1: number, num2:number): number => {
    return num1 + num2 
}


const sub: (num1: number, num2:number) => number = (
    num1:number,
    num2:number
) => num1 - num2

const handle = () => { // return ra void
    console.log(123)
}

/**
 * Union
 */
let price: string | number | boolean
price = 15
price = '10'
price = true

let character: {name: string} | {firstName: string} = {
    name: 'Nhat',
    firstName: 'Nguyen'
}

 /**
  * Enum
  */
 enum Sizes {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
 }

 /**
  * Interface
  */
 interface ICharacter {
    age: number
 }
 interface ICharacter {
    name: string,
    age: number,
    isLoading: boolean
 }

 let ICharacter: ICharacter = {
    name: 'Nhat',
    age:22,
    isLoading:false
 }
 // Lưu ý interface có thể merge 2 state lại với nhau
 // Type có thể sẽ tốt hơn nhưng tùy trường hợp còn lại
 // Vì Type có thể Union, Merge
 // Có những thư viện sẽ dùng interface
 /**
  * Type
  */ 

 type Name = {
    name: string,
 }
 type Age = {
    age: number,
 }

 type Person = Name & Age

 // Generic Type: value có thể là any phụ thuộc vào mình gắn kiểu ntn

 const handleClick = <Type>(value: Type) => value
 let value = 100
handleClick<string>('100')

// Class
class Person1 {
   public name: string
    age: number
    readonly money: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        
    }
    handle () {
        let value = this.money
    }
}

// So sánh giữa Class của TS và JS
// class Person {
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }
// }

const nhat = new Person1('Nhat', 22);
nhat.name = 'Nguyen Nhat' // public có thể truy cập bên ngoài class
// nếu private chỉ được dùng trong class

class Person2{
    constructor(public name:string, public age:number) {
        this.name = name
        this.age = age
    }
}