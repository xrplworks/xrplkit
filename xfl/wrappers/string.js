import { fromAny } from '../conversion/any.js'
import { toString as str } from '../conversion/string.js'
import * as arit from '../operators/arithmetic.js'
import * as comp from '../operators/comparison.js'
import * as roun from '../operators/rounding.js'
import * as bigi from '../conversion/bigint.js'


export function XFL(xfl){
	return str(fromAny(xfl))
}

Object.defineProperties(XFL, {
	fromSortSafeBigInt(bigint){
		return str(bigi.fromSortSafeBigInt(bigint))
	}
})

export function abs(x){
	return str(arit.abs(fromAny(x)))
}

export function neg(x){
	return str(arit.neg(fromAny(x)))
}

export function sum(a, b){
	return str(arit.sum(fromAny(a), fromAny(b)))
}

export function sub(a, b){
	return str(arit.sub(fromAny(a), fromAny(b)))
}

export function mul(a, b){
	return str(arit.mul(fromAny(a), fromAny(b)))
}

export function div(a, b){
	return str(arit.div(fromAny(a), fromAny(b)))
}

export function floor(x, decimal = 0){
	return str(roun.floor(fromAny(x), decimal))
}

export function eq(a, b){
	return comp.eq(fromAny(a), fromAny(b))
}

export function lt(a, b){
	return comp.lt(fromAny(a), fromAny(b))
}

export function lte(a, b){
	return comp.lte(fromAny(a), fromAny(b))
}

export function gt(a, b){
	return comp.gt(fromAny(a), fromAny(b))
}

export function gte(a, b){
	return comp.gte(fromAny(a), fromAny(b))
}

export function min(...xs){
	return str(comp.min(...xs.map(x => fromAny(x))))
}

export function max(...xs){
	return str(comp.max(...xs.map(x => fromAny(x))))
}

export function toString(x){
	return str(fromAny(x))
}

export function toBigInt(x){
	return bigi.toBigInt(fromAny(x))
}

export function toSortSafeBigInt(x){
	return bigi.toSortSafeBigInt(fromAny(x))
}