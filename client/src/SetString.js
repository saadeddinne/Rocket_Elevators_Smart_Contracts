import React from "react";

class SetString extends React.Component {
  state = { stackId: null };

  buttonClick = () => {
    var controller = parseInt(document.getElementById('controller').value);
    var cage = parseInt(document.getElementById('cage').value);
    var motor = parseInt(document.getElementById('motor').value);
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
  }

  setValue = (motor, cage, controller, door, button, display) => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;
    console.log(controller);
    console.log(cage);
    console.log(motor);
    console.log(door);
    console.log(button);
    console.log(display);
    // let drizzle know we want to call the `set` method with `value`
    const motorId = contract.methods["stringSet"].cacheSend(motor, cage, controller, door, button, display,{from: drizzleState.accounts[0]});

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
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
  };

  render() {
    return (
      <div>
        <p>Controllers needed : <input id="controller" type="number"/></p>
        <p>Cages needed : <input id="cage" type="number"/></p>
        <p>Motor needed : <input id="motor" type="number"/></p>
        <p>Doors needed : <input id="door" type="number"/></p>
        <p>Buttons needed : <input id="button" type="number"/></p>
        <p>Displays needed : <input id="display" type="number"/></p>
        <input type="submit" onClick={this.buttonClick} />
        <div>{this.getTxStatus()}</div>
      </div>
    );
  }
}

export default SetString;