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
  firstPage    : 1,
  previousPage : 2,
  currentPage  : 3,
  nextPage     : 4,
  lastPage     : 6,

  totalItems   : 54,
  totalPages   : 6,
  itemsPerPage : 10,
  offset       : 2,

  rangeStart   : 1,
  rangeEnd     : 5,
  rangeLength  : 5,

  range        : [
    { page : 1 },
    { page : 2 },
    { page : 3, isCurrent : true },
    { page : 4 },
    { page : 5 }
  ]
}
```

## Example with jade
```jade
nav

  li: a(href='?page=#{pagination.firstPage}') #{pagination.firstPage}

  if pagination.previousPage
    li: a(href='?page=#{pagination.previousPage}') #{pagination.previousPage}

  each item in pagination.range
    li
      if item.isCurrent
        span #{item.page}
      else
        a(href='?page=#{item.page}') #{item.page}

  if pagination.nextPage
    li: a(href='?page=#{pagination.nextPage}') #{pagination.nextPage}

  li: a(href='?page=#{pagination.lastPage}') #{pagination.lastPage}
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

## Tests
```
npm test
```

## License

MIT © [Renan Couto](https://github.com/renancouto)
