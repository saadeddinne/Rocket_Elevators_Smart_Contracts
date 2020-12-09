import React, { Component } from "react"; //different
import "./App.css";
import ReadString from "./ReadString";
import SetString from "./SetString";

class App extends Component {
	state = { loading: true, drizzleState: null };

	componentDidMount() {
		const { drizzle } = this.props;

		// subscribe to changes in the store
		this.unsubscribe = drizzle.store.subscribe(() => {
			// every time the store updates, grab the state from drizzle
			const drizzleState = drizzle.store.getState();

			// check to see if it's ready, if so, update local component state
			if (drizzleState.drizzleStatus.initialized) {
				this.setState({ loading: false, drizzleState });
			}
		});

		// adding scripts
		const script1 = document.createElement("script");
		const script2 = document.createElement("script");

		script1.src =
			"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js";
		script1.async = true;
		script2.src = "//code.jquery.com/jquery-1.11.1.min.js";
		script2.async = true;
		document.body.appendChild(script1);
		document.body.appendChild(script2);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		if (this.state.loading) return "Loading Drizzle...";
		return (
			<div className="App">
				<ReadString
					drizzle={this.props.drizzle}
					drizzleState={this.state.drizzleState}
				/>
				<SetString
					drizzle={this.props.drizzle}
					drizzleState={this.state.drizzleState}
				/>
			</div>
		);
	}
}

export default App;
