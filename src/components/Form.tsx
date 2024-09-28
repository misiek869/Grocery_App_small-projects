import React, { useState } from 'react'
import { Item } from '../App'

type FormProps = {
	addNewItem: (itemName: string) => void
}

const Form = ({ addNewItem }: FormProps) => {
	const [item, setItem] = useState<string>('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!item) {
			console.log('no item')
			return
		}
		addNewItem(item)
		setItem('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='add item'
				name='item'
				value={item}
				onChange={e => setItem(e.target.value)}
			/>
			<button type='submit'>Add</button>
		</form>
	)
}

export default Form
