import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import {
	Container,
	ToDoList,
	BtnAdd,
	InputArea,
	List,
	UlList,
	Trash,
	Rocket,
	Heading3,
	Appl,
} from "./styles.js";

function App() {
	const [list, setList] = useState([]);
	const [inputTask, setInputTask] = useState("");

	const changeInput = (event) => {
		setInputTask(event.target.value);
	};

	const buttonClicked = () => {
		if (inputTask) {
			setList([
				...list,
				{ id: uuid(), task: inputTask, finished: false },
			]);
		}
	};

	function finishTask(id) {
		const newList = list.map((item) =>
			item.id === id ? { ...item, finished: !item.finished } : item
		);
		setList(newList);
	}
	function deleteTask(id) {
		const newList = list.filter(
			(item) => (item.id === id ? item - { ...item } : item)
			//item.id !== id
		);
		setList(newList);
	}

	return (
		<Appl>
			<h1>ToDo List</h1>
			<Container>
				<ToDoList>
					<InputArea
						onChange={changeInput}
						placeholder="Digite sua tarefa"></InputArea>
					<BtnAdd onClick={buttonClicked}>Adicionar</BtnAdd>
					<ul>
						{list.length > 0 ? (
							list.map((item) => (
								<UlList
									isFinished={item.finished}
									key={item.id}>
									<Rocket
										onClick={() => finishTask(item.id)}
									/>
									<List> {item.task} </List>
									<Trash
										onClick={() => deleteTask(item.id)}
									/>
								</UlList>
							))
						) : (
							<Heading3>Não há Itens na Lista!</Heading3>
						)}
					</ul>
				</ToDoList>
			</Container>
		</Appl>
	);
}

function Title() {
	return <h1>ToDo List</h1>;
}
export default App;
