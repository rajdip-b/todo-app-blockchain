const Todo = artifacts.require("Todo");

module.exports = function(_deployer) {
    _deployer.deploy(Todo);
};
