import { useState } from 'react'
import Form from './components/Form'

function App() {
	const [items, setItems] = useState(0)

	return (
		<section>
			<Form />
		</section>
	)
}

export default App
