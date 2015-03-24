# pagination-object
> Generate a pagination object to be used on Node.js. It doesn't return any type
of markup, just an object

[![npm version](https://badge.fury.io/js/pagination-object.svg)](http://badge.fury.io/js/pagination-object)
[![Codeship Status for renancouto/pagination-object](https://codeship.com/projects/927c9970-af96-0132-a853-0e5ba92aabbb/status?branch=master)](https://codeship.com/projects/69258)

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
