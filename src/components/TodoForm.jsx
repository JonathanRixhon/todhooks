import React from 'react'
function TodoForm() {
	const handleSubmit = e => {
		e.preventDefault()
		console.log(e.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' />
			<input type='submit' />
		</form>
	)
}
export default TodoForm
