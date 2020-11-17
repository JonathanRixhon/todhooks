import React, { useState, Fragment } from 'react'

import TodoForm from './TodoForm'
import Todo from './Todo'
import todoData from './todoData'

function App() {
	const [todos, setTodos] = useState([...todoData])
	/* const [todos, setTodos] = useState([
		{
			text: 'manger des fruits et des légumes',
			isCompleted: false,
		},
		{
			text: 'Se laver',
			isCompleted: false,
		},
	]) */
	return (
		<Fragment>
			<h1 aria-level='2' role='heading'>
				Todhooks
			</h1>
			<section>
				<h2 aria-level='2' role='heading'>
					Ma liste
				</h2>
				<ul>
					{todos.map((todo, index) => (
						<Todo key={index} text={todo.text} index={todo.index} />
					))}
				</ul>
				<TodoForm listeTodos={todos} updateTodos={setTodos} />
			</section>
		</Fragment>
	)
}

export default App
