var Migrations = artifacts.require("./Migrations.sol");
var ProjectOffice = artifacts.require("ProjectOffice");

module.exports = function (deployer) {
	deployer.deploy(Migrations);
	deployer.deploy(ProjectOffice);
};
