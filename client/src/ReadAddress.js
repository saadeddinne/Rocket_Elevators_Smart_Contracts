import React from "react";

class ReadAddress extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["Address"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const nbAddress = MyStringStore.Address[this.state.dataKey];

    // if it exists, then we display its value
    return (<p> Cages needed : {nbAddress && nbAddress.value}</p>);
  }
}

export default ReadAddress;