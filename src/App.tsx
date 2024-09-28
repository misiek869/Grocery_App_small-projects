import { useState } from 'react'
import Form from './components/Form'

export type Item = {
	name: string
	completed: boolean
	id: number
}

function App() {
	const [items, setItems] = useState<Item[]>([])
  
	console.log(items)
	return (
		<section>
			<Form setItems={setItems} />
		</section>
	)
}

export default App
