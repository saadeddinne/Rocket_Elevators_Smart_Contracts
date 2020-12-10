import React from "react";

class ReadCage extends React.Component {
	state = { dataKey: null };

	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.MyStringStore;

		// let drizzle know we want to watch the `myString` method
		const dataKey = contract.methods["Cage"].cacheCall();

		// save the `dataKey` to local component state for later reference
		this.setState({ dataKey });
	}

	render() {
		// get the contract state from drizzleState
		const { MyStringStore } = this.props.drizzleState.contracts;

		// using the saved `dataKey`, get the variable we're interested in
		const nbCage = MyStringStore.Cage[this.state.dataKey];

		// if it exists, then we display its value
		return (
			<row>
				<div class="col-6">Cages needed :</div>{" "}
				<div class="col-6">{nbCage && nbCage.value}</div>
			</row>
		);
	}
}

export default ReadCage;
