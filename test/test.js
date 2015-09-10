/*jshint node:true*/
/*global describe, it*/
'use strict';

/**
 * dependencies
 */
var assert     = require('assert');
var Pagination = require('../');

/**
 * tests
 */
describe('Pagination Object Tests', function () {
  it('should return an error (unknow or badly formed object)', function () {
    assert.throws(Pagination, Error);
    assert.throws(function () { return new Pagination({
      currentPage  : 'foo',
      totalItems   : 'bar',
      itemsPerPage : 'baz'
    }); }, Error);
  });

  it('should have expected defaults', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 11,
      itemsPerPage : 10
    });

    assert.equal(pagination.firstPage, 1);
    assert.equal(pagination.rangeLength, 5);
    assert.equal(pagination.firstLabel, '«');
    assert.equal(pagination.previousLabel, '‹');
    assert.equal(pagination.nextLabel, '›');
    assert.equal(pagination.lastLabel, '»');
  });

  it('should support zero-based pagination', function () {
    var pagination = new Pagination({
      currentPage  : 0,
      totalItems   : 31,
      itemsPerPage : 10,
      firstPage    : 0
    });

    assert.equal(pagination.currentPage, 0);
    assert.equal(pagination.firstPage, 0);
  });

  it('next page should be 3', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 51,
      itemsPerPage : 10
    });

    assert.equal(pagination.nextPage, 2);
  });

  it('next page should be null (last page)', function () {
    var pagination = new Pagination({
      currentPage  : 11,
      totalItems   : 11,
      itemsPerPage : 10
    });

    assert.equal(pagination.nextPage, null);
  });

  it('next page should be null (last page, firstPage 0)', function () {
    var pagination = new Pagination({
      currentPage  : 2,
      totalItems   : 30,
      itemsPerPage : 10,
      firstPage    : 0
    });

    assert.equal(pagination.nextPage, null);
  });

  it('previous page should be 1', function () {
    var pagination = new Pagination({
      currentPage  : 2,
      totalItems   : 52,
      itemsPerPage : 10
    });

    assert.equal(pagination.previousPage, 1);
  });

  it('previous page should be 0 (firstPage 0)', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 30,
      itemsPerPage : 10,
      firstPage    : 0
    });

    assert.equal(pagination.previousPage, 0);
  });

  it('previous page should be null (first page)', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 53,
      itemsPerPage : 10
    });

    assert.equal(pagination.previousPage, null);
  });

  it('total pages should be 6', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 54,
      itemsPerPage : 10
    });

    assert.equal(pagination.totalPages, 6);
  });

  it('total pages should be 1', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 9,
      itemsPerPage : 10
    });

    assert.equal(pagination.totalPages, 1);
  });

  it('last page should be 3 (firstPage 1)', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 30,
      itemsPerPage : 10,
      firstPage    : 1
    });

    assert.equal(pagination.lastPage, 3);
  });

  it('last page should be 2 (firstPage 0)', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 30,
      itemsPerPage : 10,
      firstPage    : 0
    });

    assert.equal(pagination.lastPage, 2);
  });

  it('offset should be 2', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 9,
      itemsPerPage : 10
    });

    assert.equal(pagination.offset, 2);
  });

  it('offset should be 5', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 9,
      itemsPerPage : 10,
      rangeLength  : 10
    });

    assert.equal(pagination.offset, 5);
  });

  it('range start page should be 1', function () {
    var pagination = new Pagination({
      currentPage  : 3,
      totalItems   : 9,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeStart, 1);
  });

  it('range start page should be 1', function () {
    var pagination = new Pagination({
      currentPage  : 2,
      totalItems   : 9,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeStart, 1);
  });

  it('range start page should be 1', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 9,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeStart, 1);
  });

  it('range start page should be 2', function () {
    var pagination = new Pagination({
      currentPage  : 4,
      totalItems   : 51,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeStart, 2);
  });

  it('range start page should be 2', function () {
    var pagination = new Pagination({
      currentPage  : 5,
      totalItems   : 51,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeStart, 2);
  });

  it('range start page should be 2', function () {
    var pagination = new Pagination({
      currentPage  : 6,
      totalItems   : 51,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeStart, 2);
  });

  it('range start page should be 6', function () {
    var pagination = new Pagination({
      currentPage  : 9,
      totalItems   : 91,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeStart, 6);
  });

  it('range end page should be 5', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 50,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeEnd, 5);
  });

  it('range end page should be 5', function () {
    var pagination = new Pagination({
      currentPage  : 3,
      totalItems   : 50,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeEnd, 5);
  });

  it('range end page should be 5', function () {
    var pagination = new Pagination({
      currentPage  : 4,
      totalItems   : 50,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeEnd, 5);
  });

  it('range end page should be 5', function () {
    var pagination = new Pagination({
      currentPage  : 5,
      totalItems   : 50,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeEnd, 5);
  });

  it('range end page should be 3', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 30,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeEnd, 3);
  });

  it('range end page should be 1', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 9,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeEnd, 1);
  });

  it('range end page should be 6', function () {
    var pagination = new Pagination({
      currentPage  : 4,
      totalItems   : 71,
      itemsPerPage : 10
    });

    assert.equal(pagination.rangeEnd, 6);
  });

  it('range should be equal to array', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 51,
      itemsPerPage : 10
    });

    assert.deepEqual(pagination.range, [
      { page : 1, isCurrent : true },
      { page : 2 },
      { page : 3 },
      { page : 4 },
      { page : 5 },
      { page : 2, isNext : true, label : '›' },
      { page : 6, isLast : true, label : '»' }
    ]);
  });

  it('range should be equal to array', function () {
    var pagination = new Pagination({
      currentPage  : 3,
      totalItems   : 51,
      itemsPerPage : 10
    });

    assert.deepEqual(pagination.range, [
      { page : 1, isFirst : true, label : '«' },
      { page : 2, isPrevious : true, label : '‹' },
      { page : 1 },
      { page : 2 },
      { page : 3, isCurrent : true },
      { page : 4 },
      { page : 5 },
      { page : 4, isNext : true, label : '›' },
      { page : 6, isLast : true, label : '»' }
    ]);
  });

  it('range should be equal to array', function () {
    var pagination = new Pagination({
      currentPage  : 6,
      totalItems   : 51,
      itemsPerPage : 10
    });

    assert.deepEqual(pagination.range, [
      { page : 1, isFirst : true, label : '«' },
      { page : 5, isPrevious : true, label : '‹' },
      { page : 2 },
      { page : 3 },
      { page : 4 },
      { page : 5 },
      { page : 6, isCurrent : true }
    ]);
  });

  it('range should be equal to array', function () {
    var pagination = new Pagination({
      currentPage  : 1,
      totalItems   : 30,
      itemsPerPage : 10,
      firstPage    : 0
    });

    assert.deepEqual(pagination.range, [
      { page : 0, isFirst : true, label : '«' },
      { page : 0, isPrevious : true, label : '‹' },
      { page : 0 },
      { page : 1, isCurrent : true },
      { page : 2 },
      { page : 2, isNext : true, label : '›' },
      { page : 2, isLast : true, label : '»' }
    ]);
  });

  it('labels should be changeable', function () {
    var pagination = new Pagination({
      currentPage   : 4,
      totalItems    : 71,
      itemsPerPage  : 10,
      firstLabel    : 'First',
      previousLabel : 'Prev',
      nextLabel     : 'Next',
      lastLabel     : 'Last'
    });

    assert.equal(pagination.firstLabel, 'First');
    assert.equal(pagination.previousLabel, 'Prev');
    assert.equal(pagination.nextLabel, 'Next');
    assert.equal(pagination.lastLabel, 'Last');
  });
});
