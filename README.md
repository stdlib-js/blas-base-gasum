<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gasum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the sum of [absolute values][@stdlib/math/base/special/abs] ([_L1_ norm][l1norm]).

<section class="intro">

The [_L1_ norm][l1norm] is defined as

<!-- <equation class="equation" label="eq:l1norm" align="center" raw="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" alt="L1 norm definition."> -->

```math
\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert
```

<!-- <div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" data-equation="eq:l1norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@30de397fadee10fa175a8332ae1447737f201818/lib/node_modules/@stdlib/blas/base/gasum/docs/img/equation_l1norm.svg" alt="L1 norm definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
gasum = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gasum@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-base-gasum/tags). For example,

```javascript
gasum = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gasum@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var gasum = require( 'path/to/vendor/umd/blas-base-gasum/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gasum@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.gasum;
})();
</script>
```

#### gasum( N, x, stride )

Computes the sum of [absolute values][@stdlib/math/base/special/abs].

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var sum = gasum( x.length, x, 1 );
// returns 19.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are used to compute the sum. For example, to sum every other value,

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var sum = gasum( 4, x, 2 );
// returns 10.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Sum every other value...
var sum = gasum( 3, x1, 2 );
// returns 12.0
```

If either `N` or `stride` is less than or equal to `0`, the function returns `0`.

#### gasum.ndarray( N, x, stride, offset )

Computes the sum of [absolute values][@stdlib/math/base/special/abs] using alternative indexing semantics.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var sum = gasum.ndarray( x.length, x, 1, 0 );
// returns 19.0
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the `offset` parameter supports indexing semantics based on a starting index. For example, to sum the last three elements,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var sum = gasum.ndarray( 3, x, 1, x.length-3 );
// returns 15.0

// Using a negative stride to sum from the last element:
sum = gasum.ndarray( 3, x, -1, x.length-1 );
// returns 15.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0`.
-   `gasum()` corresponds to the [BLAS][blas] level 1 function [`dasum`][dasum] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dasum`][@stdlib/blas/base/dasum], [`sasum`][@stdlib/blas/base/sasum], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gasum@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

var y = gasum( x.length, x, 1 );
console.log( y );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-base/dasum`][@stdlib/blas/base/dasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>
-   <span class="package-name">[`@stdlib/blas-base/sasum`][@stdlib/blas/base/sasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-gasum.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-gasum

[test-image]: https://github.com/stdlib-js/blas-base-gasum/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/blas-base-gasum/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-gasum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-gasum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-gasum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-gasum/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-gasum/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-gasum/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-gasum/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-gasum/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-gasum/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-gasum/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-gasum/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-gasum/main/LICENSE

[blas]: http://www.netlib.org/blas

[dasum]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[l1norm]: https://en.wikipedia.org/wiki/Norm_%28mathematics%29

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math-base-special-abs/tree/umd

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas-base-dasum/tree/umd

[@stdlib/blas/base/sasum]: https://github.com/stdlib-js/blas-base-sasum/tree/umd

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
