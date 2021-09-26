const Migrations = artifacts.require('Migrations')

// contract deployed at 0x39bfCA66c3cfF4f10F79df0e12544Fe5Ba571801

module.exports = deployer => {
  deployer.deploy(Migrations)
}
