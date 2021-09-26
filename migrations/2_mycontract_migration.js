const DungeonsAndDragonsCharacter = artifacts.require('DungeonsAndDragonsCharacter')
const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
const KOVAN_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
const KOVAN_LINKTOKEN = '0x01be23585060835e02b77ef475b0cc51aa1e0709'
const KOVAN_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

// contract deployed at 0x5C483dcA6bE60570A2baE91465e30199D55b12c7

module.exports = async (deployer, network, [defaultAccount]) => {
  // hard coded for kovan
  LinkToken.setProvider(deployer.provider)
  DungeonsAndDragonsCharacter.setProvider(deployer.provider)
  if (network.startsWith('kovan')) {
    await deployer.deploy(DungeonsAndDragonsCharacter, KOVAN_VRF_COORDINATOR, KOVAN_LINKTOKEN, KOVAN_KEYHASH)
    let dnd = await DungeonsAndDragonsCharacter.deployed()
  } else if (network.startsWith('mainnet')) {
    console.log("If you're interested in early access to Chainlink VRF on mainnet, please email vrf@chain.link")
  } else {
    console.log("Right now only kovan works! Please change your network to Kovan")
    // await deployer.deploy(DungeonsAndDragonsCharacter)
    // let dnd = await DungeonsAndDragonsCharacter.deployed()
  }
}
