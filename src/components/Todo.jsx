import React from 'react'

export default function Todo(props) {
	console.log(props.task.isCompleted)
	return (
		<li
			style={{
				textDecoration: props.task.isCompleted ? 'line-through' : 'none',
			}}>
			{props.task.text}
			<button onClick={() => props.complete(props.task)}>Complete</button>
			<button onClick={() => props.delete(props.task)}>Delete</button>
		</li>
	)
}
