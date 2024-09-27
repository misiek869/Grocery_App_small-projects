import React, { useState } from 'react'

const Form = () => {
	const [item, setItem] = useState<string>('')

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
