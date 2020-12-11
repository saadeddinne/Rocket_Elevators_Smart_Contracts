import React from "react";

class SetDisplay extends React.Component {
	state = { displayId: null };

	handleKeyDown = (z) => {
		// if the enter key is pressed, set the value with the string
		if (z.keyCode === 13) {
			this.setValue1(z.target.value);
		}
	};

	setValue1 = (value) => {
		const { drizzle, drizzleState } = this.props;
		const contract = drizzle.contracts.ProjectOffice;

		// let drizzle know we want to call the `set` method with `value`
		const displayId = contract.methods["displaySet"].cacheSend(value, {
			from: drizzleState.accounts[0],
		});

		// save the `displayId` for later reference
		this.setState({ displayId });
	};

	getTxStatus = () => {
		// get the transaction states from the drizzle state
		const { transactions, transactionStack } = this.props.drizzleState;

		// get the transaction hash using our saved `displayId`
		const txHash = transactionStack[this.state.displayId];

		// if transaction hash does not exist, don't display anything
		if (!txHash) return null;

		// otherwise, return the transaction status
		return `Transaction status: ${
			transactions[txHash] && transactions[txHash].status
		}`;
	};

	render() {
		return (
			<div>
				<input type="number" onKeyDown={this.handleKeyDown} />
				<div>{this.getTxStatus()}</div>
			</div>
		);
	}
}

export default SetDisplay;
