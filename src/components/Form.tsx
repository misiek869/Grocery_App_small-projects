import React, { useState } from 'react'

type Item = {
	name: string
	completed: boolean
	id: number
}

const Form = () => {
	const [item, setItem] = useState<Item>()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!item) {
			console.log('no item')
			return
		}
		console.log(123)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='add item' name='item' value={item} />
			<button type='submit'>Add</button>
		</form>
	)
}

export default Form
