import React, { useState, Fragment } from 'react'

import TodoForm from './TodoForm'
import Todo from './Todo'
import todoData from './todoData'

function App() {
	const [todos, setTodos] = useState([...todoData])
	const handleComplete = (todo) => {
		const index = todos.indexOf(todo)
		const tempTodos = [...todos]
		tempTodos[index].isCompleted = true
		console.log(tempTodos)
		setTodos(tempTodos)
	}
	const handleDelete = (todo) => {
		const index = todos.indexOf(todo)
		const tempTodos = [...todos]
		tempTodos.splice(index, 1)
		setTodos(tempTodos)
	}
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
						<Todo
							key={index}
							task={todo}
							complete={handleComplete}
							delete={handleDelete}
						/>
					))}
				</ul>
				<TodoForm listeTodos={todos} updateTodos={setTodos} />
			</section>
		</Fragment>
	)
}

export default App
/*  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAt-L4N05MZ-3RS_TU15X0gpvfnF7R9npo",
    authDomain: "crudino-79502.firebaseapp.com",
    databaseURL: "https://crudino-79502.firebaseio.com",
    projectId: "crudino-79502",
    storageBucket: "crudino-79502.appspot.com",
    messagingSenderId: "291768885651",
    appId: "1:291768885651:web:72ed809f18064358330866"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);*/
