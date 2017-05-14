import React from "react";

// Main class component
class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};

		//Bind functions here
		//this.updateList = this.updateList.bind(this);
	}

	//Other functions here

	componentWillMount(){
		
	}

	render(){

		return(
			<div>
                <p>Hello React App! Home</p>
			</div>
		)	
	}
}

export default Main;