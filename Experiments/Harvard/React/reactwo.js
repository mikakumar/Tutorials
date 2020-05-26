import React from 'react';
import { render } from 'react-dom';


const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
};

let count = 0;


class App extends React.component{
	constructor(props){
		super(props){
			this.state = {
				count: 0
			}
		}

	this.increaseCount = ()=>this.increaseCount.bind(this);

	increaseCount(){
		this.setState({count: this.state.count + 1});
		console.log(this.state.count);
	}
}

	render(){
		return(	
			<div styles={styles}>
			<button onClick ={()=>this.increaseCount()}>Click!</button>
			<h2>{props.count}</h2>
			</div>
		)
	}
}
