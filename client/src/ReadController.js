import React from "react";

class ReadController extends React.Component {
	state = { dataKey: null };

	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.MyStringStore;

		// let drizzle know we want to watch the `myString` method
		const dataKey = contract.methods["Controller"].cacheCall();

		// save the `dataKey` to local component state for later reference
		this.setState({ dataKey });
	}

	render() {
		// get the contract state from drizzleState
		const { MyStringStore } = this.props.drizzleState.contracts;

		// using the saved `dataKey`, get the variable we're interested in
		const nbController = MyStringStore.Controller[this.state.dataKey];

		// if it exists, then we display its value
		return <p>Controller needed : {nbController && nbController.value}</p>;
	}
}

export default ReadController;
