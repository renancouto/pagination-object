# pagination-object version history


## 1.2.0
- supports zero-based index pagination (Jim Fitzpatrick)

## 1.1.0
- removed `firstPage` and `lastPage` from `range` when the `currentPage` is equals to one of them

## 1.0.1
- fixed README.md output reference

## 1.0.0
- added first, previous, next and last pages objects into `range` array

## 0.2.3
- fixed `rangeStart` calculation when is less than `rangeLength`

## 0.2.2
- added code coverage reports

## 0.2.1
- fixed `rangeEnd` calculation when is less than `rangeLength`

## 0.2.0
- added `range` array for convenience when creating markups

## 0.1.2
- fixed a bug on the generation of the `rangeEnd` property
