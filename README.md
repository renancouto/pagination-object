# pagination-object
> Generate a pagination object to be used on Node.js, it doesn't return any type
of markup, just an object

## Install
```
npm install --save pagination-object
```

## Usage
```js
var Pagination = require('pagination-object');
var pagination = new Pagination({
  currentPage  : 1,
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
  rangeLength  : 5
}
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
