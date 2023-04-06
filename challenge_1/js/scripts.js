
const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo ={  //I fixed the sytax so that there was a : instead of an = and i put commas at the end
	name : leoName,  // I removed  leoSurname since it doesn't exist
	balance : leoBalance,
	 accessId : "47afb389-8014-4d0b-aff3-e40203d2107f", // I  camelcased and turned it into a string
	age : 24,
	address : {
		number : leoNumber,
		street : leoStreet,
		postalCode : leoPostal, // I  camelcased
	},
}

const sarah = { //I fixed the sytax so that there was a : instead of an = and i put commas at the end
	name : sarahName + sarahSurname,// fixed const names
	age:62,
	accessId : "6b279ae5-5657-4240-80e9-23f6b635f7a8", // I  camelcased and turned it into a string
	balance : sarahBalance,
	address : {  //I fixed the sytax so that there was a : instead of an = and i put commas at the end
		number : sarahNumber,
		street : sarahStreet,
		postalCode : sarahPostal, // I  camelcased
	},
}//I fixed
console.log(leo, leo.address,leo.address.postalCode) // changed [] to . format  fixed directory channel
console.log(sarah, sarah.address,sarah.address.postalCode)// changed [] to . format and fixed directory channel
 
