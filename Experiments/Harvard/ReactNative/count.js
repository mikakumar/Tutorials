import React from 'react';
import {Stylesheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = Stylesheet.create({
	text: {fontSize: 72},
})

class Count extends React.Component{
	static propTypes = {
		count: PropTypes.number.isRequired
	}


render(){
	return(
			<Text style = {styles.text}>
			{this.props.count}
			</Text>
		);
}
}

export default Count
