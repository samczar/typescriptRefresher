function add(n1: number, n2: number): number {
	return n1 + n2
}

console.log(add(1, 5))
let hobby: string[] = []
const person = {
	fname: 'Samczar',
	lname: 'Heavens',
	age: '30',
	fullname: function (fn: string, ln: string): string {
		this.fname = fn
		this.lname = ln

		return `${fn} ${ln}`
	},
	hobbies: ['singing', 'jumping'],
}
hobby = [...person.hobbies, 'coding']

hobby = [...hobby, 'Instrumenting', 'dancing']
console.log(hobby)

const fullNameAge = (person.fullname.prototype.farewell = function () {
	return person.fname
})

console.log(fullNameAge())

const Animal: { legs: number; tail: boolean } = {
	legs: 0,
	tail: true,
}

let dog = (Animal.legs = 4)
console.log({ Animal, legss: '10' })

functionConverter()
function functionConverter() {
	console.log(+'5' + parseFloat('10'), 'function Converter ')
}

function generateError(message: string, code: number) {
	throw { message: message, errorCode: code }
}

generateError('An error occured', 500)
