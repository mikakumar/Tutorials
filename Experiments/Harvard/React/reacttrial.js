import React from 'react';
import { render } from 'react-dom';


const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
};

let count = 0;


const App = (props)=>{
	<div styles={styles}>
	<h2>{props.count}</h2>
	</div>
}

setInterval(()=>render(<App count={count++} />, document.getElementbyId('root')), 1000);