import React from "react";

class SetMotor extends React.Component {
	state = { motorId: null };

	handleKeyDown = (b) => {
		// if the enter key is pressed, set the value with the string
		if (b.keyCode === 13) {
			this.setValue1(b.target.value);
		}
	};

	setValue1 = (value) => {
		const { drizzle, drizzleState } = this.props;
		const contract = drizzle.contracts.ProjectOffice;

		// let drizzle know we want to call the `set` method with `value`
		const motorId = contract.methods["motorSet"].cacheSend(value, {
			from: drizzleState.accounts[0],
		});

		// save the `motorId` for later reference
		this.setState({ motorId });
	};

	getTxStatus = () => {
		// get the transaction states from the drizzle state
		const { transactions, transactionStack } = this.props.drizzleState;

		// get the transaction hash using our saved `motorId`
		const txHash = transactionStack[this.state.motorId];

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

export default SetMotor;
