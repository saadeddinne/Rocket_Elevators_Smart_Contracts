import React from "react";

class ReadMotor extends React.Component {
	state = { dataKey: null };

	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.ProjectOffice;

		// let drizzle know we want to watch the `myString` method
		const dataKey = contract.methods["Motor"].cacheCall();

		// save the `dataKey` to local component state for later reference
		this.setState({ dataKey });
	}

	render() {
		// get the contract state from drizzleState
		const { ProjectOffice } = this.props.drizzleState.contracts;

		// using the saved `dataKey`, get the variable we're interested in
		const nbMotor = ProjectOffice.Motor[this.state.dataKey];

		// if it exists, then we display its value
		return (
			<row>
				<div class="col-6">Motors needed : </div>{" "}
				<div class="col-6">{nbMotor && nbMotor.value}</div>
			</row>
		);
	}
}

export default ReadMotor;
