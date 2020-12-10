import React from "react";

class SetButton extends React.Component {
  state = { buttonId: null };

  handleKeyDown = e => {
    // if the enter key is pressed, set the value with the string
    if (e.keyCode === 13) {
      this.setValue1(e.target.value);
    }
  };

  setValue1 = value => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // let drizzle know we want to call the `set` method with `value`
    const buttonId = contract.methods["buttonSet"].cacheSend(value, {
      from: drizzleState.accounts[0]
    });

    // save the `buttonId` for later reference
    this.setState({ buttonId });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `buttonId`
    const txHash = transactionStack[this.state.buttonId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
  };

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown} />
        <div>{this.getTxStatus()}</div>
      </div>
    );
  }
}

export default SetButton;