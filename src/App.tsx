import { useState } from 'react'
import Form from './components/Form'

function App() {
	const [items, setItems] = useState([])

	return (
		<section>
			<Form setItems={setItems} />
		</section>
	)
}

export default App
