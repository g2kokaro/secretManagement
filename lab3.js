require('dotenv').config()

let settings = {
  mnemonic: process.env.MNEMONIC,
  host: process.env.HOST,
  port: process.env.PORT,
  type: process.env.TYPE,
  balance: process.env.BALANCE
}

let my_info = {
  mnemonic: process.env.MY_MNEMONIC,
  private_key: process.env.MY_PRIVATE_KEY,
  address: process.env.MY_ADDRESS,
  ssh_pri: process.env.MY_SSH_PRI,
  ssh_pub: process.env.MY_SSH_PUB
}

console.log(settings)
console.log(my_info)
