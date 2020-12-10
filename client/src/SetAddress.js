import React from "react";

class SetAddress extends React.Component {
  state = { addressId: null };

  handleKeyDown = a => {
    // if the enter key is pressed, set the value with the string
    if (a.keyCode === 13) {
      this.setValue1(a.target.value);
    }
  };

  setValue1 = value => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // let drizzle know we want to call the `set` method with `value`
    const addressId = contract.methods["addressSet"].cacheSend(value, {
      from: drizzleState.accounts[0]
    });

    // save the `addressId` for later reference
    this.setState({ addressId });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `addressId`
    const txHash = transactionStack[this.state.addressId];

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

export default SetAddress;