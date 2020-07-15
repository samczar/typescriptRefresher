Typecript Refresher

Get Error during Development time and not during execution time

Enum
used for holding list value

enum { 'male','female'}

Union Type
Used for a mixture of types on a value
Example
const unionType = (type1:number | string, type2: number | string)

Tuple
tuple holds 2 vaue in an array
Example

const info[name:string,age:number]

Literals Types
const resultChecker = 'as-number' | 'as text'

Type Alias
example
type Combinable = number | string;
We can use combinable as union type

type ConversionDescription = 'as-number' | 'as-text'
We can use this for literal types

Typescript uses static types
Javascript uses runtime types

tsc --init this creates tsconfig.json for setting ts projects example src rootdir
tsc --watch || tsc -w

npm i lite-server

Function Types

let Greet: Function;

Function Signature
let greet:(a: string, b:string)=> void;

greet=(name: string, greeting:string)=>{
console.log(`${name} says ${greeting}`)
}

The DOM & Type Casting
const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#tofrom') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
Doing a cast for class to Form

form.addEventListener('submit',(e:Event)=>{
e.preventDefault()
console.log(
type.value,
tofrom.value,
details.value,
amount.valueAsNumber //This cast the string input to number
)
})

Class
A class is a blue pring for an object.

    class Invoice {

        client: string;
        details: string;
        amount: number
        constructor(c: string, d: string, a:number){
        this.client = c;
        this.details = d;
        this.amount= a;
    }

    format():string{
        return `${this.client} owes ${this.amount} for ${this.details}`
        }

    }

const invOne = new Invoice('mario','work on the site', 250)

Access Modifier
public private readonly

A short for for class constructor is

constructor(readonly client:string, public details: string, private amount:number){}

This above automatically adds the properties.

Interfaces
Interface allows us to enforce structures within a class or object

    interface IsPerson {
        name: string;
        age: number;
        speak(a:string):void;
        spend(a:number):number;
    }

    const me:IsPerson ={
            name: 'shaun',
            age: 30,
            speak(text: string):void {
            console.log(text)
        },

            spend(amount: number):number {
            console.log('I spent ', amount)
            return amount
        }
    }

##Generics

Reuseable blocks of code that can be used with different types

example:
const addUID = (obj: object)=>{
const uid = Math.floor(Math.random() \* 100)
return {...obj, object}
}
