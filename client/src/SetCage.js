import React from "react";

class SetCage extends React.Component {
	state = { cageId: null };

	handleKeyDown = (a) => {
		// if the enter key is pressed, set the value with the string
		if (a.keyCode === 13) {
			this.setValue1(a.target.value);
		}
	};

	setValue1 = (value) => {
		const { drizzle, drizzleState } = this.props;
		const contract = drizzle.contracts.ProjectOffice;

		// let drizzle know we want to call the `set` method with `value`
		const cageId = contract.methods["cageSet"].cacheSend(value, {
			from: drizzleState.accounts[0],
		});

		// save the `cageId` for later reference
		this.setState({ cageId });
	};

	getTxStatus = () => {
		// get the transaction states from the drizzle state
		const { transactions, transactionStack } = this.props.drizzleState;

		// get the transaction hash using our saved `cageId`
		const txHash = transactionStack[this.state.cageId];

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

export default SetCage;
