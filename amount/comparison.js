import { encodeCurrencyCode  } from './encoding.js'

export function isSameCurrency(a, b){
	if(typeof a === 'string')
		a = {currency: 'XRP'}
	else
		a = {
			currency: encodeCurrencyCode(a.currency), 
			issuer: a.issuer || a.account
		}

	if(typeof b === 'string')
		b = {currency: 'XRP'}
	else
		b = {
			currency: encodeCurrencyCode(b.currency), 
			issuer: b.issuer || a.account
		}

	return true
		&& a.currency === b.currency
		&& a.issuer == b.issuer
}