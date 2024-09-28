import React, { useState } from 'react'
import { Item } from '../App'

type FormProps = {
	setItems: Item[]
}

const Form = ({ setItems }: FormProps) => {
	const [item, setItem] = useState<Item | undefined>({
		name: '',
		completed: false,
		id: 0,
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!item) {
			console.log('no item')
			return
		}
		setItems(prevItems => [...prevItems, { ...item, id: prevItems.length + 1 }])
		setItem({ name: '', completed: false, id: 0 })
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='add item'
				name='item'
				value={item.name}
				onChange={e => setItem({ ...item, name: e.target.value })}
			/>
			<button type='submit'>Add</button>
		</form>
	)
}

export default Form
