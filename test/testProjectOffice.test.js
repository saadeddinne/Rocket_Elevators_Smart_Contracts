const ProjectOffice = artifacts.require("./ProjectOffice.sol");

contract("ProjectOffice", async (accounts) => {
	let projectOffice;
	before(async function () {
		projectOffice = await ProjectOffice.deployed();
	});

	// +-------------+---------------+--+--+
	// | Input Data  |   Expected    |  |  |
	// +-------------+---------------+--+--+
	// | Battery:1   |  Shafts:8     |  |  |
	// | Columns:2   |  Controller:1 |  |  |
	// | Elevators:8 |  Doors:80     |  |  |
	// | Floors:5    |  Buttons:96   |  |  |
	// |             |  Motors:8     |  |  |
	// |             |  Displays:8   |  |  |
	// |             |               |  |  |
	// +-------------+---------------+--+--+

	describe("Test create Order", async () => {
		it("Checking the returned value of items", async function () {
			var expected = [8, 1, 80, 56, 8, 16];
			var createOrder = await projectOffice.createOrder(1, 2, 8, 5);
			var getOrder = await projectOffice.getOrder();

			assert.equal(expected, getOrder.toString(), "Values must be equals");
		});
	});
});
