import React from 'react';
import {Button, View, ScrollView, Stylesheet, Switch} from 'react-native'
import {Constants} from 'expo'; //applicable to (only?) snack.expo.io

let id = 0;

const styles = Stylesheet.create({
	todoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	appContainer: {
		paddingTop: Constants.statusBarHeight,
	},
	fill: {
		flex: 1
	}
})

const Todo = props => (
 	<View style={styles.todoContainer}>
 	<Switch value={props.todo.checked} onValueChange={props.onToggle} />
 	<Button onPress={props.onDelete} title= "Delete"/>
 	<Text>{props.todo.text}</Text>
 	</View>
)



class App extends React.Component{

	constructor(){
		super()
			this.state = {
				todos: [],
	
		}
	}


	addTodo(){
		const text = prompt("TODO text please!")
		this.setState({
			todos: [...this.state.todos, {id : id++, text: text, checked: false}],
		})
	}

	removeTodo(id){
		this.setState({
			todos: this.state.todos.filter(todo => todo.id!==id)
		})
	}

	toggleTodo(id){
		this.setState({
			todos: this.state.todos.map(todo=>{
				if(todo.id !== id) return todo;
				return{
					id: todo.id,
					text: todo.text,
					checked: !todo.checked
				}
			})
		})
	}

	render(){
		<View style = {styles.appContainer, styles.fill}>
			<Text>todo count: {this.state.todos.length}
			</Text>
			<Text> Unchecked todo count: {this.state.todos.filter(todo=>!todo.checked).length}</Text>
			<Button onPress={()=>this.addTodo()} title="Add ToDo"/>
			<ScrollView> this.state.todos.map(todo=>(
				<Todo onToggle={()=>this.toggleTodo(todo.id)
					  onDelete={()=>this.removeTodo(todo.id)}
					  todo = {todo})/>
			})
			</ScrollView>
		</View>
	}
}
