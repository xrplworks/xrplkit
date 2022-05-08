import fs from 'fs'
import fetch from 'node-fetch'


export default class Fund{
	constructor({ walletFile, faucet, genesis }){
		this.faucet = faucet
		this.genesis = genesis
		this.walletFile = walletFile

		try{
			this.wallets = JSON.parse(
				fs.readFileSync(walletFile, 'utf-8')
			)
		}catch(error){
			console.log(`no wallet file: ${error.message}`)
			this.wallets = {}
		}
	}

	hasWallet({ id }){
		return this.wallets.hasOwnProperty(id)
	}

	async getWallet({ id, balance }){
		if(this.wallets[id])
			return this.wallets[id]

		return this.faucet
			? await this.#fundWalletFromFaucet({ id, balance })
			: await this.#fundWalletFromGenesis({ id, balance })
	}

	async #fundWalletFromFaucet({ id, balance }){
		process.stdout.write(`funding wallet "${id}" ... `)

		let response = await fetch(this.faucet.url, {method: 'POST'})

		if(response.ok){
			let { account } = await response.json()
			let wallet = {
				address: account.address,
				seed: account.secret
			}

			console.log(`success`)
			this.#saveWallet({ id, wallet })

			return wallet
		}else{
			console.log(`failure`)
			throw new Error(`failed to call faucet endpoint (${response.status}): ${await response.text()}`)
		}
	}

	async #fundWalletFromGenesis({ id, balance }){
		//todo
	}

	async #saveWallet({ id, wallet }){
		this.wallets[id] = wallet

		fs.writeFileSync(
			this.walletFile, 
			JSON.stringify(this.wallets, null, 4)
		)
	}
}