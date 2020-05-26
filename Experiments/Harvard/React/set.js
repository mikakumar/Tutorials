// follow the rules of a set

//every element is unique
//can return the length 

class Set{
	constructor(arr)
	{
		this.arr = arr
		origarr = arr
	}

	add(val)
	{
		if(!this.has(val))
			this.arr.push(val)
	}

	has(val)
	{
		return this.arr.includes(val)
	}

	delete(val)
	{
		this.arr = this.arr.filter(x=> x!==val)
	}

	original()
	{
		return new Set(this.origarr)
	}
}