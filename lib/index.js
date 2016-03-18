'use strict';

// MODULES //

var lpad = require( 'utils-left-pad-string' );
var div2 = require( './div2.js' );


// VARIABLES //

var NBITS = 16;


// BINARY STRING //

/**
* FUNCTION: binaryString( x )
*	Returns a string giving the literal bit representation of an unsigned 16-bit integer.
*
* @param {Number} x - input value
* @returns {String} bit representation
*/
function binaryString( x ) {
	var b;

	// Convert the input value to a bit string:
	b = div2( x );

	// Left pad the bit string to ensure 16 bits are represented:
	b = lpad( b, NBITS, '0' );

	return b;
} // end FUNCTION binaryString()


// EXPORTS //

module.exports = binaryString;
