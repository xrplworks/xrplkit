import websocket from 'websocket'
import { Book } from '@xrplworks/book'
import { Socket } from '@xrplworks/socket'


global.WebSocket = websocket.w3cwebsocket


//buying USD

const socket = new Socket('wss://xrplcluster.com')
const book = new Book({
	socket,
	takerPays: {currency: 'XRP'},
	takerGets: {currency: 'USD', issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq'}
})

console.log('loading book...')

await book.load()

console.log(`has ${book.offers.length} offers`)

console.log(book.offers)

let offer = book.fill({takerPays: '100'})

console.log(offer)