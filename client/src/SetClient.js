import React from "react";

class SetClient extends React.Component {
  state = { clientId: null };

  handleKeyDown = c => {
    // if the enter key is pressed, set the value with the string
    if (c.keyCode === 13) {
      this.setValue1(c.target.value);
    }
  };

  setValue1 = value => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // let drizzle know we want to call the `set` method with `value`
    const clientId = contract.methods["clientSet"].cacheSend(value, {
      from: drizzleState.accounts[0]
    });

    // save the `clientId` for later reference
    this.setState({ clientId });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `clientId`
    const txHash = transactionStack[this.state.clientId];

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

export default SetClient;