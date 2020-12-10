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
		return (
			<row>
				<div class="container-fluid">
					<div class="col-4">Controller needed :</div> <div class="col-4"></div>
					<div class="col-4">{nbController && nbController.value}</div>
				</div>
			</row>
		);
	}
}

export default ReadController;
