'use strict';

// MODULES //

var tape = require( 'tape' );
var MAX_UINT16 = require( 'const-max-uint16' );
var binaryString = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof binaryString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a literal 16-bit unsigned integer representation for 0', function test( t ) {
	var expected;

	expected = '0000000000000000';

	t.equal( binaryString(0), expected, 'returns bit literal for 0' );
	t.end();
});

tape( 'the function returns a literal 16-bit unsigned integer representation for MAX_UINT16', function test( t ) {
	var expected;

	expected = '1111111111111111';

	t.equal( binaryString(MAX_UINT16), expected, 'returns bit literal for MAX_UINT16' );
	t.end();
});

tape( 'the function returns literal bit representations for unsigned 16-bit integers', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = data.x;
	expected = data.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = binaryString( x[ i ] );
		t.equal( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function will accept floating-point values, but will interpret the values as unsigned 16-bit integers', function test( t ) {
	var values;
	var str;
	var i;

	values = [
		1e308,
		3.14,
		1/3,
		1/10,
		-0,
		-1e-308,
		-1e308,
		1/0,
		1/-0,
		NaN
	];

	for ( i = 0; i < values.length; i++ ) {
		str = binaryString( values[i] );
		t.equal( typeof str, 'string', 'returns a string' );
		t.equal( str.length, 16, 'returns a string of length 16' );
	}
	t.end();
});
