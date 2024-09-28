import { useState } from 'react'
import Form from './components/Form'
import { nanoid } from 'nanoid'

export type Item = {
	name: string
	completed: boolean
	id: string
}

function App() {
	const [items, setItems] = useState<Item[]>([])

	const addNewItem = (itemName: string): void => {
		const newItem: Item = {
			name: itemName,
			completed: false,
			id: nanoid(),
		}
		const newItems = [...items, newItem]
		setItems(newItems)
	}

	console.log(items)
	return (
		<section>
			<Form addNewItem={addNewItem} />
		</section>
	)
}

export default App
