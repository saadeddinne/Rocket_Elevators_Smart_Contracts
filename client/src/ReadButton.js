import React from "react";

class ReadButton extends React.Component {
	state = { dataKey: null };

	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.ProjectOffice;

		// let drizzle know we want to watch the `myString` method
		const dataKey = contract.methods["Button"].cacheCall();

		// save the `dataKey` to local component state for later reference
		this.setState({ dataKey });
	}

	render() {
		// get the contract state from drizzleState
		const { ProjectOffice } = this.props.drizzleState.contracts;

		// using the saved `dataKey`, get the variable we're interested in
		const nbButton = ProjectOffice.Button[this.state.dataKey];

		// if it exists, then we display its value
		return (
			<row>
				<div class="col-6">Buttons needed :</div>{" "}
				<div class="col-6">{nbButton && nbButton.value}</div>
			</row>
		);
	}
}

export default ReadButton;
