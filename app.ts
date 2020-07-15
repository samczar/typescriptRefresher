const addUID = <T extends object>(obj: T) => {
	const uid = Math.floor(Math.random() * 100)
	return { ...obj, uid }
}

interface Resouce<T> {
	name: string
	age: number
	data: T
}

const adduid1 = addUID({ name: 'sam', age: 100 })
const adduid2: Resouce<string[]> = {
	name: 'Sam',
	age: 20,
	data: ['code', 'piano'],
}
console.log(adduid1)
