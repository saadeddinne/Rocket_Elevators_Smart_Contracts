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

		// adding scripts
		const script1 = document.createElement("script");
		const script2 = document.createElement("script");
		const script3 = document.createElement("script");
		const script4 = document.createElement("script");

		script1.src =
			"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
		script1.async = true;
		script2.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
		script2.async = true;
		script3.src =
			"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
		script3.async = true;
		script4.src =
			"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
		script4.async = true;

		document.body.appendChild(script1);
		document.body.appendChild(script2);
		document.body.appendChild(script3);
		document.body.appendChild(script4);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		if (this.state.loading) return "Loading Drizzle...";
		return (
			<body>
				<nav class="navbar navbar-expand-sm bg-dark navbar-dark lg">
					<h1 class="display-3">ROCKET ELEVATORS</h1>
				</nav>
				<div class="container">
					<div class="page-header">
						<h1 class="display-2">PROJECT OFFICE</h1>
					</div>
				</div>
				<div class="container-fluid">
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
												>
													<div class="text-primary">NEW ORDER</div>
												</a>
											</h4>
										</div>

										<div
											id="collapseOne"
											className="panel-collapse collapse in"
										>
											<div className="panel-body">
												<div className="row">
													<div className="col-md-2"></div>
													<div className="col-md-8">
														<div className="form-group">
															<SetString
																drizzle={this.props.drizzle}
																drizzleState={this.state.drizzleState}
															/>
														</div>
													</div>
													<div className="col-md-2"></div>
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
												>
													<div class="text-primary">DISPLAY ORDER</div>
												</a>
											</h4>
										</div>
										<div id="collapseTwo" className="panel-collapse collapse">
											<div className="panel-body">
												<div className="row">
													<div className="col-md-3"></div>
													<div className="col-md-6">
														<div className="form-group">
															<ReadController
																drizzle={this.props.drizzle}
																drizzleState={this.state.drizzleState}
															/>
														</div>
														<div className="form-group">
															<ReadCage
																drizzle={this.props.drizzle}
																drizzleState={this.state.drizzleState}
															/>
														</div>
														<div className="form-group">
															<ReadMotor
																drizzle={this.props.drizzle}
																drizzleState={this.state.drizzleState}
															/>
														</div>{" "}
														<div className="form-group">
															<ReadDoor
																drizzle={this.props.drizzle}
																drizzleState={this.state.drizzleState}
															/>
														</div>
														<div className="form-group">
															<ReadButton
																drizzle={this.props.drizzle}
																drizzleState={this.state.drizzleState}
															/>
														</div>
														<div className="form-group">
															<ReadDisplay
																drizzle={this.props.drizzle}
																drizzleState={this.state.drizzleState}
															/>
														</div>
													</div>
													<div className="col-md-3"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		);
	}
}

export default App;
