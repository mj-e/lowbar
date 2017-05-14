const path = require('path');
const expect = require('chai').expect;
const sinon = require('sinon');

const _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
    'use strict';
    it('is an object', function () {
        expect(_).to.be.an('object');
    });
});

describe('#identity', function () {
    it('is a function', function () {
        expect(_.identity).to.be.a('function');
    });
    it('identity should return the same result as the argument passed in', function () {
        expect(_.identity(8)).to.equal(true);
        expect(_.identity(10)).to.equal(true);
        expect(_.identity(15)).to.equal(true);
    });
});

describe('#first', function () {
    it('is a function', function () {
        expect(_.first).to.be.a('function');
    });
    it('returns the first number in an array when one argument is passed and n numbers when second argument passed', function () {
        expect(_.first([2, 3, 4, 5])).to.equal(2);
        expect(_.first([15, 49, 5])).to.equal(15);
        expect(_.first([15, 49, 5, 34, 23, 12, 45], 4)).to.eql([15, 49, 5, 34]);
        expect(_.first([23, 12, 45, 3, 9, 6], 3)).to.eql([23, 12, 45]);
    });
    it('returns the first character of a string input and n numbers of characters if 2nd argument is given', () => {
        expect(_.first('northcoders')).to.eql('n');
        expect(_.first('matt')).to.eql('m');
        expect(_.first('passed', 2)).to.eql(['p', 'a']);
        expect(_.first('macbook', 3)).to.eql(['m', 'a', 'c']);
        expect(_.first('coding on remote week', 6)).to.eql(['c', 'o', 'd', 'i', 'n', 'g']);
    });
    it('returns undefined for all other inputs', function () {
        expect(_.first(3)).to.equal(undefined);
        expect(_.first({})).to.equal(undefined);
    });
});

describe('#last', function () {
    it('is a function', function () {
        expect(_.last).to.be.a('function');
    });
    it('return the last number in an array with one argument and last n elements when 2nd argument passed', function () {
        expect(_.last([23, 12, 45, 3, 9, 6])).to.eql(6);
        expect(_.last([23, 12, 45, 3, 9, 145])).to.eql(145);
        expect(_.last([2, 3, 4, 5], 3)).to.eql([3, 4, 5]);
        expect(_.last([15, 49, 5, 34, 23, 12, 45], 4)).to.eql([34, 23, 12, 45]);
        expect(_.last([23, 12, 45, 3, 9, 6], 3)).to.eql([3, 9, 6]);
    });
    it('returns the last character of a string input and last n characters when 2nd argument passed', function () {
        expect(_.last('northcoders')).to.eql('s');
        expect(_.last('coding', 2)).to.eql(['n', 'g']);
        expect(_.last('array', 4)).to.eql(['r', 'r', 'a', 'y']);
    });
    it('returns undefined for all other inputs', function () {
        expect(_.last(3)).to.equal(undefined);
        expect(_.last({})).to.equal(undefined);
    });
});

describe('#each', function () {
    it('is a function', function () {
        expect(_.each).to.be.a('function');
    });
    it('returns the array', function () {
        expect(_.each([1, 2, 3, 4, 5], function () { })).to.eql([1, 2, 3, 4, 5]);
    });
    it('should iterate over all elements in array', function () {
        var spy = sinon.spy();
        _.each([1, 2, 3, 4, 5], spy);
        expect(spy.callCount).to.equal(5);
    });
    it('should iterate over all elements in array', function () {
        var spy = sinon.spy();
        _.each([1, 2], spy);
        expect(spy.callCount).to.equal(2);
    });
    it('should iterate over all elements in array', function () {
        var spy = sinon.spy();
        _.each(['string', 'hi', 'bye', 'north', 'coders', 'manchester'], spy);
        expect(spy.callCount).to.equal(6);
    });
    it('should iterate over every object item', function () {
        var spy = sinon.spy();
        _.each({ one: 1, two: 2, three: 3 }, spy);
        expect(spy.callCount).to.equal(3);
    });
    it('should iterate over every object item', function () {
        var spy = sinon.spy();
        _.each({ one: 1, two: 2, three: 3, four: 4, five: 5 }, spy);
        expect(spy.callCount).to.equal(5);
    });
    it('should iterate over every object item', function () {
        var spy = sinon.spy();
        _.each({ one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 }, spy);
        expect(spy.callCount).to.equal(6);
    });
});

describe('#indexOf', function () {
    it('is a function', function () {
        expect(_.indexOf).to.be.a('function');
    });
    it('returns -1 if the value is not in an unsorted array', function () {
        expect(_.indexOf([1, 3, 5], 2)).to.equal(-1);
        expect(_.indexOf([1, 3, 5], 567)).to.equal(-1);
        expect(_.indexOf(['matt', 'northcoders'], 'matthew')).to.equal(-1);
    });
    it('returns index of value that is present in an unsorted array', function () {
        expect(_.indexOf([1, 3, 5], 3)).to.equal(1);
        expect(_.indexOf(['matt', 'northcoders'], 'matt')).to.equal(0);
    });
    it('returns index of value that is present in sorted list', function () {
        expect(_.indexOf([1, 3, 5], 3, true)).to.equal(1);
        expect(_.indexOf([1, 3, 5, 10, 50, 65], 65, true)).to.equal(5);
        expect(_.indexOf([100, 300, 500, 1000, 5000, 6500], 300, true)).to.equal(1);
        expect(_.indexOf([1, 3, 5, 10, 50, 65], 65, true)).to.equal(5);
    });
    it('returns undefined to arguments in wrong format', function () {
        expect(_.indexOf('northcoders', 3)).to.equal(undefined);
        expect(_.indexOf()).to.equal(undefined);
        expect(_.indexOf({})).to.equal(undefined);
    });
});

describe('#filter', function () {
    it('should be a function', function () {
        expect(_.filter).to.be.a('function');
    });
    it('filters object values and returns an array', () => {
        expect(_.filter({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }, function (x) { return x <= 2; })).to.eql([1, 2]);
        expect(_.filter({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }, function (x) { return x >= 3; })).to.eql([3, 4, 5]);
    });
    it('filters arrays as per functional test', function () {
        expect(_.filter([1, 2, 3, 4, 5], function (x) { return x <= 2; })).to.eql([1, 2]);
        expect(_.filter([10, 20, 30, 40, 50], function (x) { return x > 29; })).to.eql([30, 40, 50]);
    });
    it('returns empty array when given numbers and falsy values', function () {
        expect(_.filter(123)).to.eql([]);
        expect(_.filter()).to.eql([]);
        expect(_.filter(undefined)).to.eql([]);
    });
    it('returns an array of letters if strings are entered', function () {
        expect(_.filter('hi')).to.eql(['h', 'i']);
    });
});


describe('#reject', function () {
    it('should be a function', function () {
        expect(_.reject).to.be.a('function');
    });
    it('rejects array elements per function', function () {
        expect(_.reject([1, 2, 3, 4, 5], function (x) { return x <= 2; })).to.eql([3, 4, 5]);
        expect(_.reject([10, 20, 30, 40, 50], function (x) { return x >= 25; })).to.eql([10, 20]);
    });
    it('rejects object values and returns an array per function', () => {
        expect(_.reject({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }, function (x) { return x <= 2; })).to.eql([3, 4, 5]);
        expect(_.reject({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }, function (x) { return x >= 3; })).to.eql([1, 2]);
    });
    it('returns an empty array if strings are entered', function () {
        expect(_.reject('hi')).to.eql([]);
    });
});

describe('#uniq', function () {
    it('is a function', function () {
        expect(_.uniq).to.be.a('function');
    });
    it('returns an array with no duplicates', function () {
        expect(_.uniq([1, 2, 1, 2, 1, 2])).to.eql([1, 2]);
        expect(_.uniq([1, 2, 1, 2, 1, 2, 3, 4, 5, 6, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6])).to.eql([1, 2, 3, 4, 5, 6]);
        expect(_.uniq(['one', 'two', 'one', 'two'])).to.eql(['one', 'two']);
    });
    it('returns empty array when given incorrect format', function () {
        expect(_.uniq('northcoders')).to.eql([]);
        expect(_.uniq()).to.eql([]);
        expect(_.uniq({})).to.eql([]);
    });
});

describe('#map', function () {
    it('is a function', function () {
        expect(_.map).to.be.a('function');
    });
    it('maps array into new array', function () {
        expect(_.map([1, 2, 3, 4, 5], function (a) { return a; })).to.eql([1, 2, 3, 4, 5]);
    });
    it('maps object values returns an array', function () {
        expect(_.map({ one: 1, two: 2 }, function (a) { return a * 3; })).to.eql([3, 6]);
    });
    it('return an array of characters for string input', function () {
        expect(_.map('hi')).to.eql(['h', 'i']);
    });
    it('returns empty array when given incorrect argument', function () {
        expect(_.map(123)).to.eql([]);
        expect(_.map()).to.eql([]);
    });
    it('should iterate over every element in the array', function () {
        const spy = sinon.spy();
        _.map([1, 2, 3, 4, 5, 6, 7, 8, 9], spy);
        expect(spy.callCount).to.equal(9);
    });
});

describe('#pluck', function () {
    it('is a function', function () {
        expect(_.pluck).to.be.a('function');
    });
    it('returns an array with object property values', function () {
        expect(_.pluck([{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }], 'name')).to.eql(['moe', 'larry', 'curly']);
        expect(_.pluck([{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }], 'age')).to.eql([40, 50, 60]);
    });
    it('returns empty array when given incorrect format', function () {
        expect(_.pluck('northcoders')).to.eql([]);
        expect(_.pluck()).to.eql([]);
        expect(_.pluck({})).to.eql([]);
    });
});

describe('#reduce', function () {
    it('is a function', function () {
        expect(_.reduce).to.be.a('function');
    });
    it('returns undefined if less than 2 arguments are passed', () => {
        expect(_.reduce({})).to.eql(undefined);
        expect(_.reduce([])).to.eql(undefined);
        expect(_.reduce('string')).to.eql(undefined);
    });
    it('reduce adds numbers in an array', function () {
        expect(_.reduce([1, 2, 3], function (a, b) { return a + b; }, 0)).to.equal(6);
    });
    it('reduce adds numbers in an array with starting value', function () {
        expect(_.reduce([1, 2, 3], function (a, b) { return a + b; }, 5)).to.equal(11);
    });
    it('if start value undefined returns NaN', function () {
        expect(_.reduce([1, 2, 3], function (a, b) { return a + b; }, undefined)).to.eql(NaN);
    });
    it('return a modified string when a string is passed as an input', () => {
        expect(_.reduce('string', function (x) { return x + 10; })).to.eql('s1010101010');
    });
    it('reduce creates an object from array values', () => {
        const func = function (acc, x) {
            if (!acc[x]) {
                acc[x] = 1;
            } else {
                acc[x] = acc[x] + 1;
            }
            return acc;
        };
        const expected = { '1': 1, '2': 1, '3': 1 };
        expect(_.reduce([1, 2, 3], func, {})).to.eql(expected);
    });
});

describe('#contains', function () {
    it('is a function', function () {
        expect(_.contains).to.be.a('function');
    });
    it('returns true if the target is in the input', function () {
        expect(_.contains([1, 3, 5], 3, 0)).to.eql(true);
        expect(_.contains([1, 3, 5, 8, 9], 8, 2)).to.eql(true);
        expect(_.contains([1, 3, 5], 5, 1)).to.eql(true);
        expect(_.contains([1, 3, 5, 8, 9], 8, 2)).to.eql(true);
        expect(_.contains('string', 't')).to.eql(true);
        expect(_.contains('string', 'g', 2)).to.eql(true);
        expect(_.contains({ '1': 167, '2': 345, '3': 896 }, 896, 1)).to.eql(true);
    });
    it('returns false if the target is not in the input', function () {
        expect(_.contains([1, 3, 5], 16, 0)).to.eql(false);
        expect(_.contains([1, 3, 5, 8, 9], 78, 4)).to.eql(false);
        expect(_.contains('string', 'v')).to.eql(false);
        expect(_.contains('string', 'x', 2)).to.eql(false);
        expect(_.contains({ '1': 167, '2': 345, '3': 896 }, 999, 1)).to.eql(false);
    });
    it('returns false if less than 2 arguments are passed', function () {
        expect(_.contains('northcoders')).to.eql(false);
        expect(_.contains([])).to.eql(false);
        expect(_.contains({})).to.eql(false);
    });
});

describe('#every', function () {
    it('is a function', function () {
        expect(_.every).to.be.a('function');
    });
    it('returns false if second argument is not a function', () => {
        expect(_.every([1, 2, 3], 'string')).to.equal(false);
        expect(_.every([1, 2, 3], [1, 2, 3])).to.equal(false);
        expect(_.every([1, 2, 3], { '1': 1 })).to.equal(false);
    });
    it('returns true when given less than 2 arguments', function () {
        expect(_.every('northcoders')).to.eql(true);
        expect(_.every()).to.eql(true);
    });
    it('returns true if every element passes the test', function () {
        expect(_.every([1, 3, 5], function (x) { return x < 10; })).to.eql(true);
        expect(_.every([1, 3, 5, 8, 9], function (x) { return x > 0; })).to.eql(true);
        expect(_.every({ '1': 1, '2': 2, '3': 3 }, function (x) { return x < 8; })).to.eql(true);
        expect(_.every({ '1': 10, '2': 30, '3': 100 }, function (x) { return x > 0; })).to.eql(true);
    });
    it('returns false if at least one element fails the test', function () {
        expect(_.every([1, 3, 5], function (x) { return x > 10; })).to.eql(false);
        expect(_.every([1, 3, 5, 8, 9], function (x) { return x < 5; })).to.eql(false);
        expect(_.every({ '1': 10, '2': 11, '3': 12 }, function (x) { return x % 2 == 0; })).to.eql(false);
        expect(_.every({ '1': 0, '2': 15, '3': 97 }, function (x) { return x > 0; })).to.eql(false);
    });
});

describe('#some', function () {
    it('is a function', function () {
        expect(_.some).to.be.a('function');
    });
    it('returns false if second argument is not a function or no arguments given', () => {
        expect(_.some([1, 2, 3], 'string')).to.equal(false);
        expect(_.some([1, 2, 3], [1, 2, 3])).to.equal(false);
        expect(_.some([1, 2, 3], { '1': 1 })).to.equal(false);
        expect(_.some()).to.eql(false);
    });
    it('returns true if at least one element passes the test', function () {
        expect(_.some([1, 3, 5], function (x) { return x < 4; })).to.eql(true);
        expect(_.some([1, 3, 5, 8, 9], function (x) { return x > 5; })).to.eql(true);
        expect(_.some({ '1': 10, '2': 11, '3': 13 }, function (x) { return x % 2 == 0; })).to.eql(true);
        expect(_.some({ '1': 0, '2': 0, '3': 97 }, function (x) { return x > 0; })).to.eql(true);
    });
    it('returns false if no elements pass the test', function () {
        expect(_.some([1, 3, 5], function (x) { return x > 10; })).to.eql(false);
        expect(_.some([1, 3, 5, 8, 9], function (x) { return x < 0; })).to.eql(false);
        expect(_.some({ '1': 9, '2': 11, '3': 15 }, function (x) { return x % 2 == 0; })).to.eql(false);
        expect(_.some({ '1': 0, '2': -3, '3': -8 }, function (x) { return x > 0; })).to.eql(false);
    });
});

describe('#extend', () => {
    it('is a function', () => {
        expect(_.extend).to.be.a('function');
    });
    it('return undefined if no arguments are passed', () => {
        expect(_.extend()).to.eql(undefined);
    });
    it('returns empty array or empty object if empty arrray or object passed', () => {
        expect(_.extend({})).to.eql({});
        expect(_.extend([])).to.eql([]);
    });
    it('if one argument passed and item is not an object item is returned', () => {
        expect(_.extend(123)).to.eql(123);
        expect(_.extend('string')).to.eql('string');
        expect(_.extend([1, 2, 3])).to.eql([1, 2, 3]);
    });
    it('merges any amount of objects into to one object', () => {
        expect(_.extend({}, { 1: 2 }, { 2: 3 })).to.eql({ 1: 2, 2: 3 });
        expect(_.extend({ 'stats': 'matt' }, { 1: 2 }, { 2: 3 }, { 4: 67 }, { 34: 78 })).to.eql({ 1: 2, 2: 3, 4: 67, 34: 78, stats: 'matt' });
    });
    it('returns the first argument when not passed an object destination', () => {
        expect(_.extend('northcoders')).to.eql('northcoders');
        expect(_.extend(3)).to.eql(3);
    });
    it('copies properties of sourse object into target object', () => {
        const actual = _.extend({}, { name: 'sam', age: 20 });
        const expected = { name: 'sam', age: 20 };
        expect(actual).to.eql(expected);
    });
    it('works for arrays', () => {
        const actual = _.extend([1, 2, 3], { name: 'matt', age: 20 });
        const expected = [1, 2, 3];
        expect(actual).to.eql(expected);
    });
});

describe('#defaults', () => {
    it('is a function', () => {
        expect(_.defaults).to.be.a('function');
    });
    it('return undefined if no arguments are passed', () => {
        expect(_.defaults()).to.eql(undefined);
    });
    it('returns empty array or empty object if empty arrray or object passed', () => {
        expect(_.extend({})).to.eql({});
        expect(_.extend([])).to.eql([]);
    });
    it('if one argument passed and item is not an object item is returned', () => {
        expect(_.defaults(123)).to.eql(123);
        expect(_.defaults('string')).to.eql('string');
        expect(_.defaults([1, 2, 3])).to.eql([1, 2, 3]);
    });
    it('does not overwrite existing keys', () => {
        expect(_.defaults({ flavor: 'chocolate' }, { flavor: 'vanilla' })).to.eql({ flavor: 'chocolate' });
    });
    it('adds key/value pairs from other arguments to the object', () => {
        const def = { flavor: 'chocolate' };
        expect(_.defaults(def,
            { flavor: 'vanilla' },
            { sprinkles: 'lots' },
            { flake: 'yes' })).to.eql({ flavor: 'chocolate', sprinkles: 'lots', flake: 'yes' });
    });
});

describe('#indexOf', function () {
    it('is a function', function () {
        expect(_.indexOf).to.be.a('function');
    });
    it('returns -1 if the value is not in an unsorted array', function () {
        expect(_.indexOf([1, 3, 5], 2)).to.equal(-1);
        expect(_.indexOf([1, 3, 5], 567)).to.equal(-1);
        expect(_.indexOf(['matt', 'northcoders'], 'matthew')).to.equal(-1);
    });
    it('returns index of value that is present in an unsorted', function () {
        expect(_.indexOf([1, 3, 5], 3)).to.equal(1);
        expect(_.indexOf(['matt', 'northcoders'], 'matt')).to.equal(0);
    });
    it('returns index of value that are present in sorted list', function () {
        expect(_.indexOf([1, 3, 5], 3, true)).to.equal(1);
        expect(_.indexOf([1, 3, 5, 10, 50, 65], 65, true)).to.equal(5);
        expect(_.indexOf([100, 300, 500, 1000, 5000, 6500], 300, true)).to.equal(1);
        expect(_.indexOf([1, 3, 5, 10, 50, 65], 65, true)).to.equal(5);
    });
    it('returns undefined arguments in wrong format', function () {
        expect(_.indexOf('northcoders', 3)).to.equal(undefined);
        expect(_.indexOf()).to.equal(undefined);
    });
});

describe('#once', function () {
    it('is a function', function () {
        expect(_.once).to.be.a('function');
    });
    it('function should only action once', function () {
        const spy = sinon.spy();
        const spyOnce = _.once(spy);
        spyOnce();
        expect(spy.callCount).to.equal(1);
    });
    it('function should only action once', function () {
        const spy = sinon.spy();
        const spyOnce = _.once(spy);
        spyOnce();
        expect(spy.callCount).to.equal(1);
    });
    it('function should only action once', function () {
        const spy = sinon.spy();
        const spyOnce = _.once(spy);
        spyOnce();
        spyOnce();
        spyOnce();
        spyOnce();
        spyOnce();
        expect(spy.callCount).to.equal(1);
    });
});

describe('#memoize', () => {
    it('is a function', function () {
        expect(_.memoize).to.be.a('function');
    });
    it('function runs if the results are not in the cache', function () {
        const spy = sinon.spy(function (num) {
            return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
        });
        const fibonacci = _.memoize(spy);
        expect(fibonacci(10)).to.equal(55);
        expect(spy.callCount).to.equal(11);
        expect(fibonacci(11)).to.equal(89);
        expect(spy.callCount).to.equal(12);
        fibonacci(10);
        expect(spy.callCount).to.equal(12);
    });
});

describe('#delay', () => {
    it('is a function', () => {
        expect(_.delay).to.be.a('function');
    });
    it('invokes a function after specified milliseconds', () => {
        const spy = sinon.spy();
        const timer = sinon.useFakeTimers();

        _.delay(spy, 101);
        timer.tick(100);
        expect(spy.callCount).to.eql(0);
        timer.tick(200);
        expect(spy.callCount).to.eql(1);
    });
    it('invokes a function after specified milliseconds', (done) => {
        const test = function (x) { return x * 10; };
        const func = test(30);
        const timer = 500;
        const delay = _.delay(func, timer);
        expect(delay).to.not.be.undefined;
        done();
    });
});

describe('#shuffle', () => {
    it('is a function', () => {
        expect(_.shuffle).to.be.a('function');
    });
    it('returns an empty array if list undefined or length = 0', () => {
        expect(_.shuffle()).to.eql([]);
        expect(_.shuffle(undefined)).to.eql([]);
    });
    it('returns a new shuffled array of an array input', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const shuffled = _.shuffle(input);
        expect(shuffled).to.not.eql(input);
        expect(shuffled).to.not.eql(input);
        expect(shuffled).to.not.eql(input);
    });
    it('returns a new shuffled array of an object input', () => {
        const input = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
        const shuffled = _.shuffle(input);
        expect(shuffled).to.not.eql(input);
        expect(shuffled).to.not.eql(input);
        expect(shuffled).to.not.eql(input);
    });
    it('returns a new shuffled array of string characters if a string is input', () => {
        const input = 'northcoders';
        const shuffled = _.shuffle(input);
        expect(shuffled).to.not.eql(input);
        expect(shuffled).to.not.eql(input);
        expect(shuffled).to.not.eql(input);
    });
});

describe('#invoke', () => {
    it('is a function', () => {
        expect(_.invoke).to.be.a('function');
    });
    it('returns an empty array if empty array or object passed or undefined', () => {
        expect(_.invoke()).to.eql([]);
        expect(_.invoke([])).to.eql([]);
        expect(_.invoke({})).to.eql([]);
    });
    it('calls method on each element of list', function () {
        const actual = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
        const expected = [[1, 5, 7], [1, 2, 3]];
        expect(actual).to.eql(expected);
    });
    it('calls method on each element of list', function () {
        const actual = _.invoke([[5, 1, 7], [3, 2, 1]], 'slice');
        const expected = [[5, 1, 7], [3, 2, 1]];
        expect(actual).to.eql(expected);
    });
});

describe('#sortBy', () => {
    it('is a function', () => {
        expect(_.sortBy).to.be.a('function');
    });
    it('returns an empty array if no argument passed or empty array/object', () => {
        expect(_.sortBy()).to.eql([]);
        expect(_.sortBy([])).to.eql([]);
        expect(_.sortBy({})).to.eql([]);
    });
    it('returns sorted array by object key values', () => {
        const stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
        const sortby = _.sortBy(stooges, 'name');
        const expected = [{ name: 'curly', age: 60 }, { name: 'larry', age: 50 }, { name: 'moe', age: 40 }];
        expect(sortby).to.eql(expected);
    });
    it('returns sorted array', () => {
        const nums = [23, 45, 34, 67, 54, 32, 1];
        const sortby = _.sortBy(nums);
        const expected = [1, 23, 32, 34, 45, 54, 67];
        expect(sortby).to.eql(expected);
    });
    it('returns sorted array of string characters ', () => {
        const letters = 'string';
        const sortby = _.sortBy(letters);
        const expected = ['g', 'i', 'n', 'r', 's', 't'];
        expect(sortby).to.eql(expected);
    });
});

describe('#zip', () => {
    it('is a function', () => {
        expect(_.zip).to.be.a('function');
    });
    it('should return a nested array of string characters when a string is passed', () => {
        const input = 'string';
        const expected = [['s'], ['t'], ['r'], ['i'], ['n'], ['g']];
        expect(_.zip(input)).to.eql(expected);
    });
    it('should return a merged array when mulitple arrays are passed', () => {
        const input = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
        const expected = [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]];
        expect(input).to.eql(expected);
    });
});

describe('#sortedIndex', () => {
    it('should be a function', () => {
        expect(_.sortedIndex).to.be.a('function');
    });
    it('returns 0 if list equals an empty array or not array', () => {
        const empty = _.sortedIndex([]);
        expect(empty).to.equal(0);
        const obj = _.sortedIndex({});
        expect(obj).to.equal(0);
        const string = _.sortedIndex('string');
        expect(string).to.equal(0);
    });
    it('should return the insertion index of value', () => {
        const index = _.sortedIndex([10, 20, 30, 40, 50], 55);
        const expected = 5;
        expect(index).to.eql(expected);
    });
    it('should return the insertion index of value', () => {
        const index = _.sortedIndex([10, 20, 30, 40, 50], 55);
        const expected = 5;
        expect(index).to.eql(expected);
    });
});

describe('#flatten', () => {
    it('is a function', () => {
        expect(_.flatten).to.be.a('function');
    });
    it('returns an empty array if an object is passed', () => {
        expect(_.flatten({ name: [1, 2, 3] })).to.eql([]);
    });
    it('returns a string array if a string is passed', () => {
        expect(_.flatten('string')).to.eql(['s', 't', 'r', 'i', 'n', 'g']);
    });
    it('flattens a nested array any amount of levels if shallow is omitted ', () => {
        expect(_.flatten([1, [2], [3, [[4]]]])).to.eql([1, 2, 3, 4]);
    });
    it('flattens a nested array any amount of levels if shallow is omitted ', () => {
        expect(_.flatten([[1], [[[2]]], [3, [[4]]]])).to.eql([1, 2, 3, 4]);
    });
    it('flattens a nested array one level if shallow is set true ', () => {
        expect(_.flatten([1, [2], [3, [[4]]]], true)).to.eql([1, 2, 3, [[4]]]);
    });
});

describe('#intersection', () => {
    it('is a function', () => {
        expect(_.intersection).to.be.a('function');
    });
    it('returns an empty array when input is empty array/object', () => {
        expect(_.intersection()).to.eql([]);
        expect(_.intersection([])).to.eql([]);
    });
    it('returns a string array if a string is passed', () => {
        expect(_.flatten('string')).to.eql(['s', 't', 'r', 'i', 'n', 'g']);
    });
    it('return an array with values common to all arrays passed in', () => {
        expect(_.intersection([1, 2, 3, 8], [1, 2, 4, 3, 7, 9, 0, 1], [1, 2, 5, 8])).to.eql([1, 2]);
        expect(_.intersection([1, 2, 3, 9], [1, 2, 4, 3, 7, 9], [1, 2, 5, 9])).to.eql([1, 2, 9]);
        expect(_.intersection([1, 4, 8], [2, 4, 3, 7, 9, 0, 1], [1, 2, 5, 4])).to.eql([1, 4]);
    });
});

describe('#difference', () => {
    it('is a function', function () {
        expect(_.difference).to.be.a('function');
    });
    it('returns an empty array for no arguments', () => {
        expect(_.difference([])).to.eql([]);
    });
    it('returns array if only one argument is passed in', () => {
        expect(_.difference([1, 2, 3])).to.eql([1, 2, 3]);
    });
    it('returns a string array if a string is passed', () => {
        expect(_.flatten('string')).to.eql(['s', 't', 'r', 'i', 'n', 'g']);
    });
    it('returns the values from array that are not present in the other arrays ', () => {
        expect(_.difference([1, 2, 3, 4, 5], [5, 2, 10])).to.eql([1, 3, 4]);
        expect(_.difference([1, 2, 3], [5, 2, 10], [6, 7, 8], [11, 55])).to.eql([1, 3]);
        expect(_.difference([1, 2, 3], [5, 6], [1, 4], [10, 55, 'string'])).to.eql([2, 3]);
    });
});

describe('#throttle', () => {
    it('is a function', function () {
        expect(_.throttle).to.be.a('function');
    });
    it('should call the function once per wait', function () {
        const spy = sinon.spy();
        const timer = sinon.useFakeTimers();
        const throttle = _.throttle(spy, 1000);

        throttle();
        timer.tick(500);
        expect(spy.callCount).to.equal(0);
        timer.tick(1000);
        expect(spy.callCount).to.equal(1);
        throttle();
        throttle();
        timer.tick(1500);
        expect(spy.callCount).to.equal(2);
    });
});

describe('#throttle', () => {
    var timer;

    before(function () { timer = sinon.useFakeTimers(); });
    after(function () { timer.restore(); });

    it('calls callback after 100ms', function () {
        const spy = sinon.spy();
        const throttle = _.throttle(spy, 100);

        throttle();
        timer.tick(99);
        expect(spy.callCount).to.equal(0);
        timer.tick(1);
        expect(spy.callCount).to.equal(1);
    });
});