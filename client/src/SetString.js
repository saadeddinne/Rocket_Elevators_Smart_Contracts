import React from "react";

class SetString extends React.Component {
	state = { stackId: null };

	// To handle the event of the click (button submit)
	buttonClick = () => {
		var controller = parseInt(document.getElementById("controller").value);
		var cage = parseInt(document.getElementById("cage").value);
		var motor = parseInt(document.getElementById("motor").value);
		var door = parseInt(document.getElementById("door").value);
		var button = parseInt(document.getElementById("button").value);
		var display = parseInt(document.getElementById("display").value);
		console.log(controller);
		console.log(cage);
		console.log(motor);
		console.log(door);
		console.log(button);
		console.log(display);
		this.setValue(motor, cage, controller, door, button, display);
	};

	// get the value of the order
	setValue = (motor, cage, controller, door, button, display) => {
		const { drizzle, drizzleState } = this.props;
		const contract = drizzle.contracts.ProjectOffice;
		console.log(controller);
		console.log(cage);
		console.log(motor);
		console.log(door);
		console.log(button);
		console.log(display);
		// let drizzle know we want to call the `set` method with `value`
		const motorId = contract.methods["stringSet"].cacheSend(
			motor,
			cage,
			controller,
			door,
			button,
			display,
			{ from: drizzleState.accounts[0] }
		);

		// save the `motorId` for later reference
		this.setState({ motorId });
	};

	getTxStatus = () => {
		// get the transaction states from the drizzle state
		const { transactions, transactionStack } = this.props.drizzleState;

		// get the transaction hash using our saved `stackId`
		const txHash = transactionStack[this.state.stackId];

		// if transaction hash does not exist, don't display anything
		if (!txHash) return null;

		// otherwise, return the transaction status
		return `Transaction status: ${
			transactions[txHash] && transactions[txHash].status
		}`;
	};
	// render HTML to set and get order !!
	render() {
		return (
			<div class="container">
				<div class="form-group">
					<label for="email">Controllers needed :</label>

					<input
						type="number"
						class="form-control"
						placeholder="Enter number controllers"
						id="controller"
					></input>
				</div>

				<div class="form-group">
					<label for="email">Cages needed :</label>

					<input
						type="number"
						class="form-control"
						placeholder="Enter number cages"
						id="cage"
					></input>
				</div>

				<div class="form-group">
					<label for="email">Motor needed :</label>

					<input
						type="number"
						class="form-control"
						placeholder="Enter number motors"
						id="motor"
					></input>
				</div>

				<div class="form-group">
					<label for="email">Doors needed : </label>

					<input
						type="number"
						class="form-control"
						placeholder="Enter number doors"
						id="door"
					></input>
				</div>

				<div class="form-group">
					<label for="email">Buttons needed : </label>

					<input
						type="number"
						class="form-control"
						placeholder="Enter number buttons"
						id="button"
					></input>
				</div>
				<div class="form-group">
					<label for="email">Displays needed : </label>

					<input
						type="number"
						class="form-control"
						placeholder="Enter number Displays"
						id="display"
					></input>
				</div>

				{/* <input
					class="btn btn-primary btn-xl"
					type="submit"
					onClick={this.buttonClick}
				/> */}
				<button
					type="submit"
					onClick={this.buttonClick}
					class="btn btn-primary btn-lg"
				>
					SEND ORDER
				</button>
				<div>{this.getTxStatus()}</div>
			</div>
		);
	}
}
// export the methode
export default SetString;
