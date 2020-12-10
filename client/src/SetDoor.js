import React from "react";

class SetDoor extends React.Component {
	state = { doorId: null };

	handleKeyDown = (d) => {
		// if the enter key is pressed, set the value with the string
		if (d.keyCode === 13) {
			this.setValue1(d.target.value);
		}
	};

	setValue1 = (value) => {
		const { drizzle, drizzleState } = this.props;
		const contract = drizzle.contracts.MyStringStore;

		// let drizzle know we want to call the `set` method with `value`
		const doorId = contract.methods["doorSet"].cacheSend(value, {
			from: drizzleState.accounts[0],
		});

		// save the `doorId` for later reference
		this.setState({ doorId });
	};

	getTxStatus = () => {
		// get the transaction states from the drizzle state
		const { transactions, transactionStack } = this.props.drizzleState;

		// get the transaction hash using our saved `doorId`
		const txHash = transactionStack[this.state.doorId];

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

export default SetDoor;
