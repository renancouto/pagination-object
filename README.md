# pagination-object
> Generate a pagination object to be used on Node.js. It doesn't return any type
of markup, just an object

[![Travis](https://img.shields.io/travis/renancouto/pagination-object.svg?style=flat-square)](https://travis-ci.org/renancouto/pagination-object)
[![Coveralls](https://img.shields.io/coveralls/renancouto/pagination-object.svg?style=flat-square)](https://coveralls.io/r/renancouto/pagination-object)
[![npm](https://img.shields.io/npm/v/pagination-object.svg?style=flat-square)](https://www.npmjs.com/package/pagination-object)
[![npm](https://img.shields.io/npm/dm/pagination-object.svg?style=flat-square)](https://www.npmjs.com/package/pagination-object)

## Install
```
npm install --save pagination-object
```

## Usage
```js
var Pagination = require('pagination-object');
var pagination = new Pagination({
  currentPage  : 3,
  totalItems   : 54,
  itemsPerPage : 10
});
```

## Returns (not in this order)
```js
{
  firstPage     : 1,
  previousPage  : 2,
  currentPage   : 3,
  nextPage      : 4,
  lastPage      : 6,

  totalItems    : 54,
  totalPages    : 6,
  itemsPerPage  : 10,
  offset        : 2,

  rangeStart    : 1,
  rangeEnd      : 5,
  rangeLength   : 5,

  firstLabel    : '«',
  previousLabel : '‹',
  nextLabel     : '›',
  lastLabel     : '»',

  range         : [
    { page : 1, isFirst : true, label : '«' },
    { page : 2, isPrevious : true, label : '‹' },

    { page : 1 },
    { page : 2 },
    { page : 3, isCurrent : true },
    { page : 4 },
    { page : 5 },

    { page : 4, isNext : true, label : '›' },
    { page : 6, isLast : true, label : '»' }
  ]
}
```

## Basic example with jade
```jade
nav
  each item in pagination.range
    if item.isCurrent
      li: span(title='You are in page #{item.page}') #{item.page}
    else
      li: a(href='?page=#{item.page}', title='Go to page #{item.page}') #{item.label || item.page}
```

## Options
### currentPage

Type: `Number`
Required: `true`

### totalItems

Type: `Number`
Required: `true`

### itemsPerPage

Type: `Number`
Required: `true`

### firstPage

Type: `Number`
Default: `1`

### rangeLength

Type: `Number`
Default: `5`

### firstLabel

Type: `String`
Default: `«`

### previousLabel

Type: `String`
Default: `‹`

### nextLabel

Type: `String`
Default: `›`

### lastLabel

Type: `String`
Default: `»`

## Tests
```
npm test
```

## License

MIT © [Renan Couto](https://github.com/renancouto)
