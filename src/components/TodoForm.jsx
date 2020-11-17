import React, { useState } from 'react'
function TodoForm(props) {
	const [valueInput, setValueInput] = useState('')
	const handleSubmit = e => {
		//on stoppe le rechargement
		e.preventDefault()
		//on add la valeur contenue dans la var valueInput
		props.updateTodos([...props.listeTodos, { text: valueInput }])
		setValueInput('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' onChange={e => setValueInput(e.target.value)} />
			<input type='submit' />
		</form>
	)
}
export default TodoForm
