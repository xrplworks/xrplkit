import { div, mul } from '@xrplkit/xfl/string'
import { decodeCurrencyCode, encodeCurrencyCode } from './encoding.js'


export function fromRippled(amount, decodeCurrency){
	if(typeof amount === 'string')
		return {
			currency: 'XRP',
			value: div(amount, '1000000')
		}
	
	return {
		currency: decodeCurrency
			? decodeCurrencyCode(amount.currency)
			: amount.currency,
		issuer: amount.issuer,
		value: amount.value
	}
}


export function toRippled(amount){
	if(amount.currency === 'XRP')
		return mul(amount.value, '1000000')
		
	return {
		currency: encodeCurrencyCode(amount.currency),
		issuer: amount.issuer,
		value: amount.value.toString()
	}
}