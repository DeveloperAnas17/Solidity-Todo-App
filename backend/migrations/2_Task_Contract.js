const TaskContract = artifacts.require("TastContract");

module.exports = function (deployer) {
  deployer.deploy(TaskContract);
};
