/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var abs = require( '@stdlib/math-base-special-abs' );
var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var accessors = require( './accessors.js' );


// VARIABLES //

var M = 6;


// MAIN //

/**
* Computes the sum of absolute values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} stride - `x` stride length
* @param {NonNegativeInteger} offset - starting `x` index
* @returns {number} sum
*
* @example
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0 ] );
*
* var s = gasum( x.length, x, 1, 0 );
* // returns 15.0
*/
function gasum( N, x, stride, offset ) {
	var sum;
	var ix;
	var m;
	var i;
	var o;

	sum = 0.0;
	if ( N <= 0 ) {
		return sum;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, o, stride, offset );
	}

	ix = offset;
	if ( stride === 0 ) {
		sum = abs( x[ix] * N );
		return sum;
	}

	// Use unrolled loops if the stride is equal to `1`...
	if ( stride === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				sum += abs( x[ix] );
				ix += stride;
			}
		}
		if ( N < M ) {
			return sum;
		}
		for ( i = m; i < N; i += M ) {
			sum += abs( x[ix] ) + abs( x[ix+1] ) + abs( x[ix+2] ) + abs( x[ix+3] ) + abs( x[ix+4] ) + abs( x[ix+5] ); // eslint-disable-line max-len
			ix += M;
		}
		return sum;
	}
	for ( i = 0; i < N; i++ ) {
		sum += abs( x[ix] );
		ix += stride;
	}
	return sum;
}


// EXPORTS //

module.exports = gasum;
