/*jshint node:true*/
'use strict';

/**
 * Pagination Class
 * @param {object} options [options object]
 */
function Pagination (options) {
  this.validateOptions(options);

  // required properties
  this.currentPage  = options.currentPage;
  this.totalItems   = options.totalItems;
  this.itemsPerPage = options.itemsPerPage;

  // default properties
  this.firstPage     = options.firstPage || 1;
  this.rangeLength   = options.rangeLength || 5;
  this.firstLabel    = options.firstLabel || '«';
  this.previousLabel = options.previousLabel || '‹';
  this.nextLabel     = options.nextLabel || '›';
  this.lastLabel     = options.lastLabel || '»';

  // processed properties
  this.offset       = this.getOffset();
  this.totalPages   = this.getTotal();
  this.lastPage     = this.totalPages;
  this.nextPage     = this.getNext();
  this.previousPage = this.getPrevious();
  this.rangeStart   = this.getRangeStart();
  this.rangeEnd     = this.getRangeEnd();
  this.range        = this.getRange();
}

/**
 * validate required options
 * @param {object} options [options object]
 */
Pagination.prototype.validateOptions = function (options) {
  if (!options) {
    throw new Error('No `options` were passed, aborting.');
  }

  if (!options.currentPage || !options.totalItems || !options.itemsPerPage) {
    throw new Error('You must define your options object correctly, aborting.');
  }

  if (isNaN(options.currentPage) || isNaN(options.totalItems) || isNaN(options.itemsPerPage)) {
    throw new Error('Your options object properties should be numbers, aborting.');
  }
};

/**
 * get range offset
 * @return {number} [range offset]
 */
Pagination.prototype.getOffset = function () {
  return Math.floor(this.rangeLength / 2);
};

/**
 * get total pages
 * @return {number} [next page number]
 */
Pagination.prototype.getTotal = function () {
  return Math.ceil(this.totalItems / this.itemsPerPage);
};

/**
 * get next page
 * @return {number} [next page number]
 */
Pagination.prototype.getNext = function () {
  var next = this.currentPage + 1;
  return next > this.totalPages ? null : next;
};

/**
 * get previous page
 * @return {number} [previous page number]
 */
Pagination.prototype.getPrevious = function () {
  var previous = this.currentPage - 1;
  return previous < 1 ? null : previous;
};

/**
 * get first item of the range
 * @return {number} [first item of the range]
 */
Pagination.prototype.getRangeStart = function () {
  var rangeStart;

  rangeStart = this.currentPage - this.offset;
  rangeStart = this.lastPage < rangeStart + this.rangeLength ? this.lastPage - this.rangeLength + 1 : rangeStart;
  rangeStart = rangeStart < this.firstPage ? this.firstPage : rangeStart;

  return rangeStart;
};

/**
 * get first item of the range
 * @return {number} [first item of the range]
 */
Pagination.prototype.getRangeEnd = function () {
  var rangeEnd, diff;

  rangeEnd = this.currentPage + this.offset;
  rangeEnd = rangeEnd < this.rangeLength ? this.rangeLength : rangeEnd;
  rangeEnd = rangeEnd > this.lastPage ? this.lastPage : rangeEnd;
  diff     = this.totalPages - rangeEnd - this.offset;

  return diff > 0 ? rangeEnd + diff : rangeEnd;
};

/**
 * get range array
 * @return {array} [array of range items]
 */
Pagination.prototype.getRange = function () {
  var range = [{ page : this.firstPage, isFirst : true, label : this.firstLabel }];
  var i = this.rangeStart;
  var t = this.rangeEnd;

  if (this.previousPage) {
    range.push({ page : this.previousPage, isPrevious : true, label : this.previousLabel });
  }

  for (i; i <= t; i++) {
    var item = { page : i };

    if (i === this.currentPage) {
      item.isCurrent = true;
    }

    range.push(item);
  }

  if (this.nextPage) {
    range.push({ page : this.nextPage, isNext : true, label : this.nextLabel });
  }

  range.push({ page : this.lastPage, isLast : true, label : this.lastLabel });

  return range;
};

/**
 * public
 */
module.exports = Pagination;
