import React, { Component } from "react"; //different
import "./App.css";
import ReadMotor from "./ReadMotor";
import ReadCage from "./ReadCage";
import ReadController from "./ReadController";
import ReadDoor from "./ReadDoor";
import ReadButton from "./ReadButton";
import ReadDisplay from "./ReadDisplay";
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
				<div className="row">
					<div className="col-md-12">
						<div className="panel-group" id="accordion">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapseOne"
											><span className="glyphicon glyphicon-file"> </span>NEW ORDER</a
										>
									</h4>
								</div>
								<div id="collapseOne" className="panel-collapse collapse in">
									<div className="panel-body">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<SetString drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapseTwo"
											><span className="glyphicon glyphicon-th-list"> </span>DISPLAY ORDER</a>
									</h4>
								</div>
								<div id="collapseTwo" className="panel-collapse collapse">
								<div className="panel-body">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<ReadController drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}/>
												</div>
												<div className="form-group">
													<ReadCage drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}/>
												</div>
												<div className="form-group">
													<ReadMotor drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}/>
												</div>
												<div className="form-group">
													<ReadDoor drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}/>
												</div>
												<div className="form-group">
													<ReadButton drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}/>
												</div>
												<div className="form-group">
													<ReadDisplay drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</div>
		);
	}
}

export default App;
