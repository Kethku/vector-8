/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/monaco-editor/esm/vs/editor/editor.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/monaco-editor/esm/vs/base/common/arrays.js":
/*!*****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/arrays.js ***!
  \*****************************************************************/
/*! exports provided: tail, tail2, equals, binarySearch, findFirstInSorted, mergeSort, groupBy, coalesce, isFalsyOrEmpty, isNonEmptyArray, distinct, distinctES6, firstIndex, first, flatten, range, arrayInsert, pushToStart, pushToEnd, asArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail2", function() { return tail2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySearch", function() { return binarySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFirstInSorted", function() { return findFirstInSorted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSort", function() { return mergeSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coalesce", function() { return coalesce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalsyOrEmpty", function() { return isFalsyOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return isNonEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctES6", function() { return distinctES6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstIndex", function() { return firstIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayInsert", function() { return arrayInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushToStart", function() { return pushToStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushToEnd", function() { return pushToEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asArray", function() { return asArray; });
/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default is zero).
 */
function tail(array, n) {
    if (n === void 0) { n = 0; }
    return array[array.length - (1 + n)];
}
function tail2(arr) {
    if (arr.length === 0) {
        throw new Error('Invalid tail call');
    }
    return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}
function equals(one, other, itemEquals) {
    if (itemEquals === void 0) { itemEquals = function (a, b) { return a === b; }; }
    if (one === other) {
        return true;
    }
    if (!one || !other) {
        return false;
    }
    if (one.length !== other.length) {
        return false;
    }
    for (var i = 0, len = one.length; i < len; i++) {
        if (!itemEquals(one[i], other[i])) {
            return false;
        }
    }
    return true;
}
function binarySearch(array, key, comparator) {
    var low = 0, high = array.length - 1;
    while (low <= high) {
        var mid = ((low + high) / 2) | 0;
        var comp = comparator(array[mid], key);
        if (comp < 0) {
            low = mid + 1;
        }
        else if (comp > 0) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -(low + 1);
}
/**
 * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
 * are located before all elements where p(x) is true.
 * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
 */
function findFirstInSorted(array, p) {
    var low = 0, high = array.length;
    if (high === 0) {
        return 0; // no children
    }
    while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (p(array[mid])) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return low;
}
/**
 * Like `Array#sort` but always stable. Usually runs a little slower `than Array#sort`
 * so only use this when actually needing stable sort.
 */
function mergeSort(data, compare) {
    _sort(data, compare, 0, data.length - 1, []);
    return data;
}
function _merge(a, compare, lo, mid, hi, aux) {
    var leftIdx = lo, rightIdx = mid + 1;
    for (var i = lo; i <= hi; i++) {
        aux[i] = a[i];
    }
    for (var i = lo; i <= hi; i++) {
        if (leftIdx > mid) {
            // left side consumed
            a[i] = aux[rightIdx++];
        }
        else if (rightIdx > hi) {
            // right side consumed
            a[i] = aux[leftIdx++];
        }
        else if (compare(aux[rightIdx], aux[leftIdx]) < 0) {
            // right element is less -> comes first
            a[i] = aux[rightIdx++];
        }
        else {
            // left element comes first (less or equal)
            a[i] = aux[leftIdx++];
        }
    }
}
function _sort(a, compare, lo, hi, aux) {
    if (hi <= lo) {
        return;
    }
    var mid = lo + ((hi - lo) / 2) | 0;
    _sort(a, compare, lo, mid, aux);
    _sort(a, compare, mid + 1, hi, aux);
    if (compare(a[mid], a[mid + 1]) <= 0) {
        // left and right are sorted and if the last-left element is less
        // or equals than the first-right element there is nothing else
        // to do
        return;
    }
    _merge(a, compare, lo, mid, hi, aux);
}
function groupBy(data, compare) {
    var result = [];
    var currentGroup = undefined;
    for (var _i = 0, _a = mergeSort(data.slice(0), compare); _i < _a.length; _i++) {
        var element = _a[_i];
        if (!currentGroup || compare(currentGroup[0], element) !== 0) {
            currentGroup = [element];
            result.push(currentGroup);
        }
        else {
            currentGroup.push(element);
        }
    }
    return result;
}
/**
 * @returns New array with all falsy values removed. The original array IS NOT modified.
 */
function coalesce(array) {
    return array.filter(function (e) { return !!e; });
}
/**
 * @returns false if the provided object is an array and not empty.
 */
function isFalsyOrEmpty(obj) {
    return !Array.isArray(obj) || obj.length === 0;
}
function isNonEmptyArray(obj) {
    return Array.isArray(obj) && obj.length > 0;
}
/**
 * Removes duplicates from the given array. The optional keyFn allows to specify
 * how elements are checked for equalness by returning a unique string for each.
 */
function distinct(array, keyFn) {
    if (!keyFn) {
        return array.filter(function (element, position) {
            return array.indexOf(element) === position;
        });
    }
    var seen = Object.create(null);
    return array.filter(function (elem) {
        var key = keyFn(elem);
        if (seen[key]) {
            return false;
        }
        seen[key] = true;
        return true;
    });
}
function distinctES6(array) {
    var seen = new Set();
    return array.filter(function (element) {
        if (seen.has(element)) {
            return false;
        }
        seen.add(element);
        return true;
    });
}
function firstIndex(array, fn) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (fn(element)) {
            return i;
        }
    }
    return -1;
}
function first(array, fn, notFoundValue) {
    if (notFoundValue === void 0) { notFoundValue = undefined; }
    var index = firstIndex(array, fn);
    return index < 0 ? notFoundValue : array[index];
}
function flatten(arr) {
    var _a;
    return (_a = []).concat.apply(_a, arr);
}
function range(arg, to) {
    var from = typeof to === 'number' ? arg : 0;
    if (typeof to === 'number') {
        from = arg;
    }
    else {
        from = 0;
        to = arg;
    }
    var result = [];
    if (from <= to) {
        for (var i = from; i < to; i++) {
            result.push(i);
        }
    }
    else {
        for (var i = from; i > to; i--) {
            result.push(i);
        }
    }
    return result;
}
/**
 * Insert `insertArr` inside `target` at `insertIndex`.
 * Please don't touch unless you understand https://jsperf.com/inserting-an-array-within-an-array
 */
function arrayInsert(target, insertIndex, insertArr) {
    var before = target.slice(0, insertIndex);
    var after = target.slice(insertIndex);
    return before.concat(insertArr, after);
}
/**
 * Pushes an element to the start of the array, if found.
 */
function pushToStart(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.unshift(value);
    }
}
/**
 * Pushes an element to the end of the array, if found.
 */
function pushToEnd(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.push(value);
    }
}
function asArray(x) {
    return Array.isArray(x) ? x : [x];
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/cancellation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/cancellation.js ***!
  \***********************************************************************/
/*! exports provided: CancellationToken, CancellationTokenSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationToken", function() { return CancellationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationTokenSource", function() { return CancellationTokenSource; });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./node_modules/monaco-editor/esm/vs/base/common/event.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var shortcutEvent = Object.freeze(function (callback, context) {
    var handle = setTimeout(callback.bind(context), 0);
    return { dispose: function () { clearTimeout(handle); } };
});
var CancellationToken;
(function (CancellationToken) {
    function isCancellationToken(thing) {
        if (thing === CancellationToken.None || thing === CancellationToken.Cancelled) {
            return true;
        }
        if (thing instanceof MutableToken) {
            return true;
        }
        if (!thing || typeof thing !== 'object') {
            return false;
        }
        return typeof thing.isCancellationRequested === 'boolean'
            && typeof thing.onCancellationRequested === 'function';
    }
    CancellationToken.isCancellationToken = isCancellationToken;
    CancellationToken.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: _event_js__WEBPACK_IMPORTED_MODULE_0__["Event"].None
    });
    CancellationToken.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutEvent
    });
})(CancellationToken || (CancellationToken = {}));
var MutableToken = /** @class */ (function () {
    function MutableToken() {
        this._isCancelled = false;
        this._emitter = null;
    }
    MutableToken.prototype.cancel = function () {
        if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
                this._emitter.fire(undefined);
                this.dispose();
            }
        }
    };
    Object.defineProperty(MutableToken.prototype, "isCancellationRequested", {
        get: function () {
            return this._isCancelled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MutableToken.prototype, "onCancellationRequested", {
        get: function () {
            if (this._isCancelled) {
                return shortcutEvent;
            }
            if (!this._emitter) {
                this._emitter = new _event_js__WEBPACK_IMPORTED_MODULE_0__["Emitter"]();
            }
            return this._emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MutableToken.prototype.dispose = function () {
        if (this._emitter) {
            this._emitter.dispose();
            this._emitter = null;
        }
    };
    return MutableToken;
}());
var CancellationTokenSource = /** @class */ (function () {
    function CancellationTokenSource(parent) {
        this._token = undefined;
        this._parentListener = undefined;
        this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
    }
    Object.defineProperty(CancellationTokenSource.prototype, "token", {
        get: function () {
            if (!this._token) {
                // be lazy and create the token only when
                // actually needed
                this._token = new MutableToken();
            }
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    CancellationTokenSource.prototype.cancel = function () {
        if (!this._token) {
            // save an object by returning the default
            // cancelled token when cancellation happens
            // before someone asks for the token
            this._token = CancellationToken.Cancelled;
        }
        else if (this._token instanceof MutableToken) {
            // actually cancel
            this._token.cancel();
        }
    };
    CancellationTokenSource.prototype.dispose = function () {
        if (this._parentListener) {
            this._parentListener.dispose();
        }
        if (!this._token) {
            // ensure to initialize with an empty token if we had none
            this._token = CancellationToken.None;
        }
        else if (this._token instanceof MutableToken) {
            // actually dispose
            this._token.dispose();
        }
    };
    return CancellationTokenSource;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js ***!
  \********************************************************************/
/*! exports provided: stringDiff, Debug, MyArray, LcsDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringDiff", function() { return stringDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyArray", function() { return MyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcsDiff", function() { return LcsDiff; });
/* harmony import */ var _diffChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffChange.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function createStringSequence(a) {
    return {
        getLength: function () { return a.length; },
        getElementAtIndex: function (pos) { return a.charCodeAt(pos); }
    };
}
function stringDiff(original, modified, pretty) {
    return new LcsDiff(createStringSequence(original), createStringSequence(modified)).ComputeDiff(pretty);
}
//
// The code below has been ported from a C# implementation in VS
//
var Debug = /** @class */ (function () {
    function Debug() {
    }
    Debug.Assert = function (condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    };
    return Debug;
}());

var MyArray = /** @class */ (function () {
    function MyArray() {
    }
    /**
     * Copies a range of elements from an Array starting at the specified source index and pastes
     * them to another Array starting at the specified destination index. The length and the indexes
     * are specified as 64-bit integers.
     * sourceArray:
     *		The Array that contains the data to copy.
     * sourceIndex:
     *		A 64-bit integer that represents the index in the sourceArray at which copying begins.
     * destinationArray:
     *		The Array that receives the data.
     * destinationIndex:
     *		A 64-bit integer that represents the index in the destinationArray at which storing begins.
     * length:
     *		A 64-bit integer that represents the number of elements to copy.
     */
    MyArray.Copy = function (sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
        for (var i = 0; i < length; i++) {
            destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
        }
    };
    return MyArray;
}());

//*****************************************************************************
// LcsDiff.cs
//
// An implementation of the difference algorithm described in
// "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
//
// Copyright (C) 2008 Microsoft Corporation @minifier_do_not_preserve
//*****************************************************************************
// Our total memory usage for storing history is (worst-case):
// 2 * [(MaxDifferencesHistory + 1) * (MaxDifferencesHistory + 1) - 1] * sizeof(int)
// 2 * [1448*1448 - 1] * 4 = 16773624 = 16MB
var MaxDifferencesHistory = 1447;
//let MaxDifferencesHistory = 100;
/**
 * A utility class which helps to create the set of DiffChanges from
 * a difference operation. This class accepts original DiffElements and
 * modified DiffElements that are involved in a particular change. The
 * MarktNextChange() method can be called to mark the separation between
 * distinct changes. At the end, the Changes property can be called to retrieve
 * the constructed changes.
 */
var DiffChangeHelper = /** @class */ (function () {
    /**
     * Constructs a new DiffChangeHelper for the given DiffSequences.
     */
    function DiffChangeHelper() {
        this.m_changes = [];
        this.m_originalStart = Number.MAX_VALUE;
        this.m_modifiedStart = Number.MAX_VALUE;
        this.m_originalCount = 0;
        this.m_modifiedCount = 0;
    }
    /**
     * Marks the beginning of the next change in the set of differences.
     */
    DiffChangeHelper.prototype.MarkNextChange = function () {
        // Only add to the list if there is something to add
        if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
            // Add the new change to our list
            this.m_changes.push(new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount));
        }
        // Reset for the next change
        this.m_originalCount = 0;
        this.m_modifiedCount = 0;
        this.m_originalStart = Number.MAX_VALUE;
        this.m_modifiedStart = Number.MAX_VALUE;
    };
    /**
     * Adds the original element at the given position to the elements
     * affected by the current change. The modified index gives context
     * to the change position with respect to the original sequence.
     * @param originalIndex The index of the original element to add.
     * @param modifiedIndex The index of the modified element that provides corresponding position in the modified sequence.
     */
    DiffChangeHelper.prototype.AddOriginalElement = function (originalIndex, modifiedIndex) {
        // The 'true' start index is the smallest of the ones we've seen
        this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
        this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
        this.m_originalCount++;
    };
    /**
     * Adds the modified element at the given position to the elements
     * affected by the current change. The original index gives context
     * to the change position with respect to the modified sequence.
     * @param originalIndex The index of the original element that provides corresponding position in the original sequence.
     * @param modifiedIndex The index of the modified element to add.
     */
    DiffChangeHelper.prototype.AddModifiedElement = function (originalIndex, modifiedIndex) {
        // The 'true' start index is the smallest of the ones we've seen
        this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
        this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
        this.m_modifiedCount++;
    };
    /**
     * Retrieves all of the changes marked by the class.
     */
    DiffChangeHelper.prototype.getChanges = function () {
        if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
            // Finish up on whatever is left
            this.MarkNextChange();
        }
        return this.m_changes;
    };
    /**
     * Retrieves all of the changes marked by the class in the reverse order
     */
    DiffChangeHelper.prototype.getReverseChanges = function () {
        if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
            // Finish up on whatever is left
            this.MarkNextChange();
        }
        this.m_changes.reverse();
        return this.m_changes;
    };
    return DiffChangeHelper;
}());
/**
 * An implementation of the difference algorithm described in
 * "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
 */
var LcsDiff = /** @class */ (function () {
    /**
     * Constructs the DiffFinder
     */
    function LcsDiff(originalSequence, newSequence, continueProcessingPredicate) {
        if (continueProcessingPredicate === void 0) { continueProcessingPredicate = null; }
        this.OriginalSequence = originalSequence;
        this.ModifiedSequence = newSequence;
        this.ContinueProcessingPredicate = continueProcessingPredicate;
        this.m_forwardHistory = [];
        this.m_reverseHistory = [];
    }
    LcsDiff.prototype.ElementsAreEqual = function (originalIndex, newIndex) {
        return (this.OriginalSequence.getElementAtIndex(originalIndex) === this.ModifiedSequence.getElementAtIndex(newIndex));
    };
    LcsDiff.prototype.OriginalElementsAreEqual = function (index1, index2) {
        return (this.OriginalSequence.getElementAtIndex(index1) === this.OriginalSequence.getElementAtIndex(index2));
    };
    LcsDiff.prototype.ModifiedElementsAreEqual = function (index1, index2) {
        return (this.ModifiedSequence.getElementAtIndex(index1) === this.ModifiedSequence.getElementAtIndex(index2));
    };
    LcsDiff.prototype.ComputeDiff = function (pretty) {
        return this._ComputeDiff(0, this.OriginalSequence.getLength() - 1, 0, this.ModifiedSequence.getLength() - 1, pretty);
    };
    /**
     * Computes the differences between the original and modified input
     * sequences on the bounded range.
     * @returns An array of the differences between the two input sequences.
     */
    LcsDiff.prototype._ComputeDiff = function (originalStart, originalEnd, modifiedStart, modifiedEnd, pretty) {
        var quitEarlyArr = [false];
        var changes = this.ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr);
        if (pretty) {
            // We have to clean up the computed diff to be more intuitive
            // but it turns out this cannot be done correctly until the entire set
            // of diffs have been computed
            return this.PrettifyChanges(changes);
        }
        return changes;
    };
    /**
     * Private helper method which computes the differences on the bounded range
     * recursively.
     * @returns An array of the differences between the two input sequences.
     */
    LcsDiff.prototype.ComputeDiffRecursive = function (originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr) {
        quitEarlyArr[0] = false;
        // Find the start of the differences
        while (originalStart <= originalEnd && modifiedStart <= modifiedEnd && this.ElementsAreEqual(originalStart, modifiedStart)) {
            originalStart++;
            modifiedStart++;
        }
        // Find the end of the differences
        while (originalEnd >= originalStart && modifiedEnd >= modifiedStart && this.ElementsAreEqual(originalEnd, modifiedEnd)) {
            originalEnd--;
            modifiedEnd--;
        }
        // In the special case where we either have all insertions or all deletions or the sequences are identical
        if (originalStart > originalEnd || modifiedStart > modifiedEnd) {
            var changes = void 0;
            if (modifiedStart <= modifiedEnd) {
                Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd');
                // All insertions
                changes = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, 0, modifiedStart, modifiedEnd - modifiedStart + 1)
                ];
            }
            else if (originalStart <= originalEnd) {
                Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd');
                // All deletions
                changes = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalEnd - originalStart + 1, modifiedStart, 0)
                ];
            }
            else {
                Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd');
                Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd');
                // Identical sequences - No differences
                changes = [];
            }
            return changes;
        }
        // This problem can be solved using the Divide-And-Conquer technique.
        var midOriginalArr = [0], midModifiedArr = [0];
        var result = this.ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr);
        var midOriginal = midOriginalArr[0];
        var midModified = midModifiedArr[0];
        if (result !== null) {
            // Result is not-null when there was enough memory to compute the changes while
            // searching for the recursion point
            return result;
        }
        else if (!quitEarlyArr[0]) {
            // We can break the problem down recursively by finding the changes in the
            // First Half:   (originalStart, modifiedStart) to (midOriginal, midModified)
            // Second Half:  (midOriginal + 1, minModified + 1) to (originalEnd, modifiedEnd)
            // NOTE: ComputeDiff() is inclusive, therefore the second range starts on the next point
            var leftChanges = this.ComputeDiffRecursive(originalStart, midOriginal, modifiedStart, midModified, quitEarlyArr);
            var rightChanges = [];
            if (!quitEarlyArr[0]) {
                rightChanges = this.ComputeDiffRecursive(midOriginal + 1, originalEnd, midModified + 1, modifiedEnd, quitEarlyArr);
            }
            else {
                // We did't have time to finish the first half, so we don't have time to compute this half.
                // Consider the entire rest of the sequence different.
                rightChanges = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](midOriginal + 1, originalEnd - (midOriginal + 1) + 1, midModified + 1, modifiedEnd - (midModified + 1) + 1)
                ];
            }
            return this.ConcatenateChanges(leftChanges, rightChanges);
        }
        // If we hit here, we quit early, and so can't return anything meaningful
        return [
            new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
        ];
    };
    LcsDiff.prototype.WALKTRACE = function (diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr) {
        var forwardChanges = null, reverseChanges = null;
        // First, walk backward through the forward diagonals history
        var changeHelper = new DiffChangeHelper();
        var diagonalMin = diagonalForwardStart;
        var diagonalMax = diagonalForwardEnd;
        var diagonalRelative = (midOriginalArr[0] - midModifiedArr[0]) - diagonalForwardOffset;
        var lastOriginalIndex = Number.MIN_VALUE;
        var historyIndex = this.m_forwardHistory.length - 1;
        var diagonal;
        do {
            // Get the diagonal index from the relative diagonal number
            diagonal = diagonalRelative + diagonalForwardBase;
            // Figure out where we came from
            if (diagonal === diagonalMin || (diagonal < diagonalMax && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1])) {
                // Vertical line (the element is an insert)
                originalIndex = forwardPoints[diagonal + 1];
                modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
                if (originalIndex < lastOriginalIndex) {
                    changeHelper.MarkNextChange();
                }
                lastOriginalIndex = originalIndex;
                changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex);
                diagonalRelative = (diagonal + 1) - diagonalForwardBase; //Setup for the next iteration
            }
            else {
                // Horizontal line (the element is a deletion)
                originalIndex = forwardPoints[diagonal - 1] + 1;
                modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
                if (originalIndex < lastOriginalIndex) {
                    changeHelper.MarkNextChange();
                }
                lastOriginalIndex = originalIndex - 1;
                changeHelper.AddOriginalElement(originalIndex, modifiedIndex + 1);
                diagonalRelative = (diagonal - 1) - diagonalForwardBase; //Setup for the next iteration
            }
            if (historyIndex >= 0) {
                forwardPoints = this.m_forwardHistory[historyIndex];
                diagonalForwardBase = forwardPoints[0]; //We stored this in the first spot
                diagonalMin = 1;
                diagonalMax = forwardPoints.length - 1;
            }
        } while (--historyIndex >= -1);
        // Ironically, we get the forward changes as the reverse of the
        // order we added them since we technically added them backwards
        forwardChanges = changeHelper.getReverseChanges();
        if (quitEarlyArr[0]) {
            // TODO: Calculate a partial from the reverse diagonals.
            //       For now, just assume everything after the midOriginal/midModified point is a diff
            var originalStartPoint = midOriginalArr[0] + 1;
            var modifiedStartPoint = midModifiedArr[0] + 1;
            if (forwardChanges !== null && forwardChanges.length > 0) {
                var lastForwardChange = forwardChanges[forwardChanges.length - 1];
                originalStartPoint = Math.max(originalStartPoint, lastForwardChange.getOriginalEnd());
                modifiedStartPoint = Math.max(modifiedStartPoint, lastForwardChange.getModifiedEnd());
            }
            reverseChanges = [
                new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStartPoint, originalEnd - originalStartPoint + 1, modifiedStartPoint, modifiedEnd - modifiedStartPoint + 1)
            ];
        }
        else {
            // Now walk backward through the reverse diagonals history
            changeHelper = new DiffChangeHelper();
            diagonalMin = diagonalReverseStart;
            diagonalMax = diagonalReverseEnd;
            diagonalRelative = (midOriginalArr[0] - midModifiedArr[0]) - diagonalReverseOffset;
            lastOriginalIndex = Number.MAX_VALUE;
            historyIndex = (deltaIsEven) ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
            do {
                // Get the diagonal index from the relative diagonal number
                diagonal = diagonalRelative + diagonalReverseBase;
                // Figure out where we came from
                if (diagonal === diagonalMin || (diagonal < diagonalMax && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1])) {
                    // Horizontal line (the element is a deletion))
                    originalIndex = reversePoints[diagonal + 1] - 1;
                    modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
                    if (originalIndex > lastOriginalIndex) {
                        changeHelper.MarkNextChange();
                    }
                    lastOriginalIndex = originalIndex + 1;
                    changeHelper.AddOriginalElement(originalIndex + 1, modifiedIndex + 1);
                    diagonalRelative = (diagonal + 1) - diagonalReverseBase; //Setup for the next iteration
                }
                else {
                    // Vertical line (the element is an insertion)
                    originalIndex = reversePoints[diagonal - 1];
                    modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
                    if (originalIndex > lastOriginalIndex) {
                        changeHelper.MarkNextChange();
                    }
                    lastOriginalIndex = originalIndex;
                    changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex + 1);
                    diagonalRelative = (diagonal - 1) - diagonalReverseBase; //Setup for the next iteration
                }
                if (historyIndex >= 0) {
                    reversePoints = this.m_reverseHistory[historyIndex];
                    diagonalReverseBase = reversePoints[0]; //We stored this in the first spot
                    diagonalMin = 1;
                    diagonalMax = reversePoints.length - 1;
                }
            } while (--historyIndex >= -1);
            // There are cases where the reverse history will find diffs that
            // are correct, but not intuitive, so we need shift them.
            reverseChanges = changeHelper.getChanges();
        }
        return this.ConcatenateChanges(forwardChanges, reverseChanges);
    };
    /**
     * Given the range to compute the diff on, this method finds the point:
     * (midOriginal, midModified)
     * that exists in the middle of the LCS of the two sequences and
     * is the point at which the LCS problem may be broken down recursively.
     * This method will try to keep the LCS trace in memory. If the LCS recursion
     * point is calculated and the full trace is available in memory, then this method
     * will return the change list.
     * @param originalStart The start bound of the original sequence range
     * @param originalEnd The end bound of the original sequence range
     * @param modifiedStart The start bound of the modified sequence range
     * @param modifiedEnd The end bound of the modified sequence range
     * @param midOriginal The middle point of the original sequence range
     * @param midModified The middle point of the modified sequence range
     * @returns The diff changes, if available, otherwise null
     */
    LcsDiff.prototype.ComputeRecursionPoint = function (originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr) {
        var originalIndex = 0, modifiedIndex = 0;
        var diagonalForwardStart = 0, diagonalForwardEnd = 0;
        var diagonalReverseStart = 0, diagonalReverseEnd = 0;
        var numDifferences;
        // To traverse the edit graph and produce the proper LCS, our actual
        // start position is just outside the given boundary
        originalStart--;
        modifiedStart--;
        // We set these up to make the compiler happy, but they will
        // be replaced before we return with the actual recursion point
        midOriginalArr[0] = 0;
        midModifiedArr[0] = 0;
        // Clear out the history
        this.m_forwardHistory = [];
        this.m_reverseHistory = [];
        // Each cell in the two arrays corresponds to a diagonal in the edit graph.
        // The integer value in the cell represents the originalIndex of the furthest
        // reaching point found so far that ends in that diagonal.
        // The modifiedIndex can be computed mathematically from the originalIndex and the diagonal number.
        var maxDifferences = (originalEnd - originalStart) + (modifiedEnd - modifiedStart);
        var numDiagonals = maxDifferences + 1;
        var forwardPoints = new Array(numDiagonals);
        var reversePoints = new Array(numDiagonals);
        // diagonalForwardBase: Index into forwardPoints of the diagonal which passes through (originalStart, modifiedStart)
        // diagonalReverseBase: Index into reversePoints of the diagonal which passes through (originalEnd, modifiedEnd)
        var diagonalForwardBase = (modifiedEnd - modifiedStart);
        var diagonalReverseBase = (originalEnd - originalStart);
        // diagonalForwardOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
        //    diagonal number (relative to diagonalForwardBase)
        // diagonalReverseOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
        //    diagonal number (relative to diagonalReverseBase)
        var diagonalForwardOffset = (originalStart - modifiedStart);
        var diagonalReverseOffset = (originalEnd - modifiedEnd);
        // delta: The difference between the end diagonal and the start diagonal. This is used to relate diagonal numbers
        //   relative to the start diagonal with diagonal numbers relative to the end diagonal.
        // The Even/Oddn-ness of this delta is important for determining when we should check for overlap
        var delta = diagonalReverseBase - diagonalForwardBase;
        var deltaIsEven = (delta % 2 === 0);
        // Here we set up the start and end points as the furthest points found so far
        // in both the forward and reverse directions, respectively
        forwardPoints[diagonalForwardBase] = originalStart;
        reversePoints[diagonalReverseBase] = originalEnd;
        // Remember if we quit early, and thus need to do a best-effort result instead of a real result.
        quitEarlyArr[0] = false;
        // A couple of points:
        // --With this method, we iterate on the number of differences between the two sequences.
        //   The more differences there actually are, the longer this will take.
        // --Also, as the number of differences increases, we have to search on diagonals further
        //   away from the reference diagonal (which is diagonalForwardBase for forward, diagonalReverseBase for reverse).
        // --We extend on even diagonals (relative to the reference diagonal) only when numDifferences
        //   is even and odd diagonals only when numDifferences is odd.
        var diagonal, tempOriginalIndex;
        for (numDifferences = 1; numDifferences <= (maxDifferences / 2) + 1; numDifferences++) {
            var furthestOriginalIndex = 0;
            var furthestModifiedIndex = 0;
            // Run the algorithm in the forward direction
            diagonalForwardStart = this.ClipDiagonalBound(diagonalForwardBase - numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
            diagonalForwardEnd = this.ClipDiagonalBound(diagonalForwardBase + numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
            for (diagonal = diagonalForwardStart; diagonal <= diagonalForwardEnd; diagonal += 2) {
                // STEP 1: We extend the furthest reaching point in the present diagonal
                // by looking at the diagonals above and below and picking the one whose point
                // is further away from the start point (originalStart, modifiedStart)
                if (diagonal === diagonalForwardStart || (diagonal < diagonalForwardEnd && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1])) {
                    originalIndex = forwardPoints[diagonal + 1];
                }
                else {
                    originalIndex = forwardPoints[diagonal - 1] + 1;
                }
                modifiedIndex = originalIndex - (diagonal - diagonalForwardBase) - diagonalForwardOffset;
                // Save the current originalIndex so we can test for false overlap in step 3
                tempOriginalIndex = originalIndex;
                // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
                // so long as the elements are equal.
                while (originalIndex < originalEnd && modifiedIndex < modifiedEnd && this.ElementsAreEqual(originalIndex + 1, modifiedIndex + 1)) {
                    originalIndex++;
                    modifiedIndex++;
                }
                forwardPoints[diagonal] = originalIndex;
                if (originalIndex + modifiedIndex > furthestOriginalIndex + furthestModifiedIndex) {
                    furthestOriginalIndex = originalIndex;
                    furthestModifiedIndex = modifiedIndex;
                }
                // STEP 3: If delta is odd (overlap first happens on forward when delta is odd)
                // and diagonal is in the range of reverse diagonals computed for numDifferences-1
                // (the previous iteration; we haven't computed reverse diagonals for numDifferences yet)
                // then check for overlap.
                if (!deltaIsEven && Math.abs(diagonal - diagonalReverseBase) <= (numDifferences - 1)) {
                    if (originalIndex >= reversePoints[diagonal]) {
                        midOriginalArr[0] = originalIndex;
                        midModifiedArr[0] = modifiedIndex;
                        if (tempOriginalIndex <= reversePoints[diagonal] && MaxDifferencesHistory > 0 && numDifferences <= (MaxDifferencesHistory + 1)) {
                            // BINGO! We overlapped, and we have the full trace in memory!
                            return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
                        }
                        else {
                            // Either false overlap, or we didn't have enough memory for the full trace
                            // Just return the recursion point
                            return null;
                        }
                    }
                }
            }
            // Check to see if we should be quitting early, before moving on to the next iteration.
            var matchLengthOfLongest = ((furthestOriginalIndex - originalStart) + (furthestModifiedIndex - modifiedStart) - numDifferences) / 2;
            if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(furthestOriginalIndex, this.OriginalSequence, matchLengthOfLongest)) {
                // We can't finish, so skip ahead to generating a result from what we have.
                quitEarlyArr[0] = true;
                // Use the furthest distance we got in the forward direction.
                midOriginalArr[0] = furthestOriginalIndex;
                midModifiedArr[0] = furthestModifiedIndex;
                if (matchLengthOfLongest > 0 && MaxDifferencesHistory > 0 && numDifferences <= (MaxDifferencesHistory + 1)) {
                    // Enough of the history is in memory to walk it backwards
                    return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
                }
                else {
                    // We didn't actually remember enough of the history.
                    //Since we are quiting the diff early, we need to shift back the originalStart and modified start
                    //back into the boundary limits since we decremented their value above beyond the boundary limit.
                    originalStart++;
                    modifiedStart++;
                    return [
                        new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
                    ];
                }
            }
            // Run the algorithm in the reverse direction
            diagonalReverseStart = this.ClipDiagonalBound(diagonalReverseBase - numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
            diagonalReverseEnd = this.ClipDiagonalBound(diagonalReverseBase + numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
            for (diagonal = diagonalReverseStart; diagonal <= diagonalReverseEnd; diagonal += 2) {
                // STEP 1: We extend the furthest reaching point in the present diagonal
                // by looking at the diagonals above and below and picking the one whose point
                // is further away from the start point (originalEnd, modifiedEnd)
                if (diagonal === diagonalReverseStart || (diagonal < diagonalReverseEnd && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1])) {
                    originalIndex = reversePoints[diagonal + 1] - 1;
                }
                else {
                    originalIndex = reversePoints[diagonal - 1];
                }
                modifiedIndex = originalIndex - (diagonal - diagonalReverseBase) - diagonalReverseOffset;
                // Save the current originalIndex so we can test for false overlap
                tempOriginalIndex = originalIndex;
                // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
                // as long as the elements are equal.
                while (originalIndex > originalStart && modifiedIndex > modifiedStart && this.ElementsAreEqual(originalIndex, modifiedIndex)) {
                    originalIndex--;
                    modifiedIndex--;
                }
                reversePoints[diagonal] = originalIndex;
                // STEP 4: If delta is even (overlap first happens on reverse when delta is even)
                // and diagonal is in the range of forward diagonals computed for numDifferences
                // then check for overlap.
                if (deltaIsEven && Math.abs(diagonal - diagonalForwardBase) <= numDifferences) {
                    if (originalIndex <= forwardPoints[diagonal]) {
                        midOriginalArr[0] = originalIndex;
                        midModifiedArr[0] = modifiedIndex;
                        if (tempOriginalIndex >= forwardPoints[diagonal] && MaxDifferencesHistory > 0 && numDifferences <= (MaxDifferencesHistory + 1)) {
                            // BINGO! We overlapped, and we have the full trace in memory!
                            return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
                        }
                        else {
                            // Either false overlap, or we didn't have enough memory for the full trace
                            // Just return the recursion point
                            return null;
                        }
                    }
                }
            }
            // Save current vectors to history before the next iteration
            if (numDifferences <= MaxDifferencesHistory) {
                // We are allocating space for one extra int, which we fill with
                // the index of the diagonal base index
                var temp = new Array(diagonalForwardEnd - diagonalForwardStart + 2);
                temp[0] = diagonalForwardBase - diagonalForwardStart + 1;
                MyArray.Copy(forwardPoints, diagonalForwardStart, temp, 1, diagonalForwardEnd - diagonalForwardStart + 1);
                this.m_forwardHistory.push(temp);
                temp = new Array(diagonalReverseEnd - diagonalReverseStart + 2);
                temp[0] = diagonalReverseBase - diagonalReverseStart + 1;
                MyArray.Copy(reversePoints, diagonalReverseStart, temp, 1, diagonalReverseEnd - diagonalReverseStart + 1);
                this.m_reverseHistory.push(temp);
            }
        }
        // If we got here, then we have the full trace in history. We just have to convert it to a change list
        // NOTE: This part is a bit messy
        return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
    };
    /**
     * Shifts the given changes to provide a more intuitive diff.
     * While the first element in a diff matches the first element after the diff,
     * we shift the diff down.
     *
     * @param changes The list of changes to shift
     * @returns The shifted changes
     */
    LcsDiff.prototype.PrettifyChanges = function (changes) {
        // Shift all the changes down first
        for (var i = 0; i < changes.length; i++) {
            var change = changes[i];
            var originalStop = (i < changes.length - 1) ? changes[i + 1].originalStart : this.OriginalSequence.getLength();
            var modifiedStop = (i < changes.length - 1) ? changes[i + 1].modifiedStart : this.ModifiedSequence.getLength();
            var checkOriginal = change.originalLength > 0;
            var checkModified = change.modifiedLength > 0;
            while (change.originalStart + change.originalLength < originalStop &&
                change.modifiedStart + change.modifiedLength < modifiedStop &&
                (!checkOriginal || this.OriginalElementsAreEqual(change.originalStart, change.originalStart + change.originalLength)) &&
                (!checkModified || this.ModifiedElementsAreEqual(change.modifiedStart, change.modifiedStart + change.modifiedLength))) {
                change.originalStart++;
                change.modifiedStart++;
            }
            var mergedChangeArr = [null];
            if (i < changes.length - 1 && this.ChangesOverlap(changes[i], changes[i + 1], mergedChangeArr)) {
                changes[i] = mergedChangeArr[0];
                changes.splice(i + 1, 1);
                i--;
                continue;
            }
        }
        // Shift changes back up until we hit empty or whitespace-only lines
        for (var i = changes.length - 1; i >= 0; i--) {
            var change = changes[i];
            var originalStop = 0;
            var modifiedStop = 0;
            if (i > 0) {
                var prevChange = changes[i - 1];
                if (prevChange.originalLength > 0) {
                    originalStop = prevChange.originalStart + prevChange.originalLength;
                }
                if (prevChange.modifiedLength > 0) {
                    modifiedStop = prevChange.modifiedStart + prevChange.modifiedLength;
                }
            }
            var checkOriginal = change.originalLength > 0;
            var checkModified = change.modifiedLength > 0;
            var bestDelta = 0;
            var bestScore = this._boundaryScore(change.originalStart, change.originalLength, change.modifiedStart, change.modifiedLength);
            for (var delta = 1;; delta++) {
                var originalStart = change.originalStart - delta;
                var modifiedStart = change.modifiedStart - delta;
                if (originalStart < originalStop || modifiedStart < modifiedStop) {
                    break;
                }
                if (checkOriginal && !this.OriginalElementsAreEqual(originalStart, originalStart + change.originalLength)) {
                    break;
                }
                if (checkModified && !this.ModifiedElementsAreEqual(modifiedStart, modifiedStart + change.modifiedLength)) {
                    break;
                }
                var score = this._boundaryScore(originalStart, change.originalLength, modifiedStart, change.modifiedLength);
                if (score > bestScore) {
                    bestScore = score;
                    bestDelta = delta;
                }
            }
            change.originalStart -= bestDelta;
            change.modifiedStart -= bestDelta;
        }
        return changes;
    };
    LcsDiff.prototype._OriginalIsBoundary = function (index) {
        if (index <= 0 || index >= this.OriginalSequence.getLength() - 1) {
            return true;
        }
        var element = this.OriginalSequence.getElementAtIndex(index);
        return (typeof element === 'string' && /^\s*$/.test(element));
    };
    LcsDiff.prototype._OriginalRegionIsBoundary = function (originalStart, originalLength) {
        if (this._OriginalIsBoundary(originalStart) || this._OriginalIsBoundary(originalStart - 1)) {
            return true;
        }
        if (originalLength > 0) {
            var originalEnd = originalStart + originalLength;
            if (this._OriginalIsBoundary(originalEnd - 1) || this._OriginalIsBoundary(originalEnd)) {
                return true;
            }
        }
        return false;
    };
    LcsDiff.prototype._ModifiedIsBoundary = function (index) {
        if (index <= 0 || index >= this.ModifiedSequence.getLength() - 1) {
            return true;
        }
        var element = this.ModifiedSequence.getElementAtIndex(index);
        return (typeof element === 'string' && /^\s*$/.test(element));
    };
    LcsDiff.prototype._ModifiedRegionIsBoundary = function (modifiedStart, modifiedLength) {
        if (this._ModifiedIsBoundary(modifiedStart) || this._ModifiedIsBoundary(modifiedStart - 1)) {
            return true;
        }
        if (modifiedLength > 0) {
            var modifiedEnd = modifiedStart + modifiedLength;
            if (this._ModifiedIsBoundary(modifiedEnd - 1) || this._ModifiedIsBoundary(modifiedEnd)) {
                return true;
            }
        }
        return false;
    };
    LcsDiff.prototype._boundaryScore = function (originalStart, originalLength, modifiedStart, modifiedLength) {
        var originalScore = (this._OriginalRegionIsBoundary(originalStart, originalLength) ? 1 : 0);
        var modifiedScore = (this._ModifiedRegionIsBoundary(modifiedStart, modifiedLength) ? 1 : 0);
        return (originalScore + modifiedScore);
    };
    /**
     * Concatenates the two input DiffChange lists and returns the resulting
     * list.
     * @param The left changes
     * @param The right changes
     * @returns The concatenated list
     */
    LcsDiff.prototype.ConcatenateChanges = function (left, right) {
        var mergedChangeArr = [];
        if (left.length === 0 || right.length === 0) {
            return (right.length > 0) ? right : left;
        }
        else if (this.ChangesOverlap(left[left.length - 1], right[0], mergedChangeArr)) {
            // Since we break the problem down recursively, it is possible that we
            // might recurse in the middle of a change thereby splitting it into
            // two changes. Here in the combining stage, we detect and fuse those
            // changes back together
            var result = new Array(left.length + right.length - 1);
            MyArray.Copy(left, 0, result, 0, left.length - 1);
            result[left.length - 1] = mergedChangeArr[0];
            MyArray.Copy(right, 1, result, left.length, right.length - 1);
            return result;
        }
        else {
            var result = new Array(left.length + right.length);
            MyArray.Copy(left, 0, result, 0, left.length);
            MyArray.Copy(right, 0, result, left.length, right.length);
            return result;
        }
    };
    /**
     * Returns true if the two changes overlap and can be merged into a single
     * change
     * @param left The left change
     * @param right The right change
     * @param mergedChange The merged change if the two overlap, null otherwise
     * @returns True if the two changes overlap
     */
    LcsDiff.prototype.ChangesOverlap = function (left, right, mergedChangeArr) {
        Debug.Assert(left.originalStart <= right.originalStart, 'Left change is not less than or equal to right change');
        Debug.Assert(left.modifiedStart <= right.modifiedStart, 'Left change is not less than or equal to right change');
        if (left.originalStart + left.originalLength >= right.originalStart || left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
            var originalStart = left.originalStart;
            var originalLength = left.originalLength;
            var modifiedStart = left.modifiedStart;
            var modifiedLength = left.modifiedLength;
            if (left.originalStart + left.originalLength >= right.originalStart) {
                originalLength = right.originalStart + right.originalLength - left.originalStart;
            }
            if (left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
                modifiedLength = right.modifiedStart + right.modifiedLength - left.modifiedStart;
            }
            mergedChangeArr[0] = new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalLength, modifiedStart, modifiedLength);
            return true;
        }
        else {
            mergedChangeArr[0] = null;
            return false;
        }
    };
    /**
     * Helper method used to clip a diagonal index to the range of valid
     * diagonals. This also decides whether or not the diagonal index,
     * if it exceeds the boundary, should be clipped to the boundary or clipped
     * one inside the boundary depending on the Even/Odd status of the boundary
     * and numDifferences.
     * @param diagonal The index of the diagonal to clip.
     * @param numDifferences The current number of differences being iterated upon.
     * @param diagonalBaseIndex The base reference diagonal.
     * @param numDiagonals The total number of diagonals.
     * @returns The clipped diagonal index.
     */
    LcsDiff.prototype.ClipDiagonalBound = function (diagonal, numDifferences, diagonalBaseIndex, numDiagonals) {
        if (diagonal >= 0 && diagonal < numDiagonals) {
            // Nothing to clip, its in range
            return diagonal;
        }
        // diagonalsBelow: The number of diagonals below the reference diagonal
        // diagonalsAbove: The number of diagonals above the reference diagonal
        var diagonalsBelow = diagonalBaseIndex;
        var diagonalsAbove = numDiagonals - diagonalBaseIndex - 1;
        var diffEven = (numDifferences % 2 === 0);
        if (diagonal < 0) {
            var lowerBoundEven = (diagonalsBelow % 2 === 0);
            return (diffEven === lowerBoundEven) ? 0 : 1;
        }
        else {
            var upperBoundEven = (diagonalsAbove % 2 === 0);
            return (diffEven === upperBoundEven) ? numDiagonals - 1 : numDiagonals - 2;
        }
    };
    return LcsDiff;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js ***!
  \**************************************************************************/
/*! exports provided: DiffChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffChange", function() { return DiffChange; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Represents information about a specific difference between two sequences.
 */
var DiffChange = /** @class */ (function () {
    /**
     * Constructs a new DiffChange with the given sequence information
     * and content.
     */
    function DiffChange(originalStart, originalLength, modifiedStart, modifiedLength) {
        //Debug.Assert(originalLength > 0 || modifiedLength > 0, "originalLength and modifiedLength cannot both be <= 0");
        this.originalStart = originalStart;
        this.originalLength = originalLength;
        this.modifiedStart = modifiedStart;
        this.modifiedLength = modifiedLength;
    }
    /**
     * The end point (exclusive) of the change in the original sequence.
     */
    DiffChange.prototype.getOriginalEnd = function () {
        return this.originalStart + this.originalLength;
    };
    /**
     * The end point (exclusive) of the change in the modified sequence.
     */
    DiffChange.prototype.getModifiedEnd = function () {
        return this.modifiedStart + this.modifiedLength;
    };
    return DiffChange;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/errors.js":
/*!*****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/errors.js ***!
  \*****************************************************************/
/*! exports provided: ErrorHandler, errorHandler, onUnexpectedError, onUnexpectedExternalError, transformErrorForSerialization, isPromiseCanceledError, canceled, illegalArgument, illegalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandler", function() { return errorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnexpectedError", function() { return onUnexpectedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnexpectedExternalError", function() { return onUnexpectedExternalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformErrorForSerialization", function() { return transformErrorForSerialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseCanceledError", function() { return isPromiseCanceledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canceled", function() { return canceled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "illegalArgument", function() { return illegalArgument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "illegalState", function() { return illegalState; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
        this.listeners = [];
        this.unexpectedErrorHandler = function (e) {
            setTimeout(function () {
                if (e.stack) {
                    throw new Error(e.message + '\n\n' + e.stack);
                }
                throw e;
            }, 0);
        };
    }
    ErrorHandler.prototype.emit = function (e) {
        this.listeners.forEach(function (listener) {
            listener(e);
        });
    };
    ErrorHandler.prototype.onUnexpectedError = function (e) {
        this.unexpectedErrorHandler(e);
        this.emit(e);
    };
    // For external errors, we don't want the listeners to be called
    ErrorHandler.prototype.onUnexpectedExternalError = function (e) {
        this.unexpectedErrorHandler(e);
    };
    return ErrorHandler;
}());

var errorHandler = new ErrorHandler();
function onUnexpectedError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        errorHandler.onUnexpectedError(e);
    }
    return undefined;
}
function onUnexpectedExternalError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        errorHandler.onUnexpectedExternalError(e);
    }
    return undefined;
}
function transformErrorForSerialization(error) {
    if (error instanceof Error) {
        var name_1 = error.name, message = error.message;
        var stack = error.stacktrace || error.stack;
        return {
            $isError: true,
            name: name_1,
            message: message,
            stack: stack
        };
    }
    // return as is
    return error;
}
var canceledName = 'Canceled';
/**
 * Checks if the given error is a promise in canceled state
 */
function isPromiseCanceledError(error) {
    return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
/**
 * Returns an error that signals cancellation.
 */
function canceled() {
    var error = new Error(canceledName);
    error.name = error.message;
    return error;
}
function illegalArgument(name) {
    if (name) {
        return new Error("Illegal argument: " + name);
    }
    else {
        return new Error('Illegal argument');
    }
}
function illegalState(name) {
    if (name) {
        return new Error("Illegal state: " + name);
    }
    else {
        return new Error('Illegal state');
    }
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/event.js":
/*!****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/event.js ***!
  \****************************************************************/
/*! exports provided: Event, Emitter, PauseableEmitter, EventMultiplexer, EventBufferer, Relay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseableEmitter", function() { return PauseableEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventMultiplexer", function() { return EventMultiplexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBufferer", function() { return EventBufferer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relay", function() { return Relay; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js");
/* harmony import */ var _functional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functional.js */ "./node_modules/monaco-editor/esm/vs/base/common/functional.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifecycle.js */ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js");
/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkedList.js */ "./node_modules/monaco-editor/esm/vs/base/common/linkedList.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Event;
(function (Event) {
    Event.None = function () { return _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["Disposable"].None; };
    /**
     * Given an event, returns another event which only fires once.
     */
    function once(event) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            // we need this, in case the event fires during the listener call
            var didFire = false;
            var result;
            result = event(function (e) {
                if (didFire) {
                    return;
                }
                else if (result) {
                    result.dispose();
                }
                else {
                    didFire = true;
                }
                return listener.call(thisArgs, e);
            }, null, disposables);
            if (didFire) {
                result.dispose();
            }
            return result;
        };
    }
    Event.once = once;
    /**
     * Given an event and a `map` function, returns another event which maps each element
     * through the mapping function.
     */
    function map(event, map) {
        return snapshot(function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (i) { return listener.call(thisArgs, map(i)); }, null, disposables);
        });
    }
    Event.map = map;
    /**
     * Given an event and an `each` function, returns another identical event and calls
     * the `each` function per each element.
     */
    function forEach(event, each) {
        return snapshot(function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (i) { each(i); listener.call(thisArgs, i); }, null, disposables);
        });
    }
    Event.forEach = forEach;
    function filter(event, filter) {
        return snapshot(function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (e) { return filter(e) && listener.call(thisArgs, e); }, null, disposables);
        });
    }
    Event.filter = filter;
    /**
     * Given an event, returns the same event but typed as `Event<void>`.
     */
    function signal(event) {
        return event;
    }
    Event.signal = signal;
    /**
     * Given a collection of events, returns a single event which emits
     * whenever any of the provided events emit.
     */
    function any() {
        var events = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            events[_i] = arguments[_i];
        }
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["combinedDisposable"].apply(void 0, events.map(function (event) { return event(function (e) { return listener.call(thisArgs, e); }, null, disposables); }));
        };
    }
    Event.any = any;
    /**
     * Given an event and a `merge` function, returns another event which maps each element
     * and the cumulative result through the `merge` function. Similar to `map`, but with memory.
     */
    function reduce(event, merge, initial) {
        var output = initial;
        return map(event, function (e) {
            output = merge(output, e);
            return output;
        });
    }
    Event.reduce = reduce;
    /**
     * Given a chain of event processing functions (filter, map, etc), each
     * function will be invoked per event & per listener. Snapshotting an event
     * chain allows each function to be invoked just once per event.
     */
    function snapshot(event) {
        var listener;
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                listener = event(emitter.fire, emitter);
            },
            onLastListenerRemove: function () {
                listener.dispose();
            }
        });
        return emitter.event;
    }
    Event.snapshot = snapshot;
    function debounce(event, merge, delay, leading, leakWarningThreshold) {
        if (delay === void 0) { delay = 100; }
        if (leading === void 0) { leading = false; }
        var subscription;
        var output = undefined;
        var handle = undefined;
        var numDebouncedCalls = 0;
        var emitter = new Emitter({
            leakWarningThreshold: leakWarningThreshold,
            onFirstListenerAdd: function () {
                subscription = event(function (cur) {
                    numDebouncedCalls++;
                    output = merge(output, cur);
                    if (leading && !handle) {
                        emitter.fire(output);
                    }
                    clearTimeout(handle);
                    handle = setTimeout(function () {
                        var _output = output;
                        output = undefined;
                        handle = undefined;
                        if (!leading || numDebouncedCalls > 1) {
                            emitter.fire(_output);
                        }
                        numDebouncedCalls = 0;
                    }, delay);
                });
            },
            onLastListenerRemove: function () {
                subscription.dispose();
            }
        });
        return emitter.event;
    }
    Event.debounce = debounce;
    /**
     * Given an event, it returns another event which fires only once and as soon as
     * the input event emits. The event data is the number of millis it took for the
     * event to fire.
     */
    function stopwatch(event) {
        var start = new Date().getTime();
        return map(once(event), function (_) { return new Date().getTime() - start; });
    }
    Event.stopwatch = stopwatch;
    /**
     * Given an event, it returns another event which fires only when the event
     * element changes.
     */
    function latch(event) {
        var firstCall = true;
        var cache;
        return filter(event, function (value) {
            var shouldEmit = firstCall || value !== cache;
            firstCall = false;
            cache = value;
            return shouldEmit;
        });
    }
    Event.latch = latch;
    /**
     * Buffers the provided event until a first listener comes
     * along, at which point fire all the events at once and
     * pipe the event from then on.
     *
     * ```typescript
     * const emitter = new Emitter<number>();
     * const event = emitter.event;
     * const bufferedEvent = buffer(event);
     *
     * emitter.fire(1);
     * emitter.fire(2);
     * emitter.fire(3);
     * // nothing...
     *
     * const listener = bufferedEvent(num => console.log(num));
     * // 1, 2, 3
     *
     * emitter.fire(4);
     * // 4
     * ```
     */
    function buffer(event, nextTick, _buffer) {
        if (nextTick === void 0) { nextTick = false; }
        if (_buffer === void 0) { _buffer = []; }
        var buffer = _buffer.slice();
        var listener = event(function (e) {
            if (buffer) {
                buffer.push(e);
            }
            else {
                emitter.fire(e);
            }
        });
        var flush = function () {
            if (buffer) {
                buffer.forEach(function (e) { return emitter.fire(e); });
            }
            buffer = null;
        };
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                if (!listener) {
                    listener = event(function (e) { return emitter.fire(e); });
                }
            },
            onFirstListenerDidAdd: function () {
                if (buffer) {
                    if (nextTick) {
                        setTimeout(flush);
                    }
                    else {
                        flush();
                    }
                }
            },
            onLastListenerRemove: function () {
                if (listener) {
                    listener.dispose();
                }
                listener = null;
            }
        });
        return emitter.event;
    }
    Event.buffer = buffer;
    var ChainableEvent = /** @class */ (function () {
        function ChainableEvent(event) {
            this.event = event;
        }
        ChainableEvent.prototype.map = function (fn) {
            return new ChainableEvent(map(this.event, fn));
        };
        ChainableEvent.prototype.forEach = function (fn) {
            return new ChainableEvent(forEach(this.event, fn));
        };
        ChainableEvent.prototype.filter = function (fn) {
            return new ChainableEvent(filter(this.event, fn));
        };
        ChainableEvent.prototype.reduce = function (merge, initial) {
            return new ChainableEvent(reduce(this.event, merge, initial));
        };
        ChainableEvent.prototype.latch = function () {
            return new ChainableEvent(latch(this.event));
        };
        ChainableEvent.prototype.on = function (listener, thisArgs, disposables) {
            return this.event(listener, thisArgs, disposables);
        };
        ChainableEvent.prototype.once = function (listener, thisArgs, disposables) {
            return once(this.event)(listener, thisArgs, disposables);
        };
        return ChainableEvent;
    }());
    function chain(event) {
        return new ChainableEvent(event);
    }
    Event.chain = chain;
    function fromNodeEventEmitter(emitter, eventName, map) {
        if (map === void 0) { map = function (id) { return id; }; }
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return result.fire(map.apply(void 0, args));
        };
        var onFirstListenerAdd = function () { return emitter.on(eventName, fn); };
        var onLastListenerRemove = function () { return emitter.removeListener(eventName, fn); };
        var result = new Emitter({ onFirstListenerAdd: onFirstListenerAdd, onLastListenerRemove: onLastListenerRemove });
        return result.event;
    }
    Event.fromNodeEventEmitter = fromNodeEventEmitter;
    function fromDOMEventEmitter(emitter, eventName, map) {
        if (map === void 0) { map = function (id) { return id; }; }
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return result.fire(map.apply(void 0, args));
        };
        var onFirstListenerAdd = function () { return emitter.addEventListener(eventName, fn); };
        var onLastListenerRemove = function () { return emitter.removeEventListener(eventName, fn); };
        var result = new Emitter({ onFirstListenerAdd: onFirstListenerAdd, onLastListenerRemove: onLastListenerRemove });
        return result.event;
    }
    Event.fromDOMEventEmitter = fromDOMEventEmitter;
    function fromPromise(promise) {
        var emitter = new Emitter();
        var shouldEmit = false;
        promise
            .then(undefined, function () { return null; })
            .then(function () {
            if (!shouldEmit) {
                setTimeout(function () { return emitter.fire(undefined); }, 0);
            }
            else {
                emitter.fire(undefined);
            }
        });
        shouldEmit = true;
        return emitter.event;
    }
    Event.fromPromise = fromPromise;
    function toPromise(event) {
        return new Promise(function (c) { return once(event)(c); });
    }
    Event.toPromise = toPromise;
})(Event || (Event = {}));
var _globalLeakWarningThreshold = -1;
var LeakageMonitor = /** @class */ (function () {
    function LeakageMonitor(customThreshold, name) {
        if (name === void 0) { name = Math.random().toString(18).slice(2, 5); }
        this.customThreshold = customThreshold;
        this.name = name;
        this._warnCountdown = 0;
    }
    LeakageMonitor.prototype.dispose = function () {
        if (this._stacks) {
            this._stacks.clear();
        }
    };
    LeakageMonitor.prototype.check = function (listenerCount) {
        var _this = this;
        var threshold = _globalLeakWarningThreshold;
        if (typeof this.customThreshold === 'number') {
            threshold = this.customThreshold;
        }
        if (threshold <= 0 || listenerCount < threshold) {
            return undefined;
        }
        if (!this._stacks) {
            this._stacks = new Map();
        }
        var stack = new Error().stack.split('\n').slice(3).join('\n');
        var count = (this._stacks.get(stack) || 0);
        this._stacks.set(stack, count + 1);
        this._warnCountdown -= 1;
        if (this._warnCountdown <= 0) {
            // only warn on first exceed and then every time the limit
            // is exceeded by 50% again
            this._warnCountdown = threshold * 0.5;
            // find most frequent listener and print warning
            var topStack_1;
            var topCount_1 = 0;
            this._stacks.forEach(function (count, stack) {
                if (!topStack_1 || topCount_1 < count) {
                    topStack_1 = stack;
                    topCount_1 = count;
                }
            });
            console.warn("[" + this.name + "] potential listener LEAK detected, having " + listenerCount + " listeners already. MOST frequent listener (" + topCount_1 + "):");
            console.warn(topStack_1);
        }
        return function () {
            var count = (_this._stacks.get(stack) || 0);
            _this._stacks.set(stack, count - 1);
        };
    };
    return LeakageMonitor;
}());
/**
 * The Emitter can be used to expose an Event to the public
 * to fire it from the insides.
 * Sample:
    class Document {

        private _onDidChange = new Emitter<(value:string)=>any>();

        public onDidChange = this._onDidChange.event;

        // getter-style
        // get onDidChange(): Event<(value:string)=>any> {
        // 	return this._onDidChange.event;
        // }

        private _doIt() {
            //...
            this._onDidChange.fire(value);
        }
    }
 */
var Emitter = /** @class */ (function () {
    function Emitter(options) {
        this._disposed = false;
        this._options = options;
        this._leakageMon = _globalLeakWarningThreshold > 0
            ? new LeakageMonitor(this._options && this._options.leakWarningThreshold)
            : undefined;
    }
    Object.defineProperty(Emitter.prototype, "event", {
        /**
         * For the public to allow to subscribe
         * to events from this Emitter
         */
        get: function () {
            var _this = this;
            if (!this._event) {
                this._event = function (listener, thisArgs, disposables) {
                    if (!_this._listeners) {
                        _this._listeners = new _linkedList_js__WEBPACK_IMPORTED_MODULE_3__["LinkedList"]();
                    }
                    var firstListener = _this._listeners.isEmpty();
                    if (firstListener && _this._options && _this._options.onFirstListenerAdd) {
                        _this._options.onFirstListenerAdd(_this);
                    }
                    var remove = _this._listeners.push(!thisArgs ? listener : [listener, thisArgs]);
                    if (firstListener && _this._options && _this._options.onFirstListenerDidAdd) {
                        _this._options.onFirstListenerDidAdd(_this);
                    }
                    if (_this._options && _this._options.onListenerDidAdd) {
                        _this._options.onListenerDidAdd(_this, listener, thisArgs);
                    }
                    // check and record this emitter for potential leakage
                    var removeMonitor;
                    if (_this._leakageMon) {
                        removeMonitor = _this._leakageMon.check(_this._listeners.size);
                    }
                    var result;
                    result = {
                        dispose: function () {
                            if (removeMonitor) {
                                removeMonitor();
                            }
                            result.dispose = Emitter._noop;
                            if (!_this._disposed) {
                                remove();
                                if (_this._options && _this._options.onLastListenerRemove) {
                                    var hasListeners = (_this._listeners && !_this._listeners.isEmpty());
                                    if (!hasListeners) {
                                        _this._options.onLastListenerRemove(_this);
                                    }
                                }
                            }
                        }
                    };
                    if (disposables instanceof _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["DisposableStore"]) {
                        disposables.add(result);
                    }
                    else if (Array.isArray(disposables)) {
                        disposables.push(result);
                    }
                    return result;
                };
            }
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    Emitter.prototype.fire = function (event) {
        if (this._listeners) {
            // put all [listener,event]-pairs into delivery queue
            // then emit all event. an inner/nested event might be
            // the driver of this
            if (!this._deliveryQueue) {
                this._deliveryQueue = new _linkedList_js__WEBPACK_IMPORTED_MODULE_3__["LinkedList"]();
            }
            for (var iter = this._listeners.iterator(), e = iter.next(); !e.done; e = iter.next()) {
                this._deliveryQueue.push([e.value, event]);
            }
            while (this._deliveryQueue.size > 0) {
                var _a = this._deliveryQueue.shift(), listener = _a[0], event_1 = _a[1];
                try {
                    if (typeof listener === 'function') {
                        listener.call(undefined, event_1);
                    }
                    else {
                        listener[0].call(listener[1], event_1);
                    }
                }
                catch (e) {
                    Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["onUnexpectedError"])(e);
                }
            }
        }
    };
    Emitter.prototype.dispose = function () {
        if (this._listeners) {
            this._listeners.clear();
        }
        if (this._deliveryQueue) {
            this._deliveryQueue.clear();
        }
        if (this._leakageMon) {
            this._leakageMon.dispose();
        }
        this._disposed = true;
    };
    Emitter._noop = function () { };
    return Emitter;
}());

var PauseableEmitter = /** @class */ (function (_super) {
    __extends(PauseableEmitter, _super);
    function PauseableEmitter(options) {
        var _this = _super.call(this, options) || this;
        _this._isPaused = 0;
        _this._eventQueue = new _linkedList_js__WEBPACK_IMPORTED_MODULE_3__["LinkedList"]();
        _this._mergeFn = options && options.merge;
        return _this;
    }
    PauseableEmitter.prototype.pause = function () {
        this._isPaused++;
    };
    PauseableEmitter.prototype.resume = function () {
        if (this._isPaused !== 0 && --this._isPaused === 0) {
            if (this._mergeFn) {
                // use the merge function to create a single composite
                // event. make a copy in case firing pauses this emitter
                var events = this._eventQueue.toArray();
                this._eventQueue.clear();
                _super.prototype.fire.call(this, this._mergeFn(events));
            }
            else {
                // no merging, fire each event individually and test
                // that this emitter isn't paused halfway through
                while (!this._isPaused && this._eventQueue.size !== 0) {
                    _super.prototype.fire.call(this, this._eventQueue.shift());
                }
            }
        }
    };
    PauseableEmitter.prototype.fire = function (event) {
        if (this._listeners) {
            if (this._isPaused !== 0) {
                this._eventQueue.push(event);
            }
            else {
                _super.prototype.fire.call(this, event);
            }
        }
    };
    return PauseableEmitter;
}(Emitter));

var EventMultiplexer = /** @class */ (function () {
    function EventMultiplexer() {
        var _this = this;
        this.hasListeners = false;
        this.events = [];
        this.emitter = new Emitter({
            onFirstListenerAdd: function () { return _this.onFirstListenerAdd(); },
            onLastListenerRemove: function () { return _this.onLastListenerRemove(); }
        });
    }
    Object.defineProperty(EventMultiplexer.prototype, "event", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    EventMultiplexer.prototype.add = function (event) {
        var _this = this;
        var e = { event: event, listener: null };
        this.events.push(e);
        if (this.hasListeners) {
            this.hook(e);
        }
        var dispose = function () {
            if (_this.hasListeners) {
                _this.unhook(e);
            }
            var idx = _this.events.indexOf(e);
            _this.events.splice(idx, 1);
        };
        return Object(_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["toDisposable"])(Object(_functional_js__WEBPACK_IMPORTED_MODULE_1__["once"])(dispose));
    };
    EventMultiplexer.prototype.onFirstListenerAdd = function () {
        var _this = this;
        this.hasListeners = true;
        this.events.forEach(function (e) { return _this.hook(e); });
    };
    EventMultiplexer.prototype.onLastListenerRemove = function () {
        var _this = this;
        this.hasListeners = false;
        this.events.forEach(function (e) { return _this.unhook(e); });
    };
    EventMultiplexer.prototype.hook = function (e) {
        var _this = this;
        e.listener = e.event(function (r) { return _this.emitter.fire(r); });
    };
    EventMultiplexer.prototype.unhook = function (e) {
        if (e.listener) {
            e.listener.dispose();
        }
        e.listener = null;
    };
    EventMultiplexer.prototype.dispose = function () {
        this.emitter.dispose();
    };
    return EventMultiplexer;
}());

/**
 * The EventBufferer is useful in situations in which you want
 * to delay firing your events during some code.
 * You can wrap that code and be sure that the event will not
 * be fired during that wrap.
 *
 * ```
 * const emitter: Emitter;
 * const delayer = new EventDelayer();
 * const delayedEvent = delayer.wrapEvent(emitter.event);
 *
 * delayedEvent(console.log);
 *
 * delayer.bufferEvents(() => {
 *   emitter.fire(); // event will not be fired yet
 * });
 *
 * // event will only be fired at this point
 * ```
 */
var EventBufferer = /** @class */ (function () {
    function EventBufferer() {
        this.buffers = [];
    }
    EventBufferer.prototype.wrapEvent = function (event) {
        var _this = this;
        return function (listener, thisArgs, disposables) {
            return event(function (i) {
                var buffer = _this.buffers[_this.buffers.length - 1];
                if (buffer) {
                    buffer.push(function () { return listener.call(thisArgs, i); });
                }
                else {
                    listener.call(thisArgs, i);
                }
            }, undefined, disposables);
        };
    };
    EventBufferer.prototype.bufferEvents = function (fn) {
        var buffer = [];
        this.buffers.push(buffer);
        var r = fn();
        this.buffers.pop();
        buffer.forEach(function (flush) { return flush(); });
        return r;
    };
    return EventBufferer;
}());

/**
 * A Relay is an event forwarder which functions as a replugabble event pipe.
 * Once created, you can connect an input event to it and it will simply forward
 * events from that input event through its own `event` property. The `input`
 * can be changed at any point in time.
 */
var Relay = /** @class */ (function () {
    function Relay() {
        var _this = this;
        this.listening = false;
        this.inputEvent = Event.None;
        this.inputEventListener = _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["Disposable"].None;
        this.emitter = new Emitter({
            onFirstListenerDidAdd: function () {
                _this.listening = true;
                _this.inputEventListener = _this.inputEvent(_this.emitter.fire, _this.emitter);
            },
            onLastListenerRemove: function () {
                _this.listening = false;
                _this.inputEventListener.dispose();
            }
        });
        this.event = this.emitter.event;
    }
    Object.defineProperty(Relay.prototype, "input", {
        set: function (event) {
            this.inputEvent = event;
            if (this.listening) {
                this.inputEventListener.dispose();
                this.inputEventListener = event(this.emitter.fire, this.emitter);
            }
        },
        enumerable: true,
        configurable: true
    });
    Relay.prototype.dispose = function () {
        this.inputEventListener.dispose();
        this.emitter.dispose();
    };
    return Relay;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/functional.js":
/*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/functional.js ***!
  \*********************************************************************/
/*! exports provided: once */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function once(fn) {
    var _this = this;
    var didCall = false;
    var result;
    return function () {
        if (didCall) {
            return result;
        }
        didCall = true;
        result = fn.apply(_this, arguments);
        return result;
    };
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/iterator.js ***!
  \*******************************************************************/
/*! exports provided: FIN, Iterator, getSequenceIterator, ArrayIterator, ArrayNavigator, MappedIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIN", function() { return FIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterator", function() { return Iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSequenceIterator", function() { return getSequenceIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayIterator", function() { return ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayNavigator", function() { return ArrayNavigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappedIterator", function() { return MappedIterator; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FIN = { done: true, value: undefined };
var Iterator;
(function (Iterator) {
    var _empty = {
        next: function () {
            return FIN;
        }
    };
    function empty() {
        return _empty;
    }
    Iterator.empty = empty;
    function single(value) {
        var done = false;
        return {
            next: function () {
                if (done) {
                    return FIN;
                }
                done = true;
                return { done: false, value: value };
            }
        };
    }
    Iterator.single = single;
    function fromArray(array, index, length) {
        if (index === void 0) { index = 0; }
        if (length === void 0) { length = array.length; }
        return {
            next: function () {
                if (index >= length) {
                    return FIN;
                }
                return { done: false, value: array[index++] };
            }
        };
    }
    Iterator.fromArray = fromArray;
    function from(elements) {
        if (!elements) {
            return Iterator.empty();
        }
        else if (Array.isArray(elements)) {
            return Iterator.fromArray(elements);
        }
        else {
            return elements;
        }
    }
    Iterator.from = from;
    function map(iterator, fn) {
        return {
            next: function () {
                var element = iterator.next();
                if (element.done) {
                    return FIN;
                }
                else {
                    return { done: false, value: fn(element.value) };
                }
            }
        };
    }
    Iterator.map = map;
    function filter(iterator, fn) {
        return {
            next: function () {
                while (true) {
                    var element = iterator.next();
                    if (element.done) {
                        return FIN;
                    }
                    if (fn(element.value)) {
                        return { done: false, value: element.value };
                    }
                }
            }
        };
    }
    Iterator.filter = filter;
    function forEach(iterator, fn) {
        for (var next = iterator.next(); !next.done; next = iterator.next()) {
            fn(next.value);
        }
    }
    Iterator.forEach = forEach;
    function collect(iterator, atMost) {
        if (atMost === void 0) { atMost = Number.POSITIVE_INFINITY; }
        var result = [];
        if (atMost === 0) {
            return result;
        }
        var i = 0;
        for (var next = iterator.next(); !next.done; next = iterator.next()) {
            result.push(next.value);
            if (++i >= atMost) {
                break;
            }
        }
        return result;
    }
    Iterator.collect = collect;
    function concat() {
        var iterators = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            iterators[_i] = arguments[_i];
        }
        var i = 0;
        return {
            next: function () {
                if (i >= iterators.length) {
                    return FIN;
                }
                var iterator = iterators[i];
                var result = iterator.next();
                if (result.done) {
                    i++;
                    return this.next();
                }
                return result;
            }
        };
    }
    Iterator.concat = concat;
})(Iterator || (Iterator = {}));
function getSequenceIterator(arg) {
    if (Array.isArray(arg)) {
        return Iterator.fromArray(arg);
    }
    else {
        return arg;
    }
}
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(items, start, end, index) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = items.length; }
        if (index === void 0) { index = start - 1; }
        this.items = items;
        this.start = start;
        this.end = end;
        this.index = index;
    }
    ArrayIterator.prototype.first = function () {
        this.index = this.start;
        return this.current();
    };
    ArrayIterator.prototype.next = function () {
        this.index = Math.min(this.index + 1, this.end);
        return this.current();
    };
    ArrayIterator.prototype.current = function () {
        if (this.index === this.start - 1 || this.index === this.end) {
            return null;
        }
        return this.items[this.index];
    };
    return ArrayIterator;
}());

var ArrayNavigator = /** @class */ (function (_super) {
    __extends(ArrayNavigator, _super);
    function ArrayNavigator(items, start, end, index) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = items.length; }
        if (index === void 0) { index = start - 1; }
        return _super.call(this, items, start, end, index) || this;
    }
    ArrayNavigator.prototype.current = function () {
        return _super.prototype.current.call(this);
    };
    ArrayNavigator.prototype.previous = function () {
        this.index = Math.max(this.index - 1, this.start - 1);
        return this.current();
    };
    ArrayNavigator.prototype.first = function () {
        this.index = this.start;
        return this.current();
    };
    ArrayNavigator.prototype.last = function () {
        this.index = this.end - 1;
        return this.current();
    };
    ArrayNavigator.prototype.parent = function () {
        return null;
    };
    return ArrayNavigator;
}(ArrayIterator));

var MappedIterator = /** @class */ (function () {
    function MappedIterator(iterator, fn) {
        this.iterator = iterator;
        this.fn = fn;
        // noop
    }
    MappedIterator.prototype.next = function () { return this.fn(this.iterator.next()); };
    return MappedIterator;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js ***!
  \*******************************************************************/
/*! exports provided: KeyCodeUtils, KeyChord, createKeybinding, createSimpleKeybinding, SimpleKeybinding, ChordKeybinding, ResolvedKeybindingPart, ResolvedKeybinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodeUtils", function() { return KeyCodeUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyChord", function() { return KeyChord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKeybinding", function() { return createKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSimpleKeybinding", function() { return createSimpleKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleKeybinding", function() { return SimpleKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordKeybinding", function() { return ChordKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvedKeybindingPart", function() { return ResolvedKeybindingPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvedKeybinding", function() { return ResolvedKeybinding; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var KeyCodeStrMap = /** @class */ (function () {
    function KeyCodeStrMap() {
        this._keyCodeToStr = [];
        this._strToKeyCode = Object.create(null);
    }
    KeyCodeStrMap.prototype.define = function (keyCode, str) {
        this._keyCodeToStr[keyCode] = str;
        this._strToKeyCode[str.toLowerCase()] = keyCode;
    };
    KeyCodeStrMap.prototype.keyCodeToStr = function (keyCode) {
        return this._keyCodeToStr[keyCode];
    };
    KeyCodeStrMap.prototype.strToKeyCode = function (str) {
        return this._strToKeyCode[str.toLowerCase()] || 0 /* Unknown */;
    };
    return KeyCodeStrMap;
}());
var uiMap = new KeyCodeStrMap();
var userSettingsUSMap = new KeyCodeStrMap();
var userSettingsGeneralMap = new KeyCodeStrMap();
(function () {
    function define(keyCode, uiLabel, usUserSettingsLabel, generalUserSettingsLabel) {
        if (usUserSettingsLabel === void 0) { usUserSettingsLabel = uiLabel; }
        if (generalUserSettingsLabel === void 0) { generalUserSettingsLabel = usUserSettingsLabel; }
        uiMap.define(keyCode, uiLabel);
        userSettingsUSMap.define(keyCode, usUserSettingsLabel);
        userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel);
    }
    define(0 /* Unknown */, 'unknown');
    define(1 /* Backspace */, 'Backspace');
    define(2 /* Tab */, 'Tab');
    define(3 /* Enter */, 'Enter');
    define(4 /* Shift */, 'Shift');
    define(5 /* Ctrl */, 'Ctrl');
    define(6 /* Alt */, 'Alt');
    define(7 /* PauseBreak */, 'PauseBreak');
    define(8 /* CapsLock */, 'CapsLock');
    define(9 /* Escape */, 'Escape');
    define(10 /* Space */, 'Space');
    define(11 /* PageUp */, 'PageUp');
    define(12 /* PageDown */, 'PageDown');
    define(13 /* End */, 'End');
    define(14 /* Home */, 'Home');
    define(15 /* LeftArrow */, 'LeftArrow', 'Left');
    define(16 /* UpArrow */, 'UpArrow', 'Up');
    define(17 /* RightArrow */, 'RightArrow', 'Right');
    define(18 /* DownArrow */, 'DownArrow', 'Down');
    define(19 /* Insert */, 'Insert');
    define(20 /* Delete */, 'Delete');
    define(21 /* KEY_0 */, '0');
    define(22 /* KEY_1 */, '1');
    define(23 /* KEY_2 */, '2');
    define(24 /* KEY_3 */, '3');
    define(25 /* KEY_4 */, '4');
    define(26 /* KEY_5 */, '5');
    define(27 /* KEY_6 */, '6');
    define(28 /* KEY_7 */, '7');
    define(29 /* KEY_8 */, '8');
    define(30 /* KEY_9 */, '9');
    define(31 /* KEY_A */, 'A');
    define(32 /* KEY_B */, 'B');
    define(33 /* KEY_C */, 'C');
    define(34 /* KEY_D */, 'D');
    define(35 /* KEY_E */, 'E');
    define(36 /* KEY_F */, 'F');
    define(37 /* KEY_G */, 'G');
    define(38 /* KEY_H */, 'H');
    define(39 /* KEY_I */, 'I');
    define(40 /* KEY_J */, 'J');
    define(41 /* KEY_K */, 'K');
    define(42 /* KEY_L */, 'L');
    define(43 /* KEY_M */, 'M');
    define(44 /* KEY_N */, 'N');
    define(45 /* KEY_O */, 'O');
    define(46 /* KEY_P */, 'P');
    define(47 /* KEY_Q */, 'Q');
    define(48 /* KEY_R */, 'R');
    define(49 /* KEY_S */, 'S');
    define(50 /* KEY_T */, 'T');
    define(51 /* KEY_U */, 'U');
    define(52 /* KEY_V */, 'V');
    define(53 /* KEY_W */, 'W');
    define(54 /* KEY_X */, 'X');
    define(55 /* KEY_Y */, 'Y');
    define(56 /* KEY_Z */, 'Z');
    define(57 /* Meta */, 'Meta');
    define(58 /* ContextMenu */, 'ContextMenu');
    define(59 /* F1 */, 'F1');
    define(60 /* F2 */, 'F2');
    define(61 /* F3 */, 'F3');
    define(62 /* F4 */, 'F4');
    define(63 /* F5 */, 'F5');
    define(64 /* F6 */, 'F6');
    define(65 /* F7 */, 'F7');
    define(66 /* F8 */, 'F8');
    define(67 /* F9 */, 'F9');
    define(68 /* F10 */, 'F10');
    define(69 /* F11 */, 'F11');
    define(70 /* F12 */, 'F12');
    define(71 /* F13 */, 'F13');
    define(72 /* F14 */, 'F14');
    define(73 /* F15 */, 'F15');
    define(74 /* F16 */, 'F16');
    define(75 /* F17 */, 'F17');
    define(76 /* F18 */, 'F18');
    define(77 /* F19 */, 'F19');
    define(78 /* NumLock */, 'NumLock');
    define(79 /* ScrollLock */, 'ScrollLock');
    define(80 /* US_SEMICOLON */, ';', ';', 'OEM_1');
    define(81 /* US_EQUAL */, '=', '=', 'OEM_PLUS');
    define(82 /* US_COMMA */, ',', ',', 'OEM_COMMA');
    define(83 /* US_MINUS */, '-', '-', 'OEM_MINUS');
    define(84 /* US_DOT */, '.', '.', 'OEM_PERIOD');
    define(85 /* US_SLASH */, '/', '/', 'OEM_2');
    define(86 /* US_BACKTICK */, '`', '`', 'OEM_3');
    define(110 /* ABNT_C1 */, 'ABNT_C1');
    define(111 /* ABNT_C2 */, 'ABNT_C2');
    define(87 /* US_OPEN_SQUARE_BRACKET */, '[', '[', 'OEM_4');
    define(88 /* US_BACKSLASH */, '\\', '\\', 'OEM_5');
    define(89 /* US_CLOSE_SQUARE_BRACKET */, ']', ']', 'OEM_6');
    define(90 /* US_QUOTE */, '\'', '\'', 'OEM_7');
    define(91 /* OEM_8 */, 'OEM_8');
    define(92 /* OEM_102 */, 'OEM_102');
    define(93 /* NUMPAD_0 */, 'NumPad0');
    define(94 /* NUMPAD_1 */, 'NumPad1');
    define(95 /* NUMPAD_2 */, 'NumPad2');
    define(96 /* NUMPAD_3 */, 'NumPad3');
    define(97 /* NUMPAD_4 */, 'NumPad4');
    define(98 /* NUMPAD_5 */, 'NumPad5');
    define(99 /* NUMPAD_6 */, 'NumPad6');
    define(100 /* NUMPAD_7 */, 'NumPad7');
    define(101 /* NUMPAD_8 */, 'NumPad8');
    define(102 /* NUMPAD_9 */, 'NumPad9');
    define(103 /* NUMPAD_MULTIPLY */, 'NumPad_Multiply');
    define(104 /* NUMPAD_ADD */, 'NumPad_Add');
    define(105 /* NUMPAD_SEPARATOR */, 'NumPad_Separator');
    define(106 /* NUMPAD_SUBTRACT */, 'NumPad_Subtract');
    define(107 /* NUMPAD_DECIMAL */, 'NumPad_Decimal');
    define(108 /* NUMPAD_DIVIDE */, 'NumPad_Divide');
})();
var KeyCodeUtils;
(function (KeyCodeUtils) {
    function toString(keyCode) {
        return uiMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toString = toString;
    function fromString(key) {
        return uiMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromString = fromString;
    function toUserSettingsUS(keyCode) {
        return userSettingsUSMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;
    function toUserSettingsGeneral(keyCode) {
        return userSettingsGeneralMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;
    function fromUserSettings(key) {
        return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromUserSettings = fromUserSettings;
})(KeyCodeUtils || (KeyCodeUtils = {}));
function KeyChord(firstPart, secondPart) {
    var chordPart = ((secondPart & 0x0000FFFF) << 16) >>> 0;
    return (firstPart | chordPart) >>> 0;
}
function createKeybinding(keybinding, OS) {
    if (keybinding === 0) {
        return null;
    }
    var firstPart = (keybinding & 0x0000FFFF) >>> 0;
    var chordPart = (keybinding & 0xFFFF0000) >>> 16;
    if (chordPart !== 0) {
        return new ChordKeybinding([
            createSimpleKeybinding(firstPart, OS),
            createSimpleKeybinding(chordPart, OS)
        ]);
    }
    return new ChordKeybinding([createSimpleKeybinding(firstPart, OS)]);
}
function createSimpleKeybinding(keybinding, OS) {
    var ctrlCmd = (keybinding & 2048 /* CtrlCmd */ ? true : false);
    var winCtrl = (keybinding & 256 /* WinCtrl */ ? true : false);
    var ctrlKey = (OS === 2 /* Macintosh */ ? winCtrl : ctrlCmd);
    var shiftKey = (keybinding & 1024 /* Shift */ ? true : false);
    var altKey = (keybinding & 512 /* Alt */ ? true : false);
    var metaKey = (OS === 2 /* Macintosh */ ? ctrlCmd : winCtrl);
    var keyCode = (keybinding & 255 /* KeyCode */);
    return new SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode);
}
var SimpleKeybinding = /** @class */ (function () {
    function SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode) {
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.altKey = altKey;
        this.metaKey = metaKey;
        this.keyCode = keyCode;
    }
    SimpleKeybinding.prototype.equals = function (other) {
        return (this.ctrlKey === other.ctrlKey
            && this.shiftKey === other.shiftKey
            && this.altKey === other.altKey
            && this.metaKey === other.metaKey
            && this.keyCode === other.keyCode);
    };
    SimpleKeybinding.prototype.isModifierKey = function () {
        return (this.keyCode === 0 /* Unknown */
            || this.keyCode === 5 /* Ctrl */
            || this.keyCode === 57 /* Meta */
            || this.keyCode === 6 /* Alt */
            || this.keyCode === 4 /* Shift */);
    };
    SimpleKeybinding.prototype.toChord = function () {
        return new ChordKeybinding([this]);
    };
    /**
     * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
     */
    SimpleKeybinding.prototype.isDuplicateModifierCase = function () {
        return ((this.ctrlKey && this.keyCode === 5 /* Ctrl */)
            || (this.shiftKey && this.keyCode === 4 /* Shift */)
            || (this.altKey && this.keyCode === 6 /* Alt */)
            || (this.metaKey && this.keyCode === 57 /* Meta */));
    };
    return SimpleKeybinding;
}());

var ChordKeybinding = /** @class */ (function () {
    function ChordKeybinding(parts) {
        if (parts.length === 0) {
            throw Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["illegalArgument"])("parts");
        }
        this.parts = parts;
    }
    ChordKeybinding.prototype.equals = function (other) {
        if (other === null) {
            return false;
        }
        if (this.parts.length !== other.parts.length) {
            return false;
        }
        for (var i = 0; i < this.parts.length; i++) {
            if (!this.parts[i].equals(other.parts[i])) {
                return false;
            }
        }
        return true;
    };
    return ChordKeybinding;
}());

var ResolvedKeybindingPart = /** @class */ (function () {
    function ResolvedKeybindingPart(ctrlKey, shiftKey, altKey, metaKey, kbLabel, kbAriaLabel) {
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.altKey = altKey;
        this.metaKey = metaKey;
        this.keyLabel = kbLabel;
        this.keyAriaLabel = kbAriaLabel;
    }
    return ResolvedKeybindingPart;
}());

/**
 * A resolved keybinding. Can be a simple keybinding or a chord keybinding.
 */
var ResolvedKeybinding = /** @class */ (function () {
    function ResolvedKeybinding() {
    }
    return ResolvedKeybinding;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js ***!
  \********************************************************************/
/*! exports provided: isDisposable, dispose, combinedDisposable, toDisposable, DisposableStore, Disposable, MutableDisposable, ImmortalReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisposable", function() { return isDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispose", function() { return dispose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinedDisposable", function() { return combinedDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDisposable", function() { return toDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposableStore", function() { return DisposableStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disposable", function() { return Disposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableDisposable", function() { return MutableDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmortalReference", function() { return ImmortalReference; });
/**
 * Enables logging of potentially leaked disposables.
 *
 * A disposable is considered leaked if it is not disposed or not registered as the child of
 * another disposable. This tracking is very simple an only works for classes that either
 * extend Disposable or use a DisposableStore. This means there are a lot of false positives.
 */
var TRACK_DISPOSABLES = false;
var __is_disposable_tracked__ = '__is_disposable_tracked__';
function markTracked(x) {
    if (!TRACK_DISPOSABLES) {
        return;
    }
    if (x && x !== Disposable.None) {
        try {
            x[__is_disposable_tracked__] = true;
        }
        catch (_a) {
            // noop
        }
    }
}
function trackDisposable(x) {
    if (!TRACK_DISPOSABLES) {
        return x;
    }
    var stack = new Error('Potentially leaked disposable').stack;
    setTimeout(function () {
        if (!x[__is_disposable_tracked__]) {
            console.log(stack);
        }
    }, 3000);
    return x;
}
function isDisposable(thing) {
    return typeof thing.dispose === 'function'
        && thing.dispose.length === 0;
}
function dispose(disposables) {
    if (Array.isArray(disposables)) {
        disposables.forEach(function (d) {
            if (d) {
                markTracked(d);
                d.dispose();
            }
        });
        return [];
    }
    else if (disposables) {
        markTracked(disposables);
        disposables.dispose();
        return disposables;
    }
    else {
        return undefined;
    }
}
function combinedDisposable() {
    var disposables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        disposables[_i] = arguments[_i];
    }
    disposables.forEach(markTracked);
    return trackDisposable({ dispose: function () { return dispose(disposables); } });
}
function toDisposable(fn) {
    var self = trackDisposable({
        dispose: function () {
            markTracked(self);
            fn();
        }
    });
    return self;
}
var DisposableStore = /** @class */ (function () {
    function DisposableStore() {
        this._toDispose = new Set();
        this._isDisposed = false;
    }
    /**
     * Dispose of all registered disposables and mark this object as disposed.
     *
     * Any future disposables added to this object will be disposed of on `add`.
     */
    DisposableStore.prototype.dispose = function () {
        if (this._isDisposed) {
            return;
        }
        markTracked(this);
        this._isDisposed = true;
        this.clear();
    };
    /**
     * Dispose of all registered disposables but do not mark this object as disposed.
     */
    DisposableStore.prototype.clear = function () {
        this._toDispose.forEach(function (item) { return item.dispose(); });
        this._toDispose.clear();
    };
    DisposableStore.prototype.add = function (t) {
        if (!t) {
            return t;
        }
        if (t === this) {
            throw new Error('Cannot register a disposable on itself!');
        }
        markTracked(t);
        if (this._isDisposed) {
            console.warn(new Error('Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!').stack);
        }
        else {
            this._toDispose.add(t);
        }
        return t;
    };
    return DisposableStore;
}());

var Disposable = /** @class */ (function () {
    function Disposable() {
        this._store = new DisposableStore();
        trackDisposable(this);
    }
    Disposable.prototype.dispose = function () {
        markTracked(this);
        this._store.dispose();
    };
    Disposable.prototype._register = function (t) {
        if (t === this) {
            throw new Error('Cannot register a disposable on itself!');
        }
        return this._store.add(t);
    };
    Disposable.None = Object.freeze({ dispose: function () { } });
    return Disposable;
}());

/**
 * Manages the lifecycle of a disposable value that may be changed.
 *
 * This ensures that when the the disposable value is changed, the previously held disposable is disposed of. You can
 * also register a `MutableDisposable` on a `Disposable` to ensure it is automatically cleaned up.
 */
var MutableDisposable = /** @class */ (function () {
    function MutableDisposable() {
        this._isDisposed = false;
        trackDisposable(this);
    }
    Object.defineProperty(MutableDisposable.prototype, "value", {
        get: function () {
            return this._isDisposed ? undefined : this._value;
        },
        set: function (value) {
            if (this._isDisposed || value === this._value) {
                return;
            }
            if (this._value) {
                this._value.dispose();
            }
            if (value) {
                markTracked(value);
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    MutableDisposable.prototype.clear = function () {
        this.value = undefined;
    };
    MutableDisposable.prototype.dispose = function () {
        this._isDisposed = true;
        markTracked(this);
        if (this._value) {
            this._value.dispose();
        }
        this._value = undefined;
    };
    return MutableDisposable;
}());

var ImmortalReference = /** @class */ (function () {
    function ImmortalReference(object) {
        this.object = object;
    }
    ImmortalReference.prototype.dispose = function () { };
    return ImmortalReference;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/linkedList.js":
/*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/linkedList.js ***!
  \*********************************************************************/
/*! exports provided: LinkedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iterator.js */ "./node_modules/monaco-editor/esm/vs/base/common/iterator.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var Node = /** @class */ (function () {
    function Node(element) {
        this.element = element;
        this.next = Node.Undefined;
        this.prev = Node.Undefined;
    }
    Node.Undefined = new Node(undefined);
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    }
    Object.defineProperty(LinkedList.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.isEmpty = function () {
        return this._first === Node.Undefined;
    };
    LinkedList.prototype.clear = function () {
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    };
    LinkedList.prototype.unshift = function (element) {
        return this._insert(element, false);
    };
    LinkedList.prototype.push = function (element) {
        return this._insert(element, true);
    };
    LinkedList.prototype._insert = function (element, atTheEnd) {
        var _this = this;
        var newNode = new Node(element);
        if (this._first === Node.Undefined) {
            this._first = newNode;
            this._last = newNode;
        }
        else if (atTheEnd) {
            // push
            var oldLast = this._last;
            this._last = newNode;
            newNode.prev = oldLast;
            oldLast.next = newNode;
        }
        else {
            // unshift
            var oldFirst = this._first;
            this._first = newNode;
            newNode.next = oldFirst;
            oldFirst.prev = newNode;
        }
        this._size += 1;
        var didRemove = false;
        return function () {
            if (!didRemove) {
                didRemove = true;
                _this._remove(newNode);
            }
        };
    };
    LinkedList.prototype.shift = function () {
        if (this._first === Node.Undefined) {
            return undefined;
        }
        else {
            var res = this._first.element;
            this._remove(this._first);
            return res;
        }
    };
    LinkedList.prototype.pop = function () {
        if (this._last === Node.Undefined) {
            return undefined;
        }
        else {
            var res = this._last.element;
            this._remove(this._last);
            return res;
        }
    };
    LinkedList.prototype._remove = function (node) {
        if (node.prev !== Node.Undefined && node.next !== Node.Undefined) {
            // middle
            var anchor = node.prev;
            anchor.next = node.next;
            node.next.prev = anchor;
        }
        else if (node.prev === Node.Undefined && node.next === Node.Undefined) {
            // only node
            this._first = Node.Undefined;
            this._last = Node.Undefined;
        }
        else if (node.next === Node.Undefined) {
            // last
            this._last = this._last.prev;
            this._last.next = Node.Undefined;
        }
        else if (node.prev === Node.Undefined) {
            // first
            this._first = this._first.next;
            this._first.prev = Node.Undefined;
        }
        // done
        this._size -= 1;
    };
    LinkedList.prototype.iterator = function () {
        var element;
        var node = this._first;
        return {
            next: function () {
                if (node === Node.Undefined) {
                    return _iterator_js__WEBPACK_IMPORTED_MODULE_0__["FIN"];
                }
                if (!element) {
                    element = { done: false, value: node.element };
                }
                else {
                    element.value = node.element;
                }
                node = node.next;
                return element;
            }
        };
    };
    LinkedList.prototype.toArray = function () {
        var result = [];
        for (var node = this._first; node !== Node.Undefined; node = node.next) {
            result.push(node.element);
        }
        return result;
    };
    return LinkedList;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/platform.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/platform.js ***!
  \*******************************************************************/
/*! exports provided: isWindows, isMacintosh, isLinux, isNative, isWeb, globals, setImmediate, OS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindows", function() { return isWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMacintosh", function() { return isMacintosh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinux", function() { return isLinux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNative", function() { return isNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeb", function() { return isWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS", function() { return OS; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var LANGUAGE_DEFAULT = 'en';
var _isWindows = false;
var _isMacintosh = false;
var _isLinux = false;
var _isNative = false;
var _isWeb = false;
var _locale = undefined;
var _language = LANGUAGE_DEFAULT;
var _translationsConfigFile = undefined;
var _userAgent = undefined;
var isElectronRenderer = (typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.electron !== 'undefined' && process.type === 'renderer');
// OS detection
if (typeof navigator === 'object' && !isElectronRenderer) {
    _userAgent = navigator.userAgent;
    _isWindows = _userAgent.indexOf('Windows') >= 0;
    _isMacintosh = _userAgent.indexOf('Macintosh') >= 0;
    _isLinux = _userAgent.indexOf('Linux') >= 0;
    _isWeb = true;
    _locale = navigator.language;
    _language = _locale;
}
else if (typeof process === 'object') {
    _isWindows = (process.platform === 'win32');
    _isMacintosh = (process.platform === 'darwin');
    _isLinux = (process.platform === 'linux');
    _locale = LANGUAGE_DEFAULT;
    _language = LANGUAGE_DEFAULT;
    var rawNlsConfig = process.env['VSCODE_NLS_CONFIG'];
    if (rawNlsConfig) {
        try {
            var nlsConfig = JSON.parse(rawNlsConfig);
            var resolved = nlsConfig.availableLanguages['*'];
            _locale = nlsConfig.locale;
            // VSCode's default language is 'en'
            _language = resolved ? resolved : LANGUAGE_DEFAULT;
            _translationsConfigFile = nlsConfig._translationsConfigFile;
        }
        catch (e) {
        }
    }
    _isNative = true;
}
var _platform = 0 /* Web */;
if (_isMacintosh) {
    _platform = 1 /* Mac */;
}
else if (_isWindows) {
    _platform = 3 /* Windows */;
}
else if (_isLinux) {
    _platform = 2 /* Linux */;
}
var isWindows = _isWindows;
var isMacintosh = _isMacintosh;
var isLinux = _isLinux;
var isNative = _isNative;
var isWeb = _isWeb;
var _globals = (typeof self === 'object' ? self : typeof global === 'object' ? global : {});
var globals = _globals;
var _setImmediate = null;
function setImmediate(callback) {
    if (_setImmediate === null) {
        if (globals.setImmediate) {
            _setImmediate = globals.setImmediate.bind(globals);
        }
        else if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
            _setImmediate = process.nextTick.bind(process);
        }
        else {
            _setImmediate = globals.setTimeout.bind(globals);
        }
    }
    return _setImmediate(callback);
}
var OS = (_isMacintosh ? 2 /* Macintosh */ : (_isWindows ? 1 /* Windows */ : 3 /* Linux */));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/strings.js":
/*!******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/strings.js ***!
  \******************************************************************/
/*! exports provided: empty, isFalsyOrWhitespace, pad, format, escape, escapeRegExpCharacters, trim, ltrim, rtrim, convertSimple2RegExpPattern, startsWith, endsWith, createRegExp, regExpLeadsToEndlessLoop, regExpFlags, firstNonWhitespaceIndex, getLeadingWhitespace, lastNonWhitespaceIndex, compare, compareIgnoreCase, isLowerAsciiLetter, isUpperAsciiLetter, equalsIgnoreCase, startsWithIgnoreCase, commonPrefixLength, commonSuffixLength, isHighSurrogate, isLowSurrogate, containsRTL, containsEmoji, isBasicASCII, containsFullWidthCharacter, isFullWidthCharacter, UTF8_BOM_CHARACTER, startsWithUTF8BOM, safeBtoa, repeat, containsUppercaseCharacter, singleLetterHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalsyOrWhitespace", function() { return isFalsyOrWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExpCharacters", function() { return escapeRegExpCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ltrim", function() { return ltrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtrim", function() { return rtrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSimple2RegExpPattern", function() { return convertSimple2RegExpPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegExp", function() { return createRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpLeadsToEndlessLoop", function() { return regExpLeadsToEndlessLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpFlags", function() { return regExpFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstNonWhitespaceIndex", function() { return firstNonWhitespaceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeadingWhitespace", function() { return getLeadingWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastNonWhitespaceIndex", function() { return lastNonWhitespaceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareIgnoreCase", function() { return compareIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLowerAsciiLetter", function() { return isLowerAsciiLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpperAsciiLetter", function() { return isUpperAsciiLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalsIgnoreCase", function() { return equalsIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWithIgnoreCase", function() { return startsWithIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonPrefixLength", function() { return commonPrefixLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonSuffixLength", function() { return commonSuffixLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHighSurrogate", function() { return isHighSurrogate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLowSurrogate", function() { return isLowSurrogate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsRTL", function() { return containsRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsEmoji", function() { return containsEmoji; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBasicASCII", function() { return isBasicASCII; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsFullWidthCharacter", function() { return containsFullWidthCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullWidthCharacter", function() { return isFullWidthCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UTF8_BOM_CHARACTER", function() { return UTF8_BOM_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWithUTF8BOM", function() { return startsWithUTF8BOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeBtoa", function() { return safeBtoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsUppercaseCharacter", function() { return containsUppercaseCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleLetterHash", function() { return singleLetterHash; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * The empty string.
 */
var empty = '';
function isFalsyOrWhitespace(str) {
    if (!str || typeof str !== 'string') {
        return true;
    }
    return str.trim().length === 0;
}
/**
 * @returns the provided number with the given number of preceding zeros.
 */
function pad(n, l, char) {
    if (char === void 0) { char = '0'; }
    var str = '' + n;
    var r = [str];
    for (var i = str.length; i < l; i++) {
        r.push(char);
    }
    return r.reverse().join('');
}
var _formatRegexp = /{(\d+)}/g;
/**
 * Helper to produce a string with a variable number of arguments. Insert variable segments
 * into the string using the {n} notation where N is the index of the argument following the string.
 * @param value string to which formatting is applied
 * @param args replacements for {n}-entries
 */
function format(value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length === 0) {
        return value;
    }
    return value.replace(_formatRegexp, function (match, group) {
        var idx = parseInt(group, 10);
        return isNaN(idx) || idx < 0 || idx >= args.length ?
            match :
            args[idx];
    });
}
/**
 * Converts HTML characters inside the string to use entities instead. Makes the string safe from
 * being used e.g. in HTMLElement.innerHTML.
 */
function escape(html) {
    return html.replace(/[<>&]/g, function (match) {
        switch (match) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return match;
        }
    });
}
/**
 * Escapes regular expression characters in a given string
 */
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, '\\$&');
}
/**
 * Removes all occurrences of needle from the beginning and end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim (default is a blank)
 */
function trim(haystack, needle) {
    if (needle === void 0) { needle = ' '; }
    var trimmed = ltrim(haystack, needle);
    return rtrim(trimmed, needle);
}
/**
 * Removes all occurrences of needle from the beginning of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function ltrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    var needleLen = needle.length;
    if (needleLen === 0 || haystack.length === 0) {
        return haystack;
    }
    var offset = 0;
    while (haystack.indexOf(needle, offset) === offset) {
        offset = offset + needleLen;
    }
    return haystack.substring(offset);
}
/**
 * Removes all occurrences of needle from the end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function rtrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    var needleLen = needle.length, haystackLen = haystack.length;
    if (needleLen === 0 || haystackLen === 0) {
        return haystack;
    }
    var offset = haystackLen, idx = -1;
    while (true) {
        idx = haystack.lastIndexOf(needle, offset - 1);
        if (idx === -1 || idx + needleLen !== offset) {
            break;
        }
        if (idx === 0) {
            return '';
        }
        offset = idx;
    }
    return haystack.substring(0, offset);
}
function convertSimple2RegExpPattern(pattern) {
    return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
}
/**
 * Determines if haystack starts with needle.
 */
function startsWith(haystack, needle) {
    if (haystack.length < needle.length) {
        return false;
    }
    if (haystack === needle) {
        return true;
    }
    for (var i = 0; i < needle.length; i++) {
        if (haystack[i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Determines if haystack ends with needle.
 */
function endsWith(haystack, needle) {
    var diff = haystack.length - needle.length;
    if (diff > 0) {
        return haystack.indexOf(needle, diff) === diff;
    }
    else if (diff === 0) {
        return haystack === needle;
    }
    else {
        return false;
    }
}
function createRegExp(searchString, isRegex, options) {
    if (options === void 0) { options = {}; }
    if (!searchString) {
        throw new Error('Cannot create regex from empty string');
    }
    if (!isRegex) {
        searchString = escapeRegExpCharacters(searchString);
    }
    if (options.wholeWord) {
        if (!/\B/.test(searchString.charAt(0))) {
            searchString = '\\b' + searchString;
        }
        if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
            searchString = searchString + '\\b';
        }
    }
    var modifiers = '';
    if (options.global) {
        modifiers += 'g';
    }
    if (!options.matchCase) {
        modifiers += 'i';
    }
    if (options.multiline) {
        modifiers += 'm';
    }
    if (options.unicode) {
        modifiers += 'u';
    }
    return new RegExp(searchString, modifiers);
}
function regExpLeadsToEndlessLoop(regexp) {
    // Exit early if it's one of these special cases which are meant to match
    // against an empty string
    if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
        return false;
    }
    // We check against an empty string. If the regular expression doesn't advance
    // (e.g. ends in an endless loop) it will match an empty string.
    var match = regexp.exec('');
    return !!(match && regexp.lastIndex === 0);
}
function regExpFlags(regexp) {
    return (regexp.global ? 'g' : '')
        + (regexp.ignoreCase ? 'i' : '')
        + (regexp.multiline ? 'm' : '')
        + (regexp.unicode ? 'u' : '');
}
/**
 * Returns first index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */
function firstNonWhitespaceIndex(str) {
    for (var i = 0, len = str.length; i < len; i++) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return i;
        }
    }
    return -1;
}
/**
 * Returns the leading whitespace of the string.
 * If the string contains only whitespaces, returns entire string
 */
function getLeadingWhitespace(str, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = str.length; }
    for (var i = start; i < end; i++) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return str.substring(start, i);
        }
    }
    return str.substring(start, end);
}
/**
 * Returns last index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */
function lastNonWhitespaceIndex(str, startIndex) {
    if (startIndex === void 0) { startIndex = str.length - 1; }
    for (var i = startIndex; i >= 0; i--) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return i;
        }
    }
    return -1;
}
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
function compareIgnoreCase(a, b) {
    var len = Math.min(a.length, b.length);
    for (var i = 0; i < len; i++) {
        var codeA = a.charCodeAt(i);
        var codeB = b.charCodeAt(i);
        if (codeA === codeB) {
            // equal
            continue;
        }
        if (isUpperAsciiLetter(codeA)) {
            codeA += 32;
        }
        if (isUpperAsciiLetter(codeB)) {
            codeB += 32;
        }
        var diff = codeA - codeB;
        if (diff === 0) {
            // equal -> ignoreCase
            continue;
        }
        else if (isLowerAsciiLetter(codeA) && isLowerAsciiLetter(codeB)) {
            //
            return diff;
        }
        else {
            return compare(a.toLowerCase(), b.toLowerCase());
        }
    }
    if (a.length < b.length) {
        return -1;
    }
    else if (a.length > b.length) {
        return 1;
    }
    else {
        return 0;
    }
}
function isLowerAsciiLetter(code) {
    return code >= 97 /* a */ && code <= 122 /* z */;
}
function isUpperAsciiLetter(code) {
    return code >= 65 /* A */ && code <= 90 /* Z */;
}
function isAsciiLetter(code) {
    return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
}
function equalsIgnoreCase(a, b) {
    var len1 = a ? a.length : 0;
    var len2 = b ? b.length : 0;
    if (len1 !== len2) {
        return false;
    }
    return doEqualsIgnoreCase(a, b);
}
function doEqualsIgnoreCase(a, b, stopAt) {
    if (stopAt === void 0) { stopAt = a.length; }
    if (typeof a !== 'string' || typeof b !== 'string') {
        return false;
    }
    for (var i = 0; i < stopAt; i++) {
        var codeA = a.charCodeAt(i);
        var codeB = b.charCodeAt(i);
        if (codeA === codeB) {
            continue;
        }
        // a-z A-Z
        if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
            var diff = Math.abs(codeA - codeB);
            if (diff !== 0 && diff !== 32) {
                return false;
            }
        }
        // Any other charcode
        else {
            if (String.fromCharCode(codeA).toLowerCase() !== String.fromCharCode(codeB).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}
function startsWithIgnoreCase(str, candidate) {
    var candidateLength = candidate.length;
    if (candidate.length > str.length) {
        return false;
    }
    return doEqualsIgnoreCase(str, candidate, candidateLength);
}
/**
 * @returns the length of the common prefix of the two strings.
 */
function commonPrefixLength(a, b) {
    var i, len = Math.min(a.length, b.length);
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return i;
        }
    }
    return len;
}
/**
 * @returns the length of the common suffix of the two strings.
 */
function commonSuffixLength(a, b) {
    var i, len = Math.min(a.length, b.length);
    var aLastIndex = a.length - 1;
    var bLastIndex = b.length - 1;
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
            return i;
        }
    }
    return len;
}
// --- unicode
// http://en.wikipedia.org/wiki/Surrogate_pair
// Returns the code point starting at a specified index in a string
// Code points U+0000 to U+D7FF and U+E000 to U+FFFF are represented on a single character
// Code points U+10000 to U+10FFFF are represented on two consecutive characters
//export function getUnicodePoint(str:string, index:number, len:number):number {
//	const chrCode = str.charCodeAt(index);
//	if (0xD800 <= chrCode && chrCode <= 0xDBFF && index + 1 < len) {
//		const nextChrCode = str.charCodeAt(index + 1);
//		if (0xDC00 <= nextChrCode && nextChrCode <= 0xDFFF) {
//			return (chrCode - 0xD800) << 10 + (nextChrCode - 0xDC00) + 0x10000;
//		}
//	}
//	return chrCode;
//}
function isHighSurrogate(charCode) {
    return (0xD800 <= charCode && charCode <= 0xDBFF);
}
function isLowSurrogate(charCode) {
    return (0xDC00 <= charCode && charCode <= 0xDFFF);
}
/**
 * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-rtl-test.js
 */
var CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
/**
 * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
 */
function containsRTL(str) {
    return CONTAINS_RTL.test(str);
}
/**
 * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-emoji-test.js
 */
var CONTAINS_EMOJI = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
function containsEmoji(str) {
    return CONTAINS_EMOJI.test(str);
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
/**
 * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
 */
function isBasicASCII(str) {
    return IS_BASIC_ASCII.test(str);
}
function containsFullWidthCharacter(str) {
    for (var i = 0, len = str.length; i < len; i++) {
        if (isFullWidthCharacter(str.charCodeAt(i))) {
            return true;
        }
    }
    return false;
}
function isFullWidthCharacter(charCode) {
    // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
    // http://jrgraphix.net/research/unicode_blocks.php
    //          2E80 — 2EFF   CJK Radicals Supplement
    //          2F00 — 2FDF   Kangxi Radicals
    //          2FF0 — 2FFF   Ideographic Description Characters
    //          3000 — 303F   CJK Symbols and Punctuation
    //          3040 — 309F   Hiragana
    //          30A0 — 30FF   Katakana
    //          3100 — 312F   Bopomofo
    //          3130 — 318F   Hangul Compatibility Jamo
    //          3190 — 319F   Kanbun
    //          31A0 — 31BF   Bopomofo Extended
    //          31F0 — 31FF   Katakana Phonetic Extensions
    //          3200 — 32FF   Enclosed CJK Letters and Months
    //          3300 — 33FF   CJK Compatibility
    //          3400 — 4DBF   CJK Unified Ideographs Extension A
    //          4DC0 — 4DFF   Yijing Hexagram Symbols
    //          4E00 — 9FFF   CJK Unified Ideographs
    //          A000 — A48F   Yi Syllables
    //          A490 — A4CF   Yi Radicals
    //          AC00 — D7AF   Hangul Syllables
    // [IGNORE] D800 — DB7F   High Surrogates
    // [IGNORE] DB80 — DBFF   High Private Use Surrogates
    // [IGNORE] DC00 — DFFF   Low Surrogates
    // [IGNORE] E000 — F8FF   Private Use Area
    //          F900 — FAFF   CJK Compatibility Ideographs
    // [IGNORE] FB00 — FB4F   Alphabetic Presentation Forms
    // [IGNORE] FB50 — FDFF   Arabic Presentation Forms-A
    // [IGNORE] FE00 — FE0F   Variation Selectors
    // [IGNORE] FE20 — FE2F   Combining Half Marks
    // [IGNORE] FE30 — FE4F   CJK Compatibility Forms
    // [IGNORE] FE50 — FE6F   Small Form Variants
    // [IGNORE] FE70 — FEFF   Arabic Presentation Forms-B
    //          FF00 — FFEF   Halfwidth and Fullwidth Forms
    //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
    //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
    // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
    // [IGNORE] FFF0 — FFFF   Specials
    charCode = +charCode; // @perf
    return ((charCode >= 0x2E80 && charCode <= 0xD7AF)
        || (charCode >= 0xF900 && charCode <= 0xFAFF)
        || (charCode >= 0xFF01 && charCode <= 0xFF5E));
}
// -- UTF-8 BOM
var UTF8_BOM_CHARACTER = String.fromCharCode(65279 /* UTF8_BOM */);
function startsWithUTF8BOM(str) {
    return !!(str && str.length > 0 && str.charCodeAt(0) === 65279 /* UTF8_BOM */);
}
function safeBtoa(str) {
    return btoa(encodeURIComponent(str)); // we use encodeURIComponent because btoa fails for non Latin 1 values
}
function repeat(s, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += s;
    }
    return result;
}
function containsUppercaseCharacter(target, ignoreEscapedChars) {
    if (ignoreEscapedChars === void 0) { ignoreEscapedChars = false; }
    if (!target) {
        return false;
    }
    if (ignoreEscapedChars) {
        target = target.replace(/\\./g, '');
    }
    return target.toLowerCase() !== target;
}
/**
 * Produces 'a'-'z', followed by 'A'-'Z'... followed by 'a'-'z', etc.
 */
function singleLetterHash(n) {
    var LETTERS_CNT = (90 /* Z */ - 65 /* A */ + 1);
    n = n % (2 * LETTERS_CNT);
    if (n < LETTERS_CNT) {
        return String.fromCharCode(97 /* a */ + n);
    }
    return String.fromCharCode(65 /* A */ + n - LETTERS_CNT);
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/types.js":
/*!****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/types.js ***!
  \****************************************************************/
/*! exports provided: isArray, isString, isObject, isNumber, isBoolean, isUndefined, isUndefinedOrNull, isEmptyObject, isFunction, validateConstraints, validateConstraint, getAllPropertyNames, getAllMethodNames, createProxyObject, withNullAsUndefined, withUndefinedAsNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefinedOrNull", function() { return isUndefinedOrNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConstraints", function() { return validateConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConstraint", function() { return validateConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPropertyNames", function() { return getAllPropertyNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMethodNames", function() { return getAllMethodNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProxyObject", function() { return createProxyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withNullAsUndefined", function() { return withNullAsUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withUndefinedAsNull", function() { return withUndefinedAsNull; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var _typeof = {
    number: 'number',
    string: 'string',
    undefined: 'undefined',
    object: 'object',
    function: 'function'
};
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
 */
function isArray(array) {
    if (Array.isArray) {
        return Array.isArray(array);
    }
    if (array && typeof (array.length) === _typeof.number && array.constructor === Array) {
        return true;
    }
    return false;
}
/**
 * @returns whether the provided parameter is a JavaScript String or not.
 */
function isString(str) {
    if (typeof (str) === _typeof.string || str instanceof String) {
        return true;
    }
    return false;
}
/**
 *
 * @returns whether the provided parameter is of type `object` but **not**
 *	`null`, an `array`, a `regexp`, nor a `date`.
 */
function isObject(obj) {
    // The method can't do a type cast since there are type (like strings) which
    // are subclasses of any put not positvely matched by the function. Hence type
    // narrowing results in wrong results.
    return typeof obj === _typeof.object
        && obj !== null
        && !Array.isArray(obj)
        && !(obj instanceof RegExp)
        && !(obj instanceof Date);
}
/**
 * In **contrast** to just checking `typeof` this will return `false` for `NaN`.
 * @returns whether the provided parameter is a JavaScript Number or not.
 */
function isNumber(obj) {
    if ((typeof (obj) === _typeof.number || obj instanceof Number) && !isNaN(obj)) {
        return true;
    }
    return false;
}
/**
 * @returns whether the provided parameter is a JavaScript Boolean or not.
 */
function isBoolean(obj) {
    return obj === true || obj === false;
}
/**
 * @returns whether the provided parameter is undefined.
 */
function isUndefined(obj) {
    return typeof (obj) === _typeof.undefined;
}
/**
 * @returns whether the provided parameter is undefined or null.
 */
function isUndefinedOrNull(obj) {
    return isUndefined(obj) || obj === null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @returns whether the provided parameter is an empty JavaScript Object or not.
 */
function isEmptyObject(obj) {
    if (!isObject(obj)) {
        return false;
    }
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
/**
 * @returns whether the provided parameter is a JavaScript Function or not.
 */
function isFunction(obj) {
    return typeof obj === _typeof.function;
}
function validateConstraints(args, constraints) {
    var len = Math.min(args.length, constraints.length);
    for (var i = 0; i < len; i++) {
        validateConstraint(args[i], constraints[i]);
    }
}
function validateConstraint(arg, constraint) {
    if (isString(constraint)) {
        if (typeof arg !== constraint) {
            throw new Error("argument does not match constraint: typeof " + constraint);
        }
    }
    else if (isFunction(constraint)) {
        try {
            if (arg instanceof constraint) {
                return;
            }
        }
        catch (_a) {
            // ignore
        }
        if (!isUndefinedOrNull(arg) && arg.constructor === constraint) {
            return;
        }
        if (constraint.length === 1 && constraint.call(undefined, arg) === true) {
            return;
        }
        throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
    }
}
function getAllPropertyNames(obj) {
    var res = [];
    var proto = Object.getPrototypeOf(obj);
    while (Object.prototype !== proto) {
        res = res.concat(Object.getOwnPropertyNames(proto));
        proto = Object.getPrototypeOf(proto);
    }
    return res;
}
function getAllMethodNames(obj) {
    var methods = [];
    for (var _i = 0, _a = getAllPropertyNames(obj); _i < _a.length; _i++) {
        var prop = _a[_i];
        if (typeof obj[prop] === 'function') {
            methods.push(prop);
        }
    }
    return methods;
}
function createProxyObject(methodNames, invoke) {
    var createProxyMethod = function (method) {
        return function () {
            var args = Array.prototype.slice.call(arguments, 0);
            return invoke(method, args);
        };
    };
    var result = {};
    for (var _i = 0, methodNames_1 = methodNames; _i < methodNames_1.length; _i++) {
        var methodName = methodNames_1[_i];
        result[methodName] = createProxyMethod(methodName);
    }
    return result;
}
/**
 * Converts null to undefined, passes all other values through.
 */
function withNullAsUndefined(x) {
    return x === null ? undefined : x;
}
/**
 * Converts undefined to null, passes all other values through.
 */
function withUndefinedAsNull(x) {
    return typeof x === 'undefined' ? null : x;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/uri.js":
/*!**************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/uri.js ***!
  \**************************************************************/
/*! exports provided: URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URI", function() { return URI; });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;

var _schemePattern = /^\w[\w\d+.-]*$/;
var _singleSlashStart = /^\//;
var _doubleSlashStart = /^\/\//;
var _throwOnMissingSchema = true;
function _validateUri(ret, _strict) {
    // scheme, must be set
    if (!ret.scheme) {
        if (_strict || _throwOnMissingSchema) {
            throw new Error("[UriError]: Scheme is missing: {scheme: \"\", authority: \"" + ret.authority + "\", path: \"" + ret.path + "\", query: \"" + ret.query + "\", fragment: \"" + ret.fragment + "\"}");
        }
        else {
            console.warn("[UriError]: Scheme is missing: {scheme: \"\", authority: \"" + ret.authority + "\", path: \"" + ret.path + "\", query: \"" + ret.query + "\", fragment: \"" + ret.fragment + "\"}");
        }
    }
    // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
    // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
    if (ret.scheme && !_schemePattern.test(ret.scheme)) {
        throw new Error('[UriError]: Scheme contains illegal characters.');
    }
    // path, http://tools.ietf.org/html/rfc3986#section-3.3
    // If a URI contains an authority component, then the path component
    // must either be empty or begin with a slash ("/") character.  If a URI
    // does not contain an authority component, then the path cannot begin
    // with two slash characters ("//").
    if (ret.path) {
        if (ret.authority) {
            if (!_singleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
            }
        }
        else {
            if (_doubleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
            }
        }
    }
}
// for a while we allowed uris *without* schemes and this is the migration
// for them, e.g. an uri without scheme and without strict-mode warns and falls
// back to the file-scheme. that should cause the least carnage and still be a
// clear warning
function _schemeFix(scheme, _strict) {
    if (_strict || _throwOnMissingSchema) {
        return scheme || _empty;
    }
    if (!scheme) {
        console.trace('BAD uri lacks scheme, falling back to file-scheme.');
        scheme = 'file';
    }
    return scheme;
}
// implements a bit of https://tools.ietf.org/html/rfc3986#section-5
function _referenceResolution(scheme, path) {
    // the slash-character is our 'default base' as we don't
    // support constructing URIs relative to other URIs. This
    // also means that we alter and potentially break paths.
    // see https://tools.ietf.org/html/rfc3986#section-5.1.4
    switch (scheme) {
        case 'https':
        case 'http':
        case 'file':
            if (!path) {
                path = _slash;
            }
            else if (path[0] !== _slash) {
                path = _slash + path;
            }
            break;
    }
    return path;
}
var _empty = '';
var _slash = '/';
var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
/**
 * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
 * This class is a simple parser which creates the basic component parts
 * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
 * and encoding.
 *
 *       foo://example.com:8042/over/there?name=ferret#nose
 *       \_/   \______________/\_________/ \_________/ \__/
 *        |           |            |            |        |
 *     scheme     authority       path        query   fragment
 *        |   _____________________|__
 *       / \ /                        \
 *       urn:example:animal:ferret:nose
 */
var URI = /** @class */ (function () {
    /**
     * @internal
     */
    function URI(schemeOrData, authority, path, query, fragment, _strict) {
        if (_strict === void 0) { _strict = false; }
        if (typeof schemeOrData === 'object') {
            this.scheme = schemeOrData.scheme || _empty;
            this.authority = schemeOrData.authority || _empty;
            this.path = schemeOrData.path || _empty;
            this.query = schemeOrData.query || _empty;
            this.fragment = schemeOrData.fragment || _empty;
            // no validation because it's this URI
            // that creates uri components.
            // _validateUri(this);
        }
        else {
            this.scheme = _schemeFix(schemeOrData, _strict);
            this.authority = authority || _empty;
            this.path = _referenceResolution(this.scheme, path || _empty);
            this.query = query || _empty;
            this.fragment = fragment || _empty;
            _validateUri(this, _strict);
        }
    }
    URI.isUri = function (thing) {
        if (thing instanceof URI) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.authority === 'string'
            && typeof thing.fragment === 'string'
            && typeof thing.path === 'string'
            && typeof thing.query === 'string'
            && typeof thing.scheme === 'string'
            && typeof thing.fsPath === 'function'
            && typeof thing.with === 'function'
            && typeof thing.toString === 'function';
    };
    Object.defineProperty(URI.prototype, "fsPath", {
        // ---- filesystem path -----------------------
        /**
         * Returns a string representing the corresponding file system path of this URI.
         * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
         * platform specific path separator.
         *
         * * Will *not* validate the path for invalid characters and semantics.
         * * Will *not* look at the scheme of this URI.
         * * The result shall *not* be used for display purposes but for accessing a file on disk.
         *
         *
         * The *difference* to `URI#path` is the use of the platform specific separator and the handling
         * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
         *
         * ```ts
            const u = URI.parse('file://server/c$/folder/file.txt')
            u.authority === 'server'
            u.path === '/shares/c$/file.txt'
            u.fsPath === '\\server\c$\folder\file.txt'
        ```
         *
         * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
         * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
         * with URIs that represent files on disk (`file` scheme).
         */
        get: function () {
            // if (this.scheme !== 'file') {
            // 	console.warn(`[UriError] calling fsPath with scheme ${this.scheme}`);
            // }
            return _makeFsPath(this);
        },
        enumerable: true,
        configurable: true
    });
    // ---- modify to new -------------------------
    URI.prototype.with = function (change) {
        if (!change) {
            return this;
        }
        var scheme = change.scheme, authority = change.authority, path = change.path, query = change.query, fragment = change.fragment;
        if (scheme === undefined) {
            scheme = this.scheme;
        }
        else if (scheme === null) {
            scheme = _empty;
        }
        if (authority === undefined) {
            authority = this.authority;
        }
        else if (authority === null) {
            authority = _empty;
        }
        if (path === undefined) {
            path = this.path;
        }
        else if (path === null) {
            path = _empty;
        }
        if (query === undefined) {
            query = this.query;
        }
        else if (query === null) {
            query = _empty;
        }
        if (fragment === undefined) {
            fragment = this.fragment;
        }
        else if (fragment === null) {
            fragment = _empty;
        }
        if (scheme === this.scheme
            && authority === this.authority
            && path === this.path
            && query === this.query
            && fragment === this.fragment) {
            return this;
        }
        return new _URI(scheme, authority, path, query, fragment);
    };
    // ---- parse & validate ------------------------
    /**
     * Creates a new URI from a string, e.g. `http://www.msft.com/some/path`,
     * `file:///usr/home`, or `scheme:with/path`.
     *
     * @param value A string which represents an URI (see `URI#toString`).
     */
    URI.parse = function (value, _strict) {
        if (_strict === void 0) { _strict = false; }
        var match = _regexp.exec(value);
        if (!match) {
            return new _URI(_empty, _empty, _empty, _empty, _empty);
        }
        return new _URI(match[2] || _empty, decodeURIComponent(match[4] || _empty), decodeURIComponent(match[5] || _empty), decodeURIComponent(match[7] || _empty), decodeURIComponent(match[9] || _empty), _strict);
    };
    /**
     * Creates a new URI from a file system path, e.g. `c:\my\files`,
     * `/usr/home`, or `\\server\share\some\path`.
     *
     * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
     * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
     * `URI.parse('file://' + path)` because the path might contain characters that are
     * interpreted (# and ?). See the following sample:
     * ```ts
    const good = URI.file('/coding/c#/project1');
    good.scheme === 'file';
    good.path === '/coding/c#/project1';
    good.fragment === '';
    const bad = URI.parse('file://' + '/coding/c#/project1');
    bad.scheme === 'file';
    bad.path === '/coding/c'; // path is now broken
    bad.fragment === '/project1';
    ```
     *
     * @param path A file system path (see `URI#fsPath`)
     */
    URI.file = function (path) {
        var authority = _empty;
        // normalize to fwd-slashes on windows,
        // on other systems bwd-slashes are valid
        // filename character, eg /f\oo/ba\r.txt
        if (_platform_js__WEBPACK_IMPORTED_MODULE_0__["isWindows"]) {
            path = path.replace(/\\/g, _slash);
        }
        // check for authority as used in UNC shares
        // or use the path as given
        if (path[0] === _slash && path[1] === _slash) {
            var idx = path.indexOf(_slash, 2);
            if (idx === -1) {
                authority = path.substring(2);
                path = _slash;
            }
            else {
                authority = path.substring(2, idx);
                path = path.substring(idx) || _slash;
            }
        }
        return new _URI('file', authority, path, _empty, _empty);
    };
    URI.from = function (components) {
        return new _URI(components.scheme, components.authority, components.path, components.query, components.fragment);
    };
    // ---- printing/externalize ---------------------------
    /**
     * Creates a string representation for this URI. It's guaranteed that calling
     * `URI.parse` with the result of this function creates an URI which is equal
     * to this URI.
     *
     * * The result shall *not* be used for display purposes but for externalization or transport.
     * * The result will be encoded using the percentage encoding and encoding happens mostly
     * ignore the scheme-specific encoding rules.
     *
     * @param skipEncoding Do not encode the result, default is `false`
     */
    URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) { skipEncoding = false; }
        return _asFormatted(this, skipEncoding);
    };
    URI.prototype.toJSON = function () {
        return this;
    };
    URI.revive = function (data) {
        if (!data) {
            return data;
        }
        else if (data instanceof URI) {
            return data;
        }
        else {
            var result = new _URI(data);
            result._formatted = data.external;
            result._fsPath = data._sep === _pathSepMarker ? data.fsPath : null;
            return result;
        }
    };
    return URI;
}());

var _pathSepMarker = _platform_js__WEBPACK_IMPORTED_MODULE_0__["isWindows"] ? 1 : undefined;
// tslint:disable-next-line:class-name
var _URI = /** @class */ (function (_super) {
    __extends(_URI, _super);
    function _URI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._formatted = null;
        _this._fsPath = null;
        return _this;
    }
    Object.defineProperty(_URI.prototype, "fsPath", {
        get: function () {
            if (!this._fsPath) {
                this._fsPath = _makeFsPath(this);
            }
            return this._fsPath;
        },
        enumerable: true,
        configurable: true
    });
    _URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) { skipEncoding = false; }
        if (!skipEncoding) {
            if (!this._formatted) {
                this._formatted = _asFormatted(this, false);
            }
            return this._formatted;
        }
        else {
            // we don't cache that
            return _asFormatted(this, true);
        }
    };
    _URI.prototype.toJSON = function () {
        var res = {
            $mid: 1
        };
        // cached state
        if (this._fsPath) {
            res.fsPath = this._fsPath;
            res._sep = _pathSepMarker;
        }
        if (this._formatted) {
            res.external = this._formatted;
        }
        // uri components
        if (this.path) {
            res.path = this.path;
        }
        if (this.scheme) {
            res.scheme = this.scheme;
        }
        if (this.authority) {
            res.authority = this.authority;
        }
        if (this.query) {
            res.query = this.query;
        }
        if (this.fragment) {
            res.fragment = this.fragment;
        }
        return res;
    };
    return _URI;
}(URI));
// reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2
var encodeTable = (_a = {},
    _a[58 /* Colon */] = '%3A',
    _a[47 /* Slash */] = '%2F',
    _a[63 /* QuestionMark */] = '%3F',
    _a[35 /* Hash */] = '%23',
    _a[91 /* OpenSquareBracket */] = '%5B',
    _a[93 /* CloseSquareBracket */] = '%5D',
    _a[64 /* AtSign */] = '%40',
    _a[33 /* ExclamationMark */] = '%21',
    _a[36 /* DollarSign */] = '%24',
    _a[38 /* Ampersand */] = '%26',
    _a[39 /* SingleQuote */] = '%27',
    _a[40 /* OpenParen */] = '%28',
    _a[41 /* CloseParen */] = '%29',
    _a[42 /* Asterisk */] = '%2A',
    _a[43 /* Plus */] = '%2B',
    _a[44 /* Comma */] = '%2C',
    _a[59 /* Semicolon */] = '%3B',
    _a[61 /* Equals */] = '%3D',
    _a[32 /* Space */] = '%20',
    _a);
function encodeURIComponentFast(uriComponent, allowSlash) {
    var res = undefined;
    var nativeEncodePos = -1;
    for (var pos = 0; pos < uriComponent.length; pos++) {
        var code = uriComponent.charCodeAt(pos);
        // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3
        if ((code >= 97 /* a */ && code <= 122 /* z */)
            || (code >= 65 /* A */ && code <= 90 /* Z */)
            || (code >= 48 /* Digit0 */ && code <= 57 /* Digit9 */)
            || code === 45 /* Dash */
            || code === 46 /* Period */
            || code === 95 /* Underline */
            || code === 126 /* Tilde */
            || (allowSlash && code === 47 /* Slash */)) {
            // check if we are delaying native encode
            if (nativeEncodePos !== -1) {
                res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                nativeEncodePos = -1;
            }
            // check if we write into a new string (by default we try to return the param)
            if (res !== undefined) {
                res += uriComponent.charAt(pos);
            }
        }
        else {
            // encoding needed, we need to allocate a new string
            if (res === undefined) {
                res = uriComponent.substr(0, pos);
            }
            // check with default table first
            var escaped = encodeTable[code];
            if (escaped !== undefined) {
                // check if we are delaying native encode
                if (nativeEncodePos !== -1) {
                    res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                    nativeEncodePos = -1;
                }
                // append escaped variant to result
                res += escaped;
            }
            else if (nativeEncodePos === -1) {
                // use native encode only when needed
                nativeEncodePos = pos;
            }
        }
    }
    if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
    }
    return res !== undefined ? res : uriComponent;
}
function encodeURIComponentMinimal(path) {
    var res = undefined;
    for (var pos = 0; pos < path.length; pos++) {
        var code = path.charCodeAt(pos);
        if (code === 35 /* Hash */ || code === 63 /* QuestionMark */) {
            if (res === undefined) {
                res = path.substr(0, pos);
            }
            res += encodeTable[code];
        }
        else {
            if (res !== undefined) {
                res += path[pos];
            }
        }
    }
    return res !== undefined ? res : path;
}
/**
 * Compute `fsPath` for the given uri
 */
function _makeFsPath(uri) {
    var value;
    if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
        // unc path: file://shares/c$/far/boo
        value = "//" + uri.authority + uri.path;
    }
    else if (uri.path.charCodeAt(0) === 47 /* Slash */
        && (uri.path.charCodeAt(1) >= 65 /* A */ && uri.path.charCodeAt(1) <= 90 /* Z */ || uri.path.charCodeAt(1) >= 97 /* a */ && uri.path.charCodeAt(1) <= 122 /* z */)
        && uri.path.charCodeAt(2) === 58 /* Colon */) {
        // windows drive letter: file:///c:/far/boo
        value = uri.path[1].toLowerCase() + uri.path.substr(2);
    }
    else {
        // other path
        value = uri.path;
    }
    if (_platform_js__WEBPACK_IMPORTED_MODULE_0__["isWindows"]) {
        value = value.replace(/\//g, '\\');
    }
    return value;
}
/**
 * Create the external version of a uri
 */
function _asFormatted(uri, skipEncoding) {
    var encoder = !skipEncoding
        ? encodeURIComponentFast
        : encodeURIComponentMinimal;
    var res = '';
    var scheme = uri.scheme, authority = uri.authority, path = uri.path, query = uri.query, fragment = uri.fragment;
    if (scheme) {
        res += scheme;
        res += ':';
    }
    if (authority || scheme === 'file') {
        res += _slash;
        res += _slash;
    }
    if (authority) {
        var idx = authority.indexOf('@');
        if (idx !== -1) {
            // <user>@<auth>
            var userinfo = authority.substr(0, idx);
            authority = authority.substr(idx + 1);
            idx = userinfo.indexOf(':');
            if (idx === -1) {
                res += encoder(userinfo, false);
            }
            else {
                // <user>:<pass>@<auth>
                res += encoder(userinfo.substr(0, idx), false);
                res += ':';
                res += encoder(userinfo.substr(idx + 1), false);
            }
            res += '@';
        }
        authority = authority.toLowerCase();
        idx = authority.indexOf(':');
        if (idx === -1) {
            res += encoder(authority, false);
        }
        else {
            // <auth>:<port>
            res += encoder(authority.substr(0, idx), false);
            res += authority.substr(idx);
        }
    }
    if (path) {
        // lower-case windows drive letters in /C:/fff or C:/fff
        if (path.length >= 3 && path.charCodeAt(0) === 47 /* Slash */ && path.charCodeAt(2) === 58 /* Colon */) {
            var code = path.charCodeAt(1);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = "/" + String.fromCharCode(code + 32) + ":" + path.substr(3); // "/c:".length === 3
            }
        }
        else if (path.length >= 2 && path.charCodeAt(1) === 58 /* Colon */) {
            var code = path.charCodeAt(0);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = String.fromCharCode(code + 32) + ":" + path.substr(2); // "/c:".length === 3
            }
        }
        // encode the rest of the path
        res += encoder(path, true);
    }
    if (query) {
        res += '?';
        res += encoder(query, false);
    }
    if (fragment) {
        res += '#';
        res += !skipEncoding ? encodeURIComponentFast(fragment, false) : fragment;
    }
    return res;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js ***!
  \******************************************************************************/
/*! exports provided: logOnceWebWorkerWarning, SimpleWorkerClient, SimpleWorkerServer, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOnceWebWorkerWarning", function() { return logOnceWebWorkerWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleWorkerClient", function() { return SimpleWorkerClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleWorkerServer", function() { return SimpleWorkerServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lifecycle.js */ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types.js */ "./node_modules/monaco-editor/esm/vs/base/common/types.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var INITIALIZE = '$initialize';
var webWorkerWarningLogged = false;
function logOnceWebWorkerWarning(err) {
    if (!_platform_js__WEBPACK_IMPORTED_MODULE_2__["isWeb"]) {
        // running tests
        return;
    }
    if (!webWorkerWarningLogged) {
        webWorkerWarningLogged = true;
        console.warn('Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/Microsoft/monaco-editor#faq');
    }
    console.warn(err.message);
}
var SimpleWorkerProtocol = /** @class */ (function () {
    function SimpleWorkerProtocol(handler) {
        this._workerId = -1;
        this._handler = handler;
        this._lastSentReq = 0;
        this._pendingReplies = Object.create(null);
    }
    SimpleWorkerProtocol.prototype.setWorkerId = function (workerId) {
        this._workerId = workerId;
    };
    SimpleWorkerProtocol.prototype.sendMessage = function (method, args) {
        var _this = this;
        var req = String(++this._lastSentReq);
        return new Promise(function (resolve, reject) {
            _this._pendingReplies[req] = {
                resolve: resolve,
                reject: reject
            };
            _this._send({
                vsWorker: _this._workerId,
                req: req,
                method: method,
                args: args
            });
        });
    };
    SimpleWorkerProtocol.prototype.handleMessage = function (message) {
        if (!message || !message.vsWorker) {
            return;
        }
        if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
            return;
        }
        this._handleMessage(message);
    };
    SimpleWorkerProtocol.prototype._handleMessage = function (msg) {
        var _this = this;
        if (msg.seq) {
            var replyMessage = msg;
            if (!this._pendingReplies[replyMessage.seq]) {
                console.warn('Got reply to unknown seq');
                return;
            }
            var reply = this._pendingReplies[replyMessage.seq];
            delete this._pendingReplies[replyMessage.seq];
            if (replyMessage.err) {
                var err = replyMessage.err;
                if (replyMessage.err.$isError) {
                    err = new Error();
                    err.name = replyMessage.err.name;
                    err.message = replyMessage.err.message;
                    err.stack = replyMessage.err.stack;
                }
                reply.reject(err);
                return;
            }
            reply.resolve(replyMessage.res);
            return;
        }
        var requestMessage = msg;
        var req = requestMessage.req;
        var result = this._handler.handleMessage(requestMessage.method, requestMessage.args);
        result.then(function (r) {
            _this._send({
                vsWorker: _this._workerId,
                seq: req,
                res: r,
                err: undefined
            });
        }, function (e) {
            if (e.detail instanceof Error) {
                // Loading errors have a detail property that points to the actual error
                e.detail = Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["transformErrorForSerialization"])(e.detail);
            }
            _this._send({
                vsWorker: _this._workerId,
                seq: req,
                res: undefined,
                err: Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["transformErrorForSerialization"])(e)
            });
        });
    };
    SimpleWorkerProtocol.prototype._send = function (msg) {
        var transfer = [];
        if (msg.req) {
            var m = msg;
            for (var i = 0; i < m.args.length; i++) {
                if (m.args[i] instanceof ArrayBuffer) {
                    transfer.push(m.args[i]);
                }
            }
        }
        else {
            var m = msg;
            if (m.res instanceof ArrayBuffer) {
                transfer.push(m.res);
            }
        }
        this._handler.sendMessage(msg, transfer);
    };
    return SimpleWorkerProtocol;
}());
/**
 * Main thread side
 */
var SimpleWorkerClient = /** @class */ (function (_super) {
    __extends(SimpleWorkerClient, _super);
    function SimpleWorkerClient(workerFactory, moduleId, host) {
        var _this = _super.call(this) || this;
        var lazyProxyReject = null;
        _this._worker = _this._register(workerFactory.create('vs/base/common/worker/simpleWorker', function (msg) {
            _this._protocol.handleMessage(msg);
        }, function (err) {
            // in Firefox, web workers fail lazily :(
            // we will reject the proxy
            if (lazyProxyReject) {
                lazyProxyReject(err);
            }
        }));
        _this._protocol = new SimpleWorkerProtocol({
            sendMessage: function (msg, transfer) {
                _this._worker.postMessage(msg, transfer);
            },
            handleMessage: function (method, args) {
                if (typeof host[method] !== 'function') {
                    return Promise.reject(new Error('Missing method ' + method + ' on main thread host.'));
                }
                try {
                    return Promise.resolve(host[method].apply(host, args));
                }
                catch (e) {
                    return Promise.reject(e);
                }
            }
        });
        _this._protocol.setWorkerId(_this._worker.getId());
        // Gather loader configuration
        var loaderConfiguration = null;
        if (typeof self.require !== 'undefined' && typeof self.require.getConfig === 'function') {
            // Get the configuration from the Monaco AMD Loader
            loaderConfiguration = self.require.getConfig();
        }
        else if (typeof self.requirejs !== 'undefined') {
            // Get the configuration from requirejs
            loaderConfiguration = self.requirejs.s.contexts._.config;
        }
        var hostMethods = _types_js__WEBPACK_IMPORTED_MODULE_3__["getAllMethodNames"](host);
        // Send initialize message
        _this._onModuleLoaded = _this._protocol.sendMessage(INITIALIZE, [
            _this._worker.getId(),
            JSON.parse(JSON.stringify(loaderConfiguration)),
            moduleId,
            hostMethods,
        ]);
        // Create proxy to loaded code
        var proxyMethodRequest = function (method, args) {
            return _this._request(method, args);
        };
        _this._lazyProxy = new Promise(function (resolve, reject) {
            lazyProxyReject = reject;
            _this._onModuleLoaded.then(function (availableMethods) {
                resolve(_types_js__WEBPACK_IMPORTED_MODULE_3__["createProxyObject"](availableMethods, proxyMethodRequest));
            }, function (e) {
                reject(e);
                _this._onError('Worker failed to load ' + moduleId, e);
            });
        });
        return _this;
    }
    SimpleWorkerClient.prototype.getProxyObject = function () {
        return this._lazyProxy;
    };
    SimpleWorkerClient.prototype._request = function (method, args) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._onModuleLoaded.then(function () {
                _this._protocol.sendMessage(method, args).then(resolve, reject);
            }, reject);
        });
    };
    SimpleWorkerClient.prototype._onError = function (message, error) {
        console.error(message);
        console.info(error);
    };
    return SimpleWorkerClient;
}(_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__["Disposable"]));

/**
 * Worker side
 */
var SimpleWorkerServer = /** @class */ (function () {
    function SimpleWorkerServer(postMessage, requestHandlerFactory) {
        var _this = this;
        this._requestHandlerFactory = requestHandlerFactory;
        this._requestHandler = null;
        this._protocol = new SimpleWorkerProtocol({
            sendMessage: function (msg, transfer) {
                postMessage(msg, transfer);
            },
            handleMessage: function (method, args) { return _this._handleMessage(method, args); }
        });
    }
    SimpleWorkerServer.prototype.onmessage = function (msg) {
        this._protocol.handleMessage(msg);
    };
    SimpleWorkerServer.prototype._handleMessage = function (method, args) {
        if (method === INITIALIZE) {
            return this.initialize(args[0], args[1], args[2], args[3]);
        }
        if (!this._requestHandler || typeof this._requestHandler[method] !== 'function') {
            return Promise.reject(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return Promise.resolve(this._requestHandler[method].apply(this._requestHandler, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    SimpleWorkerServer.prototype.initialize = function (workerId, loaderConfig, moduleId, hostMethods) {
        var _this = this;
        this._protocol.setWorkerId(workerId);
        var proxyMethodRequest = function (method, args) {
            return _this._protocol.sendMessage(method, args);
        };
        var hostProxy = _types_js__WEBPACK_IMPORTED_MODULE_3__["createProxyObject"](hostMethods, proxyMethodRequest);
        if (this._requestHandlerFactory) {
            // static request handler
            this._requestHandler = this._requestHandlerFactory(hostProxy);
            return Promise.resolve(_types_js__WEBPACK_IMPORTED_MODULE_3__["getAllMethodNames"](this._requestHandler));
        }
        if (loaderConfig) {
            // Remove 'baseUrl', handling it is beyond scope for now
            if (typeof loaderConfig.baseUrl !== 'undefined') {
                delete loaderConfig['baseUrl'];
            }
            if (typeof loaderConfig.paths !== 'undefined') {
                if (typeof loaderConfig.paths.vs !== 'undefined') {
                    delete loaderConfig.paths['vs'];
                }
            }
            // Since this is in a web worker, enable catching errors
            loaderConfig.catchError = true;
            self.require.config(loaderConfig);
        }
        return new Promise(function (resolve, reject) {
            // Use the global require to be sure to get the global config
            self.require([moduleId], function (module) {
                _this._requestHandler = module.create(hostProxy);
                if (!_this._requestHandler) {
                    reject(new Error("No RequestHandler!"));
                    return;
                }
                resolve(_types_js__WEBPACK_IMPORTED_MODULE_3__["getAllMethodNames"](_this._requestHandler));
            }, reject);
        });
    };
    return SimpleWorkerServer;
}());

/**
 * Called on the worker side
 */
function create(postMessage) {
    return new SimpleWorkerServer(postMessage, null);
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js ***!
  \*************************************************************************************/
/*! exports provided: CharacterClassifier, CharacterSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterClassifier", function() { return CharacterClassifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSet", function() { return CharacterSet; });
/* harmony import */ var _uint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A fast character classifier that uses a compact array for ASCII values.
 */
var CharacterClassifier = /** @class */ (function () {
    function CharacterClassifier(_defaultValue) {
        var defaultValue = Object(_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint8"])(_defaultValue);
        this._defaultValue = defaultValue;
        this._asciiMap = CharacterClassifier._createAsciiMap(defaultValue);
        this._map = new Map();
    }
    CharacterClassifier._createAsciiMap = function (defaultValue) {
        var asciiMap = new Uint8Array(256);
        for (var i = 0; i < 256; i++) {
            asciiMap[i] = defaultValue;
        }
        return asciiMap;
    };
    CharacterClassifier.prototype.set = function (charCode, _value) {
        var value = Object(_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint8"])(_value);
        if (charCode >= 0 && charCode < 256) {
            this._asciiMap[charCode] = value;
        }
        else {
            this._map.set(charCode, value);
        }
    };
    CharacterClassifier.prototype.get = function (charCode) {
        if (charCode >= 0 && charCode < 256) {
            return this._asciiMap[charCode];
        }
        else {
            return (this._map.get(charCode) || this._defaultValue);
        }
    };
    return CharacterClassifier;
}());

var CharacterSet = /** @class */ (function () {
    function CharacterSet() {
        this._actual = new CharacterClassifier(0 /* False */);
    }
    CharacterSet.prototype.add = function (charCode) {
        this._actual.set(charCode, 1 /* True */);
    };
    CharacterSet.prototype.has = function (charCode) {
        return (this._actual.get(charCode) === 1 /* True */);
    };
    return CharacterSet;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/position.js ***!
  \**************************************************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * A position in the editor.
 */
var Position = /** @class */ (function () {
    function Position(lineNumber, column) {
        this.lineNumber = lineNumber;
        this.column = column;
    }
    /**
     * Create a new position from this position.
     *
     * @param newLineNumber new line number
     * @param newColumn new column
     */
    Position.prototype.with = function (newLineNumber, newColumn) {
        if (newLineNumber === void 0) { newLineNumber = this.lineNumber; }
        if (newColumn === void 0) { newColumn = this.column; }
        if (newLineNumber === this.lineNumber && newColumn === this.column) {
            return this;
        }
        else {
            return new Position(newLineNumber, newColumn);
        }
    };
    /**
     * Derive a new position from this position.
     *
     * @param deltaLineNumber line number delta
     * @param deltaColumn column delta
     */
    Position.prototype.delta = function (deltaLineNumber, deltaColumn) {
        if (deltaLineNumber === void 0) { deltaLineNumber = 0; }
        if (deltaColumn === void 0) { deltaColumn = 0; }
        return this.with(this.lineNumber + deltaLineNumber, this.column + deltaColumn);
    };
    /**
     * Test if this position equals other position
     */
    Position.prototype.equals = function (other) {
        return Position.equals(this, other);
    };
    /**
     * Test if position `a` equals position `b`
     */
    Position.equals = function (a, b) {
        if (!a && !b) {
            return true;
        }
        return (!!a &&
            !!b &&
            a.lineNumber === b.lineNumber &&
            a.column === b.column);
    };
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be false.
     */
    Position.prototype.isBefore = function (other) {
        return Position.isBefore(this, other);
    };
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be false.
     */
    Position.isBefore = function (a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column < b.column;
    };
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be true.
     */
    Position.prototype.isBeforeOrEqual = function (other) {
        return Position.isBeforeOrEqual(this, other);
    };
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be true.
     */
    Position.isBeforeOrEqual = function (a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column <= b.column;
    };
    /**
     * A function that compares positions, useful for sorting
     */
    Position.compare = function (a, b) {
        var aLineNumber = a.lineNumber | 0;
        var bLineNumber = b.lineNumber | 0;
        if (aLineNumber === bLineNumber) {
            var aColumn = a.column | 0;
            var bColumn = b.column | 0;
            return aColumn - bColumn;
        }
        return aLineNumber - bLineNumber;
    };
    /**
     * Clone this position.
     */
    Position.prototype.clone = function () {
        return new Position(this.lineNumber, this.column);
    };
    /**
     * Convert to a human-readable representation.
     */
    Position.prototype.toString = function () {
        return '(' + this.lineNumber + ',' + this.column + ')';
    };
    // ---
    /**
     * Create a `Position` from an `IPosition`.
     */
    Position.lift = function (pos) {
        return new Position(pos.lineNumber, pos.column);
    };
    /**
     * Test if `obj` is an `IPosition`.
     */
    Position.isIPosition = function (obj) {
        return (obj
            && (typeof obj.lineNumber === 'number')
            && (typeof obj.column === 'number'));
    };
    return Position;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js":
/*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/range.js ***!
  \***********************************************************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A range in the editor. (startLineNumber,startColumn) is <= (endLineNumber,endColumn)
 */
var Range = /** @class */ (function () {
    function Range(startLineNumber, startColumn, endLineNumber, endColumn) {
        if ((startLineNumber > endLineNumber) || (startLineNumber === endLineNumber && startColumn > endColumn)) {
            this.startLineNumber = endLineNumber;
            this.startColumn = endColumn;
            this.endLineNumber = startLineNumber;
            this.endColumn = startColumn;
        }
        else {
            this.startLineNumber = startLineNumber;
            this.startColumn = startColumn;
            this.endLineNumber = endLineNumber;
            this.endColumn = endColumn;
        }
    }
    /**
     * Test if this range is empty.
     */
    Range.prototype.isEmpty = function () {
        return Range.isEmpty(this);
    };
    /**
     * Test if `range` is empty.
     */
    Range.isEmpty = function (range) {
        return (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn);
    };
    /**
     * Test if position is in this range. If the position is at the edges, will return true.
     */
    Range.prototype.containsPosition = function (position) {
        return Range.containsPosition(this, position);
    };
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return true.
     */
    Range.containsPosition = function (range, position) {
        if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
            return false;
        }
        if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
            return false;
        }
        if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
            return false;
        }
        return true;
    };
    /**
     * Test if range is in this range. If the range is equal to this range, will return true.
     */
    Range.prototype.containsRange = function (range) {
        return Range.containsRange(this, range);
    };
    /**
     * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
     */
    Range.containsRange = function (range, otherRange) {
        if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
            return false;
        }
        if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
            return false;
        }
        return true;
    };
    /**
     * Test if `range` is strictly in this range. `range` must start after and end before this range for the result to be true.
     */
    Range.prototype.strictContainsRange = function (range) {
        return Range.strictContainsRange(this, range);
    };
    /**
     * Test if `otherRange` is strinctly in `range` (must start after, and end before). If the ranges are equal, will return false.
     */
    Range.strictContainsRange = function (range, otherRange) {
        if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn <= range.startColumn) {
            return false;
        }
        if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn >= range.endColumn) {
            return false;
        }
        return true;
    };
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    Range.prototype.plusRange = function (range) {
        return Range.plusRange(this, range);
    };
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    Range.plusRange = function (a, b) {
        var startLineNumber;
        var startColumn;
        var endLineNumber;
        var endColumn;
        if (b.startLineNumber < a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = b.startColumn;
        }
        else if (b.startLineNumber === a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = Math.min(b.startColumn, a.startColumn);
        }
        else {
            startLineNumber = a.startLineNumber;
            startColumn = a.startColumn;
        }
        if (b.endLineNumber > a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = b.endColumn;
        }
        else if (b.endLineNumber === a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = Math.max(b.endColumn, a.endColumn);
        }
        else {
            endLineNumber = a.endLineNumber;
            endColumn = a.endColumn;
        }
        return new Range(startLineNumber, startColumn, endLineNumber, endColumn);
    };
    /**
     * A intersection of the two ranges.
     */
    Range.prototype.intersectRanges = function (range) {
        return Range.intersectRanges(this, range);
    };
    /**
     * A intersection of the two ranges.
     */
    Range.intersectRanges = function (a, b) {
        var resultStartLineNumber = a.startLineNumber;
        var resultStartColumn = a.startColumn;
        var resultEndLineNumber = a.endLineNumber;
        var resultEndColumn = a.endColumn;
        var otherStartLineNumber = b.startLineNumber;
        var otherStartColumn = b.startColumn;
        var otherEndLineNumber = b.endLineNumber;
        var otherEndColumn = b.endColumn;
        if (resultStartLineNumber < otherStartLineNumber) {
            resultStartLineNumber = otherStartLineNumber;
            resultStartColumn = otherStartColumn;
        }
        else if (resultStartLineNumber === otherStartLineNumber) {
            resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
        }
        if (resultEndLineNumber > otherEndLineNumber) {
            resultEndLineNumber = otherEndLineNumber;
            resultEndColumn = otherEndColumn;
        }
        else if (resultEndLineNumber === otherEndLineNumber) {
            resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
        }
        // Check if selection is now empty
        if (resultStartLineNumber > resultEndLineNumber) {
            return null;
        }
        if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
            return null;
        }
        return new Range(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
    };
    /**
     * Test if this range equals other.
     */
    Range.prototype.equalsRange = function (other) {
        return Range.equalsRange(this, other);
    };
    /**
     * Test if range `a` equals `b`.
     */
    Range.equalsRange = function (a, b) {
        return (!!a &&
            !!b &&
            a.startLineNumber === b.startLineNumber &&
            a.startColumn === b.startColumn &&
            a.endLineNumber === b.endLineNumber &&
            a.endColumn === b.endColumn);
    };
    /**
     * Return the end position (which will be after or equal to the start position)
     */
    Range.prototype.getEndPosition = function () {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](this.endLineNumber, this.endColumn);
    };
    /**
     * Return the start position (which will be before or equal to the end position)
     */
    Range.prototype.getStartPosition = function () {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](this.startLineNumber, this.startColumn);
    };
    /**
     * Transform to a user presentable string representation.
     */
    Range.prototype.toString = function () {
        return '[' + this.startLineNumber + ',' + this.startColumn + ' -> ' + this.endLineNumber + ',' + this.endColumn + ']';
    };
    /**
     * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
     */
    Range.prototype.setEndPosition = function (endLineNumber, endColumn) {
        return new Range(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
    };
    /**
     * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
     */
    Range.prototype.setStartPosition = function (startLineNumber, startColumn) {
        return new Range(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
    };
    /**
     * Create a new empty range using this range's start position.
     */
    Range.prototype.collapseToStart = function () {
        return Range.collapseToStart(this);
    };
    /**
     * Create a new empty range using this range's start position.
     */
    Range.collapseToStart = function (range) {
        return new Range(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
    };
    // ---
    Range.fromPositions = function (start, end) {
        if (end === void 0) { end = start; }
        return new Range(start.lineNumber, start.column, end.lineNumber, end.column);
    };
    Range.lift = function (range) {
        if (!range) {
            return null;
        }
        return new Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
    };
    /**
     * Test if `obj` is an `IRange`.
     */
    Range.isIRange = function (obj) {
        return (obj
            && (typeof obj.startLineNumber === 'number')
            && (typeof obj.startColumn === 'number')
            && (typeof obj.endLineNumber === 'number')
            && (typeof obj.endColumn === 'number'));
    };
    /**
     * Test if the two ranges are touching in any way.
     */
    Range.areIntersectingOrTouching = function (a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn)) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn)) {
            return false;
        }
        // These ranges must intersect
        return true;
    };
    /**
     * Test if the two ranges are intersecting. If the ranges are touching it returns true.
     */
    Range.areIntersecting = function (a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn)) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn)) {
            return false;
        }
        // These ranges must intersect
        return true;
    };
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the startPosition and then on the endPosition
     */
    Range.compareRangesUsingStarts = function (a, b) {
        if (a && b) {
            var aStartLineNumber = a.startLineNumber | 0;
            var bStartLineNumber = b.startLineNumber | 0;
            if (aStartLineNumber === bStartLineNumber) {
                var aStartColumn = a.startColumn | 0;
                var bStartColumn = b.startColumn | 0;
                if (aStartColumn === bStartColumn) {
                    var aEndLineNumber = a.endLineNumber | 0;
                    var bEndLineNumber = b.endLineNumber | 0;
                    if (aEndLineNumber === bEndLineNumber) {
                        var aEndColumn = a.endColumn | 0;
                        var bEndColumn = b.endColumn | 0;
                        return aEndColumn - bEndColumn;
                    }
                    return aEndLineNumber - bEndLineNumber;
                }
                return aStartColumn - bStartColumn;
            }
            return aStartLineNumber - bStartLineNumber;
        }
        var aExists = (a ? 1 : 0);
        var bExists = (b ? 1 : 0);
        return aExists - bExists;
    };
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the endPosition and then on the startPosition
     */
    Range.compareRangesUsingEnds = function (a, b) {
        if (a.endLineNumber === b.endLineNumber) {
            if (a.endColumn === b.endColumn) {
                if (a.startLineNumber === b.startLineNumber) {
                    return a.startColumn - b.startColumn;
                }
                return a.startLineNumber - b.startLineNumber;
            }
            return a.endColumn - b.endColumn;
        }
        return a.endLineNumber - b.endLineNumber;
    };
    /**
     * Test if the range spans multiple lines.
     */
    Range.spansMultipleLines = function (range) {
        return range.endLineNumber > range.startLineNumber;
    };
    return Range;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js":
/*!***************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js ***!
  \***************************************************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * A selection in the editor.
 * The selection is a range that has an orientation.
 */
var Selection = /** @class */ (function (_super) {
    __extends(Selection, _super);
    function Selection(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) {
        var _this = _super.call(this, selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) || this;
        _this.selectionStartLineNumber = selectionStartLineNumber;
        _this.selectionStartColumn = selectionStartColumn;
        _this.positionLineNumber = positionLineNumber;
        _this.positionColumn = positionColumn;
        return _this;
    }
    /**
     * Clone this selection.
     */
    Selection.prototype.clone = function () {
        return new Selection(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn);
    };
    /**
     * Transform to a human-readable representation.
     */
    Selection.prototype.toString = function () {
        return '[' + this.selectionStartLineNumber + ',' + this.selectionStartColumn + ' -> ' + this.positionLineNumber + ',' + this.positionColumn + ']';
    };
    /**
     * Test if equals other selection.
     */
    Selection.prototype.equalsSelection = function (other) {
        return (Selection.selectionsEqual(this, other));
    };
    /**
     * Test if the two selections are equal.
     */
    Selection.selectionsEqual = function (a, b) {
        return (a.selectionStartLineNumber === b.selectionStartLineNumber &&
            a.selectionStartColumn === b.selectionStartColumn &&
            a.positionLineNumber === b.positionLineNumber &&
            a.positionColumn === b.positionColumn);
    };
    /**
     * Get directions (LTR or RTL).
     */
    Selection.prototype.getDirection = function () {
        if (this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn) {
            return 0 /* LTR */;
        }
        return 1 /* RTL */;
    };
    /**
     * Create a new selection with a different `positionLineNumber` and `positionColumn`.
     */
    Selection.prototype.setEndPosition = function (endLineNumber, endColumn) {
        if (this.getDirection() === 0 /* LTR */) {
            return new Selection(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
        }
        return new Selection(endLineNumber, endColumn, this.startLineNumber, this.startColumn);
    };
    /**
     * Get the position at `positionLineNumber` and `positionColumn`.
     */
    Selection.prototype.getPosition = function () {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](this.positionLineNumber, this.positionColumn);
    };
    /**
     * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
     */
    Selection.prototype.setStartPosition = function (startLineNumber, startColumn) {
        if (this.getDirection() === 0 /* LTR */) {
            return new Selection(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
        }
        return new Selection(this.endLineNumber, this.endColumn, startLineNumber, startColumn);
    };
    // ----
    /**
     * Create a `Selection` from one or two positions
     */
    Selection.fromPositions = function (start, end) {
        if (end === void 0) { end = start; }
        return new Selection(start.lineNumber, start.column, end.lineNumber, end.column);
    };
    /**
     * Create a `Selection` from an `ISelection`.
     */
    Selection.liftSelection = function (sel) {
        return new Selection(sel.selectionStartLineNumber, sel.selectionStartColumn, sel.positionLineNumber, sel.positionColumn);
    };
    /**
     * `a` equals `b`.
     */
    Selection.selectionsArrEqual = function (a, b) {
        if (a && !b || !a && b) {
            return false;
        }
        if (!a && !b) {
            return true;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0, len = a.length; i < len; i++) {
            if (!this.selectionsEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * Test if `obj` is an `ISelection`.
     */
    Selection.isISelection = function (obj) {
        return (obj
            && (typeof obj.selectionStartLineNumber === 'number')
            && (typeof obj.selectionStartColumn === 'number')
            && (typeof obj.positionLineNumber === 'number')
            && (typeof obj.positionColumn === 'number'));
    };
    /**
     * Create with a direction.
     */
    Selection.createWithDirection = function (startLineNumber, startColumn, endLineNumber, endColumn, direction) {
        if (direction === 0 /* LTR */) {
            return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
        }
        return new Selection(endLineNumber, endColumn, startLineNumber, startColumn);
    };
    return Selection;
}(_range_js__WEBPACK_IMPORTED_MODULE_1__["Range"]));



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/token.js":
/*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/token.js ***!
  \***********************************************************************/
/*! exports provided: Token, TokenizationResult, TokenizationResult2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenizationResult", function() { return TokenizationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenizationResult2", function() { return TokenizationResult2; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var Token = /** @class */ (function () {
    function Token(offset, type, language) {
        this.offset = offset | 0; // @perf
        this.type = type;
        this.language = language;
    }
    Token.prototype.toString = function () {
        return '(' + this.offset + ', ' + this.type + ')';
    };
    return Token;
}());

var TokenizationResult = /** @class */ (function () {
    function TokenizationResult(tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
    }
    return TokenizationResult;
}());

var TokenizationResult2 = /** @class */ (function () {
    function TokenizationResult2(tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
    }
    return TokenizationResult2;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js ***!
  \**********************************************************************/
/*! exports provided: Uint8Matrix, toUint8, toUint32, toUint32Array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint8Matrix", function() { return Uint8Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8", function() { return toUint8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32", function() { return toUint32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32Array", function() { return toUint32Array; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var Uint8Matrix = /** @class */ (function () {
    function Uint8Matrix(rows, cols, defaultValue) {
        var data = new Uint8Array(rows * cols);
        for (var i = 0, len = rows * cols; i < len; i++) {
            data[i] = defaultValue;
        }
        this._data = data;
        this.rows = rows;
        this.cols = cols;
    }
    Uint8Matrix.prototype.get = function (row, col) {
        return this._data[row * this.cols + col];
    };
    Uint8Matrix.prototype.set = function (row, col, value) {
        this._data[row * this.cols + col] = value;
    };
    return Uint8Matrix;
}());

function toUint8(v) {
    if (v < 0) {
        return 0;
    }
    if (v > 255 /* MAX_UINT_8 */) {
        return 255 /* MAX_UINT_8 */;
    }
    return v | 0;
}
function toUint32(v) {
    if (v < 0) {
        return 0;
    }
    if (v > 4294967295 /* MAX_UINT_32 */) {
        return 4294967295 /* MAX_UINT_32 */;
    }
    return v | 0;
}
function toUint32Array(arr) {
    var len = arr.length;
    var r = new Uint32Array(len);
    for (var i = 0; i < len; i++) {
        r[i] = toUint32(arr[i]);
    }
    return r;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js ***!
  \******************************************************************************/
/*! exports provided: DiffComputer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffComputer", function() { return DiffComputer; });
/* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/common/diff/diff.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js");
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/common/strings.js */ "./node_modules/monaco-editor/esm/vs/base/common/strings.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var MAXIMUM_RUN_TIME = 5000; // 5 seconds
var MINIMUM_MATCHING_CHARACTER_LENGTH = 3;
function computeDiff(originalSequence, modifiedSequence, continueProcessingPredicate, pretty) {
    var diffAlgo = new _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__["LcsDiff"](originalSequence, modifiedSequence, continueProcessingPredicate);
    return diffAlgo.ComputeDiff(pretty);
}
var LineMarkerSequence = /** @class */ (function () {
    function LineMarkerSequence(lines) {
        var startColumns = [];
        var endColumns = [];
        for (var i = 0, length_1 = lines.length; i < length_1; i++) {
            startColumns[i] = LineMarkerSequence._getFirstNonBlankColumn(lines[i], 1);
            endColumns[i] = LineMarkerSequence._getLastNonBlankColumn(lines[i], 1);
        }
        this._lines = lines;
        this._startColumns = startColumns;
        this._endColumns = endColumns;
    }
    LineMarkerSequence.prototype.getLength = function () {
        return this._lines.length;
    };
    LineMarkerSequence.prototype.getElementAtIndex = function (i) {
        return this._lines[i].substring(this._startColumns[i] - 1, this._endColumns[i] - 1);
    };
    LineMarkerSequence.prototype.getStartLineNumber = function (i) {
        return i + 1;
    };
    LineMarkerSequence.prototype.getEndLineNumber = function (i) {
        return i + 1;
    };
    LineMarkerSequence._getFirstNonBlankColumn = function (txt, defaultValue) {
        var r = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__["firstNonWhitespaceIndex"](txt);
        if (r === -1) {
            return defaultValue;
        }
        return r + 1;
    };
    LineMarkerSequence._getLastNonBlankColumn = function (txt, defaultValue) {
        var r = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__["lastNonWhitespaceIndex"](txt);
        if (r === -1) {
            return defaultValue;
        }
        return r + 2;
    };
    LineMarkerSequence.prototype.getCharSequence = function (shouldIgnoreTrimWhitespace, startIndex, endIndex) {
        var charCodes = [];
        var lineNumbers = [];
        var columns = [];
        var len = 0;
        for (var index = startIndex; index <= endIndex; index++) {
            var lineContent = this._lines[index];
            var startColumn = (shouldIgnoreTrimWhitespace ? this._startColumns[index] : 1);
            var endColumn = (shouldIgnoreTrimWhitespace ? this._endColumns[index] : lineContent.length + 1);
            for (var col = startColumn; col < endColumn; col++) {
                charCodes[len] = lineContent.charCodeAt(col - 1);
                lineNumbers[len] = index + 1;
                columns[len] = col;
                len++;
            }
        }
        return new CharSequence(charCodes, lineNumbers, columns);
    };
    return LineMarkerSequence;
}());
var CharSequence = /** @class */ (function () {
    function CharSequence(charCodes, lineNumbers, columns) {
        this._charCodes = charCodes;
        this._lineNumbers = lineNumbers;
        this._columns = columns;
    }
    CharSequence.prototype.getLength = function () {
        return this._charCodes.length;
    };
    CharSequence.prototype.getElementAtIndex = function (i) {
        return this._charCodes[i];
    };
    CharSequence.prototype.getStartLineNumber = function (i) {
        return this._lineNumbers[i];
    };
    CharSequence.prototype.getStartColumn = function (i) {
        return this._columns[i];
    };
    CharSequence.prototype.getEndLineNumber = function (i) {
        return this._lineNumbers[i];
    };
    CharSequence.prototype.getEndColumn = function (i) {
        return this._columns[i] + 1;
    };
    return CharSequence;
}());
var CharChange = /** @class */ (function () {
    function CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalStartColumn = originalStartColumn;
        this.originalEndLineNumber = originalEndLineNumber;
        this.originalEndColumn = originalEndColumn;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedStartColumn = modifiedStartColumn;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.modifiedEndColumn = modifiedEndColumn;
    }
    CharChange.createFromDiffChange = function (diffChange, originalCharSequence, modifiedCharSequence) {
        var originalStartLineNumber;
        var originalStartColumn;
        var originalEndLineNumber;
        var originalEndColumn;
        var modifiedStartLineNumber;
        var modifiedStartColumn;
        var modifiedEndLineNumber;
        var modifiedEndColumn;
        if (diffChange.originalLength === 0) {
            originalStartLineNumber = 0;
            originalStartColumn = 0;
            originalEndLineNumber = 0;
            originalEndColumn = 0;
        }
        else {
            originalStartLineNumber = originalCharSequence.getStartLineNumber(diffChange.originalStart);
            originalStartColumn = originalCharSequence.getStartColumn(diffChange.originalStart);
            originalEndLineNumber = originalCharSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
            originalEndColumn = originalCharSequence.getEndColumn(diffChange.originalStart + diffChange.originalLength - 1);
        }
        if (diffChange.modifiedLength === 0) {
            modifiedStartLineNumber = 0;
            modifiedStartColumn = 0;
            modifiedEndLineNumber = 0;
            modifiedEndColumn = 0;
        }
        else {
            modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(diffChange.modifiedStart);
            modifiedStartColumn = modifiedCharSequence.getStartColumn(diffChange.modifiedStart);
            modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
            modifiedEndColumn = modifiedCharSequence.getEndColumn(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        }
        return new CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn);
    };
    return CharChange;
}());
function postProcessCharChanges(rawChanges) {
    if (rawChanges.length <= 1) {
        return rawChanges;
    }
    var result = [rawChanges[0]];
    var prevChange = result[0];
    for (var i = 1, len = rawChanges.length; i < len; i++) {
        var currChange = rawChanges[i];
        var originalMatchingLength = currChange.originalStart - (prevChange.originalStart + prevChange.originalLength);
        var modifiedMatchingLength = currChange.modifiedStart - (prevChange.modifiedStart + prevChange.modifiedLength);
        // Both of the above should be equal, but the continueProcessingPredicate may prevent this from being true
        var matchingLength = Math.min(originalMatchingLength, modifiedMatchingLength);
        if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
            // Merge the current change into the previous one
            prevChange.originalLength = (currChange.originalStart + currChange.originalLength) - prevChange.originalStart;
            prevChange.modifiedLength = (currChange.modifiedStart + currChange.modifiedLength) - prevChange.modifiedStart;
        }
        else {
            // Add the current change
            result.push(currChange);
            prevChange = currChange;
        }
    }
    return result;
}
var LineChange = /** @class */ (function () {
    function LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalEndLineNumber = originalEndLineNumber;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.charChanges = charChanges;
    }
    LineChange.createFromDiffResult = function (shouldIgnoreTrimWhitespace, diffChange, originalLineSequence, modifiedLineSequence, continueProcessingPredicate, shouldComputeCharChanges, shouldPostProcessCharChanges) {
        var originalStartLineNumber;
        var originalEndLineNumber;
        var modifiedStartLineNumber;
        var modifiedEndLineNumber;
        var charChanges = undefined;
        if (diffChange.originalLength === 0) {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart) - 1;
            originalEndLineNumber = 0;
        }
        else {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart);
            originalEndLineNumber = originalLineSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
        }
        if (diffChange.modifiedLength === 0) {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart) - 1;
            modifiedEndLineNumber = 0;
        }
        else {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart);
            modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        }
        if (shouldComputeCharChanges && diffChange.originalLength !== 0 && diffChange.modifiedLength !== 0 && continueProcessingPredicate()) {
            var originalCharSequence = originalLineSequence.getCharSequence(shouldIgnoreTrimWhitespace, diffChange.originalStart, diffChange.originalStart + diffChange.originalLength - 1);
            var modifiedCharSequence = modifiedLineSequence.getCharSequence(shouldIgnoreTrimWhitespace, diffChange.modifiedStart, diffChange.modifiedStart + diffChange.modifiedLength - 1);
            var rawChanges = computeDiff(originalCharSequence, modifiedCharSequence, continueProcessingPredicate, true);
            if (shouldPostProcessCharChanges) {
                rawChanges = postProcessCharChanges(rawChanges);
            }
            charChanges = [];
            for (var i = 0, length_2 = rawChanges.length; i < length_2; i++) {
                charChanges.push(CharChange.createFromDiffChange(rawChanges[i], originalCharSequence, modifiedCharSequence));
            }
        }
        return new LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges);
    };
    return LineChange;
}());
var DiffComputer = /** @class */ (function () {
    function DiffComputer(originalLines, modifiedLines, opts) {
        this.shouldComputeCharChanges = opts.shouldComputeCharChanges;
        this.shouldPostProcessCharChanges = opts.shouldPostProcessCharChanges;
        this.shouldIgnoreTrimWhitespace = opts.shouldIgnoreTrimWhitespace;
        this.shouldMakePrettyDiff = opts.shouldMakePrettyDiff;
        this.maximumRunTimeMs = MAXIMUM_RUN_TIME;
        this.originalLines = originalLines;
        this.modifiedLines = modifiedLines;
        this.original = new LineMarkerSequence(originalLines);
        this.modified = new LineMarkerSequence(modifiedLines);
        this.computationStartTime = (new Date()).getTime();
    }
    DiffComputer.prototype.computeDiff = function () {
        if (this.original.getLength() === 1 && this.original.getElementAtIndex(0).length === 0) {
            // empty original => fast path
            return [{
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.getLength(),
                    charChanges: [{
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0
                        }]
                }];
        }
        if (this.modified.getLength() === 1 && this.modified.getElementAtIndex(0).length === 0) {
            // empty modified => fast path
            return [{
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.getLength(),
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: [{
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0
                        }]
                }];
        }
        this.computationStartTime = (new Date()).getTime();
        var rawChanges = computeDiff(this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldMakePrettyDiff);
        // The diff is always computed with ignoring trim whitespace
        // This ensures we get the prettiest diff
        if (this.shouldIgnoreTrimWhitespace) {
            var lineChanges = [];
            for (var i = 0, length_3 = rawChanges.length; i < length_3; i++) {
                lineChanges.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, rawChanges[i], this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
            }
            return lineChanges;
        }
        // Need to post-process and introduce changes where the trim whitespace is different
        // Note that we are looping starting at -1 to also cover the lines before the first change
        var result = [];
        var originalLineIndex = 0;
        var modifiedLineIndex = 0;
        for (var i = -1 /* !!!! */, len = rawChanges.length; i < len; i++) {
            var nextChange = (i + 1 < len ? rawChanges[i + 1] : null);
            var originalStop = (nextChange ? nextChange.originalStart : this.originalLines.length);
            var modifiedStop = (nextChange ? nextChange.modifiedStart : this.modifiedLines.length);
            while (originalLineIndex < originalStop && modifiedLineIndex < modifiedStop) {
                var originalLine = this.originalLines[originalLineIndex];
                var modifiedLine = this.modifiedLines[modifiedLineIndex];
                if (originalLine !== modifiedLine) {
                    // These lines differ only in trim whitespace
                    // Check the leading whitespace
                    {
                        var originalStartColumn = LineMarkerSequence._getFirstNonBlankColumn(originalLine, 1);
                        var modifiedStartColumn = LineMarkerSequence._getFirstNonBlankColumn(modifiedLine, 1);
                        while (originalStartColumn > 1 && modifiedStartColumn > 1) {
                            var originalChar = originalLine.charCodeAt(originalStartColumn - 2);
                            var modifiedChar = modifiedLine.charCodeAt(modifiedStartColumn - 2);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalStartColumn--;
                            modifiedStartColumn--;
                        }
                        if (originalStartColumn > 1 || modifiedStartColumn > 1) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, 1, originalStartColumn, modifiedLineIndex + 1, 1, modifiedStartColumn);
                        }
                    }
                    // Check the trailing whitespace
                    {
                        var originalEndColumn = LineMarkerSequence._getLastNonBlankColumn(originalLine, 1);
                        var modifiedEndColumn = LineMarkerSequence._getLastNonBlankColumn(modifiedLine, 1);
                        var originalMaxColumn = originalLine.length + 1;
                        var modifiedMaxColumn = modifiedLine.length + 1;
                        while (originalEndColumn < originalMaxColumn && modifiedEndColumn < modifiedMaxColumn) {
                            var originalChar = originalLine.charCodeAt(originalEndColumn - 1);
                            var modifiedChar = originalLine.charCodeAt(modifiedEndColumn - 1);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalEndColumn++;
                            modifiedEndColumn++;
                        }
                        if (originalEndColumn < originalMaxColumn || modifiedEndColumn < modifiedMaxColumn) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, originalEndColumn, originalMaxColumn, modifiedLineIndex + 1, modifiedEndColumn, modifiedMaxColumn);
                        }
                    }
                }
                originalLineIndex++;
                modifiedLineIndex++;
            }
            if (nextChange) {
                // Emit the actual change
                result.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, nextChange, this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
                originalLineIndex += nextChange.originalLength;
                modifiedLineIndex += nextChange.modifiedLength;
            }
        }
        return result;
    };
    DiffComputer.prototype._pushTrimWhitespaceCharChange = function (result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        if (this._mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn)) {
            // Merged into previous
            return;
        }
        var charChanges = undefined;
        if (this.shouldComputeCharChanges) {
            charChanges = [new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn)];
        }
        result.push(new LineChange(originalLineNumber, originalLineNumber, modifiedLineNumber, modifiedLineNumber, charChanges));
    };
    DiffComputer.prototype._mergeTrimWhitespaceCharChange = function (result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        var len = result.length;
        if (len === 0) {
            return false;
        }
        var prevChange = result[len - 1];
        if (prevChange.originalEndLineNumber === 0 || prevChange.modifiedEndLineNumber === 0) {
            // Don't merge with inserts/deletes
            return false;
        }
        if (prevChange.originalEndLineNumber + 1 === originalLineNumber && prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber) {
            prevChange.originalEndLineNumber = originalLineNumber;
            prevChange.modifiedEndLineNumber = modifiedLineNumber;
            if (this.shouldComputeCharChanges) {
                prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
            }
            return true;
        }
        return false;
    };
    DiffComputer.prototype._continueProcessingPredicate = function () {
        if (this.maximumRunTimeMs === 0) {
            return true;
        }
        var now = (new Date()).getTime();
        return now - this.computationStartTime < this.maximumRunTimeMs;
    };
    return DiffComputer;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js ***!
  \**********************************************************************************/
/*! exports provided: MirrorTextModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MirrorTextModel", function() { return MirrorTextModel; });
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _viewModel_prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModel/prefixSumComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var MirrorTextModel = /** @class */ (function () {
    function MirrorTextModel(uri, lines, eol, versionId) {
        this._uri = uri;
        this._lines = lines;
        this._eol = eol;
        this._versionId = versionId;
        this._lineStarts = null;
    }
    MirrorTextModel.prototype.dispose = function () {
        this._lines.length = 0;
    };
    MirrorTextModel.prototype.getText = function () {
        return this._lines.join(this._eol);
    };
    MirrorTextModel.prototype.onEvents = function (e) {
        if (e.eol && e.eol !== this._eol) {
            this._eol = e.eol;
            this._lineStarts = null;
        }
        // Update my lines
        var changes = e.changes;
        for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
            var change = changes_1[_i];
            this._acceptDeleteRange(change.range);
            this._acceptInsertText(new _core_position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](change.range.startLineNumber, change.range.startColumn), change.text);
        }
        this._versionId = e.versionId;
    };
    MirrorTextModel.prototype._ensureLineStarts = function () {
        if (!this._lineStarts) {
            var eolLength = this._eol.length;
            var linesLength = this._lines.length;
            var lineStartValues = new Uint32Array(linesLength);
            for (var i = 0; i < linesLength; i++) {
                lineStartValues[i] = this._lines[i].length + eolLength;
            }
            this._lineStarts = new _viewModel_prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_1__["PrefixSumComputer"](lineStartValues);
        }
    };
    /**
     * All changes to a line's text go through this method
     */
    MirrorTextModel.prototype._setLineText = function (lineIndex, newValue) {
        this._lines[lineIndex] = newValue;
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.changeValue(lineIndex, this._lines[lineIndex].length + this._eol.length);
        }
    };
    MirrorTextModel.prototype._acceptDeleteRange = function (range) {
        if (range.startLineNumber === range.endLineNumber) {
            if (range.startColumn === range.endColumn) {
                // Nothing to delete
                return;
            }
            // Delete text on the affected line
            this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
                + this._lines[range.startLineNumber - 1].substring(range.endColumn - 1));
            return;
        }
        // Take remaining text on last line and append it to remaining text on first line
        this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
            + this._lines[range.endLineNumber - 1].substring(range.endColumn - 1));
        // Delete middle lines
        this._lines.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        }
    };
    MirrorTextModel.prototype._acceptInsertText = function (position, insertText) {
        if (insertText.length === 0) {
            // Nothing to insert
            return;
        }
        var insertLines = insertText.split(/\r\n|\r|\n/);
        if (insertLines.length === 1) {
            // Inserting text on one line
            this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
                + insertLines[0]
                + this._lines[position.lineNumber - 1].substring(position.column - 1));
            return;
        }
        // Append overflowing text from first line to the end of text to insert
        insertLines[insertLines.length - 1] += this._lines[position.lineNumber - 1].substring(position.column - 1);
        // Delete overflowing text from first line and insert text on first line
        this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
            + insertLines[0]);
        // Insert new lines & store lengths
        var newLengths = new Uint32Array(insertLines.length - 1);
        for (var i = 1; i < insertLines.length; i++) {
            this._lines.splice(position.lineNumber + i - 1, 0, insertLines[i]);
            newLengths[i - 1] = insertLines[i].length + this._eol.length;
        }
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.insertValues(position.lineNumber, newLengths);
        }
    };
    return MirrorTextModel;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js ***!
  \*****************************************************************************/
/*! exports provided: USUAL_WORD_SEPARATORS, DEFAULT_WORD_REGEXP, ensureValidWordDefinition, getWordAtText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUAL_WORD_SEPARATORS", function() { return USUAL_WORD_SEPARATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WORD_REGEXP", function() { return DEFAULT_WORD_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValidWordDefinition", function() { return ensureValidWordDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWordAtText", function() { return getWordAtText; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
/**
 * Create a word definition regular expression based on default word separators.
 * Optionally provide allowed separators that should be included in words.
 *
 * The default would look like this:
 * /(-?\d*\.\d\w*)|([^\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
 */
function createWordRegExp(allowInWords) {
    if (allowInWords === void 0) { allowInWords = ''; }
    var source = '(-?\\d*\\.\\d\\w*)|([^';
    for (var _i = 0, USUAL_WORD_SEPARATORS_1 = USUAL_WORD_SEPARATORS; _i < USUAL_WORD_SEPARATORS_1.length; _i++) {
        var sep = USUAL_WORD_SEPARATORS_1[_i];
        if (allowInWords.indexOf(sep) >= 0) {
            continue;
        }
        source += '\\' + sep;
    }
    source += '\\s]+)';
    return new RegExp(source, 'g');
}
// catches numbers (including floating numbers) in the first group, and alphanum in the second
var DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(wordDefinition) {
    var result = DEFAULT_WORD_REGEXP;
    if (wordDefinition && (wordDefinition instanceof RegExp)) {
        if (!wordDefinition.global) {
            var flags = 'g';
            if (wordDefinition.ignoreCase) {
                flags += 'i';
            }
            if (wordDefinition.multiline) {
                flags += 'm';
            }
            if (wordDefinition.unicode) {
                flags += 'u';
            }
            result = new RegExp(wordDefinition.source, flags);
        }
        else {
            result = wordDefinition;
        }
    }
    result.lastIndex = 0;
    return result;
}
function getWordAtPosFast(column, wordDefinition, text, textOffset) {
    // find whitespace enclosed text around column and match from there
    var pos = column - 1 - textOffset;
    var start = text.lastIndexOf(' ', pos - 1) + 1;
    wordDefinition.lastIndex = start;
    var match;
    while (match = wordDefinition.exec(text)) {
        var matchIndex = match.index || 0;
        if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
            return {
                word: match[0],
                startColumn: textOffset + 1 + matchIndex,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
            };
        }
    }
    return null;
}
function getWordAtPosSlow(column, wordDefinition, text, textOffset) {
    // matches all words starting at the beginning
    // of the input until it finds a match that encloses
    // the desired column. slow but correct
    var pos = column - 1 - textOffset;
    wordDefinition.lastIndex = 0;
    var match;
    while (match = wordDefinition.exec(text)) {
        var matchIndex = match.index || 0;
        if (matchIndex > pos) {
            // |nW -> matched only after the pos
            return null;
        }
        else if (wordDefinition.lastIndex >= pos) {
            // W|W -> match encloses pos
            return {
                word: match[0],
                startColumn: textOffset + 1 + matchIndex,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
            };
        }
    }
    return null;
}
function getWordAtText(column, wordDefinition, text, textOffset) {
    // if `words` can contain whitespace character we have to use the slow variant
    // otherwise we use the fast variant of finding a word
    wordDefinition.lastIndex = 0;
    var match = wordDefinition.exec(text);
    if (!match) {
        return null;
    }
    // todo@joh the `match` could already be the (first) word
    var ret = match[0].indexOf(' ') >= 0
        // did match a word which contains a space character -> use slow word find
        ? getWordAtPosSlow(column, wordDefinition, text, textOffset)
        // sane word definition -> use fast word find
        : getWordAtPosFast(column, wordDefinition, text, textOffset);
    // both (getWordAtPosFast and getWordAtPosSlow) leave the wordDefinition-RegExp
    // in an undefined state and to not confuse other users of the wordDefinition
    // we reset the lastIndex
    wordDefinition.lastIndex = 0;
    return ret;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js ***!
  \*******************************************************************************/
/*! exports provided: StateMachine, LinkComputer, computeLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachine", function() { return StateMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComputer", function() { return LinkComputer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeLinks", function() { return computeLinks; });
/* harmony import */ var _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/characterClassifier.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js");
/* harmony import */ var _core_uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var StateMachine = /** @class */ (function () {
    function StateMachine(edges) {
        var maxCharCode = 0;
        var maxState = 0 /* Invalid */;
        for (var i = 0, len = edges.length; i < len; i++) {
            var _a = edges[i], from = _a[0], chCode = _a[1], to = _a[2];
            if (chCode > maxCharCode) {
                maxCharCode = chCode;
            }
            if (from > maxState) {
                maxState = from;
            }
            if (to > maxState) {
                maxState = to;
            }
        }
        maxCharCode++;
        maxState++;
        var states = new _core_uint_js__WEBPACK_IMPORTED_MODULE_1__["Uint8Matrix"](maxState, maxCharCode, 0 /* Invalid */);
        for (var i = 0, len = edges.length; i < len; i++) {
            var _b = edges[i], from = _b[0], chCode = _b[1], to = _b[2];
            states.set(from, chCode, to);
        }
        this._states = states;
        this._maxCharCode = maxCharCode;
    }
    StateMachine.prototype.nextState = function (currentState, chCode) {
        if (chCode < 0 || chCode >= this._maxCharCode) {
            return 0 /* Invalid */;
        }
        return this._states.get(currentState, chCode);
    };
    return StateMachine;
}());

// State machine for http:// or https:// or file://
var _stateMachine = null;
function getStateMachine() {
    if (_stateMachine === null) {
        _stateMachine = new StateMachine([
            [1 /* Start */, 104 /* h */, 2 /* H */],
            [1 /* Start */, 72 /* H */, 2 /* H */],
            [1 /* Start */, 102 /* f */, 6 /* F */],
            [1 /* Start */, 70 /* F */, 6 /* F */],
            [2 /* H */, 116 /* t */, 3 /* HT */],
            [2 /* H */, 84 /* T */, 3 /* HT */],
            [3 /* HT */, 116 /* t */, 4 /* HTT */],
            [3 /* HT */, 84 /* T */, 4 /* HTT */],
            [4 /* HTT */, 112 /* p */, 5 /* HTTP */],
            [4 /* HTT */, 80 /* P */, 5 /* HTTP */],
            [5 /* HTTP */, 115 /* s */, 9 /* BeforeColon */],
            [5 /* HTTP */, 83 /* S */, 9 /* BeforeColon */],
            [5 /* HTTP */, 58 /* Colon */, 10 /* AfterColon */],
            [6 /* F */, 105 /* i */, 7 /* FI */],
            [6 /* F */, 73 /* I */, 7 /* FI */],
            [7 /* FI */, 108 /* l */, 8 /* FIL */],
            [7 /* FI */, 76 /* L */, 8 /* FIL */],
            [8 /* FIL */, 101 /* e */, 9 /* BeforeColon */],
            [8 /* FIL */, 69 /* E */, 9 /* BeforeColon */],
            [9 /* BeforeColon */, 58 /* Colon */, 10 /* AfterColon */],
            [10 /* AfterColon */, 47 /* Slash */, 11 /* AlmostThere */],
            [11 /* AlmostThere */, 47 /* Slash */, 12 /* End */],
        ]);
    }
    return _stateMachine;
}
var _classifier = null;
function getClassifier() {
    if (_classifier === null) {
        _classifier = new _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__["CharacterClassifier"](0 /* None */);
        var FORCE_TERMINATION_CHARACTERS = ' \t<>\'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…';
        for (var i = 0; i < FORCE_TERMINATION_CHARACTERS.length; i++) {
            _classifier.set(FORCE_TERMINATION_CHARACTERS.charCodeAt(i), 1 /* ForceTermination */);
        }
        var CANNOT_END_WITH_CHARACTERS = '.,;';
        for (var i = 0; i < CANNOT_END_WITH_CHARACTERS.length; i++) {
            _classifier.set(CANNOT_END_WITH_CHARACTERS.charCodeAt(i), 2 /* CannotEndIn */);
        }
    }
    return _classifier;
}
var LinkComputer = /** @class */ (function () {
    function LinkComputer() {
    }
    LinkComputer._createLink = function (classifier, line, lineNumber, linkBeginIndex, linkEndIndex) {
        // Do not allow to end link in certain characters...
        var lastIncludedCharIndex = linkEndIndex - 1;
        do {
            var chCode = line.charCodeAt(lastIncludedCharIndex);
            var chClass = classifier.get(chCode);
            if (chClass !== 2 /* CannotEndIn */) {
                break;
            }
            lastIncludedCharIndex--;
        } while (lastIncludedCharIndex > linkBeginIndex);
        // Handle links enclosed in parens, square brackets and curlys.
        if (linkBeginIndex > 0) {
            var charCodeBeforeLink = line.charCodeAt(linkBeginIndex - 1);
            var lastCharCodeInLink = line.charCodeAt(lastIncludedCharIndex);
            if ((charCodeBeforeLink === 40 /* OpenParen */ && lastCharCodeInLink === 41 /* CloseParen */)
                || (charCodeBeforeLink === 91 /* OpenSquareBracket */ && lastCharCodeInLink === 93 /* CloseSquareBracket */)
                || (charCodeBeforeLink === 123 /* OpenCurlyBrace */ && lastCharCodeInLink === 125 /* CloseCurlyBrace */)) {
                // Do not end in ) if ( is before the link start
                // Do not end in ] if [ is before the link start
                // Do not end in } if { is before the link start
                lastIncludedCharIndex--;
            }
        }
        return {
            range: {
                startLineNumber: lineNumber,
                startColumn: linkBeginIndex + 1,
                endLineNumber: lineNumber,
                endColumn: lastIncludedCharIndex + 2
            },
            url: line.substring(linkBeginIndex, lastIncludedCharIndex + 1)
        };
    };
    LinkComputer.computeLinks = function (model, stateMachine) {
        if (stateMachine === void 0) { stateMachine = getStateMachine(); }
        var classifier = getClassifier();
        var result = [];
        for (var i = 1, lineCount = model.getLineCount(); i <= lineCount; i++) {
            var line = model.getLineContent(i);
            var len = line.length;
            var j = 0;
            var linkBeginIndex = 0;
            var linkBeginChCode = 0;
            var state = 1 /* Start */;
            var hasOpenParens = false;
            var hasOpenSquareBracket = false;
            var hasOpenCurlyBracket = false;
            while (j < len) {
                var resetStateMachine = false;
                var chCode = line.charCodeAt(j);
                if (state === 13 /* Accept */) {
                    var chClass = void 0;
                    switch (chCode) {
                        case 40 /* OpenParen */:
                            hasOpenParens = true;
                            chClass = 0 /* None */;
                            break;
                        case 41 /* CloseParen */:
                            chClass = (hasOpenParens ? 0 /* None */ : 1 /* ForceTermination */);
                            break;
                        case 91 /* OpenSquareBracket */:
                            hasOpenSquareBracket = true;
                            chClass = 0 /* None */;
                            break;
                        case 93 /* CloseSquareBracket */:
                            chClass = (hasOpenSquareBracket ? 0 /* None */ : 1 /* ForceTermination */);
                            break;
                        case 123 /* OpenCurlyBrace */:
                            hasOpenCurlyBracket = true;
                            chClass = 0 /* None */;
                            break;
                        case 125 /* CloseCurlyBrace */:
                            chClass = (hasOpenCurlyBracket ? 0 /* None */ : 1 /* ForceTermination */);
                            break;
                        /* The following three rules make it that ' or " or ` are allowed inside links if the link began with a different one */
                        case 39 /* SingleQuote */:
                            chClass = (linkBeginChCode === 34 /* DoubleQuote */ || linkBeginChCode === 96 /* BackTick */) ? 0 /* None */ : 1 /* ForceTermination */;
                            break;
                        case 34 /* DoubleQuote */:
                            chClass = (linkBeginChCode === 39 /* SingleQuote */ || linkBeginChCode === 96 /* BackTick */) ? 0 /* None */ : 1 /* ForceTermination */;
                            break;
                        case 96 /* BackTick */:
                            chClass = (linkBeginChCode === 39 /* SingleQuote */ || linkBeginChCode === 34 /* DoubleQuote */) ? 0 /* None */ : 1 /* ForceTermination */;
                            break;
                        default:
                            chClass = classifier.get(chCode);
                    }
                    // Check if character terminates link
                    if (chClass === 1 /* ForceTermination */) {
                        result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, j));
                        resetStateMachine = true;
                    }
                }
                else if (state === 12 /* End */) {
                    var chClass = void 0;
                    if (chCode === 91 /* OpenSquareBracket */) {
                        // Allow for the authority part to contain ipv6 addresses which contain [ and ]
                        hasOpenSquareBracket = true;
                        chClass = 0 /* None */;
                    }
                    else {
                        chClass = classifier.get(chCode);
                    }
                    // Check if character terminates link
                    if (chClass === 1 /* ForceTermination */) {
                        resetStateMachine = true;
                    }
                    else {
                        state = 13 /* Accept */;
                    }
                }
                else {
                    state = stateMachine.nextState(state, chCode);
                    if (state === 0 /* Invalid */) {
                        resetStateMachine = true;
                    }
                }
                if (resetStateMachine) {
                    state = 1 /* Start */;
                    hasOpenParens = false;
                    hasOpenSquareBracket = false;
                    hasOpenCurlyBracket = false;
                    // Record where the link started
                    linkBeginIndex = j + 1;
                    linkBeginChCode = chCode;
                }
                j++;
            }
            if (state === 13 /* Accept */) {
                result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, len));
            }
        }
        return result;
    };
    return LinkComputer;
}());

/**
 * Returns an array of all links contains in the provided
 * document. *Note* that this operation is computational
 * expensive and should not run in the UI thread.
 */
function computeLinks(model) {
    if (!model || typeof model.getLineCount !== 'function' || typeof model.getLineContent !== 'function') {
        // Unknown caller!
        return [];
    }
    return LinkComputer.computeLinks(model);
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js ***!
  \*************************************************************************************************/
/*! exports provided: BasicInplaceReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInplaceReplace", function() { return BasicInplaceReplace; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var BasicInplaceReplace = /** @class */ (function () {
    function BasicInplaceReplace() {
        this._defaultValueSet = [
            ['true', 'false'],
            ['True', 'False'],
            ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'],
            ['public', 'protected', 'private'],
        ];
    }
    BasicInplaceReplace.prototype.navigateValueSet = function (range1, text1, range2, text2, up) {
        if (range1 && text1) {
            var result = this.doNavigateValueSet(text1, up);
            if (result) {
                return {
                    range: range1,
                    value: result
                };
            }
        }
        if (range2 && text2) {
            var result = this.doNavigateValueSet(text2, up);
            if (result) {
                return {
                    range: range2,
                    value: result
                };
            }
        }
        return null;
    };
    BasicInplaceReplace.prototype.doNavigateValueSet = function (text, up) {
        var numberResult = this.numberReplace(text, up);
        if (numberResult !== null) {
            return numberResult;
        }
        return this.textReplace(text, up);
    };
    BasicInplaceReplace.prototype.numberReplace = function (value, up) {
        var precision = Math.pow(10, value.length - (value.lastIndexOf('.') + 1));
        var n1 = Number(value);
        var n2 = parseFloat(value);
        if (!isNaN(n1) && !isNaN(n2) && n1 === n2) {
            if (n1 === 0 && !up) {
                return null; // don't do negative
                //			} else if(n1 === 9 && up) {
                //				return null; // don't insert 10 into a number
            }
            else {
                n1 = Math.floor(n1 * precision);
                n1 += up ? precision : -precision;
                return String(n1 / precision);
            }
        }
        return null;
    };
    BasicInplaceReplace.prototype.textReplace = function (value, up) {
        return this.valueSetsReplace(this._defaultValueSet, value, up);
    };
    BasicInplaceReplace.prototype.valueSetsReplace = function (valueSets, value, up) {
        var result = null;
        for (var i = 0, len = valueSets.length; result === null && i < len; i++) {
            result = this.valueSetReplace(valueSets[i], value, up);
        }
        return result;
    };
    BasicInplaceReplace.prototype.valueSetReplace = function (valueSet, value, up) {
        var idx = valueSet.indexOf(value);
        if (idx >= 0) {
            idx += up ? +1 : -1;
            if (idx < 0) {
                idx = valueSet.length - 1;
            }
            else {
                idx %= valueSet.length;
            }
            return valueSet[idx];
        }
        return null;
    };
    BasicInplaceReplace.INSTANCE = new BasicInplaceReplace();
    return BasicInplaceReplace;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js ***!
  \****************************************************************************************/
/*! exports provided: EditorSimpleWorker, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorSimpleWorker", function() { return EditorSimpleWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/common/arrays.js */ "./node_modules/monaco-editor/esm/vs/base/common/arrays.js");
/* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/common/diff/diff.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js");
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/common/iterator.js */ "./node_modules/monaco-editor/esm/vs/base/common/iterator.js");
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/common/platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js");
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/common/uri.js */ "./node_modules/monaco-editor/esm/vs/base/common/uri.js");
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js");
/* harmony import */ var _diff_diffComputer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../diff/diffComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js");
/* harmony import */ var _model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/mirrorTextModel.js */ "./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js");
/* harmony import */ var _model_wordHelper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/wordHelper.js */ "./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js");
/* harmony import */ var _modes_linkComputer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modes/linkComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js");
/* harmony import */ var _modes_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modes/supports/inplaceReplaceSupport.js */ "./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js");
/* harmony import */ var _standalone_standaloneBase_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../standalone/standaloneBase.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js");
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../base/common/types.js */ "./node_modules/monaco-editor/esm/vs/base/common/types.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();














/**
 * @internal
 */
var MirrorModel = /** @class */ (function (_super) {
    __extends(MirrorModel, _super);
    function MirrorModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MirrorModel.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MirrorModel.prototype, "version", {
        get: function () {
            return this._versionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MirrorModel.prototype, "eol", {
        get: function () {
            return this._eol;
        },
        enumerable: true,
        configurable: true
    });
    MirrorModel.prototype.getValue = function () {
        return this.getText();
    };
    MirrorModel.prototype.getLinesContent = function () {
        return this._lines.slice(0);
    };
    MirrorModel.prototype.getLineCount = function () {
        return this._lines.length;
    };
    MirrorModel.prototype.getLineContent = function (lineNumber) {
        return this._lines[lineNumber - 1];
    };
    MirrorModel.prototype.getWordAtPosition = function (position, wordDefinition) {
        var wordAtText = Object(_model_wordHelper_js__WEBPACK_IMPORTED_MODULE_9__["getWordAtText"])(position.column, Object(_model_wordHelper_js__WEBPACK_IMPORTED_MODULE_9__["ensureValidWordDefinition"])(wordDefinition), this._lines[position.lineNumber - 1], 0);
        if (wordAtText) {
            return new _core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"](position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
        }
        return null;
    };
    MirrorModel.prototype.getWordUntilPosition = function (position, wordDefinition) {
        var wordAtPosition = this.getWordAtPosition(position, wordDefinition);
        if (!wordAtPosition) {
            return {
                word: '',
                startColumn: position.column,
                endColumn: position.column
            };
        }
        return {
            word: this._lines[position.lineNumber - 1].substring(wordAtPosition.startColumn - 1, position.column - 1),
            startColumn: wordAtPosition.startColumn,
            endColumn: position.column
        };
    };
    MirrorModel.prototype.createWordIterator = function (wordDefinition) {
        var _this = this;
        var obj;
        var lineNumber = 0;
        var lineText;
        var wordRangesIdx = 0;
        var wordRanges = [];
        var next = function () {
            if (wordRangesIdx < wordRanges.length) {
                var value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
                wordRangesIdx += 1;
                if (!obj) {
                    obj = { done: false, value: value };
                }
                else {
                    obj.value = value;
                }
                return obj;
            }
            else if (lineNumber >= _this._lines.length) {
                return _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__["FIN"];
            }
            else {
                lineText = _this._lines[lineNumber];
                wordRanges = _this._wordenize(lineText, wordDefinition);
                wordRangesIdx = 0;
                lineNumber += 1;
                return next();
            }
        };
        return { next: next };
    };
    MirrorModel.prototype.getLineWords = function (lineNumber, wordDefinition) {
        var content = this._lines[lineNumber - 1];
        var ranges = this._wordenize(content, wordDefinition);
        var words = [];
        for (var _i = 0, ranges_1 = ranges; _i < ranges_1.length; _i++) {
            var range = ranges_1[_i];
            words.push({
                word: content.substring(range.start, range.end),
                startColumn: range.start + 1,
                endColumn: range.end + 1
            });
        }
        return words;
    };
    MirrorModel.prototype._wordenize = function (content, wordDefinition) {
        var result = [];
        var match;
        wordDefinition.lastIndex = 0; // reset lastIndex just to be sure
        while (match = wordDefinition.exec(content)) {
            if (match[0].length === 0) {
                // it did match the empty string
                break;
            }
            result.push({ start: match.index, end: match.index + match[0].length });
        }
        return result;
    };
    MirrorModel.prototype.getValueInRange = function (range) {
        range = this._validateRange(range);
        if (range.startLineNumber === range.endLineNumber) {
            return this._lines[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
        }
        var lineEnding = this._eol;
        var startLineIndex = range.startLineNumber - 1;
        var endLineIndex = range.endLineNumber - 1;
        var resultLines = [];
        resultLines.push(this._lines[startLineIndex].substring(range.startColumn - 1));
        for (var i = startLineIndex + 1; i < endLineIndex; i++) {
            resultLines.push(this._lines[i]);
        }
        resultLines.push(this._lines[endLineIndex].substring(0, range.endColumn - 1));
        return resultLines.join(lineEnding);
    };
    MirrorModel.prototype.offsetAt = function (position) {
        position = this._validatePosition(position);
        this._ensureLineStarts();
        return this._lineStarts.getAccumulatedValue(position.lineNumber - 2) + (position.column - 1);
    };
    MirrorModel.prototype.positionAt = function (offset) {
        offset = Math.floor(offset);
        offset = Math.max(0, offset);
        this._ensureLineStarts();
        var out = this._lineStarts.getIndexOf(offset);
        var lineLength = this._lines[out.index].length;
        // Ensure we return a valid position
        return {
            lineNumber: 1 + out.index,
            column: 1 + Math.min(out.remainder, lineLength)
        };
    };
    MirrorModel.prototype._validateRange = function (range) {
        var start = this._validatePosition({ lineNumber: range.startLineNumber, column: range.startColumn });
        var end = this._validatePosition({ lineNumber: range.endLineNumber, column: range.endColumn });
        if (start.lineNumber !== range.startLineNumber
            || start.column !== range.startColumn
            || end.lineNumber !== range.endLineNumber
            || end.column !== range.endColumn) {
            return {
                startLineNumber: start.lineNumber,
                startColumn: start.column,
                endLineNumber: end.lineNumber,
                endColumn: end.column
            };
        }
        return range;
    };
    MirrorModel.prototype._validatePosition = function (position) {
        if (!_core_position_js__WEBPACK_IMPORTED_MODULE_5__["Position"].isIPosition(position)) {
            throw new Error('bad position');
        }
        var lineNumber = position.lineNumber, column = position.column;
        var hasChanged = false;
        if (lineNumber < 1) {
            lineNumber = 1;
            column = 1;
            hasChanged = true;
        }
        else if (lineNumber > this._lines.length) {
            lineNumber = this._lines.length;
            column = this._lines[lineNumber - 1].length + 1;
            hasChanged = true;
        }
        else {
            var maxCharacter = this._lines[lineNumber - 1].length + 1;
            if (column < 1) {
                column = 1;
                hasChanged = true;
            }
            else if (column > maxCharacter) {
                column = maxCharacter;
                hasChanged = true;
            }
        }
        if (!hasChanged) {
            return position;
        }
        else {
            return { lineNumber: lineNumber, column: column };
        }
    };
    return MirrorModel;
}(_model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_8__["MirrorTextModel"]));
/**
 * @internal
 */
var EditorSimpleWorker = /** @class */ (function () {
    function EditorSimpleWorker(host, foreignModuleFactory) {
        this._host = host;
        this._models = Object.create(null);
        this._foreignModuleFactory = foreignModuleFactory;
        this._foreignModule = null;
    }
    EditorSimpleWorker.prototype.dispose = function () {
        this._models = Object.create(null);
    };
    EditorSimpleWorker.prototype._getModel = function (uri) {
        return this._models[uri];
    };
    EditorSimpleWorker.prototype._getModels = function () {
        var _this = this;
        var all = [];
        Object.keys(this._models).forEach(function (key) { return all.push(_this._models[key]); });
        return all;
    };
    EditorSimpleWorker.prototype.acceptNewModel = function (data) {
        this._models[data.url] = new MirrorModel(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__["URI"].parse(data.url), data.lines, data.EOL, data.versionId);
    };
    EditorSimpleWorker.prototype.acceptModelChanged = function (strURL, e) {
        if (!this._models[strURL]) {
            return;
        }
        var model = this._models[strURL];
        model.onEvents(e);
    };
    EditorSimpleWorker.prototype.acceptRemovedModel = function (strURL) {
        if (!this._models[strURL]) {
            return;
        }
        delete this._models[strURL];
    };
    // ---- BEGIN diff --------------------------------------------------------------------------
    EditorSimpleWorker.prototype.computeDiff = function (originalUrl, modifiedUrl, ignoreTrimWhitespace) {
        var original = this._getModel(originalUrl);
        var modified = this._getModel(modifiedUrl);
        if (!original || !modified) {
            return Promise.resolve(null);
        }
        var originalLines = original.getLinesContent();
        var modifiedLines = modified.getLinesContent();
        var diffComputer = new _diff_diffComputer_js__WEBPACK_IMPORTED_MODULE_7__["DiffComputer"](originalLines, modifiedLines, {
            shouldComputeCharChanges: true,
            shouldPostProcessCharChanges: true,
            shouldIgnoreTrimWhitespace: ignoreTrimWhitespace,
            shouldMakePrettyDiff: true
        });
        var changes = diffComputer.computeDiff();
        var identical = (changes.length > 0 ? false : this._modelsAreIdentical(original, modified));
        return Promise.resolve({
            identical: identical,
            changes: changes
        });
    };
    EditorSimpleWorker.prototype._modelsAreIdentical = function (original, modified) {
        var originalLineCount = original.getLineCount();
        var modifiedLineCount = modified.getLineCount();
        if (originalLineCount !== modifiedLineCount) {
            return false;
        }
        for (var line = 1; line <= originalLineCount; line++) {
            var originalLine = original.getLineContent(line);
            var modifiedLine = modified.getLineContent(line);
            if (originalLine !== modifiedLine) {
                return false;
            }
        }
        return true;
    };
    EditorSimpleWorker.prototype.computeMoreMinimalEdits = function (modelUrl, edits) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(edits);
        }
        var result = [];
        var lastEol = undefined;
        edits = Object(_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__["mergeSort"])(edits, function (a, b) {
            if (a.range && b.range) {
                return _core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"].compareRangesUsingStarts(a.range, b.range);
            }
            // eol only changes should go to the end
            var aRng = a.range ? 0 : 1;
            var bRng = b.range ? 0 : 1;
            return aRng - bRng;
        });
        for (var _i = 0, edits_1 = edits; _i < edits_1.length; _i++) {
            var _a = edits_1[_i], range = _a.range, text = _a.text, eol = _a.eol;
            if (typeof eol === 'number') {
                lastEol = eol;
            }
            if (_core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"].isEmpty(range) && !text) {
                // empty change
                continue;
            }
            var original = model.getValueInRange(range);
            text = text.replace(/\r\n|\n|\r/g, model.eol);
            if (original === text) {
                // noop
                continue;
            }
            // make sure diff won't take too long
            if (Math.max(text.length, original.length) > EditorSimpleWorker._diffLimit) {
                result.push({ range: range, text: text });
                continue;
            }
            // compute diff between original and edit.text
            var changes = Object(_base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__["stringDiff"])(original, text, false);
            var editOffset = model.offsetAt(_core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"].lift(range).getStartPosition());
            for (var _b = 0, changes_1 = changes; _b < changes_1.length; _b++) {
                var change = changes_1[_b];
                var start = model.positionAt(editOffset + change.originalStart);
                var end = model.positionAt(editOffset + change.originalStart + change.originalLength);
                var newEdit = {
                    text: text.substr(change.modifiedStart, change.modifiedLength),
                    range: { startLineNumber: start.lineNumber, startColumn: start.column, endLineNumber: end.lineNumber, endColumn: end.column }
                };
                if (model.getValueInRange(newEdit.range) !== newEdit.text) {
                    result.push(newEdit);
                }
            }
        }
        if (typeof lastEol === 'number') {
            result.push({ eol: lastEol, text: '', range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } });
        }
        return Promise.resolve(result);
    };
    // ---- END minimal edits ---------------------------------------------------------------
    EditorSimpleWorker.prototype.computeLinks = function (modelUrl) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(null);
        }
        return Promise.resolve(Object(_modes_linkComputer_js__WEBPACK_IMPORTED_MODULE_10__["computeLinks"])(model));
    };
    EditorSimpleWorker.prototype.textualSuggest = function (modelUrl, position, wordDef, wordDefFlags) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(null);
        }
        var seen = Object.create(null);
        var suggestions = [];
        var wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        var wordUntil = model.getWordUntilPosition(position, wordDefRegExp);
        var wordAt = model.getWordAtPosition(position, wordDefRegExp);
        if (wordAt) {
            seen[model.getValueInRange(wordAt)] = true;
        }
        for (var iter = model.createWordIterator(wordDefRegExp), e = iter.next(); !e.done && suggestions.length <= EditorSimpleWorker._suggestionsLimit; e = iter.next()) {
            var word = e.value;
            if (seen[word]) {
                continue;
            }
            seen[word] = true;
            if (!isNaN(Number(word))) {
                continue;
            }
            suggestions.push({
                kind: 18 /* Text */,
                label: word,
                insertText: word,
                range: { startLineNumber: position.lineNumber, startColumn: wordUntil.startColumn, endLineNumber: position.lineNumber, endColumn: wordUntil.endColumn }
            });
        }
        return Promise.resolve({ suggestions: suggestions });
    };
    // ---- END suggest --------------------------------------------------------------------------
    //#region -- word ranges --
    EditorSimpleWorker.prototype.computeWordRanges = function (modelUrl, range, wordDef, wordDefFlags) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(Object.create(null));
        }
        var wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        var result = Object.create(null);
        for (var line = range.startLineNumber; line < range.endLineNumber; line++) {
            var words = model.getLineWords(line, wordDefRegExp);
            for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                var word = words_1[_i];
                if (!isNaN(Number(word.word))) {
                    continue;
                }
                var array = result[word.word];
                if (!array) {
                    array = [];
                    result[word.word] = array;
                }
                array.push({
                    startLineNumber: line,
                    startColumn: word.startColumn,
                    endLineNumber: line,
                    endColumn: word.endColumn
                });
            }
        }
        return Promise.resolve(result);
    };
    //#endregion
    EditorSimpleWorker.prototype.navigateValueSet = function (modelUrl, range, up, wordDef, wordDefFlags) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return Promise.resolve(null);
        }
        var wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        if (range.startColumn === range.endColumn) {
            range = {
                startLineNumber: range.startLineNumber,
                startColumn: range.startColumn,
                endLineNumber: range.endLineNumber,
                endColumn: range.endColumn + 1
            };
        }
        var selectionText = model.getValueInRange(range);
        var wordRange = model.getWordAtPosition({ lineNumber: range.startLineNumber, column: range.startColumn }, wordDefRegExp);
        if (!wordRange) {
            return Promise.resolve(null);
        }
        var word = model.getValueInRange(wordRange);
        var result = _modes_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_11__["BasicInplaceReplace"].INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
        return Promise.resolve(result);
    };
    // ---- BEGIN foreign module support --------------------------------------------------------------------------
    EditorSimpleWorker.prototype.loadForeignModule = function (moduleId, createData, foreignHostMethods) {
        var _this = this;
        var proxyMethodRequest = function (method, args) {
            return _this._host.fhr(method, args);
        };
        var foreignHost = _base_common_types_js__WEBPACK_IMPORTED_MODULE_13__["createProxyObject"](foreignHostMethods, proxyMethodRequest);
        var ctx = {
            host: foreignHost,
            getMirrorModels: function () {
                return _this._getModels();
            }
        };
        if (this._foreignModuleFactory) {
            this._foreignModule = this._foreignModuleFactory(ctx, createData);
            // static foreing module
            return Promise.resolve(_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__["getAllMethodNames"](this._foreignModule));
        }
        // ESM-comment-begin
        // 		return new Promise<any>((resolve, reject) => {
        // 			require([moduleId], (foreignModule: { create: IForeignModuleFactory }) => {
        // 				this._foreignModule = foreignModule.create(ctx, createData);
        // 
        // 				resolve(types.getAllMethodNames(this._foreignModule));
        // 
        // 			}, reject);
        // 		});
        // ESM-comment-end
        // ESM-uncomment-begin
        return Promise.reject(new Error("Unexpected usage"));
        // ESM-uncomment-end
    };
    // foreign method request
    EditorSimpleWorker.prototype.fmr = function (method, args) {
        if (!this._foreignModule || typeof this._foreignModule[method] !== 'function') {
            return Promise.reject(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return Promise.resolve(this._foreignModule[method].apply(this._foreignModule, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    // ---- END diff --------------------------------------------------------------------------
    // ---- BEGIN minimal edits ---------------------------------------------------------------
    EditorSimpleWorker._diffLimit = 100000;
    // ---- BEGIN suggest --------------------------------------------------------------------------
    EditorSimpleWorker._suggestionsLimit = 10000;
    return EditorSimpleWorker;
}());

/**
 * Called on the worker side
 * @internal
 */
function create(host) {
    return new EditorSimpleWorker(host, null);
}
if (typeof importScripts === 'function') {
    // Running in a web worker
    _base_common_platform_js__WEBPACK_IMPORTED_MODULE_3__["globals"].monaco = Object(_standalone_standaloneBase_js__WEBPACK_IMPORTED_MODULE_12__["createMonacoBaseAPI"])();
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {/*!
Copyright (c) 2014 Taylor Hakes
Copyright (c) 2014 Forbes Lindesay
 */
(function (global, factory) {
	 true ? factory() :
		undefined;
}(this, (function () {
	'use strict';

	/**
	 * @this {Promise}
	 */
	function finallyConstructor(callback) {
		var constructor = this.constructor;
		return this.then(
			function (value) {
				return constructor.resolve(callback()).then(function () {
					return value;
				});
			},
			function (reason) {
				return constructor.resolve(callback()).then(function () {
					return constructor.reject(reason);
				});
			}
		);
	}

	// Store setTimeout reference so promise-polyfill will be unaffected by
	// other code modifying setTimeout (like sinon.useFakeTimers())
	var setTimeoutFunc = setTimeout;

	function noop() { }

	// Polyfill for Function.prototype.bind
	function bind(fn, thisArg) {
		return function () {
			fn.apply(thisArg, arguments);
		};
	}

	/**
	 * @constructor
	 * @param {Function} fn
	 */
	function Promise(fn) {
		if (!(this instanceof Promise))
			throw new TypeError('Promises must be constructed via new');
		if (typeof fn !== 'function') throw new TypeError('not a function');
		/** @type {!number} */
		this._state = 0;
		/** @type {!boolean} */
		this._handled = false;
		/** @type {Promise|undefined} */
		this._value = undefined;
		/** @type {!Array<!Function>} */
		this._deferreds = [];

		doResolve(fn, this);
	}

	function handle(self, deferred) {
		while (self._state === 3) {
			self = self._value;
		}
		if (self._state === 0) {
			self._deferreds.push(deferred);
			return;
		}
		self._handled = true;
		Promise._immediateFn(function () {
			var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
			if (cb === null) {
				(self._state === 1 ? resolve : reject)(deferred.promise, self._value);
				return;
			}
			var ret;
			try {
				ret = cb(self._value);
			} catch (e) {
				reject(deferred.promise, e);
				return;
			}
			resolve(deferred.promise, ret);
		});
	}

	function resolve(self, newValue) {
		try {
			// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
			if (newValue === self)
				throw new TypeError('A promise cannot be resolved with itself.');
			if (
				newValue &&
				(typeof newValue === 'object' || typeof newValue === 'function')
			) {
				var then = newValue.then;
				if (newValue instanceof Promise) {
					self._state = 3;
					self._value = newValue;
					finale(self);
					return;
				} else if (typeof then === 'function') {
					doResolve(bind(then, newValue), self);
					return;
				}
			}
			self._state = 1;
			self._value = newValue;
			finale(self);
		} catch (e) {
			reject(self, e);
		}
	}

	function reject(self, newValue) {
		self._state = 2;
		self._value = newValue;
		finale(self);
	}

	function finale(self) {
		if (self._state === 2 && self._deferreds.length === 0) {
			Promise._immediateFn(function () {
				if (!self._handled) {
					Promise._unhandledRejectionFn(self._value);
				}
			});
		}

		for (var i = 0, len = self._deferreds.length; i < len; i++) {
			handle(self, self._deferreds[i]);
		}
		self._deferreds = null;
	}

	/**
	 * @constructor
	 */
	function Handler(onFulfilled, onRejected, promise) {
		this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
		this.onRejected = typeof onRejected === 'function' ? onRejected : null;
		this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, self) {
		var done = false;
		try {
			fn(
				function (value) {
					if (done) return;
					done = true;
					resolve(self, value);
				},
				function (reason) {
					if (done) return;
					done = true;
					reject(self, reason);
				}
			);
		} catch (ex) {
			if (done) return;
			done = true;
			reject(self, ex);
		}
	}

	Promise.prototype['catch'] = function (onRejected) {
		return this.then(null, onRejected);
	};

	Promise.prototype.then = function (onFulfilled, onRejected) {
		// @ts-ignore
		var prom = new this.constructor(noop);

		handle(this, new Handler(onFulfilled, onRejected, prom));
		return prom;
	};

	Promise.prototype['finally'] = finallyConstructor;

	Promise.all = function (arr) {
		return new Promise(function (resolve, reject) {
			if (!arr || typeof arr.length === 'undefined')
				throw new TypeError('Promise.all accepts an array');
			var args = Array.prototype.slice.call(arr);
			if (args.length === 0) return resolve([]);
			var remaining = args.length;

			function res(i, val) {
				try {
					if (val && (typeof val === 'object' || typeof val === 'function')) {
						var then = val.then;
						if (typeof then === 'function') {
							then.call(
								val,
								function (val) {
									res(i, val);
								},
								reject
							);
							return;
						}
					}
					args[i] = val;
					if (--remaining === 0) {
						resolve(args);
					}
				} catch (ex) {
					reject(ex);
				}
			}

			for (var i = 0; i < args.length; i++) {
				res(i, args[i]);
			}
		});
	};

	Promise.resolve = function (value) {
		if (value && typeof value === 'object' && value.constructor === Promise) {
			return value;
		}

		return new Promise(function (resolve) {
			resolve(value);
		});
	};

	Promise.reject = function (value) {
		return new Promise(function (resolve, reject) {
			reject(value);
		});
	};

	Promise.race = function (values) {
		return new Promise(function (resolve, reject) {
			for (var i = 0, len = values.length; i < len; i++) {
				values[i].then(resolve, reject);
			}
		});
	};

	// Use polyfill for setImmediate for performance gains
	Promise._immediateFn =
		(typeof setImmediate === 'function' &&
			function (fn) {
				setImmediate(fn);
			}) ||
		function (fn) {
			setTimeoutFunc(fn, 0);
		};

	Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
		if (typeof console !== 'undefined' && console) {
			console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
		}
	};

	/** @suppress {undefinedVars} */
	var globalNS = (function () {
		// the only reliable means to get the global object is
		// `Function('return this')()`
		// However, this causes CSP violations in Chrome apps.
		if (typeof self !== 'undefined') {
			return self;
		}
		if (typeof window !== 'undefined') {
			return window;
		}
		if (typeof global !== 'undefined') {
			return global;
		}
		throw new Error('unable to locate global object');
	})();

	if (!('Promise' in globalNS)) {
		globalNS['Promise'] = Promise;
	} else if (!globalNS.Promise.prototype['finally']) {
		globalNS.Promise.prototype['finally'] = finallyConstructor;
	}

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js ***!
  \**************************************************************************************/
/*! exports provided: KeyMod, createMonacoBaseAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyMod", function() { return KeyMod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMonacoBaseAPI", function() { return createMonacoBaseAPI; });
/* harmony import */ var _promise_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise-polyfill/polyfill.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js");
/* harmony import */ var _promise_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_promise_polyfill_polyfill_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/common/cancellation.js */ "./node_modules/monaco-editor/esm/vs/base/common/cancellation.js");
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/common/event.js */ "./node_modules/monaco-editor/esm/vs/base/common/event.js");
/* harmony import */ var _base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/common/keyCodes.js */ "./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js");
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/common/uri.js */ "./node_modules/monaco-editor/esm/vs/base/common/uri.js");
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js");
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/selection.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js");
/* harmony import */ var _core_token_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/token.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/token.js");
/* harmony import */ var _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./standaloneEnums.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










var KeyMod = /** @class */ (function () {
    function KeyMod() {
    }
    KeyMod.chord = function (firstPart, secondPart) {
        return Object(_base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_3__["KeyChord"])(firstPart, secondPart);
    };
    KeyMod.CtrlCmd = 2048 /* CtrlCmd */;
    KeyMod.Shift = 1024 /* Shift */;
    KeyMod.Alt = 512 /* Alt */;
    KeyMod.WinCtrl = 256 /* WinCtrl */;
    return KeyMod;
}());

function createMonacoBaseAPI() {
    return {
        editor: undefined,
        languages: undefined,
        CancellationTokenSource: _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__["CancellationTokenSource"],
        Emitter: _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__["Emitter"],
        KeyCode: _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["KeyCode"],
        KeyMod: KeyMod,
        Position: _core_position_js__WEBPACK_IMPORTED_MODULE_5__["Position"],
        Range: _core_range_js__WEBPACK_IMPORTED_MODULE_6__["Range"],
        Selection: _core_selection_js__WEBPACK_IMPORTED_MODULE_7__["Selection"],
        SelectionDirection: _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["SelectionDirection"],
        MarkerSeverity: _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["MarkerSeverity"],
        MarkerTag: _standaloneEnums_js__WEBPACK_IMPORTED_MODULE_9__["MarkerTag"],
        Uri: _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__["URI"],
        Token: _core_token_js__WEBPACK_IMPORTED_MODULE_8__["Token"]
    };
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js ***!
  \***************************************************************************************/
/*! exports provided: MarkerTag, MarkerSeverity, KeyCode, SelectionDirection, ScrollbarVisibility, OverviewRulerLane, MinimapPosition, EndOfLinePreference, DefaultEndOfLine, EndOfLineSequence, TrackedRangeStickiness, ScrollType, CursorChangeReason, RenderMinimap, WrappingIndent, TextEditorCursorBlinkingStyle, TextEditorCursorStyle, RenderLineNumbersType, ContentWidgetPositionPreference, OverlayWidgetPositionPreference, MouseTargetType, IndentAction, CompletionItemKind, CompletionItemTag, CompletionItemInsertTextRule, CompletionTriggerKind, SignatureHelpTriggerKind, DocumentHighlightKind, SymbolKind, SymbolTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerTag", function() { return MarkerTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerSeverity", function() { return MarkerSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCode", function() { return KeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return SelectionDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarVisibility", function() { return ScrollbarVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewRulerLane", function() { return OverviewRulerLane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimapPosition", function() { return MinimapPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndOfLinePreference", function() { return EndOfLinePreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEndOfLine", function() { return DefaultEndOfLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndOfLineSequence", function() { return EndOfLineSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackedRangeStickiness", function() { return TrackedRangeStickiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollType", function() { return ScrollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursorChangeReason", function() { return CursorChangeReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMinimap", function() { return RenderMinimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrappingIndent", function() { return WrappingIndent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditorCursorBlinkingStyle", function() { return TextEditorCursorBlinkingStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditorCursorStyle", function() { return TextEditorCursorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderLineNumbersType", function() { return RenderLineNumbersType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWidgetPositionPreference", function() { return ContentWidgetPositionPreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayWidgetPositionPreference", function() { return OverlayWidgetPositionPreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseTargetType", function() { return MouseTargetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndentAction", function() { return IndentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemKind", function() { return CompletionItemKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemTag", function() { return CompletionItemTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemInsertTextRule", function() { return CompletionItemInsertTextRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionTriggerKind", function() { return CompletionTriggerKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpTriggerKind", function() { return SignatureHelpTriggerKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightKind", function() { return DocumentHighlightKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolKind", function() { return SymbolKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolTag", function() { return SymbolTag; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// THIS IS A GENERATED FILE. DO NOT EDIT DIRECTLY.
var MarkerTag;
(function (MarkerTag) {
    MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
    MarkerTag[MarkerTag["Deprecated"] = 2] = "Deprecated";
})(MarkerTag || (MarkerTag = {}));
var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));
/**
 * Virtual Key Codes, the value does not hold any inherent meaning.
 * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
 * But these are "more general", as they should work across browsers & OS`s.
 */
var KeyCode;
(function (KeyCode) {
    /**
     * Placed first to cover the 0 value of the enum.
     */
    KeyCode[KeyCode["Unknown"] = 0] = "Unknown";
    KeyCode[KeyCode["Backspace"] = 1] = "Backspace";
    KeyCode[KeyCode["Tab"] = 2] = "Tab";
    KeyCode[KeyCode["Enter"] = 3] = "Enter";
    KeyCode[KeyCode["Shift"] = 4] = "Shift";
    KeyCode[KeyCode["Ctrl"] = 5] = "Ctrl";
    KeyCode[KeyCode["Alt"] = 6] = "Alt";
    KeyCode[KeyCode["PauseBreak"] = 7] = "PauseBreak";
    KeyCode[KeyCode["CapsLock"] = 8] = "CapsLock";
    KeyCode[KeyCode["Escape"] = 9] = "Escape";
    KeyCode[KeyCode["Space"] = 10] = "Space";
    KeyCode[KeyCode["PageUp"] = 11] = "PageUp";
    KeyCode[KeyCode["PageDown"] = 12] = "PageDown";
    KeyCode[KeyCode["End"] = 13] = "End";
    KeyCode[KeyCode["Home"] = 14] = "Home";
    KeyCode[KeyCode["LeftArrow"] = 15] = "LeftArrow";
    KeyCode[KeyCode["UpArrow"] = 16] = "UpArrow";
    KeyCode[KeyCode["RightArrow"] = 17] = "RightArrow";
    KeyCode[KeyCode["DownArrow"] = 18] = "DownArrow";
    KeyCode[KeyCode["Insert"] = 19] = "Insert";
    KeyCode[KeyCode["Delete"] = 20] = "Delete";
    KeyCode[KeyCode["KEY_0"] = 21] = "KEY_0";
    KeyCode[KeyCode["KEY_1"] = 22] = "KEY_1";
    KeyCode[KeyCode["KEY_2"] = 23] = "KEY_2";
    KeyCode[KeyCode["KEY_3"] = 24] = "KEY_3";
    KeyCode[KeyCode["KEY_4"] = 25] = "KEY_4";
    KeyCode[KeyCode["KEY_5"] = 26] = "KEY_5";
    KeyCode[KeyCode["KEY_6"] = 27] = "KEY_6";
    KeyCode[KeyCode["KEY_7"] = 28] = "KEY_7";
    KeyCode[KeyCode["KEY_8"] = 29] = "KEY_8";
    KeyCode[KeyCode["KEY_9"] = 30] = "KEY_9";
    KeyCode[KeyCode["KEY_A"] = 31] = "KEY_A";
    KeyCode[KeyCode["KEY_B"] = 32] = "KEY_B";
    KeyCode[KeyCode["KEY_C"] = 33] = "KEY_C";
    KeyCode[KeyCode["KEY_D"] = 34] = "KEY_D";
    KeyCode[KeyCode["KEY_E"] = 35] = "KEY_E";
    KeyCode[KeyCode["KEY_F"] = 36] = "KEY_F";
    KeyCode[KeyCode["KEY_G"] = 37] = "KEY_G";
    KeyCode[KeyCode["KEY_H"] = 38] = "KEY_H";
    KeyCode[KeyCode["KEY_I"] = 39] = "KEY_I";
    KeyCode[KeyCode["KEY_J"] = 40] = "KEY_J";
    KeyCode[KeyCode["KEY_K"] = 41] = "KEY_K";
    KeyCode[KeyCode["KEY_L"] = 42] = "KEY_L";
    KeyCode[KeyCode["KEY_M"] = 43] = "KEY_M";
    KeyCode[KeyCode["KEY_N"] = 44] = "KEY_N";
    KeyCode[KeyCode["KEY_O"] = 45] = "KEY_O";
    KeyCode[KeyCode["KEY_P"] = 46] = "KEY_P";
    KeyCode[KeyCode["KEY_Q"] = 47] = "KEY_Q";
    KeyCode[KeyCode["KEY_R"] = 48] = "KEY_R";
    KeyCode[KeyCode["KEY_S"] = 49] = "KEY_S";
    KeyCode[KeyCode["KEY_T"] = 50] = "KEY_T";
    KeyCode[KeyCode["KEY_U"] = 51] = "KEY_U";
    KeyCode[KeyCode["KEY_V"] = 52] = "KEY_V";
    KeyCode[KeyCode["KEY_W"] = 53] = "KEY_W";
    KeyCode[KeyCode["KEY_X"] = 54] = "KEY_X";
    KeyCode[KeyCode["KEY_Y"] = 55] = "KEY_Y";
    KeyCode[KeyCode["KEY_Z"] = 56] = "KEY_Z";
    KeyCode[KeyCode["Meta"] = 57] = "Meta";
    KeyCode[KeyCode["ContextMenu"] = 58] = "ContextMenu";
    KeyCode[KeyCode["F1"] = 59] = "F1";
    KeyCode[KeyCode["F2"] = 60] = "F2";
    KeyCode[KeyCode["F3"] = 61] = "F3";
    KeyCode[KeyCode["F4"] = 62] = "F4";
    KeyCode[KeyCode["F5"] = 63] = "F5";
    KeyCode[KeyCode["F6"] = 64] = "F6";
    KeyCode[KeyCode["F7"] = 65] = "F7";
    KeyCode[KeyCode["F8"] = 66] = "F8";
    KeyCode[KeyCode["F9"] = 67] = "F9";
    KeyCode[KeyCode["F10"] = 68] = "F10";
    KeyCode[KeyCode["F11"] = 69] = "F11";
    KeyCode[KeyCode["F12"] = 70] = "F12";
    KeyCode[KeyCode["F13"] = 71] = "F13";
    KeyCode[KeyCode["F14"] = 72] = "F14";
    KeyCode[KeyCode["F15"] = 73] = "F15";
    KeyCode[KeyCode["F16"] = 74] = "F16";
    KeyCode[KeyCode["F17"] = 75] = "F17";
    KeyCode[KeyCode["F18"] = 76] = "F18";
    KeyCode[KeyCode["F19"] = 77] = "F19";
    KeyCode[KeyCode["NumLock"] = 78] = "NumLock";
    KeyCode[KeyCode["ScrollLock"] = 79] = "ScrollLock";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ';:' key
     */
    KeyCode[KeyCode["US_SEMICOLON"] = 80] = "US_SEMICOLON";
    /**
     * For any country/region, the '+' key
     * For the US standard keyboard, the '=+' key
     */
    KeyCode[KeyCode["US_EQUAL"] = 81] = "US_EQUAL";
    /**
     * For any country/region, the ',' key
     * For the US standard keyboard, the ',<' key
     */
    KeyCode[KeyCode["US_COMMA"] = 82] = "US_COMMA";
    /**
     * For any country/region, the '-' key
     * For the US standard keyboard, the '-_' key
     */
    KeyCode[KeyCode["US_MINUS"] = 83] = "US_MINUS";
    /**
     * For any country/region, the '.' key
     * For the US standard keyboard, the '.>' key
     */
    KeyCode[KeyCode["US_DOT"] = 84] = "US_DOT";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '/?' key
     */
    KeyCode[KeyCode["US_SLASH"] = 85] = "US_SLASH";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '`~' key
     */
    KeyCode[KeyCode["US_BACKTICK"] = 86] = "US_BACKTICK";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '[{' key
     */
    KeyCode[KeyCode["US_OPEN_SQUARE_BRACKET"] = 87] = "US_OPEN_SQUARE_BRACKET";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '\|' key
     */
    KeyCode[KeyCode["US_BACKSLASH"] = 88] = "US_BACKSLASH";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ']}' key
     */
    KeyCode[KeyCode["US_CLOSE_SQUARE_BRACKET"] = 89] = "US_CLOSE_SQUARE_BRACKET";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ''"' key
     */
    KeyCode[KeyCode["US_QUOTE"] = 90] = "US_QUOTE";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     */
    KeyCode[KeyCode["OEM_8"] = 91] = "OEM_8";
    /**
     * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
     */
    KeyCode[KeyCode["OEM_102"] = 92] = "OEM_102";
    KeyCode[KeyCode["NUMPAD_0"] = 93] = "NUMPAD_0";
    KeyCode[KeyCode["NUMPAD_1"] = 94] = "NUMPAD_1";
    KeyCode[KeyCode["NUMPAD_2"] = 95] = "NUMPAD_2";
    KeyCode[KeyCode["NUMPAD_3"] = 96] = "NUMPAD_3";
    KeyCode[KeyCode["NUMPAD_4"] = 97] = "NUMPAD_4";
    KeyCode[KeyCode["NUMPAD_5"] = 98] = "NUMPAD_5";
    KeyCode[KeyCode["NUMPAD_6"] = 99] = "NUMPAD_6";
    KeyCode[KeyCode["NUMPAD_7"] = 100] = "NUMPAD_7";
    KeyCode[KeyCode["NUMPAD_8"] = 101] = "NUMPAD_8";
    KeyCode[KeyCode["NUMPAD_9"] = 102] = "NUMPAD_9";
    KeyCode[KeyCode["NUMPAD_MULTIPLY"] = 103] = "NUMPAD_MULTIPLY";
    KeyCode[KeyCode["NUMPAD_ADD"] = 104] = "NUMPAD_ADD";
    KeyCode[KeyCode["NUMPAD_SEPARATOR"] = 105] = "NUMPAD_SEPARATOR";
    KeyCode[KeyCode["NUMPAD_SUBTRACT"] = 106] = "NUMPAD_SUBTRACT";
    KeyCode[KeyCode["NUMPAD_DECIMAL"] = 107] = "NUMPAD_DECIMAL";
    KeyCode[KeyCode["NUMPAD_DIVIDE"] = 108] = "NUMPAD_DIVIDE";
    /**
     * Cover all key codes when IME is processing input.
     */
    KeyCode[KeyCode["KEY_IN_COMPOSITION"] = 109] = "KEY_IN_COMPOSITION";
    KeyCode[KeyCode["ABNT_C1"] = 110] = "ABNT_C1";
    KeyCode[KeyCode["ABNT_C2"] = 111] = "ABNT_C2";
    /**
     * Placed last to cover the length of the enum.
     * Please do not depend on this value!
     */
    KeyCode[KeyCode["MAX_VALUE"] = 112] = "MAX_VALUE";
})(KeyCode || (KeyCode = {}));
/**
 * The direction of a selection.
 */
var SelectionDirection;
(function (SelectionDirection) {
    /**
     * The selection starts above where it ends.
     */
    SelectionDirection[SelectionDirection["LTR"] = 0] = "LTR";
    /**
     * The selection starts below where it ends.
     */
    SelectionDirection[SelectionDirection["RTL"] = 1] = "RTL";
})(SelectionDirection || (SelectionDirection = {}));
var ScrollbarVisibility;
(function (ScrollbarVisibility) {
    ScrollbarVisibility[ScrollbarVisibility["Auto"] = 1] = "Auto";
    ScrollbarVisibility[ScrollbarVisibility["Hidden"] = 2] = "Hidden";
    ScrollbarVisibility[ScrollbarVisibility["Visible"] = 3] = "Visible";
})(ScrollbarVisibility || (ScrollbarVisibility = {}));
/**
 * Vertical Lane in the overview ruler of the editor.
 */
var OverviewRulerLane;
(function (OverviewRulerLane) {
    OverviewRulerLane[OverviewRulerLane["Left"] = 1] = "Left";
    OverviewRulerLane[OverviewRulerLane["Center"] = 2] = "Center";
    OverviewRulerLane[OverviewRulerLane["Right"] = 4] = "Right";
    OverviewRulerLane[OverviewRulerLane["Full"] = 7] = "Full";
})(OverviewRulerLane || (OverviewRulerLane = {}));
/**
 * Position in the minimap to render the decoration.
 */
var MinimapPosition;
(function (MinimapPosition) {
    MinimapPosition[MinimapPosition["Inline"] = 1] = "Inline";
})(MinimapPosition || (MinimapPosition = {}));
/**
 * End of line character preference.
 */
var EndOfLinePreference;
(function (EndOfLinePreference) {
    /**
     * Use the end of line character identified in the text buffer.
     */
    EndOfLinePreference[EndOfLinePreference["TextDefined"] = 0] = "TextDefined";
    /**
     * Use line feed (\n) as the end of line character.
     */
    EndOfLinePreference[EndOfLinePreference["LF"] = 1] = "LF";
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     */
    EndOfLinePreference[EndOfLinePreference["CRLF"] = 2] = "CRLF";
})(EndOfLinePreference || (EndOfLinePreference = {}));
/**
 * The default end of line to use when instantiating models.
 */
var DefaultEndOfLine;
(function (DefaultEndOfLine) {
    /**
     * Use line feed (\n) as the end of line character.
     */
    DefaultEndOfLine[DefaultEndOfLine["LF"] = 1] = "LF";
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     */
    DefaultEndOfLine[DefaultEndOfLine["CRLF"] = 2] = "CRLF";
})(DefaultEndOfLine || (DefaultEndOfLine = {}));
/**
 * End of line character preference.
 */
var EndOfLineSequence;
(function (EndOfLineSequence) {
    /**
     * Use line feed (\n) as the end of line character.
     */
    EndOfLineSequence[EndOfLineSequence["LF"] = 0] = "LF";
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     */
    EndOfLineSequence[EndOfLineSequence["CRLF"] = 1] = "CRLF";
})(EndOfLineSequence || (EndOfLineSequence = {}));
/**
 * Describes the behavior of decorations when typing/editing near their edges.
 * Note: Please do not edit the values, as they very carefully match `DecorationRangeBehavior`
 */
var TrackedRangeStickiness;
(function (TrackedRangeStickiness) {
    TrackedRangeStickiness[TrackedRangeStickiness["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness || (TrackedRangeStickiness = {}));
var ScrollType;
(function (ScrollType) {
    ScrollType[ScrollType["Smooth"] = 0] = "Smooth";
    ScrollType[ScrollType["Immediate"] = 1] = "Immediate";
})(ScrollType || (ScrollType = {}));
/**
 * Describes the reason the cursor has changed its position.
 */
var CursorChangeReason;
(function (CursorChangeReason) {
    /**
     * Unknown or not set.
     */
    CursorChangeReason[CursorChangeReason["NotSet"] = 0] = "NotSet";
    /**
     * A `model.setValue()` was called.
     */
    CursorChangeReason[CursorChangeReason["ContentFlush"] = 1] = "ContentFlush";
    /**
     * The `model` has been changed outside of this cursor and the cursor recovers its position from associated markers.
     */
    CursorChangeReason[CursorChangeReason["RecoverFromMarkers"] = 2] = "RecoverFromMarkers";
    /**
     * There was an explicit user gesture.
     */
    CursorChangeReason[CursorChangeReason["Explicit"] = 3] = "Explicit";
    /**
     * There was a Paste.
     */
    CursorChangeReason[CursorChangeReason["Paste"] = 4] = "Paste";
    /**
     * There was an Undo.
     */
    CursorChangeReason[CursorChangeReason["Undo"] = 5] = "Undo";
    /**
     * There was a Redo.
     */
    CursorChangeReason[CursorChangeReason["Redo"] = 6] = "Redo";
})(CursorChangeReason || (CursorChangeReason = {}));
var RenderMinimap;
(function (RenderMinimap) {
    RenderMinimap[RenderMinimap["None"] = 0] = "None";
    RenderMinimap[RenderMinimap["Small"] = 1] = "Small";
    RenderMinimap[RenderMinimap["Large"] = 2] = "Large";
    RenderMinimap[RenderMinimap["SmallBlocks"] = 3] = "SmallBlocks";
    RenderMinimap[RenderMinimap["LargeBlocks"] = 4] = "LargeBlocks";
})(RenderMinimap || (RenderMinimap = {}));
/**
 * Describes how to indent wrapped lines.
 */
var WrappingIndent;
(function (WrappingIndent) {
    /**
     * No indentation => wrapped lines begin at column 1.
     */
    WrappingIndent[WrappingIndent["None"] = 0] = "None";
    /**
     * Same => wrapped lines get the same indentation as the parent.
     */
    WrappingIndent[WrappingIndent["Same"] = 1] = "Same";
    /**
     * Indent => wrapped lines get +1 indentation toward the parent.
     */
    WrappingIndent[WrappingIndent["Indent"] = 2] = "Indent";
    /**
     * DeepIndent => wrapped lines get +2 indentation toward the parent.
     */
    WrappingIndent[WrappingIndent["DeepIndent"] = 3] = "DeepIndent";
})(WrappingIndent || (WrappingIndent = {}));
/**
 * The kind of animation in which the editor's cursor should be rendered.
 */
var TextEditorCursorBlinkingStyle;
(function (TextEditorCursorBlinkingStyle) {
    /**
     * Hidden
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Hidden"] = 0] = "Hidden";
    /**
     * Blinking
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Blink"] = 1] = "Blink";
    /**
     * Blinking with smooth fading
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Smooth"] = 2] = "Smooth";
    /**
     * Blinking with prolonged filled state and smooth fading
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Phase"] = 3] = "Phase";
    /**
     * Expand collapse animation on the y axis
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Expand"] = 4] = "Expand";
    /**
     * No-Blinking
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Solid"] = 5] = "Solid";
})(TextEditorCursorBlinkingStyle || (TextEditorCursorBlinkingStyle = {}));
/**
 * The style in which the editor's cursor should be rendered.
 */
var TextEditorCursorStyle;
(function (TextEditorCursorStyle) {
    /**
     * As a vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Line"] = 1] = "Line";
    /**
     * As a block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Block"] = 2] = "Block";
    /**
     * As a horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Underline"] = 3] = "Underline";
    /**
     * As a thin vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["LineThin"] = 4] = "LineThin";
    /**
     * As an outlined block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["BlockOutline"] = 5] = "BlockOutline";
    /**
     * As a thin horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
var RenderLineNumbersType;
(function (RenderLineNumbersType) {
    RenderLineNumbersType[RenderLineNumbersType["Off"] = 0] = "Off";
    RenderLineNumbersType[RenderLineNumbersType["On"] = 1] = "On";
    RenderLineNumbersType[RenderLineNumbersType["Relative"] = 2] = "Relative";
    RenderLineNumbersType[RenderLineNumbersType["Interval"] = 3] = "Interval";
    RenderLineNumbersType[RenderLineNumbersType["Custom"] = 4] = "Custom";
})(RenderLineNumbersType || (RenderLineNumbersType = {}));
/**
 * A positioning preference for rendering content widgets.
 */
var ContentWidgetPositionPreference;
(function (ContentWidgetPositionPreference) {
    /**
     * Place the content widget exactly at a position
     */
    ContentWidgetPositionPreference[ContentWidgetPositionPreference["EXACT"] = 0] = "EXACT";
    /**
     * Place the content widget above a position
     */
    ContentWidgetPositionPreference[ContentWidgetPositionPreference["ABOVE"] = 1] = "ABOVE";
    /**
     * Place the content widget below a position
     */
    ContentWidgetPositionPreference[ContentWidgetPositionPreference["BELOW"] = 2] = "BELOW";
})(ContentWidgetPositionPreference || (ContentWidgetPositionPreference = {}));
/**
 * A positioning preference for rendering overlay widgets.
 */
var OverlayWidgetPositionPreference;
(function (OverlayWidgetPositionPreference) {
    /**
     * Position the overlay widget in the top right corner
     */
    OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_RIGHT_CORNER"] = 0] = "TOP_RIGHT_CORNER";
    /**
     * Position the overlay widget in the bottom right corner
     */
    OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["BOTTOM_RIGHT_CORNER"] = 1] = "BOTTOM_RIGHT_CORNER";
    /**
     * Position the overlay widget in the top center
     */
    OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_CENTER"] = 2] = "TOP_CENTER";
})(OverlayWidgetPositionPreference || (OverlayWidgetPositionPreference = {}));
/**
 * Type of hit element with the mouse in the editor.
 */
var MouseTargetType;
(function (MouseTargetType) {
    /**
     * Mouse is on top of an unknown element.
     */
    MouseTargetType[MouseTargetType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Mouse is on top of the textarea used for input.
     */
    MouseTargetType[MouseTargetType["TEXTAREA"] = 1] = "TEXTAREA";
    /**
     * Mouse is on top of the glyph margin
     */
    MouseTargetType[MouseTargetType["GUTTER_GLYPH_MARGIN"] = 2] = "GUTTER_GLYPH_MARGIN";
    /**
     * Mouse is on top of the line numbers
     */
    MouseTargetType[MouseTargetType["GUTTER_LINE_NUMBERS"] = 3] = "GUTTER_LINE_NUMBERS";
    /**
     * Mouse is on top of the line decorations
     */
    MouseTargetType[MouseTargetType["GUTTER_LINE_DECORATIONS"] = 4] = "GUTTER_LINE_DECORATIONS";
    /**
     * Mouse is on top of the whitespace left in the gutter by a view zone.
     */
    MouseTargetType[MouseTargetType["GUTTER_VIEW_ZONE"] = 5] = "GUTTER_VIEW_ZONE";
    /**
     * Mouse is on top of text in the content.
     */
    MouseTargetType[MouseTargetType["CONTENT_TEXT"] = 6] = "CONTENT_TEXT";
    /**
     * Mouse is on top of empty space in the content (e.g. after line text or below last line)
     */
    MouseTargetType[MouseTargetType["CONTENT_EMPTY"] = 7] = "CONTENT_EMPTY";
    /**
     * Mouse is on top of a view zone in the content.
     */
    MouseTargetType[MouseTargetType["CONTENT_VIEW_ZONE"] = 8] = "CONTENT_VIEW_ZONE";
    /**
     * Mouse is on top of a content widget.
     */
    MouseTargetType[MouseTargetType["CONTENT_WIDGET"] = 9] = "CONTENT_WIDGET";
    /**
     * Mouse is on top of the decorations overview ruler.
     */
    MouseTargetType[MouseTargetType["OVERVIEW_RULER"] = 10] = "OVERVIEW_RULER";
    /**
     * Mouse is on top of a scrollbar.
     */
    MouseTargetType[MouseTargetType["SCROLLBAR"] = 11] = "SCROLLBAR";
    /**
     * Mouse is on top of an overlay widget.
     */
    MouseTargetType[MouseTargetType["OVERLAY_WIDGET"] = 12] = "OVERLAY_WIDGET";
    /**
     * Mouse is outside of the editor.
     */
    MouseTargetType[MouseTargetType["OUTSIDE_EDITOR"] = 13] = "OUTSIDE_EDITOR";
})(MouseTargetType || (MouseTargetType = {}));
/**
 * Describes what to do with the indentation when pressing Enter.
 */
var IndentAction;
(function (IndentAction) {
    /**
     * Insert new line and copy the previous line's indentation.
     */
    IndentAction[IndentAction["None"] = 0] = "None";
    /**
     * Insert new line and indent once (relative to the previous line's indentation).
     */
    IndentAction[IndentAction["Indent"] = 1] = "Indent";
    /**
     * Insert two new lines:
     *  - the first one indented which will hold the cursor
     *  - the second one at the same indentation level
     */
    IndentAction[IndentAction["IndentOutdent"] = 2] = "IndentOutdent";
    /**
     * Insert new line and outdent once (relative to the previous line's indentation).
     */
    IndentAction[IndentAction["Outdent"] = 3] = "Outdent";
})(IndentAction || (IndentAction = {}));
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind[CompletionItemKind["Method"] = 0] = "Method";
    CompletionItemKind[CompletionItemKind["Function"] = 1] = "Function";
    CompletionItemKind[CompletionItemKind["Constructor"] = 2] = "Constructor";
    CompletionItemKind[CompletionItemKind["Field"] = 3] = "Field";
    CompletionItemKind[CompletionItemKind["Variable"] = 4] = "Variable";
    CompletionItemKind[CompletionItemKind["Class"] = 5] = "Class";
    CompletionItemKind[CompletionItemKind["Struct"] = 6] = "Struct";
    CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
    CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
    CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
    CompletionItemKind[CompletionItemKind["Event"] = 10] = "Event";
    CompletionItemKind[CompletionItemKind["Operator"] = 11] = "Operator";
    CompletionItemKind[CompletionItemKind["Unit"] = 12] = "Unit";
    CompletionItemKind[CompletionItemKind["Value"] = 13] = "Value";
    CompletionItemKind[CompletionItemKind["Constant"] = 14] = "Constant";
    CompletionItemKind[CompletionItemKind["Enum"] = 15] = "Enum";
    CompletionItemKind[CompletionItemKind["EnumMember"] = 16] = "EnumMember";
    CompletionItemKind[CompletionItemKind["Keyword"] = 17] = "Keyword";
    CompletionItemKind[CompletionItemKind["Text"] = 18] = "Text";
    CompletionItemKind[CompletionItemKind["Color"] = 19] = "Color";
    CompletionItemKind[CompletionItemKind["File"] = 20] = "File";
    CompletionItemKind[CompletionItemKind["Reference"] = 21] = "Reference";
    CompletionItemKind[CompletionItemKind["Customcolor"] = 22] = "Customcolor";
    CompletionItemKind[CompletionItemKind["Folder"] = 23] = "Folder";
    CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
    CompletionItemKind[CompletionItemKind["Snippet"] = 25] = "Snippet";
})(CompletionItemKind || (CompletionItemKind = {}));
var CompletionItemTag;
(function (CompletionItemTag) {
    CompletionItemTag[CompletionItemTag["Deprecated"] = 1] = "Deprecated";
})(CompletionItemTag || (CompletionItemTag = {}));
var CompletionItemInsertTextRule;
(function (CompletionItemInsertTextRule) {
    /**
     * Adjust whitespace/indentation of multiline insert texts to
     * match the current line indentation.
     */
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["KeepWhitespace"] = 1] = "KeepWhitespace";
    /**
     * `insertText` is a snippet.
     */
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule || (CompletionItemInsertTextRule = {}));
/**
 * How a suggest provider was triggered.
 */
var CompletionTriggerKind;
(function (CompletionTriggerKind) {
    CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
    CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
    CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind || (CompletionTriggerKind = {}));
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * A symbol kind.
 */
var SymbolKind;
(function (SymbolKind) {
    SymbolKind[SymbolKind["File"] = 0] = "File";
    SymbolKind[SymbolKind["Module"] = 1] = "Module";
    SymbolKind[SymbolKind["Namespace"] = 2] = "Namespace";
    SymbolKind[SymbolKind["Package"] = 3] = "Package";
    SymbolKind[SymbolKind["Class"] = 4] = "Class";
    SymbolKind[SymbolKind["Method"] = 5] = "Method";
    SymbolKind[SymbolKind["Property"] = 6] = "Property";
    SymbolKind[SymbolKind["Field"] = 7] = "Field";
    SymbolKind[SymbolKind["Constructor"] = 8] = "Constructor";
    SymbolKind[SymbolKind["Enum"] = 9] = "Enum";
    SymbolKind[SymbolKind["Interface"] = 10] = "Interface";
    SymbolKind[SymbolKind["Function"] = 11] = "Function";
    SymbolKind[SymbolKind["Variable"] = 12] = "Variable";
    SymbolKind[SymbolKind["Constant"] = 13] = "Constant";
    SymbolKind[SymbolKind["String"] = 14] = "String";
    SymbolKind[SymbolKind["Number"] = 15] = "Number";
    SymbolKind[SymbolKind["Boolean"] = 16] = "Boolean";
    SymbolKind[SymbolKind["Array"] = 17] = "Array";
    SymbolKind[SymbolKind["Object"] = 18] = "Object";
    SymbolKind[SymbolKind["Key"] = 19] = "Key";
    SymbolKind[SymbolKind["Null"] = 20] = "Null";
    SymbolKind[SymbolKind["EnumMember"] = 21] = "EnumMember";
    SymbolKind[SymbolKind["Struct"] = 22] = "Struct";
    SymbolKind[SymbolKind["Event"] = 23] = "Event";
    SymbolKind[SymbolKind["Operator"] = 24] = "Operator";
    SymbolKind[SymbolKind["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));
var SymbolTag;
(function (SymbolTag) {
    SymbolTag[SymbolTag["Deprecated"] = 1] = "Deprecated";
})(SymbolTag || (SymbolTag = {}));


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js ***!
  \****************************************************************************************/
/*! exports provided: PrefixSumIndexOfResult, PrefixSumComputer, PrefixSumComputerWithCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSumIndexOfResult", function() { return PrefixSumIndexOfResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSumComputer", function() { return PrefixSumComputer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSumComputerWithCache", function() { return PrefixSumComputerWithCache; });
/* harmony import */ var _core_uint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var PrefixSumIndexOfResult = /** @class */ (function () {
    function PrefixSumIndexOfResult(index, remainder) {
        this.index = index;
        this.remainder = remainder;
    }
    return PrefixSumIndexOfResult;
}());

var PrefixSumComputer = /** @class */ (function () {
    function PrefixSumComputer(values) {
        this.values = values;
        this.prefixSum = new Uint32Array(values.length);
        this.prefixSumValidIndex = new Int32Array(1);
        this.prefixSumValidIndex[0] = -1;
    }
    PrefixSumComputer.prototype.getCount = function () {
        return this.values.length;
    };
    PrefixSumComputer.prototype.insertValues = function (insertIndex, insertValues) {
        insertIndex = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(insertIndex);
        var oldValues = this.values;
        var oldPrefixSum = this.prefixSum;
        var insertValuesLen = insertValues.length;
        if (insertValuesLen === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length + insertValuesLen);
        this.values.set(oldValues.subarray(0, insertIndex), 0);
        this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
        this.values.set(insertValues, insertIndex);
        if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = insertIndex - 1;
        }
        this.prefixSum = new Uint32Array(this.values.length);
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    };
    PrefixSumComputer.prototype.changeValue = function (index, value) {
        index = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(index);
        value = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(value);
        if (this.values[index] === value) {
            return false;
        }
        this.values[index] = value;
        if (index - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = index - 1;
        }
        return true;
    };
    PrefixSumComputer.prototype.removeValues = function (startIndex, cnt) {
        startIndex = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(startIndex);
        cnt = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(cnt);
        var oldValues = this.values;
        var oldPrefixSum = this.prefixSum;
        if (startIndex >= oldValues.length) {
            return false;
        }
        var maxCnt = oldValues.length - startIndex;
        if (cnt >= maxCnt) {
            cnt = maxCnt;
        }
        if (cnt === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length - cnt);
        this.values.set(oldValues.subarray(0, startIndex), 0);
        this.values.set(oldValues.subarray(startIndex + cnt), startIndex);
        this.prefixSum = new Uint32Array(this.values.length);
        if (startIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = startIndex - 1;
        }
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    };
    PrefixSumComputer.prototype.getTotalValue = function () {
        if (this.values.length === 0) {
            return 0;
        }
        return this._getAccumulatedValue(this.values.length - 1);
    };
    PrefixSumComputer.prototype.getAccumulatedValue = function (index) {
        if (index < 0) {
            return 0;
        }
        index = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(index);
        return this._getAccumulatedValue(index);
    };
    PrefixSumComputer.prototype._getAccumulatedValue = function (index) {
        if (index <= this.prefixSumValidIndex[0]) {
            return this.prefixSum[index];
        }
        var startIndex = this.prefixSumValidIndex[0] + 1;
        if (startIndex === 0) {
            this.prefixSum[0] = this.values[0];
            startIndex++;
        }
        if (index >= this.values.length) {
            index = this.values.length - 1;
        }
        for (var i = startIndex; i <= index; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
        }
        this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
        return this.prefixSum[index];
    };
    PrefixSumComputer.prototype.getIndexOf = function (accumulatedValue) {
        accumulatedValue = Math.floor(accumulatedValue); //@perf
        // Compute all sums (to get a fully valid prefixSum)
        this.getTotalValue();
        var low = 0;
        var high = this.values.length - 1;
        var mid = 0;
        var midStop = 0;
        var midStart = 0;
        while (low <= high) {
            mid = low + ((high - low) / 2) | 0;
            midStop = this.prefixSum[mid];
            midStart = midStop - this.values[mid];
            if (accumulatedValue < midStart) {
                high = mid - 1;
            }
            else if (accumulatedValue >= midStop) {
                low = mid + 1;
            }
            else {
                break;
            }
        }
        return new PrefixSumIndexOfResult(mid, accumulatedValue - midStart);
    };
    return PrefixSumComputer;
}());

var PrefixSumComputerWithCache = /** @class */ (function () {
    function PrefixSumComputerWithCache(values) {
        this._cacheAccumulatedValueStart = 0;
        this._cache = null;
        this._actual = new PrefixSumComputer(values);
        this._bustCache();
    }
    PrefixSumComputerWithCache.prototype._bustCache = function () {
        this._cacheAccumulatedValueStart = 0;
        this._cache = null;
    };
    PrefixSumComputerWithCache.prototype.insertValues = function (insertIndex, insertValues) {
        if (this._actual.insertValues(insertIndex, insertValues)) {
            this._bustCache();
        }
    };
    PrefixSumComputerWithCache.prototype.changeValue = function (index, value) {
        if (this._actual.changeValue(index, value)) {
            this._bustCache();
        }
    };
    PrefixSumComputerWithCache.prototype.removeValues = function (startIndex, cnt) {
        if (this._actual.removeValues(startIndex, cnt)) {
            this._bustCache();
        }
    };
    PrefixSumComputerWithCache.prototype.getTotalValue = function () {
        return this._actual.getTotalValue();
    };
    PrefixSumComputerWithCache.prototype.getAccumulatedValue = function (index) {
        return this._actual.getAccumulatedValue(index);
    };
    PrefixSumComputerWithCache.prototype.getIndexOf = function (accumulatedValue) {
        accumulatedValue = Math.floor(accumulatedValue); //@perf
        if (this._cache !== null) {
            var cacheIndex = accumulatedValue - this._cacheAccumulatedValueStart;
            if (cacheIndex >= 0 && cacheIndex < this._cache.length) {
                // Cache hit!
                return this._cache[cacheIndex];
            }
        }
        // Cache miss!
        return this._actual.getIndexOf(accumulatedValue);
    };
    /**
     * Gives a hint that a lot of requests are about to come in for these accumulated values.
     */
    PrefixSumComputerWithCache.prototype.warmUpCache = function (accumulatedValueStart, accumulatedValueEnd) {
        var newCache = [];
        for (var accumulatedValue = accumulatedValueStart; accumulatedValue <= accumulatedValueEnd; accumulatedValue++) {
            newCache[accumulatedValue - accumulatedValueStart] = this.getIndexOf(accumulatedValue);
        }
        this._cache = newCache;
        this._cacheAccumulatedValueStart = accumulatedValueStart;
    };
    return PrefixSumComputerWithCache;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/editor.worker.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/editor.worker.js ***!
  \*******************************************************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/common/worker/simpleWorker.js */ "./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js");
/* harmony import */ var _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/services/editorSimpleWorker.js */ "./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var initialized = false;
function initialize(foreignModule) {
    if (initialized) {
        return;
    }
    initialized = true;
    var simpleWorker = new _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_0__["SimpleWorkerServer"](function (msg) {
        self.postMessage(msg);
    }, function (host) { return new _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_1__["EditorSimpleWorker"](host, foreignModule); });
    self.onmessage = function (e) {
        simpleWorker.onmessage(e.data);
    };
}
self.onmessage = function (e) {
    // Ignore first message in this case and initialize if not yet initialized
    if (!initialized) {
        initialize(null);
    }
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2FycmF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vY2FuY2VsbGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9kaWZmL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2RpZmYvZGlmZkNoYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vZXJyb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vZnVuY3Rpb25hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2tleUNvZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9saWZlY3ljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL3BsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9zdHJpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vdXJpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi93b3JrZXIvc2ltcGxlV29ya2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL2NvcmUvY2hhcmFjdGVyQ2xhc3NpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi9jb3JlL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL2NvcmUvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vY29yZS9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vY29yZS90b2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi9jb3JlL3VpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vZGlmZi9kaWZmQ29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vbW9kZWwvbWlycm9yVGV4dE1vZGVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL21vZGVsL3dvcmRIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vbW9kZXMvbGlua0NvbXB1dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL21vZGVzL3N1cHBvcnRzL2lucGxhY2VSZXBsYWNlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi9zZXJ2aWNlcy9lZGl0b3JTaW1wbGVXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vc3RhbmRhbG9uZS9wcm9taXNlLXBvbHlmaWxsL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL3N0YW5kYWxvbmUvc3RhbmRhbG9uZUJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vc3RhbmRhbG9uZS9zdGFuZGFsb25lRW51bXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vdmlld01vZGVsL3ByZWZpeFN1bUNvbXB1dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvZWRpdG9yLndvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ087QUFDUDtBQUNB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QUNBO0FBQ0E7QUFDQSxvQ0FBb0MseURBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELG9DQUFvQztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUE0QztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdDQUFnQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseURBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdDQUFnQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5REFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2tCOzs7Ozs7Ozs7Ozs7O0FDbnhCbkI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3FCOzs7Ozs7Ozs7Ozs7O0FDakN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7QUFDakI7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxDQUFDO0FBQzRCOzs7Ozs7Ozs7Ozs7O0FDNUw3QjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQUc7QUFDOUI7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNxQjs7Ozs7Ozs7Ozs7OztBQ2hKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUCwwRkFBMEY7QUFDbkY7QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7QUM5RVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QjtBQUNBO0FBQ0EsOEJBQThCLEVBQUU7QUFDaEM7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNPO0FBQ1A7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwyQkFBMkIsV0FBVztBQUN0Qyx5QkFBeUIsa0JBQWtCO0FBQzNDLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGdDQUFnQyw2QkFBNkI7QUFDN0QsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNQLHlDQUF5QztBQUN6QztBQUNPO0FBQ1A7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asd0NBQXdDLDRCQUE0QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwyQkFBMkI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxpSkFBaUo7QUFDOU07QUFDQTtBQUNBLDBEQUEwRCxpSkFBaUo7QUFDM007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsWUFBWTtBQUNsRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2M7QUFDZixxQkFBcUIsc0RBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDbUI7Ozs7Ozs7Ozs7Ozs7QUMzSXBCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsU0FBUztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3REFBd0Q7QUFDbEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdEQUFnRDtBQUMxQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0NBQXdDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNFQUFzRTtBQUN2RTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzREFBc0Q7QUFDaEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNEQUFzRDtBQUN2RDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwRUFBMEU7QUFDM0U7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMEVBQTBFO0FBQzNFO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7QUFDM0M7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DO0FBQzlCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnREFBZ0Q7QUFDMUM7QUFDUDtBQUNBO0FBQ0EsQ0FBQyw4Q0FBOEM7QUFDeEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pMRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQU8sQ0FBQyxpRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImVkaXRvci53b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvZWRpdG9yLndvcmtlci5qc1wiKTtcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LlxuICogQHBhcmFtIGFycmF5IFRoZSBhcnJheS5cbiAqIEBwYXJhbSBuIFdoaWNoIGVsZW1lbnQgZnJvbSB0aGUgZW5kIChkZWZhdWx0IGlzIHplcm8pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSwgbikge1xuICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDA7IH1cbiAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gKDEgKyBuKV07XG59XG5leHBvcnQgZnVuY3Rpb24gdGFpbDIoYXJyKSB7XG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhaWwgY2FsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gW2Fyci5zbGljZSgwLCBhcnIubGVuZ3RoIC0gMSksIGFyclthcnIubGVuZ3RoIC0gMV1dO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhvbmUsIG90aGVyLCBpdGVtRXF1YWxzKSB7XG4gICAgaWYgKGl0ZW1FcXVhbHMgPT09IHZvaWQgMCkgeyBpdGVtRXF1YWxzID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgPT09IGI7IH07IH1cbiAgICBpZiAob25lID09PSBvdGhlcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFvbmUgfHwgIW90aGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9uZS5sZW5ndGggIT09IG90aGVyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBvbmUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKCFpdGVtRXF1YWxzKG9uZVtpXSwgb3RoZXJbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFycmF5LCBrZXksIGNvbXBhcmF0b3IpIHtcbiAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGxvdyA8PSBoaWdoKSB7XG4gICAgICAgIHZhciBtaWQgPSAoKGxvdyArIGhpZ2gpIC8gMikgfCAwO1xuICAgICAgICB2YXIgY29tcCA9IGNvbXBhcmF0b3IoYXJyYXlbbWlkXSwga2V5KTtcbiAgICAgICAgaWYgKGNvbXAgPCAwKSB7XG4gICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXAgPiAwKSB7XG4gICAgICAgICAgICBoaWdoID0gbWlkIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0obG93ICsgMSk7XG59XG4vKipcbiAqIFRha2VzIGEgc29ydGVkIGFycmF5IGFuZCBhIGZ1bmN0aW9uIHAuIFRoZSBhcnJheSBpcyBzb3J0ZWQgaW4gc3VjaCBhIHdheSB0aGF0IGFsbCBlbGVtZW50cyB3aGVyZSBwKHgpIGlzIGZhbHNlXG4gKiBhcmUgbG9jYXRlZCBiZWZvcmUgYWxsIGVsZW1lbnRzIHdoZXJlIHAoeCkgaXMgdHJ1ZS5cbiAqIEByZXR1cm5zIHRoZSBsZWFzdCB4IGZvciB3aGljaCBwKHgpIGlzIHRydWUgb3IgYXJyYXkubGVuZ3RoIGlmIG5vIGVsZW1lbnQgZnVsbGZpbGxzIHRoZSBnaXZlbiBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdEluU29ydGVkKGFycmF5LCBwKSB7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGhpZ2ggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7IC8vIG5vIGNoaWxkcmVuXG4gICAgfVxuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xuICAgICAgICBpZiAocChhcnJheVttaWRdKSkge1xuICAgICAgICAgICAgaGlnaCA9IG1pZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbn1cbi8qKlxuICogTGlrZSBgQXJyYXkjc29ydGAgYnV0IGFsd2F5cyBzdGFibGUuIFVzdWFsbHkgcnVucyBhIGxpdHRsZSBzbG93ZXIgYHRoYW4gQXJyYXkjc29ydGBcbiAqIHNvIG9ubHkgdXNlIHRoaXMgd2hlbiBhY3R1YWxseSBuZWVkaW5nIHN0YWJsZSBzb3J0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTb3J0KGRhdGEsIGNvbXBhcmUpIHtcbiAgICBfc29ydChkYXRhLCBjb21wYXJlLCAwLCBkYXRhLmxlbmd0aCAtIDEsIFtdKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cbmZ1bmN0aW9uIF9tZXJnZShhLCBjb21wYXJlLCBsbywgbWlkLCBoaSwgYXV4KSB7XG4gICAgdmFyIGxlZnRJZHggPSBsbywgcmlnaHRJZHggPSBtaWQgKyAxO1xuICAgIGZvciAodmFyIGkgPSBsbzsgaSA8PSBoaTsgaSsrKSB7XG4gICAgICAgIGF1eFtpXSA9IGFbaV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBsbzsgaSA8PSBoaTsgaSsrKSB7XG4gICAgICAgIGlmIChsZWZ0SWR4ID4gbWlkKSB7XG4gICAgICAgICAgICAvLyBsZWZ0IHNpZGUgY29uc3VtZWRcbiAgICAgICAgICAgIGFbaV0gPSBhdXhbcmlnaHRJZHgrK107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmlnaHRJZHggPiBoaSkge1xuICAgICAgICAgICAgLy8gcmlnaHQgc2lkZSBjb25zdW1lZFxuICAgICAgICAgICAgYVtpXSA9IGF1eFtsZWZ0SWR4KytdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUoYXV4W3JpZ2h0SWR4XSwgYXV4W2xlZnRJZHhdKSA8IDApIHtcbiAgICAgICAgICAgIC8vIHJpZ2h0IGVsZW1lbnQgaXMgbGVzcyAtPiBjb21lcyBmaXJzdFxuICAgICAgICAgICAgYVtpXSA9IGF1eFtyaWdodElkeCsrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxlZnQgZWxlbWVudCBjb21lcyBmaXJzdCAobGVzcyBvciBlcXVhbClcbiAgICAgICAgICAgIGFbaV0gPSBhdXhbbGVmdElkeCsrXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIF9zb3J0KGEsIGNvbXBhcmUsIGxvLCBoaSwgYXV4KSB7XG4gICAgaWYgKGhpIDw9IGxvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG1pZCA9IGxvICsgKChoaSAtIGxvKSAvIDIpIHwgMDtcbiAgICBfc29ydChhLCBjb21wYXJlLCBsbywgbWlkLCBhdXgpO1xuICAgIF9zb3J0KGEsIGNvbXBhcmUsIG1pZCArIDEsIGhpLCBhdXgpO1xuICAgIGlmIChjb21wYXJlKGFbbWlkXSwgYVttaWQgKyAxXSkgPD0gMCkge1xuICAgICAgICAvLyBsZWZ0IGFuZCByaWdodCBhcmUgc29ydGVkIGFuZCBpZiB0aGUgbGFzdC1sZWZ0IGVsZW1lbnQgaXMgbGVzc1xuICAgICAgICAvLyBvciBlcXVhbHMgdGhhbiB0aGUgZmlyc3QtcmlnaHQgZWxlbWVudCB0aGVyZSBpcyBub3RoaW5nIGVsc2VcbiAgICAgICAgLy8gdG8gZG9cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfbWVyZ2UoYSwgY29tcGFyZSwgbG8sIG1pZCwgaGksIGF1eCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBCeShkYXRhLCBjb21wYXJlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBjdXJyZW50R3JvdXAgPSB1bmRlZmluZWQ7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1lcmdlU29ydChkYXRhLnNsaWNlKDApLCBjb21wYXJlKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBfYVtfaV07XG4gICAgICAgIGlmICghY3VycmVudEdyb3VwIHx8IGNvbXBhcmUoY3VycmVudEdyb3VwWzBdLCBlbGVtZW50KSAhPT0gMCkge1xuICAgICAgICAgICAgY3VycmVudEdyb3VwID0gW2VsZW1lbnRdO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEdyb3VwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEByZXR1cm5zIE5ldyBhcnJheSB3aXRoIGFsbCBmYWxzeSB2YWx1ZXMgcmVtb3ZlZC4gVGhlIG9yaWdpbmFsIGFycmF5IElTIE5PVCBtb2RpZmllZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvYWxlc2NlKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gISFlOyB9KTtcbn1cbi8qKlxuICogQHJldHVybnMgZmFsc2UgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSBhbmQgbm90IGVtcHR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGYWxzeU9yRW1wdHkob2JqKSB7XG4gICAgcmV0dXJuICFBcnJheS5pc0FycmF5KG9iaikgfHwgb2JqLmxlbmd0aCA9PT0gMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vbkVtcHR5QXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID4gMDtcbn1cbi8qKlxuICogUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gdGhlIGdpdmVuIGFycmF5LiBUaGUgb3B0aW9uYWwga2V5Rm4gYWxsb3dzIHRvIHNwZWNpZnlcbiAqIGhvdyBlbGVtZW50cyBhcmUgY2hlY2tlZCBmb3IgZXF1YWxuZXNzIGJ5IHJldHVybmluZyBhIHVuaXF1ZSBzdHJpbmcgZm9yIGVhY2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXN0aW5jdChhcnJheSwga2V5Rm4pIHtcbiAgICBpZiAoIWtleUZuKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQsIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZihlbGVtZW50KSA9PT0gcG9zaXRpb247XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgc2VlbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5Rm4oZWxlbSk7XG4gICAgICAgIGlmIChzZWVuW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzZWVuW2tleV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXN0aW5jdEVTNihhcnJheSkge1xuICAgIHZhciBzZWVuID0gbmV3IFNldCgpO1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHNlZW4uaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2Vlbi5hZGQoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0SW5kZXgoYXJyYXksIGZuKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGFycmF5W2ldO1xuICAgICAgICBpZiAoZm4oZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSwgZm4sIG5vdEZvdW5kVmFsdWUpIHtcbiAgICBpZiAobm90Rm91bmRWYWx1ZSA9PT0gdm9pZCAwKSB7IG5vdEZvdW5kVmFsdWUgPSB1bmRlZmluZWQ7IH1cbiAgICB2YXIgaW5kZXggPSBmaXJzdEluZGV4KGFycmF5LCBmbik7XG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG5vdEZvdW5kVmFsdWUgOiBhcnJheVtpbmRleF07XG59XG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnIpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIChfYSA9IFtdKS5jb25jYXQuYXBwbHkoX2EsIGFycik7XG59XG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UoYXJnLCB0bykge1xuICAgIHZhciBmcm9tID0gdHlwZW9mIHRvID09PSAnbnVtYmVyJyA/IGFyZyA6IDA7XG4gICAgaWYgKHR5cGVvZiB0byA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZnJvbSA9IGFyZztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZyb20gPSAwO1xuICAgICAgICB0byA9IGFyZztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGlmIChmcm9tIDw9IHRvKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBmcm9tOyBpIDwgdG87IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBmcm9tOyBpID4gdG87IGktLSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogSW5zZXJ0IGBpbnNlcnRBcnJgIGluc2lkZSBgdGFyZ2V0YCBhdCBgaW5zZXJ0SW5kZXhgLlxuICogUGxlYXNlIGRvbid0IHRvdWNoIHVubGVzcyB5b3UgdW5kZXJzdGFuZCBodHRwczovL2pzcGVyZi5jb20vaW5zZXJ0aW5nLWFuLWFycmF5LXdpdGhpbi1hbi1hcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlJbnNlcnQodGFyZ2V0LCBpbnNlcnRJbmRleCwgaW5zZXJ0QXJyKSB7XG4gICAgdmFyIGJlZm9yZSA9IHRhcmdldC5zbGljZSgwLCBpbnNlcnRJbmRleCk7XG4gICAgdmFyIGFmdGVyID0gdGFyZ2V0LnNsaWNlKGluc2VydEluZGV4KTtcbiAgICByZXR1cm4gYmVmb3JlLmNvbmNhdChpbnNlcnRBcnIsIGFmdGVyKTtcbn1cbi8qKlxuICogUHVzaGVzIGFuIGVsZW1lbnQgdG8gdGhlIHN0YXJ0IG9mIHRoZSBhcnJheSwgaWYgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVG9TdGFydChhcnIsIHZhbHVlKSB7XG4gICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBhcnIudW5zaGlmdCh2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBQdXNoZXMgYW4gZWxlbWVudCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheSwgaWYgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVG9FbmQoYXJyLCB2YWx1ZSkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgYXJyLnB1c2godmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhc0FycmF5KHgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSA/IHggOiBbeF07XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IEVtaXR0ZXIsIEV2ZW50IH0gZnJvbSAnLi9ldmVudC5qcyc7XG52YXIgc2hvcnRjdXRFdmVudCA9IE9iamVjdC5mcmVlemUoZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgdmFyIGhhbmRsZSA9IHNldFRpbWVvdXQoY2FsbGJhY2suYmluZChjb250ZXh0KSwgMCk7XG4gICAgcmV0dXJuIHsgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyBjbGVhclRpbWVvdXQoaGFuZGxlKTsgfSB9O1xufSk7XG5leHBvcnQgdmFyIENhbmNlbGxhdGlvblRva2VuO1xuKGZ1bmN0aW9uIChDYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGZ1bmN0aW9uIGlzQ2FuY2VsbGF0aW9uVG9rZW4odGhpbmcpIHtcbiAgICAgICAgaWYgKHRoaW5nID09PSBDYW5jZWxsYXRpb25Ub2tlbi5Ob25lIHx8IHRoaW5nID09PSBDYW5jZWxsYXRpb25Ub2tlbi5DYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGluZyBpbnN0YW5jZW9mIE11dGFibGVUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGluZyB8fCB0eXBlb2YgdGhpbmcgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGluZy5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpbmcub25DYW5jZWxsYXRpb25SZXF1ZXN0ZWQgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuICAgIENhbmNlbGxhdGlvblRva2VuLmlzQ2FuY2VsbGF0aW9uVG9rZW4gPSBpc0NhbmNlbGxhdGlvblRva2VuO1xuICAgIENhbmNlbGxhdGlvblRva2VuLk5vbmUgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IGZhbHNlLFxuICAgICAgICBvbkNhbmNlbGxhdGlvblJlcXVlc3RlZDogRXZlbnQuTm9uZVxuICAgIH0pO1xuICAgIENhbmNlbGxhdGlvblRva2VuLkNhbmNlbGxlZCA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZDogdHJ1ZSxcbiAgICAgICAgb25DYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IHNob3J0Y3V0RXZlbnRcbiAgICB9KTtcbn0pKENhbmNlbGxhdGlvblRva2VuIHx8IChDYW5jZWxsYXRpb25Ub2tlbiA9IHt9KSk7XG52YXIgTXV0YWJsZVRva2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11dGFibGVUb2tlbigpIHtcbiAgICAgICAgdGhpcy5faXNDYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gICAgfVxuICAgIE11dGFibGVUb2tlbi5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0NhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fZW1pdHRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIuZmlyZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTXV0YWJsZVRva2VuLnByb3RvdHlwZSwgXCJpc0NhbmNlbGxhdGlvblJlcXVlc3RlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ2FuY2VsbGVkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTXV0YWJsZVRva2VuLnByb3RvdHlwZSwgXCJvbkNhbmNlbGxhdGlvblJlcXVlc3RlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3J0Y3V0RXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VtaXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbWl0dGVyLmV2ZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNdXRhYmxlVG9rZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9lbWl0dGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTXV0YWJsZVRva2VuO1xufSgpKTtcbnZhciBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZShwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3BhcmVudExpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wYXJlbnRMaXN0ZW5lciA9IHBhcmVudCAmJiBwYXJlbnQub25DYW5jZWxsYXRpb25SZXF1ZXN0ZWQodGhpcy5jYW5jZWwsIHRoaXMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2UucHJvdG90eXBlLCBcInRva2VuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgLy8gYmUgbGF6eSBhbmQgY3JlYXRlIHRoZSB0b2tlbiBvbmx5IHdoZW5cbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBuZWVkZWRcbiAgICAgICAgICAgICAgICB0aGlzLl90b2tlbiA9IG5ldyBNdXRhYmxlVG9rZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2UucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl90b2tlbikge1xuICAgICAgICAgICAgLy8gc2F2ZSBhbiBvYmplY3QgYnkgcmV0dXJuaW5nIHRoZSBkZWZhdWx0XG4gICAgICAgICAgICAvLyBjYW5jZWxsZWQgdG9rZW4gd2hlbiBjYW5jZWxsYXRpb24gaGFwcGVuc1xuICAgICAgICAgICAgLy8gYmVmb3JlIHNvbWVvbmUgYXNrcyBmb3IgdGhlIHRva2VuXG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IENhbmNlbGxhdGlvblRva2VuLkNhbmNlbGxlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl90b2tlbiBpbnN0YW5jZW9mIE11dGFibGVUb2tlbikge1xuICAgICAgICAgICAgLy8gYWN0dWFsbHkgY2FuY2VsXG4gICAgICAgICAgICB0aGlzLl90b2tlbi5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2UucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50TGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fdG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGVuc3VyZSB0byBpbml0aWFsaXplIHdpdGggYW4gZW1wdHkgdG9rZW4gaWYgd2UgaGFkIG5vbmVcbiAgICAgICAgICAgIHRoaXMuX3Rva2VuID0gQ2FuY2VsbGF0aW9uVG9rZW4uTm9uZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl90b2tlbiBpbnN0YW5jZW9mIE11dGFibGVUb2tlbikge1xuICAgICAgICAgICAgLy8gYWN0dWFsbHkgZGlzcG9zZVxuICAgICAgICAgICAgdGhpcy5fdG9rZW4uZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2U7XG59KCkpO1xuZXhwb3J0IHsgQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2UgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgRGlmZkNoYW5nZSB9IGZyb20gJy4vZGlmZkNoYW5nZS5qcyc7XG5mdW5jdGlvbiBjcmVhdGVTdHJpbmdTZXF1ZW5jZShhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TGVuZ3RoOiBmdW5jdGlvbiAoKSB7IHJldHVybiBhLmxlbmd0aDsgfSxcbiAgICAgICAgZ2V0RWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uIChwb3MpIHsgcmV0dXJuIGEuY2hhckNvZGVBdChwb3MpOyB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdEaWZmKG9yaWdpbmFsLCBtb2RpZmllZCwgcHJldHR5KSB7XG4gICAgcmV0dXJuIG5ldyBMY3NEaWZmKGNyZWF0ZVN0cmluZ1NlcXVlbmNlKG9yaWdpbmFsKSwgY3JlYXRlU3RyaW5nU2VxdWVuY2UobW9kaWZpZWQpKS5Db21wdXRlRGlmZihwcmV0dHkpO1xufVxuLy9cbi8vIFRoZSBjb2RlIGJlbG93IGhhcyBiZWVuIHBvcnRlZCBmcm9tIGEgQyMgaW1wbGVtZW50YXRpb24gaW4gVlNcbi8vXG52YXIgRGVidWcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVidWcoKSB7XG4gICAgfVxuICAgIERlYnVnLkFzc2VydCA9IGZ1bmN0aW9uIChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERlYnVnO1xufSgpKTtcbmV4cG9ydCB7IERlYnVnIH07XG52YXIgTXlBcnJheSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNeUFycmF5KCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYSByYW5nZSBvZiBlbGVtZW50cyBmcm9tIGFuIEFycmF5IHN0YXJ0aW5nIGF0IHRoZSBzcGVjaWZpZWQgc291cmNlIGluZGV4IGFuZCBwYXN0ZXNcbiAgICAgKiB0aGVtIHRvIGFub3RoZXIgQXJyYXkgc3RhcnRpbmcgYXQgdGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleC4gVGhlIGxlbmd0aCBhbmQgdGhlIGluZGV4ZXNcbiAgICAgKiBhcmUgc3BlY2lmaWVkIGFzIDY0LWJpdCBpbnRlZ2Vycy5cbiAgICAgKiBzb3VyY2VBcnJheTpcbiAgICAgKlx0XHRUaGUgQXJyYXkgdGhhdCBjb250YWlucyB0aGUgZGF0YSB0byBjb3B5LlxuICAgICAqIHNvdXJjZUluZGV4OlxuICAgICAqXHRcdEEgNjQtYml0IGludGVnZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBpbiB0aGUgc291cmNlQXJyYXkgYXQgd2hpY2ggY29weWluZyBiZWdpbnMuXG4gICAgICogZGVzdGluYXRpb25BcnJheTpcbiAgICAgKlx0XHRUaGUgQXJyYXkgdGhhdCByZWNlaXZlcyB0aGUgZGF0YS5cbiAgICAgKiBkZXN0aW5hdGlvbkluZGV4OlxuICAgICAqXHRcdEEgNjQtYml0IGludGVnZXIgdGhhdCByZXByZXNlbnRzIHRoZSBpbmRleCBpbiB0aGUgZGVzdGluYXRpb25BcnJheSBhdCB3aGljaCBzdG9yaW5nIGJlZ2lucy5cbiAgICAgKiBsZW5ndGg6XG4gICAgICpcdFx0QSA2NC1iaXQgaW50ZWdlciB0aGF0IHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBjb3B5LlxuICAgICAqL1xuICAgIE15QXJyYXkuQ29weSA9IGZ1bmN0aW9uIChzb3VyY2VBcnJheSwgc291cmNlSW5kZXgsIGRlc3RpbmF0aW9uQXJyYXksIGRlc3RpbmF0aW9uSW5kZXgsIGxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbkFycmF5W2Rlc3RpbmF0aW9uSW5kZXggKyBpXSA9IHNvdXJjZUFycmF5W3NvdXJjZUluZGV4ICsgaV07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNeUFycmF5O1xufSgpKTtcbmV4cG9ydCB7IE15QXJyYXkgfTtcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIExjc0RpZmYuY3Ncbi8vXG4vLyBBbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgZGlmZmVyZW5jZSBhbGdvcml0aG0gZGVzY3JpYmVkIGluXG4vLyBcIkFuIE8oTkQpIERpZmZlcmVuY2UgQWxnb3JpdGhtIGFuZCBpdHMgdmFyaWF0aW9uc1wiIGJ5IEV1Z2VuZSBXLiBNeWVyc1xuLy9cbi8vIENvcHlyaWdodCAoQykgMjAwOCBNaWNyb3NvZnQgQ29ycG9yYXRpb24gQG1pbmlmaWVyX2RvX25vdF9wcmVzZXJ2ZVxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gT3VyIHRvdGFsIG1lbW9yeSB1c2FnZSBmb3Igc3RvcmluZyBoaXN0b3J5IGlzICh3b3JzdC1jYXNlKTpcbi8vIDIgKiBbKE1heERpZmZlcmVuY2VzSGlzdG9yeSArIDEpICogKE1heERpZmZlcmVuY2VzSGlzdG9yeSArIDEpIC0gMV0gKiBzaXplb2YoaW50KVxuLy8gMiAqIFsxNDQ4KjE0NDggLSAxXSAqIDQgPSAxNjc3MzYyNCA9IDE2TUJcbnZhciBNYXhEaWZmZXJlbmNlc0hpc3RvcnkgPSAxNDQ3O1xuLy9sZXQgTWF4RGlmZmVyZW5jZXNIaXN0b3J5ID0gMTAwO1xuLyoqXG4gKiBBIHV0aWxpdHkgY2xhc3Mgd2hpY2ggaGVscHMgdG8gY3JlYXRlIHRoZSBzZXQgb2YgRGlmZkNoYW5nZXMgZnJvbVxuICogYSBkaWZmZXJlbmNlIG9wZXJhdGlvbi4gVGhpcyBjbGFzcyBhY2NlcHRzIG9yaWdpbmFsIERpZmZFbGVtZW50cyBhbmRcbiAqIG1vZGlmaWVkIERpZmZFbGVtZW50cyB0aGF0IGFyZSBpbnZvbHZlZCBpbiBhIHBhcnRpY3VsYXIgY2hhbmdlLiBUaGVcbiAqIE1hcmt0TmV4dENoYW5nZSgpIG1ldGhvZCBjYW4gYmUgY2FsbGVkIHRvIG1hcmsgdGhlIHNlcGFyYXRpb24gYmV0d2VlblxuICogZGlzdGluY3QgY2hhbmdlcy4gQXQgdGhlIGVuZCwgdGhlIENoYW5nZXMgcHJvcGVydHkgY2FuIGJlIGNhbGxlZCB0byByZXRyaWV2ZVxuICogdGhlIGNvbnN0cnVjdGVkIGNoYW5nZXMuXG4gKi9cbnZhciBEaWZmQ2hhbmdlSGVscGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYSBuZXcgRGlmZkNoYW5nZUhlbHBlciBmb3IgdGhlIGdpdmVuIERpZmZTZXF1ZW5jZXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGlmZkNoYW5nZUhlbHBlcigpIHtcbiAgICAgICAgdGhpcy5tX2NoYW5nZXMgPSBbXTtcbiAgICAgICAgdGhpcy5tX29yaWdpbmFsU3RhcnQgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB0aGlzLm1fbW9kaWZpZWRTdGFydCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIHRoaXMubV9vcmlnaW5hbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5tX21vZGlmaWVkQ291bnQgPSAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYXJrcyB0aGUgYmVnaW5uaW5nIG9mIHRoZSBuZXh0IGNoYW5nZSBpbiB0aGUgc2V0IG9mIGRpZmZlcmVuY2VzLlxuICAgICAqL1xuICAgIERpZmZDaGFuZ2VIZWxwZXIucHJvdG90eXBlLk1hcmtOZXh0Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBPbmx5IGFkZCB0byB0aGUgbGlzdCBpZiB0aGVyZSBpcyBzb21ldGhpbmcgdG8gYWRkXG4gICAgICAgIGlmICh0aGlzLm1fb3JpZ2luYWxDb3VudCA+IDAgfHwgdGhpcy5tX21vZGlmaWVkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIG5ldyBjaGFuZ2UgdG8gb3VyIGxpc3RcbiAgICAgICAgICAgIHRoaXMubV9jaGFuZ2VzLnB1c2gobmV3IERpZmZDaGFuZ2UodGhpcy5tX29yaWdpbmFsU3RhcnQsIHRoaXMubV9vcmlnaW5hbENvdW50LCB0aGlzLm1fbW9kaWZpZWRTdGFydCwgdGhpcy5tX21vZGlmaWVkQ291bnQpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCBmb3IgdGhlIG5leHQgY2hhbmdlXG4gICAgICAgIHRoaXMubV9vcmlnaW5hbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5tX21vZGlmaWVkQ291bnQgPSAwO1xuICAgICAgICB0aGlzLm1fb3JpZ2luYWxTdGFydCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIHRoaXMubV9tb2RpZmllZFN0YXJ0ID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG9yaWdpbmFsIGVsZW1lbnQgYXQgdGhlIGdpdmVuIHBvc2l0aW9uIHRvIHRoZSBlbGVtZW50c1xuICAgICAqIGFmZmVjdGVkIGJ5IHRoZSBjdXJyZW50IGNoYW5nZS4gVGhlIG1vZGlmaWVkIGluZGV4IGdpdmVzIGNvbnRleHRcbiAgICAgKiB0byB0aGUgY2hhbmdlIHBvc2l0aW9uIHdpdGggcmVzcGVjdCB0byB0aGUgb3JpZ2luYWwgc2VxdWVuY2UuXG4gICAgICogQHBhcmFtIG9yaWdpbmFsSW5kZXggVGhlIGluZGV4IG9mIHRoZSBvcmlnaW5hbCBlbGVtZW50IHRvIGFkZC5cbiAgICAgKiBAcGFyYW0gbW9kaWZpZWRJbmRleCBUaGUgaW5kZXggb2YgdGhlIG1vZGlmaWVkIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBjb3JyZXNwb25kaW5nIHBvc2l0aW9uIGluIHRoZSBtb2RpZmllZCBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBEaWZmQ2hhbmdlSGVscGVyLnByb3RvdHlwZS5BZGRPcmlnaW5hbEVsZW1lbnQgPSBmdW5jdGlvbiAob3JpZ2luYWxJbmRleCwgbW9kaWZpZWRJbmRleCkge1xuICAgICAgICAvLyBUaGUgJ3RydWUnIHN0YXJ0IGluZGV4IGlzIHRoZSBzbWFsbGVzdCBvZiB0aGUgb25lcyB3ZSd2ZSBzZWVuXG4gICAgICAgIHRoaXMubV9vcmlnaW5hbFN0YXJ0ID0gTWF0aC5taW4odGhpcy5tX29yaWdpbmFsU3RhcnQsIG9yaWdpbmFsSW5kZXgpO1xuICAgICAgICB0aGlzLm1fbW9kaWZpZWRTdGFydCA9IE1hdGgubWluKHRoaXMubV9tb2RpZmllZFN0YXJ0LCBtb2RpZmllZEluZGV4KTtcbiAgICAgICAgdGhpcy5tX29yaWdpbmFsQ291bnQrKztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG1vZGlmaWVkIGVsZW1lbnQgYXQgdGhlIGdpdmVuIHBvc2l0aW9uIHRvIHRoZSBlbGVtZW50c1xuICAgICAqIGFmZmVjdGVkIGJ5IHRoZSBjdXJyZW50IGNoYW5nZS4gVGhlIG9yaWdpbmFsIGluZGV4IGdpdmVzIGNvbnRleHRcbiAgICAgKiB0byB0aGUgY2hhbmdlIHBvc2l0aW9uIHdpdGggcmVzcGVjdCB0byB0aGUgbW9kaWZpZWQgc2VxdWVuY2UuXG4gICAgICogQHBhcmFtIG9yaWdpbmFsSW5kZXggVGhlIGluZGV4IG9mIHRoZSBvcmlnaW5hbCBlbGVtZW50IHRoYXQgcHJvdmlkZXMgY29ycmVzcG9uZGluZyBwb3NpdGlvbiBpbiB0aGUgb3JpZ2luYWwgc2VxdWVuY2UuXG4gICAgICogQHBhcmFtIG1vZGlmaWVkSW5kZXggVGhlIGluZGV4IG9mIHRoZSBtb2RpZmllZCBlbGVtZW50IHRvIGFkZC5cbiAgICAgKi9cbiAgICBEaWZmQ2hhbmdlSGVscGVyLnByb3RvdHlwZS5BZGRNb2RpZmllZEVsZW1lbnQgPSBmdW5jdGlvbiAob3JpZ2luYWxJbmRleCwgbW9kaWZpZWRJbmRleCkge1xuICAgICAgICAvLyBUaGUgJ3RydWUnIHN0YXJ0IGluZGV4IGlzIHRoZSBzbWFsbGVzdCBvZiB0aGUgb25lcyB3ZSd2ZSBzZWVuXG4gICAgICAgIHRoaXMubV9vcmlnaW5hbFN0YXJ0ID0gTWF0aC5taW4odGhpcy5tX29yaWdpbmFsU3RhcnQsIG9yaWdpbmFsSW5kZXgpO1xuICAgICAgICB0aGlzLm1fbW9kaWZpZWRTdGFydCA9IE1hdGgubWluKHRoaXMubV9tb2RpZmllZFN0YXJ0LCBtb2RpZmllZEluZGV4KTtcbiAgICAgICAgdGhpcy5tX21vZGlmaWVkQ291bnQrKztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgb2YgdGhlIGNoYW5nZXMgbWFya2VkIGJ5IHRoZSBjbGFzcy5cbiAgICAgKi9cbiAgICBEaWZmQ2hhbmdlSGVscGVyLnByb3RvdHlwZS5nZXRDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5tX29yaWdpbmFsQ291bnQgPiAwIHx8IHRoaXMubV9tb2RpZmllZENvdW50ID4gMCkge1xuICAgICAgICAgICAgLy8gRmluaXNoIHVwIG9uIHdoYXRldmVyIGlzIGxlZnRcbiAgICAgICAgICAgIHRoaXMuTWFya05leHRDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tX2NoYW5nZXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBjaGFuZ2VzIG1hcmtlZCBieSB0aGUgY2xhc3MgaW4gdGhlIHJldmVyc2Ugb3JkZXJcbiAgICAgKi9cbiAgICBEaWZmQ2hhbmdlSGVscGVyLnByb3RvdHlwZS5nZXRSZXZlcnNlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubV9vcmlnaW5hbENvdW50ID4gMCB8fCB0aGlzLm1fbW9kaWZpZWRDb3VudCA+IDApIHtcbiAgICAgICAgICAgIC8vIEZpbmlzaCB1cCBvbiB3aGF0ZXZlciBpcyBsZWZ0XG4gICAgICAgICAgICB0aGlzLk1hcmtOZXh0Q2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tX2NoYW5nZXMucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5tX2NoYW5nZXM7XG4gICAgfTtcbiAgICByZXR1cm4gRGlmZkNoYW5nZUhlbHBlcjtcbn0oKSk7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBkaWZmZXJlbmNlIGFsZ29yaXRobSBkZXNjcmliZWQgaW5cbiAqIFwiQW4gTyhORCkgRGlmZmVyZW5jZSBBbGdvcml0aG0gYW5kIGl0cyB2YXJpYXRpb25zXCIgYnkgRXVnZW5lIFcuIE15ZXJzXG4gKi9cbnZhciBMY3NEaWZmID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgdGhlIERpZmZGaW5kZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBMY3NEaWZmKG9yaWdpbmFsU2VxdWVuY2UsIG5ld1NlcXVlbmNlLCBjb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUpIHtcbiAgICAgICAgaWYgKGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSA9PT0gdm9pZCAwKSB7IGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSA9IG51bGw7IH1cbiAgICAgICAgdGhpcy5PcmlnaW5hbFNlcXVlbmNlID0gb3JpZ2luYWxTZXF1ZW5jZTtcbiAgICAgICAgdGhpcy5Nb2RpZmllZFNlcXVlbmNlID0gbmV3U2VxdWVuY2U7XG4gICAgICAgIHRoaXMuQ29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlID0gY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlO1xuICAgICAgICB0aGlzLm1fZm9yd2FyZEhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5tX3JldmVyc2VIaXN0b3J5ID0gW107XG4gICAgfVxuICAgIExjc0RpZmYucHJvdG90eXBlLkVsZW1lbnRzQXJlRXF1YWwgPSBmdW5jdGlvbiAob3JpZ2luYWxJbmRleCwgbmV3SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLk9yaWdpbmFsU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgob3JpZ2luYWxJbmRleCkgPT09IHRoaXMuTW9kaWZpZWRTZXF1ZW5jZS5nZXRFbGVtZW50QXRJbmRleChuZXdJbmRleCkpO1xuICAgIH07XG4gICAgTGNzRGlmZi5wcm90b3R5cGUuT3JpZ2luYWxFbGVtZW50c0FyZUVxdWFsID0gZnVuY3Rpb24gKGluZGV4MSwgaW5kZXgyKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5PcmlnaW5hbFNlcXVlbmNlLmdldEVsZW1lbnRBdEluZGV4KGluZGV4MSkgPT09IHRoaXMuT3JpZ2luYWxTZXF1ZW5jZS5nZXRFbGVtZW50QXRJbmRleChpbmRleDIpKTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLk1vZGlmaWVkRWxlbWVudHNBcmVFcXVhbCA9IGZ1bmN0aW9uIChpbmRleDEsIGluZGV4Mikge1xuICAgICAgICByZXR1cm4gKHRoaXMuTW9kaWZpZWRTZXF1ZW5jZS5nZXRFbGVtZW50QXRJbmRleChpbmRleDEpID09PSB0aGlzLk1vZGlmaWVkU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgoaW5kZXgyKSk7XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5Db21wdXRlRGlmZiA9IGZ1bmN0aW9uIChwcmV0dHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NvbXB1dGVEaWZmKDAsIHRoaXMuT3JpZ2luYWxTZXF1ZW5jZS5nZXRMZW5ndGgoKSAtIDEsIDAsIHRoaXMuTW9kaWZpZWRTZXF1ZW5jZS5nZXRMZW5ndGgoKSAtIDEsIHByZXR0eSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgb3JpZ2luYWwgYW5kIG1vZGlmaWVkIGlucHV0XG4gICAgICogc2VxdWVuY2VzIG9uIHRoZSBib3VuZGVkIHJhbmdlLlxuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSB0d28gaW5wdXQgc2VxdWVuY2VzLlxuICAgICAqL1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9Db21wdXRlRGlmZiA9IGZ1bmN0aW9uIChvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEVuZCwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRFbmQsIHByZXR0eSkge1xuICAgICAgICB2YXIgcXVpdEVhcmx5QXJyID0gW2ZhbHNlXTtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSB0aGlzLkNvbXB1dGVEaWZmUmVjdXJzaXZlKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsRW5kLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZEVuZCwgcXVpdEVhcmx5QXJyKTtcbiAgICAgICAgaWYgKHByZXR0eSkge1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBjbGVhbiB1cCB0aGUgY29tcHV0ZWQgZGlmZiB0byBiZSBtb3JlIGludHVpdGl2ZVxuICAgICAgICAgICAgLy8gYnV0IGl0IHR1cm5zIG91dCB0aGlzIGNhbm5vdCBiZSBkb25lIGNvcnJlY3RseSB1bnRpbCB0aGUgZW50aXJlIHNldFxuICAgICAgICAgICAgLy8gb2YgZGlmZnMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5QcmV0dGlmeUNoYW5nZXMoY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQcml2YXRlIGhlbHBlciBtZXRob2Qgd2hpY2ggY29tcHV0ZXMgdGhlIGRpZmZlcmVuY2VzIG9uIHRoZSBib3VuZGVkIHJhbmdlXG4gICAgICogcmVjdXJzaXZlbHkuXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIHR3byBpbnB1dCBzZXF1ZW5jZXMuXG4gICAgICovXG4gICAgTGNzRGlmZi5wcm90b3R5cGUuQ29tcHV0ZURpZmZSZWN1cnNpdmUgPSBmdW5jdGlvbiAob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxFbmQsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkRW5kLCBxdWl0RWFybHlBcnIpIHtcbiAgICAgICAgcXVpdEVhcmx5QXJyWzBdID0gZmFsc2U7XG4gICAgICAgIC8vIEZpbmQgdGhlIHN0YXJ0IG9mIHRoZSBkaWZmZXJlbmNlc1xuICAgICAgICB3aGlsZSAob3JpZ2luYWxTdGFydCA8PSBvcmlnaW5hbEVuZCAmJiBtb2RpZmllZFN0YXJ0IDw9IG1vZGlmaWVkRW5kICYmIHRoaXMuRWxlbWVudHNBcmVFcXVhbChvcmlnaW5hbFN0YXJ0LCBtb2RpZmllZFN0YXJ0KSkge1xuICAgICAgICAgICAgb3JpZ2luYWxTdGFydCsrO1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpbmQgdGhlIGVuZCBvZiB0aGUgZGlmZmVyZW5jZXNcbiAgICAgICAgd2hpbGUgKG9yaWdpbmFsRW5kID49IG9yaWdpbmFsU3RhcnQgJiYgbW9kaWZpZWRFbmQgPj0gbW9kaWZpZWRTdGFydCAmJiB0aGlzLkVsZW1lbnRzQXJlRXF1YWwob3JpZ2luYWxFbmQsIG1vZGlmaWVkRW5kKSkge1xuICAgICAgICAgICAgb3JpZ2luYWxFbmQtLTtcbiAgICAgICAgICAgIG1vZGlmaWVkRW5kLS07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW4gdGhlIHNwZWNpYWwgY2FzZSB3aGVyZSB3ZSBlaXRoZXIgaGF2ZSBhbGwgaW5zZXJ0aW9ucyBvciBhbGwgZGVsZXRpb25zIG9yIHRoZSBzZXF1ZW5jZXMgYXJlIGlkZW50aWNhbFxuICAgICAgICBpZiAob3JpZ2luYWxTdGFydCA+IG9yaWdpbmFsRW5kIHx8IG1vZGlmaWVkU3RhcnQgPiBtb2RpZmllZEVuZCkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZXMgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAobW9kaWZpZWRTdGFydCA8PSBtb2RpZmllZEVuZCkge1xuICAgICAgICAgICAgICAgIERlYnVnLkFzc2VydChvcmlnaW5hbFN0YXJ0ID09PSBvcmlnaW5hbEVuZCArIDEsICdvcmlnaW5hbFN0YXJ0IHNob3VsZCBvbmx5IGJlIG9uZSBtb3JlIHRoYW4gb3JpZ2luYWxFbmQnKTtcbiAgICAgICAgICAgICAgICAvLyBBbGwgaW5zZXJ0aW9uc1xuICAgICAgICAgICAgICAgIGNoYW5nZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEaWZmQ2hhbmdlKG9yaWdpbmFsU3RhcnQsIDAsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkRW5kIC0gbW9kaWZpZWRTdGFydCArIDEpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9yaWdpbmFsU3RhcnQgPD0gb3JpZ2luYWxFbmQpIHtcbiAgICAgICAgICAgICAgICBEZWJ1Zy5Bc3NlcnQobW9kaWZpZWRTdGFydCA9PT0gbW9kaWZpZWRFbmQgKyAxLCAnbW9kaWZpZWRTdGFydCBzaG91bGQgb25seSBiZSBvbmUgbW9yZSB0aGFuIG1vZGlmaWVkRW5kJyk7XG4gICAgICAgICAgICAgICAgLy8gQWxsIGRlbGV0aW9uc1xuICAgICAgICAgICAgICAgIGNoYW5nZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEaWZmQ2hhbmdlKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsRW5kIC0gb3JpZ2luYWxTdGFydCArIDEsIG1vZGlmaWVkU3RhcnQsIDApXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIERlYnVnLkFzc2VydChvcmlnaW5hbFN0YXJ0ID09PSBvcmlnaW5hbEVuZCArIDEsICdvcmlnaW5hbFN0YXJ0IHNob3VsZCBvbmx5IGJlIG9uZSBtb3JlIHRoYW4gb3JpZ2luYWxFbmQnKTtcbiAgICAgICAgICAgICAgICBEZWJ1Zy5Bc3NlcnQobW9kaWZpZWRTdGFydCA9PT0gbW9kaWZpZWRFbmQgKyAxLCAnbW9kaWZpZWRTdGFydCBzaG91bGQgb25seSBiZSBvbmUgbW9yZSB0aGFuIG1vZGlmaWVkRW5kJyk7XG4gICAgICAgICAgICAgICAgLy8gSWRlbnRpY2FsIHNlcXVlbmNlcyAtIE5vIGRpZmZlcmVuY2VzXG4gICAgICAgICAgICAgICAgY2hhbmdlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyBwcm9ibGVtIGNhbiBiZSBzb2x2ZWQgdXNpbmcgdGhlIERpdmlkZS1BbmQtQ29ucXVlciB0ZWNobmlxdWUuXG4gICAgICAgIHZhciBtaWRPcmlnaW5hbEFyciA9IFswXSwgbWlkTW9kaWZpZWRBcnIgPSBbMF07XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLkNvbXB1dGVSZWN1cnNpb25Qb2ludChvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEVuZCwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRFbmQsIG1pZE9yaWdpbmFsQXJyLCBtaWRNb2RpZmllZEFyciwgcXVpdEVhcmx5QXJyKTtcbiAgICAgICAgdmFyIG1pZE9yaWdpbmFsID0gbWlkT3JpZ2luYWxBcnJbMF07XG4gICAgICAgIHZhciBtaWRNb2RpZmllZCA9IG1pZE1vZGlmaWVkQXJyWzBdO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBSZXN1bHQgaXMgbm90LW51bGwgd2hlbiB0aGVyZSB3YXMgZW5vdWdoIG1lbW9yeSB0byBjb21wdXRlIHRoZSBjaGFuZ2VzIHdoaWxlXG4gICAgICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIHRoZSByZWN1cnNpb24gcG9pbnRcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXF1aXRFYXJseUFyclswXSkge1xuICAgICAgICAgICAgLy8gV2UgY2FuIGJyZWFrIHRoZSBwcm9ibGVtIGRvd24gcmVjdXJzaXZlbHkgYnkgZmluZGluZyB0aGUgY2hhbmdlcyBpbiB0aGVcbiAgICAgICAgICAgIC8vIEZpcnN0IEhhbGY6ICAgKG9yaWdpbmFsU3RhcnQsIG1vZGlmaWVkU3RhcnQpIHRvIChtaWRPcmlnaW5hbCwgbWlkTW9kaWZpZWQpXG4gICAgICAgICAgICAvLyBTZWNvbmQgSGFsZjogIChtaWRPcmlnaW5hbCArIDEsIG1pbk1vZGlmaWVkICsgMSkgdG8gKG9yaWdpbmFsRW5kLCBtb2RpZmllZEVuZClcbiAgICAgICAgICAgIC8vIE5PVEU6IENvbXB1dGVEaWZmKCkgaXMgaW5jbHVzaXZlLCB0aGVyZWZvcmUgdGhlIHNlY29uZCByYW5nZSBzdGFydHMgb24gdGhlIG5leHQgcG9pbnRcbiAgICAgICAgICAgIHZhciBsZWZ0Q2hhbmdlcyA9IHRoaXMuQ29tcHV0ZURpZmZSZWN1cnNpdmUob3JpZ2luYWxTdGFydCwgbWlkT3JpZ2luYWwsIG1vZGlmaWVkU3RhcnQsIG1pZE1vZGlmaWVkLCBxdWl0RWFybHlBcnIpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0Q2hhbmdlcyA9IFtdO1xuICAgICAgICAgICAgaWYgKCFxdWl0RWFybHlBcnJbMF0pIHtcbiAgICAgICAgICAgICAgICByaWdodENoYW5nZXMgPSB0aGlzLkNvbXB1dGVEaWZmUmVjdXJzaXZlKG1pZE9yaWdpbmFsICsgMSwgb3JpZ2luYWxFbmQsIG1pZE1vZGlmaWVkICsgMSwgbW9kaWZpZWRFbmQsIHF1aXRFYXJseUFycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBkaWQndCBoYXZlIHRpbWUgdG8gZmluaXNoIHRoZSBmaXJzdCBoYWxmLCBzbyB3ZSBkb24ndCBoYXZlIHRpbWUgdG8gY29tcHV0ZSB0aGlzIGhhbGYuXG4gICAgICAgICAgICAgICAgLy8gQ29uc2lkZXIgdGhlIGVudGlyZSByZXN0IG9mIHRoZSBzZXF1ZW5jZSBkaWZmZXJlbnQuXG4gICAgICAgICAgICAgICAgcmlnaHRDaGFuZ2VzID0gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGlmZkNoYW5nZShtaWRPcmlnaW5hbCArIDEsIG9yaWdpbmFsRW5kIC0gKG1pZE9yaWdpbmFsICsgMSkgKyAxLCBtaWRNb2RpZmllZCArIDEsIG1vZGlmaWVkRW5kIC0gKG1pZE1vZGlmaWVkICsgMSkgKyAxKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Db25jYXRlbmF0ZUNoYW5nZXMobGVmdENoYW5nZXMsIHJpZ2h0Q2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgaGl0IGhlcmUsIHdlIHF1aXQgZWFybHksIGFuZCBzbyBjYW4ndCByZXR1cm4gYW55dGhpbmcgbWVhbmluZ2Z1bFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IERpZmZDaGFuZ2Uob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxFbmQgLSBvcmlnaW5hbFN0YXJ0ICsgMSwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRFbmQgLSBtb2RpZmllZFN0YXJ0ICsgMSlcbiAgICAgICAgXTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLldBTEtUUkFDRSA9IGZ1bmN0aW9uIChkaWFnb25hbEZvcndhcmRCYXNlLCBkaWFnb25hbEZvcndhcmRTdGFydCwgZGlhZ29uYWxGb3J3YXJkRW5kLCBkaWFnb25hbEZvcndhcmRPZmZzZXQsIGRpYWdvbmFsUmV2ZXJzZUJhc2UsIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0LCBkaWFnb25hbFJldmVyc2VFbmQsIGRpYWdvbmFsUmV2ZXJzZU9mZnNldCwgZm9yd2FyZFBvaW50cywgcmV2ZXJzZVBvaW50cywgb3JpZ2luYWxJbmRleCwgb3JpZ2luYWxFbmQsIG1pZE9yaWdpbmFsQXJyLCBtb2RpZmllZEluZGV4LCBtb2RpZmllZEVuZCwgbWlkTW9kaWZpZWRBcnIsIGRlbHRhSXNFdmVuLCBxdWl0RWFybHlBcnIpIHtcbiAgICAgICAgdmFyIGZvcndhcmRDaGFuZ2VzID0gbnVsbCwgcmV2ZXJzZUNoYW5nZXMgPSBudWxsO1xuICAgICAgICAvLyBGaXJzdCwgd2FsayBiYWNrd2FyZCB0aHJvdWdoIHRoZSBmb3J3YXJkIGRpYWdvbmFscyBoaXN0b3J5XG4gICAgICAgIHZhciBjaGFuZ2VIZWxwZXIgPSBuZXcgRGlmZkNoYW5nZUhlbHBlcigpO1xuICAgICAgICB2YXIgZGlhZ29uYWxNaW4gPSBkaWFnb25hbEZvcndhcmRTdGFydDtcbiAgICAgICAgdmFyIGRpYWdvbmFsTWF4ID0gZGlhZ29uYWxGb3J3YXJkRW5kO1xuICAgICAgICB2YXIgZGlhZ29uYWxSZWxhdGl2ZSA9IChtaWRPcmlnaW5hbEFyclswXSAtIG1pZE1vZGlmaWVkQXJyWzBdKSAtIGRpYWdvbmFsRm9yd2FyZE9mZnNldDtcbiAgICAgICAgdmFyIGxhc3RPcmlnaW5hbEluZGV4ID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgdmFyIGhpc3RvcnlJbmRleCA9IHRoaXMubV9mb3J3YXJkSGlzdG9yeS5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgZGlhZ29uYWw7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZGlhZ29uYWwgaW5kZXggZnJvbSB0aGUgcmVsYXRpdmUgZGlhZ29uYWwgbnVtYmVyXG4gICAgICAgICAgICBkaWFnb25hbCA9IGRpYWdvbmFsUmVsYXRpdmUgKyBkaWFnb25hbEZvcndhcmRCYXNlO1xuICAgICAgICAgICAgLy8gRmlndXJlIG91dCB3aGVyZSB3ZSBjYW1lIGZyb21cbiAgICAgICAgICAgIGlmIChkaWFnb25hbCA9PT0gZGlhZ29uYWxNaW4gfHwgKGRpYWdvbmFsIDwgZGlhZ29uYWxNYXggJiYgZm9yd2FyZFBvaW50c1tkaWFnb25hbCAtIDFdIDwgZm9yd2FyZFBvaW50c1tkaWFnb25hbCArIDFdKSkge1xuICAgICAgICAgICAgICAgIC8vIFZlcnRpY2FsIGxpbmUgKHRoZSBlbGVtZW50IGlzIGFuIGluc2VydClcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEluZGV4ID0gZm9yd2FyZFBvaW50c1tkaWFnb25hbCArIDFdO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXggPSBvcmlnaW5hbEluZGV4IC0gZGlhZ29uYWxSZWxhdGl2ZSAtIGRpYWdvbmFsRm9yd2FyZE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxJbmRleCA8IGxhc3RPcmlnaW5hbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5NYXJrTmV4dENoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0T3JpZ2luYWxJbmRleCA9IG9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgY2hhbmdlSGVscGVyLkFkZE1vZGlmaWVkRWxlbWVudChvcmlnaW5hbEluZGV4ICsgMSwgbW9kaWZpZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgZGlhZ29uYWxSZWxhdGl2ZSA9IChkaWFnb25hbCArIDEpIC0gZGlhZ29uYWxGb3J3YXJkQmFzZTsgLy9TZXR1cCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIb3Jpem9udGFsIGxpbmUgKHRoZSBlbGVtZW50IGlzIGEgZGVsZXRpb24pXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9IGZvcndhcmRQb2ludHNbZGlhZ29uYWwgLSAxXSArIDE7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRJbmRleCA9IG9yaWdpbmFsSW5kZXggLSBkaWFnb25hbFJlbGF0aXZlIC0gZGlhZ29uYWxGb3J3YXJkT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEluZGV4IDwgbGFzdE9yaWdpbmFsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlSGVscGVyLk1hcmtOZXh0Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhc3RPcmlnaW5hbEluZGV4ID0gb3JpZ2luYWxJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgY2hhbmdlSGVscGVyLkFkZE9yaWdpbmFsRWxlbWVudChvcmlnaW5hbEluZGV4LCBtb2RpZmllZEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgZGlhZ29uYWxSZWxhdGl2ZSA9IChkaWFnb25hbCAtIDEpIC0gZGlhZ29uYWxGb3J3YXJkQmFzZTsgLy9TZXR1cCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGlzdG9yeUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICBmb3J3YXJkUG9pbnRzID0gdGhpcy5tX2ZvcndhcmRIaXN0b3J5W2hpc3RvcnlJbmRleF07XG4gICAgICAgICAgICAgICAgZGlhZ29uYWxGb3J3YXJkQmFzZSA9IGZvcndhcmRQb2ludHNbMF07IC8vV2Ugc3RvcmVkIHRoaXMgaW4gdGhlIGZpcnN0IHNwb3RcbiAgICAgICAgICAgICAgICBkaWFnb25hbE1pbiA9IDE7XG4gICAgICAgICAgICAgICAgZGlhZ29uYWxNYXggPSBmb3J3YXJkUG9pbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKC0taGlzdG9yeUluZGV4ID49IC0xKTtcbiAgICAgICAgLy8gSXJvbmljYWxseSwgd2UgZ2V0IHRoZSBmb3J3YXJkIGNoYW5nZXMgYXMgdGhlIHJldmVyc2Ugb2YgdGhlXG4gICAgICAgIC8vIG9yZGVyIHdlIGFkZGVkIHRoZW0gc2luY2Ugd2UgdGVjaG5pY2FsbHkgYWRkZWQgdGhlbSBiYWNrd2FyZHNcbiAgICAgICAgZm9yd2FyZENoYW5nZXMgPSBjaGFuZ2VIZWxwZXIuZ2V0UmV2ZXJzZUNoYW5nZXMoKTtcbiAgICAgICAgaWYgKHF1aXRFYXJseUFyclswXSkge1xuICAgICAgICAgICAgLy8gVE9ETzogQ2FsY3VsYXRlIGEgcGFydGlhbCBmcm9tIHRoZSByZXZlcnNlIGRpYWdvbmFscy5cbiAgICAgICAgICAgIC8vICAgICAgIEZvciBub3csIGp1c3QgYXNzdW1lIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIG1pZE9yaWdpbmFsL21pZE1vZGlmaWVkIHBvaW50IGlzIGEgZGlmZlxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3RhcnRQb2ludCA9IG1pZE9yaWdpbmFsQXJyWzBdICsgMTtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZFN0YXJ0UG9pbnQgPSBtaWRNb2RpZmllZEFyclswXSArIDE7XG4gICAgICAgICAgICBpZiAoZm9yd2FyZENoYW5nZXMgIT09IG51bGwgJiYgZm9yd2FyZENoYW5nZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0Rm9yd2FyZENoYW5nZSA9IGZvcndhcmRDaGFuZ2VzW2ZvcndhcmRDaGFuZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRQb2ludCA9IE1hdGgubWF4KG9yaWdpbmFsU3RhcnRQb2ludCwgbGFzdEZvcndhcmRDaGFuZ2UuZ2V0T3JpZ2luYWxFbmQoKSk7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRTdGFydFBvaW50ID0gTWF0aC5tYXgobW9kaWZpZWRTdGFydFBvaW50LCBsYXN0Rm9yd2FyZENoYW5nZS5nZXRNb2RpZmllZEVuZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldmVyc2VDaGFuZ2VzID0gW1xuICAgICAgICAgICAgICAgIG5ldyBEaWZmQ2hhbmdlKG9yaWdpbmFsU3RhcnRQb2ludCwgb3JpZ2luYWxFbmQgLSBvcmlnaW5hbFN0YXJ0UG9pbnQgKyAxLCBtb2RpZmllZFN0YXJ0UG9pbnQsIG1vZGlmaWVkRW5kIC0gbW9kaWZpZWRTdGFydFBvaW50ICsgMSlcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3cgd2FsayBiYWNrd2FyZCB0aHJvdWdoIHRoZSByZXZlcnNlIGRpYWdvbmFscyBoaXN0b3J5XG4gICAgICAgICAgICBjaGFuZ2VIZWxwZXIgPSBuZXcgRGlmZkNoYW5nZUhlbHBlcigpO1xuICAgICAgICAgICAgZGlhZ29uYWxNaW4gPSBkaWFnb25hbFJldmVyc2VTdGFydDtcbiAgICAgICAgICAgIGRpYWdvbmFsTWF4ID0gZGlhZ29uYWxSZXZlcnNlRW5kO1xuICAgICAgICAgICAgZGlhZ29uYWxSZWxhdGl2ZSA9IChtaWRPcmlnaW5hbEFyclswXSAtIG1pZE1vZGlmaWVkQXJyWzBdKSAtIGRpYWdvbmFsUmV2ZXJzZU9mZnNldDtcbiAgICAgICAgICAgIGxhc3RPcmlnaW5hbEluZGV4ID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgIGhpc3RvcnlJbmRleCA9IChkZWx0YUlzRXZlbikgPyB0aGlzLm1fcmV2ZXJzZUhpc3RvcnkubGVuZ3RoIC0gMSA6IHRoaXMubV9yZXZlcnNlSGlzdG9yeS5sZW5ndGggLSAyO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGlhZ29uYWwgaW5kZXggZnJvbSB0aGUgcmVsYXRpdmUgZGlhZ29uYWwgbnVtYmVyXG4gICAgICAgICAgICAgICAgZGlhZ29uYWwgPSBkaWFnb25hbFJlbGF0aXZlICsgZGlhZ29uYWxSZXZlcnNlQmFzZTtcbiAgICAgICAgICAgICAgICAvLyBGaWd1cmUgb3V0IHdoZXJlIHdlIGNhbWUgZnJvbVxuICAgICAgICAgICAgICAgIGlmIChkaWFnb25hbCA9PT0gZGlhZ29uYWxNaW4gfHwgKGRpYWdvbmFsIDwgZGlhZ29uYWxNYXggJiYgcmV2ZXJzZVBvaW50c1tkaWFnb25hbCAtIDFdID49IHJldmVyc2VQb2ludHNbZGlhZ29uYWwgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lICh0aGUgZWxlbWVudCBpcyBhIGRlbGV0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9IHJldmVyc2VQb2ludHNbZGlhZ29uYWwgKyAxXSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXggPSBvcmlnaW5hbEluZGV4IC0gZGlhZ29uYWxSZWxhdGl2ZSAtIGRpYWdvbmFsUmV2ZXJzZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsSW5kZXggPiBsYXN0T3JpZ2luYWxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlSGVscGVyLk1hcmtOZXh0Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE9yaWdpbmFsSW5kZXggPSBvcmlnaW5hbEluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlSGVscGVyLkFkZE9yaWdpbmFsRWxlbWVudChvcmlnaW5hbEluZGV4ICsgMSwgbW9kaWZpZWRJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaWFnb25hbFJlbGF0aXZlID0gKGRpYWdvbmFsICsgMSkgLSBkaWFnb25hbFJldmVyc2VCYXNlOyAvL1NldHVwIGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFZlcnRpY2FsIGxpbmUgKHRoZSBlbGVtZW50IGlzIGFuIGluc2VydGlvbilcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9IHJldmVyc2VQb2ludHNbZGlhZ29uYWwgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRJbmRleCA9IG9yaWdpbmFsSW5kZXggLSBkaWFnb25hbFJlbGF0aXZlIC0gZGlhZ29uYWxSZXZlcnNlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxJbmRleCA+IGxhc3RPcmlnaW5hbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VIZWxwZXIuTWFya05leHRDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXN0T3JpZ2luYWxJbmRleCA9IG9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5BZGRNb2RpZmllZEVsZW1lbnQob3JpZ2luYWxJbmRleCArIDEsIG1vZGlmaWVkSW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlhZ29uYWxSZWxhdGl2ZSA9IChkaWFnb25hbCAtIDEpIC0gZGlhZ29uYWxSZXZlcnNlQmFzZTsgLy9TZXR1cCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXZlcnNlUG9pbnRzID0gdGhpcy5tX3JldmVyc2VIaXN0b3J5W2hpc3RvcnlJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsUmV2ZXJzZUJhc2UgPSByZXZlcnNlUG9pbnRzWzBdOyAvL1dlIHN0b3JlZCB0aGlzIGluIHRoZSBmaXJzdCBzcG90XG4gICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsTWluID0gMTtcbiAgICAgICAgICAgICAgICAgICAgZGlhZ29uYWxNYXggPSByZXZlcnNlUG9pbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAoLS1oaXN0b3J5SW5kZXggPj0gLTEpO1xuICAgICAgICAgICAgLy8gVGhlcmUgYXJlIGNhc2VzIHdoZXJlIHRoZSByZXZlcnNlIGhpc3Rvcnkgd2lsbCBmaW5kIGRpZmZzIHRoYXRcbiAgICAgICAgICAgIC8vIGFyZSBjb3JyZWN0LCBidXQgbm90IGludHVpdGl2ZSwgc28gd2UgbmVlZCBzaGlmdCB0aGVtLlxuICAgICAgICAgICAgcmV2ZXJzZUNoYW5nZXMgPSBjaGFuZ2VIZWxwZXIuZ2V0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLkNvbmNhdGVuYXRlQ2hhbmdlcyhmb3J3YXJkQ2hhbmdlcywgcmV2ZXJzZUNoYW5nZXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2l2ZW4gdGhlIHJhbmdlIHRvIGNvbXB1dGUgdGhlIGRpZmYgb24sIHRoaXMgbWV0aG9kIGZpbmRzIHRoZSBwb2ludDpcbiAgICAgKiAobWlkT3JpZ2luYWwsIG1pZE1vZGlmaWVkKVxuICAgICAqIHRoYXQgZXhpc3RzIGluIHRoZSBtaWRkbGUgb2YgdGhlIExDUyBvZiB0aGUgdHdvIHNlcXVlbmNlcyBhbmRcbiAgICAgKiBpcyB0aGUgcG9pbnQgYXQgd2hpY2ggdGhlIExDUyBwcm9ibGVtIG1heSBiZSBicm9rZW4gZG93biByZWN1cnNpdmVseS5cbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHRyeSB0byBrZWVwIHRoZSBMQ1MgdHJhY2UgaW4gbWVtb3J5LiBJZiB0aGUgTENTIHJlY3Vyc2lvblxuICAgICAqIHBvaW50IGlzIGNhbGN1bGF0ZWQgYW5kIHRoZSBmdWxsIHRyYWNlIGlzIGF2YWlsYWJsZSBpbiBtZW1vcnksIHRoZW4gdGhpcyBtZXRob2RcbiAgICAgKiB3aWxsIHJldHVybiB0aGUgY2hhbmdlIGxpc3QuXG4gICAgICogQHBhcmFtIG9yaWdpbmFsU3RhcnQgVGhlIHN0YXJ0IGJvdW5kIG9mIHRoZSBvcmlnaW5hbCBzZXF1ZW5jZSByYW5nZVxuICAgICAqIEBwYXJhbSBvcmlnaW5hbEVuZCBUaGUgZW5kIGJvdW5kIG9mIHRoZSBvcmlnaW5hbCBzZXF1ZW5jZSByYW5nZVxuICAgICAqIEBwYXJhbSBtb2RpZmllZFN0YXJ0IFRoZSBzdGFydCBib3VuZCBvZiB0aGUgbW9kaWZpZWQgc2VxdWVuY2UgcmFuZ2VcbiAgICAgKiBAcGFyYW0gbW9kaWZpZWRFbmQgVGhlIGVuZCBib3VuZCBvZiB0aGUgbW9kaWZpZWQgc2VxdWVuY2UgcmFuZ2VcbiAgICAgKiBAcGFyYW0gbWlkT3JpZ2luYWwgVGhlIG1pZGRsZSBwb2ludCBvZiB0aGUgb3JpZ2luYWwgc2VxdWVuY2UgcmFuZ2VcbiAgICAgKiBAcGFyYW0gbWlkTW9kaWZpZWQgVGhlIG1pZGRsZSBwb2ludCBvZiB0aGUgbW9kaWZpZWQgc2VxdWVuY2UgcmFuZ2VcbiAgICAgKiBAcmV0dXJucyBUaGUgZGlmZiBjaGFuZ2VzLCBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBudWxsXG4gICAgICovXG4gICAgTGNzRGlmZi5wcm90b3R5cGUuQ29tcHV0ZVJlY3Vyc2lvblBvaW50ID0gZnVuY3Rpb24gKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsRW5kLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZEVuZCwgbWlkT3JpZ2luYWxBcnIsIG1pZE1vZGlmaWVkQXJyLCBxdWl0RWFybHlBcnIpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsSW5kZXggPSAwLCBtb2RpZmllZEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRpYWdvbmFsRm9yd2FyZFN0YXJ0ID0gMCwgZGlhZ29uYWxGb3J3YXJkRW5kID0gMDtcbiAgICAgICAgdmFyIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0ID0gMCwgZGlhZ29uYWxSZXZlcnNlRW5kID0gMDtcbiAgICAgICAgdmFyIG51bURpZmZlcmVuY2VzO1xuICAgICAgICAvLyBUbyB0cmF2ZXJzZSB0aGUgZWRpdCBncmFwaCBhbmQgcHJvZHVjZSB0aGUgcHJvcGVyIExDUywgb3VyIGFjdHVhbFxuICAgICAgICAvLyBzdGFydCBwb3NpdGlvbiBpcyBqdXN0IG91dHNpZGUgdGhlIGdpdmVuIGJvdW5kYXJ5XG4gICAgICAgIG9yaWdpbmFsU3RhcnQtLTtcbiAgICAgICAgbW9kaWZpZWRTdGFydC0tO1xuICAgICAgICAvLyBXZSBzZXQgdGhlc2UgdXAgdG8gbWFrZSB0aGUgY29tcGlsZXIgaGFwcHksIGJ1dCB0aGV5IHdpbGxcbiAgICAgICAgLy8gYmUgcmVwbGFjZWQgYmVmb3JlIHdlIHJldHVybiB3aXRoIHRoZSBhY3R1YWwgcmVjdXJzaW9uIHBvaW50XG4gICAgICAgIG1pZE9yaWdpbmFsQXJyWzBdID0gMDtcbiAgICAgICAgbWlkTW9kaWZpZWRBcnJbMF0gPSAwO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGhpc3RvcnlcbiAgICAgICAgdGhpcy5tX2ZvcndhcmRIaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMubV9yZXZlcnNlSGlzdG9yeSA9IFtdO1xuICAgICAgICAvLyBFYWNoIGNlbGwgaW4gdGhlIHR3byBhcnJheXMgY29ycmVzcG9uZHMgdG8gYSBkaWFnb25hbCBpbiB0aGUgZWRpdCBncmFwaC5cbiAgICAgICAgLy8gVGhlIGludGVnZXIgdmFsdWUgaW4gdGhlIGNlbGwgcmVwcmVzZW50cyB0aGUgb3JpZ2luYWxJbmRleCBvZiB0aGUgZnVydGhlc3RcbiAgICAgICAgLy8gcmVhY2hpbmcgcG9pbnQgZm91bmQgc28gZmFyIHRoYXQgZW5kcyBpbiB0aGF0IGRpYWdvbmFsLlxuICAgICAgICAvLyBUaGUgbW9kaWZpZWRJbmRleCBjYW4gYmUgY29tcHV0ZWQgbWF0aGVtYXRpY2FsbHkgZnJvbSB0aGUgb3JpZ2luYWxJbmRleCBhbmQgdGhlIGRpYWdvbmFsIG51bWJlci5cbiAgICAgICAgdmFyIG1heERpZmZlcmVuY2VzID0gKG9yaWdpbmFsRW5kIC0gb3JpZ2luYWxTdGFydCkgKyAobW9kaWZpZWRFbmQgLSBtb2RpZmllZFN0YXJ0KTtcbiAgICAgICAgdmFyIG51bURpYWdvbmFscyA9IG1heERpZmZlcmVuY2VzICsgMTtcbiAgICAgICAgdmFyIGZvcndhcmRQb2ludHMgPSBuZXcgQXJyYXkobnVtRGlhZ29uYWxzKTtcbiAgICAgICAgdmFyIHJldmVyc2VQb2ludHMgPSBuZXcgQXJyYXkobnVtRGlhZ29uYWxzKTtcbiAgICAgICAgLy8gZGlhZ29uYWxGb3J3YXJkQmFzZTogSW5kZXggaW50byBmb3J3YXJkUG9pbnRzIG9mIHRoZSBkaWFnb25hbCB3aGljaCBwYXNzZXMgdGhyb3VnaCAob3JpZ2luYWxTdGFydCwgbW9kaWZpZWRTdGFydClcbiAgICAgICAgLy8gZGlhZ29uYWxSZXZlcnNlQmFzZTogSW5kZXggaW50byByZXZlcnNlUG9pbnRzIG9mIHRoZSBkaWFnb25hbCB3aGljaCBwYXNzZXMgdGhyb3VnaCAob3JpZ2luYWxFbmQsIG1vZGlmaWVkRW5kKVxuICAgICAgICB2YXIgZGlhZ29uYWxGb3J3YXJkQmFzZSA9IChtb2RpZmllZEVuZCAtIG1vZGlmaWVkU3RhcnQpO1xuICAgICAgICB2YXIgZGlhZ29uYWxSZXZlcnNlQmFzZSA9IChvcmlnaW5hbEVuZCAtIG9yaWdpbmFsU3RhcnQpO1xuICAgICAgICAvLyBkaWFnb25hbEZvcndhcmRPZmZzZXQ6IEdlb21ldHJpYyBvZmZzZXQgd2hpY2ggYWxsb3dzIG1vZGlmaWVkSW5kZXggdG8gYmUgY29tcHV0ZWQgZnJvbSBvcmlnaW5hbEluZGV4IGFuZCB0aGVcbiAgICAgICAgLy8gICAgZGlhZ29uYWwgbnVtYmVyIChyZWxhdGl2ZSB0byBkaWFnb25hbEZvcndhcmRCYXNlKVxuICAgICAgICAvLyBkaWFnb25hbFJldmVyc2VPZmZzZXQ6IEdlb21ldHJpYyBvZmZzZXQgd2hpY2ggYWxsb3dzIG1vZGlmaWVkSW5kZXggdG8gYmUgY29tcHV0ZWQgZnJvbSBvcmlnaW5hbEluZGV4IGFuZCB0aGVcbiAgICAgICAgLy8gICAgZGlhZ29uYWwgbnVtYmVyIChyZWxhdGl2ZSB0byBkaWFnb25hbFJldmVyc2VCYXNlKVxuICAgICAgICB2YXIgZGlhZ29uYWxGb3J3YXJkT2Zmc2V0ID0gKG9yaWdpbmFsU3RhcnQgLSBtb2RpZmllZFN0YXJ0KTtcbiAgICAgICAgdmFyIGRpYWdvbmFsUmV2ZXJzZU9mZnNldCA9IChvcmlnaW5hbEVuZCAtIG1vZGlmaWVkRW5kKTtcbiAgICAgICAgLy8gZGVsdGE6IFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGVuZCBkaWFnb25hbCBhbmQgdGhlIHN0YXJ0IGRpYWdvbmFsLiBUaGlzIGlzIHVzZWQgdG8gcmVsYXRlIGRpYWdvbmFsIG51bWJlcnNcbiAgICAgICAgLy8gICByZWxhdGl2ZSB0byB0aGUgc3RhcnQgZGlhZ29uYWwgd2l0aCBkaWFnb25hbCBudW1iZXJzIHJlbGF0aXZlIHRvIHRoZSBlbmQgZGlhZ29uYWwuXG4gICAgICAgIC8vIFRoZSBFdmVuL09kZG4tbmVzcyBvZiB0aGlzIGRlbHRhIGlzIGltcG9ydGFudCBmb3IgZGV0ZXJtaW5pbmcgd2hlbiB3ZSBzaG91bGQgY2hlY2sgZm9yIG92ZXJsYXBcbiAgICAgICAgdmFyIGRlbHRhID0gZGlhZ29uYWxSZXZlcnNlQmFzZSAtIGRpYWdvbmFsRm9yd2FyZEJhc2U7XG4gICAgICAgIHZhciBkZWx0YUlzRXZlbiA9IChkZWx0YSAlIDIgPT09IDApO1xuICAgICAgICAvLyBIZXJlIHdlIHNldCB1cCB0aGUgc3RhcnQgYW5kIGVuZCBwb2ludHMgYXMgdGhlIGZ1cnRoZXN0IHBvaW50cyBmb3VuZCBzbyBmYXJcbiAgICAgICAgLy8gaW4gYm90aCB0aGUgZm9yd2FyZCBhbmQgcmV2ZXJzZSBkaXJlY3Rpb25zLCByZXNwZWN0aXZlbHlcbiAgICAgICAgZm9yd2FyZFBvaW50c1tkaWFnb25hbEZvcndhcmRCYXNlXSA9IG9yaWdpbmFsU3RhcnQ7XG4gICAgICAgIHJldmVyc2VQb2ludHNbZGlhZ29uYWxSZXZlcnNlQmFzZV0gPSBvcmlnaW5hbEVuZDtcbiAgICAgICAgLy8gUmVtZW1iZXIgaWYgd2UgcXVpdCBlYXJseSwgYW5kIHRodXMgbmVlZCB0byBkbyBhIGJlc3QtZWZmb3J0IHJlc3VsdCBpbnN0ZWFkIG9mIGEgcmVhbCByZXN1bHQuXG4gICAgICAgIHF1aXRFYXJseUFyclswXSA9IGZhbHNlO1xuICAgICAgICAvLyBBIGNvdXBsZSBvZiBwb2ludHM6XG4gICAgICAgIC8vIC0tV2l0aCB0aGlzIG1ldGhvZCwgd2UgaXRlcmF0ZSBvbiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIHR3byBzZXF1ZW5jZXMuXG4gICAgICAgIC8vICAgVGhlIG1vcmUgZGlmZmVyZW5jZXMgdGhlcmUgYWN0dWFsbHkgYXJlLCB0aGUgbG9uZ2VyIHRoaXMgd2lsbCB0YWtlLlxuICAgICAgICAvLyAtLUFsc28sIGFzIHRoZSBudW1iZXIgb2YgZGlmZmVyZW5jZXMgaW5jcmVhc2VzLCB3ZSBoYXZlIHRvIHNlYXJjaCBvbiBkaWFnb25hbHMgZnVydGhlclxuICAgICAgICAvLyAgIGF3YXkgZnJvbSB0aGUgcmVmZXJlbmNlIGRpYWdvbmFsICh3aGljaCBpcyBkaWFnb25hbEZvcndhcmRCYXNlIGZvciBmb3J3YXJkLCBkaWFnb25hbFJldmVyc2VCYXNlIGZvciByZXZlcnNlKS5cbiAgICAgICAgLy8gLS1XZSBleHRlbmQgb24gZXZlbiBkaWFnb25hbHMgKHJlbGF0aXZlIHRvIHRoZSByZWZlcmVuY2UgZGlhZ29uYWwpIG9ubHkgd2hlbiBudW1EaWZmZXJlbmNlc1xuICAgICAgICAvLyAgIGlzIGV2ZW4gYW5kIG9kZCBkaWFnb25hbHMgb25seSB3aGVuIG51bURpZmZlcmVuY2VzIGlzIG9kZC5cbiAgICAgICAgdmFyIGRpYWdvbmFsLCB0ZW1wT3JpZ2luYWxJbmRleDtcbiAgICAgICAgZm9yIChudW1EaWZmZXJlbmNlcyA9IDE7IG51bURpZmZlcmVuY2VzIDw9IChtYXhEaWZmZXJlbmNlcyAvIDIpICsgMTsgbnVtRGlmZmVyZW5jZXMrKykge1xuICAgICAgICAgICAgdmFyIGZ1cnRoZXN0T3JpZ2luYWxJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgZnVydGhlc3RNb2RpZmllZEluZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIFJ1biB0aGUgYWxnb3JpdGhtIGluIHRoZSBmb3J3YXJkIGRpcmVjdGlvblxuICAgICAgICAgICAgZGlhZ29uYWxGb3J3YXJkU3RhcnQgPSB0aGlzLkNsaXBEaWFnb25hbEJvdW5kKGRpYWdvbmFsRm9yd2FyZEJhc2UgLSBudW1EaWZmZXJlbmNlcywgbnVtRGlmZmVyZW5jZXMsIGRpYWdvbmFsRm9yd2FyZEJhc2UsIG51bURpYWdvbmFscyk7XG4gICAgICAgICAgICBkaWFnb25hbEZvcndhcmRFbmQgPSB0aGlzLkNsaXBEaWFnb25hbEJvdW5kKGRpYWdvbmFsRm9yd2FyZEJhc2UgKyBudW1EaWZmZXJlbmNlcywgbnVtRGlmZmVyZW5jZXMsIGRpYWdvbmFsRm9yd2FyZEJhc2UsIG51bURpYWdvbmFscyk7XG4gICAgICAgICAgICBmb3IgKGRpYWdvbmFsID0gZGlhZ29uYWxGb3J3YXJkU3RhcnQ7IGRpYWdvbmFsIDw9IGRpYWdvbmFsRm9yd2FyZEVuZDsgZGlhZ29uYWwgKz0gMikge1xuICAgICAgICAgICAgICAgIC8vIFNURVAgMTogV2UgZXh0ZW5kIHRoZSBmdXJ0aGVzdCByZWFjaGluZyBwb2ludCBpbiB0aGUgcHJlc2VudCBkaWFnb25hbFxuICAgICAgICAgICAgICAgIC8vIGJ5IGxvb2tpbmcgYXQgdGhlIGRpYWdvbmFscyBhYm92ZSBhbmQgYmVsb3cgYW5kIHBpY2tpbmcgdGhlIG9uZSB3aG9zZSBwb2ludFxuICAgICAgICAgICAgICAgIC8vIGlzIGZ1cnRoZXIgYXdheSBmcm9tIHRoZSBzdGFydCBwb2ludCAob3JpZ2luYWxTdGFydCwgbW9kaWZpZWRTdGFydClcbiAgICAgICAgICAgICAgICBpZiAoZGlhZ29uYWwgPT09IGRpYWdvbmFsRm9yd2FyZFN0YXJ0IHx8IChkaWFnb25hbCA8IGRpYWdvbmFsRm9yd2FyZEVuZCAmJiBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsIC0gMV0gPCBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEluZGV4ID0gZm9yd2FyZFBvaW50c1tkaWFnb25hbCAtIDFdICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRJbmRleCA9IG9yaWdpbmFsSW5kZXggLSAoZGlhZ29uYWwgLSBkaWFnb25hbEZvcndhcmRCYXNlKSAtIGRpYWdvbmFsRm9yd2FyZE9mZnNldDtcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IG9yaWdpbmFsSW5kZXggc28gd2UgY2FuIHRlc3QgZm9yIGZhbHNlIG92ZXJsYXAgaW4gc3RlcCAzXG4gICAgICAgICAgICAgICAgdGVtcE9yaWdpbmFsSW5kZXggPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIFNURVAgMjogV2UgY2FuIGNvbnRpbnVlIHRvIGV4dGVuZCB0aGUgZnVydGhlc3QgcmVhY2hpbmcgcG9pbnQgaW4gdGhlIHByZXNlbnQgZGlhZ29uYWxcbiAgICAgICAgICAgICAgICAvLyBzbyBsb25nIGFzIHRoZSBlbGVtZW50cyBhcmUgZXF1YWwuXG4gICAgICAgICAgICAgICAgd2hpbGUgKG9yaWdpbmFsSW5kZXggPCBvcmlnaW5hbEVuZCAmJiBtb2RpZmllZEluZGV4IDwgbW9kaWZpZWRFbmQgJiYgdGhpcy5FbGVtZW50c0FyZUVxdWFsKG9yaWdpbmFsSW5kZXggKyAxLCBtb2RpZmllZEluZGV4ICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcndhcmRQb2ludHNbZGlhZ29uYWxdID0gb3JpZ2luYWxJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxJbmRleCArIG1vZGlmaWVkSW5kZXggPiBmdXJ0aGVzdE9yaWdpbmFsSW5kZXggKyBmdXJ0aGVzdE1vZGlmaWVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVydGhlc3RPcmlnaW5hbEluZGV4ID0gb3JpZ2luYWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgZnVydGhlc3RNb2RpZmllZEluZGV4ID0gbW9kaWZpZWRJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU1RFUCAzOiBJZiBkZWx0YSBpcyBvZGQgKG92ZXJsYXAgZmlyc3QgaGFwcGVucyBvbiBmb3J3YXJkIHdoZW4gZGVsdGEgaXMgb2RkKVxuICAgICAgICAgICAgICAgIC8vIGFuZCBkaWFnb25hbCBpcyBpbiB0aGUgcmFuZ2Ugb2YgcmV2ZXJzZSBkaWFnb25hbHMgY29tcHV0ZWQgZm9yIG51bURpZmZlcmVuY2VzLTFcbiAgICAgICAgICAgICAgICAvLyAodGhlIHByZXZpb3VzIGl0ZXJhdGlvbjsgd2UgaGF2ZW4ndCBjb21wdXRlZCByZXZlcnNlIGRpYWdvbmFscyBmb3IgbnVtRGlmZmVyZW5jZXMgeWV0KVxuICAgICAgICAgICAgICAgIC8vIHRoZW4gY2hlY2sgZm9yIG92ZXJsYXAuXG4gICAgICAgICAgICAgICAgaWYgKCFkZWx0YUlzRXZlbiAmJiBNYXRoLmFicyhkaWFnb25hbCAtIGRpYWdvbmFsUmV2ZXJzZUJhc2UpIDw9IChudW1EaWZmZXJlbmNlcyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEluZGV4ID49IHJldmVyc2VQb2ludHNbZGlhZ29uYWxdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRPcmlnaW5hbEFyclswXSA9IG9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRNb2RpZmllZEFyclswXSA9IG1vZGlmaWVkSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcE9yaWdpbmFsSW5kZXggPD0gcmV2ZXJzZVBvaW50c1tkaWFnb25hbF0gJiYgTWF4RGlmZmVyZW5jZXNIaXN0b3J5ID4gMCAmJiBudW1EaWZmZXJlbmNlcyA8PSAoTWF4RGlmZmVyZW5jZXNIaXN0b3J5ICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCSU5HTyEgV2Ugb3ZlcmxhcHBlZCwgYW5kIHdlIGhhdmUgdGhlIGZ1bGwgdHJhY2UgaW4gbWVtb3J5IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldBTEtUUkFDRShkaWFnb25hbEZvcndhcmRCYXNlLCBkaWFnb25hbEZvcndhcmRTdGFydCwgZGlhZ29uYWxGb3J3YXJkRW5kLCBkaWFnb25hbEZvcndhcmRPZmZzZXQsIGRpYWdvbmFsUmV2ZXJzZUJhc2UsIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0LCBkaWFnb25hbFJldmVyc2VFbmQsIGRpYWdvbmFsUmV2ZXJzZU9mZnNldCwgZm9yd2FyZFBvaW50cywgcmV2ZXJzZVBvaW50cywgb3JpZ2luYWxJbmRleCwgb3JpZ2luYWxFbmQsIG1pZE9yaWdpbmFsQXJyLCBtb2RpZmllZEluZGV4LCBtb2RpZmllZEVuZCwgbWlkTW9kaWZpZWRBcnIsIGRlbHRhSXNFdmVuLCBxdWl0RWFybHlBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWl0aGVyIGZhbHNlIG92ZXJsYXAsIG9yIHdlIGRpZG4ndCBoYXZlIGVub3VnaCBtZW1vcnkgZm9yIHRoZSBmdWxsIHRyYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVzdCByZXR1cm4gdGhlIHJlY3Vyc2lvbiBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIHNob3VsZCBiZSBxdWl0dGluZyBlYXJseSwgYmVmb3JlIG1vdmluZyBvbiB0byB0aGUgbmV4dCBpdGVyYXRpb24uXG4gICAgICAgICAgICB2YXIgbWF0Y2hMZW5ndGhPZkxvbmdlc3QgPSAoKGZ1cnRoZXN0T3JpZ2luYWxJbmRleCAtIG9yaWdpbmFsU3RhcnQpICsgKGZ1cnRoZXN0TW9kaWZpZWRJbmRleCAtIG1vZGlmaWVkU3RhcnQpIC0gbnVtRGlmZmVyZW5jZXMpIC8gMjtcbiAgICAgICAgICAgIGlmICh0aGlzLkNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSAhPT0gbnVsbCAmJiAhdGhpcy5Db250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUoZnVydGhlc3RPcmlnaW5hbEluZGV4LCB0aGlzLk9yaWdpbmFsU2VxdWVuY2UsIG1hdGNoTGVuZ3RoT2ZMb25nZXN0KSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGNhbid0IGZpbmlzaCwgc28gc2tpcCBhaGVhZCB0byBnZW5lcmF0aW5nIGEgcmVzdWx0IGZyb20gd2hhdCB3ZSBoYXZlLlxuICAgICAgICAgICAgICAgIHF1aXRFYXJseUFyclswXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBmdXJ0aGVzdCBkaXN0YW5jZSB3ZSBnb3QgaW4gdGhlIGZvcndhcmQgZGlyZWN0aW9uLlxuICAgICAgICAgICAgICAgIG1pZE9yaWdpbmFsQXJyWzBdID0gZnVydGhlc3RPcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgIG1pZE1vZGlmaWVkQXJyWzBdID0gZnVydGhlc3RNb2RpZmllZEluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaExlbmd0aE9mTG9uZ2VzdCA+IDAgJiYgTWF4RGlmZmVyZW5jZXNIaXN0b3J5ID4gMCAmJiBudW1EaWZmZXJlbmNlcyA8PSAoTWF4RGlmZmVyZW5jZXNIaXN0b3J5ICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5vdWdoIG9mIHRoZSBoaXN0b3J5IGlzIGluIG1lbW9yeSB0byB3YWxrIGl0IGJhY2t3YXJkc1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XQUxLVFJBQ0UoZGlhZ29uYWxGb3J3YXJkQmFzZSwgZGlhZ29uYWxGb3J3YXJkU3RhcnQsIGRpYWdvbmFsRm9yd2FyZEVuZCwgZGlhZ29uYWxGb3J3YXJkT2Zmc2V0LCBkaWFnb25hbFJldmVyc2VCYXNlLCBkaWFnb25hbFJldmVyc2VTdGFydCwgZGlhZ29uYWxSZXZlcnNlRW5kLCBkaWFnb25hbFJldmVyc2VPZmZzZXQsIGZvcndhcmRQb2ludHMsIHJldmVyc2VQb2ludHMsIG9yaWdpbmFsSW5kZXgsIG9yaWdpbmFsRW5kLCBtaWRPcmlnaW5hbEFyciwgbW9kaWZpZWRJbmRleCwgbW9kaWZpZWRFbmQsIG1pZE1vZGlmaWVkQXJyLCBkZWx0YUlzRXZlbiwgcXVpdEVhcmx5QXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRpZG4ndCBhY3R1YWxseSByZW1lbWJlciBlbm91Z2ggb2YgdGhlIGhpc3RvcnkuXG4gICAgICAgICAgICAgICAgICAgIC8vU2luY2Ugd2UgYXJlIHF1aXRpbmcgdGhlIGRpZmYgZWFybHksIHdlIG5lZWQgdG8gc2hpZnQgYmFjayB0aGUgb3JpZ2luYWxTdGFydCBhbmQgbW9kaWZpZWQgc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgLy9iYWNrIGludG8gdGhlIGJvdW5kYXJ5IGxpbWl0cyBzaW5jZSB3ZSBkZWNyZW1lbnRlZCB0aGVpciB2YWx1ZSBhYm92ZSBiZXlvbmQgdGhlIGJvdW5kYXJ5IGxpbWl0LlxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaWZmQ2hhbmdlKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsRW5kIC0gb3JpZ2luYWxTdGFydCArIDEsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkRW5kIC0gbW9kaWZpZWRTdGFydCArIDEpXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUnVuIHRoZSBhbGdvcml0aG0gaW4gdGhlIHJldmVyc2UgZGlyZWN0aW9uXG4gICAgICAgICAgICBkaWFnb25hbFJldmVyc2VTdGFydCA9IHRoaXMuQ2xpcERpYWdvbmFsQm91bmQoZGlhZ29uYWxSZXZlcnNlQmFzZSAtIG51bURpZmZlcmVuY2VzLCBudW1EaWZmZXJlbmNlcywgZGlhZ29uYWxSZXZlcnNlQmFzZSwgbnVtRGlhZ29uYWxzKTtcbiAgICAgICAgICAgIGRpYWdvbmFsUmV2ZXJzZUVuZCA9IHRoaXMuQ2xpcERpYWdvbmFsQm91bmQoZGlhZ29uYWxSZXZlcnNlQmFzZSArIG51bURpZmZlcmVuY2VzLCBudW1EaWZmZXJlbmNlcywgZGlhZ29uYWxSZXZlcnNlQmFzZSwgbnVtRGlhZ29uYWxzKTtcbiAgICAgICAgICAgIGZvciAoZGlhZ29uYWwgPSBkaWFnb25hbFJldmVyc2VTdGFydDsgZGlhZ29uYWwgPD0gZGlhZ29uYWxSZXZlcnNlRW5kOyBkaWFnb25hbCArPSAyKSB7XG4gICAgICAgICAgICAgICAgLy8gU1RFUCAxOiBXZSBleHRlbmQgdGhlIGZ1cnRoZXN0IHJlYWNoaW5nIHBvaW50IGluIHRoZSBwcmVzZW50IGRpYWdvbmFsXG4gICAgICAgICAgICAgICAgLy8gYnkgbG9va2luZyBhdCB0aGUgZGlhZ29uYWxzIGFib3ZlIGFuZCBiZWxvdyBhbmQgcGlja2luZyB0aGUgb25lIHdob3NlIHBvaW50XG4gICAgICAgICAgICAgICAgLy8gaXMgZnVydGhlciBhd2F5IGZyb20gdGhlIHN0YXJ0IHBvaW50IChvcmlnaW5hbEVuZCwgbW9kaWZpZWRFbmQpXG4gICAgICAgICAgICAgICAgaWYgKGRpYWdvbmFsID09PSBkaWFnb25hbFJldmVyc2VTdGFydCB8fCAoZGlhZ29uYWwgPCBkaWFnb25hbFJldmVyc2VFbmQgJiYgcmV2ZXJzZVBvaW50c1tkaWFnb25hbCAtIDFdID49IHJldmVyc2VQb2ludHNbZGlhZ29uYWwgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9IHJldmVyc2VQb2ludHNbZGlhZ29uYWwgKyAxXSAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEluZGV4ID0gcmV2ZXJzZVBvaW50c1tkaWFnb25hbCAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2RpZmllZEluZGV4ID0gb3JpZ2luYWxJbmRleCAtIChkaWFnb25hbCAtIGRpYWdvbmFsUmV2ZXJzZUJhc2UpIC0gZGlhZ29uYWxSZXZlcnNlT2Zmc2V0O1xuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgb3JpZ2luYWxJbmRleCBzbyB3ZSBjYW4gdGVzdCBmb3IgZmFsc2Ugb3ZlcmxhcFxuICAgICAgICAgICAgICAgIHRlbXBPcmlnaW5hbEluZGV4ID0gb3JpZ2luYWxJbmRleDtcbiAgICAgICAgICAgICAgICAvLyBTVEVQIDI6IFdlIGNhbiBjb250aW51ZSB0byBleHRlbmQgdGhlIGZ1cnRoZXN0IHJlYWNoaW5nIHBvaW50IGluIHRoZSBwcmVzZW50IGRpYWdvbmFsXG4gICAgICAgICAgICAgICAgLy8gYXMgbG9uZyBhcyB0aGUgZWxlbWVudHMgYXJlIGVxdWFsLlxuICAgICAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbEluZGV4ID4gb3JpZ2luYWxTdGFydCAmJiBtb2RpZmllZEluZGV4ID4gbW9kaWZpZWRTdGFydCAmJiB0aGlzLkVsZW1lbnRzQXJlRXF1YWwob3JpZ2luYWxJbmRleCwgbW9kaWZpZWRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldmVyc2VQb2ludHNbZGlhZ29uYWxdID0gb3JpZ2luYWxJbmRleDtcbiAgICAgICAgICAgICAgICAvLyBTVEVQIDQ6IElmIGRlbHRhIGlzIGV2ZW4gKG92ZXJsYXAgZmlyc3QgaGFwcGVucyBvbiByZXZlcnNlIHdoZW4gZGVsdGEgaXMgZXZlbilcbiAgICAgICAgICAgICAgICAvLyBhbmQgZGlhZ29uYWwgaXMgaW4gdGhlIHJhbmdlIG9mIGZvcndhcmQgZGlhZ29uYWxzIGNvbXB1dGVkIGZvciBudW1EaWZmZXJlbmNlc1xuICAgICAgICAgICAgICAgIC8vIHRoZW4gY2hlY2sgZm9yIG92ZXJsYXAuXG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhSXNFdmVuICYmIE1hdGguYWJzKGRpYWdvbmFsIC0gZGlhZ29uYWxGb3J3YXJkQmFzZSkgPD0gbnVtRGlmZmVyZW5jZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsSW5kZXggPD0gZm9yd2FyZFBvaW50c1tkaWFnb25hbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZE9yaWdpbmFsQXJyWzBdID0gb3JpZ2luYWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZE1vZGlmaWVkQXJyWzBdID0gbW9kaWZpZWRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wT3JpZ2luYWxJbmRleCA+PSBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsXSAmJiBNYXhEaWZmZXJlbmNlc0hpc3RvcnkgPiAwICYmIG51bURpZmZlcmVuY2VzIDw9IChNYXhEaWZmZXJlbmNlc0hpc3RvcnkgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJJTkdPISBXZSBvdmVybGFwcGVkLCBhbmQgd2UgaGF2ZSB0aGUgZnVsbCB0cmFjZSBpbiBtZW1vcnkhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV0FMS1RSQUNFKGRpYWdvbmFsRm9yd2FyZEJhc2UsIGRpYWdvbmFsRm9yd2FyZFN0YXJ0LCBkaWFnb25hbEZvcndhcmRFbmQsIGRpYWdvbmFsRm9yd2FyZE9mZnNldCwgZGlhZ29uYWxSZXZlcnNlQmFzZSwgZGlhZ29uYWxSZXZlcnNlU3RhcnQsIGRpYWdvbmFsUmV2ZXJzZUVuZCwgZGlhZ29uYWxSZXZlcnNlT2Zmc2V0LCBmb3J3YXJkUG9pbnRzLCByZXZlcnNlUG9pbnRzLCBvcmlnaW5hbEluZGV4LCBvcmlnaW5hbEVuZCwgbWlkT3JpZ2luYWxBcnIsIG1vZGlmaWVkSW5kZXgsIG1vZGlmaWVkRW5kLCBtaWRNb2RpZmllZEFyciwgZGVsdGFJc0V2ZW4sIHF1aXRFYXJseUFycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFaXRoZXIgZmFsc2Ugb3ZlcmxhcCwgb3Igd2UgZGlkbid0IGhhdmUgZW5vdWdoIG1lbW9yeSBmb3IgdGhlIGZ1bGwgdHJhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBKdXN0IHJldHVybiB0aGUgcmVjdXJzaW9uIHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgdmVjdG9ycyB0byBoaXN0b3J5IGJlZm9yZSB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgIGlmIChudW1EaWZmZXJlbmNlcyA8PSBNYXhEaWZmZXJlbmNlc0hpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBhcmUgYWxsb2NhdGluZyBzcGFjZSBmb3Igb25lIGV4dHJhIGludCwgd2hpY2ggd2UgZmlsbCB3aXRoXG4gICAgICAgICAgICAgICAgLy8gdGhlIGluZGV4IG9mIHRoZSBkaWFnb25hbCBiYXNlIGluZGV4XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBuZXcgQXJyYXkoZGlhZ29uYWxGb3J3YXJkRW5kIC0gZGlhZ29uYWxGb3J3YXJkU3RhcnQgKyAyKTtcbiAgICAgICAgICAgICAgICB0ZW1wWzBdID0gZGlhZ29uYWxGb3J3YXJkQmFzZSAtIGRpYWdvbmFsRm9yd2FyZFN0YXJ0ICsgMTtcbiAgICAgICAgICAgICAgICBNeUFycmF5LkNvcHkoZm9yd2FyZFBvaW50cywgZGlhZ29uYWxGb3J3YXJkU3RhcnQsIHRlbXAsIDEsIGRpYWdvbmFsRm9yd2FyZEVuZCAtIGRpYWdvbmFsRm9yd2FyZFN0YXJ0ICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tX2ZvcndhcmRIaXN0b3J5LnB1c2godGVtcCk7XG4gICAgICAgICAgICAgICAgdGVtcCA9IG5ldyBBcnJheShkaWFnb25hbFJldmVyc2VFbmQgLSBkaWFnb25hbFJldmVyc2VTdGFydCArIDIpO1xuICAgICAgICAgICAgICAgIHRlbXBbMF0gPSBkaWFnb25hbFJldmVyc2VCYXNlIC0gZGlhZ29uYWxSZXZlcnNlU3RhcnQgKyAxO1xuICAgICAgICAgICAgICAgIE15QXJyYXkuQ29weShyZXZlcnNlUG9pbnRzLCBkaWFnb25hbFJldmVyc2VTdGFydCwgdGVtcCwgMSwgZGlhZ29uYWxSZXZlcnNlRW5kIC0gZGlhZ29uYWxSZXZlcnNlU3RhcnQgKyAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1fcmV2ZXJzZUhpc3RvcnkucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBnb3QgaGVyZSwgdGhlbiB3ZSBoYXZlIHRoZSBmdWxsIHRyYWNlIGluIGhpc3RvcnkuIFdlIGp1c3QgaGF2ZSB0byBjb252ZXJ0IGl0IHRvIGEgY2hhbmdlIGxpc3RcbiAgICAgICAgLy8gTk9URTogVGhpcyBwYXJ0IGlzIGEgYml0IG1lc3N5XG4gICAgICAgIHJldHVybiB0aGlzLldBTEtUUkFDRShkaWFnb25hbEZvcndhcmRCYXNlLCBkaWFnb25hbEZvcndhcmRTdGFydCwgZGlhZ29uYWxGb3J3YXJkRW5kLCBkaWFnb25hbEZvcndhcmRPZmZzZXQsIGRpYWdvbmFsUmV2ZXJzZUJhc2UsIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0LCBkaWFnb25hbFJldmVyc2VFbmQsIGRpYWdvbmFsUmV2ZXJzZU9mZnNldCwgZm9yd2FyZFBvaW50cywgcmV2ZXJzZVBvaW50cywgb3JpZ2luYWxJbmRleCwgb3JpZ2luYWxFbmQsIG1pZE9yaWdpbmFsQXJyLCBtb2RpZmllZEluZGV4LCBtb2RpZmllZEVuZCwgbWlkTW9kaWZpZWRBcnIsIGRlbHRhSXNFdmVuLCBxdWl0RWFybHlBcnIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2hpZnRzIHRoZSBnaXZlbiBjaGFuZ2VzIHRvIHByb3ZpZGUgYSBtb3JlIGludHVpdGl2ZSBkaWZmLlxuICAgICAqIFdoaWxlIHRoZSBmaXJzdCBlbGVtZW50IGluIGEgZGlmZiBtYXRjaGVzIHRoZSBmaXJzdCBlbGVtZW50IGFmdGVyIHRoZSBkaWZmLFxuICAgICAqIHdlIHNoaWZ0IHRoZSBkaWZmIGRvd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2hhbmdlcyBUaGUgbGlzdCBvZiBjaGFuZ2VzIHRvIHNoaWZ0XG4gICAgICogQHJldHVybnMgVGhlIHNoaWZ0ZWQgY2hhbmdlc1xuICAgICAqL1xuICAgIExjc0RpZmYucHJvdG90eXBlLlByZXR0aWZ5Q2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIC8vIFNoaWZ0IGFsbCB0aGUgY2hhbmdlcyBkb3duIGZpcnN0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxTdG9wID0gKGkgPCBjaGFuZ2VzLmxlbmd0aCAtIDEpID8gY2hhbmdlc1tpICsgMV0ub3JpZ2luYWxTdGFydCA6IHRoaXMuT3JpZ2luYWxTZXF1ZW5jZS5nZXRMZW5ndGgoKTtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZFN0b3AgPSAoaSA8IGNoYW5nZXMubGVuZ3RoIC0gMSkgPyBjaGFuZ2VzW2kgKyAxXS5tb2RpZmllZFN0YXJ0IDogdGhpcy5Nb2RpZmllZFNlcXVlbmNlLmdldExlbmd0aCgpO1xuICAgICAgICAgICAgdmFyIGNoZWNrT3JpZ2luYWwgPSBjaGFuZ2Uub3JpZ2luYWxMZW5ndGggPiAwO1xuICAgICAgICAgICAgdmFyIGNoZWNrTW9kaWZpZWQgPSBjaGFuZ2UubW9kaWZpZWRMZW5ndGggPiAwO1xuICAgICAgICAgICAgd2hpbGUgKGNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgY2hhbmdlLm9yaWdpbmFsTGVuZ3RoIDwgb3JpZ2luYWxTdG9wICYmXG4gICAgICAgICAgICAgICAgY2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBjaGFuZ2UubW9kaWZpZWRMZW5ndGggPCBtb2RpZmllZFN0b3AgJiZcbiAgICAgICAgICAgICAgICAoIWNoZWNrT3JpZ2luYWwgfHwgdGhpcy5PcmlnaW5hbEVsZW1lbnRzQXJlRXF1YWwoY2hhbmdlLm9yaWdpbmFsU3RhcnQsIGNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgY2hhbmdlLm9yaWdpbmFsTGVuZ3RoKSkgJiZcbiAgICAgICAgICAgICAgICAoIWNoZWNrTW9kaWZpZWQgfHwgdGhpcy5Nb2RpZmllZEVsZW1lbnRzQXJlRXF1YWwoY2hhbmdlLm1vZGlmaWVkU3RhcnQsIGNoYW5nZS5tb2RpZmllZFN0YXJ0ICsgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoKSkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2Uub3JpZ2luYWxTdGFydCsrO1xuICAgICAgICAgICAgICAgIGNoYW5nZS5tb2RpZmllZFN0YXJ0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWVyZ2VkQ2hhbmdlQXJyID0gW251bGxdO1xuICAgICAgICAgICAgaWYgKGkgPCBjaGFuZ2VzLmxlbmd0aCAtIDEgJiYgdGhpcy5DaGFuZ2VzT3ZlcmxhcChjaGFuZ2VzW2ldLCBjaGFuZ2VzW2kgKyAxXSwgbWVyZ2VkQ2hhbmdlQXJyKSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSBtZXJnZWRDaGFuZ2VBcnJbMF07XG4gICAgICAgICAgICAgICAgY2hhbmdlcy5zcGxpY2UoaSArIDEsIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTaGlmdCBjaGFuZ2VzIGJhY2sgdXAgdW50aWwgd2UgaGl0IGVtcHR5IG9yIHdoaXRlc3BhY2Utb25seSBsaW5lc1xuICAgICAgICBmb3IgKHZhciBpID0gY2hhbmdlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxTdG9wID0gMDtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZFN0b3AgPSAwO1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZDaGFuZ2UgPSBjaGFuZ2VzW2kgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAocHJldkNoYW5nZS5vcmlnaW5hbExlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdG9wID0gcHJldkNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgcHJldkNoYW5nZS5vcmlnaW5hbExlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZDaGFuZ2UubW9kaWZpZWRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RvcCA9IHByZXZDaGFuZ2UubW9kaWZpZWRTdGFydCArIHByZXZDaGFuZ2UubW9kaWZpZWRMZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoZWNrT3JpZ2luYWwgPSBjaGFuZ2Uub3JpZ2luYWxMZW5ndGggPiAwO1xuICAgICAgICAgICAgdmFyIGNoZWNrTW9kaWZpZWQgPSBjaGFuZ2UubW9kaWZpZWRMZW5ndGggPiAwO1xuICAgICAgICAgICAgdmFyIGJlc3REZWx0YSA9IDA7XG4gICAgICAgICAgICB2YXIgYmVzdFNjb3JlID0gdGhpcy5fYm91bmRhcnlTY29yZShjaGFuZ2Uub3JpZ2luYWxTdGFydCwgY2hhbmdlLm9yaWdpbmFsTGVuZ3RoLCBjaGFuZ2UubW9kaWZpZWRTdGFydCwgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGRlbHRhID0gMTs7IGRlbHRhKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxTdGFydCA9IGNoYW5nZS5vcmlnaW5hbFN0YXJ0IC0gZGVsdGE7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkU3RhcnQgPSBjaGFuZ2UubW9kaWZpZWRTdGFydCAtIGRlbHRhO1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0YXJ0IDwgb3JpZ2luYWxTdG9wIHx8IG1vZGlmaWVkU3RhcnQgPCBtb2RpZmllZFN0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGVja09yaWdpbmFsICYmICF0aGlzLk9yaWdpbmFsRWxlbWVudHNBcmVFcXVhbChvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbFN0YXJ0ICsgY2hhbmdlLm9yaWdpbmFsTGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTW9kaWZpZWQgJiYgIXRoaXMuTW9kaWZpZWRFbGVtZW50c0FyZUVxdWFsKG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkU3RhcnQgKyBjaGFuZ2UubW9kaWZpZWRMZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2NvcmUgPSB0aGlzLl9ib3VuZGFyeVNjb3JlKG9yaWdpbmFsU3RhcnQsIGNoYW5nZS5vcmlnaW5hbExlbmd0aCwgbW9kaWZpZWRTdGFydCwgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGJlc3REZWx0YSA9IGRlbHRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5nZS5vcmlnaW5hbFN0YXJ0IC09IGJlc3REZWx0YTtcbiAgICAgICAgICAgIGNoYW5nZS5tb2RpZmllZFN0YXJ0IC09IGJlc3REZWx0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9PcmlnaW5hbElzQm91bmRhcnkgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDw9IDAgfHwgaW5kZXggPj0gdGhpcy5PcmlnaW5hbFNlcXVlbmNlLmdldExlbmd0aCgpIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLk9yaWdpbmFsU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgoaW5kZXgpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyAmJiAvXlxccyokLy50ZXN0KGVsZW1lbnQpKTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9PcmlnaW5hbFJlZ2lvbklzQm91bmRhcnkgPSBmdW5jdGlvbiAob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxMZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuX09yaWdpbmFsSXNCb3VuZGFyeShvcmlnaW5hbFN0YXJ0KSB8fCB0aGlzLl9PcmlnaW5hbElzQm91bmRhcnkob3JpZ2luYWxTdGFydCAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3JpZ2luYWxMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxFbmQgPSBvcmlnaW5hbFN0YXJ0ICsgb3JpZ2luYWxMZW5ndGg7XG4gICAgICAgICAgICBpZiAodGhpcy5fT3JpZ2luYWxJc0JvdW5kYXJ5KG9yaWdpbmFsRW5kIC0gMSkgfHwgdGhpcy5fT3JpZ2luYWxJc0JvdW5kYXJ5KG9yaWdpbmFsRW5kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9Nb2RpZmllZElzQm91bmRhcnkgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDw9IDAgfHwgaW5kZXggPj0gdGhpcy5Nb2RpZmllZFNlcXVlbmNlLmdldExlbmd0aCgpIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLk1vZGlmaWVkU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgoaW5kZXgpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyAmJiAvXlxccyokLy50ZXN0KGVsZW1lbnQpKTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9Nb2RpZmllZFJlZ2lvbklzQm91bmRhcnkgPSBmdW5jdGlvbiAobW9kaWZpZWRTdGFydCwgbW9kaWZpZWRMZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuX01vZGlmaWVkSXNCb3VuZGFyeShtb2RpZmllZFN0YXJ0KSB8fCB0aGlzLl9Nb2RpZmllZElzQm91bmRhcnkobW9kaWZpZWRTdGFydCAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kaWZpZWRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRFbmQgPSBtb2RpZmllZFN0YXJ0ICsgbW9kaWZpZWRMZW5ndGg7XG4gICAgICAgICAgICBpZiAodGhpcy5fTW9kaWZpZWRJc0JvdW5kYXJ5KG1vZGlmaWVkRW5kIC0gMSkgfHwgdGhpcy5fTW9kaWZpZWRJc0JvdW5kYXJ5KG1vZGlmaWVkRW5kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9ib3VuZGFyeVNjb3JlID0gZnVuY3Rpb24gKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsTGVuZ3RoLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZExlbmd0aCkge1xuICAgICAgICB2YXIgb3JpZ2luYWxTY29yZSA9ICh0aGlzLl9PcmlnaW5hbFJlZ2lvbklzQm91bmRhcnkob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxMZW5ndGgpID8gMSA6IDApO1xuICAgICAgICB2YXIgbW9kaWZpZWRTY29yZSA9ICh0aGlzLl9Nb2RpZmllZFJlZ2lvbklzQm91bmRhcnkobW9kaWZpZWRTdGFydCwgbW9kaWZpZWRMZW5ndGgpID8gMSA6IDApO1xuICAgICAgICByZXR1cm4gKG9yaWdpbmFsU2NvcmUgKyBtb2RpZmllZFNjb3JlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbmNhdGVuYXRlcyB0aGUgdHdvIGlucHV0IERpZmZDaGFuZ2UgbGlzdHMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZ1xuICAgICAqIGxpc3QuXG4gICAgICogQHBhcmFtIFRoZSBsZWZ0IGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gVGhlIHJpZ2h0IGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uY2F0ZW5hdGVkIGxpc3RcbiAgICAgKi9cbiAgICBMY3NEaWZmLnByb3RvdHlwZS5Db25jYXRlbmF0ZUNoYW5nZXMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICAgICAgdmFyIG1lcmdlZENoYW5nZUFyciA9IFtdO1xuICAgICAgICBpZiAobGVmdC5sZW5ndGggPT09IDAgfHwgcmlnaHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHJpZ2h0Lmxlbmd0aCA+IDApID8gcmlnaHQgOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuQ2hhbmdlc092ZXJsYXAobGVmdFtsZWZ0Lmxlbmd0aCAtIDFdLCByaWdodFswXSwgbWVyZ2VkQ2hhbmdlQXJyKSkge1xuICAgICAgICAgICAgLy8gU2luY2Ugd2UgYnJlYWsgdGhlIHByb2JsZW0gZG93biByZWN1cnNpdmVseSwgaXQgaXMgcG9zc2libGUgdGhhdCB3ZVxuICAgICAgICAgICAgLy8gbWlnaHQgcmVjdXJzZSBpbiB0aGUgbWlkZGxlIG9mIGEgY2hhbmdlIHRoZXJlYnkgc3BsaXR0aW5nIGl0IGludG9cbiAgICAgICAgICAgIC8vIHR3byBjaGFuZ2VzLiBIZXJlIGluIHRoZSBjb21iaW5pbmcgc3RhZ2UsIHdlIGRldGVjdCBhbmQgZnVzZSB0aG9zZVxuICAgICAgICAgICAgLy8gY2hhbmdlcyBiYWNrIHRvZ2V0aGVyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlZnQubGVuZ3RoICsgcmlnaHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBNeUFycmF5LkNvcHkobGVmdCwgMCwgcmVzdWx0LCAwLCBsZWZ0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcmVzdWx0W2xlZnQubGVuZ3RoIC0gMV0gPSBtZXJnZWRDaGFuZ2VBcnJbMF07XG4gICAgICAgICAgICBNeUFycmF5LkNvcHkocmlnaHQsIDEsIHJlc3VsdCwgbGVmdC5sZW5ndGgsIHJpZ2h0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVmdC5sZW5ndGggKyByaWdodC5sZW5ndGgpO1xuICAgICAgICAgICAgTXlBcnJheS5Db3B5KGxlZnQsIDAsIHJlc3VsdCwgMCwgbGVmdC5sZW5ndGgpO1xuICAgICAgICAgICAgTXlBcnJheS5Db3B5KHJpZ2h0LCAwLCByZXN1bHQsIGxlZnQubGVuZ3RoLCByaWdodC5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gY2hhbmdlcyBvdmVybGFwIGFuZCBjYW4gYmUgbWVyZ2VkIGludG8gYSBzaW5nbGVcbiAgICAgKiBjaGFuZ2VcbiAgICAgKiBAcGFyYW0gbGVmdCBUaGUgbGVmdCBjaGFuZ2VcbiAgICAgKiBAcGFyYW0gcmlnaHQgVGhlIHJpZ2h0IGNoYW5nZVxuICAgICAqIEBwYXJhbSBtZXJnZWRDaGFuZ2UgVGhlIG1lcmdlZCBjaGFuZ2UgaWYgdGhlIHR3byBvdmVybGFwLCBudWxsIG90aGVyd2lzZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR3byBjaGFuZ2VzIG92ZXJsYXBcbiAgICAgKi9cbiAgICBMY3NEaWZmLnByb3RvdHlwZS5DaGFuZ2VzT3ZlcmxhcCA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCwgbWVyZ2VkQ2hhbmdlQXJyKSB7XG4gICAgICAgIERlYnVnLkFzc2VydChsZWZ0Lm9yaWdpbmFsU3RhcnQgPD0gcmlnaHQub3JpZ2luYWxTdGFydCwgJ0xlZnQgY2hhbmdlIGlzIG5vdCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gcmlnaHQgY2hhbmdlJyk7XG4gICAgICAgIERlYnVnLkFzc2VydChsZWZ0Lm1vZGlmaWVkU3RhcnQgPD0gcmlnaHQubW9kaWZpZWRTdGFydCwgJ0xlZnQgY2hhbmdlIGlzIG5vdCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gcmlnaHQgY2hhbmdlJyk7XG4gICAgICAgIGlmIChsZWZ0Lm9yaWdpbmFsU3RhcnQgKyBsZWZ0Lm9yaWdpbmFsTGVuZ3RoID49IHJpZ2h0Lm9yaWdpbmFsU3RhcnQgfHwgbGVmdC5tb2RpZmllZFN0YXJ0ICsgbGVmdC5tb2RpZmllZExlbmd0aCA+PSByaWdodC5tb2RpZmllZFN0YXJ0KSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxTdGFydCA9IGxlZnQub3JpZ2luYWxTdGFydDtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbExlbmd0aCA9IGxlZnQub3JpZ2luYWxMZW5ndGg7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRTdGFydCA9IGxlZnQubW9kaWZpZWRTdGFydDtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZExlbmd0aCA9IGxlZnQubW9kaWZpZWRMZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVmdC5vcmlnaW5hbFN0YXJ0ICsgbGVmdC5vcmlnaW5hbExlbmd0aCA+PSByaWdodC5vcmlnaW5hbFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxMZW5ndGggPSByaWdodC5vcmlnaW5hbFN0YXJ0ICsgcmlnaHQub3JpZ2luYWxMZW5ndGggLSBsZWZ0Lm9yaWdpbmFsU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVmdC5tb2RpZmllZFN0YXJ0ICsgbGVmdC5tb2RpZmllZExlbmd0aCA+PSByaWdodC5tb2RpZmllZFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRMZW5ndGggPSByaWdodC5tb2RpZmllZFN0YXJ0ICsgcmlnaHQubW9kaWZpZWRMZW5ndGggLSBsZWZ0Lm1vZGlmaWVkU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXJnZWRDaGFuZ2VBcnJbMF0gPSBuZXcgRGlmZkNoYW5nZShvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbExlbmd0aCwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRMZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXJnZWRDaGFuZ2VBcnJbMF0gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHVzZWQgdG8gY2xpcCBhIGRpYWdvbmFsIGluZGV4IHRvIHRoZSByYW5nZSBvZiB2YWxpZFxuICAgICAqIGRpYWdvbmFscy4gVGhpcyBhbHNvIGRlY2lkZXMgd2hldGhlciBvciBub3QgdGhlIGRpYWdvbmFsIGluZGV4LFxuICAgICAqIGlmIGl0IGV4Y2VlZHMgdGhlIGJvdW5kYXJ5LCBzaG91bGQgYmUgY2xpcHBlZCB0byB0aGUgYm91bmRhcnkgb3IgY2xpcHBlZFxuICAgICAqIG9uZSBpbnNpZGUgdGhlIGJvdW5kYXJ5IGRlcGVuZGluZyBvbiB0aGUgRXZlbi9PZGQgc3RhdHVzIG9mIHRoZSBib3VuZGFyeVxuICAgICAqIGFuZCBudW1EaWZmZXJlbmNlcy5cbiAgICAgKiBAcGFyYW0gZGlhZ29uYWwgVGhlIGluZGV4IG9mIHRoZSBkaWFnb25hbCB0byBjbGlwLlxuICAgICAqIEBwYXJhbSBudW1EaWZmZXJlbmNlcyBUaGUgY3VycmVudCBudW1iZXIgb2YgZGlmZmVyZW5jZXMgYmVpbmcgaXRlcmF0ZWQgdXBvbi5cbiAgICAgKiBAcGFyYW0gZGlhZ29uYWxCYXNlSW5kZXggVGhlIGJhc2UgcmVmZXJlbmNlIGRpYWdvbmFsLlxuICAgICAqIEBwYXJhbSBudW1EaWFnb25hbHMgVGhlIHRvdGFsIG51bWJlciBvZiBkaWFnb25hbHMuXG4gICAgICogQHJldHVybnMgVGhlIGNsaXBwZWQgZGlhZ29uYWwgaW5kZXguXG4gICAgICovXG4gICAgTGNzRGlmZi5wcm90b3R5cGUuQ2xpcERpYWdvbmFsQm91bmQgPSBmdW5jdGlvbiAoZGlhZ29uYWwsIG51bURpZmZlcmVuY2VzLCBkaWFnb25hbEJhc2VJbmRleCwgbnVtRGlhZ29uYWxzKSB7XG4gICAgICAgIGlmIChkaWFnb25hbCA+PSAwICYmIGRpYWdvbmFsIDwgbnVtRGlhZ29uYWxzKSB7XG4gICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGNsaXAsIGl0cyBpbiByYW5nZVxuICAgICAgICAgICAgcmV0dXJuIGRpYWdvbmFsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRpYWdvbmFsc0JlbG93OiBUaGUgbnVtYmVyIG9mIGRpYWdvbmFscyBiZWxvdyB0aGUgcmVmZXJlbmNlIGRpYWdvbmFsXG4gICAgICAgIC8vIGRpYWdvbmFsc0Fib3ZlOiBUaGUgbnVtYmVyIG9mIGRpYWdvbmFscyBhYm92ZSB0aGUgcmVmZXJlbmNlIGRpYWdvbmFsXG4gICAgICAgIHZhciBkaWFnb25hbHNCZWxvdyA9IGRpYWdvbmFsQmFzZUluZGV4O1xuICAgICAgICB2YXIgZGlhZ29uYWxzQWJvdmUgPSBudW1EaWFnb25hbHMgLSBkaWFnb25hbEJhc2VJbmRleCAtIDE7XG4gICAgICAgIHZhciBkaWZmRXZlbiA9IChudW1EaWZmZXJlbmNlcyAlIDIgPT09IDApO1xuICAgICAgICBpZiAoZGlhZ29uYWwgPCAwKSB7XG4gICAgICAgICAgICB2YXIgbG93ZXJCb3VuZEV2ZW4gPSAoZGlhZ29uYWxzQmVsb3cgJSAyID09PSAwKTtcbiAgICAgICAgICAgIHJldHVybiAoZGlmZkV2ZW4gPT09IGxvd2VyQm91bmRFdmVuKSA/IDAgOiAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHVwcGVyQm91bmRFdmVuID0gKGRpYWdvbmFsc0Fib3ZlICUgMiA9PT0gMCk7XG4gICAgICAgICAgICByZXR1cm4gKGRpZmZFdmVuID09PSB1cHBlckJvdW5kRXZlbikgPyBudW1EaWFnb25hbHMgLSAxIDogbnVtRGlhZ29uYWxzIC0gMjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExjc0RpZmY7XG59KCkpO1xuZXhwb3J0IHsgTGNzRGlmZiB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKipcbiAqIFJlcHJlc2VudHMgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIHNlcXVlbmNlcy5cbiAqL1xudmFyIERpZmZDaGFuZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhIG5ldyBEaWZmQ2hhbmdlIHdpdGggdGhlIGdpdmVuIHNlcXVlbmNlIGluZm9ybWF0aW9uXG4gICAgICogYW5kIGNvbnRlbnQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGlmZkNoYW5nZShvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbExlbmd0aCwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRMZW5ndGgpIHtcbiAgICAgICAgLy9EZWJ1Zy5Bc3NlcnQob3JpZ2luYWxMZW5ndGggPiAwIHx8IG1vZGlmaWVkTGVuZ3RoID4gMCwgXCJvcmlnaW5hbExlbmd0aCBhbmQgbW9kaWZpZWRMZW5ndGggY2Fubm90IGJvdGggYmUgPD0gMFwiKTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0YXJ0ID0gb3JpZ2luYWxTdGFydDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbExlbmd0aCA9IG9yaWdpbmFsTGVuZ3RoO1xuICAgICAgICB0aGlzLm1vZGlmaWVkU3RhcnQgPSBtb2RpZmllZFN0YXJ0O1xuICAgICAgICB0aGlzLm1vZGlmaWVkTGVuZ3RoID0gbW9kaWZpZWRMZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBlbmQgcG9pbnQgKGV4Y2x1c2l2ZSkgb2YgdGhlIGNoYW5nZSBpbiB0aGUgb3JpZ2luYWwgc2VxdWVuY2UuXG4gICAgICovXG4gICAgRGlmZkNoYW5nZS5wcm90b3R5cGUuZ2V0T3JpZ2luYWxFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsU3RhcnQgKyB0aGlzLm9yaWdpbmFsTGVuZ3RoO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGVuZCBwb2ludCAoZXhjbHVzaXZlKSBvZiB0aGUgY2hhbmdlIGluIHRoZSBtb2RpZmllZCBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBEaWZmQ2hhbmdlLnByb3RvdHlwZS5nZXRNb2RpZmllZEVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kaWZpZWRTdGFydCArIHRoaXMubW9kaWZpZWRMZW5ndGg7XG4gICAgfTtcbiAgICByZXR1cm4gRGlmZkNoYW5nZTtcbn0oKSk7XG5leHBvcnQgeyBEaWZmQ2hhbmdlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8vIEF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3kgb24gRXZlbnRFbWl0dGVyIGJ5IGltcGxlbWVudGluZyBhIHN1YnNldCBvZiB0aGUgaW50ZXJmYWNlLlxudmFyIEVycm9ySGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFcnJvckhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMudW5leHBlY3RlZEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5zdGFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlICsgJ1xcblxcbicgKyBlLnN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBFcnJvckhhbmRsZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgbGlzdGVuZXIoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRXJyb3JIYW5kbGVyLnByb3RvdHlwZS5vblVuZXhwZWN0ZWRFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMudW5leHBlY3RlZEVycm9ySGFuZGxlcihlKTtcbiAgICAgICAgdGhpcy5lbWl0KGUpO1xuICAgIH07XG4gICAgLy8gRm9yIGV4dGVybmFsIGVycm9ycywgd2UgZG9uJ3Qgd2FudCB0aGUgbGlzdGVuZXJzIHRvIGJlIGNhbGxlZFxuICAgIEVycm9ySGFuZGxlci5wcm90b3R5cGUub25VbmV4cGVjdGVkRXh0ZXJuYWxFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMudW5leHBlY3RlZEVycm9ySGFuZGxlcihlKTtcbiAgICB9O1xuICAgIHJldHVybiBFcnJvckhhbmRsZXI7XG59KCkpO1xuZXhwb3J0IHsgRXJyb3JIYW5kbGVyIH07XG5leHBvcnQgdmFyIGVycm9ySGFuZGxlciA9IG5ldyBFcnJvckhhbmRsZXIoKTtcbmV4cG9ydCBmdW5jdGlvbiBvblVuZXhwZWN0ZWRFcnJvcihlKSB7XG4gICAgLy8gaWdub3JlIGVycm9ycyBmcm9tIGNhbmNlbGxlZCBwcm9taXNlc1xuICAgIGlmICghaXNQcm9taXNlQ2FuY2VsZWRFcnJvcihlKSkge1xuICAgICAgICBlcnJvckhhbmRsZXIub25VbmV4cGVjdGVkRXJyb3IoZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gb25VbmV4cGVjdGVkRXh0ZXJuYWxFcnJvcihlKSB7XG4gICAgLy8gaWdub3JlIGVycm9ycyBmcm9tIGNhbmNlbGxlZCBwcm9taXNlc1xuICAgIGlmICghaXNQcm9taXNlQ2FuY2VsZWRFcnJvcihlKSkge1xuICAgICAgICBlcnJvckhhbmRsZXIub25VbmV4cGVjdGVkRXh0ZXJuYWxFcnJvcihlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1FcnJvckZvclNlcmlhbGl6YXRpb24oZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB2YXIgbmFtZV8xID0gZXJyb3IubmFtZSwgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIHZhciBzdGFjayA9IGVycm9yLnN0YWNrdHJhY2UgfHwgZXJyb3Iuc3RhY2s7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkaXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWVfMSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICBzdGFjazogc3RhY2tcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGFzIGlzXG4gICAgcmV0dXJuIGVycm9yO1xufVxudmFyIGNhbmNlbGVkTmFtZSA9ICdDYW5jZWxlZCc7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZXJyb3IgaXMgYSBwcm9taXNlIGluIGNhbmNlbGVkIHN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2VDYW5jZWxlZEVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gY2FuY2VsZWROYW1lICYmIGVycm9yLm1lc3NhZ2UgPT09IGNhbmNlbGVkTmFtZTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBlcnJvciB0aGF0IHNpZ25hbHMgY2FuY2VsbGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsZWQoKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKGNhbmNlbGVkTmFtZSk7XG4gICAgZXJyb3IubmFtZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgcmV0dXJuIGVycm9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlsbGVnYWxBcmd1bWVudChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIklsbGVnYWwgYXJndW1lbnQ6IFwiICsgbmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdJbGxlZ2FsIGFyZ3VtZW50Jyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlsbGVnYWxTdGF0ZShuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIklsbGVnYWwgc3RhdGU6IFwiICsgbmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdJbGxlZ2FsIHN0YXRlJyk7XG4gICAgfVxufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IG9uVW5leHBlY3RlZEVycm9yIH0gZnJvbSAnLi9lcnJvcnMuanMnO1xuaW1wb3J0IHsgb25jZSBhcyBvbmNlRm4gfSBmcm9tICcuL2Z1bmN0aW9uYWwuanMnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZSwgdG9EaXNwb3NhYmxlLCBjb21iaW5lZERpc3Bvc2FibGUsIERpc3Bvc2FibGVTdG9yZSB9IGZyb20gJy4vbGlmZWN5Y2xlLmpzJztcbmltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICcuL2xpbmtlZExpc3QuanMnO1xuZXhwb3J0IHZhciBFdmVudDtcbihmdW5jdGlvbiAoRXZlbnQpIHtcbiAgICBFdmVudC5Ob25lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gRGlzcG9zYWJsZS5Ob25lOyB9O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIGV2ZW50LCByZXR1cm5zIGFub3RoZXIgZXZlbnQgd2hpY2ggb25seSBmaXJlcyBvbmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uY2UoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpc0FyZ3MgPT09IHZvaWQgMCkgeyB0aGlzQXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdGhpcywgaW4gY2FzZSB0aGUgZXZlbnQgZmlyZXMgZHVyaW5nIHRoZSBsaXN0ZW5lciBjYWxsXG4gICAgICAgICAgICB2YXIgZGlkRmlyZSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHJlc3VsdCA9IGV2ZW50KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpZEZpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZEZpcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXIuY2FsbCh0aGlzQXJncywgZSk7XG4gICAgICAgICAgICB9LCBudWxsLCBkaXNwb3NhYmxlcyk7XG4gICAgICAgICAgICBpZiAoZGlkRmlyZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBFdmVudC5vbmNlID0gb25jZTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBldmVudCBhbmQgYSBgbWFwYCBmdW5jdGlvbiwgcmV0dXJucyBhbm90aGVyIGV2ZW50IHdoaWNoIG1hcHMgZWFjaCBlbGVtZW50XG4gICAgICogdGhyb3VnaCB0aGUgbWFwcGluZyBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXAoZXZlbnQsIG1hcCkge1xuICAgICAgICByZXR1cm4gc25hcHNob3QoZnVuY3Rpb24gKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzQXJncyA9PT0gdm9pZCAwKSB7IHRoaXNBcmdzID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50KGZ1bmN0aW9uIChpKSB7IHJldHVybiBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBtYXAoaSkpOyB9LCBudWxsLCBkaXNwb3NhYmxlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBFdmVudC5tYXAgPSBtYXA7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gZXZlbnQgYW5kIGFuIGBlYWNoYCBmdW5jdGlvbiwgcmV0dXJucyBhbm90aGVyIGlkZW50aWNhbCBldmVudCBhbmQgY2FsbHNcbiAgICAgKiB0aGUgYGVhY2hgIGZ1bmN0aW9uIHBlciBlYWNoIGVsZW1lbnQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZm9yRWFjaChldmVudCwgZWFjaCkge1xuICAgICAgICByZXR1cm4gc25hcHNob3QoZnVuY3Rpb24gKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzQXJncyA9PT0gdm9pZCAwKSB7IHRoaXNBcmdzID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50KGZ1bmN0aW9uIChpKSB7IGVhY2goaSk7IGxpc3RlbmVyLmNhbGwodGhpc0FyZ3MsIGkpOyB9LCBudWxsLCBkaXNwb3NhYmxlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBFdmVudC5mb3JFYWNoID0gZm9yRWFjaDtcbiAgICBmdW5jdGlvbiBmaWx0ZXIoZXZlbnQsIGZpbHRlcikge1xuICAgICAgICByZXR1cm4gc25hcHNob3QoZnVuY3Rpb24gKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzQXJncyA9PT0gdm9pZCAwKSB7IHRoaXNBcmdzID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50KGZ1bmN0aW9uIChlKSB7IHJldHVybiBmaWx0ZXIoZSkgJiYgbGlzdGVuZXIuY2FsbCh0aGlzQXJncywgZSk7IH0sIG51bGwsIGRpc3Bvc2FibGVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEV2ZW50LmZpbHRlciA9IGZpbHRlcjtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBldmVudCwgcmV0dXJucyB0aGUgc2FtZSBldmVudCBidXQgdHlwZWQgYXMgYEV2ZW50PHZvaWQ+YC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaWduYWwoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgICBFdmVudC5zaWduYWwgPSBzaWduYWw7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBjb2xsZWN0aW9uIG9mIGV2ZW50cywgcmV0dXJucyBhIHNpbmdsZSBldmVudCB3aGljaCBlbWl0c1xuICAgICAqIHdoZW5ldmVyIGFueSBvZiB0aGUgcHJvdmlkZWQgZXZlbnRzIGVtaXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYW55KCkge1xuICAgICAgICB2YXIgZXZlbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBldmVudHNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzQXJncyA9PT0gdm9pZCAwKSB7IHRoaXNBcmdzID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkRGlzcG9zYWJsZS5hcHBseSh2b2lkIDAsIGV2ZW50cy5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBldmVudChmdW5jdGlvbiAoZSkgeyByZXR1cm4gbGlzdGVuZXIuY2FsbCh0aGlzQXJncywgZSk7IH0sIG51bGwsIGRpc3Bvc2FibGVzKTsgfSkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBFdmVudC5hbnkgPSBhbnk7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gZXZlbnQgYW5kIGEgYG1lcmdlYCBmdW5jdGlvbiwgcmV0dXJucyBhbm90aGVyIGV2ZW50IHdoaWNoIG1hcHMgZWFjaCBlbGVtZW50XG4gICAgICogYW5kIHRoZSBjdW11bGF0aXZlIHJlc3VsdCB0aHJvdWdoIHRoZSBgbWVyZ2VgIGZ1bmN0aW9uLiBTaW1pbGFyIHRvIGBtYXBgLCBidXQgd2l0aCBtZW1vcnkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVkdWNlKGV2ZW50LCBtZXJnZSwgaW5pdGlhbCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gaW5pdGlhbDtcbiAgICAgICAgcmV0dXJuIG1hcChldmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IG1lcmdlKG91dHB1dCwgZSk7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgRXZlbnQucmVkdWNlID0gcmVkdWNlO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgY2hhaW4gb2YgZXZlbnQgcHJvY2Vzc2luZyBmdW5jdGlvbnMgKGZpbHRlciwgbWFwLCBldGMpLCBlYWNoXG4gICAgICogZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHBlciBldmVudCAmIHBlciBsaXN0ZW5lci4gU25hcHNob3R0aW5nIGFuIGV2ZW50XG4gICAgICogY2hhaW4gYWxsb3dzIGVhY2ggZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBqdXN0IG9uY2UgcGVyIGV2ZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNuYXBzaG90KGV2ZW50KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcjtcbiAgICAgICAgdmFyIGVtaXR0ZXIgPSBuZXcgRW1pdHRlcih7XG4gICAgICAgICAgICBvbkZpcnN0TGlzdGVuZXJBZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGV2ZW50KGVtaXR0ZXIuZmlyZSwgZW1pdHRlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MYXN0TGlzdGVuZXJSZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgRXZlbnQuc25hcHNob3QgPSBzbmFwc2hvdDtcbiAgICBmdW5jdGlvbiBkZWJvdW5jZShldmVudCwgbWVyZ2UsIGRlbGF5LCBsZWFkaW5nLCBsZWFrV2FybmluZ1RocmVzaG9sZCkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDEwMDsgfVxuICAgICAgICBpZiAobGVhZGluZyA9PT0gdm9pZCAwKSB7IGxlYWRpbmcgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgICB2YXIgb3V0cHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgaGFuZGxlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbnVtRGVib3VuY2VkQ2FsbHMgPSAwO1xuICAgICAgICB2YXIgZW1pdHRlciA9IG5ldyBFbWl0dGVyKHtcbiAgICAgICAgICAgIGxlYWtXYXJuaW5nVGhyZXNob2xkOiBsZWFrV2FybmluZ1RocmVzaG9sZCxcbiAgICAgICAgICAgIG9uRmlyc3RMaXN0ZW5lckFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IGV2ZW50KGZ1bmN0aW9uIChjdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtRGVib3VuY2VkQ2FsbHMrKztcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gbWVyZ2Uob3V0cHV0LCBjdXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVhZGluZyAmJiAhaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmZpcmUob3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX291dHB1dCA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGVhZGluZyB8fCBudW1EZWJvdW5jZWRDYWxscyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmZpcmUoX291dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1EZWJvdW5jZWRDYWxscyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkxhc3RMaXN0ZW5lclJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgRXZlbnQuZGVib3VuY2UgPSBkZWJvdW5jZTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBldmVudCwgaXQgcmV0dXJucyBhbm90aGVyIGV2ZW50IHdoaWNoIGZpcmVzIG9ubHkgb25jZSBhbmQgYXMgc29vbiBhc1xuICAgICAqIHRoZSBpbnB1dCBldmVudCBlbWl0cy4gVGhlIGV2ZW50IGRhdGEgaXMgdGhlIG51bWJlciBvZiBtaWxsaXMgaXQgdG9vayBmb3IgdGhlXG4gICAgICogZXZlbnQgdG8gZmlyZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdG9wd2F0Y2goZXZlbnQpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiBtYXAob25jZShldmVudCksIGZ1bmN0aW9uIChfKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0OyB9KTtcbiAgICB9XG4gICAgRXZlbnQuc3RvcHdhdGNoID0gc3RvcHdhdGNoO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIGV2ZW50LCBpdCByZXR1cm5zIGFub3RoZXIgZXZlbnQgd2hpY2ggZmlyZXMgb25seSB3aGVuIHRoZSBldmVudFxuICAgICAqIGVsZW1lbnQgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsYXRjaChldmVudCkge1xuICAgICAgICB2YXIgZmlyc3RDYWxsID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNhY2hlO1xuICAgICAgICByZXR1cm4gZmlsdGVyKGV2ZW50LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBzaG91bGRFbWl0ID0gZmlyc3RDYWxsIHx8IHZhbHVlICE9PSBjYWNoZTtcbiAgICAgICAgICAgIGZpcnN0Q2FsbCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FjaGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBzaG91bGRFbWl0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgRXZlbnQubGF0Y2ggPSBsYXRjaDtcbiAgICAvKipcbiAgICAgKiBCdWZmZXJzIHRoZSBwcm92aWRlZCBldmVudCB1bnRpbCBhIGZpcnN0IGxpc3RlbmVyIGNvbWVzXG4gICAgICogYWxvbmcsIGF0IHdoaWNoIHBvaW50IGZpcmUgYWxsIHRoZSBldmVudHMgYXQgb25jZSBhbmRcbiAgICAgKiBwaXBlIHRoZSBldmVudCBmcm9tIHRoZW4gb24uXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZW1pdHRlciA9IG5ldyBFbWl0dGVyPG51bWJlcj4oKTtcbiAgICAgKiBjb25zdCBldmVudCA9IGVtaXR0ZXIuZXZlbnQ7XG4gICAgICogY29uc3QgYnVmZmVyZWRFdmVudCA9IGJ1ZmZlcihldmVudCk7XG4gICAgICpcbiAgICAgKiBlbWl0dGVyLmZpcmUoMSk7XG4gICAgICogZW1pdHRlci5maXJlKDIpO1xuICAgICAqIGVtaXR0ZXIuZmlyZSgzKTtcbiAgICAgKiAvLyBub3RoaW5nLi4uXG4gICAgICpcbiAgICAgKiBjb25zdCBsaXN0ZW5lciA9IGJ1ZmZlcmVkRXZlbnQobnVtID0+IGNvbnNvbGUubG9nKG51bSkpO1xuICAgICAqIC8vIDEsIDIsIDNcbiAgICAgKlxuICAgICAqIGVtaXR0ZXIuZmlyZSg0KTtcbiAgICAgKiAvLyA0XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZnVuY3Rpb24gYnVmZmVyKGV2ZW50LCBuZXh0VGljaywgX2J1ZmZlcikge1xuICAgICAgICBpZiAobmV4dFRpY2sgPT09IHZvaWQgMCkgeyBuZXh0VGljayA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChfYnVmZmVyID09PSB2b2lkIDApIHsgX2J1ZmZlciA9IFtdOyB9XG4gICAgICAgIHZhciBidWZmZXIgPSBfYnVmZmVyLnNsaWNlKCk7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IGV2ZW50KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmZpcmUoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLmZvckVhY2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGVtaXR0ZXIuZmlyZShlKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWZmZXIgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZW1pdHRlciA9IG5ldyBFbWl0dGVyKHtcbiAgICAgICAgICAgIG9uRmlyc3RMaXN0ZW5lckFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBldmVudChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZW1pdHRlci5maXJlKGUpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25GaXJzdExpc3RlbmVyRGlkQWRkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFRpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZmx1c2gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkxhc3RMaXN0ZW5lclJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbWl0dGVyLmV2ZW50O1xuICAgIH1cbiAgICBFdmVudC5idWZmZXIgPSBidWZmZXI7XG4gICAgdmFyIENoYWluYWJsZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBDaGFpbmFibGVFdmVudChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIENoYWluYWJsZUV2ZW50LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhaW5hYmxlRXZlbnQobWFwKHRoaXMuZXZlbnQsIGZuKSk7XG4gICAgICAgIH07XG4gICAgICAgIENoYWluYWJsZUV2ZW50LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENoYWluYWJsZUV2ZW50KGZvckVhY2godGhpcy5ldmVudCwgZm4pKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hhaW5hYmxlRXZlbnQucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGFpbmFibGVFdmVudChmaWx0ZXIodGhpcy5ldmVudCwgZm4pKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hhaW5hYmxlRXZlbnQucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uIChtZXJnZSwgaW5pdGlhbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGFpbmFibGVFdmVudChyZWR1Y2UodGhpcy5ldmVudCwgbWVyZ2UsIGluaXRpYWwpKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hhaW5hYmxlRXZlbnQucHJvdG90eXBlLmxhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGFpbmFibGVFdmVudChsYXRjaCh0aGlzLmV2ZW50KSk7XG4gICAgICAgIH07XG4gICAgICAgIENoYWluYWJsZUV2ZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hhaW5hYmxlRXZlbnQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIG9uY2UodGhpcy5ldmVudCkobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBDaGFpbmFibGVFdmVudDtcbiAgICB9KCkpO1xuICAgIGZ1bmN0aW9uIGNoYWluKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhaW5hYmxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICBFdmVudC5jaGFpbiA9IGNoYWluO1xuICAgIGZ1bmN0aW9uIGZyb21Ob2RlRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGV2ZW50TmFtZSwgbWFwKSB7XG4gICAgICAgIGlmIChtYXAgPT09IHZvaWQgMCkgeyBtYXAgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGlkOyB9OyB9XG4gICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZmlyZShtYXAuYXBwbHkodm9pZCAwLCBhcmdzKSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkZpcnN0TGlzdGVuZXJBZGQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBlbWl0dGVyLm9uKGV2ZW50TmFtZSwgZm4pOyB9O1xuICAgICAgICB2YXIgb25MYXN0TGlzdGVuZXJSZW1vdmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgZm4pOyB9O1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEVtaXR0ZXIoeyBvbkZpcnN0TGlzdGVuZXJBZGQ6IG9uRmlyc3RMaXN0ZW5lckFkZCwgb25MYXN0TGlzdGVuZXJSZW1vdmU6IG9uTGFzdExpc3RlbmVyUmVtb3ZlIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmV2ZW50O1xuICAgIH1cbiAgICBFdmVudC5mcm9tTm9kZUV2ZW50RW1pdHRlciA9IGZyb21Ob2RlRXZlbnRFbWl0dGVyO1xuICAgIGZ1bmN0aW9uIGZyb21ET01FdmVudEVtaXR0ZXIoZW1pdHRlciwgZXZlbnROYW1lLCBtYXApIHtcbiAgICAgICAgaWYgKG1hcCA9PT0gdm9pZCAwKSB7IG1hcCA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gaWQ7IH07IH1cbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5maXJlKG1hcC5hcHBseSh2b2lkIDAsIGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uRmlyc3RMaXN0ZW5lckFkZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKTsgfTtcbiAgICAgICAgdmFyIG9uTGFzdExpc3RlbmVyUmVtb3ZlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pOyB9O1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEVtaXR0ZXIoeyBvbkZpcnN0TGlzdGVuZXJBZGQ6IG9uRmlyc3RMaXN0ZW5lckFkZCwgb25MYXN0TGlzdGVuZXJSZW1vdmU6IG9uTGFzdExpc3RlbmVyUmVtb3ZlIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmV2ZW50O1xuICAgIH1cbiAgICBFdmVudC5mcm9tRE9NRXZlbnRFbWl0dGVyID0gZnJvbURPTUV2ZW50RW1pdHRlcjtcbiAgICBmdW5jdGlvbiBmcm9tUHJvbWlzZShwcm9taXNlKSB7XG4gICAgICAgIHZhciBlbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICAgICAgdmFyIHNob3VsZEVtaXQgPSBmYWxzZTtcbiAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4odW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBlbWl0dGVyLmZpcmUodW5kZWZpbmVkKTsgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmZpcmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNob3VsZEVtaXQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgRXZlbnQuZnJvbVByb21pc2UgPSBmcm9tUHJvbWlzZTtcbiAgICBmdW5jdGlvbiB0b1Byb21pc2UoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChjKSB7IHJldHVybiBvbmNlKGV2ZW50KShjKTsgfSk7XG4gICAgfVxuICAgIEV2ZW50LnRvUHJvbWlzZSA9IHRvUHJvbWlzZTtcbn0pKEV2ZW50IHx8IChFdmVudCA9IHt9KSk7XG52YXIgX2dsb2JhbExlYWtXYXJuaW5nVGhyZXNob2xkID0gLTE7XG52YXIgTGVha2FnZU1vbml0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGVha2FnZU1vbml0b3IoY3VzdG9tVGhyZXNob2xkLCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTgpLnNsaWNlKDIsIDUpOyB9XG4gICAgICAgIHRoaXMuY3VzdG9tVGhyZXNob2xkID0gY3VzdG9tVGhyZXNob2xkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl93YXJuQ291bnRkb3duID0gMDtcbiAgICB9XG4gICAgTGVha2FnZU1vbml0b3IucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWNrcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMZWFrYWdlTW9uaXRvci5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAobGlzdGVuZXJDb3VudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdGhyZXNob2xkID0gX2dsb2JhbExlYWtXYXJuaW5nVGhyZXNob2xkO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY3VzdG9tVGhyZXNob2xkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyZXNob2xkID0gdGhpcy5jdXN0b21UaHJlc2hvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRocmVzaG9sZCA8PSAwIHx8IGxpc3RlbmVyQ291bnQgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9zdGFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWNrcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjay5zcGxpdCgnXFxuJykuc2xpY2UoMykuam9pbignXFxuJyk7XG4gICAgICAgIHZhciBjb3VudCA9ICh0aGlzLl9zdGFja3MuZ2V0KHN0YWNrKSB8fCAwKTtcbiAgICAgICAgdGhpcy5fc3RhY2tzLnNldChzdGFjaywgY291bnQgKyAxKTtcbiAgICAgICAgdGhpcy5fd2FybkNvdW50ZG93biAtPSAxO1xuICAgICAgICBpZiAodGhpcy5fd2FybkNvdW50ZG93biA8PSAwKSB7XG4gICAgICAgICAgICAvLyBvbmx5IHdhcm4gb24gZmlyc3QgZXhjZWVkIGFuZCB0aGVuIGV2ZXJ5IHRpbWUgdGhlIGxpbWl0XG4gICAgICAgICAgICAvLyBpcyBleGNlZWRlZCBieSA1MCUgYWdhaW5cbiAgICAgICAgICAgIHRoaXMuX3dhcm5Db3VudGRvd24gPSB0aHJlc2hvbGQgKiAwLjU7XG4gICAgICAgICAgICAvLyBmaW5kIG1vc3QgZnJlcXVlbnQgbGlzdGVuZXIgYW5kIHByaW50IHdhcm5pbmdcbiAgICAgICAgICAgIHZhciB0b3BTdGFja18xO1xuICAgICAgICAgICAgdmFyIHRvcENvdW50XzEgPSAwO1xuICAgICAgICAgICAgdGhpcy5fc3RhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNvdW50LCBzdGFjaykge1xuICAgICAgICAgICAgICAgIGlmICghdG9wU3RhY2tfMSB8fCB0b3BDb3VudF8xIDwgY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wU3RhY2tfMSA9IHN0YWNrO1xuICAgICAgICAgICAgICAgICAgICB0b3BDb3VudF8xID0gY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbXCIgKyB0aGlzLm5hbWUgKyBcIl0gcG90ZW50aWFsIGxpc3RlbmVyIExFQUsgZGV0ZWN0ZWQsIGhhdmluZyBcIiArIGxpc3RlbmVyQ291bnQgKyBcIiBsaXN0ZW5lcnMgYWxyZWFkeS4gTU9TVCBmcmVxdWVudCBsaXN0ZW5lciAoXCIgKyB0b3BDb3VudF8xICsgXCIpOlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih0b3BTdGFja18xKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gKF90aGlzLl9zdGFja3MuZ2V0KHN0YWNrKSB8fCAwKTtcbiAgICAgICAgICAgIF90aGlzLl9zdGFja3Muc2V0KHN0YWNrLCBjb3VudCAtIDEpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIExlYWthZ2VNb25pdG9yO1xufSgpKTtcbi8qKlxuICogVGhlIEVtaXR0ZXIgY2FuIGJlIHVzZWQgdG8gZXhwb3NlIGFuIEV2ZW50IHRvIHRoZSBwdWJsaWNcbiAqIHRvIGZpcmUgaXQgZnJvbSB0aGUgaW5zaWRlcy5cbiAqIFNhbXBsZTpcbiAgICBjbGFzcyBEb2N1bWVudCB7XG5cbiAgICAgICAgcHJpdmF0ZSBfb25EaWRDaGFuZ2UgPSBuZXcgRW1pdHRlcjwodmFsdWU6c3RyaW5nKT0+YW55PigpO1xuXG4gICAgICAgIHB1YmxpYyBvbkRpZENoYW5nZSA9IHRoaXMuX29uRGlkQ2hhbmdlLmV2ZW50O1xuXG4gICAgICAgIC8vIGdldHRlci1zdHlsZVxuICAgICAgICAvLyBnZXQgb25EaWRDaGFuZ2UoKTogRXZlbnQ8KHZhbHVlOnN0cmluZyk9PmFueT4ge1xuICAgICAgICAvLyBcdHJldHVybiB0aGlzLl9vbkRpZENoYW5nZS5ldmVudDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHByaXZhdGUgX2RvSXQoKSB7XG4gICAgICAgICAgICAvLy4uLlxuICAgICAgICAgICAgdGhpcy5fb25EaWRDaGFuZ2UuZmlyZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gKi9cbnZhciBFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVtaXR0ZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9kaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5fbGVha2FnZU1vbiA9IF9nbG9iYWxMZWFrV2FybmluZ1RocmVzaG9sZCA+IDBcbiAgICAgICAgICAgID8gbmV3IExlYWthZ2VNb25pdG9yKHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5sZWFrV2FybmluZ1RocmVzaG9sZClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRW1pdHRlci5wcm90b3R5cGUsIFwiZXZlbnRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yIHRoZSBwdWJsaWMgdG8gYWxsb3cgdG8gc3Vic2NyaWJlXG4gICAgICAgICAqIHRvIGV2ZW50cyBmcm9tIHRoaXMgRW1pdHRlclxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9ldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50ID0gZnVuY3Rpb24gKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzID0gbmV3IExpbmtlZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RMaXN0ZW5lciA9IF90aGlzLl9saXN0ZW5lcnMuaXNFbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RMaXN0ZW5lciAmJiBfdGhpcy5fb3B0aW9ucyAmJiBfdGhpcy5fb3B0aW9ucy5vbkZpcnN0TGlzdGVuZXJBZGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9vcHRpb25zLm9uRmlyc3RMaXN0ZW5lckFkZChfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZSA9IF90aGlzLl9saXN0ZW5lcnMucHVzaCghdGhpc0FyZ3MgPyBsaXN0ZW5lciA6IFtsaXN0ZW5lciwgdGhpc0FyZ3NdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0TGlzdGVuZXIgJiYgX3RoaXMuX29wdGlvbnMgJiYgX3RoaXMuX29wdGlvbnMub25GaXJzdExpc3RlbmVyRGlkQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb3B0aW9ucy5vbkZpcnN0TGlzdGVuZXJEaWRBZGQoX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fb3B0aW9ucyAmJiBfdGhpcy5fb3B0aW9ucy5vbkxpc3RlbmVyRGlkQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb3B0aW9ucy5vbkxpc3RlbmVyRGlkQWRkKF90aGlzLCBsaXN0ZW5lciwgdGhpc0FyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFuZCByZWNvcmQgdGhpcyBlbWl0dGVyIGZvciBwb3RlbnRpYWwgbGVha2FnZVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlTW9uaXRvcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9sZWFrYWdlTW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVNb25pdG9yID0gX3RoaXMuX2xlYWthZ2VNb24uY2hlY2soX3RoaXMuX2xpc3RlbmVycy5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZU1vbml0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTW9uaXRvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGlzcG9zZSA9IEVtaXR0ZXIuX25vb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fb3B0aW9ucyAmJiBfdGhpcy5fb3B0aW9ucy5vbkxhc3RMaXN0ZW5lclJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0xpc3RlbmVycyA9IChfdGhpcy5fbGlzdGVuZXJzICYmICFfdGhpcy5fbGlzdGVuZXJzLmlzRW1wdHkoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0xpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9vcHRpb25zLm9uTGFzdExpc3RlbmVyUmVtb3ZlKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3Bvc2FibGVzIGluc3RhbmNlb2YgRGlzcG9zYWJsZVN0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NhYmxlcy5hZGQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRpc3Bvc2FibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcG9zYWJsZXMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogVG8gYmUga2VwdCBwcml2YXRlIHRvIGZpcmUgYW4gZXZlbnQgdG9cbiAgICAgKiBzdWJzY3JpYmVyc1xuICAgICAqL1xuICAgIEVtaXR0ZXIucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgLy8gcHV0IGFsbCBbbGlzdGVuZXIsZXZlbnRdLXBhaXJzIGludG8gZGVsaXZlcnkgcXVldWVcbiAgICAgICAgICAgIC8vIHRoZW4gZW1pdCBhbGwgZXZlbnQuIGFuIGlubmVyL25lc3RlZCBldmVudCBtaWdodCBiZVxuICAgICAgICAgICAgLy8gdGhlIGRyaXZlciBvZiB0aGlzXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RlbGl2ZXJ5UXVldWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxpdmVyeVF1ZXVlID0gbmV3IExpbmtlZExpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGl0ZXIgPSB0aGlzLl9saXN0ZW5lcnMuaXRlcmF0b3IoKSwgZSA9IGl0ZXIubmV4dCgpOyAhZS5kb25lOyBlID0gaXRlci5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxpdmVyeVF1ZXVlLnB1c2goW2UudmFsdWUsIGV2ZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fZGVsaXZlcnlRdWV1ZS5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuX2RlbGl2ZXJ5UXVldWUuc2hpZnQoKSwgbGlzdGVuZXIgPSBfYVswXSwgZXZlbnRfMSA9IF9hWzFdO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodW5kZWZpbmVkLCBldmVudF8xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyWzBdLmNhbGwobGlzdGVuZXJbMV0sIGV2ZW50XzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVW5leHBlY3RlZEVycm9yKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRW1pdHRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2RlbGl2ZXJ5UXVldWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlbGl2ZXJ5UXVldWUuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGVha2FnZU1vbikge1xuICAgICAgICAgICAgdGhpcy5fbGVha2FnZU1vbi5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGlzcG9zZWQgPSB0cnVlO1xuICAgIH07XG4gICAgRW1pdHRlci5fbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICByZXR1cm4gRW1pdHRlcjtcbn0oKSk7XG5leHBvcnQgeyBFbWl0dGVyIH07XG52YXIgUGF1c2VhYmxlRW1pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUGF1c2VhYmxlRW1pdHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQYXVzZWFibGVFbWl0dGVyKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2lzUGF1c2VkID0gMDtcbiAgICAgICAgX3RoaXMuX2V2ZW50UXVldWUgPSBuZXcgTGlua2VkTGlzdCgpO1xuICAgICAgICBfdGhpcy5fbWVyZ2VGbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBQYXVzZWFibGVFbWl0dGVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQrKztcbiAgICB9O1xuICAgIFBhdXNlYWJsZUVtaXR0ZXIucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUGF1c2VkICE9PSAwICYmIC0tdGhpcy5faXNQYXVzZWQgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tZXJnZUZuKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBtZXJnZSBmdW5jdGlvbiB0byBjcmVhdGUgYSBzaW5nbGUgY29tcG9zaXRlXG4gICAgICAgICAgICAgICAgLy8gZXZlbnQuIG1ha2UgYSBjb3B5IGluIGNhc2UgZmlyaW5nIHBhdXNlcyB0aGlzIGVtaXR0ZXJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRRdWV1ZS50b0FycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRRdWV1ZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZmlyZS5jYWxsKHRoaXMsIHRoaXMuX21lcmdlRm4oZXZlbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBubyBtZXJnaW5nLCBmaXJlIGVhY2ggZXZlbnQgaW5kaXZpZHVhbGx5IGFuZCB0ZXN0XG4gICAgICAgICAgICAgICAgLy8gdGhhdCB0aGlzIGVtaXR0ZXIgaXNuJ3QgcGF1c2VkIGhhbGZ3YXkgdGhyb3VnaFxuICAgICAgICAgICAgICAgIHdoaWxlICghdGhpcy5faXNQYXVzZWQgJiYgdGhpcy5fZXZlbnRRdWV1ZS5zaXplICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZmlyZS5jYWxsKHRoaXMsIHRoaXMuX2V2ZW50UXVldWUuc2hpZnQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBQYXVzZWFibGVFbWl0dGVyLnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1BhdXNlZCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50UXVldWUucHVzaChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmZpcmUuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBQYXVzZWFibGVFbWl0dGVyO1xufShFbWl0dGVyKSk7XG5leHBvcnQgeyBQYXVzZWFibGVFbWl0dGVyIH07XG52YXIgRXZlbnRNdWx0aXBsZXhlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudE11bHRpcGxleGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmhhc0xpc3RlbmVycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRW1pdHRlcih7XG4gICAgICAgICAgICBvbkZpcnN0TGlzdGVuZXJBZGQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9uRmlyc3RMaXN0ZW5lckFkZCgpOyB9LFxuICAgICAgICAgICAgb25MYXN0TGlzdGVuZXJSZW1vdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9uTGFzdExpc3RlbmVyUmVtb3ZlKCk7IH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZSwgXCJldmVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5ldmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRXZlbnRNdWx0aXBsZXhlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBlID0geyBldmVudDogZXZlbnQsIGxpc3RlbmVyOiBudWxsIH07XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1c2goZSk7XG4gICAgICAgIGlmICh0aGlzLmhhc0xpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5ob29rKGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmhhc0xpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIF90aGlzLnVuaG9vayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZHggPSBfdGhpcy5ldmVudHMuaW5kZXhPZihlKTtcbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRvRGlzcG9zYWJsZShvbmNlRm4oZGlzcG9zZSkpO1xuICAgIH07XG4gICAgRXZlbnRNdWx0aXBsZXhlci5wcm90b3R5cGUub25GaXJzdExpc3RlbmVyQWRkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmhhc0xpc3RlbmVycyA9IHRydWU7XG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmhvb2soZSk7IH0pO1xuICAgIH07XG4gICAgRXZlbnRNdWx0aXBsZXhlci5wcm90b3R5cGUub25MYXN0TGlzdGVuZXJSZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGFzTGlzdGVuZXJzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLnVuaG9vayhlKTsgfSk7XG4gICAgfTtcbiAgICBFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZS5saXN0ZW5lciA9IGUuZXZlbnQoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIF90aGlzLmVtaXR0ZXIuZmlyZShyKTsgfSk7XG4gICAgfTtcbiAgICBFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZS51bmhvb2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5saXN0ZW5lcikge1xuICAgICAgICAgICAgZS5saXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZS5saXN0ZW5lciA9IG51bGw7XG4gICAgfTtcbiAgICBFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZGlzcG9zZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIEV2ZW50TXVsdGlwbGV4ZXI7XG59KCkpO1xuZXhwb3J0IHsgRXZlbnRNdWx0aXBsZXhlciB9O1xuLyoqXG4gKiBUaGUgRXZlbnRCdWZmZXJlciBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyBpbiB3aGljaCB5b3Ugd2FudFxuICogdG8gZGVsYXkgZmlyaW5nIHlvdXIgZXZlbnRzIGR1cmluZyBzb21lIGNvZGUuXG4gKiBZb3UgY2FuIHdyYXAgdGhhdCBjb2RlIGFuZCBiZSBzdXJlIHRoYXQgdGhlIGV2ZW50IHdpbGwgbm90XG4gKiBiZSBmaXJlZCBkdXJpbmcgdGhhdCB3cmFwLlxuICpcbiAqIGBgYFxuICogY29uc3QgZW1pdHRlcjogRW1pdHRlcjtcbiAqIGNvbnN0IGRlbGF5ZXIgPSBuZXcgRXZlbnREZWxheWVyKCk7XG4gKiBjb25zdCBkZWxheWVkRXZlbnQgPSBkZWxheWVyLndyYXBFdmVudChlbWl0dGVyLmV2ZW50KTtcbiAqXG4gKiBkZWxheWVkRXZlbnQoY29uc29sZS5sb2cpO1xuICpcbiAqIGRlbGF5ZXIuYnVmZmVyRXZlbnRzKCgpID0+IHtcbiAqICAgZW1pdHRlci5maXJlKCk7IC8vIGV2ZW50IHdpbGwgbm90IGJlIGZpcmVkIHlldFxuICogfSk7XG4gKlxuICogLy8gZXZlbnQgd2lsbCBvbmx5IGJlIGZpcmVkIGF0IHRoaXMgcG9pbnRcbiAqIGBgYFxuICovXG52YXIgRXZlbnRCdWZmZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudEJ1ZmZlcmVyKCkge1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICB9XG4gICAgRXZlbnRCdWZmZXJlci5wcm90b3R5cGUud3JhcEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IF90aGlzLmJ1ZmZlcnNbX3RoaXMuYnVmZmVycy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGxpc3RlbmVyLmNhbGwodGhpc0FyZ3MsIGkpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpc0FyZ3MsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCwgZGlzcG9zYWJsZXMpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgRXZlbnRCdWZmZXJlci5wcm90b3R5cGUuYnVmZmVyRXZlbnRzID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5idWZmZXJzLnB1c2goYnVmZmVyKTtcbiAgICAgICAgdmFyIHIgPSBmbigpO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMucG9wKCk7XG4gICAgICAgIGJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uIChmbHVzaCkgeyByZXR1cm4gZmx1c2goKTsgfSk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgcmV0dXJuIEV2ZW50QnVmZmVyZXI7XG59KCkpO1xuZXhwb3J0IHsgRXZlbnRCdWZmZXJlciB9O1xuLyoqXG4gKiBBIFJlbGF5IGlzIGFuIGV2ZW50IGZvcndhcmRlciB3aGljaCBmdW5jdGlvbnMgYXMgYSByZXBsdWdhYmJsZSBldmVudCBwaXBlLlxuICogT25jZSBjcmVhdGVkLCB5b3UgY2FuIGNvbm5lY3QgYW4gaW5wdXQgZXZlbnQgdG8gaXQgYW5kIGl0IHdpbGwgc2ltcGx5IGZvcndhcmRcbiAqIGV2ZW50cyBmcm9tIHRoYXQgaW5wdXQgZXZlbnQgdGhyb3VnaCBpdHMgb3duIGBldmVudGAgcHJvcGVydHkuIFRoZSBgaW5wdXRgXG4gKiBjYW4gYmUgY2hhbmdlZCBhdCBhbnkgcG9pbnQgaW4gdGltZS5cbiAqL1xudmFyIFJlbGF5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlbGF5KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlucHV0RXZlbnQgPSBFdmVudC5Ob25lO1xuICAgICAgICB0aGlzLmlucHV0RXZlbnRMaXN0ZW5lciA9IERpc3Bvc2FibGUuTm9uZTtcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gbmV3IEVtaXR0ZXIoe1xuICAgICAgICAgICAgb25GaXJzdExpc3RlbmVyRGlkQWRkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbnB1dEV2ZW50TGlzdGVuZXIgPSBfdGhpcy5pbnB1dEV2ZW50KF90aGlzLmVtaXR0ZXIuZmlyZSwgX3RoaXMuZW1pdHRlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MYXN0TGlzdGVuZXJSZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbnB1dEV2ZW50TGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudCA9IHRoaXMuZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlbGF5LnByb3RvdHlwZSwgXCJpbnB1dFwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFdmVudExpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RXZlbnRMaXN0ZW5lciA9IGV2ZW50KHRoaXMuZW1pdHRlci5maXJlLCB0aGlzLmVtaXR0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBSZWxheS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEV2ZW50TGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZGlzcG9zZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlbGF5O1xufSgpKTtcbmV4cG9ydCB7IFJlbGF5IH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGlkQ2FsbCA9IGZhbHNlO1xuICAgIHZhciByZXN1bHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRpZENhbGwpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGlkQ2FsbCA9IHRydWU7XG4gICAgICAgIHJlc3VsdCA9IGZuLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0IHZhciBGSU4gPSB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfTtcbmV4cG9ydCB2YXIgSXRlcmF0b3I7XG4oZnVuY3Rpb24gKEl0ZXJhdG9yKSB7XG4gICAgdmFyIF9lbXB0eSA9IHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEZJTjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiBfZW1wdHk7XG4gICAgfVxuICAgIEl0ZXJhdG9yLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2luZ2xlKHZhbHVlKSB7XG4gICAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZJTjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBJdGVyYXRvci5zaW5nbGUgPSBzaW5nbGU7XG4gICAgZnVuY3Rpb24gZnJvbUFycmF5KGFycmF5LCBpbmRleCwgbGVuZ3RoKSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gMDsgfVxuICAgICAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHsgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRklOO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IGFycmF5W2luZGV4KytdIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIEl0ZXJhdG9yLmZyb21BcnJheSA9IGZyb21BcnJheTtcbiAgICBmdW5jdGlvbiBmcm9tKGVsZW1lbnRzKSB7XG4gICAgICAgIGlmICghZWxlbWVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBJdGVyYXRvci5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gSXRlcmF0b3IuZnJvbUFycmF5KGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICAgICAgfVxuICAgIH1cbiAgICBJdGVyYXRvci5mcm9tID0gZnJvbTtcbiAgICBmdW5jdGlvbiBtYXAoaXRlcmF0b3IsIGZuKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRklOO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBmbihlbGVtZW50LnZhbHVlKSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgSXRlcmF0b3IubWFwID0gbWFwO1xuICAgIGZ1bmN0aW9uIGZpbHRlcihpdGVyYXRvciwgZm4pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZJTjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZm4oZWxlbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZWxlbWVudC52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBJdGVyYXRvci5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgZnVuY3Rpb24gZm9yRWFjaChpdGVyYXRvciwgZm4pIHtcbiAgICAgICAgZm9yICh2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTsgIW5leHQuZG9uZTsgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKSkge1xuICAgICAgICAgICAgZm4obmV4dC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgSXRlcmF0b3IuZm9yRWFjaCA9IGZvckVhY2g7XG4gICAgZnVuY3Rpb24gY29sbGVjdChpdGVyYXRvciwgYXRNb3N0KSB7XG4gICAgICAgIGlmIChhdE1vc3QgPT09IHZvaWQgMCkgeyBhdE1vc3QgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7IH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBpZiAoYXRNb3N0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgZm9yICh2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTsgIW5leHQuZG9uZTsgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV4dC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoKytpID49IGF0TW9zdCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIEl0ZXJhdG9yLmNvbGxlY3QgPSBjb2xsZWN0O1xuICAgIGZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9ycyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaXRlcmF0b3JzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChpID49IGl0ZXJhdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZJTjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JzW2ldO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBJdGVyYXRvci5jb25jYXQgPSBjb25jYXQ7XG59KShJdGVyYXRvciB8fCAoSXRlcmF0b3IgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcXVlbmNlSXRlcmF0b3IoYXJnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICByZXR1cm4gSXRlcmF0b3IuZnJvbUFycmF5KGFyZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYXJnO1xuICAgIH1cbn1cbnZhciBBcnJheUl0ZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFycmF5SXRlcmF0b3IoaXRlbXMsIHN0YXJ0LCBlbmQsIGluZGV4KSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gdm9pZCAwKSB7IHN0YXJ0ID0gMDsgfVxuICAgICAgICBpZiAoZW5kID09PSB2b2lkIDApIHsgZW5kID0gaXRlbXMubGVuZ3RoOyB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gc3RhcnQgLSAxOyB9XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIH1cbiAgICBBcnJheUl0ZXJhdG9yLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuc3RhcnQ7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQoKTtcbiAgICB9O1xuICAgIEFycmF5SXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBNYXRoLm1pbih0aGlzLmluZGV4ICsgMSwgdGhpcy5lbmQpO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50KCk7XG4gICAgfTtcbiAgICBBcnJheUl0ZXJhdG9yLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gdGhpcy5zdGFydCAtIDEgfHwgdGhpcy5pbmRleCA9PT0gdGhpcy5lbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuaW5kZXhdO1xuICAgIH07XG4gICAgcmV0dXJuIEFycmF5SXRlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgQXJyYXlJdGVyYXRvciB9O1xudmFyIEFycmF5TmF2aWdhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcnJheU5hdmlnYXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcnJheU5hdmlnYXRvcihpdGVtcywgc3RhcnQsIGVuZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHsgc3RhcnQgPSAwOyB9XG4gICAgICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSBpdGVtcy5sZW5ndGg7IH1cbiAgICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHsgaW5kZXggPSBzdGFydCAtIDE7IH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGl0ZW1zLCBzdGFydCwgZW5kLCBpbmRleCkgfHwgdGhpcztcbiAgICB9XG4gICAgQXJyYXlOYXZpZ2F0b3IucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLmN1cnJlbnQuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEFycmF5TmF2aWdhdG9yLnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IE1hdGgubWF4KHRoaXMuaW5kZXggLSAxLCB0aGlzLnN0YXJ0IC0gMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQoKTtcbiAgICB9O1xuICAgIEFycmF5TmF2aWdhdG9yLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuc3RhcnQ7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQoKTtcbiAgICB9O1xuICAgIEFycmF5TmF2aWdhdG9yLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5lbmQgLSAxO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50KCk7XG4gICAgfTtcbiAgICBBcnJheU5hdmlnYXRvci5wcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBcnJheU5hdmlnYXRvcjtcbn0oQXJyYXlJdGVyYXRvcikpO1xuZXhwb3J0IHsgQXJyYXlOYXZpZ2F0b3IgfTtcbnZhciBNYXBwZWRJdGVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBwZWRJdGVyYXRvcihpdGVyYXRvciwgZm4pIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xuICAgICAgICB0aGlzLmZuID0gZm47XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG4gICAgTWFwcGVkSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZuKHRoaXMuaXRlcmF0b3IubmV4dCgpKTsgfTtcbiAgICByZXR1cm4gTWFwcGVkSXRlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgTWFwcGVkSXRlcmF0b3IgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgaWxsZWdhbEFyZ3VtZW50IH0gZnJvbSAnLi9lcnJvcnMuanMnO1xudmFyIEtleUNvZGVTdHJNYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2V5Q29kZVN0ck1hcCgpIHtcbiAgICAgICAgdGhpcy5fa2V5Q29kZVRvU3RyID0gW107XG4gICAgICAgIHRoaXMuX3N0clRvS2V5Q29kZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIEtleUNvZGVTdHJNYXAucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIChrZXlDb2RlLCBzdHIpIHtcbiAgICAgICAgdGhpcy5fa2V5Q29kZVRvU3RyW2tleUNvZGVdID0gc3RyO1xuICAgICAgICB0aGlzLl9zdHJUb0tleUNvZGVbc3RyLnRvTG93ZXJDYXNlKCldID0ga2V5Q29kZTtcbiAgICB9O1xuICAgIEtleUNvZGVTdHJNYXAucHJvdG90eXBlLmtleUNvZGVUb1N0ciA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlDb2RlVG9TdHJba2V5Q29kZV07XG4gICAgfTtcbiAgICBLZXlDb2RlU3RyTWFwLnByb3RvdHlwZS5zdHJUb0tleUNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHJUb0tleUNvZGVbc3RyLnRvTG93ZXJDYXNlKCldIHx8IDAgLyogVW5rbm93biAqLztcbiAgICB9O1xuICAgIHJldHVybiBLZXlDb2RlU3RyTWFwO1xufSgpKTtcbnZhciB1aU1hcCA9IG5ldyBLZXlDb2RlU3RyTWFwKCk7XG52YXIgdXNlclNldHRpbmdzVVNNYXAgPSBuZXcgS2V5Q29kZVN0ck1hcCgpO1xudmFyIHVzZXJTZXR0aW5nc0dlbmVyYWxNYXAgPSBuZXcgS2V5Q29kZVN0ck1hcCgpO1xuKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmUoa2V5Q29kZSwgdWlMYWJlbCwgdXNVc2VyU2V0dGluZ3NMYWJlbCwgZ2VuZXJhbFVzZXJTZXR0aW5nc0xhYmVsKSB7XG4gICAgICAgIGlmICh1c1VzZXJTZXR0aW5nc0xhYmVsID09PSB2b2lkIDApIHsgdXNVc2VyU2V0dGluZ3NMYWJlbCA9IHVpTGFiZWw7IH1cbiAgICAgICAgaWYgKGdlbmVyYWxVc2VyU2V0dGluZ3NMYWJlbCA9PT0gdm9pZCAwKSB7IGdlbmVyYWxVc2VyU2V0dGluZ3NMYWJlbCA9IHVzVXNlclNldHRpbmdzTGFiZWw7IH1cbiAgICAgICAgdWlNYXAuZGVmaW5lKGtleUNvZGUsIHVpTGFiZWwpO1xuICAgICAgICB1c2VyU2V0dGluZ3NVU01hcC5kZWZpbmUoa2V5Q29kZSwgdXNVc2VyU2V0dGluZ3NMYWJlbCk7XG4gICAgICAgIHVzZXJTZXR0aW5nc0dlbmVyYWxNYXAuZGVmaW5lKGtleUNvZGUsIGdlbmVyYWxVc2VyU2V0dGluZ3NMYWJlbCk7XG4gICAgfVxuICAgIGRlZmluZSgwIC8qIFVua25vd24gKi8sICd1bmtub3duJyk7XG4gICAgZGVmaW5lKDEgLyogQmFja3NwYWNlICovLCAnQmFja3NwYWNlJyk7XG4gICAgZGVmaW5lKDIgLyogVGFiICovLCAnVGFiJyk7XG4gICAgZGVmaW5lKDMgLyogRW50ZXIgKi8sICdFbnRlcicpO1xuICAgIGRlZmluZSg0IC8qIFNoaWZ0ICovLCAnU2hpZnQnKTtcbiAgICBkZWZpbmUoNSAvKiBDdHJsICovLCAnQ3RybCcpO1xuICAgIGRlZmluZSg2IC8qIEFsdCAqLywgJ0FsdCcpO1xuICAgIGRlZmluZSg3IC8qIFBhdXNlQnJlYWsgKi8sICdQYXVzZUJyZWFrJyk7XG4gICAgZGVmaW5lKDggLyogQ2Fwc0xvY2sgKi8sICdDYXBzTG9jaycpO1xuICAgIGRlZmluZSg5IC8qIEVzY2FwZSAqLywgJ0VzY2FwZScpO1xuICAgIGRlZmluZSgxMCAvKiBTcGFjZSAqLywgJ1NwYWNlJyk7XG4gICAgZGVmaW5lKDExIC8qIFBhZ2VVcCAqLywgJ1BhZ2VVcCcpO1xuICAgIGRlZmluZSgxMiAvKiBQYWdlRG93biAqLywgJ1BhZ2VEb3duJyk7XG4gICAgZGVmaW5lKDEzIC8qIEVuZCAqLywgJ0VuZCcpO1xuICAgIGRlZmluZSgxNCAvKiBIb21lICovLCAnSG9tZScpO1xuICAgIGRlZmluZSgxNSAvKiBMZWZ0QXJyb3cgKi8sICdMZWZ0QXJyb3cnLCAnTGVmdCcpO1xuICAgIGRlZmluZSgxNiAvKiBVcEFycm93ICovLCAnVXBBcnJvdycsICdVcCcpO1xuICAgIGRlZmluZSgxNyAvKiBSaWdodEFycm93ICovLCAnUmlnaHRBcnJvdycsICdSaWdodCcpO1xuICAgIGRlZmluZSgxOCAvKiBEb3duQXJyb3cgKi8sICdEb3duQXJyb3cnLCAnRG93bicpO1xuICAgIGRlZmluZSgxOSAvKiBJbnNlcnQgKi8sICdJbnNlcnQnKTtcbiAgICBkZWZpbmUoMjAgLyogRGVsZXRlICovLCAnRGVsZXRlJyk7XG4gICAgZGVmaW5lKDIxIC8qIEtFWV8wICovLCAnMCcpO1xuICAgIGRlZmluZSgyMiAvKiBLRVlfMSAqLywgJzEnKTtcbiAgICBkZWZpbmUoMjMgLyogS0VZXzIgKi8sICcyJyk7XG4gICAgZGVmaW5lKDI0IC8qIEtFWV8zICovLCAnMycpO1xuICAgIGRlZmluZSgyNSAvKiBLRVlfNCAqLywgJzQnKTtcbiAgICBkZWZpbmUoMjYgLyogS0VZXzUgKi8sICc1Jyk7XG4gICAgZGVmaW5lKDI3IC8qIEtFWV82ICovLCAnNicpO1xuICAgIGRlZmluZSgyOCAvKiBLRVlfNyAqLywgJzcnKTtcbiAgICBkZWZpbmUoMjkgLyogS0VZXzggKi8sICc4Jyk7XG4gICAgZGVmaW5lKDMwIC8qIEtFWV85ICovLCAnOScpO1xuICAgIGRlZmluZSgzMSAvKiBLRVlfQSAqLywgJ0EnKTtcbiAgICBkZWZpbmUoMzIgLyogS0VZX0IgKi8sICdCJyk7XG4gICAgZGVmaW5lKDMzIC8qIEtFWV9DICovLCAnQycpO1xuICAgIGRlZmluZSgzNCAvKiBLRVlfRCAqLywgJ0QnKTtcbiAgICBkZWZpbmUoMzUgLyogS0VZX0UgKi8sICdFJyk7XG4gICAgZGVmaW5lKDM2IC8qIEtFWV9GICovLCAnRicpO1xuICAgIGRlZmluZSgzNyAvKiBLRVlfRyAqLywgJ0cnKTtcbiAgICBkZWZpbmUoMzggLyogS0VZX0ggKi8sICdIJyk7XG4gICAgZGVmaW5lKDM5IC8qIEtFWV9JICovLCAnSScpO1xuICAgIGRlZmluZSg0MCAvKiBLRVlfSiAqLywgJ0onKTtcbiAgICBkZWZpbmUoNDEgLyogS0VZX0sgKi8sICdLJyk7XG4gICAgZGVmaW5lKDQyIC8qIEtFWV9MICovLCAnTCcpO1xuICAgIGRlZmluZSg0MyAvKiBLRVlfTSAqLywgJ00nKTtcbiAgICBkZWZpbmUoNDQgLyogS0VZX04gKi8sICdOJyk7XG4gICAgZGVmaW5lKDQ1IC8qIEtFWV9PICovLCAnTycpO1xuICAgIGRlZmluZSg0NiAvKiBLRVlfUCAqLywgJ1AnKTtcbiAgICBkZWZpbmUoNDcgLyogS0VZX1EgKi8sICdRJyk7XG4gICAgZGVmaW5lKDQ4IC8qIEtFWV9SICovLCAnUicpO1xuICAgIGRlZmluZSg0OSAvKiBLRVlfUyAqLywgJ1MnKTtcbiAgICBkZWZpbmUoNTAgLyogS0VZX1QgKi8sICdUJyk7XG4gICAgZGVmaW5lKDUxIC8qIEtFWV9VICovLCAnVScpO1xuICAgIGRlZmluZSg1MiAvKiBLRVlfViAqLywgJ1YnKTtcbiAgICBkZWZpbmUoNTMgLyogS0VZX1cgKi8sICdXJyk7XG4gICAgZGVmaW5lKDU0IC8qIEtFWV9YICovLCAnWCcpO1xuICAgIGRlZmluZSg1NSAvKiBLRVlfWSAqLywgJ1knKTtcbiAgICBkZWZpbmUoNTYgLyogS0VZX1ogKi8sICdaJyk7XG4gICAgZGVmaW5lKDU3IC8qIE1ldGEgKi8sICdNZXRhJyk7XG4gICAgZGVmaW5lKDU4IC8qIENvbnRleHRNZW51ICovLCAnQ29udGV4dE1lbnUnKTtcbiAgICBkZWZpbmUoNTkgLyogRjEgKi8sICdGMScpO1xuICAgIGRlZmluZSg2MCAvKiBGMiAqLywgJ0YyJyk7XG4gICAgZGVmaW5lKDYxIC8qIEYzICovLCAnRjMnKTtcbiAgICBkZWZpbmUoNjIgLyogRjQgKi8sICdGNCcpO1xuICAgIGRlZmluZSg2MyAvKiBGNSAqLywgJ0Y1Jyk7XG4gICAgZGVmaW5lKDY0IC8qIEY2ICovLCAnRjYnKTtcbiAgICBkZWZpbmUoNjUgLyogRjcgKi8sICdGNycpO1xuICAgIGRlZmluZSg2NiAvKiBGOCAqLywgJ0Y4Jyk7XG4gICAgZGVmaW5lKDY3IC8qIEY5ICovLCAnRjknKTtcbiAgICBkZWZpbmUoNjggLyogRjEwICovLCAnRjEwJyk7XG4gICAgZGVmaW5lKDY5IC8qIEYxMSAqLywgJ0YxMScpO1xuICAgIGRlZmluZSg3MCAvKiBGMTIgKi8sICdGMTInKTtcbiAgICBkZWZpbmUoNzEgLyogRjEzICovLCAnRjEzJyk7XG4gICAgZGVmaW5lKDcyIC8qIEYxNCAqLywgJ0YxNCcpO1xuICAgIGRlZmluZSg3MyAvKiBGMTUgKi8sICdGMTUnKTtcbiAgICBkZWZpbmUoNzQgLyogRjE2ICovLCAnRjE2Jyk7XG4gICAgZGVmaW5lKDc1IC8qIEYxNyAqLywgJ0YxNycpO1xuICAgIGRlZmluZSg3NiAvKiBGMTggKi8sICdGMTgnKTtcbiAgICBkZWZpbmUoNzcgLyogRjE5ICovLCAnRjE5Jyk7XG4gICAgZGVmaW5lKDc4IC8qIE51bUxvY2sgKi8sICdOdW1Mb2NrJyk7XG4gICAgZGVmaW5lKDc5IC8qIFNjcm9sbExvY2sgKi8sICdTY3JvbGxMb2NrJyk7XG4gICAgZGVmaW5lKDgwIC8qIFVTX1NFTUlDT0xPTiAqLywgJzsnLCAnOycsICdPRU1fMScpO1xuICAgIGRlZmluZSg4MSAvKiBVU19FUVVBTCAqLywgJz0nLCAnPScsICdPRU1fUExVUycpO1xuICAgIGRlZmluZSg4MiAvKiBVU19DT01NQSAqLywgJywnLCAnLCcsICdPRU1fQ09NTUEnKTtcbiAgICBkZWZpbmUoODMgLyogVVNfTUlOVVMgKi8sICctJywgJy0nLCAnT0VNX01JTlVTJyk7XG4gICAgZGVmaW5lKDg0IC8qIFVTX0RPVCAqLywgJy4nLCAnLicsICdPRU1fUEVSSU9EJyk7XG4gICAgZGVmaW5lKDg1IC8qIFVTX1NMQVNIICovLCAnLycsICcvJywgJ09FTV8yJyk7XG4gICAgZGVmaW5lKDg2IC8qIFVTX0JBQ0tUSUNLICovLCAnYCcsICdgJywgJ09FTV8zJyk7XG4gICAgZGVmaW5lKDExMCAvKiBBQk5UX0MxICovLCAnQUJOVF9DMScpO1xuICAgIGRlZmluZSgxMTEgLyogQUJOVF9DMiAqLywgJ0FCTlRfQzInKTtcbiAgICBkZWZpbmUoODcgLyogVVNfT1BFTl9TUVVBUkVfQlJBQ0tFVCAqLywgJ1snLCAnWycsICdPRU1fNCcpO1xuICAgIGRlZmluZSg4OCAvKiBVU19CQUNLU0xBU0ggKi8sICdcXFxcJywgJ1xcXFwnLCAnT0VNXzUnKTtcbiAgICBkZWZpbmUoODkgLyogVVNfQ0xPU0VfU1FVQVJFX0JSQUNLRVQgKi8sICddJywgJ10nLCAnT0VNXzYnKTtcbiAgICBkZWZpbmUoOTAgLyogVVNfUVVPVEUgKi8sICdcXCcnLCAnXFwnJywgJ09FTV83Jyk7XG4gICAgZGVmaW5lKDkxIC8qIE9FTV84ICovLCAnT0VNXzgnKTtcbiAgICBkZWZpbmUoOTIgLyogT0VNXzEwMiAqLywgJ09FTV8xMDInKTtcbiAgICBkZWZpbmUoOTMgLyogTlVNUEFEXzAgKi8sICdOdW1QYWQwJyk7XG4gICAgZGVmaW5lKDk0IC8qIE5VTVBBRF8xICovLCAnTnVtUGFkMScpO1xuICAgIGRlZmluZSg5NSAvKiBOVU1QQURfMiAqLywgJ051bVBhZDInKTtcbiAgICBkZWZpbmUoOTYgLyogTlVNUEFEXzMgKi8sICdOdW1QYWQzJyk7XG4gICAgZGVmaW5lKDk3IC8qIE5VTVBBRF80ICovLCAnTnVtUGFkNCcpO1xuICAgIGRlZmluZSg5OCAvKiBOVU1QQURfNSAqLywgJ051bVBhZDUnKTtcbiAgICBkZWZpbmUoOTkgLyogTlVNUEFEXzYgKi8sICdOdW1QYWQ2Jyk7XG4gICAgZGVmaW5lKDEwMCAvKiBOVU1QQURfNyAqLywgJ051bVBhZDcnKTtcbiAgICBkZWZpbmUoMTAxIC8qIE5VTVBBRF84ICovLCAnTnVtUGFkOCcpO1xuICAgIGRlZmluZSgxMDIgLyogTlVNUEFEXzkgKi8sICdOdW1QYWQ5Jyk7XG4gICAgZGVmaW5lKDEwMyAvKiBOVU1QQURfTVVMVElQTFkgKi8sICdOdW1QYWRfTXVsdGlwbHknKTtcbiAgICBkZWZpbmUoMTA0IC8qIE5VTVBBRF9BREQgKi8sICdOdW1QYWRfQWRkJyk7XG4gICAgZGVmaW5lKDEwNSAvKiBOVU1QQURfU0VQQVJBVE9SICovLCAnTnVtUGFkX1NlcGFyYXRvcicpO1xuICAgIGRlZmluZSgxMDYgLyogTlVNUEFEX1NVQlRSQUNUICovLCAnTnVtUGFkX1N1YnRyYWN0Jyk7XG4gICAgZGVmaW5lKDEwNyAvKiBOVU1QQURfREVDSU1BTCAqLywgJ051bVBhZF9EZWNpbWFsJyk7XG4gICAgZGVmaW5lKDEwOCAvKiBOVU1QQURfRElWSURFICovLCAnTnVtUGFkX0RpdmlkZScpO1xufSkoKTtcbmV4cG9ydCB2YXIgS2V5Q29kZVV0aWxzO1xuKGZ1bmN0aW9uIChLZXlDb2RlVXRpbHMpIHtcbiAgICBmdW5jdGlvbiB0b1N0cmluZyhrZXlDb2RlKSB7XG4gICAgICAgIHJldHVybiB1aU1hcC5rZXlDb2RlVG9TdHIoa2V5Q29kZSk7XG4gICAgfVxuICAgIEtleUNvZGVVdGlscy50b1N0cmluZyA9IHRvU3RyaW5nO1xuICAgIGZ1bmN0aW9uIGZyb21TdHJpbmcoa2V5KSB7XG4gICAgICAgIHJldHVybiB1aU1hcC5zdHJUb0tleUNvZGUoa2V5KTtcbiAgICB9XG4gICAgS2V5Q29kZVV0aWxzLmZyb21TdHJpbmcgPSBmcm9tU3RyaW5nO1xuICAgIGZ1bmN0aW9uIHRvVXNlclNldHRpbmdzVVMoa2V5Q29kZSkge1xuICAgICAgICByZXR1cm4gdXNlclNldHRpbmdzVVNNYXAua2V5Q29kZVRvU3RyKGtleUNvZGUpO1xuICAgIH1cbiAgICBLZXlDb2RlVXRpbHMudG9Vc2VyU2V0dGluZ3NVUyA9IHRvVXNlclNldHRpbmdzVVM7XG4gICAgZnVuY3Rpb24gdG9Vc2VyU2V0dGluZ3NHZW5lcmFsKGtleUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJTZXR0aW5nc0dlbmVyYWxNYXAua2V5Q29kZVRvU3RyKGtleUNvZGUpO1xuICAgIH1cbiAgICBLZXlDb2RlVXRpbHMudG9Vc2VyU2V0dGluZ3NHZW5lcmFsID0gdG9Vc2VyU2V0dGluZ3NHZW5lcmFsO1xuICAgIGZ1bmN0aW9uIGZyb21Vc2VyU2V0dGluZ3Moa2V5KSB7XG4gICAgICAgIHJldHVybiB1c2VyU2V0dGluZ3NVU01hcC5zdHJUb0tleUNvZGUoa2V5KSB8fCB1c2VyU2V0dGluZ3NHZW5lcmFsTWFwLnN0clRvS2V5Q29kZShrZXkpO1xuICAgIH1cbiAgICBLZXlDb2RlVXRpbHMuZnJvbVVzZXJTZXR0aW5ncyA9IGZyb21Vc2VyU2V0dGluZ3M7XG59KShLZXlDb2RlVXRpbHMgfHwgKEtleUNvZGVVdGlscyA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gS2V5Q2hvcmQoZmlyc3RQYXJ0LCBzZWNvbmRQYXJ0KSB7XG4gICAgdmFyIGNob3JkUGFydCA9ICgoc2Vjb25kUGFydCAmIDB4MDAwMEZGRkYpIDw8IDE2KSA+Pj4gMDtcbiAgICByZXR1cm4gKGZpcnN0UGFydCB8IGNob3JkUGFydCkgPj4+IDA7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2V5YmluZGluZyhrZXliaW5kaW5nLCBPUykge1xuICAgIGlmIChrZXliaW5kaW5nID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgZmlyc3RQYXJ0ID0gKGtleWJpbmRpbmcgJiAweDAwMDBGRkZGKSA+Pj4gMDtcbiAgICB2YXIgY2hvcmRQYXJ0ID0gKGtleWJpbmRpbmcgJiAweEZGRkYwMDAwKSA+Pj4gMTY7XG4gICAgaWYgKGNob3JkUGFydCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IENob3JkS2V5YmluZGluZyhbXG4gICAgICAgICAgICBjcmVhdGVTaW1wbGVLZXliaW5kaW5nKGZpcnN0UGFydCwgT1MpLFxuICAgICAgICAgICAgY3JlYXRlU2ltcGxlS2V5YmluZGluZyhjaG9yZFBhcnQsIE9TKVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDaG9yZEtleWJpbmRpbmcoW2NyZWF0ZVNpbXBsZUtleWJpbmRpbmcoZmlyc3RQYXJ0LCBPUyldKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaW1wbGVLZXliaW5kaW5nKGtleWJpbmRpbmcsIE9TKSB7XG4gICAgdmFyIGN0cmxDbWQgPSAoa2V5YmluZGluZyAmIDIwNDggLyogQ3RybENtZCAqLyA/IHRydWUgOiBmYWxzZSk7XG4gICAgdmFyIHdpbkN0cmwgPSAoa2V5YmluZGluZyAmIDI1NiAvKiBXaW5DdHJsICovID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB2YXIgY3RybEtleSA9IChPUyA9PT0gMiAvKiBNYWNpbnRvc2ggKi8gPyB3aW5DdHJsIDogY3RybENtZCk7XG4gICAgdmFyIHNoaWZ0S2V5ID0gKGtleWJpbmRpbmcgJiAxMDI0IC8qIFNoaWZ0ICovID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB2YXIgYWx0S2V5ID0gKGtleWJpbmRpbmcgJiA1MTIgLyogQWx0ICovID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB2YXIgbWV0YUtleSA9IChPUyA9PT0gMiAvKiBNYWNpbnRvc2ggKi8gPyBjdHJsQ21kIDogd2luQ3RybCk7XG4gICAgdmFyIGtleUNvZGUgPSAoa2V5YmluZGluZyAmIDI1NSAvKiBLZXlDb2RlICovKTtcbiAgICByZXR1cm4gbmV3IFNpbXBsZUtleWJpbmRpbmcoY3RybEtleSwgc2hpZnRLZXksIGFsdEtleSwgbWV0YUtleSwga2V5Q29kZSk7XG59XG52YXIgU2ltcGxlS2V5YmluZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaW1wbGVLZXliaW5kaW5nKGN0cmxLZXksIHNoaWZ0S2V5LCBhbHRLZXksIG1ldGFLZXksIGtleUNvZGUpIHtcbiAgICAgICAgdGhpcy5jdHJsS2V5ID0gY3RybEtleTtcbiAgICAgICAgdGhpcy5zaGlmdEtleSA9IHNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmFsdEtleSA9IGFsdEtleTtcbiAgICAgICAgdGhpcy5tZXRhS2V5ID0gbWV0YUtleTtcbiAgICAgICAgdGhpcy5rZXlDb2RlID0ga2V5Q29kZTtcbiAgICB9XG4gICAgU2ltcGxlS2V5YmluZGluZy5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jdHJsS2V5ID09PSBvdGhlci5jdHJsS2V5XG4gICAgICAgICAgICAmJiB0aGlzLnNoaWZ0S2V5ID09PSBvdGhlci5zaGlmdEtleVxuICAgICAgICAgICAgJiYgdGhpcy5hbHRLZXkgPT09IG90aGVyLmFsdEtleVxuICAgICAgICAgICAgJiYgdGhpcy5tZXRhS2V5ID09PSBvdGhlci5tZXRhS2V5XG4gICAgICAgICAgICAmJiB0aGlzLmtleUNvZGUgPT09IG90aGVyLmtleUNvZGUpO1xuICAgIH07XG4gICAgU2ltcGxlS2V5YmluZGluZy5wcm90b3R5cGUuaXNNb2RpZmllcktleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmtleUNvZGUgPT09IDAgLyogVW5rbm93biAqL1xuICAgICAgICAgICAgfHwgdGhpcy5rZXlDb2RlID09PSA1IC8qIEN0cmwgKi9cbiAgICAgICAgICAgIHx8IHRoaXMua2V5Q29kZSA9PT0gNTcgLyogTWV0YSAqL1xuICAgICAgICAgICAgfHwgdGhpcy5rZXlDb2RlID09PSA2IC8qIEFsdCAqL1xuICAgICAgICAgICAgfHwgdGhpcy5rZXlDb2RlID09PSA0IC8qIFNoaWZ0ICovKTtcbiAgICB9O1xuICAgIFNpbXBsZUtleWJpbmRpbmcucHJvdG90eXBlLnRvQ2hvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hvcmRLZXliaW5kaW5nKFt0aGlzXSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMga2V5YmluZGluZyByZWZlciB0byB0aGUga2V5IGNvZGUgb2YgYSBtb2RpZmllciBhbmQgaXQgYWxzbyBoYXMgdGhlIG1vZGlmaWVyIGZsYWc/XG4gICAgICovXG4gICAgU2ltcGxlS2V5YmluZGluZy5wcm90b3R5cGUuaXNEdXBsaWNhdGVNb2RpZmllckNhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoKHRoaXMuY3RybEtleSAmJiB0aGlzLmtleUNvZGUgPT09IDUgLyogQ3RybCAqLylcbiAgICAgICAgICAgIHx8ICh0aGlzLnNoaWZ0S2V5ICYmIHRoaXMua2V5Q29kZSA9PT0gNCAvKiBTaGlmdCAqLylcbiAgICAgICAgICAgIHx8ICh0aGlzLmFsdEtleSAmJiB0aGlzLmtleUNvZGUgPT09IDYgLyogQWx0ICovKVxuICAgICAgICAgICAgfHwgKHRoaXMubWV0YUtleSAmJiB0aGlzLmtleUNvZGUgPT09IDU3IC8qIE1ldGEgKi8pKTtcbiAgICB9O1xuICAgIHJldHVybiBTaW1wbGVLZXliaW5kaW5nO1xufSgpKTtcbmV4cG9ydCB7IFNpbXBsZUtleWJpbmRpbmcgfTtcbnZhciBDaG9yZEtleWJpbmRpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hvcmRLZXliaW5kaW5nKHBhcnRzKSB7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWxBcmd1bWVudChcInBhcnRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB9XG4gICAgQ2hvcmRLZXliaW5kaW5nLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgaWYgKG90aGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFydHMubGVuZ3RoICE9PSBvdGhlci5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJ0c1tpXS5lcXVhbHMob3RoZXIucGFydHNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIENob3JkS2V5YmluZGluZztcbn0oKSk7XG5leHBvcnQgeyBDaG9yZEtleWJpbmRpbmcgfTtcbnZhciBSZXNvbHZlZEtleWJpbmRpbmdQYXJ0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc29sdmVkS2V5YmluZGluZ1BhcnQoY3RybEtleSwgc2hpZnRLZXksIGFsdEtleSwgbWV0YUtleSwga2JMYWJlbCwga2JBcmlhTGFiZWwpIHtcbiAgICAgICAgdGhpcy5jdHJsS2V5ID0gY3RybEtleTtcbiAgICAgICAgdGhpcy5zaGlmdEtleSA9IHNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmFsdEtleSA9IGFsdEtleTtcbiAgICAgICAgdGhpcy5tZXRhS2V5ID0gbWV0YUtleTtcbiAgICAgICAgdGhpcy5rZXlMYWJlbCA9IGtiTGFiZWw7XG4gICAgICAgIHRoaXMua2V5QXJpYUxhYmVsID0ga2JBcmlhTGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBSZXNvbHZlZEtleWJpbmRpbmdQYXJ0O1xufSgpKTtcbmV4cG9ydCB7IFJlc29sdmVkS2V5YmluZGluZ1BhcnQgfTtcbi8qKlxuICogQSByZXNvbHZlZCBrZXliaW5kaW5nLiBDYW4gYmUgYSBzaW1wbGUga2V5YmluZGluZyBvciBhIGNob3JkIGtleWJpbmRpbmcuXG4gKi9cbnZhciBSZXNvbHZlZEtleWJpbmRpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb2x2ZWRLZXliaW5kaW5nKCkge1xuICAgIH1cbiAgICByZXR1cm4gUmVzb2x2ZWRLZXliaW5kaW5nO1xufSgpKTtcbmV4cG9ydCB7IFJlc29sdmVkS2V5YmluZGluZyB9O1xuIiwiLyoqXG4gKiBFbmFibGVzIGxvZ2dpbmcgb2YgcG90ZW50aWFsbHkgbGVha2VkIGRpc3Bvc2FibGVzLlxuICpcbiAqIEEgZGlzcG9zYWJsZSBpcyBjb25zaWRlcmVkIGxlYWtlZCBpZiBpdCBpcyBub3QgZGlzcG9zZWQgb3Igbm90IHJlZ2lzdGVyZWQgYXMgdGhlIGNoaWxkIG9mXG4gKiBhbm90aGVyIGRpc3Bvc2FibGUuIFRoaXMgdHJhY2tpbmcgaXMgdmVyeSBzaW1wbGUgYW4gb25seSB3b3JrcyBmb3IgY2xhc3NlcyB0aGF0IGVpdGhlclxuICogZXh0ZW5kIERpc3Bvc2FibGUgb3IgdXNlIGEgRGlzcG9zYWJsZVN0b3JlLiBUaGlzIG1lYW5zIHRoZXJlIGFyZSBhIGxvdCBvZiBmYWxzZSBwb3NpdGl2ZXMuXG4gKi9cbnZhciBUUkFDS19ESVNQT1NBQkxFUyA9IGZhbHNlO1xudmFyIF9faXNfZGlzcG9zYWJsZV90cmFja2VkX18gPSAnX19pc19kaXNwb3NhYmxlX3RyYWNrZWRfXyc7XG5mdW5jdGlvbiBtYXJrVHJhY2tlZCh4KSB7XG4gICAgaWYgKCFUUkFDS19ESVNQT1NBQkxFUykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh4ICYmIHggIT09IERpc3Bvc2FibGUuTm9uZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeFtfX2lzX2Rpc3Bvc2FibGVfdHJhY2tlZF9fXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB0cmFja0Rpc3Bvc2FibGUoeCkge1xuICAgIGlmICghVFJBQ0tfRElTUE9TQUJMRVMpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIHZhciBzdGFjayA9IG5ldyBFcnJvcignUG90ZW50aWFsbHkgbGVha2VkIGRpc3Bvc2FibGUnKS5zdGFjaztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF4W19faXNfZGlzcG9zYWJsZV90cmFja2VkX19dKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGFjayk7XG4gICAgICAgIH1cbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4geDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Rpc3Bvc2FibGUodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nLmRpc3Bvc2UgPT09ICdmdW5jdGlvbidcbiAgICAgICAgJiYgdGhpbmcuZGlzcG9zZS5sZW5ndGggPT09IDA7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZShkaXNwb3NhYmxlcykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRpc3Bvc2FibGVzKSkge1xuICAgICAgICBkaXNwb3NhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICAgIG1hcmtUcmFja2VkKGQpO1xuICAgICAgICAgICAgICAgIGQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXNwb3NhYmxlcykge1xuICAgICAgICBtYXJrVHJhY2tlZChkaXNwb3NhYmxlcyk7XG4gICAgICAgIGRpc3Bvc2FibGVzLmRpc3Bvc2UoKTtcbiAgICAgICAgcmV0dXJuIGRpc3Bvc2FibGVzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZWREaXNwb3NhYmxlKCkge1xuICAgIHZhciBkaXNwb3NhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGRpc3Bvc2FibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGRpc3Bvc2FibGVzLmZvckVhY2gobWFya1RyYWNrZWQpO1xuICAgIHJldHVybiB0cmFja0Rpc3Bvc2FibGUoeyBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkaXNwb3NlKGRpc3Bvc2FibGVzKTsgfSB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0Rpc3Bvc2FibGUoZm4pIHtcbiAgICB2YXIgc2VsZiA9IHRyYWNrRGlzcG9zYWJsZSh7XG4gICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1hcmtUcmFja2VkKHNlbGYpO1xuICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xufVxudmFyIERpc3Bvc2FibGVTdG9yZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXNwb3NhYmxlU3RvcmUoKSB7XG4gICAgICAgIHRoaXMuX3RvRGlzcG9zZSA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5faXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIG9mIGFsbCByZWdpc3RlcmVkIGRpc3Bvc2FibGVzIGFuZCBtYXJrIHRoaXMgb2JqZWN0IGFzIGRpc3Bvc2VkLlxuICAgICAqXG4gICAgICogQW55IGZ1dHVyZSBkaXNwb3NhYmxlcyBhZGRlZCB0byB0aGlzIG9iamVjdCB3aWxsIGJlIGRpc3Bvc2VkIG9mIG9uIGBhZGRgLlxuICAgICAqL1xuICAgIERpc3Bvc2FibGVTdG9yZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYXJrVHJhY2tlZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpc3Bvc2Ugb2YgYWxsIHJlZ2lzdGVyZWQgZGlzcG9zYWJsZXMgYnV0IGRvIG5vdCBtYXJrIHRoaXMgb2JqZWN0IGFzIGRpc3Bvc2VkLlxuICAgICAqL1xuICAgIERpc3Bvc2FibGVTdG9yZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3RvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmRpc3Bvc2UoKTsgfSk7XG4gICAgICAgIHRoaXMuX3RvRGlzcG9zZS5jbGVhcigpO1xuICAgIH07XG4gICAgRGlzcG9zYWJsZVN0b3JlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ID09PSB0aGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZWdpc3RlciBhIGRpc3Bvc2FibGUgb24gaXRzZWxmIScpO1xuICAgICAgICB9XG4gICAgICAgIG1hcmtUcmFja2VkKHQpO1xuICAgICAgICBpZiAodGhpcy5faXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcignVHJ5aW5nIHRvIGFkZCBhIGRpc3Bvc2FibGUgdG8gYSBEaXNwb3NhYmxlU3RvcmUgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGRpc3Bvc2VkIG9mLiBUaGUgYWRkZWQgb2JqZWN0IHdpbGwgYmUgbGVha2VkIScpLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RvRGlzcG9zZS5hZGQodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gRGlzcG9zYWJsZVN0b3JlO1xufSgpKTtcbmV4cG9ydCB7IERpc3Bvc2FibGVTdG9yZSB9O1xudmFyIERpc3Bvc2FibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlzcG9zYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fc3RvcmUgPSBuZXcgRGlzcG9zYWJsZVN0b3JlKCk7XG4gICAgICAgIHRyYWNrRGlzcG9zYWJsZSh0aGlzKTtcbiAgICB9XG4gICAgRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFya1RyYWNrZWQodGhpcyk7XG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3Bvc2UoKTtcbiAgICB9O1xuICAgIERpc3Bvc2FibGUucHJvdG90eXBlLl9yZWdpc3RlciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ID09PSB0aGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZWdpc3RlciBhIGRpc3Bvc2FibGUgb24gaXRzZWxmIScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5hZGQodCk7XG4gICAgfTtcbiAgICBEaXNwb3NhYmxlLk5vbmUgPSBPYmplY3QuZnJlZXplKHsgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyB9IH0pO1xuICAgIHJldHVybiBEaXNwb3NhYmxlO1xufSgpKTtcbmV4cG9ydCB7IERpc3Bvc2FibGUgfTtcbi8qKlxuICogTWFuYWdlcyB0aGUgbGlmZWN5Y2xlIG9mIGEgZGlzcG9zYWJsZSB2YWx1ZSB0aGF0IG1heSBiZSBjaGFuZ2VkLlxuICpcbiAqIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gdGhlIHRoZSBkaXNwb3NhYmxlIHZhbHVlIGlzIGNoYW5nZWQsIHRoZSBwcmV2aW91c2x5IGhlbGQgZGlzcG9zYWJsZSBpcyBkaXNwb3NlZCBvZi4gWW91IGNhblxuICogYWxzbyByZWdpc3RlciBhIGBNdXRhYmxlRGlzcG9zYWJsZWAgb24gYSBgRGlzcG9zYWJsZWAgdG8gZW5zdXJlIGl0IGlzIGF1dG9tYXRpY2FsbHkgY2xlYW5lZCB1cC5cbiAqL1xudmFyIE11dGFibGVEaXNwb3NhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11dGFibGVEaXNwb3NhYmxlKCkge1xuICAgICAgICB0aGlzLl9pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICAgIHRyYWNrRGlzcG9zYWJsZSh0aGlzKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE11dGFibGVEaXNwb3NhYmxlLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzcG9zZWQgPyB1bmRlZmluZWQgOiB0aGlzLl92YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkIHx8IHZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1hcmtUcmFja2VkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE11dGFibGVEaXNwb3NhYmxlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIE11dGFibGVEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgbWFya1RyYWNrZWQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIE11dGFibGVEaXNwb3NhYmxlO1xufSgpKTtcbmV4cG9ydCB7IE11dGFibGVEaXNwb3NhYmxlIH07XG52YXIgSW1tb3J0YWxSZWZlcmVuY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW1tb3J0YWxSZWZlcmVuY2Uob2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIH1cbiAgICBJbW1vcnRhbFJlZmVyZW5jZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICByZXR1cm4gSW1tb3J0YWxSZWZlcmVuY2U7XG59KCkpO1xuZXhwb3J0IHsgSW1tb3J0YWxSZWZlcmVuY2UgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgRklOIH0gZnJvbSAnLi9pdGVyYXRvci5qcyc7XG52YXIgTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uZXh0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHJldiA9IE5vZGUuVW5kZWZpbmVkO1xuICAgIH1cbiAgICBOb2RlLlVuZGVmaW5lZCA9IG5ldyBOb2RlKHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIE5vZGU7XG59KCkpO1xudmFyIExpbmtlZExpc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGlua2VkTGlzdCgpIHtcbiAgICAgICAgdGhpcy5fZmlyc3QgPSBOb2RlLlVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbGFzdCA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpbmtlZExpc3QucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3QgPT09IE5vZGUuVW5kZWZpbmVkO1xuICAgIH07XG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2xhc3QgPSBOb2RlLlVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgfTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc2VydChlbGVtZW50LCBmYWxzZSk7XG4gICAgfTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc2VydChlbGVtZW50LCB0cnVlKTtcbiAgICB9O1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLl9pbnNlcnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXRUaGVFbmQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5ld05vZGUgPSBuZXcgTm9kZShlbGVtZW50KTtcbiAgICAgICAgaWYgKHRoaXMuX2ZpcnN0ID09PSBOb2RlLlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3QgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXRUaGVFbmQpIHtcbiAgICAgICAgICAgIC8vIHB1c2hcbiAgICAgICAgICAgIHZhciBvbGRMYXN0ID0gdGhpcy5fbGFzdDtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbmV3Tm9kZS5wcmV2ID0gb2xkTGFzdDtcbiAgICAgICAgICAgIG9sZExhc3QubmV4dCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB1bnNoaWZ0XG4gICAgICAgICAgICB2YXIgb2xkRmlyc3QgPSB0aGlzLl9maXJzdDtcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0ID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIG5ld05vZGUubmV4dCA9IG9sZEZpcnN0O1xuICAgICAgICAgICAgb2xkRmlyc3QucHJldiA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2l6ZSArPSAxO1xuICAgICAgICB2YXIgZGlkUmVtb3ZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWRpZFJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGRpZFJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlbW92ZShuZXdOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fZmlyc3QgPT09IE5vZGUuVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMuX2ZpcnN0LmVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmUodGhpcy5fZmlyc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fbGFzdCA9PT0gTm9kZS5VbmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5fbGFzdC5lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKHRoaXMuX2xhc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuX3JlbW92ZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnByZXYgIT09IE5vZGUuVW5kZWZpbmVkICYmIG5vZGUubmV4dCAhPT0gTm9kZS5VbmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG1pZGRsZVxuICAgICAgICAgICAgdmFyIGFuY2hvciA9IG5vZGUucHJldjtcbiAgICAgICAgICAgIGFuY2hvci5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgbm9kZS5uZXh0LnByZXYgPSBhbmNob3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5wcmV2ID09PSBOb2RlLlVuZGVmaW5lZCAmJiBub2RlLm5leHQgPT09IE5vZGUuVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBvbmx5IG5vZGVcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLl9sYXN0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5uZXh0ID09PSBOb2RlLlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbGFzdFxuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IHRoaXMuX2xhc3QucHJldjtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QubmV4dCA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUucHJldiA9PT0gTm9kZS5VbmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0XG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IHRoaXMuX2ZpcnN0Lm5leHQ7XG4gICAgICAgICAgICB0aGlzLl9maXJzdC5wcmV2ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uZVxuICAgICAgICB0aGlzLl9zaXplIC09IDE7XG4gICAgfTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5pdGVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fZmlyc3Q7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IE5vZGUuVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGSU47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IG5vZGUuZWxlbWVudCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IG5vZGUuZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgbm9kZSA9IHRoaXMuX2ZpcnN0OyBub2RlICE9PSBOb2RlLlVuZGVmaW5lZDsgbm9kZSA9IG5vZGUubmV4dCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIExpbmtlZExpc3Q7XG59KCkpO1xuZXhwb3J0IHsgTGlua2VkTGlzdCB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG52YXIgTEFOR1VBR0VfREVGQVVMVCA9ICdlbic7XG52YXIgX2lzV2luZG93cyA9IGZhbHNlO1xudmFyIF9pc01hY2ludG9zaCA9IGZhbHNlO1xudmFyIF9pc0xpbnV4ID0gZmFsc2U7XG52YXIgX2lzTmF0aXZlID0gZmFsc2U7XG52YXIgX2lzV2ViID0gZmFsc2U7XG52YXIgX2xvY2FsZSA9IHVuZGVmaW5lZDtcbnZhciBfbGFuZ3VhZ2UgPSBMQU5HVUFHRV9ERUZBVUxUO1xudmFyIF90cmFuc2xhdGlvbnNDb25maWdGaWxlID0gdW5kZWZpbmVkO1xudmFyIF91c2VyQWdlbnQgPSB1bmRlZmluZWQ7XG52YXIgaXNFbGVjdHJvblJlbmRlcmVyID0gKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMuZWxlY3Ryb24gIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyk7XG4vLyBPUyBkZXRlY3Rpb25cbmlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiAhaXNFbGVjdHJvblJlbmRlcmVyKSB7XG4gICAgX3VzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgX2lzV2luZG93cyA9IF91c2VyQWdlbnQuaW5kZXhPZignV2luZG93cycpID49IDA7XG4gICAgX2lzTWFjaW50b3NoID0gX3VzZXJBZ2VudC5pbmRleE9mKCdNYWNpbnRvc2gnKSA+PSAwO1xuICAgIF9pc0xpbnV4ID0gX3VzZXJBZ2VudC5pbmRleE9mKCdMaW51eCcpID49IDA7XG4gICAgX2lzV2ViID0gdHJ1ZTtcbiAgICBfbG9jYWxlID0gbmF2aWdhdG9yLmxhbmd1YWdlO1xuICAgIF9sYW5ndWFnZSA9IF9sb2NhbGU7XG59XG5lbHNlIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpIHtcbiAgICBfaXNXaW5kb3dzID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpO1xuICAgIF9pc01hY2ludG9zaCA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJyk7XG4gICAgX2lzTGludXggPSAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2xpbnV4Jyk7XG4gICAgX2xvY2FsZSA9IExBTkdVQUdFX0RFRkFVTFQ7XG4gICAgX2xhbmd1YWdlID0gTEFOR1VBR0VfREVGQVVMVDtcbiAgICB2YXIgcmF3TmxzQ29uZmlnID0gcHJvY2Vzcy5lbnZbJ1ZTQ09ERV9OTFNfQ09ORklHJ107XG4gICAgaWYgKHJhd05sc0NvbmZpZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG5sc0NvbmZpZyA9IEpTT04ucGFyc2UocmF3TmxzQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciByZXNvbHZlZCA9IG5sc0NvbmZpZy5hdmFpbGFibGVMYW5ndWFnZXNbJyonXTtcbiAgICAgICAgICAgIF9sb2NhbGUgPSBubHNDb25maWcubG9jYWxlO1xuICAgICAgICAgICAgLy8gVlNDb2RlJ3MgZGVmYXVsdCBsYW5ndWFnZSBpcyAnZW4nXG4gICAgICAgICAgICBfbGFuZ3VhZ2UgPSByZXNvbHZlZCA/IHJlc29sdmVkIDogTEFOR1VBR0VfREVGQVVMVDtcbiAgICAgICAgICAgIF90cmFuc2xhdGlvbnNDb25maWdGaWxlID0gbmxzQ29uZmlnLl90cmFuc2xhdGlvbnNDb25maWdGaWxlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2lzTmF0aXZlID0gdHJ1ZTtcbn1cbnZhciBfcGxhdGZvcm0gPSAwIC8qIFdlYiAqLztcbmlmIChfaXNNYWNpbnRvc2gpIHtcbiAgICBfcGxhdGZvcm0gPSAxIC8qIE1hYyAqLztcbn1cbmVsc2UgaWYgKF9pc1dpbmRvd3MpIHtcbiAgICBfcGxhdGZvcm0gPSAzIC8qIFdpbmRvd3MgKi87XG59XG5lbHNlIGlmIChfaXNMaW51eCkge1xuICAgIF9wbGF0Zm9ybSA9IDIgLyogTGludXggKi87XG59XG5leHBvcnQgdmFyIGlzV2luZG93cyA9IF9pc1dpbmRvd3M7XG5leHBvcnQgdmFyIGlzTWFjaW50b3NoID0gX2lzTWFjaW50b3NoO1xuZXhwb3J0IHZhciBpc0xpbnV4ID0gX2lzTGludXg7XG5leHBvcnQgdmFyIGlzTmF0aXZlID0gX2lzTmF0aXZlO1xuZXhwb3J0IHZhciBpc1dlYiA9IF9pc1dlYjtcbnZhciBfZ2xvYmFscyA9ICh0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgPyBzZWxmIDogdHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgPyBnbG9iYWwgOiB7fSk7XG5leHBvcnQgdmFyIGdsb2JhbHMgPSBfZ2xvYmFscztcbnZhciBfc2V0SW1tZWRpYXRlID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICBpZiAoX3NldEltbWVkaWF0ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoZ2xvYmFscy5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgICAgIF9zZXRJbW1lZGlhdGUgPSBnbG9iYWxzLnNldEltbWVkaWF0ZS5iaW5kKGdsb2JhbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2Vzcy5uZXh0VGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX3NldEltbWVkaWF0ZSA9IHByb2Nlc3MubmV4dFRpY2suYmluZChwcm9jZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF9zZXRJbW1lZGlhdGUgPSBnbG9iYWxzLnNldFRpbWVvdXQuYmluZChnbG9iYWxzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX3NldEltbWVkaWF0ZShjYWxsYmFjayk7XG59XG5leHBvcnQgdmFyIE9TID0gKF9pc01hY2ludG9zaCA/IDIgLyogTWFjaW50b3NoICovIDogKF9pc1dpbmRvd3MgPyAxIC8qIFdpbmRvd3MgKi8gOiAzIC8qIExpbnV4ICovKSk7XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogVGhlIGVtcHR5IHN0cmluZy5cbiAqL1xuZXhwb3J0IHZhciBlbXB0eSA9ICcnO1xuZXhwb3J0IGZ1bmN0aW9uIGlzRmFsc3lPcldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgdHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzdHIudHJpbSgpLmxlbmd0aCA9PT0gMDtcbn1cbi8qKlxuICogQHJldHVybnMgdGhlIHByb3ZpZGVkIG51bWJlciB3aXRoIHRoZSBnaXZlbiBudW1iZXIgb2YgcHJlY2VkaW5nIHplcm9zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkKG4sIGwsIGNoYXIpIHtcbiAgICBpZiAoY2hhciA9PT0gdm9pZCAwKSB7IGNoYXIgPSAnMCc7IH1cbiAgICB2YXIgc3RyID0gJycgKyBuO1xuICAgIHZhciByID0gW3N0cl07XG4gICAgZm9yICh2YXIgaSA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgci5wdXNoKGNoYXIpO1xuICAgIH1cbiAgICByZXR1cm4gci5yZXZlcnNlKCkuam9pbignJyk7XG59XG52YXIgX2Zvcm1hdFJlZ2V4cCA9IC97KFxcZCspfS9nO1xuLyoqXG4gKiBIZWxwZXIgdG8gcHJvZHVjZSBhIHN0cmluZyB3aXRoIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cy4gSW5zZXJ0IHZhcmlhYmxlIHNlZ21lbnRzXG4gKiBpbnRvIHRoZSBzdHJpbmcgdXNpbmcgdGhlIHtufSBub3RhdGlvbiB3aGVyZSBOIGlzIHRoZSBpbmRleCBvZiB0aGUgYXJndW1lbnQgZm9sbG93aW5nIHRoZSBzdHJpbmcuXG4gKiBAcGFyYW0gdmFsdWUgc3RyaW5nIHRvIHdoaWNoIGZvcm1hdHRpbmcgaXMgYXBwbGllZFxuICogQHBhcmFtIGFyZ3MgcmVwbGFjZW1lbnRzIGZvciB7bn0tZW50cmllc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShfZm9ybWF0UmVnZXhwLCBmdW5jdGlvbiAobWF0Y2gsIGdyb3VwKSB7XG4gICAgICAgIHZhciBpZHggPSBwYXJzZUludChncm91cCwgMTApO1xuICAgICAgICByZXR1cm4gaXNOYU4oaWR4KSB8fCBpZHggPCAwIHx8IGlkeCA+PSBhcmdzLmxlbmd0aCA/XG4gICAgICAgICAgICBtYXRjaCA6XG4gICAgICAgICAgICBhcmdzW2lkeF07XG4gICAgfSk7XG59XG4vKipcbiAqIENvbnZlcnRzIEhUTUwgY2hhcmFjdGVycyBpbnNpZGUgdGhlIHN0cmluZyB0byB1c2UgZW50aXRpZXMgaW5zdGVhZC4gTWFrZXMgdGhlIHN0cmluZyBzYWZlIGZyb21cbiAqIGJlaW5nIHVzZWQgZS5nLiBpbiBIVE1MRWxlbWVudC5pbm5lckhUTUwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBodG1sLnJlcGxhY2UoL1s8PiZdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICBzd2l0Y2ggKG1hdGNoKSB7XG4gICAgICAgICAgICBjYXNlICc8JzogcmV0dXJuICcmbHQ7JztcbiAgICAgICAgICAgIGNhc2UgJz4nOiByZXR1cm4gJyZndDsnO1xuICAgICAgICAgICAgY2FzZSAnJic6IHJldHVybiAnJmFtcDsnO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIEVzY2FwZXMgcmVndWxhciBleHByZXNzaW9uIGNoYXJhY3RlcnMgaW4gYSBnaXZlbiBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cENoYXJhY3RlcnModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcXFxcXHtcXH1cXCpcXCtcXD9cXHxcXF5cXCRcXC5cXFtcXF1cXChcXClcXCNdL2csICdcXFxcJCYnKTtcbn1cbi8qKlxuICogUmVtb3ZlcyBhbGwgb2NjdXJyZW5jZXMgb2YgbmVlZGxlIGZyb20gdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGhheXN0YWNrLlxuICogQHBhcmFtIGhheXN0YWNrIHN0cmluZyB0byB0cmltXG4gKiBAcGFyYW0gbmVlZGxlIHRoZSB0aGluZyB0byB0cmltIChkZWZhdWx0IGlzIGEgYmxhbmspXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgICBpZiAobmVlZGxlID09PSB2b2lkIDApIHsgbmVlZGxlID0gJyAnOyB9XG4gICAgdmFyIHRyaW1tZWQgPSBsdHJpbShoYXlzdGFjaywgbmVlZGxlKTtcbiAgICByZXR1cm4gcnRyaW0odHJpbW1lZCwgbmVlZGxlKTtcbn1cbi8qKlxuICogUmVtb3ZlcyBhbGwgb2NjdXJyZW5jZXMgb2YgbmVlZGxlIGZyb20gdGhlIGJlZ2lubmluZyBvZiBoYXlzdGFjay5cbiAqIEBwYXJhbSBoYXlzdGFjayBzdHJpbmcgdG8gdHJpbVxuICogQHBhcmFtIG5lZWRsZSB0aGUgdGhpbmcgdG8gdHJpbVxuICovXG5leHBvcnQgZnVuY3Rpb24gbHRyaW0oaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgIGlmICghaGF5c3RhY2sgfHwgIW5lZWRsZSkge1xuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG4gICAgfVxuICAgIHZhciBuZWVkbGVMZW4gPSBuZWVkbGUubGVuZ3RoO1xuICAgIGlmIChuZWVkbGVMZW4gPT09IDAgfHwgaGF5c3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjaztcbiAgICB9XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgd2hpbGUgKGhheXN0YWNrLmluZGV4T2YobmVlZGxlLCBvZmZzZXQpID09PSBvZmZzZXQpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0ICsgbmVlZGxlTGVuO1xuICAgIH1cbiAgICByZXR1cm4gaGF5c3RhY2suc3Vic3RyaW5nKG9mZnNldCk7XG59XG4vKipcbiAqIFJlbW92ZXMgYWxsIG9jY3VycmVuY2VzIG9mIG5lZWRsZSBmcm9tIHRoZSBlbmQgb2YgaGF5c3RhY2suXG4gKiBAcGFyYW0gaGF5c3RhY2sgc3RyaW5nIHRvIHRyaW1cbiAqIEBwYXJhbSBuZWVkbGUgdGhlIHRoaW5nIHRvIHRyaW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ0cmltKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgICBpZiAoIWhheXN0YWNrIHx8ICFuZWVkbGUpIHtcbiAgICAgICAgcmV0dXJuIGhheXN0YWNrO1xuICAgIH1cbiAgICB2YXIgbmVlZGxlTGVuID0gbmVlZGxlLmxlbmd0aCwgaGF5c3RhY2tMZW4gPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgaWYgKG5lZWRsZUxlbiA9PT0gMCB8fCBoYXlzdGFja0xlbiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG4gICAgfVxuICAgIHZhciBvZmZzZXQgPSBoYXlzdGFja0xlbiwgaWR4ID0gLTE7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWR4ID0gaGF5c3RhY2subGFzdEluZGV4T2YobmVlZGxlLCBvZmZzZXQgLSAxKTtcbiAgICAgICAgaWYgKGlkeCA9PT0gLTEgfHwgaWR4ICsgbmVlZGxlTGVuICE9PSBvZmZzZXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgPSBpZHg7XG4gICAgfVxuICAgIHJldHVybiBoYXlzdGFjay5zdWJzdHJpbmcoMCwgb2Zmc2V0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0U2ltcGxlMlJlZ0V4cFBhdHRlcm4ocGF0dGVybikge1xuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UoL1tcXC1cXFxcXFx7XFx9XFwrXFw/XFx8XFxeXFwkXFwuXFwsXFxbXFxdXFwoXFwpXFwjXFxzXS9nLCAnXFxcXCQmJykucmVwbGFjZSgvW1xcKl0vZywgJy4qJyk7XG59XG4vKipcbiAqIERldGVybWluZXMgaWYgaGF5c3RhY2sgc3RhcnRzIHdpdGggbmVlZGxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRzV2l0aChoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgaWYgKGhheXN0YWNrLmxlbmd0aCA8IG5lZWRsZS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaGF5c3RhY2sgPT09IG5lZWRsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWVkbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhheXN0YWNrW2ldICE9PSBuZWVkbGVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBoYXlzdGFjayBlbmRzIHdpdGggbmVlZGxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5kc1dpdGgoaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgIHZhciBkaWZmID0gaGF5c3RhY2subGVuZ3RoIC0gbmVlZGxlLmxlbmd0aDtcbiAgICBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlLCBkaWZmKSA9PT0gZGlmZjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaGF5c3RhY2sgPT09IG5lZWRsZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVnRXhwKHNlYXJjaFN0cmluZywgaXNSZWdleCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgaWYgKCFzZWFyY2hTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIHJlZ2V4IGZyb20gZW1wdHkgc3RyaW5nJyk7XG4gICAgfVxuICAgIGlmICghaXNSZWdleCkge1xuICAgICAgICBzZWFyY2hTdHJpbmcgPSBlc2NhcGVSZWdFeHBDaGFyYWN0ZXJzKHNlYXJjaFN0cmluZyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLndob2xlV29yZCkge1xuICAgICAgICBpZiAoIS9cXEIvLnRlc3Qoc2VhcmNoU3RyaW5nLmNoYXJBdCgwKSkpIHtcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZyA9ICdcXFxcYicgKyBzZWFyY2hTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEvXFxCLy50ZXN0KHNlYXJjaFN0cmluZy5jaGFyQXQoc2VhcmNoU3RyaW5nLmxlbmd0aCAtIDEpKSkge1xuICAgICAgICAgICAgc2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nICsgJ1xcXFxiJztcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgbW9kaWZpZXJzID0gJyc7XG4gICAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgICAgIG1vZGlmaWVycyArPSAnZyc7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5tYXRjaENhc2UpIHtcbiAgICAgICAgbW9kaWZpZXJzICs9ICdpJztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubXVsdGlsaW5lKSB7XG4gICAgICAgIG1vZGlmaWVycyArPSAnbSc7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnVuaWNvZGUpIHtcbiAgICAgICAgbW9kaWZpZXJzICs9ICd1JztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoc2VhcmNoU3RyaW5nLCBtb2RpZmllcnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlZ0V4cExlYWRzVG9FbmRsZXNzTG9vcChyZWdleHApIHtcbiAgICAvLyBFeGl0IGVhcmx5IGlmIGl0J3Mgb25lIG9mIHRoZXNlIHNwZWNpYWwgY2FzZXMgd2hpY2ggYXJlIG1lYW50IHRvIG1hdGNoXG4gICAgLy8gYWdhaW5zdCBhbiBlbXB0eSBzdHJpbmdcbiAgICBpZiAocmVnZXhwLnNvdXJjZSA9PT0gJ14nIHx8IHJlZ2V4cC5zb3VyY2UgPT09ICdeJCcgfHwgcmVnZXhwLnNvdXJjZSA9PT0gJyQnIHx8IHJlZ2V4cC5zb3VyY2UgPT09ICdeXFxcXHMqJCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBXZSBjaGVjayBhZ2FpbnN0IGFuIGVtcHR5IHN0cmluZy4gSWYgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBkb2Vzbid0IGFkdmFuY2VcbiAgICAvLyAoZS5nLiBlbmRzIGluIGFuIGVuZGxlc3MgbG9vcCkgaXQgd2lsbCBtYXRjaCBhbiBlbXB0eSBzdHJpbmcuXG4gICAgdmFyIG1hdGNoID0gcmVnZXhwLmV4ZWMoJycpO1xuICAgIHJldHVybiAhIShtYXRjaCAmJiByZWdleHAubGFzdEluZGV4ID09PSAwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZWdFeHBGbGFncyhyZWdleHApIHtcbiAgICByZXR1cm4gKHJlZ2V4cC5nbG9iYWwgPyAnZycgOiAnJylcbiAgICAgICAgKyAocmVnZXhwLmlnbm9yZUNhc2UgPyAnaScgOiAnJylcbiAgICAgICAgKyAocmVnZXhwLm11bHRpbGluZSA/ICdtJyA6ICcnKVxuICAgICAgICArIChyZWdleHAudW5pY29kZSA/ICd1JyA6ICcnKTtcbn1cbi8qKlxuICogUmV0dXJucyBmaXJzdCBpbmRleCBvZiB0aGUgc3RyaW5nIHRoYXQgaXMgbm90IHdoaXRlc3BhY2UuXG4gKiBJZiBzdHJpbmcgaXMgZW1wdHkgb3IgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlcywgcmV0dXJucyAtMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlyc3ROb25XaGl0ZXNwYWNlSW5kZXgoc3RyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgY2hDb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjaENvZGUgIT09IDMyIC8qIFNwYWNlICovICYmIGNoQ29kZSAhPT0gOSAvKiBUYWIgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbGVhZGluZyB3aGl0ZXNwYWNlIG9mIHRoZSBzdHJpbmcuXG4gKiBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZXMsIHJldHVybnMgZW50aXJlIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGVhZGluZ1doaXRlc3BhY2Uoc3RyLCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHsgc3RhcnQgPSAwOyB9XG4gICAgaWYgKGVuZCA9PT0gdm9pZCAwKSB7IGVuZCA9IHN0ci5sZW5ndGg7IH1cbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICB2YXIgY2hDb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjaENvZGUgIT09IDMyIC8qIFNwYWNlICovICYmIGNoQ29kZSAhPT0gOSAvKiBUYWIgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbn1cbi8qKlxuICogUmV0dXJucyBsYXN0IGluZGV4IG9mIHRoZSBzdHJpbmcgdGhhdCBpcyBub3Qgd2hpdGVzcGFjZS5cbiAqIElmIHN0cmluZyBpcyBlbXB0eSBvciBjb250YWlucyBvbmx5IHdoaXRlc3BhY2VzLCByZXR1cm5zIC0xXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXN0Tm9uV2hpdGVzcGFjZUluZGV4KHN0ciwgc3RhcnRJbmRleCkge1xuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IHN0ci5sZW5ndGggLSAxOyB9XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBjaENvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNoQ29kZSAhPT0gMzIgLyogU3BhY2UgKi8gJiYgY2hDb2RlICE9PSA5IC8qIFRhYiAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICAgIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVJZ25vcmVDYXNlKGEsIGIpIHtcbiAgICB2YXIgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjb2RlQSA9IGEuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGNvZGVCID0gYi5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoY29kZUEgPT09IGNvZGVCKSB7XG4gICAgICAgICAgICAvLyBlcXVhbFxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVXBwZXJBc2NpaUxldHRlcihjb2RlQSkpIHtcbiAgICAgICAgICAgIGNvZGVBICs9IDMyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1VwcGVyQXNjaWlMZXR0ZXIoY29kZUIpKSB7XG4gICAgICAgICAgICBjb2RlQiArPSAzMjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGlmZiA9IGNvZGVBIC0gY29kZUI7XG4gICAgICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgICAgICAvLyBlcXVhbCAtPiBpZ25vcmVDYXNlXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0xvd2VyQXNjaWlMZXR0ZXIoY29kZUEpICYmIGlzTG93ZXJBc2NpaUxldHRlcihjb2RlQikpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByZXR1cm4gZGlmZjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoYS5sZW5ndGggPCBiLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGEubGVuZ3RoID4gYi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMb3dlckFzY2lpTGV0dGVyKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA+PSA5NyAvKiBhICovICYmIGNvZGUgPD0gMTIyIC8qIHogKi87XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVcHBlckFzY2lpTGV0dGVyKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gOTAgLyogWiAqLztcbn1cbmZ1bmN0aW9uIGlzQXNjaWlMZXR0ZXIoY29kZSkge1xuICAgIHJldHVybiBpc0xvd2VyQXNjaWlMZXR0ZXIoY29kZSkgfHwgaXNVcHBlckFzY2lpTGV0dGVyKGNvZGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsc0lnbm9yZUNhc2UoYSwgYikge1xuICAgIHZhciBsZW4xID0gYSA/IGEubGVuZ3RoIDogMDtcbiAgICB2YXIgbGVuMiA9IGIgPyBiLmxlbmd0aCA6IDA7XG4gICAgaWYgKGxlbjEgIT09IGxlbjIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZG9FcXVhbHNJZ25vcmVDYXNlKGEsIGIpO1xufVxuZnVuY3Rpb24gZG9FcXVhbHNJZ25vcmVDYXNlKGEsIGIsIHN0b3BBdCkge1xuICAgIGlmIChzdG9wQXQgPT09IHZvaWQgMCkgeyBzdG9wQXQgPSBhLmxlbmd0aDsgfVxuICAgIGlmICh0eXBlb2YgYSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdG9wQXQ7IGkrKykge1xuICAgICAgICB2YXIgY29kZUEgPSBhLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBjb2RlQiA9IGIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNvZGVBID09PSBjb2RlQikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYS16IEEtWlxuICAgICAgICBpZiAoaXNBc2NpaUxldHRlcihjb2RlQSkgJiYgaXNBc2NpaUxldHRlcihjb2RlQikpIHtcbiAgICAgICAgICAgIHZhciBkaWZmID0gTWF0aC5hYnMoY29kZUEgLSBjb2RlQik7XG4gICAgICAgICAgICBpZiAoZGlmZiAhPT0gMCAmJiBkaWZmICE9PSAzMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBbnkgb3RoZXIgY2hhcmNvZGVcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlQSkudG9Mb3dlckNhc2UoKSAhPT0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlQikudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdGFydHNXaXRoSWdub3JlQ2FzZShzdHIsIGNhbmRpZGF0ZSkge1xuICAgIHZhciBjYW5kaWRhdGVMZW5ndGggPSBjYW5kaWRhdGUubGVuZ3RoO1xuICAgIGlmIChjYW5kaWRhdGUubGVuZ3RoID4gc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBkb0VxdWFsc0lnbm9yZUNhc2Uoc3RyLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZUxlbmd0aCk7XG59XG4vKipcbiAqIEByZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGNvbW1vbiBwcmVmaXggb2YgdGhlIHR3byBzdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbW9uUHJlZml4TGVuZ3RoKGEsIGIpIHtcbiAgICB2YXIgaSwgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGEuY2hhckNvZGVBdChpKSAhPT0gYi5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuO1xufVxuLyoqXG4gKiBAcmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBjb21tb24gc3VmZml4IG9mIHRoZSB0d28gc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1vblN1ZmZpeExlbmd0aChhLCBiKSB7XG4gICAgdmFyIGksIGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG4gICAgdmFyIGFMYXN0SW5kZXggPSBhLmxlbmd0aCAtIDE7XG4gICAgdmFyIGJMYXN0SW5kZXggPSBiLmxlbmd0aCAtIDE7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChhLmNoYXJDb2RlQXQoYUxhc3RJbmRleCAtIGkpICE9PSBiLmNoYXJDb2RlQXQoYkxhc3RJbmRleCAtIGkpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuO1xufVxuLy8gLS0tIHVuaWNvZGVcbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3Vycm9nYXRlX3BhaXJcbi8vIFJldHVybnMgdGhlIGNvZGUgcG9pbnQgc3RhcnRpbmcgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzdHJpbmdcbi8vIENvZGUgcG9pbnRzIFUrMDAwMCB0byBVK0Q3RkYgYW5kIFUrRTAwMCB0byBVK0ZGRkYgYXJlIHJlcHJlc2VudGVkIG9uIGEgc2luZ2xlIGNoYXJhY3RlclxuLy8gQ29kZSBwb2ludHMgVSsxMDAwMCB0byBVKzEwRkZGRiBhcmUgcmVwcmVzZW50ZWQgb24gdHdvIGNvbnNlY3V0aXZlIGNoYXJhY3RlcnNcbi8vZXhwb3J0IGZ1bmN0aW9uIGdldFVuaWNvZGVQb2ludChzdHI6c3RyaW5nLCBpbmRleDpudW1iZXIsIGxlbjpudW1iZXIpOm51bWJlciB7XG4vL1x0Y29uc3QgY2hyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGluZGV4KTtcbi8vXHRpZiAoMHhEODAwIDw9IGNockNvZGUgJiYgY2hyQ29kZSA8PSAweERCRkYgJiYgaW5kZXggKyAxIDwgbGVuKSB7XG4vL1x0XHRjb25zdCBuZXh0Q2hyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGluZGV4ICsgMSk7XG4vL1x0XHRpZiAoMHhEQzAwIDw9IG5leHRDaHJDb2RlICYmIG5leHRDaHJDb2RlIDw9IDB4REZGRikge1xuLy9cdFx0XHRyZXR1cm4gKGNockNvZGUgLSAweEQ4MDApIDw8IDEwICsgKG5leHRDaHJDb2RlIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4vL1x0XHR9XG4vL1x0fVxuLy9cdHJldHVybiBjaHJDb2RlO1xuLy99XG5leHBvcnQgZnVuY3Rpb24gaXNIaWdoU3Vycm9nYXRlKGNoYXJDb2RlKSB7XG4gICAgcmV0dXJuICgweEQ4MDAgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gMHhEQkZGKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xvd1N1cnJvZ2F0ZShjaGFyQ29kZSkge1xuICAgIHJldHVybiAoMHhEQzAwIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IDB4REZGRik7XG59XG4vKipcbiAqIEdlbmVyYXRlZCB1c2luZyBodHRwczovL2dpdGh1Yi5jb20vYWxleGFuZHJ1ZGltYS91bmljb2RlLXV0aWxzL2Jsb2IvbWFzdGVyL2dlbmVyYXRlLXJ0bC10ZXN0LmpzXG4gKi9cbnZhciBDT05UQUlOU19SVEwgPSAvKD86W1xcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUQwLVxcdTA1RjRcXHUwNjA4XFx1MDYwQlxcdTA2MERcXHUwNjFCLVxcdTA2NEFcXHUwNjZELVxcdTA2NkZcXHUwNjcxLVxcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBLVxcdTA4MTVcXHUwODFBXFx1MDgyNFxcdTA4MjhcXHUwODMwLVxcdTA4NThcXHUwODVFLVxcdTA4QkRcXHUyMDBGXFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkQzRFxcdUZENTAtXFx1RkRGQ1xcdUZFNzAtXFx1RkVGQ118XFx1RDgwMltcXHVEQzAwLVxcdUREMUJcXHVERDIwLVxcdURFMDBcXHVERTEwLVxcdURFMzNcXHVERTQwLVxcdURFRTRcXHVERUVCLVxcdURGMzVcXHVERjQwLVxcdURGRkZdfFxcdUQ4MDNbXFx1REMwMC1cXHVEQ0ZGXXxcXHVEODNBW1xcdURDMDAtXFx1RENDRlxcdUREMDAtXFx1REQ0M1xcdURENTAtXFx1REZGRl18XFx1RDgzQltcXHVEQzAwLVxcdURFQkJdKS87XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgc3RyYCBjb250YWlucyBhbnkgVW5pY29kZSBjaGFyYWN0ZXIgdGhhdCBpcyBjbGFzc2lmaWVkIGFzIFwiUlwiIG9yIFwiQUxcIi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zUlRMKHN0cikge1xuICAgIHJldHVybiBDT05UQUlOU19SVEwudGVzdChzdHIpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgdXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhhbmRydWRpbWEvdW5pY29kZS11dGlscy9ibG9iL21hc3Rlci9nZW5lcmF0ZS1lbW9qaS10ZXN0LmpzXG4gKi9cbnZhciBDT05UQUlOU19FTU9KSSA9IC8oPzpbXFx1MjMxQVxcdTIzMUJcXHUyM0YwXFx1MjNGM1xcdTI2MDAtXFx1MjdCRlxcdTJCNTBcXHUyQjU1XXxcXHVEODNDW1xcdURERTYtXFx1RERGRlxcdURGMDAtXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURFNEZcXHVERTgwLVxcdURFRjhdfFxcdUQ4M0VbXFx1REQwMC1cXHVEREU2XSkvO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zRW1vamkoc3RyKSB7XG4gICAgcmV0dXJuIENPTlRBSU5TX0VNT0pJLnRlc3Qoc3RyKTtcbn1cbnZhciBJU19CQVNJQ19BU0NJSSA9IC9eW1xcdFxcblxcclxceDIwLVxceDdFXSokLztcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGBzdHJgIGNvbnRhaW5zIG9ubHkgYmFzaWMgQVNDSUkgY2hhcmFjdGVycyBpbiB0aGUgcmFuZ2UgMzIgLSAxMjYgKGluY2x1ZGluZyAzMiBhbmQgMTI2KSBvciBcXG4sIFxcciwgXFx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jhc2ljQVNDSUkoc3RyKSB7XG4gICAgcmV0dXJuIElTX0JBU0lDX0FTQ0lJLnRlc3Qoc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluc0Z1bGxXaWR0aENoYXJhY3RlcihzdHIpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChpc0Z1bGxXaWR0aENoYXJhY3RlcihzdHIuY2hhckNvZGVBdChpKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bGxXaWR0aENoYXJhY3RlcihjaGFyQ29kZSkge1xuICAgIC8vIERvIGEgY2hlYXAgdHJpY2sgdG8gYmV0dGVyIHN1cHBvcnQgd3JhcHBpbmcgb2Ygd2lkZSBjaGFyYWN0ZXJzLCB0cmVhdCB0aGVtIGFzIDIgY29sdW1uc1xuICAgIC8vIGh0dHA6Ly9qcmdyYXBoaXgubmV0L3Jlc2VhcmNoL3VuaWNvZGVfYmxvY2tzLnBocFxuICAgIC8vICAgICAgICAgIDJFODAg4oCUIDJFRkYgICBDSksgUmFkaWNhbHMgU3VwcGxlbWVudFxuICAgIC8vICAgICAgICAgIDJGMDAg4oCUIDJGREYgICBLYW5neGkgUmFkaWNhbHNcbiAgICAvLyAgICAgICAgICAyRkYwIOKAlCAyRkZGICAgSWRlb2dyYXBoaWMgRGVzY3JpcHRpb24gQ2hhcmFjdGVyc1xuICAgIC8vICAgICAgICAgIDMwMDAg4oCUIDMwM0YgICBDSksgU3ltYm9scyBhbmQgUHVuY3R1YXRpb25cbiAgICAvLyAgICAgICAgICAzMDQwIOKAlCAzMDlGICAgSGlyYWdhbmFcbiAgICAvLyAgICAgICAgICAzMEEwIOKAlCAzMEZGICAgS2F0YWthbmFcbiAgICAvLyAgICAgICAgICAzMTAwIOKAlCAzMTJGICAgQm9wb21vZm9cbiAgICAvLyAgICAgICAgICAzMTMwIOKAlCAzMThGICAgSGFuZ3VsIENvbXBhdGliaWxpdHkgSmFtb1xuICAgIC8vICAgICAgICAgIDMxOTAg4oCUIDMxOUYgICBLYW5idW5cbiAgICAvLyAgICAgICAgICAzMUEwIOKAlCAzMUJGICAgQm9wb21vZm8gRXh0ZW5kZWRcbiAgICAvLyAgICAgICAgICAzMUYwIOKAlCAzMUZGICAgS2F0YWthbmEgUGhvbmV0aWMgRXh0ZW5zaW9uc1xuICAgIC8vICAgICAgICAgIDMyMDAg4oCUIDMyRkYgICBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzXG4gICAgLy8gICAgICAgICAgMzMwMCDigJQgMzNGRiAgIENKSyBDb21wYXRpYmlsaXR5XG4gICAgLy8gICAgICAgICAgMzQwMCDigJQgNERCRiAgIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgRXh0ZW5zaW9uIEFcbiAgICAvLyAgICAgICAgICA0REMwIOKAlCA0REZGICAgWWlqaW5nIEhleGFncmFtIFN5bWJvbHNcbiAgICAvLyAgICAgICAgICA0RTAwIOKAlCA5RkZGICAgQ0pLIFVuaWZpZWQgSWRlb2dyYXBoc1xuICAgIC8vICAgICAgICAgIEEwMDAg4oCUIEE0OEYgICBZaSBTeWxsYWJsZXNcbiAgICAvLyAgICAgICAgICBBNDkwIOKAlCBBNENGICAgWWkgUmFkaWNhbHNcbiAgICAvLyAgICAgICAgICBBQzAwIOKAlCBEN0FGICAgSGFuZ3VsIFN5bGxhYmxlc1xuICAgIC8vIFtJR05PUkVdIEQ4MDAg4oCUIERCN0YgICBIaWdoIFN1cnJvZ2F0ZXNcbiAgICAvLyBbSUdOT1JFXSBEQjgwIOKAlCBEQkZGICAgSGlnaCBQcml2YXRlIFVzZSBTdXJyb2dhdGVzXG4gICAgLy8gW0lHTk9SRV0gREMwMCDigJQgREZGRiAgIExvdyBTdXJyb2dhdGVzXG4gICAgLy8gW0lHTk9SRV0gRTAwMCDigJQgRjhGRiAgIFByaXZhdGUgVXNlIEFyZWFcbiAgICAvLyAgICAgICAgICBGOTAwIOKAlCBGQUZGICAgQ0pLIENvbXBhdGliaWxpdHkgSWRlb2dyYXBoc1xuICAgIC8vIFtJR05PUkVdIEZCMDAg4oCUIEZCNEYgICBBbHBoYWJldGljIFByZXNlbnRhdGlvbiBGb3Jtc1xuICAgIC8vIFtJR05PUkVdIEZCNTAg4oCUIEZERkYgICBBcmFiaWMgUHJlc2VudGF0aW9uIEZvcm1zLUFcbiAgICAvLyBbSUdOT1JFXSBGRTAwIOKAlCBGRTBGICAgVmFyaWF0aW9uIFNlbGVjdG9yc1xuICAgIC8vIFtJR05PUkVdIEZFMjAg4oCUIEZFMkYgICBDb21iaW5pbmcgSGFsZiBNYXJrc1xuICAgIC8vIFtJR05PUkVdIEZFMzAg4oCUIEZFNEYgICBDSksgQ29tcGF0aWJpbGl0eSBGb3Jtc1xuICAgIC8vIFtJR05PUkVdIEZFNTAg4oCUIEZFNkYgICBTbWFsbCBGb3JtIFZhcmlhbnRzXG4gICAgLy8gW0lHTk9SRV0gRkU3MCDigJQgRkVGRiAgIEFyYWJpYyBQcmVzZW50YXRpb24gRm9ybXMtQlxuICAgIC8vICAgICAgICAgIEZGMDAg4oCUIEZGRUYgICBIYWxmd2lkdGggYW5kIEZ1bGx3aWR0aCBGb3Jtc1xuICAgIC8vICAgICAgICAgICAgICAgW2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hhbGZ3aWR0aF9hbmRfZnVsbHdpZHRoX2Zvcm1zXVxuICAgIC8vICAgICAgICAgICAgICAgb2Ygd2hpY2ggRkYwMSAtIEZGNUUgZnVsbHdpZHRoIEFTQ0lJIG9mIDIxIHRvIDdFXG4gICAgLy8gW0lHTk9SRV0gICAgYW5kIEZGNjUgLSBGRkRDIGhhbGZ3aWR0aCBvZiBLYXRha2FuYSBhbmQgSGFuZ3VsXG4gICAgLy8gW0lHTk9SRV0gRkZGMCDigJQgRkZGRiAgIFNwZWNpYWxzXG4gICAgY2hhckNvZGUgPSArY2hhckNvZGU7IC8vIEBwZXJmXG4gICAgcmV0dXJuICgoY2hhckNvZGUgPj0gMHgyRTgwICYmIGNoYXJDb2RlIDw9IDB4RDdBRilcbiAgICAgICAgfHwgKGNoYXJDb2RlID49IDB4RjkwMCAmJiBjaGFyQ29kZSA8PSAweEZBRkYpXG4gICAgICAgIHx8IChjaGFyQ29kZSA+PSAweEZGMDEgJiYgY2hhckNvZGUgPD0gMHhGRjVFKSk7XG59XG4vLyAtLSBVVEYtOCBCT01cbmV4cG9ydCB2YXIgVVRGOF9CT01fQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NTI3OSAvKiBVVEY4X0JPTSAqLyk7XG5leHBvcnQgZnVuY3Rpb24gc3RhcnRzV2l0aFVURjhCT00oc3RyKSB7XG4gICAgcmV0dXJuICEhKHN0ciAmJiBzdHIubGVuZ3RoID4gMCAmJiBzdHIuY2hhckNvZGVBdCgwKSA9PT0gNjUyNzkgLyogVVRGOF9CT00gKi8pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVCdG9hKHN0cikge1xuICAgIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gd2UgdXNlIGVuY29kZVVSSUNvbXBvbmVudCBiZWNhdXNlIGJ0b2EgZmFpbHMgZm9yIG5vbiBMYXRpbiAxIHZhbHVlc1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdChzLCBjb3VudCkge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHM7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnNVcHBlcmNhc2VDaGFyYWN0ZXIodGFyZ2V0LCBpZ25vcmVFc2NhcGVkQ2hhcnMpIHtcbiAgICBpZiAoaWdub3JlRXNjYXBlZENoYXJzID09PSB2b2lkIDApIHsgaWdub3JlRXNjYXBlZENoYXJzID0gZmFsc2U7IH1cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpZ25vcmVFc2NhcGVkQ2hhcnMpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnJlcGxhY2UoL1xcXFwuL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldC50b0xvd2VyQ2FzZSgpICE9PSB0YXJnZXQ7XG59XG4vKipcbiAqIFByb2R1Y2VzICdhJy0neicsIGZvbGxvd2VkIGJ5ICdBJy0nWicuLi4gZm9sbG93ZWQgYnkgJ2EnLSd6JywgZXRjLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlTGV0dGVySGFzaChuKSB7XG4gICAgdmFyIExFVFRFUlNfQ05UID0gKDkwIC8qIFogKi8gLSA2NSAvKiBBICovICsgMSk7XG4gICAgbiA9IG4gJSAoMiAqIExFVFRFUlNfQ05UKTtcbiAgICBpZiAobiA8IExFVFRFUlNfQ05UKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3IC8qIGEgKi8gKyBuKTtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgLyogQSAqLyArIG4gLSBMRVRURVJTX0NOVCk7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBfdHlwZW9mID0ge1xuICAgIG51bWJlcjogJ251bWJlcicsXG4gICAgc3RyaW5nOiAnc3RyaW5nJyxcbiAgICB1bmRlZmluZWQ6ICd1bmRlZmluZWQnLFxuICAgIG9iamVjdDogJ29iamVjdCcsXG4gICAgZnVuY3Rpb246ICdmdW5jdGlvbidcbn07XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgQXJyYXkgb3Igbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShhcnJheSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KTtcbiAgICB9XG4gICAgaWYgKGFycmF5ICYmIHR5cGVvZiAoYXJyYXkubGVuZ3RoKSA9PT0gX3R5cGVvZi5udW1iZXIgJiYgYXJyYXkuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgU3RyaW5nIG9yIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICAgIGlmICh0eXBlb2YgKHN0cikgPT09IF90eXBlb2Yuc3RyaW5nIHx8IHN0ciBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgcGFyYW1ldGVyIGlzIG9mIHR5cGUgYG9iamVjdGAgYnV0ICoqbm90KipcbiAqXHRgbnVsbGAsIGFuIGBhcnJheWAsIGEgYHJlZ2V4cGAsIG5vciBhIGBkYXRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIC8vIFRoZSBtZXRob2QgY2FuJ3QgZG8gYSB0eXBlIGNhc3Qgc2luY2UgdGhlcmUgYXJlIHR5cGUgKGxpa2Ugc3RyaW5ncykgd2hpY2hcbiAgICAvLyBhcmUgc3ViY2xhc3NlcyBvZiBhbnkgcHV0IG5vdCBwb3NpdHZlbHkgbWF0Y2hlZCBieSB0aGUgZnVuY3Rpb24uIEhlbmNlIHR5cGVcbiAgICAvLyBuYXJyb3dpbmcgcmVzdWx0cyBpbiB3cm9uZyByZXN1bHRzLlxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBfdHlwZW9mLm9iamVjdFxuICAgICAgICAmJiBvYmogIT09IG51bGxcbiAgICAgICAgJiYgIUFycmF5LmlzQXJyYXkob2JqKVxuICAgICAgICAmJiAhKG9iaiBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgJiYgIShvYmogaW5zdGFuY2VvZiBEYXRlKTtcbn1cbi8qKlxuICogSW4gKipjb250cmFzdCoqIHRvIGp1c3QgY2hlY2tpbmcgYHR5cGVvZmAgdGhpcyB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBgTmFOYC5cbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgTnVtYmVyIG9yIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIGlmICgodHlwZW9mIChvYmopID09PSBfdHlwZW9mLm51bWJlciB8fCBvYmogaW5zdGFuY2VvZiBOdW1iZXIpICYmICFpc05hTihvYmopKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgQm9vbGVhbiBvciBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlO1xufVxuLyoqXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiAob2JqKSA9PT0gX3R5cGVvZi51bmRlZmluZWQ7XG59XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IG9iaiA9PT0gbnVsbDtcbn1cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhbiBlbXB0eSBKYXZhU2NyaXB0IE9iamVjdCBvciBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iaikge1xuICAgIGlmICghaXNPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgRnVuY3Rpb24gb3Igbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gX3R5cGVvZi5mdW5jdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbnN0cmFpbnRzKGFyZ3MsIGNvbnN0cmFpbnRzKSB7XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKGFyZ3MubGVuZ3RoLCBjb25zdHJhaW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFsaWRhdGVDb25zdHJhaW50KGFyZ3NbaV0sIGNvbnN0cmFpbnRzW2ldKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb25zdHJhaW50KGFyZywgY29uc3RyYWludCkge1xuICAgIGlmIChpc1N0cmluZyhjb25zdHJhaW50KSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZyAhPT0gY29uc3RyYWludCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXJndW1lbnQgZG9lcyBub3QgbWF0Y2ggY29uc3RyYWludDogdHlwZW9mIFwiICsgY29uc3RyYWludCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNGdW5jdGlvbihjb25zdHJhaW50KSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGFyZyBpbnN0YW5jZW9mIGNvbnN0cmFpbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkT3JOdWxsKGFyZykgJiYgYXJnLmNvbnN0cnVjdG9yID09PSBjb25zdHJhaW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnN0cmFpbnQubGVuZ3RoID09PSAxICYmIGNvbnN0cmFpbnQuY2FsbCh1bmRlZmluZWQsIGFyZykgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcmd1bWVudCBkb2VzIG5vdCBtYXRjaCBvbmUgb2YgdGhlc2UgY29uc3RyYWludHM6IGFyZyBpbnN0YW5jZW9mIGNvbnN0cmFpbnQsIGFyZy5jb25zdHJ1Y3RvciA9PT0gY29uc3RyYWludCwgbm9yIGNvbnN0cmFpbnQoYXJnKSA9PT0gdHJ1ZVwiKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvcGVydHlOYW1lcyhvYmopIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gICAgd2hpbGUgKE9iamVjdC5wcm90b3R5cGUgIT09IHByb3RvKSB7XG4gICAgICAgIHJlcyA9IHJlcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pKTtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbE1ldGhvZE5hbWVzKG9iaikge1xuICAgIHZhciBtZXRob2RzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGdldEFsbFByb3BlcnR5TmFtZXMob2JqKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBtZXRob2RzLnB1c2gocHJvcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZHM7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHlPYmplY3QobWV0aG9kTmFtZXMsIGludm9rZSkge1xuICAgIHZhciBjcmVhdGVQcm94eU1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBpbnZva2UobWV0aG9kLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIG1ldGhvZE5hbWVzXzEgPSBtZXRob2ROYW1lczsgX2kgPCBtZXRob2ROYW1lc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgbWV0aG9kTmFtZSA9IG1ldGhvZE5hbWVzXzFbX2ldO1xuICAgICAgICByZXN1bHRbbWV0aG9kTmFtZV0gPSBjcmVhdGVQcm94eU1ldGhvZChtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ29udmVydHMgbnVsbCB0byB1bmRlZmluZWQsIHBhc3NlcyBhbGwgb3RoZXIgdmFsdWVzIHRocm91Z2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aXRoTnVsbEFzVW5kZWZpbmVkKHgpIHtcbiAgICByZXR1cm4geCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHg7XG59XG4vKipcbiAqIENvbnZlcnRzIHVuZGVmaW5lZCB0byBudWxsLCBwYXNzZXMgYWxsIG90aGVyIHZhbHVlcyB0aHJvdWdoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aFVuZGVmaW5lZEFzTnVsbCh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB4O1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfYTtcbmltcG9ydCB7IGlzV2luZG93cyB9IGZyb20gJy4vcGxhdGZvcm0uanMnO1xudmFyIF9zY2hlbWVQYXR0ZXJuID0gL15cXHdbXFx3XFxkKy4tXSokLztcbnZhciBfc2luZ2xlU2xhc2hTdGFydCA9IC9eXFwvLztcbnZhciBfZG91YmxlU2xhc2hTdGFydCA9IC9eXFwvXFwvLztcbnZhciBfdGhyb3dPbk1pc3NpbmdTY2hlbWEgPSB0cnVlO1xuZnVuY3Rpb24gX3ZhbGlkYXRlVXJpKHJldCwgX3N0cmljdCkge1xuICAgIC8vIHNjaGVtZSwgbXVzdCBiZSBzZXRcbiAgICBpZiAoIXJldC5zY2hlbWUpIHtcbiAgICAgICAgaWYgKF9zdHJpY3QgfHwgX3Rocm93T25NaXNzaW5nU2NoZW1hKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbVXJpRXJyb3JdOiBTY2hlbWUgaXMgbWlzc2luZzoge3NjaGVtZTogXFxcIlxcXCIsIGF1dGhvcml0eTogXFxcIlwiICsgcmV0LmF1dGhvcml0eSArIFwiXFxcIiwgcGF0aDogXFxcIlwiICsgcmV0LnBhdGggKyBcIlxcXCIsIHF1ZXJ5OiBcXFwiXCIgKyByZXQucXVlcnkgKyBcIlxcXCIsIGZyYWdtZW50OiBcXFwiXCIgKyByZXQuZnJhZ21lbnQgKyBcIlxcXCJ9XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW1VyaUVycm9yXTogU2NoZW1lIGlzIG1pc3Npbmc6IHtzY2hlbWU6IFxcXCJcXFwiLCBhdXRob3JpdHk6IFxcXCJcIiArIHJldC5hdXRob3JpdHkgKyBcIlxcXCIsIHBhdGg6IFxcXCJcIiArIHJldC5wYXRoICsgXCJcXFwiLCBxdWVyeTogXFxcIlwiICsgcmV0LnF1ZXJ5ICsgXCJcXFwiLCBmcmFnbWVudDogXFxcIlwiICsgcmV0LmZyYWdtZW50ICsgXCJcXFwifVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY2hlbWUsIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4xXG4gICAgLy8gQUxQSEEgKiggQUxQSEEgLyBESUdJVCAvIFwiK1wiIC8gXCItXCIgLyBcIi5cIiApXG4gICAgaWYgKHJldC5zY2hlbWUgJiYgIV9zY2hlbWVQYXR0ZXJuLnRlc3QocmV0LnNjaGVtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbVXJpRXJyb3JdOiBTY2hlbWUgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzLicpO1xuICAgIH1cbiAgICAvLyBwYXRoLCBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4zXG4gICAgLy8gSWYgYSBVUkkgY29udGFpbnMgYW4gYXV0aG9yaXR5IGNvbXBvbmVudCwgdGhlbiB0aGUgcGF0aCBjb21wb25lbnRcbiAgICAvLyBtdXN0IGVpdGhlciBiZSBlbXB0eSBvciBiZWdpbiB3aXRoIGEgc2xhc2ggKFwiL1wiKSBjaGFyYWN0ZXIuICBJZiBhIFVSSVxuICAgIC8vIGRvZXMgbm90IGNvbnRhaW4gYW4gYXV0aG9yaXR5IGNvbXBvbmVudCwgdGhlbiB0aGUgcGF0aCBjYW5ub3QgYmVnaW5cbiAgICAvLyB3aXRoIHR3byBzbGFzaCBjaGFyYWN0ZXJzIChcIi8vXCIpLlxuICAgIGlmIChyZXQucGF0aCkge1xuICAgICAgICBpZiAocmV0LmF1dGhvcml0eSkge1xuICAgICAgICAgICAgaWYgKCFfc2luZ2xlU2xhc2hTdGFydC50ZXN0KHJldC5wYXRoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1VyaUVycm9yXTogSWYgYSBVUkkgY29udGFpbnMgYW4gYXV0aG9yaXR5IGNvbXBvbmVudCwgdGhlbiB0aGUgcGF0aCBjb21wb25lbnQgbXVzdCBlaXRoZXIgYmUgZW1wdHkgb3IgYmVnaW4gd2l0aCBhIHNsYXNoIChcIi9cIikgY2hhcmFjdGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoX2RvdWJsZVNsYXNoU3RhcnQudGVzdChyZXQucGF0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tVcmlFcnJvcl06IElmIGEgVVJJIGRvZXMgbm90IGNvbnRhaW4gYW4gYXV0aG9yaXR5IGNvbXBvbmVudCwgdGhlbiB0aGUgcGF0aCBjYW5ub3QgYmVnaW4gd2l0aCB0d28gc2xhc2ggY2hhcmFjdGVycyAoXCIvL1wiKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gZm9yIGEgd2hpbGUgd2UgYWxsb3dlZCB1cmlzICp3aXRob3V0KiBzY2hlbWVzIGFuZCB0aGlzIGlzIHRoZSBtaWdyYXRpb25cbi8vIGZvciB0aGVtLCBlLmcuIGFuIHVyaSB3aXRob3V0IHNjaGVtZSBhbmQgd2l0aG91dCBzdHJpY3QtbW9kZSB3YXJucyBhbmQgZmFsbHNcbi8vIGJhY2sgdG8gdGhlIGZpbGUtc2NoZW1lLiB0aGF0IHNob3VsZCBjYXVzZSB0aGUgbGVhc3QgY2FybmFnZSBhbmQgc3RpbGwgYmUgYVxuLy8gY2xlYXIgd2FybmluZ1xuZnVuY3Rpb24gX3NjaGVtZUZpeChzY2hlbWUsIF9zdHJpY3QpIHtcbiAgICBpZiAoX3N0cmljdCB8fCBfdGhyb3dPbk1pc3NpbmdTY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtZSB8fCBfZW1wdHk7XG4gICAgfVxuICAgIGlmICghc2NoZW1lKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UoJ0JBRCB1cmkgbGFja3Mgc2NoZW1lLCBmYWxsaW5nIGJhY2sgdG8gZmlsZS1zY2hlbWUuJyk7XG4gICAgICAgIHNjaGVtZSA9ICdmaWxlJztcbiAgICB9XG4gICAgcmV0dXJuIHNjaGVtZTtcbn1cbi8vIGltcGxlbWVudHMgYSBiaXQgb2YgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi01XG5mdW5jdGlvbiBfcmVmZXJlbmNlUmVzb2x1dGlvbihzY2hlbWUsIHBhdGgpIHtcbiAgICAvLyB0aGUgc2xhc2gtY2hhcmFjdGVyIGlzIG91ciAnZGVmYXVsdCBiYXNlJyBhcyB3ZSBkb24ndFxuICAgIC8vIHN1cHBvcnQgY29uc3RydWN0aW5nIFVSSXMgcmVsYXRpdmUgdG8gb3RoZXIgVVJJcy4gVGhpc1xuICAgIC8vIGFsc28gbWVhbnMgdGhhdCB3ZSBhbHRlciBhbmQgcG90ZW50aWFsbHkgYnJlYWsgcGF0aHMuXG4gICAgLy8gc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNS4xLjRcbiAgICBzd2l0Y2ggKHNjaGVtZSkge1xuICAgICAgICBjYXNlICdodHRwcyc6XG4gICAgICAgIGNhc2UgJ2h0dHAnOlxuICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBfc2xhc2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRoWzBdICE9PSBfc2xhc2gpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gX3NsYXNoICsgcGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbnZhciBfZW1wdHkgPSAnJztcbnZhciBfc2xhc2ggPSAnLyc7XG52YXIgX3JlZ2V4cCA9IC9eKChbXjovPyNdKz8pOik/KFxcL1xcLyhbXi8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8vO1xuLyoqXG4gKiBVbmlmb3JtIFJlc291cmNlIElkZW50aWZpZXIgKFVSSSkgaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4Ni5cbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW1wbGUgcGFyc2VyIHdoaWNoIGNyZWF0ZXMgdGhlIGJhc2ljIGNvbXBvbmVudCBwYXJ0c1xuICogKGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zKSB3aXRoIG1pbmltYWwgdmFsaWRhdGlvblxuICogYW5kIGVuY29kaW5nLlxuICpcbiAqICAgICAgIGZvbzovL2V4YW1wbGUuY29tOjgwNDIvb3Zlci90aGVyZT9uYW1lPWZlcnJldCNub3NlXG4gKiAgICAgICBcXF8vICAgXFxfX19fX19fX19fX19fXy9cXF9fX19fX19fXy8gXFxfX19fX19fX18vIFxcX18vXG4gKiAgICAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgICAgICAgICB8ICAgICAgICB8XG4gKiAgICAgc2NoZW1lICAgICBhdXRob3JpdHkgICAgICAgcGF0aCAgICAgICAgcXVlcnkgICBmcmFnbWVudFxuICogICAgICAgIHwgICBfX19fX19fX19fX19fX19fX19fX198X19cbiAqICAgICAgIC8gXFwgLyAgICAgICAgICAgICAgICAgICAgICAgIFxcXG4gKiAgICAgICB1cm46ZXhhbXBsZTphbmltYWw6ZmVycmV0Om5vc2VcbiAqL1xudmFyIFVSSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBVUkkoc2NoZW1lT3JEYXRhLCBhdXRob3JpdHksIHBhdGgsIHF1ZXJ5LCBmcmFnbWVudCwgX3N0cmljdCkge1xuICAgICAgICBpZiAoX3N0cmljdCA9PT0gdm9pZCAwKSB7IF9zdHJpY3QgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodHlwZW9mIHNjaGVtZU9yRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1lID0gc2NoZW1lT3JEYXRhLnNjaGVtZSB8fCBfZW1wdHk7XG4gICAgICAgICAgICB0aGlzLmF1dGhvcml0eSA9IHNjaGVtZU9yRGF0YS5hdXRob3JpdHkgfHwgX2VtcHR5O1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gc2NoZW1lT3JEYXRhLnBhdGggfHwgX2VtcHR5O1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IHNjaGVtZU9yRGF0YS5xdWVyeSB8fCBfZW1wdHk7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gc2NoZW1lT3JEYXRhLmZyYWdtZW50IHx8IF9lbXB0eTtcbiAgICAgICAgICAgIC8vIG5vIHZhbGlkYXRpb24gYmVjYXVzZSBpdCdzIHRoaXMgVVJJXG4gICAgICAgICAgICAvLyB0aGF0IGNyZWF0ZXMgdXJpIGNvbXBvbmVudHMuXG4gICAgICAgICAgICAvLyBfdmFsaWRhdGVVcmkodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVtZSA9IF9zY2hlbWVGaXgoc2NoZW1lT3JEYXRhLCBfc3RyaWN0KTtcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXR5ID0gYXV0aG9yaXR5IHx8IF9lbXB0eTtcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IF9yZWZlcmVuY2VSZXNvbHV0aW9uKHRoaXMuc2NoZW1lLCBwYXRoIHx8IF9lbXB0eSk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkgfHwgX2VtcHR5O1xuICAgICAgICAgICAgdGhpcy5mcmFnbWVudCA9IGZyYWdtZW50IHx8IF9lbXB0eTtcbiAgICAgICAgICAgIF92YWxpZGF0ZVVyaSh0aGlzLCBfc3RyaWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBVUkkuaXNVcmkgPSBmdW5jdGlvbiAodGhpbmcpIHtcbiAgICAgICAgaWYgKHRoaW5nIGluc3RhbmNlb2YgVVJJKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGluZy5hdXRob3JpdHkgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpbmcuZnJhZ21lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpbmcucGF0aCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5xdWVyeSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5zY2hlbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpbmcuZnNQYXRoID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpbmcud2l0aCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaW5nLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFVSSS5wcm90b3R5cGUsIFwiZnNQYXRoXCIsIHtcbiAgICAgICAgLy8gLS0tLSBmaWxlc3lzdGVtIHBhdGggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjb3JyZXNwb25kaW5nIGZpbGUgc3lzdGVtIHBhdGggb2YgdGhpcyBVUkkuXG4gICAgICAgICAqIFdpbGwgaGFuZGxlIFVOQyBwYXRocywgbm9ybWFsaXplcyB3aW5kb3dzIGRyaXZlIGxldHRlcnMgdG8gbG93ZXItY2FzZSwgYW5kIHVzZXMgdGhlXG4gICAgICAgICAqIHBsYXRmb3JtIHNwZWNpZmljIHBhdGggc2VwYXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiAqIFdpbGwgKm5vdCogdmFsaWRhdGUgdGhlIHBhdGggZm9yIGludmFsaWQgY2hhcmFjdGVycyBhbmQgc2VtYW50aWNzLlxuICAgICAgICAgKiAqIFdpbGwgKm5vdCogbG9vayBhdCB0aGUgc2NoZW1lIG9mIHRoaXMgVVJJLlxuICAgICAgICAgKiAqIFRoZSByZXN1bHQgc2hhbGwgKm5vdCogYmUgdXNlZCBmb3IgZGlzcGxheSBwdXJwb3NlcyBidXQgZm9yIGFjY2Vzc2luZyBhIGZpbGUgb24gZGlzay5cbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogVGhlICpkaWZmZXJlbmNlKiB0byBgVVJJI3BhdGhgIGlzIHRoZSB1c2Ugb2YgdGhlIHBsYXRmb3JtIHNwZWNpZmljIHNlcGFyYXRvciBhbmQgdGhlIGhhbmRsaW5nXG4gICAgICAgICAqIG9mIFVOQyBwYXRocy4gU2VlIHRoZSBiZWxvdyBzYW1wbGUgb2YgYSBmaWxlLXVyaSB3aXRoIGFuIGF1dGhvcml0eSAoVU5DIHBhdGgpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGB0c1xuICAgICAgICAgICAgY29uc3QgdSA9IFVSSS5wYXJzZSgnZmlsZTovL3NlcnZlci9jJC9mb2xkZXIvZmlsZS50eHQnKVxuICAgICAgICAgICAgdS5hdXRob3JpdHkgPT09ICdzZXJ2ZXInXG4gICAgICAgICAgICB1LnBhdGggPT09ICcvc2hhcmVzL2MkL2ZpbGUudHh0J1xuICAgICAgICAgICAgdS5mc1BhdGggPT09ICdcXFxcc2VydmVyXFxjJFxcZm9sZGVyXFxmaWxlLnR4dCdcbiAgICAgICAgYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIFVzaW5nIGBVUkkjcGF0aGAgdG8gcmVhZCBhIGZpbGUgKHVzaW5nIGZzLWFwaXMpIHdvdWxkIG5vdCBiZSBlbm91Z2ggYmVjYXVzZSBwYXJ0cyBvZiB0aGUgcGF0aCxcbiAgICAgICAgICogbmFtZWx5IHRoZSBzZXJ2ZXIgbmFtZSwgd291bGQgYmUgbWlzc2luZy4gVGhlcmVmb3JlIGBVUkkjZnNQYXRoYCBleGlzdHMgLSBpdCdzIHN1Z2FyIHRvIGVhc2Ugd29ya2luZ1xuICAgICAgICAgKiB3aXRoIFVSSXMgdGhhdCByZXByZXNlbnQgZmlsZXMgb24gZGlzayAoYGZpbGVgIHNjaGVtZSkuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnNjaGVtZSAhPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICAvLyBcdGNvbnNvbGUud2FybihgW1VyaUVycm9yXSBjYWxsaW5nIGZzUGF0aCB3aXRoIHNjaGVtZSAke3RoaXMuc2NoZW1lfWApO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcmV0dXJuIF9tYWtlRnNQYXRoKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyAtLS0tIG1vZGlmeSB0byBuZXcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFVSSS5wcm90b3R5cGUud2l0aCA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY2hlbWUgPSBjaGFuZ2Uuc2NoZW1lLCBhdXRob3JpdHkgPSBjaGFuZ2UuYXV0aG9yaXR5LCBwYXRoID0gY2hhbmdlLnBhdGgsIHF1ZXJ5ID0gY2hhbmdlLnF1ZXJ5LCBmcmFnbWVudCA9IGNoYW5nZS5mcmFnbWVudDtcbiAgICAgICAgaWYgKHNjaGVtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzY2hlbWUgPSB0aGlzLnNjaGVtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzY2hlbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNjaGVtZSA9IF9lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXV0aG9yaXR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF1dGhvcml0eSA9IHRoaXMuYXV0aG9yaXR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF1dGhvcml0eSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgYXV0aG9yaXR5ID0gX2VtcHR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcGF0aCA9IF9lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBxdWVyeSA9IF9lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJhZ21lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSB0aGlzLmZyYWdtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZyYWdtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IF9lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZW1lID09PSB0aGlzLnNjaGVtZVxuICAgICAgICAgICAgJiYgYXV0aG9yaXR5ID09PSB0aGlzLmF1dGhvcml0eVxuICAgICAgICAgICAgJiYgcGF0aCA9PT0gdGhpcy5wYXRoXG4gICAgICAgICAgICAmJiBxdWVyeSA9PT0gdGhpcy5xdWVyeVxuICAgICAgICAgICAgJiYgZnJhZ21lbnQgPT09IHRoaXMuZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgX1VSSShzY2hlbWUsIGF1dGhvcml0eSwgcGF0aCwgcXVlcnksIGZyYWdtZW50KTtcbiAgICB9O1xuICAgIC8vIC0tLS0gcGFyc2UgJiB2YWxpZGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFVSSSBmcm9tIGEgc3RyaW5nLCBlLmcuIGBodHRwOi8vd3d3Lm1zZnQuY29tL3NvbWUvcGF0aGAsXG4gICAgICogYGZpbGU6Ly8vdXNyL2hvbWVgLCBvciBgc2NoZW1lOndpdGgvcGF0aGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgd2hpY2ggcmVwcmVzZW50cyBhbiBVUkkgKHNlZSBgVVJJI3RvU3RyaW5nYCkuXG4gICAgICovXG4gICAgVVJJLnBhcnNlID0gZnVuY3Rpb24gKHZhbHVlLCBfc3RyaWN0KSB7XG4gICAgICAgIGlmIChfc3RyaWN0ID09PSB2b2lkIDApIHsgX3N0cmljdCA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBtYXRjaCA9IF9yZWdleHAuZXhlYyh2YWx1ZSk7XG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgX1VSSShfZW1wdHksIF9lbXB0eSwgX2VtcHR5LCBfZW1wdHksIF9lbXB0eSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBfVVJJKG1hdGNoWzJdIHx8IF9lbXB0eSwgZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzRdIHx8IF9lbXB0eSksIGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFs1XSB8fCBfZW1wdHkpLCBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbN10gfHwgX2VtcHR5KSwgZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzldIHx8IF9lbXB0eSksIF9zdHJpY3QpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBVUkkgZnJvbSBhIGZpbGUgc3lzdGVtIHBhdGgsIGUuZy4gYGM6XFxteVxcZmlsZXNgLFxuICAgICAqIGAvdXNyL2hvbWVgLCBvciBgXFxcXHNlcnZlclxcc2hhcmVcXHNvbWVcXHBhdGhgLlxuICAgICAqXG4gICAgICogVGhlICpkaWZmZXJlbmNlKiBiZXR3ZWVuIGBVUkkjcGFyc2VgIGFuZCBgVVJJI2ZpbGVgIGlzIHRoYXQgdGhlIGxhdHRlciB0cmVhdHMgdGhlIGFyZ3VtZW50XG4gICAgICogYXMgcGF0aCwgbm90IGFzIHN0cmluZ2lmaWVkLXVyaS4gRS5nLiBgVVJJLmZpbGUocGF0aClgIGlzICoqbm90IHRoZSBzYW1lIGFzKipcbiAgICAgKiBgVVJJLnBhcnNlKCdmaWxlOi8vJyArIHBhdGgpYCBiZWNhdXNlIHRoZSBwYXRoIG1pZ2h0IGNvbnRhaW4gY2hhcmFjdGVycyB0aGF0IGFyZVxuICAgICAqIGludGVycHJldGVkICgjIGFuZCA/KS4gU2VlIHRoZSBmb2xsb3dpbmcgc2FtcGxlOlxuICAgICAqIGBgYHRzXG4gICAgY29uc3QgZ29vZCA9IFVSSS5maWxlKCcvY29kaW5nL2MjL3Byb2plY3QxJyk7XG4gICAgZ29vZC5zY2hlbWUgPT09ICdmaWxlJztcbiAgICBnb29kLnBhdGggPT09ICcvY29kaW5nL2MjL3Byb2plY3QxJztcbiAgICBnb29kLmZyYWdtZW50ID09PSAnJztcbiAgICBjb25zdCBiYWQgPSBVUkkucGFyc2UoJ2ZpbGU6Ly8nICsgJy9jb2RpbmcvYyMvcHJvamVjdDEnKTtcbiAgICBiYWQuc2NoZW1lID09PSAnZmlsZSc7XG4gICAgYmFkLnBhdGggPT09ICcvY29kaW5nL2MnOyAvLyBwYXRoIGlzIG5vdyBicm9rZW5cbiAgICBiYWQuZnJhZ21lbnQgPT09ICcvcHJvamVjdDEnO1xuICAgIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIHBhdGggQSBmaWxlIHN5c3RlbSBwYXRoIChzZWUgYFVSSSNmc1BhdGhgKVxuICAgICAqL1xuICAgIFVSSS5maWxlID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgdmFyIGF1dGhvcml0eSA9IF9lbXB0eTtcbiAgICAgICAgLy8gbm9ybWFsaXplIHRvIGZ3ZC1zbGFzaGVzIG9uIHdpbmRvd3MsXG4gICAgICAgIC8vIG9uIG90aGVyIHN5c3RlbXMgYndkLXNsYXNoZXMgYXJlIHZhbGlkXG4gICAgICAgIC8vIGZpbGVuYW1lIGNoYXJhY3RlciwgZWcgL2ZcXG9vL2JhXFxyLnR4dFxuICAgICAgICBpZiAoaXNXaW5kb3dzKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csIF9zbGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZm9yIGF1dGhvcml0eSBhcyB1c2VkIGluIFVOQyBzaGFyZXNcbiAgICAgICAgLy8gb3IgdXNlIHRoZSBwYXRoIGFzIGdpdmVuXG4gICAgICAgIGlmIChwYXRoWzBdID09PSBfc2xhc2ggJiYgcGF0aFsxXSA9PT0gX3NsYXNoKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gcGF0aC5pbmRleE9mKF9zbGFzaCwgMik7XG4gICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGF1dGhvcml0eSA9IHBhdGguc3Vic3RyaW5nKDIpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBfc2xhc2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdXRob3JpdHkgPSBwYXRoLnN1YnN0cmluZygyLCBpZHgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZyhpZHgpIHx8IF9zbGFzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IF9VUkkoJ2ZpbGUnLCBhdXRob3JpdHksIHBhdGgsIF9lbXB0eSwgX2VtcHR5KTtcbiAgICB9O1xuICAgIFVSSS5mcm9tID0gZnVuY3Rpb24gKGNvbXBvbmVudHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfVVJJKGNvbXBvbmVudHMuc2NoZW1lLCBjb21wb25lbnRzLmF1dGhvcml0eSwgY29tcG9uZW50cy5wYXRoLCBjb21wb25lbnRzLnF1ZXJ5LCBjb21wb25lbnRzLmZyYWdtZW50KTtcbiAgICB9O1xuICAgIC8vIC0tLS0gcHJpbnRpbmcvZXh0ZXJuYWxpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBmb3IgdGhpcyBVUkkuIEl0J3MgZ3VhcmFudGVlZCB0aGF0IGNhbGxpbmdcbiAgICAgKiBgVVJJLnBhcnNlYCB3aXRoIHRoZSByZXN1bHQgb2YgdGhpcyBmdW5jdGlvbiBjcmVhdGVzIGFuIFVSSSB3aGljaCBpcyBlcXVhbFxuICAgICAqIHRvIHRoaXMgVVJJLlxuICAgICAqXG4gICAgICogKiBUaGUgcmVzdWx0IHNoYWxsICpub3QqIGJlIHVzZWQgZm9yIGRpc3BsYXkgcHVycG9zZXMgYnV0IGZvciBleHRlcm5hbGl6YXRpb24gb3IgdHJhbnNwb3J0LlxuICAgICAqICogVGhlIHJlc3VsdCB3aWxsIGJlIGVuY29kZWQgdXNpbmcgdGhlIHBlcmNlbnRhZ2UgZW5jb2RpbmcgYW5kIGVuY29kaW5nIGhhcHBlbnMgbW9zdGx5XG4gICAgICogaWdub3JlIHRoZSBzY2hlbWUtc3BlY2lmaWMgZW5jb2RpbmcgcnVsZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2tpcEVuY29kaW5nIERvIG5vdCBlbmNvZGUgdGhlIHJlc3VsdCwgZGVmYXVsdCBpcyBgZmFsc2VgXG4gICAgICovXG4gICAgVVJJLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChza2lwRW5jb2RpbmcpIHtcbiAgICAgICAgaWYgKHNraXBFbmNvZGluZyA9PT0gdm9pZCAwKSB7IHNraXBFbmNvZGluZyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiBfYXNGb3JtYXR0ZWQodGhpcywgc2tpcEVuY29kaW5nKTtcbiAgICB9O1xuICAgIFVSSS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFVSSS5yZXZpdmUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBVUkkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBfVVJJKGRhdGEpO1xuICAgICAgICAgICAgcmVzdWx0Ll9mb3JtYXR0ZWQgPSBkYXRhLmV4dGVybmFsO1xuICAgICAgICAgICAgcmVzdWx0Ll9mc1BhdGggPSBkYXRhLl9zZXAgPT09IF9wYXRoU2VwTWFya2VyID8gZGF0YS5mc1BhdGggOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFVSSTtcbn0oKSk7XG5leHBvcnQgeyBVUkkgfTtcbnZhciBfcGF0aFNlcE1hcmtlciA9IGlzV2luZG93cyA/IDEgOiB1bmRlZmluZWQ7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxudmFyIF9VUkkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKF9VUkksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gX1VSSSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9mb3JtYXR0ZWQgPSBudWxsO1xuICAgICAgICBfdGhpcy5fZnNQYXRoID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX1VSSS5wcm90b3R5cGUsIFwiZnNQYXRoXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2ZzUGF0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZzUGF0aCA9IF9tYWtlRnNQYXRoKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZzUGF0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgX1VSSS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoc2tpcEVuY29kaW5nKSB7XG4gICAgICAgIGlmIChza2lwRW5jb2RpbmcgPT09IHZvaWQgMCkgeyBza2lwRW5jb2RpbmcgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoIXNraXBFbmNvZGluZykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9mb3JtYXR0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JtYXR0ZWQgPSBfYXNGb3JtYXR0ZWQodGhpcywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdHRlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHdlIGRvbid0IGNhY2hlIHRoYXRcbiAgICAgICAgICAgIHJldHVybiBfYXNGb3JtYXR0ZWQodGhpcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIF9VUkkucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcyA9IHtcbiAgICAgICAgICAgICRtaWQ6IDFcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY2FjaGVkIHN0YXRlXG4gICAgICAgIGlmICh0aGlzLl9mc1BhdGgpIHtcbiAgICAgICAgICAgIHJlcy5mc1BhdGggPSB0aGlzLl9mc1BhdGg7XG4gICAgICAgICAgICByZXMuX3NlcCA9IF9wYXRoU2VwTWFya2VyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9mb3JtYXR0ZWQpIHtcbiAgICAgICAgICAgIHJlcy5leHRlcm5hbCA9IHRoaXMuX2Zvcm1hdHRlZDtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cmkgY29tcG9uZW50c1xuICAgICAgICBpZiAodGhpcy5wYXRoKSB7XG4gICAgICAgICAgICByZXMucGF0aCA9IHRoaXMucGF0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY2hlbWUpIHtcbiAgICAgICAgICAgIHJlcy5zY2hlbWUgPSB0aGlzLnNjaGVtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRob3JpdHkpIHtcbiAgICAgICAgICAgIHJlcy5hdXRob3JpdHkgPSB0aGlzLmF1dGhvcml0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgICAgICAgcmVzLnF1ZXJ5ID0gdGhpcy5xdWVyeTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mcmFnbWVudCkge1xuICAgICAgICAgICAgcmVzLmZyYWdtZW50ID0gdGhpcy5mcmFnbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgcmV0dXJuIF9VUkk7XG59KFVSSSkpO1xuLy8gcmVzZXJ2ZWQgY2hhcmFjdGVyczogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0yLjJcbnZhciBlbmNvZGVUYWJsZSA9IChfYSA9IHt9LFxuICAgIF9hWzU4IC8qIENvbG9uICovXSA9ICclM0EnLFxuICAgIF9hWzQ3IC8qIFNsYXNoICovXSA9ICclMkYnLFxuICAgIF9hWzYzIC8qIFF1ZXN0aW9uTWFyayAqL10gPSAnJTNGJyxcbiAgICBfYVszNSAvKiBIYXNoICovXSA9ICclMjMnLFxuICAgIF9hWzkxIC8qIE9wZW5TcXVhcmVCcmFja2V0ICovXSA9ICclNUInLFxuICAgIF9hWzkzIC8qIENsb3NlU3F1YXJlQnJhY2tldCAqL10gPSAnJTVEJyxcbiAgICBfYVs2NCAvKiBBdFNpZ24gKi9dID0gJyU0MCcsXG4gICAgX2FbMzMgLyogRXhjbGFtYXRpb25NYXJrICovXSA9ICclMjEnLFxuICAgIF9hWzM2IC8qIERvbGxhclNpZ24gKi9dID0gJyUyNCcsXG4gICAgX2FbMzggLyogQW1wZXJzYW5kICovXSA9ICclMjYnLFxuICAgIF9hWzM5IC8qIFNpbmdsZVF1b3RlICovXSA9ICclMjcnLFxuICAgIF9hWzQwIC8qIE9wZW5QYXJlbiAqL10gPSAnJTI4JyxcbiAgICBfYVs0MSAvKiBDbG9zZVBhcmVuICovXSA9ICclMjknLFxuICAgIF9hWzQyIC8qIEFzdGVyaXNrICovXSA9ICclMkEnLFxuICAgIF9hWzQzIC8qIFBsdXMgKi9dID0gJyUyQicsXG4gICAgX2FbNDQgLyogQ29tbWEgKi9dID0gJyUyQycsXG4gICAgX2FbNTkgLyogU2VtaWNvbG9uICovXSA9ICclM0InLFxuICAgIF9hWzYxIC8qIEVxdWFscyAqL10gPSAnJTNEJyxcbiAgICBfYVszMiAvKiBTcGFjZSAqL10gPSAnJTIwJyxcbiAgICBfYSk7XG5mdW5jdGlvbiBlbmNvZGVVUklDb21wb25lbnRGYXN0KHVyaUNvbXBvbmVudCwgYWxsb3dTbGFzaCkge1xuICAgIHZhciByZXMgPSB1bmRlZmluZWQ7XG4gICAgdmFyIG5hdGl2ZUVuY29kZVBvcyA9IC0xO1xuICAgIGZvciAodmFyIHBvcyA9IDA7IHBvcyA8IHVyaUNvbXBvbmVudC5sZW5ndGg7IHBvcysrKSB7XG4gICAgICAgIHZhciBjb2RlID0gdXJpQ29tcG9uZW50LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgLy8gdW5yZXNlcnZlZCBjaGFyYWN0ZXJzOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTIuM1xuICAgICAgICBpZiAoKGNvZGUgPj0gOTcgLyogYSAqLyAmJiBjb2RlIDw9IDEyMiAvKiB6ICovKVxuICAgICAgICAgICAgfHwgKGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDkwIC8qIFogKi8pXG4gICAgICAgICAgICB8fCAoY29kZSA+PSA0OCAvKiBEaWdpdDAgKi8gJiYgY29kZSA8PSA1NyAvKiBEaWdpdDkgKi8pXG4gICAgICAgICAgICB8fCBjb2RlID09PSA0NSAvKiBEYXNoICovXG4gICAgICAgICAgICB8fCBjb2RlID09PSA0NiAvKiBQZXJpb2QgKi9cbiAgICAgICAgICAgIHx8IGNvZGUgPT09IDk1IC8qIFVuZGVybGluZSAqL1xuICAgICAgICAgICAgfHwgY29kZSA9PT0gMTI2IC8qIFRpbGRlICovXG4gICAgICAgICAgICB8fCAoYWxsb3dTbGFzaCAmJiBjb2RlID09PSA0NyAvKiBTbGFzaCAqLykpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIGFyZSBkZWxheWluZyBuYXRpdmUgZW5jb2RlXG4gICAgICAgICAgICBpZiAobmF0aXZlRW5jb2RlUG9zICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVVUklDb21wb25lbnQodXJpQ29tcG9uZW50LnN1YnN0cmluZyhuYXRpdmVFbmNvZGVQb3MsIHBvcykpO1xuICAgICAgICAgICAgICAgIG5hdGl2ZUVuY29kZVBvcyA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugd3JpdGUgaW50byBhIG5ldyBzdHJpbmcgKGJ5IGRlZmF1bHQgd2UgdHJ5IHRvIHJldHVybiB0aGUgcGFyYW0pXG4gICAgICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXMgKz0gdXJpQ29tcG9uZW50LmNoYXJBdChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RpbmcgbmVlZGVkLCB3ZSBuZWVkIHRvIGFsbG9jYXRlIGEgbmV3IHN0cmluZ1xuICAgICAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gdXJpQ29tcG9uZW50LnN1YnN0cigwLCBwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hlY2sgd2l0aCBkZWZhdWx0IHRhYmxlIGZpcnN0XG4gICAgICAgICAgICB2YXIgZXNjYXBlZCA9IGVuY29kZVRhYmxlW2NvZGVdO1xuICAgICAgICAgICAgaWYgKGVzY2FwZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIGFyZSBkZWxheWluZyBuYXRpdmUgZW5jb2RlXG4gICAgICAgICAgICAgICAgaWYgKG5hdGl2ZUVuY29kZVBvcyAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzICs9IGVuY29kZVVSSUNvbXBvbmVudCh1cmlDb21wb25lbnQuc3Vic3RyaW5nKG5hdGl2ZUVuY29kZVBvcywgcG9zKSk7XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZUVuY29kZVBvcyA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgZXNjYXBlZCB2YXJpYW50IHRvIHJlc3VsdFxuICAgICAgICAgICAgICAgIHJlcyArPSBlc2NhcGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmF0aXZlRW5jb2RlUG9zID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSBuYXRpdmUgZW5jb2RlIG9ubHkgd2hlbiBuZWVkZWRcbiAgICAgICAgICAgICAgICBuYXRpdmVFbmNvZGVQb3MgPSBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hdGl2ZUVuY29kZVBvcyAhPT0gLTEpIHtcbiAgICAgICAgcmVzICs9IGVuY29kZVVSSUNvbXBvbmVudCh1cmlDb21wb25lbnQuc3Vic3RyaW5nKG5hdGl2ZUVuY29kZVBvcykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzICE9PSB1bmRlZmluZWQgPyByZXMgOiB1cmlDb21wb25lbnQ7XG59XG5mdW5jdGlvbiBlbmNvZGVVUklDb21wb25lbnRNaW5pbWFsKHBhdGgpIHtcbiAgICB2YXIgcmVzID0gdW5kZWZpbmVkO1xuICAgIGZvciAodmFyIHBvcyA9IDA7IHBvcyA8IHBhdGgubGVuZ3RoOyBwb3MrKykge1xuICAgICAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChwb3MpO1xuICAgICAgICBpZiAoY29kZSA9PT0gMzUgLyogSGFzaCAqLyB8fCBjb2RlID09PSA2MyAvKiBRdWVzdGlvbk1hcmsgKi8pIHtcbiAgICAgICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IHBhdGguc3Vic3RyKDAsIHBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXMgKz0gZW5jb2RlVGFibGVbY29kZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXMgKz0gcGF0aFtwb3NdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXMgIT09IHVuZGVmaW5lZCA/IHJlcyA6IHBhdGg7XG59XG4vKipcbiAqIENvbXB1dGUgYGZzUGF0aGAgZm9yIHRoZSBnaXZlbiB1cmlcbiAqL1xuZnVuY3Rpb24gX21ha2VGc1BhdGgodXJpKSB7XG4gICAgdmFyIHZhbHVlO1xuICAgIGlmICh1cmkuYXV0aG9yaXR5ICYmIHVyaS5wYXRoLmxlbmd0aCA+IDEgJiYgdXJpLnNjaGVtZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIC8vIHVuYyBwYXRoOiBmaWxlOi8vc2hhcmVzL2MkL2Zhci9ib29cbiAgICAgICAgdmFsdWUgPSBcIi8vXCIgKyB1cmkuYXV0aG9yaXR5ICsgdXJpLnBhdGg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVyaS5wYXRoLmNoYXJDb2RlQXQoMCkgPT09IDQ3IC8qIFNsYXNoICovXG4gICAgICAgICYmICh1cmkucGF0aC5jaGFyQ29kZUF0KDEpID49IDY1IC8qIEEgKi8gJiYgdXJpLnBhdGguY2hhckNvZGVBdCgxKSA8PSA5MCAvKiBaICovIHx8IHVyaS5wYXRoLmNoYXJDb2RlQXQoMSkgPj0gOTcgLyogYSAqLyAmJiB1cmkucGF0aC5jaGFyQ29kZUF0KDEpIDw9IDEyMiAvKiB6ICovKVxuICAgICAgICAmJiB1cmkucGF0aC5jaGFyQ29kZUF0KDIpID09PSA1OCAvKiBDb2xvbiAqLykge1xuICAgICAgICAvLyB3aW5kb3dzIGRyaXZlIGxldHRlcjogZmlsZTovLy9jOi9mYXIvYm9vXG4gICAgICAgIHZhbHVlID0gdXJpLnBhdGhbMV0udG9Mb3dlckNhc2UoKSArIHVyaS5wYXRoLnN1YnN0cigyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIG90aGVyIHBhdGhcbiAgICAgICAgdmFsdWUgPSB1cmkucGF0aDtcbiAgICB9XG4gICAgaWYgKGlzV2luZG93cykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIENyZWF0ZSB0aGUgZXh0ZXJuYWwgdmVyc2lvbiBvZiBhIHVyaVxuICovXG5mdW5jdGlvbiBfYXNGb3JtYXR0ZWQodXJpLCBza2lwRW5jb2RpbmcpIHtcbiAgICB2YXIgZW5jb2RlciA9ICFza2lwRW5jb2RpbmdcbiAgICAgICAgPyBlbmNvZGVVUklDb21wb25lbnRGYXN0XG4gICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50TWluaW1hbDtcbiAgICB2YXIgcmVzID0gJyc7XG4gICAgdmFyIHNjaGVtZSA9IHVyaS5zY2hlbWUsIGF1dGhvcml0eSA9IHVyaS5hdXRob3JpdHksIHBhdGggPSB1cmkucGF0aCwgcXVlcnkgPSB1cmkucXVlcnksIGZyYWdtZW50ID0gdXJpLmZyYWdtZW50O1xuICAgIGlmIChzY2hlbWUpIHtcbiAgICAgICAgcmVzICs9IHNjaGVtZTtcbiAgICAgICAgcmVzICs9ICc6JztcbiAgICB9XG4gICAgaWYgKGF1dGhvcml0eSB8fCBzY2hlbWUgPT09ICdmaWxlJykge1xuICAgICAgICByZXMgKz0gX3NsYXNoO1xuICAgICAgICByZXMgKz0gX3NsYXNoO1xuICAgIH1cbiAgICBpZiAoYXV0aG9yaXR5KSB7XG4gICAgICAgIHZhciBpZHggPSBhdXRob3JpdHkuaW5kZXhPZignQCcpO1xuICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gPHVzZXI+QDxhdXRoPlxuICAgICAgICAgICAgdmFyIHVzZXJpbmZvID0gYXV0aG9yaXR5LnN1YnN0cigwLCBpZHgpO1xuICAgICAgICAgICAgYXV0aG9yaXR5ID0gYXV0aG9yaXR5LnN1YnN0cihpZHggKyAxKTtcbiAgICAgICAgICAgIGlkeCA9IHVzZXJpbmZvLmluZGV4T2YoJzonKTtcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9IGVuY29kZXIodXNlcmluZm8sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIDx1c2VyPjo8cGFzcz5APGF1dGg+XG4gICAgICAgICAgICAgICAgcmVzICs9IGVuY29kZXIodXNlcmluZm8uc3Vic3RyKDAsIGlkeCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXMgKz0gJzonO1xuICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKHVzZXJpbmZvLnN1YnN0cihpZHggKyAxKSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzICs9ICdAJztcbiAgICAgICAgfVxuICAgICAgICBhdXRob3JpdHkgPSBhdXRob3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWR4ID0gYXV0aG9yaXR5LmluZGV4T2YoJzonKTtcbiAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKGF1dGhvcml0eSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gPGF1dGg+Ojxwb3J0PlxuICAgICAgICAgICAgcmVzICs9IGVuY29kZXIoYXV0aG9yaXR5LnN1YnN0cigwLCBpZHgpLCBmYWxzZSk7XG4gICAgICAgICAgICByZXMgKz0gYXV0aG9yaXR5LnN1YnN0cihpZHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXRoKSB7XG4gICAgICAgIC8vIGxvd2VyLWNhc2Ugd2luZG93cyBkcml2ZSBsZXR0ZXJzIGluIC9DOi9mZmYgb3IgQzovZmZmXG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA+PSAzICYmIHBhdGguY2hhckNvZGVBdCgwKSA9PT0gNDcgLyogU2xhc2ggKi8gJiYgcGF0aC5jaGFyQ29kZUF0KDIpID09PSA1OCAvKiBDb2xvbiAqLykge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMSk7XG4gICAgICAgICAgICBpZiAoY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gOTAgLyogWiAqLykge1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIi9cIiArIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSArIDMyKSArIFwiOlwiICsgcGF0aC5zdWJzdHIoMyk7IC8vIFwiL2M6XCIubGVuZ3RoID09PSAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aC5sZW5ndGggPj0gMiAmJiBwYXRoLmNoYXJDb2RlQXQoMSkgPT09IDU4IC8qIENvbG9uICovKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGlmIChjb2RlID49IDY1IC8qIEEgKi8gJiYgY29kZSA8PSA5MCAvKiBaICovKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSArIDMyKSArIFwiOlwiICsgcGF0aC5zdWJzdHIoMik7IC8vIFwiL2M6XCIubGVuZ3RoID09PSAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5jb2RlIHRoZSByZXN0IG9mIHRoZSBwYXRoXG4gICAgICAgIHJlcyArPSBlbmNvZGVyKHBhdGgsIHRydWUpO1xuICAgIH1cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgcmVzICs9ICc/JztcbiAgICAgICAgcmVzICs9IGVuY29kZXIocXVlcnksIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGZyYWdtZW50KSB7XG4gICAgICAgIHJlcyArPSAnIyc7XG4gICAgICAgIHJlcyArPSAhc2tpcEVuY29kaW5nID8gZW5jb2RlVVJJQ29tcG9uZW50RmFzdChmcmFnbWVudCwgZmFsc2UpIDogZnJhZ21lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgdHJhbnNmb3JtRXJyb3JGb3JTZXJpYWxpemF0aW9uIH0gZnJvbSAnLi4vZXJyb3JzLmpzJztcbmltcG9ydCB7IERpc3Bvc2FibGUgfSBmcm9tICcuLi9saWZlY3ljbGUuanMnO1xuaW1wb3J0IHsgaXNXZWIgfSBmcm9tICcuLi9wbGF0Zm9ybS5qcyc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcy5qcyc7XG52YXIgSU5JVElBTElaRSA9ICckaW5pdGlhbGl6ZSc7XG52YXIgd2ViV29ya2VyV2FybmluZ0xvZ2dlZCA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIGxvZ09uY2VXZWJXb3JrZXJXYXJuaW5nKGVycikge1xuICAgIGlmICghaXNXZWIpIHtcbiAgICAgICAgLy8gcnVubmluZyB0ZXN0c1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghd2ViV29ya2VyV2FybmluZ0xvZ2dlZCkge1xuICAgICAgICB3ZWJXb3JrZXJXYXJuaW5nTG9nZ2VkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgY3JlYXRlIHdlYiB3b3JrZXIocykuIEZhbGxpbmcgYmFjayB0byBsb2FkaW5nIHdlYiB3b3JrZXIgY29kZSBpbiBtYWluIHRocmVhZCwgd2hpY2ggbWlnaHQgY2F1c2UgVUkgZnJlZXplcy4gUGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L21vbmFjby1lZGl0b3IjZmFxJyk7XG4gICAgfVxuICAgIGNvbnNvbGUud2FybihlcnIubWVzc2FnZSk7XG59XG52YXIgU2ltcGxlV29ya2VyUHJvdG9jb2wgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2ltcGxlV29ya2VyUHJvdG9jb2woaGFuZGxlcikge1xuICAgICAgICB0aGlzLl93b3JrZXJJZCA9IC0xO1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy5fbGFzdFNlbnRSZXEgPSAwO1xuICAgICAgICB0aGlzLl9wZW5kaW5nUmVwbGllcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIFNpbXBsZVdvcmtlclByb3RvY29sLnByb3RvdHlwZS5zZXRXb3JrZXJJZCA9IGZ1bmN0aW9uICh3b3JrZXJJZCkge1xuICAgICAgICB0aGlzLl93b3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIH07XG4gICAgU2ltcGxlV29ya2VyUHJvdG9jb2wucHJvdG90eXBlLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVxID0gU3RyaW5nKCsrdGhpcy5fbGFzdFNlbnRSZXEpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMuX3BlbmRpbmdSZXBsaWVzW3JlcV0gPSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3Q6IHJlamVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLl9zZW5kKHtcbiAgICAgICAgICAgICAgICB2c1dvcmtlcjogX3RoaXMuX3dvcmtlcklkLFxuICAgICAgICAgICAgICAgIHJlcTogcmVxLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNpbXBsZVdvcmtlclByb3RvY29sLnByb3RvdHlwZS5oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlLnZzV29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3dvcmtlcklkICE9PSAtMSAmJiBtZXNzYWdlLnZzV29ya2VyICE9PSB0aGlzLl93b3JrZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJQcm90b2NvbC5wcm90b3R5cGUuX2hhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChtc2cuc2VxKSB7XG4gICAgICAgICAgICB2YXIgcmVwbHlNZXNzYWdlID0gbXNnO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wZW5kaW5nUmVwbGllc1tyZXBseU1lc3NhZ2Uuc2VxXSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignR290IHJlcGx5IHRvIHVua25vd24gc2VxJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlcGx5ID0gdGhpcy5fcGVuZGluZ1JlcGxpZXNbcmVwbHlNZXNzYWdlLnNlcV07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcGVuZGluZ1JlcGxpZXNbcmVwbHlNZXNzYWdlLnNlcV07XG4gICAgICAgICAgICBpZiAocmVwbHlNZXNzYWdlLmVycikge1xuICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXBseU1lc3NhZ2UuZXJyO1xuICAgICAgICAgICAgICAgIGlmIChyZXBseU1lc3NhZ2UuZXJyLiRpc0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICBlcnIubmFtZSA9IHJlcGx5TWVzc2FnZS5lcnIubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSByZXBseU1lc3NhZ2UuZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGVyci5zdGFjayA9IHJlcGx5TWVzc2FnZS5lcnIuc3RhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcGx5LnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcGx5LnJlc29sdmUocmVwbHlNZXNzYWdlLnJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcXVlc3RNZXNzYWdlID0gbXNnO1xuICAgICAgICB2YXIgcmVxID0gcmVxdWVzdE1lc3NhZ2UucmVxO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faGFuZGxlci5oYW5kbGVNZXNzYWdlKHJlcXVlc3RNZXNzYWdlLm1ldGhvZCwgcmVxdWVzdE1lc3NhZ2UuYXJncyk7XG4gICAgICAgIHJlc3VsdC50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICBfdGhpcy5fc2VuZCh7XG4gICAgICAgICAgICAgICAgdnNXb3JrZXI6IF90aGlzLl93b3JrZXJJZCxcbiAgICAgICAgICAgICAgICBzZXE6IHJlcSxcbiAgICAgICAgICAgICAgICByZXM6IHIsXG4gICAgICAgICAgICAgICAgZXJyOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUuZGV0YWlsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBMb2FkaW5nIGVycm9ycyBoYXZlIGEgZGV0YWlsIHByb3BlcnR5IHRoYXQgcG9pbnRzIHRvIHRoZSBhY3R1YWwgZXJyb3JcbiAgICAgICAgICAgICAgICBlLmRldGFpbCA9IHRyYW5zZm9ybUVycm9yRm9yU2VyaWFsaXphdGlvbihlLmRldGFpbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5fc2VuZCh7XG4gICAgICAgICAgICAgICAgdnNXb3JrZXI6IF90aGlzLl93b3JrZXJJZCxcbiAgICAgICAgICAgICAgICBzZXE6IHJlcSxcbiAgICAgICAgICAgICAgICByZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBlcnI6IHRyYW5zZm9ybUVycm9yRm9yU2VyaWFsaXphdGlvbihlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2ltcGxlV29ya2VyUHJvdG9jb2wucHJvdG90eXBlLl9zZW5kID0gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICB2YXIgdHJhbnNmZXIgPSBbXTtcbiAgICAgICAgaWYgKG1zZy5yZXEpIHtcbiAgICAgICAgICAgIHZhciBtID0gbXNnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobS5hcmdzW2ldIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmZXIucHVzaChtLmFyZ3NbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtID0gbXNnO1xuICAgICAgICAgICAgaWYgKG0ucmVzIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zlci5wdXNoKG0ucmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYW5kbGVyLnNlbmRNZXNzYWdlKG1zZywgdHJhbnNmZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIFNpbXBsZVdvcmtlclByb3RvY29sO1xufSgpKTtcbi8qKlxuICogTWFpbiB0aHJlYWQgc2lkZVxuICovXG52YXIgU2ltcGxlV29ya2VyQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTaW1wbGVXb3JrZXJDbGllbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2ltcGxlV29ya2VyQ2xpZW50KHdvcmtlckZhY3RvcnksIG1vZHVsZUlkLCBob3N0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHZhciBsYXp5UHJveHlSZWplY3QgPSBudWxsO1xuICAgICAgICBfdGhpcy5fd29ya2VyID0gX3RoaXMuX3JlZ2lzdGVyKHdvcmtlckZhY3RvcnkuY3JlYXRlKCd2cy9iYXNlL2NvbW1vbi93b3JrZXIvc2ltcGxlV29ya2VyJywgZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgX3RoaXMuX3Byb3RvY29sLmhhbmRsZU1lc3NhZ2UobXNnKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgLy8gaW4gRmlyZWZveCwgd2ViIHdvcmtlcnMgZmFpbCBsYXppbHkgOihcbiAgICAgICAgICAgIC8vIHdlIHdpbGwgcmVqZWN0IHRoZSBwcm94eVxuICAgICAgICAgICAgaWYgKGxhenlQcm94eVJlamVjdCkge1xuICAgICAgICAgICAgICAgIGxhenlQcm94eVJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIF90aGlzLl9wcm90b2NvbCA9IG5ldyBTaW1wbGVXb3JrZXJQcm90b2NvbCh7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZTogZnVuY3Rpb24gKG1zZywgdHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fd29ya2VyLnBvc3RNZXNzYWdlKG1zZywgdHJhbnNmZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZU1lc3NhZ2U6IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhvc3RbbWV0aG9kXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdNaXNzaW5nIG1ldGhvZCAnICsgbWV0aG9kICsgJyBvbiBtYWluIHRocmVhZCBob3N0LicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShob3N0W21ldGhvZF0uYXBwbHkoaG9zdCwgYXJncykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuX3Byb3RvY29sLnNldFdvcmtlcklkKF90aGlzLl93b3JrZXIuZ2V0SWQoKSk7XG4gICAgICAgIC8vIEdhdGhlciBsb2FkZXIgY29uZmlndXJhdGlvblxuICAgICAgICB2YXIgbG9hZGVyQ29uZmlndXJhdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5yZXF1aXJlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2VsZi5yZXF1aXJlLmdldENvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb25maWd1cmF0aW9uIGZyb20gdGhlIE1vbmFjbyBBTUQgTG9hZGVyXG4gICAgICAgICAgICBsb2FkZXJDb25maWd1cmF0aW9uID0gc2VsZi5yZXF1aXJlLmdldENvbmZpZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxmLnJlcXVpcmVqcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHJlcXVpcmVqc1xuICAgICAgICAgICAgbG9hZGVyQ29uZmlndXJhdGlvbiA9IHNlbGYucmVxdWlyZWpzLnMuY29udGV4dHMuXy5jb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhvc3RNZXRob2RzID0gdHlwZXMuZ2V0QWxsTWV0aG9kTmFtZXMoaG9zdCk7XG4gICAgICAgIC8vIFNlbmQgaW5pdGlhbGl6ZSBtZXNzYWdlXG4gICAgICAgIF90aGlzLl9vbk1vZHVsZUxvYWRlZCA9IF90aGlzLl9wcm90b2NvbC5zZW5kTWVzc2FnZShJTklUSUFMSVpFLCBbXG4gICAgICAgICAgICBfdGhpcy5fd29ya2VyLmdldElkKCksXG4gICAgICAgICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGxvYWRlckNvbmZpZ3VyYXRpb24pKSxcbiAgICAgICAgICAgIG1vZHVsZUlkLFxuICAgICAgICAgICAgaG9zdE1ldGhvZHMsXG4gICAgICAgIF0pO1xuICAgICAgICAvLyBDcmVhdGUgcHJveHkgdG8gbG9hZGVkIGNvZGVcbiAgICAgICAgdmFyIHByb3h5TWV0aG9kUmVxdWVzdCA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fcmVxdWVzdChtZXRob2QsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5fbGF6eVByb3h5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGF6eVByb3h5UmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICAgICAgX3RoaXMuX29uTW9kdWxlTG9hZGVkLnRoZW4oZnVuY3Rpb24gKGF2YWlsYWJsZU1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHR5cGVzLmNyZWF0ZVByb3h5T2JqZWN0KGF2YWlsYWJsZU1ldGhvZHMsIHByb3h5TWV0aG9kUmVxdWVzdCkpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3IoJ1dvcmtlciBmYWlsZWQgdG8gbG9hZCAnICsgbW9kdWxlSWQsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNpbXBsZVdvcmtlckNsaWVudC5wcm90b3R5cGUuZ2V0UHJveHlPYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXp5UHJveHk7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJDbGllbnQucHJvdG90eXBlLl9yZXF1ZXN0ID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMuX29uTW9kdWxlTG9hZGVkLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9wcm90b2NvbC5zZW5kTWVzc2FnZShtZXRob2QsIGFyZ3MpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2ltcGxlV29ya2VyQ2xpZW50LnByb3RvdHlwZS5fb25FcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlLCBlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmluZm8oZXJyb3IpO1xuICAgIH07XG4gICAgcmV0dXJuIFNpbXBsZVdvcmtlckNsaWVudDtcbn0oRGlzcG9zYWJsZSkpO1xuZXhwb3J0IHsgU2ltcGxlV29ya2VyQ2xpZW50IH07XG4vKipcbiAqIFdvcmtlciBzaWRlXG4gKi9cbnZhciBTaW1wbGVXb3JrZXJTZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2ltcGxlV29ya2VyU2VydmVyKHBvc3RNZXNzYWdlLCByZXF1ZXN0SGFuZGxlckZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fcmVxdWVzdEhhbmRsZXJGYWN0b3J5ID0gcmVxdWVzdEhhbmRsZXJGYWN0b3J5O1xuICAgICAgICB0aGlzLl9yZXF1ZXN0SGFuZGxlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX3Byb3RvY29sID0gbmV3IFNpbXBsZVdvcmtlclByb3RvY29sKHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlOiBmdW5jdGlvbiAobXNnLCB0cmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKG1zZywgdHJhbnNmZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZU1lc3NhZ2U6IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHsgcmV0dXJuIF90aGlzLl9oYW5kbGVNZXNzYWdlKG1ldGhvZCwgYXJncyk7IH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFNpbXBsZVdvcmtlclNlcnZlci5wcm90b3R5cGUub25tZXNzYWdlID0gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICB0aGlzLl9wcm90b2NvbC5oYW5kbGVNZXNzYWdlKG1zZyk7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJTZXJ2ZXIucHJvdG90eXBlLl9oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICBpZiAobWV0aG9kID09PSBJTklUSUFMSVpFKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fcmVxdWVzdEhhbmRsZXIgfHwgdHlwZW9mIHRoaXMuX3JlcXVlc3RIYW5kbGVyW21ldGhvZF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWVzdEhhbmRsZXIgb3IgbWV0aG9kOiAnICsgbWV0aG9kKSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fcmVxdWVzdEhhbmRsZXJbbWV0aG9kXS5hcHBseSh0aGlzLl9yZXF1ZXN0SGFuZGxlciwgYXJncykpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNpbXBsZVdvcmtlclNlcnZlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh3b3JrZXJJZCwgbG9hZGVyQ29uZmlnLCBtb2R1bGVJZCwgaG9zdE1ldGhvZHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fcHJvdG9jb2wuc2V0V29ya2VySWQod29ya2VySWQpO1xuICAgICAgICB2YXIgcHJveHlNZXRob2RSZXF1ZXN0ID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9wcm90b2NvbC5zZW5kTWVzc2FnZShtZXRob2QsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaG9zdFByb3h5ID0gdHlwZXMuY3JlYXRlUHJveHlPYmplY3QoaG9zdE1ldGhvZHMsIHByb3h5TWV0aG9kUmVxdWVzdCk7XG4gICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0SGFuZGxlckZhY3RvcnkpIHtcbiAgICAgICAgICAgIC8vIHN0YXRpYyByZXF1ZXN0IGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RIYW5kbGVyID0gdGhpcy5fcmVxdWVzdEhhbmRsZXJGYWN0b3J5KGhvc3RQcm94eSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHR5cGVzLmdldEFsbE1ldGhvZE5hbWVzKHRoaXMuX3JlcXVlc3RIYW5kbGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvYWRlckNvbmZpZykge1xuICAgICAgICAgICAgLy8gUmVtb3ZlICdiYXNlVXJsJywgaGFuZGxpbmcgaXQgaXMgYmV5b25kIHNjb3BlIGZvciBub3dcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZGVyQ29uZmlnLmJhc2VVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvYWRlckNvbmZpZ1snYmFzZVVybCddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2FkZXJDb25maWcucGF0aHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2FkZXJDb25maWcucGF0aHMudnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2FkZXJDb25maWcucGF0aHNbJ3ZzJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBpcyBpbiBhIHdlYiB3b3JrZXIsIGVuYWJsZSBjYXRjaGluZyBlcnJvcnNcbiAgICAgICAgICAgIGxvYWRlckNvbmZpZy5jYXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYucmVxdWlyZS5jb25maWcobG9hZGVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBnbG9iYWwgcmVxdWlyZSB0byBiZSBzdXJlIHRvIGdldCB0aGUgZ2xvYmFsIGNvbmZpZ1xuICAgICAgICAgICAgc2VsZi5yZXF1aXJlKFttb2R1bGVJZF0sIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVxdWVzdEhhbmRsZXIgPSBtb2R1bGUuY3JlYXRlKGhvc3RQcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fcmVxdWVzdEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIk5vIFJlcXVlc3RIYW5kbGVyIVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0eXBlcy5nZXRBbGxNZXRob2ROYW1lcyhfdGhpcy5fcmVxdWVzdEhhbmRsZXIpKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNpbXBsZVdvcmtlclNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBTaW1wbGVXb3JrZXJTZXJ2ZXIgfTtcbi8qKlxuICogQ2FsbGVkIG9uIHRoZSB3b3JrZXIgc2lkZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHBvc3RNZXNzYWdlKSB7XG4gICAgcmV0dXJuIG5ldyBTaW1wbGVXb3JrZXJTZXJ2ZXIocG9zdE1lc3NhZ2UsIG51bGwpO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyB0b1VpbnQ4IH0gZnJvbSAnLi91aW50LmpzJztcbi8qKlxuICogQSBmYXN0IGNoYXJhY3RlciBjbGFzc2lmaWVyIHRoYXQgdXNlcyBhIGNvbXBhY3QgYXJyYXkgZm9yIEFTQ0lJIHZhbHVlcy5cbiAqL1xudmFyIENoYXJhY3RlckNsYXNzaWZpZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhcmFjdGVyQ2xhc3NpZmllcihfZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSB0b1VpbnQ4KF9kZWZhdWx0VmFsdWUpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMuX2FzY2lpTWFwID0gQ2hhcmFjdGVyQ2xhc3NpZmllci5fY3JlYXRlQXNjaWlNYXAoZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgdGhpcy5fbWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBDaGFyYWN0ZXJDbGFzc2lmaWVyLl9jcmVhdGVBc2NpaU1hcCA9IGZ1bmN0aW9uIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIGFzY2lpTWFwID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgICAgICAgICAgYXNjaWlNYXBbaV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzY2lpTWFwO1xuICAgIH07XG4gICAgQ2hhcmFjdGVyQ2xhc3NpZmllci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGNoYXJDb2RlLCBfdmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdG9VaW50OChfdmFsdWUpO1xuICAgICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8IDI1Nikge1xuICAgICAgICAgICAgdGhpcy5fYXNjaWlNYXBbY2hhckNvZGVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0KGNoYXJDb2RlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYXJhY3RlckNsYXNzaWZpZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICAgICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8IDI1Nikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FzY2lpTWFwW2NoYXJDb2RlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fbWFwLmdldChjaGFyQ29kZSkgfHwgdGhpcy5fZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENoYXJhY3RlckNsYXNzaWZpZXI7XG59KCkpO1xuZXhwb3J0IHsgQ2hhcmFjdGVyQ2xhc3NpZmllciB9O1xudmFyIENoYXJhY3RlclNldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFyYWN0ZXJTZXQoKSB7XG4gICAgICAgIHRoaXMuX2FjdHVhbCA9IG5ldyBDaGFyYWN0ZXJDbGFzc2lmaWVyKDAgLyogRmFsc2UgKi8pO1xuICAgIH1cbiAgICBDaGFyYWN0ZXJTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICAgICAgICB0aGlzLl9hY3R1YWwuc2V0KGNoYXJDb2RlLCAxIC8qIFRydWUgKi8pO1xuICAgIH07XG4gICAgQ2hhcmFjdGVyU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoY2hhckNvZGUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hY3R1YWwuZ2V0KGNoYXJDb2RlKSA9PT0gMSAvKiBUcnVlICovKTtcbiAgICB9O1xuICAgIHJldHVybiBDaGFyYWN0ZXJTZXQ7XG59KCkpO1xuZXhwb3J0IHsgQ2hhcmFjdGVyU2V0IH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogQSBwb3NpdGlvbiBpbiB0aGUgZWRpdG9yLlxuICovXG52YXIgUG9zaXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9zaXRpb24obGluZU51bWJlciwgY29sdW1uKSB7XG4gICAgICAgIHRoaXMubGluZU51bWJlciA9IGxpbmVOdW1iZXI7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgcG9zaXRpb24gZnJvbSB0aGlzIHBvc2l0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5ld0xpbmVOdW1iZXIgbmV3IGxpbmUgbnVtYmVyXG4gICAgICogQHBhcmFtIG5ld0NvbHVtbiBuZXcgY29sdW1uXG4gICAgICovXG4gICAgUG9zaXRpb24ucHJvdG90eXBlLndpdGggPSBmdW5jdGlvbiAobmV3TGluZU51bWJlciwgbmV3Q29sdW1uKSB7XG4gICAgICAgIGlmIChuZXdMaW5lTnVtYmVyID09PSB2b2lkIDApIHsgbmV3TGluZU51bWJlciA9IHRoaXMubGluZU51bWJlcjsgfVxuICAgICAgICBpZiAobmV3Q29sdW1uID09PSB2b2lkIDApIHsgbmV3Q29sdW1uID0gdGhpcy5jb2x1bW47IH1cbiAgICAgICAgaWYgKG5ld0xpbmVOdW1iZXIgPT09IHRoaXMubGluZU51bWJlciAmJiBuZXdDb2x1bW4gPT09IHRoaXMuY29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24obmV3TGluZU51bWJlciwgbmV3Q29sdW1uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVyaXZlIGEgbmV3IHBvc2l0aW9uIGZyb20gdGhpcyBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWx0YUxpbmVOdW1iZXIgbGluZSBudW1iZXIgZGVsdGFcbiAgICAgKiBAcGFyYW0gZGVsdGFDb2x1bW4gY29sdW1uIGRlbHRhXG4gICAgICovXG4gICAgUG9zaXRpb24ucHJvdG90eXBlLmRlbHRhID0gZnVuY3Rpb24gKGRlbHRhTGluZU51bWJlciwgZGVsdGFDb2x1bW4pIHtcbiAgICAgICAgaWYgKGRlbHRhTGluZU51bWJlciA9PT0gdm9pZCAwKSB7IGRlbHRhTGluZU51bWJlciA9IDA7IH1cbiAgICAgICAgaWYgKGRlbHRhQ29sdW1uID09PSB2b2lkIDApIHsgZGVsdGFDb2x1bW4gPSAwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLndpdGgodGhpcy5saW5lTnVtYmVyICsgZGVsdGFMaW5lTnVtYmVyLCB0aGlzLmNvbHVtbiArIGRlbHRhQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgdGhpcyBwb3NpdGlvbiBlcXVhbHMgb3RoZXIgcG9zaXRpb25cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBQb3NpdGlvbi5lcXVhbHModGhpcywgb3RoZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBwb3NpdGlvbiBgYWAgZXF1YWxzIHBvc2l0aW9uIGBiYFxuICAgICAqL1xuICAgIFBvc2l0aW9uLmVxdWFscyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmICghYSAmJiAhYikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICghIWEgJiZcbiAgICAgICAgICAgICEhYiAmJlxuICAgICAgICAgICAgYS5saW5lTnVtYmVyID09PSBiLmxpbmVOdW1iZXIgJiZcbiAgICAgICAgICAgIGEuY29sdW1uID09PSBiLmNvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoaXMgcG9zaXRpb24gaXMgYmVmb3JlIG90aGVyIHBvc2l0aW9uLlxuICAgICAqIElmIHRoZSB0d28gcG9zaXRpb25zIGFyZSBlcXVhbCwgdGhlIHJlc3VsdCB3aWxsIGJlIGZhbHNlLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLnByb3RvdHlwZS5pc0JlZm9yZSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICByZXR1cm4gUG9zaXRpb24uaXNCZWZvcmUodGhpcywgb3RoZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBwb3NpdGlvbiBgYWAgaXMgYmVmb3JlIHBvc2l0aW9uIGBiYC5cbiAgICAgKiBJZiB0aGUgdHdvIHBvc2l0aW9ucyBhcmUgZXF1YWwsIHRoZSByZXN1bHQgd2lsbCBiZSBmYWxzZS5cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5pc0JlZm9yZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhLmxpbmVOdW1iZXIgPCBiLmxpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLmxpbmVOdW1iZXIgPCBhLmxpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS5jb2x1bW4gPCBiLmNvbHVtbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgdGhpcyBwb3NpdGlvbiBpcyBiZWZvcmUgb3RoZXIgcG9zaXRpb24uXG4gICAgICogSWYgdGhlIHR3byBwb3NpdGlvbnMgYXJlIGVxdWFsLCB0aGUgcmVzdWx0IHdpbGwgYmUgdHJ1ZS5cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5wcm90b3R5cGUuaXNCZWZvcmVPckVxdWFsID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBQb3NpdGlvbi5pc0JlZm9yZU9yRXF1YWwodGhpcywgb3RoZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBwb3NpdGlvbiBgYWAgaXMgYmVmb3JlIHBvc2l0aW9uIGBiYC5cbiAgICAgKiBJZiB0aGUgdHdvIHBvc2l0aW9ucyBhcmUgZXF1YWwsIHRoZSByZXN1bHQgd2lsbCBiZSB0cnVlLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLmlzQmVmb3JlT3JFcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhLmxpbmVOdW1iZXIgPCBiLmxpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLmxpbmVOdW1iZXIgPCBhLmxpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS5jb2x1bW4gPD0gYi5jb2x1bW47XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgcG9zaXRpb25zLCB1c2VmdWwgZm9yIHNvcnRpbmdcbiAgICAgKi9cbiAgICBQb3NpdGlvbi5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGFMaW5lTnVtYmVyID0gYS5saW5lTnVtYmVyIHwgMDtcbiAgICAgICAgdmFyIGJMaW5lTnVtYmVyID0gYi5saW5lTnVtYmVyIHwgMDtcbiAgICAgICAgaWYgKGFMaW5lTnVtYmVyID09PSBiTGluZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGFDb2x1bW4gPSBhLmNvbHVtbiB8IDA7XG4gICAgICAgICAgICB2YXIgYkNvbHVtbiA9IGIuY29sdW1uIHwgMDtcbiAgICAgICAgICAgIHJldHVybiBhQ29sdW1uIC0gYkNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYUxpbmVOdW1iZXIgLSBiTGluZU51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb25lIHRoaXMgcG9zaXRpb24uXG4gICAgICovXG4gICAgUG9zaXRpb24ucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKHRoaXMubGluZU51bWJlciwgdGhpcy5jb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29udmVydCB0byBhIGh1bWFuLXJlYWRhYmxlIHJlcHJlc2VudGF0aW9uLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcoJyArIHRoaXMubGluZU51bWJlciArICcsJyArIHRoaXMuY29sdW1uICsgJyknO1xuICAgIH07XG4gICAgLy8gLS0tXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYFBvc2l0aW9uYCBmcm9tIGFuIGBJUG9zaXRpb25gLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLmxpZnQgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24ocG9zLmxpbmVOdW1iZXIsIHBvcy5jb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBgb2JqYCBpcyBhbiBgSVBvc2l0aW9uYC5cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5pc0lQb3NpdGlvbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIChvYmpcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLmxpbmVOdW1iZXIgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmouY29sdW1uID09PSAnbnVtYmVyJykpO1xuICAgIH07XG4gICAgcmV0dXJuIFBvc2l0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFBvc2l0aW9uIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG4vKipcbiAqIEEgcmFuZ2UgaW4gdGhlIGVkaXRvci4gKHN0YXJ0TGluZU51bWJlcixzdGFydENvbHVtbikgaXMgPD0gKGVuZExpbmVOdW1iZXIsZW5kQ29sdW1uKVxuICovXG52YXIgUmFuZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmFuZ2Uoc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbiwgZW5kTGluZU51bWJlciwgZW5kQ29sdW1uKSB7XG4gICAgICAgIGlmICgoc3RhcnRMaW5lTnVtYmVyID4gZW5kTGluZU51bWJlcikgfHwgKHN0YXJ0TGluZU51bWJlciA9PT0gZW5kTGluZU51bWJlciAmJiBzdGFydENvbHVtbiA+IGVuZENvbHVtbikpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMaW5lTnVtYmVyID0gZW5kTGluZU51bWJlcjtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICAgICAgICB0aGlzLmVuZExpbmVOdW1iZXIgPSBzdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLmVuZENvbHVtbiA9IHN0YXJ0Q29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydExpbmVOdW1iZXIgPSBzdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q29sdW1uID0gc3RhcnRDb2x1bW47XG4gICAgICAgICAgICB0aGlzLmVuZExpbmVOdW1iZXIgPSBlbmRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGlzIHJhbmdlIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmFuZ2UuaXNFbXB0eSh0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgYHJhbmdlYCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBSYW5nZS5pc0VtcHR5ID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiAocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyID09PSByYW5nZS5lbmRMaW5lTnVtYmVyICYmIHJhbmdlLnN0YXJ0Q29sdW1uID09PSByYW5nZS5lbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBwb3NpdGlvbiBpcyBpbiB0aGlzIHJhbmdlLiBJZiB0aGUgcG9zaXRpb24gaXMgYXQgdGhlIGVkZ2VzLCB3aWxsIHJldHVybiB0cnVlLlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5jb250YWluc1Bvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5jb250YWluc1Bvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgYHBvc2l0aW9uYCBpcyBpbiBgcmFuZ2VgLiBJZiB0aGUgcG9zaXRpb24gaXMgYXQgdGhlIGVkZ2VzLCB3aWxsIHJldHVybiB0cnVlLlxuICAgICAqL1xuICAgIFJhbmdlLmNvbnRhaW5zUG9zaXRpb24gPSBmdW5jdGlvbiAocmFuZ2UsIHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbi5saW5lTnVtYmVyIDwgcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIHx8IHBvc2l0aW9uLmxpbmVOdW1iZXIgPiByYW5nZS5lbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLmxpbmVOdW1iZXIgPT09IHJhbmdlLnN0YXJ0TGluZU51bWJlciAmJiBwb3NpdGlvbi5jb2x1bW4gPCByYW5nZS5zdGFydENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi5saW5lTnVtYmVyID09PSByYW5nZS5lbmRMaW5lTnVtYmVyICYmIHBvc2l0aW9uLmNvbHVtbiA+IHJhbmdlLmVuZENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiByYW5nZSBpcyBpbiB0aGlzIHJhbmdlLiBJZiB0aGUgcmFuZ2UgaXMgZXF1YWwgdG8gdGhpcyByYW5nZSwgd2lsbCByZXR1cm4gdHJ1ZS5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuY29udGFpbnNSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICByZXR1cm4gUmFuZ2UuY29udGFpbnNSYW5nZSh0aGlzLCByYW5nZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIGBvdGhlclJhbmdlYCBpcyBpbiBgcmFuZ2VgLiBJZiB0aGUgcmFuZ2VzIGFyZSBlcXVhbCwgd2lsbCByZXR1cm4gdHJ1ZS5cbiAgICAgKi9cbiAgICBSYW5nZS5jb250YWluc1JhbmdlID0gZnVuY3Rpb24gKHJhbmdlLCBvdGhlclJhbmdlKSB7XG4gICAgICAgIGlmIChvdGhlclJhbmdlLnN0YXJ0TGluZU51bWJlciA8IHJhbmdlLnN0YXJ0TGluZU51bWJlciB8fCBvdGhlclJhbmdlLmVuZExpbmVOdW1iZXIgPCByYW5nZS5zdGFydExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJSYW5nZS5zdGFydExpbmVOdW1iZXIgPiByYW5nZS5lbmRMaW5lTnVtYmVyIHx8IG90aGVyUmFuZ2UuZW5kTGluZU51bWJlciA+IHJhbmdlLmVuZExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJSYW5nZS5zdGFydExpbmVOdW1iZXIgPT09IHJhbmdlLnN0YXJ0TGluZU51bWJlciAmJiBvdGhlclJhbmdlLnN0YXJ0Q29sdW1uIDwgcmFuZ2Uuc3RhcnRDb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJSYW5nZS5lbmRMaW5lTnVtYmVyID09PSByYW5nZS5lbmRMaW5lTnVtYmVyICYmIG90aGVyUmFuZ2UuZW5kQ29sdW1uID4gcmFuZ2UuZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIGByYW5nZWAgaXMgc3RyaWN0bHkgaW4gdGhpcyByYW5nZS4gYHJhbmdlYCBtdXN0IHN0YXJ0IGFmdGVyIGFuZCBlbmQgYmVmb3JlIHRoaXMgcmFuZ2UgZm9yIHRoZSByZXN1bHQgdG8gYmUgdHJ1ZS5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuc3RyaWN0Q29udGFpbnNSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICByZXR1cm4gUmFuZ2Uuc3RyaWN0Q29udGFpbnNSYW5nZSh0aGlzLCByYW5nZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIGBvdGhlclJhbmdlYCBpcyBzdHJpbmN0bHkgaW4gYHJhbmdlYCAobXVzdCBzdGFydCBhZnRlciwgYW5kIGVuZCBiZWZvcmUpLiBJZiB0aGUgcmFuZ2VzIGFyZSBlcXVhbCwgd2lsbCByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgUmFuZ2Uuc3RyaWN0Q29udGFpbnNSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSwgb3RoZXJSYW5nZSkge1xuICAgICAgICBpZiAob3RoZXJSYW5nZS5zdGFydExpbmVOdW1iZXIgPCByYW5nZS5zdGFydExpbmVOdW1iZXIgfHwgb3RoZXJSYW5nZS5lbmRMaW5lTnVtYmVyIDwgcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyUmFuZ2Uuc3RhcnRMaW5lTnVtYmVyID4gcmFuZ2UuZW5kTGluZU51bWJlciB8fCBvdGhlclJhbmdlLmVuZExpbmVOdW1iZXIgPiByYW5nZS5lbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyUmFuZ2Uuc3RhcnRMaW5lTnVtYmVyID09PSByYW5nZS5zdGFydExpbmVOdW1iZXIgJiYgb3RoZXJSYW5nZS5zdGFydENvbHVtbiA8PSByYW5nZS5zdGFydENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlclJhbmdlLmVuZExpbmVOdW1iZXIgPT09IHJhbmdlLmVuZExpbmVOdW1iZXIgJiYgb3RoZXJSYW5nZS5lbmRDb2x1bW4gPj0gcmFuZ2UuZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIHJldW5pb24gb2YgdGhlIHR3byByYW5nZXMuXG4gICAgICogVGhlIHNtYWxsZXN0IHBvc2l0aW9uIHdpbGwgYmUgdXNlZCBhcyB0aGUgc3RhcnQgcG9pbnQsIGFuZCB0aGUgbGFyZ2VzdCBvbmUgYXMgdGhlIGVuZCBwb2ludC5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUucGx1c1JhbmdlID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5wbHVzUmFuZ2UodGhpcywgcmFuZ2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSByZXVuaW9uIG9mIHRoZSB0d28gcmFuZ2VzLlxuICAgICAqIFRoZSBzbWFsbGVzdCBwb3NpdGlvbiB3aWxsIGJlIHVzZWQgYXMgdGhlIHN0YXJ0IHBvaW50LCBhbmQgdGhlIGxhcmdlc3Qgb25lIGFzIHRoZSBlbmQgcG9pbnQuXG4gICAgICovXG4gICAgUmFuZ2UucGx1c1JhbmdlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdmFyIHN0YXJ0Q29sdW1uO1xuICAgICAgICB2YXIgZW5kTGluZU51bWJlcjtcbiAgICAgICAgdmFyIGVuZENvbHVtbjtcbiAgICAgICAgaWYgKGIuc3RhcnRMaW5lTnVtYmVyIDwgYS5zdGFydExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlciA9IGIuc3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgc3RhcnRDb2x1bW4gPSBiLnN0YXJ0Q29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGIuc3RhcnRMaW5lTnVtYmVyID09PSBhLnN0YXJ0TGluZU51bWJlcikge1xuICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyID0gYi5zdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICBzdGFydENvbHVtbiA9IE1hdGgubWluKGIuc3RhcnRDb2x1bW4sIGEuc3RhcnRDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyID0gYS5zdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICBzdGFydENvbHVtbiA9IGEuc3RhcnRDb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIuZW5kTGluZU51bWJlciA+IGEuZW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgZW5kTGluZU51bWJlciA9IGIuZW5kTGluZU51bWJlcjtcbiAgICAgICAgICAgIGVuZENvbHVtbiA9IGIuZW5kQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGIuZW5kTGluZU51bWJlciA9PT0gYS5lbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICBlbmRMaW5lTnVtYmVyID0gYi5lbmRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgZW5kQ29sdW1uID0gTWF0aC5tYXgoYi5lbmRDb2x1bW4sIGEuZW5kQ29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuZExpbmVOdW1iZXIgPSBhLmVuZExpbmVOdW1iZXI7XG4gICAgICAgICAgICBlbmRDb2x1bW4gPSBhLmVuZENvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGludGVyc2VjdGlvbiBvZiB0aGUgdHdvIHJhbmdlcy5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuaW50ZXJzZWN0UmFuZ2VzID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5pbnRlcnNlY3RSYW5nZXModGhpcywgcmFuZ2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBpbnRlcnNlY3Rpb24gb2YgdGhlIHR3byByYW5nZXMuXG4gICAgICovXG4gICAgUmFuZ2UuaW50ZXJzZWN0UmFuZ2VzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHJlc3VsdFN0YXJ0TGluZU51bWJlciA9IGEuc3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgcmVzdWx0U3RhcnRDb2x1bW4gPSBhLnN0YXJ0Q29sdW1uO1xuICAgICAgICB2YXIgcmVzdWx0RW5kTGluZU51bWJlciA9IGEuZW5kTGluZU51bWJlcjtcbiAgICAgICAgdmFyIHJlc3VsdEVuZENvbHVtbiA9IGEuZW5kQ29sdW1uO1xuICAgICAgICB2YXIgb3RoZXJTdGFydExpbmVOdW1iZXIgPSBiLnN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdmFyIG90aGVyU3RhcnRDb2x1bW4gPSBiLnN0YXJ0Q29sdW1uO1xuICAgICAgICB2YXIgb3RoZXJFbmRMaW5lTnVtYmVyID0gYi5lbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgb3RoZXJFbmRDb2x1bW4gPSBiLmVuZENvbHVtbjtcbiAgICAgICAgaWYgKHJlc3VsdFN0YXJ0TGluZU51bWJlciA8IG90aGVyU3RhcnRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXN1bHRTdGFydExpbmVOdW1iZXIgPSBvdGhlclN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgICAgIHJlc3VsdFN0YXJ0Q29sdW1uID0gb3RoZXJTdGFydENvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZXN1bHRTdGFydExpbmVOdW1iZXIgPT09IG90aGVyU3RhcnRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXN1bHRTdGFydENvbHVtbiA9IE1hdGgubWF4KHJlc3VsdFN0YXJ0Q29sdW1uLCBvdGhlclN0YXJ0Q29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0RW5kTGluZU51bWJlciA+IG90aGVyRW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmVzdWx0RW5kTGluZU51bWJlciA9IG90aGVyRW5kTGluZU51bWJlcjtcbiAgICAgICAgICAgIHJlc3VsdEVuZENvbHVtbiA9IG90aGVyRW5kQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdEVuZExpbmVOdW1iZXIgPT09IG90aGVyRW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmVzdWx0RW5kQ29sdW1uID0gTWF0aC5taW4ocmVzdWx0RW5kQ29sdW1uLCBvdGhlckVuZENvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgc2VsZWN0aW9uIGlzIG5vdyBlbXB0eVxuICAgICAgICBpZiAocmVzdWx0U3RhcnRMaW5lTnVtYmVyID4gcmVzdWx0RW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdFN0YXJ0TGluZU51bWJlciA9PT0gcmVzdWx0RW5kTGluZU51bWJlciAmJiByZXN1bHRTdGFydENvbHVtbiA+IHJlc3VsdEVuZENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZShyZXN1bHRTdGFydExpbmVOdW1iZXIsIHJlc3VsdFN0YXJ0Q29sdW1uLCByZXN1bHRFbmRMaW5lTnVtYmVyLCByZXN1bHRFbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGlzIHJhbmdlIGVxdWFscyBvdGhlci5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuZXF1YWxzUmFuZ2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIFJhbmdlLmVxdWFsc1JhbmdlKHRoaXMsIG90aGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgcmFuZ2UgYGFgIGVxdWFscyBgYmAuXG4gICAgICovXG4gICAgUmFuZ2UuZXF1YWxzUmFuZ2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gKCEhYSAmJlxuICAgICAgICAgICAgISFiICYmXG4gICAgICAgICAgICBhLnN0YXJ0TGluZU51bWJlciA9PT0gYi5zdGFydExpbmVOdW1iZXIgJiZcbiAgICAgICAgICAgIGEuc3RhcnRDb2x1bW4gPT09IGIuc3RhcnRDb2x1bW4gJiZcbiAgICAgICAgICAgIGEuZW5kTGluZU51bWJlciA9PT0gYi5lbmRMaW5lTnVtYmVyICYmXG4gICAgICAgICAgICBhLmVuZENvbHVtbiA9PT0gYi5lbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBlbmQgcG9zaXRpb24gKHdoaWNoIHdpbGwgYmUgYWZ0ZXIgb3IgZXF1YWwgdG8gdGhlIHN0YXJ0IHBvc2l0aW9uKVxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5nZXRFbmRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbih0aGlzLmVuZExpbmVOdW1iZXIsIHRoaXMuZW5kQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc3RhcnQgcG9zaXRpb24gKHdoaWNoIHdpbGwgYmUgYmVmb3JlIG9yIGVxdWFsIHRvIHRoZSBlbmQgcG9zaXRpb24pXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLmdldFN0YXJ0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24odGhpcy5zdGFydExpbmVOdW1iZXIsIHRoaXMuc3RhcnRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIHRvIGEgdXNlciBwcmVzZW50YWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ1snICsgdGhpcy5zdGFydExpbmVOdW1iZXIgKyAnLCcgKyB0aGlzLnN0YXJ0Q29sdW1uICsgJyAtPiAnICsgdGhpcy5lbmRMaW5lTnVtYmVyICsgJywnICsgdGhpcy5lbmRDb2x1bW4gKyAnXSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgcmFuZ2UgdXNpbmcgdGhpcyByYW5nZSdzIHN0YXJ0IHBvc2l0aW9uLCBhbmQgdXNpbmcgZW5kTGluZU51bWJlciBhbmQgZW5kQ29sdW1uIGFzIHRoZSBlbmQgcG9zaXRpb24uXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLnNldEVuZFBvc2l0aW9uID0gZnVuY3Rpb24gKGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbikge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHRoaXMuc3RhcnRMaW5lTnVtYmVyLCB0aGlzLnN0YXJ0Q29sdW1uLCBlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHJhbmdlIHVzaW5nIHRoaXMgcmFuZ2UncyBlbmQgcG9zaXRpb24sIGFuZCB1c2luZyBzdGFydExpbmVOdW1iZXIgYW5kIHN0YXJ0Q29sdW1uIGFzIHRoZSBzdGFydCBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuc2V0U3RhcnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2Uoc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbiwgdGhpcy5lbmRMaW5lTnVtYmVyLCB0aGlzLmVuZENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmFuZ2UgdXNpbmcgdGhpcyByYW5nZSdzIHN0YXJ0IHBvc2l0aW9uLlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5jb2xsYXBzZVRvU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5jb2xsYXBzZVRvU3RhcnQodGhpcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmFuZ2UgdXNpbmcgdGhpcyByYW5nZSdzIHN0YXJ0IHBvc2l0aW9uLlxuICAgICAqL1xuICAgIFJhbmdlLmNvbGxhcHNlVG9TdGFydCA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnN0YXJ0TGluZU51bWJlciwgcmFuZ2Uuc3RhcnRDb2x1bW4sIHJhbmdlLnN0YXJ0TGluZU51bWJlciwgcmFuZ2Uuc3RhcnRDb2x1bW4pO1xuICAgIH07XG4gICAgLy8gLS0tXG4gICAgUmFuZ2UuZnJvbVBvc2l0aW9ucyA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSBzdGFydDsgfVxuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHN0YXJ0LmxpbmVOdW1iZXIsIHN0YXJ0LmNvbHVtbiwgZW5kLmxpbmVOdW1iZXIsIGVuZC5jb2x1bW4pO1xuICAgIH07XG4gICAgUmFuZ2UubGlmdCA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnN0YXJ0TGluZU51bWJlciwgcmFuZ2Uuc3RhcnRDb2x1bW4sIHJhbmdlLmVuZExpbmVOdW1iZXIsIHJhbmdlLmVuZENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIGBvYmpgIGlzIGFuIGBJUmFuZ2VgLlxuICAgICAqL1xuICAgIFJhbmdlLmlzSVJhbmdlID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKG9ialxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmouc3RhcnRMaW5lTnVtYmVyID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLnN0YXJ0Q29sdW1uID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLmVuZExpbmVOdW1iZXIgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmouZW5kQ29sdW1uID09PSAnbnVtYmVyJykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGUgdHdvIHJhbmdlcyBhcmUgdG91Y2hpbmcgaW4gYW55IHdheS5cbiAgICAgKi9cbiAgICBSYW5nZS5hcmVJbnRlcnNlY3RpbmdPclRvdWNoaW5nID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYGFgIGlzIGJlZm9yZSBgYmBcbiAgICAgICAgaWYgKGEuZW5kTGluZU51bWJlciA8IGIuc3RhcnRMaW5lTnVtYmVyIHx8IChhLmVuZExpbmVOdW1iZXIgPT09IGIuc3RhcnRMaW5lTnVtYmVyICYmIGEuZW5kQ29sdW1uIDwgYi5zdGFydENvbHVtbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBgYmAgaXMgYmVmb3JlIGBhYFxuICAgICAgICBpZiAoYi5lbmRMaW5lTnVtYmVyIDwgYS5zdGFydExpbmVOdW1iZXIgfHwgKGIuZW5kTGluZU51bWJlciA9PT0gYS5zdGFydExpbmVOdW1iZXIgJiYgYi5lbmRDb2x1bW4gPCBhLnN0YXJ0Q29sdW1uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZXNlIHJhbmdlcyBtdXN0IGludGVyc2VjdFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgdGhlIHR3byByYW5nZXMgYXJlIGludGVyc2VjdGluZy4gSWYgdGhlIHJhbmdlcyBhcmUgdG91Y2hpbmcgaXQgcmV0dXJucyB0cnVlLlxuICAgICAqL1xuICAgIFJhbmdlLmFyZUludGVyc2VjdGluZyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGBhYCBpcyBiZWZvcmUgYGJgXG4gICAgICAgIGlmIChhLmVuZExpbmVOdW1iZXIgPCBiLnN0YXJ0TGluZU51bWJlciB8fCAoYS5lbmRMaW5lTnVtYmVyID09PSBiLnN0YXJ0TGluZU51bWJlciAmJiBhLmVuZENvbHVtbiA8PSBiLnN0YXJ0Q29sdW1uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIGBiYCBpcyBiZWZvcmUgYGFgXG4gICAgICAgIGlmIChiLmVuZExpbmVOdW1iZXIgPCBhLnN0YXJ0TGluZU51bWJlciB8fCAoYi5lbmRMaW5lTnVtYmVyID09PSBhLnN0YXJ0TGluZU51bWJlciAmJiBiLmVuZENvbHVtbiA8PSBhLnN0YXJ0Q29sdW1uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZXNlIHJhbmdlcyBtdXN0IGludGVyc2VjdFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBjb21wYXJlcyByYW5nZXMsIHVzZWZ1bCBmb3Igc29ydGluZyByYW5nZXNcbiAgICAgKiBJdCB3aWxsIGZpcnN0IGNvbXBhcmUgcmFuZ2VzIG9uIHRoZSBzdGFydFBvc2l0aW9uIGFuZCB0aGVuIG9uIHRoZSBlbmRQb3NpdGlvblxuICAgICAqL1xuICAgIFJhbmdlLmNvbXBhcmVSYW5nZXNVc2luZ1N0YXJ0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhICYmIGIpIHtcbiAgICAgICAgICAgIHZhciBhU3RhcnRMaW5lTnVtYmVyID0gYS5zdGFydExpbmVOdW1iZXIgfCAwO1xuICAgICAgICAgICAgdmFyIGJTdGFydExpbmVOdW1iZXIgPSBiLnN0YXJ0TGluZU51bWJlciB8IDA7XG4gICAgICAgICAgICBpZiAoYVN0YXJ0TGluZU51bWJlciA9PT0gYlN0YXJ0TGluZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHZhciBhU3RhcnRDb2x1bW4gPSBhLnN0YXJ0Q29sdW1uIHwgMDtcbiAgICAgICAgICAgICAgICB2YXIgYlN0YXJ0Q29sdW1uID0gYi5zdGFydENvbHVtbiB8IDA7XG4gICAgICAgICAgICAgICAgaWYgKGFTdGFydENvbHVtbiA9PT0gYlN0YXJ0Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhRW5kTGluZU51bWJlciA9IGEuZW5kTGluZU51bWJlciB8IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiRW5kTGluZU51bWJlciA9IGIuZW5kTGluZU51bWJlciB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhRW5kTGluZU51bWJlciA9PT0gYkVuZExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhRW5kQ29sdW1uID0gYS5lbmRDb2x1bW4gfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJFbmRDb2x1bW4gPSBiLmVuZENvbHVtbiB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUVuZENvbHVtbiAtIGJFbmRDb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFFbmRMaW5lTnVtYmVyIC0gYkVuZExpbmVOdW1iZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhU3RhcnRDb2x1bW4gLSBiU3RhcnRDb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYVN0YXJ0TGluZU51bWJlciAtIGJTdGFydExpbmVOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFFeGlzdHMgPSAoYSA/IDEgOiAwKTtcbiAgICAgICAgdmFyIGJFeGlzdHMgPSAoYiA/IDEgOiAwKTtcbiAgICAgICAgcmV0dXJuIGFFeGlzdHMgLSBiRXhpc3RzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHJhbmdlcywgdXNlZnVsIGZvciBzb3J0aW5nIHJhbmdlc1xuICAgICAqIEl0IHdpbGwgZmlyc3QgY29tcGFyZSByYW5nZXMgb24gdGhlIGVuZFBvc2l0aW9uIGFuZCB0aGVuIG9uIHRoZSBzdGFydFBvc2l0aW9uXG4gICAgICovXG4gICAgUmFuZ2UuY29tcGFyZVJhbmdlc1VzaW5nRW5kcyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhLmVuZExpbmVOdW1iZXIgPT09IGIuZW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKGEuZW5kQ29sdW1uID09PSBiLmVuZENvbHVtbikge1xuICAgICAgICAgICAgICAgIGlmIChhLnN0YXJ0TGluZU51bWJlciA9PT0gYi5zdGFydExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuc3RhcnRDb2x1bW4gLSBiLnN0YXJ0Q29sdW1uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5zdGFydExpbmVOdW1iZXIgLSBiLnN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhLmVuZENvbHVtbiAtIGIuZW5kQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLmVuZExpbmVOdW1iZXIgLSBiLmVuZExpbmVOdW1iZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoZSByYW5nZSBzcGFucyBtdWx0aXBsZSBsaW5lcy5cbiAgICAgKi9cbiAgICBSYW5nZS5zcGFuc011bHRpcGxlTGluZXMgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlLmVuZExpbmVOdW1iZXIgPiByYW5nZS5zdGFydExpbmVOdW1iZXI7XG4gICAgfTtcbiAgICByZXR1cm4gUmFuZ2U7XG59KCkpO1xuZXhwb3J0IHsgUmFuZ2UgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuL3JhbmdlLmpzJztcbi8qKlxuICogQSBzZWxlY3Rpb24gaW4gdGhlIGVkaXRvci5cbiAqIFRoZSBzZWxlY3Rpb24gaXMgYSByYW5nZSB0aGF0IGhhcyBhbiBvcmllbnRhdGlvbi5cbiAqL1xudmFyIFNlbGVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2VsZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbGVjdGlvbihzZWxlY3Rpb25TdGFydExpbmVOdW1iZXIsIHNlbGVjdGlvblN0YXJ0Q29sdW1uLCBwb3NpdGlvbkxpbmVOdW1iZXIsIHBvc2l0aW9uQ29sdW1uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNlbGVjdGlvblN0YXJ0TGluZU51bWJlciwgc2VsZWN0aW9uU3RhcnRDb2x1bW4sIHBvc2l0aW9uTGluZU51bWJlciwgcG9zaXRpb25Db2x1bW4pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNlbGVjdGlvblN0YXJ0TGluZU51bWJlciA9IHNlbGVjdGlvblN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgX3RoaXMuc2VsZWN0aW9uU3RhcnRDb2x1bW4gPSBzZWxlY3Rpb25TdGFydENvbHVtbjtcbiAgICAgICAgX3RoaXMucG9zaXRpb25MaW5lTnVtYmVyID0gcG9zaXRpb25MaW5lTnVtYmVyO1xuICAgICAgICBfdGhpcy5wb3NpdGlvbkNvbHVtbiA9IHBvc2l0aW9uQ29sdW1uO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb25lIHRoaXMgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyLCB0aGlzLnNlbGVjdGlvblN0YXJ0Q29sdW1uLCB0aGlzLnBvc2l0aW9uTGluZU51bWJlciwgdGhpcy5wb3NpdGlvbkNvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gdG8gYSBodW1hbi1yZWFkYWJsZSByZXByZXNlbnRhdGlvbi5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ1snICsgdGhpcy5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXIgKyAnLCcgKyB0aGlzLnNlbGVjdGlvblN0YXJ0Q29sdW1uICsgJyAtPiAnICsgdGhpcy5wb3NpdGlvbkxpbmVOdW1iZXIgKyAnLCcgKyB0aGlzLnBvc2l0aW9uQ29sdW1uICsgJ10nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBlcXVhbHMgb3RoZXIgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuZXF1YWxzU2VsZWN0aW9uID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHJldHVybiAoU2VsZWN0aW9uLnNlbGVjdGlvbnNFcXVhbCh0aGlzLCBvdGhlcikpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGUgdHdvIHNlbGVjdGlvbnMgYXJlIGVxdWFsLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5zZWxlY3Rpb25zRXF1YWwgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gKGEuc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyID09PSBiLnNlbGVjdGlvblN0YXJ0TGluZU51bWJlciAmJlxuICAgICAgICAgICAgYS5zZWxlY3Rpb25TdGFydENvbHVtbiA9PT0gYi5zZWxlY3Rpb25TdGFydENvbHVtbiAmJlxuICAgICAgICAgICAgYS5wb3NpdGlvbkxpbmVOdW1iZXIgPT09IGIucG9zaXRpb25MaW5lTnVtYmVyICYmXG4gICAgICAgICAgICBhLnBvc2l0aW9uQ29sdW1uID09PSBiLnBvc2l0aW9uQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBkaXJlY3Rpb25zIChMVFIgb3IgUlRMKS5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24ucHJvdG90eXBlLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyID09PSB0aGlzLnN0YXJ0TGluZU51bWJlciAmJiB0aGlzLnNlbGVjdGlvblN0YXJ0Q29sdW1uID09PSB0aGlzLnN0YXJ0Q29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gMCAvKiBMVFIgKi87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDEgLyogUlRMICovO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHNlbGVjdGlvbiB3aXRoIGEgZGlmZmVyZW50IGBwb3NpdGlvbkxpbmVOdW1iZXJgIGFuZCBgcG9zaXRpb25Db2x1bW5gLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuc2V0RW5kUG9zaXRpb24gPSBmdW5jdGlvbiAoZW5kTGluZU51bWJlciwgZW5kQ29sdW1uKSB7XG4gICAgICAgIGlmICh0aGlzLmdldERpcmVjdGlvbigpID09PSAwIC8qIExUUiAqLykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5zdGFydExpbmVOdW1iZXIsIHRoaXMuc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oZW5kTGluZU51bWJlciwgZW5kQ29sdW1uLCB0aGlzLnN0YXJ0TGluZU51bWJlciwgdGhpcy5zdGFydENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHBvc2l0aW9uIGF0IGBwb3NpdGlvbkxpbmVOdW1iZXJgIGFuZCBgcG9zaXRpb25Db2x1bW5gLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24odGhpcy5wb3NpdGlvbkxpbmVOdW1iZXIsIHRoaXMucG9zaXRpb25Db2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHNlbGVjdGlvbiB3aXRoIGEgZGlmZmVyZW50IGBzZWxlY3Rpb25TdGFydExpbmVOdW1iZXJgIGFuZCBgc2VsZWN0aW9uU3RhcnRDb2x1bW5gLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuc2V0U3RhcnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uKSB7XG4gICAgICAgIGlmICh0aGlzLmdldERpcmVjdGlvbigpID09PSAwIC8qIExUUiAqLykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbiwgdGhpcy5lbmRMaW5lTnVtYmVyLCB0aGlzLmVuZENvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5lbmRMaW5lTnVtYmVyLCB0aGlzLmVuZENvbHVtbiwgc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbik7XG4gICAgfTtcbiAgICAvLyAtLS0tXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYFNlbGVjdGlvbmAgZnJvbSBvbmUgb3IgdHdvIHBvc2l0aW9uc1xuICAgICAqL1xuICAgIFNlbGVjdGlvbi5mcm9tUG9zaXRpb25zID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKGVuZCA9PT0gdm9pZCAwKSB7IGVuZCA9IHN0YXJ0OyB9XG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0aW9uKHN0YXJ0LmxpbmVOdW1iZXIsIHN0YXJ0LmNvbHVtbiwgZW5kLmxpbmVOdW1iZXIsIGVuZC5jb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYFNlbGVjdGlvbmAgZnJvbSBhbiBgSVNlbGVjdGlvbmAuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLmxpZnRTZWxlY3Rpb24gPSBmdW5jdGlvbiAoc2VsKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0aW9uKHNlbC5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXIsIHNlbC5zZWxlY3Rpb25TdGFydENvbHVtbiwgc2VsLnBvc2l0aW9uTGluZU51bWJlciwgc2VsLnBvc2l0aW9uQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGBhYCBlcXVhbHMgYGJgLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5zZWxlY3Rpb25zQXJyRXF1YWwgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYSAmJiAhYiB8fCAhYSAmJiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhICYmICFiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25zRXF1YWwoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIGBvYmpgIGlzIGFuIGBJU2VsZWN0aW9uYC5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24uaXNJU2VsZWN0aW9uID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKG9ialxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmouc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLnNlbGVjdGlvblN0YXJ0Q29sdW1uID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLnBvc2l0aW9uTGluZU51bWJlciA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAmJiAodHlwZW9mIG9iai5wb3NpdGlvbkNvbHVtbiA9PT0gJ251bWJlcicpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSB3aXRoIGEgZGlyZWN0aW9uLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5jcmVhdGVXaXRoRGlyZWN0aW9uID0gZnVuY3Rpb24gKHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbiwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDAgLyogTFRSICovKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uLCBlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0aW9uKGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbiwgc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbik7XG4gICAgfTtcbiAgICByZXR1cm4gU2VsZWN0aW9uO1xufShSYW5nZSkpO1xuZXhwb3J0IHsgU2VsZWN0aW9uIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBUb2tlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb2tlbihvZmZzZXQsIHR5cGUsIGxhbmd1YWdlKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0IHwgMDsgLy8gQHBlcmZcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIH1cbiAgICBUb2tlbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnKCcgKyB0aGlzLm9mZnNldCArICcsICcgKyB0aGlzLnR5cGUgKyAnKSc7XG4gICAgfTtcbiAgICByZXR1cm4gVG9rZW47XG59KCkpO1xuZXhwb3J0IHsgVG9rZW4gfTtcbnZhciBUb2tlbml6YXRpb25SZXN1bHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9rZW5pemF0aW9uUmVzdWx0KHRva2VucywgZW5kU3RhdGUpIHtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMuZW5kU3RhdGUgPSBlbmRTdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuaXphdGlvblJlc3VsdDtcbn0oKSk7XG5leHBvcnQgeyBUb2tlbml6YXRpb25SZXN1bHQgfTtcbnZhciBUb2tlbml6YXRpb25SZXN1bHQyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRva2VuaXphdGlvblJlc3VsdDIodG9rZW5zLCBlbmRTdGF0ZSkge1xuICAgICAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICAgICAgdGhpcy5lbmRTdGF0ZSA9IGVuZFN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW5pemF0aW9uUmVzdWx0Mjtcbn0oKSk7XG5leHBvcnQgeyBUb2tlbml6YXRpb25SZXN1bHQyIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBVaW50OE1hdHJpeCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVaW50OE1hdHJpeChyb3dzLCBjb2xzLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgVWludDhBcnJheShyb3dzICogY29scyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3dzICogY29sczsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHMgPSBjb2xzO1xuICAgIH1cbiAgICBVaW50OE1hdHJpeC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW3JvdyAqIHRoaXMuY29scyArIGNvbF07XG4gICAgfTtcbiAgICBVaW50OE1hdHJpeC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHJvdywgY29sLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kYXRhW3JvdyAqIHRoaXMuY29scyArIGNvbF0gPSB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBVaW50OE1hdHJpeDtcbn0oKSk7XG5leHBvcnQgeyBVaW50OE1hdHJpeCB9O1xuZXhwb3J0IGZ1bmN0aW9uIHRvVWludDgodikge1xuICAgIGlmICh2IDwgMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHYgPiAyNTUgLyogTUFYX1VJTlRfOCAqLykge1xuICAgICAgICByZXR1cm4gMjU1IC8qIE1BWF9VSU5UXzggKi87XG4gICAgfVxuICAgIHJldHVybiB2IHwgMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1VpbnQzMih2KSB7XG4gICAgaWYgKHYgPCAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAodiA+IDQyOTQ5NjcyOTUgLyogTUFYX1VJTlRfMzIgKi8pIHtcbiAgICAgICAgcmV0dXJuIDQyOTQ5NjcyOTUgLyogTUFYX1VJTlRfMzIgKi87XG4gICAgfVxuICAgIHJldHVybiB2IHwgMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1VpbnQzMkFycmF5KGFycikge1xuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIHZhciByID0gbmV3IFVpbnQzMkFycmF5KGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICByW2ldID0gdG9VaW50MzIoYXJyW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IExjc0RpZmYgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi9kaWZmL2RpZmYuanMnO1xuaW1wb3J0ICogYXMgc3RyaW5ncyBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi9zdHJpbmdzLmpzJztcbnZhciBNQVhJTVVNX1JVTl9USU1FID0gNTAwMDsgLy8gNSBzZWNvbmRzXG52YXIgTUlOSU1VTV9NQVRDSElOR19DSEFSQUNURVJfTEVOR1RIID0gMztcbmZ1bmN0aW9uIGNvbXB1dGVEaWZmKG9yaWdpbmFsU2VxdWVuY2UsIG1vZGlmaWVkU2VxdWVuY2UsIGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSwgcHJldHR5KSB7XG4gICAgdmFyIGRpZmZBbGdvID0gbmV3IExjc0RpZmYob3JpZ2luYWxTZXF1ZW5jZSwgbW9kaWZpZWRTZXF1ZW5jZSwgY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlKTtcbiAgICByZXR1cm4gZGlmZkFsZ28uQ29tcHV0ZURpZmYocHJldHR5KTtcbn1cbnZhciBMaW5lTWFya2VyU2VxdWVuY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGluZU1hcmtlclNlcXVlbmNlKGxpbmVzKSB7XG4gICAgICAgIHZhciBzdGFydENvbHVtbnMgPSBbXTtcbiAgICAgICAgdmFyIGVuZENvbHVtbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aF8xID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuZ3RoXzE7IGkrKykge1xuICAgICAgICAgICAgc3RhcnRDb2x1bW5zW2ldID0gTGluZU1hcmtlclNlcXVlbmNlLl9nZXRGaXJzdE5vbkJsYW5rQ29sdW1uKGxpbmVzW2ldLCAxKTtcbiAgICAgICAgICAgIGVuZENvbHVtbnNbaV0gPSBMaW5lTWFya2VyU2VxdWVuY2UuX2dldExhc3ROb25CbGFua0NvbHVtbihsaW5lc1tpXSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGluZXMgPSBsaW5lcztcbiAgICAgICAgdGhpcy5fc3RhcnRDb2x1bW5zID0gc3RhcnRDb2x1bW5zO1xuICAgICAgICB0aGlzLl9lbmRDb2x1bW5zID0gZW5kQ29sdW1ucztcbiAgICB9XG4gICAgTGluZU1hcmtlclNlcXVlbmNlLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lcy5sZW5ndGg7XG4gICAgfTtcbiAgICBMaW5lTWFya2VyU2VxdWVuY2UucHJvdG90eXBlLmdldEVsZW1lbnRBdEluZGV4ID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzW2ldLnN1YnN0cmluZyh0aGlzLl9zdGFydENvbHVtbnNbaV0gLSAxLCB0aGlzLl9lbmRDb2x1bW5zW2ldIC0gMSk7XG4gICAgfTtcbiAgICBMaW5lTWFya2VyU2VxdWVuY2UucHJvdG90eXBlLmdldFN0YXJ0TGluZU51bWJlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpICsgMTtcbiAgICB9O1xuICAgIExpbmVNYXJrZXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0RW5kTGluZU51bWJlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpICsgMTtcbiAgICB9O1xuICAgIExpbmVNYXJrZXJTZXF1ZW5jZS5fZ2V0Rmlyc3ROb25CbGFua0NvbHVtbiA9IGZ1bmN0aW9uICh0eHQsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgciA9IHN0cmluZ3MuZmlyc3ROb25XaGl0ZXNwYWNlSW5kZXgodHh0KTtcbiAgICAgICAgaWYgKHIgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByICsgMTtcbiAgICB9O1xuICAgIExpbmVNYXJrZXJTZXF1ZW5jZS5fZ2V0TGFzdE5vbkJsYW5rQ29sdW1uID0gZnVuY3Rpb24gKHR4dCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciByID0gc3RyaW5ncy5sYXN0Tm9uV2hpdGVzcGFjZUluZGV4KHR4dCk7XG4gICAgICAgIGlmIChyID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gciArIDI7XG4gICAgfTtcbiAgICBMaW5lTWFya2VyU2VxdWVuY2UucHJvdG90eXBlLmdldENoYXJTZXF1ZW5jZSA9IGZ1bmN0aW9uIChzaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSwgc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICAgICAgdmFyIGNoYXJDb2RlcyA9IFtdO1xuICAgICAgICB2YXIgbGluZU51bWJlcnMgPSBbXTtcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBbXTtcbiAgICAgICAgdmFyIGxlbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gc3RhcnRJbmRleDsgaW5kZXggPD0gZW5kSW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBsaW5lQ29udGVudCA9IHRoaXMuX2xpbmVzW2luZGV4XTtcbiAgICAgICAgICAgIHZhciBzdGFydENvbHVtbiA9IChzaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSA/IHRoaXMuX3N0YXJ0Q29sdW1uc1tpbmRleF0gOiAxKTtcbiAgICAgICAgICAgIHZhciBlbmRDb2x1bW4gPSAoc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2UgPyB0aGlzLl9lbmRDb2x1bW5zW2luZGV4XSA6IGxpbmVDb250ZW50Lmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gc3RhcnRDb2x1bW47IGNvbCA8IGVuZENvbHVtbjsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjaGFyQ29kZXNbbGVuXSA9IGxpbmVDb250ZW50LmNoYXJDb2RlQXQoY29sIC0gMSk7XG4gICAgICAgICAgICAgICAgbGluZU51bWJlcnNbbGVuXSA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBjb2x1bW5zW2xlbl0gPSBjb2w7XG4gICAgICAgICAgICAgICAgbGVuKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDaGFyU2VxdWVuY2UoY2hhckNvZGVzLCBsaW5lTnVtYmVycywgY29sdW1ucyk7XG4gICAgfTtcbiAgICByZXR1cm4gTGluZU1hcmtlclNlcXVlbmNlO1xufSgpKTtcbnZhciBDaGFyU2VxdWVuY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhclNlcXVlbmNlKGNoYXJDb2RlcywgbGluZU51bWJlcnMsIGNvbHVtbnMpIHtcbiAgICAgICAgdGhpcy5fY2hhckNvZGVzID0gY2hhckNvZGVzO1xuICAgICAgICB0aGlzLl9saW5lTnVtYmVycyA9IGxpbmVOdW1iZXJzO1xuICAgICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB9XG4gICAgQ2hhclNlcXVlbmNlLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFyQ29kZXMubGVuZ3RoO1xuICAgIH07XG4gICAgQ2hhclNlcXVlbmNlLnByb3RvdHlwZS5nZXRFbGVtZW50QXRJbmRleCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFyQ29kZXNbaV07XG4gICAgfTtcbiAgICBDaGFyU2VxdWVuY2UucHJvdG90eXBlLmdldFN0YXJ0TGluZU51bWJlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lTnVtYmVyc1tpXTtcbiAgICB9O1xuICAgIENoYXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0U3RhcnRDb2x1bW4gPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uc1tpXTtcbiAgICB9O1xuICAgIENoYXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0RW5kTGluZU51bWJlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lTnVtYmVyc1tpXTtcbiAgICB9O1xuICAgIENoYXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0RW5kQ29sdW1uID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnNbaV0gKyAxO1xuICAgIH07XG4gICAgcmV0dXJuIENoYXJTZXF1ZW5jZTtcbn0oKSk7XG52YXIgQ2hhckNoYW5nZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFyQ2hhbmdlKG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBvcmlnaW5hbEVuZExpbmVOdW1iZXIsIG9yaWdpbmFsRW5kQ29sdW1uLCBtb2RpZmllZFN0YXJ0TGluZU51bWJlciwgbW9kaWZpZWRTdGFydENvbHVtbiwgbW9kaWZpZWRFbmRMaW5lTnVtYmVyLCBtb2RpZmllZEVuZENvbHVtbikge1xuICAgICAgICB0aGlzLm9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyID0gb3JpZ2luYWxTdGFydExpbmVOdW1iZXI7XG4gICAgICAgIHRoaXMub3JpZ2luYWxTdGFydENvbHVtbiA9IG9yaWdpbmFsU3RhcnRDb2x1bW47XG4gICAgICAgIHRoaXMub3JpZ2luYWxFbmRMaW5lTnVtYmVyID0gb3JpZ2luYWxFbmRMaW5lTnVtYmVyO1xuICAgICAgICB0aGlzLm9yaWdpbmFsRW5kQ29sdW1uID0gb3JpZ2luYWxFbmRDb2x1bW47XG4gICAgICAgIHRoaXMubW9kaWZpZWRTdGFydExpbmVOdW1iZXIgPSBtb2RpZmllZFN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdGhpcy5tb2RpZmllZFN0YXJ0Q29sdW1uID0gbW9kaWZpZWRTdGFydENvbHVtbjtcbiAgICAgICAgdGhpcy5tb2RpZmllZEVuZExpbmVOdW1iZXIgPSBtb2RpZmllZEVuZExpbmVOdW1iZXI7XG4gICAgICAgIHRoaXMubW9kaWZpZWRFbmRDb2x1bW4gPSBtb2RpZmllZEVuZENvbHVtbjtcbiAgICB9XG4gICAgQ2hhckNoYW5nZS5jcmVhdGVGcm9tRGlmZkNoYW5nZSA9IGZ1bmN0aW9uIChkaWZmQ2hhbmdlLCBvcmlnaW5hbENoYXJTZXF1ZW5jZSwgbW9kaWZpZWRDaGFyU2VxdWVuY2UpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgb3JpZ2luYWxTdGFydENvbHVtbjtcbiAgICAgICAgdmFyIG9yaWdpbmFsRW5kTGluZU51bWJlcjtcbiAgICAgICAgdmFyIG9yaWdpbmFsRW5kQ29sdW1uO1xuICAgICAgICB2YXIgbW9kaWZpZWRTdGFydExpbmVOdW1iZXI7XG4gICAgICAgIHZhciBtb2RpZmllZFN0YXJ0Q29sdW1uO1xuICAgICAgICB2YXIgbW9kaWZpZWRFbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgbW9kaWZpZWRFbmRDb2x1bW47XG4gICAgICAgIGlmIChkaWZmQ2hhbmdlLm9yaWdpbmFsTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IDA7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0Q29sdW1uID0gMDtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kTGluZU51bWJlciA9IDA7XG4gICAgICAgICAgICBvcmlnaW5hbEVuZENvbHVtbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IG9yaWdpbmFsQ2hhclNlcXVlbmNlLmdldFN0YXJ0TGluZU51bWJlcihkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQpO1xuICAgICAgICAgICAgb3JpZ2luYWxTdGFydENvbHVtbiA9IG9yaWdpbmFsQ2hhclNlcXVlbmNlLmdldFN0YXJ0Q29sdW1uKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCk7XG4gICAgICAgICAgICBvcmlnaW5hbEVuZExpbmVOdW1iZXIgPSBvcmlnaW5hbENoYXJTZXF1ZW5jZS5nZXRFbmRMaW5lTnVtYmVyKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggLSAxKTtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kQ29sdW1uID0gb3JpZ2luYWxDaGFyU2VxdWVuY2UuZ2V0RW5kQ29sdW1uKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlmZkNoYW5nZS5tb2RpZmllZExlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXIgPSAwO1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydENvbHVtbiA9IDA7XG4gICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXIgPSAwO1xuICAgICAgICAgICAgbW9kaWZpZWRFbmRDb2x1bW4gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXIgPSBtb2RpZmllZENoYXJTZXF1ZW5jZS5nZXRTdGFydExpbmVOdW1iZXIoZGlmZkNoYW5nZS5tb2RpZmllZFN0YXJ0KTtcbiAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRDb2x1bW4gPSBtb2RpZmllZENoYXJTZXF1ZW5jZS5nZXRTdGFydENvbHVtbihkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQpO1xuICAgICAgICAgICAgbW9kaWZpZWRFbmRMaW5lTnVtYmVyID0gbW9kaWZpZWRDaGFyU2VxdWVuY2UuZ2V0RW5kTGluZU51bWJlcihkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBkaWZmQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBtb2RpZmllZEVuZENvbHVtbiA9IG1vZGlmaWVkQ2hhclNlcXVlbmNlLmdldEVuZENvbHVtbihkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBkaWZmQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDaGFyQ2hhbmdlKG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBvcmlnaW5hbEVuZExpbmVOdW1iZXIsIG9yaWdpbmFsRW5kQ29sdW1uLCBtb2RpZmllZFN0YXJ0TGluZU51bWJlciwgbW9kaWZpZWRTdGFydENvbHVtbiwgbW9kaWZpZWRFbmRMaW5lTnVtYmVyLCBtb2RpZmllZEVuZENvbHVtbik7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hhckNoYW5nZTtcbn0oKSk7XG5mdW5jdGlvbiBwb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzKHJhd0NoYW5nZXMpIHtcbiAgICBpZiAocmF3Q2hhbmdlcy5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm4gcmF3Q2hhbmdlcztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IFtyYXdDaGFuZ2VzWzBdXTtcbiAgICB2YXIgcHJldkNoYW5nZSA9IHJlc3VsdFswXTtcbiAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gcmF3Q2hhbmdlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgY3VyckNoYW5nZSA9IHJhd0NoYW5nZXNbaV07XG4gICAgICAgIHZhciBvcmlnaW5hbE1hdGNoaW5nTGVuZ3RoID0gY3VyckNoYW5nZS5vcmlnaW5hbFN0YXJ0IC0gKHByZXZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIHByZXZDaGFuZ2Uub3JpZ2luYWxMZW5ndGgpO1xuICAgICAgICB2YXIgbW9kaWZpZWRNYXRjaGluZ0xlbmd0aCA9IGN1cnJDaGFuZ2UubW9kaWZpZWRTdGFydCAtIChwcmV2Q2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBwcmV2Q2hhbmdlLm1vZGlmaWVkTGVuZ3RoKTtcbiAgICAgICAgLy8gQm90aCBvZiB0aGUgYWJvdmUgc2hvdWxkIGJlIGVxdWFsLCBidXQgdGhlIGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSBtYXkgcHJldmVudCB0aGlzIGZyb20gYmVpbmcgdHJ1ZVxuICAgICAgICB2YXIgbWF0Y2hpbmdMZW5ndGggPSBNYXRoLm1pbihvcmlnaW5hbE1hdGNoaW5nTGVuZ3RoLCBtb2RpZmllZE1hdGNoaW5nTGVuZ3RoKTtcbiAgICAgICAgaWYgKG1hdGNoaW5nTGVuZ3RoIDwgTUlOSU1VTV9NQVRDSElOR19DSEFSQUNURVJfTEVOR1RIKSB7XG4gICAgICAgICAgICAvLyBNZXJnZSB0aGUgY3VycmVudCBjaGFuZ2UgaW50byB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgICAgICBwcmV2Q2hhbmdlLm9yaWdpbmFsTGVuZ3RoID0gKGN1cnJDaGFuZ2Uub3JpZ2luYWxTdGFydCArIGN1cnJDaGFuZ2Uub3JpZ2luYWxMZW5ndGgpIC0gcHJldkNoYW5nZS5vcmlnaW5hbFN0YXJ0O1xuICAgICAgICAgICAgcHJldkNoYW5nZS5tb2RpZmllZExlbmd0aCA9IChjdXJyQ2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBjdXJyQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoKSAtIHByZXZDaGFuZ2UubW9kaWZpZWRTdGFydDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY3VycmVudCBjaGFuZ2VcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJDaGFuZ2UpO1xuICAgICAgICAgICAgcHJldkNoYW5nZSA9IGN1cnJDaGFuZ2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciBMaW5lQ2hhbmdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpbmVDaGFuZ2Uob3JpZ2luYWxTdGFydExpbmVOdW1iZXIsIG9yaWdpbmFsRW5kTGluZU51bWJlciwgbW9kaWZpZWRTdGFydExpbmVOdW1iZXIsIG1vZGlmaWVkRW5kTGluZU51bWJlciwgY2hhckNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB0aGlzLm9yaWdpbmFsRW5kTGluZU51bWJlciA9IG9yaWdpbmFsRW5kTGluZU51bWJlcjtcbiAgICAgICAgdGhpcy5tb2RpZmllZFN0YXJ0TGluZU51bWJlciA9IG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB0aGlzLm1vZGlmaWVkRW5kTGluZU51bWJlciA9IG1vZGlmaWVkRW5kTGluZU51bWJlcjtcbiAgICAgICAgdGhpcy5jaGFyQ2hhbmdlcyA9IGNoYXJDaGFuZ2VzO1xuICAgIH1cbiAgICBMaW5lQ2hhbmdlLmNyZWF0ZUZyb21EaWZmUmVzdWx0ID0gZnVuY3Rpb24gKHNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlLCBkaWZmQ2hhbmdlLCBvcmlnaW5hbExpbmVTZXF1ZW5jZSwgbW9kaWZpZWRMaW5lU2VxdWVuY2UsIGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSwgc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzLCBzaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbFN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdmFyIG9yaWdpbmFsRW5kTGluZU51bWJlcjtcbiAgICAgICAgdmFyIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgbW9kaWZpZWRFbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgY2hhckNoYW5nZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChkaWZmQ2hhbmdlLm9yaWdpbmFsTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IG9yaWdpbmFsTGluZVNlcXVlbmNlLmdldFN0YXJ0TGluZU51bWJlcihkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQpIC0gMTtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kTGluZU51bWJlciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IG9yaWdpbmFsTGluZVNlcXVlbmNlLmdldFN0YXJ0TGluZU51bWJlcihkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQpO1xuICAgICAgICAgICAgb3JpZ2luYWxFbmRMaW5lTnVtYmVyID0gb3JpZ2luYWxMaW5lU2VxdWVuY2UuZ2V0RW5kTGluZU51bWJlcihkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQgKyBkaWZmQ2hhbmdlLm9yaWdpbmFsTGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpZmZDaGFuZ2UubW9kaWZpZWRMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyID0gbW9kaWZpZWRMaW5lU2VxdWVuY2UuZ2V0U3RhcnRMaW5lTnVtYmVyKGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCkgLSAxO1xuICAgICAgICAgICAgbW9kaWZpZWRFbmRMaW5lTnVtYmVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyID0gbW9kaWZpZWRMaW5lU2VxdWVuY2UuZ2V0U3RhcnRMaW5lTnVtYmVyKGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCk7XG4gICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXIgPSBtb2RpZmllZExpbmVTZXF1ZW5jZS5nZXRFbmRMaW5lTnVtYmVyKGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCArIGRpZmZDaGFuZ2UubW9kaWZpZWRMZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzICYmIGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggIT09IDAgJiYgZGlmZkNoYW5nZS5tb2RpZmllZExlbmd0aCAhPT0gMCAmJiBjb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUoKSkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsQ2hhclNlcXVlbmNlID0gb3JpZ2luYWxMaW5lU2VxdWVuY2UuZ2V0Q2hhclNlcXVlbmNlKHNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlLCBkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQsIGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZENoYXJTZXF1ZW5jZSA9IG1vZGlmaWVkTGluZVNlcXVlbmNlLmdldENoYXJTZXF1ZW5jZShzaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSwgZGlmZkNoYW5nZS5tb2RpZmllZFN0YXJ0LCBkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBkaWZmQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB2YXIgcmF3Q2hhbmdlcyA9IGNvbXB1dGVEaWZmKG9yaWdpbmFsQ2hhclNlcXVlbmNlLCBtb2RpZmllZENoYXJTZXF1ZW5jZSwgY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgcmF3Q2hhbmdlcyA9IHBvc3RQcm9jZXNzQ2hhckNoYW5nZXMocmF3Q2hhbmdlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFyQ2hhbmdlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aF8yID0gcmF3Q2hhbmdlcy5sZW5ndGg7IGkgPCBsZW5ndGhfMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hhckNoYW5nZXMucHVzaChDaGFyQ2hhbmdlLmNyZWF0ZUZyb21EaWZmQ2hhbmdlKHJhd0NoYW5nZXNbaV0sIG9yaWdpbmFsQ2hhclNlcXVlbmNlLCBtb2RpZmllZENoYXJTZXF1ZW5jZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgTGluZUNoYW5nZShvcmlnaW5hbFN0YXJ0TGluZU51bWJlciwgb3JpZ2luYWxFbmRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0TGluZU51bWJlciwgbW9kaWZpZWRFbmRMaW5lTnVtYmVyLCBjaGFyQ2hhbmdlcyk7XG4gICAgfTtcbiAgICByZXR1cm4gTGluZUNoYW5nZTtcbn0oKSk7XG52YXIgRGlmZkNvbXB1dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERpZmZDb21wdXRlcihvcmlnaW5hbExpbmVzLCBtb2RpZmllZExpbmVzLCBvcHRzKSB7XG4gICAgICAgIHRoaXMuc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzID0gb3B0cy5zaG91bGRDb21wdXRlQ2hhckNoYW5nZXM7XG4gICAgICAgIHRoaXMuc2hvdWxkUG9zdFByb2Nlc3NDaGFyQ2hhbmdlcyA9IG9wdHMuc2hvdWxkUG9zdFByb2Nlc3NDaGFyQ2hhbmdlcztcbiAgICAgICAgdGhpcy5zaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSA9IG9wdHMuc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2U7XG4gICAgICAgIHRoaXMuc2hvdWxkTWFrZVByZXR0eURpZmYgPSBvcHRzLnNob3VsZE1ha2VQcmV0dHlEaWZmO1xuICAgICAgICB0aGlzLm1heGltdW1SdW5UaW1lTXMgPSBNQVhJTVVNX1JVTl9USU1FO1xuICAgICAgICB0aGlzLm9yaWdpbmFsTGluZXMgPSBvcmlnaW5hbExpbmVzO1xuICAgICAgICB0aGlzLm1vZGlmaWVkTGluZXMgPSBtb2RpZmllZExpbmVzO1xuICAgICAgICB0aGlzLm9yaWdpbmFsID0gbmV3IExpbmVNYXJrZXJTZXF1ZW5jZShvcmlnaW5hbExpbmVzKTtcbiAgICAgICAgdGhpcy5tb2RpZmllZCA9IG5ldyBMaW5lTWFya2VyU2VxdWVuY2UobW9kaWZpZWRMaW5lcyk7XG4gICAgICAgIHRoaXMuY29tcHV0YXRpb25TdGFydFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBEaWZmQ29tcHV0ZXIucHJvdG90eXBlLmNvbXB1dGVEaWZmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcmlnaW5hbC5nZXRMZW5ndGgoKSA9PT0gMSAmJiB0aGlzLm9yaWdpbmFsLmdldEVsZW1lbnRBdEluZGV4KDApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZW1wdHkgb3JpZ2luYWwgPT4gZmFzdCBwYXRoXG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdGFydExpbmVOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRW5kTGluZU51bWJlcjogMSxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkRW5kTGluZU51bWJlcjogdGhpcy5tb2RpZmllZC5nZXRMZW5ndGgoKSxcbiAgICAgICAgICAgICAgICAgICAgY2hhckNoYW5nZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRFbmRDb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRFbmRMaW5lTnVtYmVyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRDb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFbmRDb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFbmRMaW5lTnVtYmVyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRDb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdGFydExpbmVOdW1iZXI6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW9kaWZpZWQuZ2V0TGVuZ3RoKCkgPT09IDEgJiYgdGhpcy5tb2RpZmllZC5nZXRFbGVtZW50QXRJbmRleCgwKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGVtcHR5IG1vZGlmaWVkID0+IGZhc3QgcGF0aFxuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyOiAxLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVuZExpbmVOdW1iZXI6IHRoaXMub3JpZ2luYWwuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyOiAxLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJDaGFuZ2VzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkRW5kQ29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkRW5kTGluZU51bWJlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFN0YXJ0Q29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRW5kQ29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRW5kTGluZU51bWJlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0Q29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcHV0YXRpb25TdGFydFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgcmF3Q2hhbmdlcyA9IGNvbXB1dGVEaWZmKHRoaXMub3JpZ2luYWwsIHRoaXMubW9kaWZpZWQsIHRoaXMuX2NvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZS5iaW5kKHRoaXMpLCB0aGlzLnNob3VsZE1ha2VQcmV0dHlEaWZmKTtcbiAgICAgICAgLy8gVGhlIGRpZmYgaXMgYWx3YXlzIGNvbXB1dGVkIHdpdGggaWdub3JpbmcgdHJpbSB3aGl0ZXNwYWNlXG4gICAgICAgIC8vIFRoaXMgZW5zdXJlcyB3ZSBnZXQgdGhlIHByZXR0aWVzdCBkaWZmXG4gICAgICAgIGlmICh0aGlzLnNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlKSB7XG4gICAgICAgICAgICB2YXIgbGluZUNoYW5nZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGhfMyA9IHJhd0NoYW5nZXMubGVuZ3RoOyBpIDwgbGVuZ3RoXzM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmVDaGFuZ2VzLnB1c2goTGluZUNoYW5nZS5jcmVhdGVGcm9tRGlmZlJlc3VsdCh0aGlzLnNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlLCByYXdDaGFuZ2VzW2ldLCB0aGlzLm9yaWdpbmFsLCB0aGlzLm1vZGlmaWVkLCB0aGlzLl9jb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUuYmluZCh0aGlzKSwgdGhpcy5zaG91bGRDb21wdXRlQ2hhckNoYW5nZXMsIHRoaXMuc2hvdWxkUG9zdFByb2Nlc3NDaGFyQ2hhbmdlcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpbmVDaGFuZ2VzO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5lZWQgdG8gcG9zdC1wcm9jZXNzIGFuZCBpbnRyb2R1Y2UgY2hhbmdlcyB3aGVyZSB0aGUgdHJpbSB3aGl0ZXNwYWNlIGlzIGRpZmZlcmVudFxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgYXJlIGxvb3Bpbmcgc3RhcnRpbmcgYXQgLTEgdG8gYWxzbyBjb3ZlciB0aGUgbGluZXMgYmVmb3JlIHRoZSBmaXJzdCBjaGFuZ2VcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgb3JpZ2luYWxMaW5lSW5kZXggPSAwO1xuICAgICAgICB2YXIgbW9kaWZpZWRMaW5lSW5kZXggPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gLTEgLyogISEhISAqLywgbGVuID0gcmF3Q2hhbmdlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIG5leHRDaGFuZ2UgPSAoaSArIDEgPCBsZW4gPyByYXdDaGFuZ2VzW2kgKyAxXSA6IG51bGwpO1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3RvcCA9IChuZXh0Q2hhbmdlID8gbmV4dENoYW5nZS5vcmlnaW5hbFN0YXJ0IDogdGhpcy5vcmlnaW5hbExpbmVzLmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRTdG9wID0gKG5leHRDaGFuZ2UgPyBuZXh0Q2hhbmdlLm1vZGlmaWVkU3RhcnQgOiB0aGlzLm1vZGlmaWVkTGluZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbExpbmVJbmRleCA8IG9yaWdpbmFsU3RvcCAmJiBtb2RpZmllZExpbmVJbmRleCA8IG1vZGlmaWVkU3RvcCkge1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbExpbmUgPSB0aGlzLm9yaWdpbmFsTGluZXNbb3JpZ2luYWxMaW5lSW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZExpbmUgPSB0aGlzLm1vZGlmaWVkTGluZXNbbW9kaWZpZWRMaW5lSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbExpbmUgIT09IG1vZGlmaWVkTGluZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBsaW5lcyBkaWZmZXIgb25seSBpbiB0cmltIHdoaXRlc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGxlYWRpbmcgd2hpdGVzcGFjZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxTdGFydENvbHVtbiA9IExpbmVNYXJrZXJTZXF1ZW5jZS5fZ2V0Rmlyc3ROb25CbGFua0NvbHVtbihvcmlnaW5hbExpbmUsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkU3RhcnRDb2x1bW4gPSBMaW5lTWFya2VyU2VxdWVuY2UuX2dldEZpcnN0Tm9uQmxhbmtDb2x1bW4obW9kaWZpZWRMaW5lLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbFN0YXJ0Q29sdW1uID4gMSAmJiBtb2RpZmllZFN0YXJ0Q29sdW1uID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbENoYXIgPSBvcmlnaW5hbExpbmUuY2hhckNvZGVBdChvcmlnaW5hbFN0YXJ0Q29sdW1uIC0gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkQ2hhciA9IG1vZGlmaWVkTGluZS5jaGFyQ29kZUF0KG1vZGlmaWVkU3RhcnRDb2x1bW4gLSAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxDaGFyICE9PSBtb2RpZmllZENoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRDb2x1bW4tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFN0YXJ0Q29sdW1uLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTdGFydENvbHVtbiA+IDEgfHwgbW9kaWZpZWRTdGFydENvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdXNoVHJpbVdoaXRlc3BhY2VDaGFyQ2hhbmdlKHJlc3VsdCwgb3JpZ2luYWxMaW5lSW5kZXggKyAxLCAxLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBtb2RpZmllZExpbmVJbmRleCArIDEsIDEsIG1vZGlmaWVkU3RhcnRDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoZSB0cmFpbGluZyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbEVuZENvbHVtbiA9IExpbmVNYXJrZXJTZXF1ZW5jZS5fZ2V0TGFzdE5vbkJsYW5rQ29sdW1uKG9yaWdpbmFsTGluZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRFbmRDb2x1bW4gPSBMaW5lTWFya2VyU2VxdWVuY2UuX2dldExhc3ROb25CbGFua0NvbHVtbihtb2RpZmllZExpbmUsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsTWF4Q29sdW1uID0gb3JpZ2luYWxMaW5lLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRNYXhDb2x1bW4gPSBtb2RpZmllZExpbmUubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbEVuZENvbHVtbiA8IG9yaWdpbmFsTWF4Q29sdW1uICYmIG1vZGlmaWVkRW5kQ29sdW1uIDwgbW9kaWZpZWRNYXhDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxDaGFyID0gb3JpZ2luYWxMaW5lLmNoYXJDb2RlQXQob3JpZ2luYWxFbmRDb2x1bW4gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRDaGFyID0gb3JpZ2luYWxMaW5lLmNoYXJDb2RlQXQobW9kaWZpZWRFbmRDb2x1bW4gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxDaGFyICE9PSBtb2RpZmllZENoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRW5kQ29sdW1uKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRFbmRDb2x1bW4rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEVuZENvbHVtbiA8IG9yaWdpbmFsTWF4Q29sdW1uIHx8IG1vZGlmaWVkRW5kQ29sdW1uIDwgbW9kaWZpZWRNYXhDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdXNoVHJpbVdoaXRlc3BhY2VDaGFyQ2hhbmdlKHJlc3VsdCwgb3JpZ2luYWxMaW5lSW5kZXggKyAxLCBvcmlnaW5hbEVuZENvbHVtbiwgb3JpZ2luYWxNYXhDb2x1bW4sIG1vZGlmaWVkTGluZUluZGV4ICsgMSwgbW9kaWZpZWRFbmRDb2x1bW4sIG1vZGlmaWVkTWF4Q29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcmlnaW5hbExpbmVJbmRleCsrO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkTGluZUluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dENoYW5nZSkge1xuICAgICAgICAgICAgICAgIC8vIEVtaXQgdGhlIGFjdHVhbCBjaGFuZ2VcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChMaW5lQ2hhbmdlLmNyZWF0ZUZyb21EaWZmUmVzdWx0KHRoaXMuc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2UsIG5leHRDaGFuZ2UsIHRoaXMub3JpZ2luYWwsIHRoaXMubW9kaWZpZWQsIHRoaXMuX2NvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZS5iaW5kKHRoaXMpLCB0aGlzLnNob3VsZENvbXB1dGVDaGFyQ2hhbmdlcywgdGhpcy5zaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzKSk7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxMaW5lSW5kZXggKz0gbmV4dENoYW5nZS5vcmlnaW5hbExlbmd0aDtcbiAgICAgICAgICAgICAgICBtb2RpZmllZExpbmVJbmRleCArPSBuZXh0Q2hhbmdlLm1vZGlmaWVkTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBEaWZmQ29tcHV0ZXIucHJvdG90eXBlLl9wdXNoVHJpbVdoaXRlc3BhY2VDaGFyQ2hhbmdlID0gZnVuY3Rpb24gKHJlc3VsdCwgb3JpZ2luYWxMaW5lTnVtYmVyLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBvcmlnaW5hbEVuZENvbHVtbiwgbW9kaWZpZWRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0Q29sdW1uLCBtb2RpZmllZEVuZENvbHVtbikge1xuICAgICAgICBpZiAodGhpcy5fbWVyZ2VUcmltV2hpdGVzcGFjZUNoYXJDaGFuZ2UocmVzdWx0LCBvcmlnaW5hbExpbmVOdW1iZXIsIG9yaWdpbmFsU3RhcnRDb2x1bW4sIG9yaWdpbmFsRW5kQ29sdW1uLCBtb2RpZmllZExpbmVOdW1iZXIsIG1vZGlmaWVkU3RhcnRDb2x1bW4sIG1vZGlmaWVkRW5kQ29sdW1uKSkge1xuICAgICAgICAgICAgLy8gTWVyZ2VkIGludG8gcHJldmlvdXNcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2hhckNoYW5nZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZENvbXB1dGVDaGFyQ2hhbmdlcykge1xuICAgICAgICAgICAgY2hhckNoYW5nZXMgPSBbbmV3IENoYXJDaGFuZ2Uob3JpZ2luYWxMaW5lTnVtYmVyLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBvcmlnaW5hbExpbmVOdW1iZXIsIG9yaWdpbmFsRW5kQ29sdW1uLCBtb2RpZmllZExpbmVOdW1iZXIsIG1vZGlmaWVkU3RhcnRDb2x1bW4sIG1vZGlmaWVkTGluZU51bWJlciwgbW9kaWZpZWRFbmRDb2x1bW4pXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChuZXcgTGluZUNoYW5nZShvcmlnaW5hbExpbmVOdW1iZXIsIG9yaWdpbmFsTGluZU51bWJlciwgbW9kaWZpZWRMaW5lTnVtYmVyLCBtb2RpZmllZExpbmVOdW1iZXIsIGNoYXJDaGFuZ2VzKSk7XG4gICAgfTtcbiAgICBEaWZmQ29tcHV0ZXIucHJvdG90eXBlLl9tZXJnZVRyaW1XaGl0ZXNwYWNlQ2hhckNoYW5nZSA9IGZ1bmN0aW9uIChyZXN1bHQsIG9yaWdpbmFsTGluZU51bWJlciwgb3JpZ2luYWxTdGFydENvbHVtbiwgb3JpZ2luYWxFbmRDb2x1bW4sIG1vZGlmaWVkTGluZU51bWJlciwgbW9kaWZpZWRTdGFydENvbHVtbiwgbW9kaWZpZWRFbmRDb2x1bW4pIHtcbiAgICAgICAgdmFyIGxlbiA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJldkNoYW5nZSA9IHJlc3VsdFtsZW4gLSAxXTtcbiAgICAgICAgaWYgKHByZXZDaGFuZ2Uub3JpZ2luYWxFbmRMaW5lTnVtYmVyID09PSAwIHx8IHByZXZDaGFuZ2UubW9kaWZpZWRFbmRMaW5lTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBtZXJnZSB3aXRoIGluc2VydHMvZGVsZXRlc1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2Q2hhbmdlLm9yaWdpbmFsRW5kTGluZU51bWJlciArIDEgPT09IG9yaWdpbmFsTGluZU51bWJlciAmJiBwcmV2Q2hhbmdlLm1vZGlmaWVkRW5kTGluZU51bWJlciArIDEgPT09IG1vZGlmaWVkTGluZU51bWJlcikge1xuICAgICAgICAgICAgcHJldkNoYW5nZS5vcmlnaW5hbEVuZExpbmVOdW1iZXIgPSBvcmlnaW5hbExpbmVOdW1iZXI7XG4gICAgICAgICAgICBwcmV2Q2hhbmdlLm1vZGlmaWVkRW5kTGluZU51bWJlciA9IG1vZGlmaWVkTGluZU51bWJlcjtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZENvbXB1dGVDaGFyQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHByZXZDaGFuZ2UuY2hhckNoYW5nZXMucHVzaChuZXcgQ2hhckNoYW5nZShvcmlnaW5hbExpbmVOdW1iZXIsIG9yaWdpbmFsU3RhcnRDb2x1bW4sIG9yaWdpbmFsTGluZU51bWJlciwgb3JpZ2luYWxFbmRDb2x1bW4sIG1vZGlmaWVkTGluZU51bWJlciwgbW9kaWZpZWRTdGFydENvbHVtbiwgbW9kaWZpZWRMaW5lTnVtYmVyLCBtb2RpZmllZEVuZENvbHVtbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRGlmZkNvbXB1dGVyLnByb3RvdHlwZS5fY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5tYXhpbXVtUnVuVGltZU1zID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm93ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIG5vdyAtIHRoaXMuY29tcHV0YXRpb25TdGFydFRpbWUgPCB0aGlzLm1heGltdW1SdW5UaW1lTXM7XG4gICAgfTtcbiAgICByZXR1cm4gRGlmZkNvbXB1dGVyO1xufSgpKTtcbmV4cG9ydCB7IERpZmZDb21wdXRlciB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL2NvcmUvcG9zaXRpb24uanMnO1xuaW1wb3J0IHsgUHJlZml4U3VtQ29tcHV0ZXIgfSBmcm9tICcuLi92aWV3TW9kZWwvcHJlZml4U3VtQ29tcHV0ZXIuanMnO1xudmFyIE1pcnJvclRleHRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNaXJyb3JUZXh0TW9kZWwodXJpLCBsaW5lcywgZW9sLCB2ZXJzaW9uSWQpIHtcbiAgICAgICAgdGhpcy5fdXJpID0gdXJpO1xuICAgICAgICB0aGlzLl9saW5lcyA9IGxpbmVzO1xuICAgICAgICB0aGlzLl9lb2wgPSBlb2w7XG4gICAgICAgIHRoaXMuX3ZlcnNpb25JZCA9IHZlcnNpb25JZDtcbiAgICAgICAgdGhpcy5fbGluZVN0YXJ0cyA9IG51bGw7XG4gICAgfVxuICAgIE1pcnJvclRleHRNb2RlbC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbGluZXMubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIE1pcnJvclRleHRNb2RlbC5wcm90b3R5cGUuZ2V0VGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzLmpvaW4odGhpcy5fZW9sKTtcbiAgICB9O1xuICAgIE1pcnJvclRleHRNb2RlbC5wcm90b3R5cGUub25FdmVudHMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5lb2wgJiYgZS5lb2wgIT09IHRoaXMuX2VvbCkge1xuICAgICAgICAgICAgdGhpcy5fZW9sID0gZS5lb2w7XG4gICAgICAgICAgICB0aGlzLl9saW5lU3RhcnRzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgbXkgbGluZXNcbiAgICAgICAgdmFyIGNoYW5nZXMgPSBlLmNoYW5nZXM7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hhbmdlc18xID0gY2hhbmdlczsgX2kgPCBjaGFuZ2VzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gY2hhbmdlc18xW19pXTtcbiAgICAgICAgICAgIHRoaXMuX2FjY2VwdERlbGV0ZVJhbmdlKGNoYW5nZS5yYW5nZSk7XG4gICAgICAgICAgICB0aGlzLl9hY2NlcHRJbnNlcnRUZXh0KG5ldyBQb3NpdGlvbihjaGFuZ2UucmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLCBjaGFuZ2UucmFuZ2Uuc3RhcnRDb2x1bW4pLCBjaGFuZ2UudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdmVyc2lvbklkID0gZS52ZXJzaW9uSWQ7XG4gICAgfTtcbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLl9lbnN1cmVMaW5lU3RhcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xpbmVTdGFydHMpIHtcbiAgICAgICAgICAgIHZhciBlb2xMZW5ndGggPSB0aGlzLl9lb2wubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGxpbmVzTGVuZ3RoID0gdGhpcy5fbGluZXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGxpbmVTdGFydFZhbHVlcyA9IG5ldyBVaW50MzJBcnJheShsaW5lc0xlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lU3RhcnRWYWx1ZXNbaV0gPSB0aGlzLl9saW5lc1tpXS5sZW5ndGggKyBlb2xMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9saW5lU3RhcnRzID0gbmV3IFByZWZpeFN1bUNvbXB1dGVyKGxpbmVTdGFydFZhbHVlcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsbCBjaGFuZ2VzIHRvIGEgbGluZSdzIHRleHQgZ28gdGhyb3VnaCB0aGlzIG1ldGhvZFxuICAgICAqL1xuICAgIE1pcnJvclRleHRNb2RlbC5wcm90b3R5cGUuX3NldExpbmVUZXh0ID0gZnVuY3Rpb24gKGxpbmVJbmRleCwgbmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGluZXNbbGluZUluZGV4XSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAodGhpcy5fbGluZVN0YXJ0cykge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHByZWZpeCBzdW1cbiAgICAgICAgICAgIHRoaXMuX2xpbmVTdGFydHMuY2hhbmdlVmFsdWUobGluZUluZGV4LCB0aGlzLl9saW5lc1tsaW5lSW5kZXhdLmxlbmd0aCArIHRoaXMuX2VvbC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLl9hY2NlcHREZWxldGVSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICBpZiAocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyID09PSByYW5nZS5lbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAocmFuZ2Uuc3RhcnRDb2x1bW4gPT09IHJhbmdlLmVuZENvbHVtbikge1xuICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gZGVsZXRlXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVsZXRlIHRleHQgb24gdGhlIGFmZmVjdGVkIGxpbmVcbiAgICAgICAgICAgIHRoaXMuX3NldExpbmVUZXh0KHJhbmdlLnN0YXJ0TGluZU51bWJlciAtIDEsIHRoaXMuX2xpbmVzW3JhbmdlLnN0YXJ0TGluZU51bWJlciAtIDFdLnN1YnN0cmluZygwLCByYW5nZS5zdGFydENvbHVtbiAtIDEpXG4gICAgICAgICAgICAgICAgKyB0aGlzLl9saW5lc1tyYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxXS5zdWJzdHJpbmcocmFuZ2UuZW5kQ29sdW1uIC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRha2UgcmVtYWluaW5nIHRleHQgb24gbGFzdCBsaW5lIGFuZCBhcHBlbmQgaXQgdG8gcmVtYWluaW5nIHRleHQgb24gZmlyc3QgbGluZVxuICAgICAgICB0aGlzLl9zZXRMaW5lVGV4dChyYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxLCB0aGlzLl9saW5lc1tyYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxXS5zdWJzdHJpbmcoMCwgcmFuZ2Uuc3RhcnRDb2x1bW4gLSAxKVxuICAgICAgICAgICAgKyB0aGlzLl9saW5lc1tyYW5nZS5lbmRMaW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKHJhbmdlLmVuZENvbHVtbiAtIDEpKTtcbiAgICAgICAgLy8gRGVsZXRlIG1pZGRsZSBsaW5lc1xuICAgICAgICB0aGlzLl9saW5lcy5zcGxpY2UocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLCByYW5nZS5lbmRMaW5lTnVtYmVyIC0gcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyKTtcbiAgICAgICAgaWYgKHRoaXMuX2xpbmVTdGFydHMpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcmVmaXggc3VtXG4gICAgICAgICAgICB0aGlzLl9saW5lU3RhcnRzLnJlbW92ZVZhbHVlcyhyYW5nZS5zdGFydExpbmVOdW1iZXIsIHJhbmdlLmVuZExpbmVOdW1iZXIgLSByYW5nZS5zdGFydExpbmVOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLl9hY2NlcHRJbnNlcnRUZXh0ID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBpbnNlcnRUZXh0KSB7XG4gICAgICAgIGlmIChpbnNlcnRUZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTm90aGluZyB0byBpbnNlcnRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5zZXJ0TGluZXMgPSBpbnNlcnRUZXh0LnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pO1xuICAgICAgICBpZiAoaW5zZXJ0TGluZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAvLyBJbnNlcnRpbmcgdGV4dCBvbiBvbmUgbGluZVxuICAgICAgICAgICAgdGhpcy5fc2V0TGluZVRleHQocG9zaXRpb24ubGluZU51bWJlciAtIDEsIHRoaXMuX2xpbmVzW3Bvc2l0aW9uLmxpbmVOdW1iZXIgLSAxXS5zdWJzdHJpbmcoMCwgcG9zaXRpb24uY29sdW1uIC0gMSlcbiAgICAgICAgICAgICAgICArIGluc2VydExpbmVzWzBdXG4gICAgICAgICAgICAgICAgKyB0aGlzLl9saW5lc1twb3NpdGlvbi5saW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKHBvc2l0aW9uLmNvbHVtbiAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgb3ZlcmZsb3dpbmcgdGV4dCBmcm9tIGZpcnN0IGxpbmUgdG8gdGhlIGVuZCBvZiB0ZXh0IHRvIGluc2VydFxuICAgICAgICBpbnNlcnRMaW5lc1tpbnNlcnRMaW5lcy5sZW5ndGggLSAxXSArPSB0aGlzLl9saW5lc1twb3NpdGlvbi5saW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKHBvc2l0aW9uLmNvbHVtbiAtIDEpO1xuICAgICAgICAvLyBEZWxldGUgb3ZlcmZsb3dpbmcgdGV4dCBmcm9tIGZpcnN0IGxpbmUgYW5kIGluc2VydCB0ZXh0IG9uIGZpcnN0IGxpbmVcbiAgICAgICAgdGhpcy5fc2V0TGluZVRleHQocG9zaXRpb24ubGluZU51bWJlciAtIDEsIHRoaXMuX2xpbmVzW3Bvc2l0aW9uLmxpbmVOdW1iZXIgLSAxXS5zdWJzdHJpbmcoMCwgcG9zaXRpb24uY29sdW1uIC0gMSlcbiAgICAgICAgICAgICsgaW5zZXJ0TGluZXNbMF0pO1xuICAgICAgICAvLyBJbnNlcnQgbmV3IGxpbmVzICYgc3RvcmUgbGVuZ3Roc1xuICAgICAgICB2YXIgbmV3TGVuZ3RocyA9IG5ldyBVaW50MzJBcnJheShpbnNlcnRMaW5lcy5sZW5ndGggLSAxKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBpbnNlcnRMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbGluZXMuc3BsaWNlKHBvc2l0aW9uLmxpbmVOdW1iZXIgKyBpIC0gMSwgMCwgaW5zZXJ0TGluZXNbaV0pO1xuICAgICAgICAgICAgbmV3TGVuZ3Roc1tpIC0gMV0gPSBpbnNlcnRMaW5lc1tpXS5sZW5ndGggKyB0aGlzLl9lb2wubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9saW5lU3RhcnRzKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgcHJlZml4IHN1bVxuICAgICAgICAgICAgdGhpcy5fbGluZVN0YXJ0cy5pbnNlcnRWYWx1ZXMocG9zaXRpb24ubGluZU51bWJlciwgbmV3TGVuZ3Rocyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNaXJyb3JUZXh0TW9kZWw7XG59KCkpO1xuZXhwb3J0IHsgTWlycm9yVGV4dE1vZGVsIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgVVNVQUxfV09SRF9TRVBBUkFUT1JTID0gJ2B+IUAjJCVeJiooKS09K1t7XX1cXFxcfDs6XFwnXCIsLjw+Lz8nO1xuLyoqXG4gKiBDcmVhdGUgYSB3b3JkIGRlZmluaXRpb24gcmVndWxhciBleHByZXNzaW9uIGJhc2VkIG9uIGRlZmF1bHQgd29yZCBzZXBhcmF0b3JzLlxuICogT3B0aW9uYWxseSBwcm92aWRlIGFsbG93ZWQgc2VwYXJhdG9ycyB0aGF0IHNob3VsZCBiZSBpbmNsdWRlZCBpbiB3b3Jkcy5cbiAqXG4gKiBUaGUgZGVmYXVsdCB3b3VsZCBsb29rIGxpa2UgdGhpczpcbiAqIC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFxAXFwjXFwkXFwlXFxeXFwmXFwqXFwoXFwpXFwtXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXD9cXHNdKykvZ1xuICovXG5mdW5jdGlvbiBjcmVhdGVXb3JkUmVnRXhwKGFsbG93SW5Xb3Jkcykge1xuICAgIGlmIChhbGxvd0luV29yZHMgPT09IHZvaWQgMCkgeyBhbGxvd0luV29yZHMgPSAnJzsgfVxuICAgIHZhciBzb3VyY2UgPSAnKC0/XFxcXGQqXFxcXC5cXFxcZFxcXFx3Kil8KFteJztcbiAgICBmb3IgKHZhciBfaSA9IDAsIFVTVUFMX1dPUkRfU0VQQVJBVE9SU18xID0gVVNVQUxfV09SRF9TRVBBUkFUT1JTOyBfaSA8IFVTVUFMX1dPUkRfU0VQQVJBVE9SU18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgc2VwID0gVVNVQUxfV09SRF9TRVBBUkFUT1JTXzFbX2ldO1xuICAgICAgICBpZiAoYWxsb3dJbldvcmRzLmluZGV4T2Yoc2VwKSA+PSAwKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2UgKz0gJ1xcXFwnICsgc2VwO1xuICAgIH1cbiAgICBzb3VyY2UgKz0gJ1xcXFxzXSspJztcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChzb3VyY2UsICdnJyk7XG59XG4vLyBjYXRjaGVzIG51bWJlcnMgKGluY2x1ZGluZyBmbG9hdGluZyBudW1iZXJzKSBpbiB0aGUgZmlyc3QgZ3JvdXAsIGFuZCBhbHBoYW51bSBpbiB0aGUgc2Vjb25kXG5leHBvcnQgdmFyIERFRkFVTFRfV09SRF9SRUdFWFAgPSBjcmVhdGVXb3JkUmVnRXhwKCk7XG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlVmFsaWRXb3JkRGVmaW5pdGlvbih3b3JkRGVmaW5pdGlvbikge1xuICAgIHZhciByZXN1bHQgPSBERUZBVUxUX1dPUkRfUkVHRVhQO1xuICAgIGlmICh3b3JkRGVmaW5pdGlvbiAmJiAod29yZERlZmluaXRpb24gaW5zdGFuY2VvZiBSZWdFeHApKSB7XG4gICAgICAgIGlmICghd29yZERlZmluaXRpb24uZ2xvYmFsKSB7XG4gICAgICAgICAgICB2YXIgZmxhZ3MgPSAnZyc7XG4gICAgICAgICAgICBpZiAod29yZERlZmluaXRpb24uaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgICAgIGZsYWdzICs9ICdpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3b3JkRGVmaW5pdGlvbi5tdWx0aWxpbmUpIHtcbiAgICAgICAgICAgICAgICBmbGFncyArPSAnbSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod29yZERlZmluaXRpb24udW5pY29kZSkge1xuICAgICAgICAgICAgICAgIGZsYWdzICs9ICd1JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZWdFeHAod29yZERlZmluaXRpb24uc291cmNlLCBmbGFncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSB3b3JkRGVmaW5pdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0V29yZEF0UG9zRmFzdChjb2x1bW4sIHdvcmREZWZpbml0aW9uLCB0ZXh0LCB0ZXh0T2Zmc2V0KSB7XG4gICAgLy8gZmluZCB3aGl0ZXNwYWNlIGVuY2xvc2VkIHRleHQgYXJvdW5kIGNvbHVtbiBhbmQgbWF0Y2ggZnJvbSB0aGVyZVxuICAgIHZhciBwb3MgPSBjb2x1bW4gLSAxIC0gdGV4dE9mZnNldDtcbiAgICB2YXIgc3RhcnQgPSB0ZXh0Lmxhc3RJbmRleE9mKCcgJywgcG9zIC0gMSkgKyAxO1xuICAgIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA9IHN0YXJ0O1xuICAgIHZhciBtYXRjaDtcbiAgICB3aGlsZSAobWF0Y2ggPSB3b3JkRGVmaW5pdGlvbi5leGVjKHRleHQpKSB7XG4gICAgICAgIHZhciBtYXRjaEluZGV4ID0gbWF0Y2guaW5kZXggfHwgMDtcbiAgICAgICAgaWYgKG1hdGNoSW5kZXggPD0gcG9zICYmIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA+PSBwb3MpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd29yZDogbWF0Y2hbMF0sXG4gICAgICAgICAgICAgICAgc3RhcnRDb2x1bW46IHRleHRPZmZzZXQgKyAxICsgbWF0Y2hJbmRleCxcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHRleHRPZmZzZXQgKyAxICsgd29yZERlZmluaXRpb24ubGFzdEluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0V29yZEF0UG9zU2xvdyhjb2x1bW4sIHdvcmREZWZpbml0aW9uLCB0ZXh0LCB0ZXh0T2Zmc2V0KSB7XG4gICAgLy8gbWF0Y2hlcyBhbGwgd29yZHMgc3RhcnRpbmcgYXQgdGhlIGJlZ2lubmluZ1xuICAgIC8vIG9mIHRoZSBpbnB1dCB1bnRpbCBpdCBmaW5kcyBhIG1hdGNoIHRoYXQgZW5jbG9zZXNcbiAgICAvLyB0aGUgZGVzaXJlZCBjb2x1bW4uIHNsb3cgYnV0IGNvcnJlY3RcbiAgICB2YXIgcG9zID0gY29sdW1uIC0gMSAtIHRleHRPZmZzZXQ7XG4gICAgd29yZERlZmluaXRpb24ubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbWF0Y2g7XG4gICAgd2hpbGUgKG1hdGNoID0gd29yZERlZmluaXRpb24uZXhlYyh0ZXh0KSkge1xuICAgICAgICB2YXIgbWF0Y2hJbmRleCA9IG1hdGNoLmluZGV4IHx8IDA7XG4gICAgICAgIGlmIChtYXRjaEluZGV4ID4gcG9zKSB7XG4gICAgICAgICAgICAvLyB8blcgLT4gbWF0Y2hlZCBvbmx5IGFmdGVyIHRoZSBwb3NcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA+PSBwb3MpIHtcbiAgICAgICAgICAgIC8vIFd8VyAtPiBtYXRjaCBlbmNsb3NlcyBwb3NcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd29yZDogbWF0Y2hbMF0sXG4gICAgICAgICAgICAgICAgc3RhcnRDb2x1bW46IHRleHRPZmZzZXQgKyAxICsgbWF0Y2hJbmRleCxcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHRleHRPZmZzZXQgKyAxICsgd29yZERlZmluaXRpb24ubGFzdEluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcmRBdFRleHQoY29sdW1uLCB3b3JkRGVmaW5pdGlvbiwgdGV4dCwgdGV4dE9mZnNldCkge1xuICAgIC8vIGlmIGB3b3Jkc2AgY2FuIGNvbnRhaW4gd2hpdGVzcGFjZSBjaGFyYWN0ZXIgd2UgaGF2ZSB0byB1c2UgdGhlIHNsb3cgdmFyaWFudFxuICAgIC8vIG90aGVyd2lzZSB3ZSB1c2UgdGhlIGZhc3QgdmFyaWFudCBvZiBmaW5kaW5nIGEgd29yZFxuICAgIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG1hdGNoID0gd29yZERlZmluaXRpb24uZXhlYyh0ZXh0KTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyB0b2RvQGpvaCB0aGUgYG1hdGNoYCBjb3VsZCBhbHJlYWR5IGJlIHRoZSAoZmlyc3QpIHdvcmRcbiAgICB2YXIgcmV0ID0gbWF0Y2hbMF0uaW5kZXhPZignICcpID49IDBcbiAgICAgICAgLy8gZGlkIG1hdGNoIGEgd29yZCB3aGljaCBjb250YWlucyBhIHNwYWNlIGNoYXJhY3RlciAtPiB1c2Ugc2xvdyB3b3JkIGZpbmRcbiAgICAgICAgPyBnZXRXb3JkQXRQb3NTbG93KGNvbHVtbiwgd29yZERlZmluaXRpb24sIHRleHQsIHRleHRPZmZzZXQpXG4gICAgICAgIC8vIHNhbmUgd29yZCBkZWZpbml0aW9uIC0+IHVzZSBmYXN0IHdvcmQgZmluZFxuICAgICAgICA6IGdldFdvcmRBdFBvc0Zhc3QoY29sdW1uLCB3b3JkRGVmaW5pdGlvbiwgdGV4dCwgdGV4dE9mZnNldCk7XG4gICAgLy8gYm90aCAoZ2V0V29yZEF0UG9zRmFzdCBhbmQgZ2V0V29yZEF0UG9zU2xvdykgbGVhdmUgdGhlIHdvcmREZWZpbml0aW9uLVJlZ0V4cFxuICAgIC8vIGluIGFuIHVuZGVmaW5lZCBzdGF0ZSBhbmQgdG8gbm90IGNvbmZ1c2Ugb3RoZXIgdXNlcnMgb2YgdGhlIHdvcmREZWZpbml0aW9uXG4gICAgLy8gd2UgcmVzZXQgdGhlIGxhc3RJbmRleFxuICAgIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHJldDtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgQ2hhcmFjdGVyQ2xhc3NpZmllciB9IGZyb20gJy4uL2NvcmUvY2hhcmFjdGVyQ2xhc3NpZmllci5qcyc7XG5pbXBvcnQgeyBVaW50OE1hdHJpeCB9IGZyb20gJy4uL2NvcmUvdWludC5qcyc7XG52YXIgU3RhdGVNYWNoaW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YXRlTWFjaGluZShlZGdlcykge1xuICAgICAgICB2YXIgbWF4Q2hhckNvZGUgPSAwO1xuICAgICAgICB2YXIgbWF4U3RhdGUgPSAwIC8qIEludmFsaWQgKi87XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlZGdlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIF9hID0gZWRnZXNbaV0sIGZyb20gPSBfYVswXSwgY2hDb2RlID0gX2FbMV0sIHRvID0gX2FbMl07XG4gICAgICAgICAgICBpZiAoY2hDb2RlID4gbWF4Q2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICBtYXhDaGFyQ29kZSA9IGNoQ29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tID4gbWF4U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBtYXhTdGF0ZSA9IGZyb207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG8gPiBtYXhTdGF0ZSkge1xuICAgICAgICAgICAgICAgIG1heFN0YXRlID0gdG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWF4Q2hhckNvZGUrKztcbiAgICAgICAgbWF4U3RhdGUrKztcbiAgICAgICAgdmFyIHN0YXRlcyA9IG5ldyBVaW50OE1hdHJpeChtYXhTdGF0ZSwgbWF4Q2hhckNvZGUsIDAgLyogSW52YWxpZCAqLyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlZGdlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIF9iID0gZWRnZXNbaV0sIGZyb20gPSBfYlswXSwgY2hDb2RlID0gX2JbMV0sIHRvID0gX2JbMl07XG4gICAgICAgICAgICBzdGF0ZXMuc2V0KGZyb20sIGNoQ29kZSwgdG8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlcyA9IHN0YXRlcztcbiAgICAgICAgdGhpcy5fbWF4Q2hhckNvZGUgPSBtYXhDaGFyQ29kZTtcbiAgICB9XG4gICAgU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5uZXh0U3RhdGUgPSBmdW5jdGlvbiAoY3VycmVudFN0YXRlLCBjaENvZGUpIHtcbiAgICAgICAgaWYgKGNoQ29kZSA8IDAgfHwgY2hDb2RlID49IHRoaXMuX21heENoYXJDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gMCAvKiBJbnZhbGlkICovO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZXMuZ2V0KGN1cnJlbnRTdGF0ZSwgY2hDb2RlKTtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0ZU1hY2hpbmU7XG59KCkpO1xuZXhwb3J0IHsgU3RhdGVNYWNoaW5lIH07XG4vLyBTdGF0ZSBtYWNoaW5lIGZvciBodHRwOi8vIG9yIGh0dHBzOi8vIG9yIGZpbGU6Ly9cbnZhciBfc3RhdGVNYWNoaW5lID0gbnVsbDtcbmZ1bmN0aW9uIGdldFN0YXRlTWFjaGluZSgpIHtcbiAgICBpZiAoX3N0YXRlTWFjaGluZSA9PT0gbnVsbCkge1xuICAgICAgICBfc3RhdGVNYWNoaW5lID0gbmV3IFN0YXRlTWFjaGluZShbXG4gICAgICAgICAgICBbMSAvKiBTdGFydCAqLywgMTA0IC8qIGggKi8sIDIgLyogSCAqL10sXG4gICAgICAgICAgICBbMSAvKiBTdGFydCAqLywgNzIgLyogSCAqLywgMiAvKiBIICovXSxcbiAgICAgICAgICAgIFsxIC8qIFN0YXJ0ICovLCAxMDIgLyogZiAqLywgNiAvKiBGICovXSxcbiAgICAgICAgICAgIFsxIC8qIFN0YXJ0ICovLCA3MCAvKiBGICovLCA2IC8qIEYgKi9dLFxuICAgICAgICAgICAgWzIgLyogSCAqLywgMTE2IC8qIHQgKi8sIDMgLyogSFQgKi9dLFxuICAgICAgICAgICAgWzIgLyogSCAqLywgODQgLyogVCAqLywgMyAvKiBIVCAqL10sXG4gICAgICAgICAgICBbMyAvKiBIVCAqLywgMTE2IC8qIHQgKi8sIDQgLyogSFRUICovXSxcbiAgICAgICAgICAgIFszIC8qIEhUICovLCA4NCAvKiBUICovLCA0IC8qIEhUVCAqL10sXG4gICAgICAgICAgICBbNCAvKiBIVFQgKi8sIDExMiAvKiBwICovLCA1IC8qIEhUVFAgKi9dLFxuICAgICAgICAgICAgWzQgLyogSFRUICovLCA4MCAvKiBQICovLCA1IC8qIEhUVFAgKi9dLFxuICAgICAgICAgICAgWzUgLyogSFRUUCAqLywgMTE1IC8qIHMgKi8sIDkgLyogQmVmb3JlQ29sb24gKi9dLFxuICAgICAgICAgICAgWzUgLyogSFRUUCAqLywgODMgLyogUyAqLywgOSAvKiBCZWZvcmVDb2xvbiAqL10sXG4gICAgICAgICAgICBbNSAvKiBIVFRQICovLCA1OCAvKiBDb2xvbiAqLywgMTAgLyogQWZ0ZXJDb2xvbiAqL10sXG4gICAgICAgICAgICBbNiAvKiBGICovLCAxMDUgLyogaSAqLywgNyAvKiBGSSAqL10sXG4gICAgICAgICAgICBbNiAvKiBGICovLCA3MyAvKiBJICovLCA3IC8qIEZJICovXSxcbiAgICAgICAgICAgIFs3IC8qIEZJICovLCAxMDggLyogbCAqLywgOCAvKiBGSUwgKi9dLFxuICAgICAgICAgICAgWzcgLyogRkkgKi8sIDc2IC8qIEwgKi8sIDggLyogRklMICovXSxcbiAgICAgICAgICAgIFs4IC8qIEZJTCAqLywgMTAxIC8qIGUgKi8sIDkgLyogQmVmb3JlQ29sb24gKi9dLFxuICAgICAgICAgICAgWzggLyogRklMICovLCA2OSAvKiBFICovLCA5IC8qIEJlZm9yZUNvbG9uICovXSxcbiAgICAgICAgICAgIFs5IC8qIEJlZm9yZUNvbG9uICovLCA1OCAvKiBDb2xvbiAqLywgMTAgLyogQWZ0ZXJDb2xvbiAqL10sXG4gICAgICAgICAgICBbMTAgLyogQWZ0ZXJDb2xvbiAqLywgNDcgLyogU2xhc2ggKi8sIDExIC8qIEFsbW9zdFRoZXJlICovXSxcbiAgICAgICAgICAgIFsxMSAvKiBBbG1vc3RUaGVyZSAqLywgNDcgLyogU2xhc2ggKi8sIDEyIC8qIEVuZCAqL10sXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICByZXR1cm4gX3N0YXRlTWFjaGluZTtcbn1cbnZhciBfY2xhc3NpZmllciA9IG51bGw7XG5mdW5jdGlvbiBnZXRDbGFzc2lmaWVyKCkge1xuICAgIGlmIChfY2xhc3NpZmllciA9PT0gbnVsbCkge1xuICAgICAgICBfY2xhc3NpZmllciA9IG5ldyBDaGFyYWN0ZXJDbGFzc2lmaWVyKDAgLyogTm9uZSAqLyk7XG4gICAgICAgIHZhciBGT1JDRV9URVJNSU5BVElPTl9DSEFSQUNURVJTID0gJyBcXHQ8PlxcJ1xcXCLjgIHjgILvvaHvvaTvvIzvvI7vvJrvvJvvvJ/vvIHvvKDvvIPvvITvvIXvvIbvvIrigJjigJzjgIjjgIrjgIzjgI7jgJDjgJTvvIjvvLvvvZvvvaLvvaPvvZ3vvL3vvInjgJXjgJHjgI/jgI3jgIvjgInigJ3igJnvvYDvvZ7igKYnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEZPUkNFX1RFUk1JTkFUSU9OX0NIQVJBQ1RFUlMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9jbGFzc2lmaWVyLnNldChGT1JDRV9URVJNSU5BVElPTl9DSEFSQUNURVJTLmNoYXJDb2RlQXQoaSksIDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIENBTk5PVF9FTkRfV0lUSF9DSEFSQUNURVJTID0gJy4sOyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ0FOTk9UX0VORF9XSVRIX0NIQVJBQ1RFUlMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9jbGFzc2lmaWVyLnNldChDQU5OT1RfRU5EX1dJVEhfQ0hBUkFDVEVSUy5jaGFyQ29kZUF0KGkpLCAyIC8qIENhbm5vdEVuZEluICovKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzaWZpZXI7XG59XG52YXIgTGlua0NvbXB1dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpbmtDb21wdXRlcigpIHtcbiAgICB9XG4gICAgTGlua0NvbXB1dGVyLl9jcmVhdGVMaW5rID0gZnVuY3Rpb24gKGNsYXNzaWZpZXIsIGxpbmUsIGxpbmVOdW1iZXIsIGxpbmtCZWdpbkluZGV4LCBsaW5rRW5kSW5kZXgpIHtcbiAgICAgICAgLy8gRG8gbm90IGFsbG93IHRvIGVuZCBsaW5rIGluIGNlcnRhaW4gY2hhcmFjdGVycy4uLlxuICAgICAgICB2YXIgbGFzdEluY2x1ZGVkQ2hhckluZGV4ID0gbGlua0VuZEluZGV4IC0gMTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdmFyIGNoQ29kZSA9IGxpbmUuY2hhckNvZGVBdChsYXN0SW5jbHVkZWRDaGFySW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoQ2xhc3MgPSBjbGFzc2lmaWVyLmdldChjaENvZGUpO1xuICAgICAgICAgICAgaWYgKGNoQ2xhc3MgIT09IDIgLyogQ2Fubm90RW5kSW4gKi8pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RJbmNsdWRlZENoYXJJbmRleC0tO1xuICAgICAgICB9IHdoaWxlIChsYXN0SW5jbHVkZWRDaGFySW5kZXggPiBsaW5rQmVnaW5JbmRleCk7XG4gICAgICAgIC8vIEhhbmRsZSBsaW5rcyBlbmNsb3NlZCBpbiBwYXJlbnMsIHNxdWFyZSBicmFja2V0cyBhbmQgY3VybHlzLlxuICAgICAgICBpZiAobGlua0JlZ2luSW5kZXggPiAwKSB7XG4gICAgICAgICAgICB2YXIgY2hhckNvZGVCZWZvcmVMaW5rID0gbGluZS5jaGFyQ29kZUF0KGxpbmtCZWdpbkluZGV4IC0gMSk7XG4gICAgICAgICAgICB2YXIgbGFzdENoYXJDb2RlSW5MaW5rID0gbGluZS5jaGFyQ29kZUF0KGxhc3RJbmNsdWRlZENoYXJJbmRleCk7XG4gICAgICAgICAgICBpZiAoKGNoYXJDb2RlQmVmb3JlTGluayA9PT0gNDAgLyogT3BlblBhcmVuICovICYmIGxhc3RDaGFyQ29kZUluTGluayA9PT0gNDEgLyogQ2xvc2VQYXJlbiAqLylcbiAgICAgICAgICAgICAgICB8fCAoY2hhckNvZGVCZWZvcmVMaW5rID09PSA5MSAvKiBPcGVuU3F1YXJlQnJhY2tldCAqLyAmJiBsYXN0Q2hhckNvZGVJbkxpbmsgPT09IDkzIC8qIENsb3NlU3F1YXJlQnJhY2tldCAqLylcbiAgICAgICAgICAgICAgICB8fCAoY2hhckNvZGVCZWZvcmVMaW5rID09PSAxMjMgLyogT3BlbkN1cmx5QnJhY2UgKi8gJiYgbGFzdENoYXJDb2RlSW5MaW5rID09PSAxMjUgLyogQ2xvc2VDdXJseUJyYWNlICovKSkge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdCBlbmQgaW4gKSBpZiAoIGlzIGJlZm9yZSB0aGUgbGluayBzdGFydFxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCBlbmQgaW4gXSBpZiBbIGlzIGJlZm9yZSB0aGUgbGluayBzdGFydFxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCBlbmQgaW4gfSBpZiB7IGlzIGJlZm9yZSB0aGUgbGluayBzdGFydFxuICAgICAgICAgICAgICAgIGxhc3RJbmNsdWRlZENoYXJJbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlcjogbGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogbGlua0JlZ2luSW5kZXggKyAxLFxuICAgICAgICAgICAgICAgIGVuZExpbmVOdW1iZXI6IGxpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgZW5kQ29sdW1uOiBsYXN0SW5jbHVkZWRDaGFySW5kZXggKyAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBsaW5lLnN1YnN0cmluZyhsaW5rQmVnaW5JbmRleCwgbGFzdEluY2x1ZGVkQ2hhckluZGV4ICsgMSlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIExpbmtDb21wdXRlci5jb21wdXRlTGlua3MgPSBmdW5jdGlvbiAobW9kZWwsIHN0YXRlTWFjaGluZSkge1xuICAgICAgICBpZiAoc3RhdGVNYWNoaW5lID09PSB2b2lkIDApIHsgc3RhdGVNYWNoaW5lID0gZ2V0U3RhdGVNYWNoaW5lKCk7IH1cbiAgICAgICAgdmFyIGNsYXNzaWZpZXIgPSBnZXRDbGFzc2lmaWVyKCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGxpbmVDb3VudCA9IG1vZGVsLmdldExpbmVDb3VudCgpOyBpIDw9IGxpbmVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGluZSA9IG1vZGVsLmdldExpbmVDb250ZW50KGkpO1xuICAgICAgICAgICAgdmFyIGxlbiA9IGxpbmUubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICAgICAgdmFyIGxpbmtCZWdpbkluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBsaW5rQmVnaW5DaENvZGUgPSAwO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gMSAvKiBTdGFydCAqLztcbiAgICAgICAgICAgIHZhciBoYXNPcGVuUGFyZW5zID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaGFzT3BlblNxdWFyZUJyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBoYXNPcGVuQ3VybHlCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciByZXNldFN0YXRlTWFjaGluZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBjaENvZGUgPSBsaW5lLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAxMyAvKiBBY2NlcHQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoQ2xhc3MgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQwIC8qIE9wZW5QYXJlbiAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNPcGVuUGFyZW5zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gMCAvKiBOb25lICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MSAvKiBDbG9zZVBhcmVuICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSAoaGFzT3BlblBhcmVucyA/IDAgLyogTm9uZSAqLyA6IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDkxIC8qIE9wZW5TcXVhcmVCcmFja2V0ICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc09wZW5TcXVhcmVCcmFja2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gMCAvKiBOb25lICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5MyAvKiBDbG9zZVNxdWFyZUJyYWNrZXQgKi86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hDbGFzcyA9IChoYXNPcGVuU3F1YXJlQnJhY2tldCA/IDAgLyogTm9uZSAqLyA6IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyMyAvKiBPcGVuQ3VybHlCcmFjZSAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNPcGVuQ3VybHlCcmFja2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gMCAvKiBOb25lICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjUgLyogQ2xvc2VDdXJseUJyYWNlICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSAoaGFzT3BlbkN1cmx5QnJhY2tldCA/IDAgLyogTm9uZSAqLyA6IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBUaGUgZm9sbG93aW5nIHRocmVlIHJ1bGVzIG1ha2UgaXQgdGhhdCAnIG9yIFwiIG9yIGAgYXJlIGFsbG93ZWQgaW5zaWRlIGxpbmtzIGlmIHRoZSBsaW5rIGJlZ2FuIHdpdGggYSBkaWZmZXJlbnQgb25lICovXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM5IC8qIFNpbmdsZVF1b3RlICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSAobGlua0JlZ2luQ2hDb2RlID09PSAzNCAvKiBEb3VibGVRdW90ZSAqLyB8fCBsaW5rQmVnaW5DaENvZGUgPT09IDk2IC8qIEJhY2tUaWNrICovKSA/IDAgLyogTm9uZSAqLyA6IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzQgLyogRG91YmxlUXVvdGUgKi86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hDbGFzcyA9IChsaW5rQmVnaW5DaENvZGUgPT09IDM5IC8qIFNpbmdsZVF1b3RlICovIHx8IGxpbmtCZWdpbkNoQ29kZSA9PT0gOTYgLyogQmFja1RpY2sgKi8pID8gMCAvKiBOb25lICovIDogMSAvKiBGb3JjZVRlcm1pbmF0aW9uICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5NiAvKiBCYWNrVGljayAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gKGxpbmtCZWdpbkNoQ29kZSA9PT0gMzkgLyogU2luZ2xlUXVvdGUgKi8gfHwgbGlua0JlZ2luQ2hDb2RlID09PSAzNCAvKiBEb3VibGVRdW90ZSAqLykgPyAwIC8qIE5vbmUgKi8gOiAxIC8qIEZvcmNlVGVybWluYXRpb24gKi87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSBjbGFzc2lmaWVyLmdldChjaENvZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGNoYXJhY3RlciB0ZXJtaW5hdGVzIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoQ2xhc3MgPT09IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goTGlua0NvbXB1dGVyLl9jcmVhdGVMaW5rKGNsYXNzaWZpZXIsIGxpbmUsIGksIGxpbmtCZWdpbkluZGV4LCBqKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldFN0YXRlTWFjaGluZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IDEyIC8qIEVuZCAqLykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hDbGFzcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoQ29kZSA9PT0gOTEgLyogT3BlblNxdWFyZUJyYWNrZXQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IGZvciB0aGUgYXV0aG9yaXR5IHBhcnQgdG8gY29udGFpbiBpcHY2IGFkZHJlc3NlcyB3aGljaCBjb250YWluIFsgYW5kIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc09wZW5TcXVhcmVCcmFja2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSAwIC8qIE5vbmUgKi87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gY2xhc3NpZmllci5nZXQoY2hDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBjaGFyYWN0ZXIgdGVybWluYXRlcyBsaW5rXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaENsYXNzID09PSAxIC8qIEZvcmNlVGVybWluYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0U3RhdGVNYWNoaW5lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMTMgLyogQWNjZXB0ICovO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YXRlTWFjaGluZS5uZXh0U3RhdGUoc3RhdGUsIGNoQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCAvKiBJbnZhbGlkICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldFN0YXRlTWFjaGluZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc2V0U3RhdGVNYWNoaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMSAvKiBTdGFydCAqLztcbiAgICAgICAgICAgICAgICAgICAgaGFzT3BlblBhcmVucyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBoYXNPcGVuU3F1YXJlQnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBoYXNPcGVuQ3VybHlCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlY29yZCB3aGVyZSB0aGUgbGluayBzdGFydGVkXG4gICAgICAgICAgICAgICAgICAgIGxpbmtCZWdpbkluZGV4ID0gaiArIDE7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtCZWdpbkNoQ29kZSA9IGNoQ29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAxMyAvKiBBY2NlcHQgKi8pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChMaW5rQ29tcHV0ZXIuX2NyZWF0ZUxpbmsoY2xhc3NpZmllciwgbGluZSwgaSwgbGlua0JlZ2luSW5kZXgsIGxlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gTGlua0NvbXB1dGVyO1xufSgpKTtcbmV4cG9ydCB7IExpbmtDb21wdXRlciB9O1xuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBsaW5rcyBjb250YWlucyBpbiB0aGUgcHJvdmlkZWRcbiAqIGRvY3VtZW50LiAqTm90ZSogdGhhdCB0aGlzIG9wZXJhdGlvbiBpcyBjb21wdXRhdGlvbmFsXG4gKiBleHBlbnNpdmUgYW5kIHNob3VsZCBub3QgcnVuIGluIHRoZSBVSSB0aHJlYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlTGlua3MobW9kZWwpIHtcbiAgICBpZiAoIW1vZGVsIHx8IHR5cGVvZiBtb2RlbC5nZXRMaW5lQ291bnQgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG1vZGVsLmdldExpbmVDb250ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVua25vd24gY2FsbGVyIVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBMaW5rQ29tcHV0ZXIuY29tcHV0ZUxpbmtzKG1vZGVsKTtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xudmFyIEJhc2ljSW5wbGFjZVJlcGxhY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFzaWNJbnBsYWNlUmVwbGFjZSgpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdFZhbHVlU2V0ID0gW1xuICAgICAgICAgICAgWyd0cnVlJywgJ2ZhbHNlJ10sXG4gICAgICAgICAgICBbJ1RydWUnLCAnRmFsc2UnXSxcbiAgICAgICAgICAgIFsnUHJpdmF0ZScsICdQdWJsaWMnLCAnRnJpZW5kJywgJ1JlYWRPbmx5JywgJ1BhcnRpYWwnLCAnUHJvdGVjdGVkJywgJ1dyaXRlT25seSddLFxuICAgICAgICAgICAgWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5wcm90b3R5cGUubmF2aWdhdGVWYWx1ZVNldCA9IGZ1bmN0aW9uIChyYW5nZTEsIHRleHQxLCByYW5nZTIsIHRleHQyLCB1cCkge1xuICAgICAgICBpZiAocmFuZ2UxICYmIHRleHQxKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kb05hdmlnYXRlVmFsdWVTZXQodGV4dDEsIHVwKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogcmFuZ2UxLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZ2UyICYmIHRleHQyKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kb05hdmlnYXRlVmFsdWVTZXQodGV4dDIsIHVwKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogcmFuZ2UyLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEJhc2ljSW5wbGFjZVJlcGxhY2UucHJvdG90eXBlLmRvTmF2aWdhdGVWYWx1ZVNldCA9IGZ1bmN0aW9uICh0ZXh0LCB1cCkge1xuICAgICAgICB2YXIgbnVtYmVyUmVzdWx0ID0gdGhpcy5udW1iZXJSZXBsYWNlKHRleHQsIHVwKTtcbiAgICAgICAgaWYgKG51bWJlclJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlclJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UmVwbGFjZSh0ZXh0LCB1cCk7XG4gICAgfTtcbiAgICBCYXNpY0lucGxhY2VSZXBsYWNlLnByb3RvdHlwZS5udW1iZXJSZXBsYWNlID0gZnVuY3Rpb24gKHZhbHVlLCB1cCkge1xuICAgICAgICB2YXIgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHZhbHVlLmxlbmd0aCAtICh2YWx1ZS5sYXN0SW5kZXhPZignLicpICsgMSkpO1xuICAgICAgICB2YXIgbjEgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICB2YXIgbjIgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihuMSkgJiYgIWlzTmFOKG4yKSAmJiBuMSA9PT0gbjIpIHtcbiAgICAgICAgICAgIGlmIChuMSA9PT0gMCAmJiAhdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gZG9uJ3QgZG8gbmVnYXRpdmVcbiAgICAgICAgICAgICAgICAvL1x0XHRcdH0gZWxzZSBpZihuMSA9PT0gOSAmJiB1cCkge1xuICAgICAgICAgICAgICAgIC8vXHRcdFx0XHRyZXR1cm4gbnVsbDsgLy8gZG9uJ3QgaW5zZXJ0IDEwIGludG8gYSBudW1iZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG4xID0gTWF0aC5mbG9vcihuMSAqIHByZWNpc2lvbik7XG4gICAgICAgICAgICAgICAgbjEgKz0gdXAgPyBwcmVjaXNpb24gOiAtcHJlY2lzaW9uO1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcobjEgLyBwcmVjaXNpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5wcm90b3R5cGUudGV4dFJlcGxhY2UgPSBmdW5jdGlvbiAodmFsdWUsIHVwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlU2V0c1JlcGxhY2UodGhpcy5fZGVmYXVsdFZhbHVlU2V0LCB2YWx1ZSwgdXApO1xuICAgIH07XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5wcm90b3R5cGUudmFsdWVTZXRzUmVwbGFjZSA9IGZ1bmN0aW9uICh2YWx1ZVNldHMsIHZhbHVlLCB1cCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlU2V0cy5sZW5ndGg7IHJlc3VsdCA9PT0gbnVsbCAmJiBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudmFsdWVTZXRSZXBsYWNlKHZhbHVlU2V0c1tpXSwgdmFsdWUsIHVwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5wcm90b3R5cGUudmFsdWVTZXRSZXBsYWNlID0gZnVuY3Rpb24gKHZhbHVlU2V0LCB2YWx1ZSwgdXApIHtcbiAgICAgICAgdmFyIGlkeCA9IHZhbHVlU2V0LmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIGlkeCArPSB1cCA/ICsxIDogLTE7XG4gICAgICAgICAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgICAgICAgICAgIGlkeCA9IHZhbHVlU2V0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZHggJT0gdmFsdWVTZXQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlU2V0W2lkeF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBCYXNpY0lucGxhY2VSZXBsYWNlLklOU1RBTkNFID0gbmV3IEJhc2ljSW5wbGFjZVJlcGxhY2UoKTtcbiAgICByZXR1cm4gQmFzaWNJbnBsYWNlUmVwbGFjZTtcbn0oKSk7XG5leHBvcnQgeyBCYXNpY0lucGxhY2VSZXBsYWNlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgbWVyZ2VTb3J0IH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jb21tb24vYXJyYXlzLmpzJztcbmltcG9ydCB7IHN0cmluZ0RpZmYgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi9kaWZmL2RpZmYuanMnO1xuaW1wb3J0IHsgRklOIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jb21tb24vaXRlcmF0b3IuanMnO1xuaW1wb3J0IHsgZ2xvYmFscyB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL3BsYXRmb3JtLmpzJztcbmltcG9ydCB7IFVSSSB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL3VyaS5qcyc7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL2NvcmUvcG9zaXRpb24uanMnO1xuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuLi9jb3JlL3JhbmdlLmpzJztcbmltcG9ydCB7IERpZmZDb21wdXRlciB9IGZyb20gJy4uL2RpZmYvZGlmZkNvbXB1dGVyLmpzJztcbmltcG9ydCB7IE1pcnJvclRleHRNb2RlbCBhcyBCYXNlTWlycm9yTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9taXJyb3JUZXh0TW9kZWwuanMnO1xuaW1wb3J0IHsgZW5zdXJlVmFsaWRXb3JkRGVmaW5pdGlvbiwgZ2V0V29yZEF0VGV4dCB9IGZyb20gJy4uL21vZGVsL3dvcmRIZWxwZXIuanMnO1xuaW1wb3J0IHsgY29tcHV0ZUxpbmtzIH0gZnJvbSAnLi4vbW9kZXMvbGlua0NvbXB1dGVyLmpzJztcbmltcG9ydCB7IEJhc2ljSW5wbGFjZVJlcGxhY2UgfSBmcm9tICcuLi9tb2Rlcy9zdXBwb3J0cy9pbnBsYWNlUmVwbGFjZVN1cHBvcnQuanMnO1xuaW1wb3J0IHsgY3JlYXRlTW9uYWNvQmFzZUFQSSB9IGZyb20gJy4uL3N0YW5kYWxvbmUvc3RhbmRhbG9uZUJhc2UuanMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vLi4vLi4vYmFzZS9jb21tb24vdHlwZXMuanMnO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIE1pcnJvck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNaXJyb3JNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNaXJyb3JNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWlycm9yTW9kZWwucHJvdG90eXBlLCBcInVyaVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VyaTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1pcnJvck1vZGVsLnByb3RvdHlwZSwgXCJ2ZXJzaW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVyc2lvbklkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWlycm9yTW9kZWwucHJvdG90eXBlLCBcImVvbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VvbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUZXh0KCk7XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuZ2V0TGluZXNDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGluZXMuc2xpY2UoMCk7XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuZ2V0TGluZUNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGluZXMubGVuZ3RoO1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLmdldExpbmVDb250ZW50ID0gZnVuY3Rpb24gKGxpbmVOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzW2xpbmVOdW1iZXIgLSAxXTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5nZXRXb3JkQXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgd29yZERlZmluaXRpb24pIHtcbiAgICAgICAgdmFyIHdvcmRBdFRleHQgPSBnZXRXb3JkQXRUZXh0KHBvc2l0aW9uLmNvbHVtbiwgZW5zdXJlVmFsaWRXb3JkRGVmaW5pdGlvbih3b3JkRGVmaW5pdGlvbiksIHRoaXMuX2xpbmVzW3Bvc2l0aW9uLmxpbmVOdW1iZXIgLSAxXSwgMCk7XG4gICAgICAgIGlmICh3b3JkQXRUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHBvc2l0aW9uLmxpbmVOdW1iZXIsIHdvcmRBdFRleHQuc3RhcnRDb2x1bW4sIHBvc2l0aW9uLmxpbmVOdW1iZXIsIHdvcmRBdFRleHQuZW5kQ29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5nZXRXb3JkVW50aWxQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgd29yZERlZmluaXRpb24pIHtcbiAgICAgICAgdmFyIHdvcmRBdFBvc2l0aW9uID0gdGhpcy5nZXRXb3JkQXRQb3NpdGlvbihwb3NpdGlvbiwgd29yZERlZmluaXRpb24pO1xuICAgICAgICBpZiAoIXdvcmRBdFBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdvcmQ6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiBwb3NpdGlvbi5jb2x1bW4sXG4gICAgICAgICAgICAgICAgZW5kQ29sdW1uOiBwb3NpdGlvbi5jb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdvcmQ6IHRoaXMuX2xpbmVzW3Bvc2l0aW9uLmxpbmVOdW1iZXIgLSAxXS5zdWJzdHJpbmcod29yZEF0UG9zaXRpb24uc3RhcnRDb2x1bW4gLSAxLCBwb3NpdGlvbi5jb2x1bW4gLSAxKSxcbiAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiB3b3JkQXRQb3NpdGlvbi5zdGFydENvbHVtbixcbiAgICAgICAgICAgIGVuZENvbHVtbjogcG9zaXRpb24uY29sdW1uXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuY3JlYXRlV29yZEl0ZXJhdG9yID0gZnVuY3Rpb24gKHdvcmREZWZpbml0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIHZhciBsaW5lTnVtYmVyID0gMDtcbiAgICAgICAgdmFyIGxpbmVUZXh0O1xuICAgICAgICB2YXIgd29yZFJhbmdlc0lkeCA9IDA7XG4gICAgICAgIHZhciB3b3JkUmFuZ2VzID0gW107XG4gICAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHdvcmRSYW5nZXNJZHggPCB3b3JkUmFuZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGxpbmVUZXh0LnN1YnN0cmluZyh3b3JkUmFuZ2VzW3dvcmRSYW5nZXNJZHhdLnN0YXJ0LCB3b3JkUmFuZ2VzW3dvcmRSYW5nZXNJZHhdLmVuZCk7XG4gICAgICAgICAgICAgICAgd29yZFJhbmdlc0lkeCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsaW5lTnVtYmVyID49IF90aGlzLl9saW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRklOO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGluZVRleHQgPSBfdGhpcy5fbGluZXNbbGluZU51bWJlcl07XG4gICAgICAgICAgICAgICAgd29yZFJhbmdlcyA9IF90aGlzLl93b3JkZW5pemUobGluZVRleHQsIHdvcmREZWZpbml0aW9uKTtcbiAgICAgICAgICAgICAgICB3b3JkUmFuZ2VzSWR4ID0gMDtcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgbmV4dDogbmV4dCB9O1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLmdldExpbmVXb3JkcyA9IGZ1bmN0aW9uIChsaW5lTnVtYmVyLCB3b3JkRGVmaW5pdGlvbikge1xuICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuX2xpbmVzW2xpbmVOdW1iZXIgLSAxXTtcbiAgICAgICAgdmFyIHJhbmdlcyA9IHRoaXMuX3dvcmRlbml6ZShjb250ZW50LCB3b3JkRGVmaW5pdGlvbik7XG4gICAgICAgIHZhciB3b3JkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHJhbmdlc18xID0gcmFuZ2VzOyBfaSA8IHJhbmdlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJhbmdlID0gcmFuZ2VzXzFbX2ldO1xuICAgICAgICAgICAgd29yZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgd29yZDogY29udGVudC5zdWJzdHJpbmcocmFuZ2Uuc3RhcnQsIHJhbmdlLmVuZCksXG4gICAgICAgICAgICAgICAgc3RhcnRDb2x1bW46IHJhbmdlLnN0YXJ0ICsgMSxcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHJhbmdlLmVuZCArIDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3b3JkcztcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5fd29yZGVuaXplID0gZnVuY3Rpb24gKGNvbnRlbnQsIHdvcmREZWZpbml0aW9uKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICB3b3JkRGVmaW5pdGlvbi5sYXN0SW5kZXggPSAwOyAvLyByZXNldCBsYXN0SW5kZXgganVzdCB0byBiZSBzdXJlXG4gICAgICAgIHdoaWxlIChtYXRjaCA9IHdvcmREZWZpbml0aW9uLmV4ZWMoY29udGVudCkpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaFswXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBpdCBkaWQgbWF0Y2ggdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBzdGFydDogbWF0Y2guaW5kZXgsIGVuZDogbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5nZXRWYWx1ZUluUmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSB0aGlzLl92YWxpZGF0ZVJhbmdlKHJhbmdlKTtcbiAgICAgICAgaWYgKHJhbmdlLnN0YXJ0TGluZU51bWJlciA9PT0gcmFuZ2UuZW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzW3JhbmdlLnN0YXJ0TGluZU51bWJlciAtIDFdLnN1YnN0cmluZyhyYW5nZS5zdGFydENvbHVtbiAtIDEsIHJhbmdlLmVuZENvbHVtbiAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaW5lRW5kaW5nID0gdGhpcy5fZW9sO1xuICAgICAgICB2YXIgc3RhcnRMaW5lSW5kZXggPSByYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxO1xuICAgICAgICB2YXIgZW5kTGluZUluZGV4ID0gcmFuZ2UuZW5kTGluZU51bWJlciAtIDE7XG4gICAgICAgIHZhciByZXN1bHRMaW5lcyA9IFtdO1xuICAgICAgICByZXN1bHRMaW5lcy5wdXNoKHRoaXMuX2xpbmVzW3N0YXJ0TGluZUluZGV4XS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRDb2x1bW4gLSAxKSk7XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydExpbmVJbmRleCArIDE7IGkgPCBlbmRMaW5lSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0TGluZXMucHVzaCh0aGlzLl9saW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0TGluZXMucHVzaCh0aGlzLl9saW5lc1tlbmRMaW5lSW5kZXhdLnN1YnN0cmluZygwLCByYW5nZS5lbmRDb2x1bW4gLSAxKSk7XG4gICAgICAgIHJldHVybiByZXN1bHRMaW5lcy5qb2luKGxpbmVFbmRpbmcpO1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLm9mZnNldEF0ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIHBvc2l0aW9uID0gdGhpcy5fdmFsaWRhdGVQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuX2Vuc3VyZUxpbmVTdGFydHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVTdGFydHMuZ2V0QWNjdW11bGF0ZWRWYWx1ZShwb3NpdGlvbi5saW5lTnVtYmVyIC0gMikgKyAocG9zaXRpb24uY29sdW1uIC0gMSk7XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUucG9zaXRpb25BdCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgb2Zmc2V0ID0gTWF0aC5mbG9vcihvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgPSBNYXRoLm1heCgwLCBvZmZzZXQpO1xuICAgICAgICB0aGlzLl9lbnN1cmVMaW5lU3RhcnRzKCk7XG4gICAgICAgIHZhciBvdXQgPSB0aGlzLl9saW5lU3RhcnRzLmdldEluZGV4T2Yob2Zmc2V0KTtcbiAgICAgICAgdmFyIGxpbmVMZW5ndGggPSB0aGlzLl9saW5lc1tvdXQuaW5kZXhdLmxlbmd0aDtcbiAgICAgICAgLy8gRW5zdXJlIHdlIHJldHVybiBhIHZhbGlkIHBvc2l0aW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAxICsgb3V0LmluZGV4LFxuICAgICAgICAgICAgY29sdW1uOiAxICsgTWF0aC5taW4ob3V0LnJlbWFpbmRlciwgbGluZUxlbmd0aClcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5fdmFsaWRhdGVSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLl92YWxpZGF0ZVBvc2l0aW9uKHsgbGluZU51bWJlcjogcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLCBjb2x1bW46IHJhbmdlLnN0YXJ0Q29sdW1uIH0pO1xuICAgICAgICB2YXIgZW5kID0gdGhpcy5fdmFsaWRhdGVQb3NpdGlvbih7IGxpbmVOdW1iZXI6IHJhbmdlLmVuZExpbmVOdW1iZXIsIGNvbHVtbjogcmFuZ2UuZW5kQ29sdW1uIH0pO1xuICAgICAgICBpZiAoc3RhcnQubGluZU51bWJlciAhPT0gcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyXG4gICAgICAgICAgICB8fCBzdGFydC5jb2x1bW4gIT09IHJhbmdlLnN0YXJ0Q29sdW1uXG4gICAgICAgICAgICB8fCBlbmQubGluZU51bWJlciAhPT0gcmFuZ2UuZW5kTGluZU51bWJlclxuICAgICAgICAgICAgfHwgZW5kLmNvbHVtbiAhPT0gcmFuZ2UuZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlcjogc3RhcnQubGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogc3RhcnQuY29sdW1uLFxuICAgICAgICAgICAgICAgIGVuZExpbmVOdW1iZXI6IGVuZC5saW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIGVuZENvbHVtbjogZW5kLmNvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuX3ZhbGlkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKCFQb3NpdGlvbi5pc0lQb3NpdGlvbihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIHBvc2l0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxpbmVOdW1iZXIgPSBwb3NpdGlvbi5saW5lTnVtYmVyLCBjb2x1bW4gPSBwb3NpdGlvbi5jb2x1bW47XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lTnVtYmVyIDwgMSkge1xuICAgICAgICAgICAgbGluZU51bWJlciA9IDE7XG4gICAgICAgICAgICBjb2x1bW4gPSAxO1xuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGluZU51bWJlciA+IHRoaXMuX2xpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGluZU51bWJlciA9IHRoaXMuX2xpbmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbHVtbiA9IHRoaXMuX2xpbmVzW2xpbmVOdW1iZXIgLSAxXS5sZW5ndGggKyAxO1xuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF4Q2hhcmFjdGVyID0gdGhpcy5fbGluZXNbbGluZU51bWJlciAtIDFdLmxlbmd0aCArIDE7XG4gICAgICAgICAgICBpZiAoY29sdW1uIDwgMSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IDE7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb2x1bW4gPiBtYXhDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBtYXhDaGFyYWN0ZXI7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBsaW5lTnVtYmVyOiBsaW5lTnVtYmVyLCBjb2x1bW46IGNvbHVtbiB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWlycm9yTW9kZWw7XG59KEJhc2VNaXJyb3JNb2RlbCkpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIEVkaXRvclNpbXBsZVdvcmtlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFZGl0b3JTaW1wbGVXb3JrZXIoaG9zdCwgZm9yZWlnbk1vZHVsZUZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5faG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuX21vZGVscyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2ZvcmVpZ25Nb2R1bGVGYWN0b3J5ID0gZm9yZWlnbk1vZHVsZUZhY3Rvcnk7XG4gICAgICAgIHRoaXMuX2ZvcmVpZ25Nb2R1bGUgPSBudWxsO1xuICAgIH1cbiAgICBFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX21vZGVscyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfTtcbiAgICBFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLl9nZXRNb2RlbCA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsc1t1cmldO1xuICAgIH07XG4gICAgRWRpdG9yU2ltcGxlV29ya2VyLnByb3RvdHlwZS5fZ2V0TW9kZWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYWxsID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX21vZGVscykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBhbGwucHVzaChfdGhpcy5fbW9kZWxzW2tleV0pOyB9KTtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9O1xuICAgIEVkaXRvclNpbXBsZVdvcmtlci5wcm90b3R5cGUuYWNjZXB0TmV3TW9kZWwgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLl9tb2RlbHNbZGF0YS51cmxdID0gbmV3IE1pcnJvck1vZGVsKFVSSS5wYXJzZShkYXRhLnVybCksIGRhdGEubGluZXMsIGRhdGEuRU9MLCBkYXRhLnZlcnNpb25JZCk7XG4gICAgfTtcbiAgICBFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmFjY2VwdE1vZGVsQ2hhbmdlZCA9IGZ1bmN0aW9uIChzdHJVUkwsIGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tb2RlbHNbc3RyVVJMXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuX21vZGVsc1tzdHJVUkxdO1xuICAgICAgICBtb2RlbC5vbkV2ZW50cyhlKTtcbiAgICB9O1xuICAgIEVkaXRvclNpbXBsZVdvcmtlci5wcm90b3R5cGUuYWNjZXB0UmVtb3ZlZE1vZGVsID0gZnVuY3Rpb24gKHN0clVSTCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vZGVsc1tzdHJVUkxdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuX21vZGVsc1tzdHJVUkxdO1xuICAgIH07XG4gICAgLy8gLS0tLSBCRUdJTiBkaWZmIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgRWRpdG9yU2ltcGxlV29ya2VyLnByb3RvdHlwZS5jb21wdXRlRGlmZiA9IGZ1bmN0aW9uIChvcmlnaW5hbFVybCwgbW9kaWZpZWRVcmwsIGlnbm9yZVRyaW1XaGl0ZXNwYWNlKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbCA9IHRoaXMuX2dldE1vZGVsKG9yaWdpbmFsVXJsKTtcbiAgICAgICAgdmFyIG1vZGlmaWVkID0gdGhpcy5fZ2V0TW9kZWwobW9kaWZpZWRVcmwpO1xuICAgICAgICBpZiAoIW9yaWdpbmFsIHx8ICFtb2RpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3JpZ2luYWxMaW5lcyA9IG9yaWdpbmFsLmdldExpbmVzQ29udGVudCgpO1xuICAgICAgICB2YXIgbW9kaWZpZWRMaW5lcyA9IG1vZGlmaWVkLmdldExpbmVzQ29udGVudCgpO1xuICAgICAgICB2YXIgZGlmZkNvbXB1dGVyID0gbmV3IERpZmZDb21wdXRlcihvcmlnaW5hbExpbmVzLCBtb2RpZmllZExpbmVzLCB7XG4gICAgICAgICAgICBzaG91bGRDb21wdXRlQ2hhckNoYW5nZXM6IHRydWUsXG4gICAgICAgICAgICBzaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzOiB0cnVlLFxuICAgICAgICAgICAgc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2U6IGlnbm9yZVRyaW1XaGl0ZXNwYWNlLFxuICAgICAgICAgICAgc2hvdWxkTWFrZVByZXR0eURpZmY6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjaGFuZ2VzID0gZGlmZkNvbXB1dGVyLmNvbXB1dGVEaWZmKCk7XG4gICAgICAgIHZhciBpZGVudGljYWwgPSAoY2hhbmdlcy5sZW5ndGggPiAwID8gZmFsc2UgOiB0aGlzLl9tb2RlbHNBcmVJZGVudGljYWwob3JpZ2luYWwsIG1vZGlmaWVkKSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgaWRlbnRpY2FsOiBpZGVudGljYWwsXG4gICAgICAgICAgICBjaGFuZ2VzOiBjaGFuZ2VzXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRWRpdG9yU2ltcGxlV29ya2VyLnByb3RvdHlwZS5fbW9kZWxzQXJlSWRlbnRpY2FsID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBtb2RpZmllZCkge1xuICAgICAgICB2YXIgb3JpZ2luYWxMaW5lQ291bnQgPSBvcmlnaW5hbC5nZXRMaW5lQ291bnQoKTtcbiAgICAgICAgdmFyIG1vZGlmaWVkTGluZUNvdW50ID0gbW9kaWZpZWQuZ2V0TGluZUNvdW50KCk7XG4gICAgICAgIGlmIChvcmlnaW5hbExpbmVDb3VudCAhPT0gbW9kaWZpZWRMaW5lQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBsaW5lID0gMTsgbGluZSA8PSBvcmlnaW5hbExpbmVDb3VudDsgbGluZSsrKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxMaW5lID0gb3JpZ2luYWwuZ2V0TGluZUNvbnRlbnQobGluZSk7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRMaW5lID0gbW9kaWZpZWQuZ2V0TGluZUNvbnRlbnQobGluZSk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxMaW5lICE9PSBtb2RpZmllZExpbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmNvbXB1dGVNb3JlTWluaW1hbEVkaXRzID0gZnVuY3Rpb24gKG1vZGVsVXJsLCBlZGl0cykge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLl9nZXRNb2RlbChtb2RlbFVybCk7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWRpdHMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIGxhc3RFb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIGVkaXRzID0gbWVyZ2VTb3J0KGVkaXRzLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGEucmFuZ2UgJiYgYi5yYW5nZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSYW5nZS5jb21wYXJlUmFuZ2VzVXNpbmdTdGFydHMoYS5yYW5nZSwgYi5yYW5nZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlb2wgb25seSBjaGFuZ2VzIHNob3VsZCBnbyB0byB0aGUgZW5kXG4gICAgICAgICAgICB2YXIgYVJuZyA9IGEucmFuZ2UgPyAwIDogMTtcbiAgICAgICAgICAgIHZhciBiUm5nID0gYi5yYW5nZSA/IDAgOiAxO1xuICAgICAgICAgICAgcmV0dXJuIGFSbmcgLSBiUm5nO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBlZGl0c18xID0gZWRpdHM7IF9pIDwgZWRpdHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGVkaXRzXzFbX2ldLCByYW5nZSA9IF9hLnJhbmdlLCB0ZXh0ID0gX2EudGV4dCwgZW9sID0gX2EuZW9sO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlb2wgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgbGFzdEVvbCA9IGVvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChSYW5nZS5pc0VtcHR5KHJhbmdlKSAmJiAhdGV4dCkge1xuICAgICAgICAgICAgICAgIC8vIGVtcHR5IGNoYW5nZVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsID0gbW9kZWwuZ2V0VmFsdWVJblJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcclxcbnxcXG58XFxyL2csIG1vZGVsLmVvbCk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWwgPT09IHRleHQpIHtcbiAgICAgICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgZGlmZiB3b24ndCB0YWtlIHRvbyBsb25nXG4gICAgICAgICAgICBpZiAoTWF0aC5tYXgodGV4dC5sZW5ndGgsIG9yaWdpbmFsLmxlbmd0aCkgPiBFZGl0b3JTaW1wbGVXb3JrZXIuX2RpZmZMaW1pdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgcmFuZ2U6IHJhbmdlLCB0ZXh0OiB0ZXh0IH0pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29tcHV0ZSBkaWZmIGJldHdlZW4gb3JpZ2luYWwgYW5kIGVkaXQudGV4dFxuICAgICAgICAgICAgdmFyIGNoYW5nZXMgPSBzdHJpbmdEaWZmKG9yaWdpbmFsLCB0ZXh0LCBmYWxzZSk7XG4gICAgICAgICAgICB2YXIgZWRpdE9mZnNldCA9IG1vZGVsLm9mZnNldEF0KFJhbmdlLmxpZnQocmFuZ2UpLmdldFN0YXJ0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIGNoYW5nZXNfMSA9IGNoYW5nZXM7IF9iIDwgY2hhbmdlc18xLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzXzFbX2JdO1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IG1vZGVsLnBvc2l0aW9uQXQoZWRpdE9mZnNldCArIGNoYW5nZS5vcmlnaW5hbFN0YXJ0KTtcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gbW9kZWwucG9zaXRpb25BdChlZGl0T2Zmc2V0ICsgY2hhbmdlLm9yaWdpbmFsU3RhcnQgKyBjaGFuZ2Uub3JpZ2luYWxMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdFZGl0ID0ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LnN1YnN0cihjaGFuZ2UubW9kaWZpZWRTdGFydCwgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHsgc3RhcnRMaW5lTnVtYmVyOiBzdGFydC5saW5lTnVtYmVyLCBzdGFydENvbHVtbjogc3RhcnQuY29sdW1uLCBlbmRMaW5lTnVtYmVyOiBlbmQubGluZU51bWJlciwgZW5kQ29sdW1uOiBlbmQuY29sdW1uIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbC5nZXRWYWx1ZUluUmFuZ2UobmV3RWRpdC5yYW5nZSkgIT09IG5ld0VkaXQudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXdFZGl0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsYXN0RW9sID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBlb2w6IGxhc3RFb2wsIHRleHQ6ICcnLCByYW5nZTogeyBzdGFydExpbmVOdW1iZXI6IDAsIHN0YXJ0Q29sdW1uOiAwLCBlbmRMaW5lTnVtYmVyOiAwLCBlbmRDb2x1bW46IDAgfSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfTtcbiAgICAvLyAtLS0tIEVORCBtaW5pbWFsIGVkaXRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEVkaXRvclNpbXBsZVdvcmtlci5wcm90b3R5cGUuY29tcHV0ZUxpbmtzID0gZnVuY3Rpb24gKG1vZGVsVXJsKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuX2dldE1vZGVsKG1vZGVsVXJsKTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbXB1dGVMaW5rcyhtb2RlbCkpO1xuICAgIH07XG4gICAgRWRpdG9yU2ltcGxlV29ya2VyLnByb3RvdHlwZS50ZXh0dWFsU3VnZ2VzdCA9IGZ1bmN0aW9uIChtb2RlbFVybCwgcG9zaXRpb24sIHdvcmREZWYsIHdvcmREZWZGbGFncykge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLl9nZXRNb2RlbChtb2RlbFVybCk7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlZW4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIHdvcmREZWZSZWdFeHAgPSBuZXcgUmVnRXhwKHdvcmREZWYsIHdvcmREZWZGbGFncyk7XG4gICAgICAgIHZhciB3b3JkVW50aWwgPSBtb2RlbC5nZXRXb3JkVW50aWxQb3NpdGlvbihwb3NpdGlvbiwgd29yZERlZlJlZ0V4cCk7XG4gICAgICAgIHZhciB3b3JkQXQgPSBtb2RlbC5nZXRXb3JkQXRQb3NpdGlvbihwb3NpdGlvbiwgd29yZERlZlJlZ0V4cCk7XG4gICAgICAgIGlmICh3b3JkQXQpIHtcbiAgICAgICAgICAgIHNlZW5bbW9kZWwuZ2V0VmFsdWVJblJhbmdlKHdvcmRBdCldID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpdGVyID0gbW9kZWwuY3JlYXRlV29yZEl0ZXJhdG9yKHdvcmREZWZSZWdFeHApLCBlID0gaXRlci5uZXh0KCk7ICFlLmRvbmUgJiYgc3VnZ2VzdGlvbnMubGVuZ3RoIDw9IEVkaXRvclNpbXBsZVdvcmtlci5fc3VnZ2VzdGlvbnNMaW1pdDsgZSA9IGl0ZXIubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgd29yZCA9IGUudmFsdWU7XG4gICAgICAgICAgICBpZiAoc2Vlblt3b3JkXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2Vlblt3b3JkXSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih3b3JkKSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIGtpbmQ6IDE4IC8qIFRleHQgKi8sXG4gICAgICAgICAgICAgICAgbGFiZWw6IHdvcmQsXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogd29yZCxcbiAgICAgICAgICAgICAgICByYW5nZTogeyBzdGFydExpbmVOdW1iZXI6IHBvc2l0aW9uLmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uOiB3b3JkVW50aWwuc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXI6IHBvc2l0aW9uLmxpbmVOdW1iZXIsIGVuZENvbHVtbjogd29yZFVudGlsLmVuZENvbHVtbiB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgc3VnZ2VzdGlvbnM6IHN1Z2dlc3Rpb25zIH0pO1xuICAgIH07XG4gICAgLy8gLS0tLSBFTkQgc3VnZ2VzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vI3JlZ2lvbiAtLSB3b3JkIHJhbmdlcyAtLVxuICAgIEVkaXRvclNpbXBsZVdvcmtlci5wcm90b3R5cGUuY29tcHV0ZVdvcmRSYW5nZXMgPSBmdW5jdGlvbiAobW9kZWxVcmwsIHJhbmdlLCB3b3JkRGVmLCB3b3JkRGVmRmxhZ3MpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5fZ2V0TW9kZWwobW9kZWxVcmwpO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3b3JkRGVmUmVnRXhwID0gbmV3IFJlZ0V4cCh3b3JkRGVmLCB3b3JkRGVmRmxhZ3MpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZm9yICh2YXIgbGluZSA9IHJhbmdlLnN0YXJ0TGluZU51bWJlcjsgbGluZSA8IHJhbmdlLmVuZExpbmVOdW1iZXI7IGxpbmUrKykge1xuICAgICAgICAgICAgdmFyIHdvcmRzID0gbW9kZWwuZ2V0TGluZVdvcmRzKGxpbmUsIHdvcmREZWZSZWdFeHApO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB3b3Jkc18xID0gd29yZHM7IF9pIDwgd29yZHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgd29yZCA9IHdvcmRzXzFbX2ldO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKHdvcmQud29yZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSByZXN1bHRbd29yZC53b3JkXTtcbiAgICAgICAgICAgICAgICBpZiAoIWFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt3b3JkLndvcmRdID0gYXJyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzdGFydExpbmVOdW1iZXI6IGxpbmUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiB3b3JkLnN0YXJ0Q29sdW1uLFxuICAgICAgICAgICAgICAgICAgICBlbmRMaW5lTnVtYmVyOiBsaW5lLFxuICAgICAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHdvcmQuZW5kQ29sdW1uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH07XG4gICAgLy8jZW5kcmVnaW9uXG4gICAgRWRpdG9yU2ltcGxlV29ya2VyLnByb3RvdHlwZS5uYXZpZ2F0ZVZhbHVlU2V0ID0gZnVuY3Rpb24gKG1vZGVsVXJsLCByYW5nZSwgdXAsIHdvcmREZWYsIHdvcmREZWZGbGFncykge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLl9nZXRNb2RlbChtb2RlbFVybCk7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdvcmREZWZSZWdFeHAgPSBuZXcgUmVnRXhwKHdvcmREZWYsIHdvcmREZWZGbGFncyk7XG4gICAgICAgIGlmIChyYW5nZS5zdGFydENvbHVtbiA9PT0gcmFuZ2UuZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBzdGFydExpbmVOdW1iZXI6IHJhbmdlLnN0YXJ0TGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogcmFuZ2Uuc3RhcnRDb2x1bW4sXG4gICAgICAgICAgICAgICAgZW5kTGluZU51bWJlcjogcmFuZ2UuZW5kTGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHJhbmdlLmVuZENvbHVtbiArIDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGVjdGlvblRleHQgPSBtb2RlbC5nZXRWYWx1ZUluUmFuZ2UocmFuZ2UpO1xuICAgICAgICB2YXIgd29yZFJhbmdlID0gbW9kZWwuZ2V0V29yZEF0UG9zaXRpb24oeyBsaW5lTnVtYmVyOiByYW5nZS5zdGFydExpbmVOdW1iZXIsIGNvbHVtbjogcmFuZ2Uuc3RhcnRDb2x1bW4gfSwgd29yZERlZlJlZ0V4cCk7XG4gICAgICAgIGlmICghd29yZFJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3b3JkID0gbW9kZWwuZ2V0VmFsdWVJblJhbmdlKHdvcmRSYW5nZSk7XG4gICAgICAgIHZhciByZXN1bHQgPSBCYXNpY0lucGxhY2VSZXBsYWNlLklOU1RBTkNFLm5hdmlnYXRlVmFsdWVTZXQocmFuZ2UsIHNlbGVjdGlvblRleHQsIHdvcmRSYW5nZSwgd29yZCwgdXApO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfTtcbiAgICAvLyAtLS0tIEJFR0lOIGZvcmVpZ24gbW9kdWxlIHN1cHBvcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmxvYWRGb3JlaWduTW9kdWxlID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBjcmVhdGVEYXRhLCBmb3JlaWduSG9zdE1ldGhvZHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHByb3h5TWV0aG9kUmVxdWVzdCA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5faG9zdC5maHIobWV0aG9kLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGZvcmVpZ25Ib3N0ID0gdHlwZXMuY3JlYXRlUHJveHlPYmplY3QoZm9yZWlnbkhvc3RNZXRob2RzLCBwcm94eU1ldGhvZFJlcXVlc3QpO1xuICAgICAgICB2YXIgY3R4ID0ge1xuICAgICAgICAgICAgaG9zdDogZm9yZWlnbkhvc3QsXG4gICAgICAgICAgICBnZXRNaXJyb3JNb2RlbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX2dldE1vZGVscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fZm9yZWlnbk1vZHVsZUZhY3RvcnkpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmVpZ25Nb2R1bGUgPSB0aGlzLl9mb3JlaWduTW9kdWxlRmFjdG9yeShjdHgsIGNyZWF0ZURhdGEpO1xuICAgICAgICAgICAgLy8gc3RhdGljIGZvcmVpbmcgbW9kdWxlXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHR5cGVzLmdldEFsbE1ldGhvZE5hbWVzKHRoaXMuX2ZvcmVpZ25Nb2R1bGUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFU00tY29tbWVudC1iZWdpblxuICAgICAgICAvLyBcdFx0cmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBcdFx0XHRyZXF1aXJlKFttb2R1bGVJZF0sIChmb3JlaWduTW9kdWxlOiB7IGNyZWF0ZTogSUZvcmVpZ25Nb2R1bGVGYWN0b3J5IH0pID0+IHtcbiAgICAgICAgLy8gXHRcdFx0XHR0aGlzLl9mb3JlaWduTW9kdWxlID0gZm9yZWlnbk1vZHVsZS5jcmVhdGUoY3R4LCBjcmVhdGVEYXRhKTtcbiAgICAgICAgLy8gXG4gICAgICAgIC8vIFx0XHRcdFx0cmVzb2x2ZSh0eXBlcy5nZXRBbGxNZXRob2ROYW1lcyh0aGlzLl9mb3JlaWduTW9kdWxlKSk7XG4gICAgICAgIC8vIFxuICAgICAgICAvLyBcdFx0XHR9LCByZWplY3QpO1xuICAgICAgICAvLyBcdFx0fSk7XG4gICAgICAgIC8vIEVTTS1jb21tZW50LWVuZFxuICAgICAgICAvLyBFU00tdW5jb21tZW50LWJlZ2luXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHVzYWdlXCIpKTtcbiAgICAgICAgLy8gRVNNLXVuY29tbWVudC1lbmRcbiAgICB9O1xuICAgIC8vIGZvcmVpZ24gbWV0aG9kIHJlcXVlc3RcbiAgICBFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmZtciA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9mb3JlaWduTW9kdWxlIHx8IHR5cGVvZiB0aGlzLl9mb3JlaWduTW9kdWxlW21ldGhvZF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWVzdEhhbmRsZXIgb3IgbWV0aG9kOiAnICsgbWV0aG9kKSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fZm9yZWlnbk1vZHVsZVttZXRob2RdLmFwcGx5KHRoaXMuX2ZvcmVpZ25Nb2R1bGUsIGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyAtLS0tIEVORCBkaWZmIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gLS0tLSBCRUdJTiBtaW5pbWFsIGVkaXRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEVkaXRvclNpbXBsZVdvcmtlci5fZGlmZkxpbWl0ID0gMTAwMDAwO1xuICAgIC8vIC0tLS0gQkVHSU4gc3VnZ2VzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEVkaXRvclNpbXBsZVdvcmtlci5fc3VnZ2VzdGlvbnNMaW1pdCA9IDEwMDAwO1xuICAgIHJldHVybiBFZGl0b3JTaW1wbGVXb3JrZXI7XG59KCkpO1xuZXhwb3J0IHsgRWRpdG9yU2ltcGxlV29ya2VyIH07XG4vKipcbiAqIENhbGxlZCBvbiB0aGUgd29ya2VyIHNpZGVcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKGhvc3QpIHtcbiAgICByZXR1cm4gbmV3IEVkaXRvclNpbXBsZVdvcmtlcihob3N0LCBudWxsKTtcbn1cbmlmICh0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFJ1bm5pbmcgaW4gYSB3ZWIgd29ya2VyXG4gICAgZ2xvYmFscy5tb25hY28gPSBjcmVhdGVNb25hY29CYXNlQVBJKCk7XG59XG4iLCIvKiFcbkNvcHlyaWdodCAoYykgMjAxNCBUYXlsb3IgSGFrZXNcbkNvcHlyaWdodCAoYykgMjAxNCBGb3JiZXMgTGluZGVzYXlcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcblx0XHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHRcdFx0KGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQHRoaXMge1Byb21pc2V9XG5cdCAqL1xuXHRmdW5jdGlvbiBmaW5hbGx5Q29uc3RydWN0b3IoY2FsbGJhY2spIHtcblx0XHR2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXHRcdHJldHVybiB0aGlzLnRoZW4oXG5cdFx0XHRmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5yZWplY3QocmVhc29uKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdC8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIHByb21pc2UtcG9seWZpbGwgd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG5cdC8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxuXHR2YXIgc2V0VGltZW91dEZ1bmMgPSBzZXRUaW1lb3V0O1xuXG5cdGZ1bmN0aW9uIG5vb3AoKSB7IH1cblxuXHQvLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcblx0ZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG5cdCAqL1xuXHRmdW5jdGlvbiBQcm9taXNlKGZuKSB7XG5cdFx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG5cdFx0aWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcblx0XHQvKiogQHR5cGUgeyFudW1iZXJ9ICovXG5cdFx0dGhpcy5fc3RhdGUgPSAwO1xuXHRcdC8qKiBAdHlwZSB7IWJvb2xlYW59ICovXG5cdFx0dGhpcy5faGFuZGxlZCA9IGZhbHNlO1xuXHRcdC8qKiBAdHlwZSB7UHJvbWlzZXx1bmRlZmluZWR9ICovXG5cdFx0dGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0LyoqIEB0eXBlIHshQXJyYXk8IUZ1bmN0aW9uPn0gKi9cblx0XHR0aGlzLl9kZWZlcnJlZHMgPSBbXTtcblxuXHRcdGRvUmVzb2x2ZShmbiwgdGhpcyk7XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGUoc2VsZiwgZGVmZXJyZWQpIHtcblx0XHR3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcblx0XHRcdHNlbGYgPSBzZWxmLl92YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG5cdFx0XHRzZWxmLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNlbGYuX2hhbmRsZWQgPSB0cnVlO1xuXHRcdFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBjYiA9IHNlbGYuX3N0YXRlID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuXHRcdFx0aWYgKGNiID09PSBudWxsKSB7XG5cdFx0XHRcdChzZWxmLl9zdGF0ZSA9PT0gMSA/IHJlc29sdmUgOiByZWplY3QpKGRlZmVycmVkLnByb21pc2UsIHNlbGYuX3ZhbHVlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHJldDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmVqZWN0KGRlZmVycmVkLnByb21pc2UsIGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKGRlZmVycmVkLnByb21pc2UsIHJldCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZXNvbHZlKHNlbGYsIG5ld1ZhbHVlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG5cdFx0XHRpZiAobmV3VmFsdWUgPT09IHNlbGYpXG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld1ZhbHVlICYmXG5cdFx0XHRcdCh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcblx0XHRcdCkge1xuXHRcdFx0XHR2YXIgdGhlbiA9IG5ld1ZhbHVlLnRoZW47XG5cdFx0XHRcdGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcblx0XHRcdFx0XHRzZWxmLl9zdGF0ZSA9IDM7XG5cdFx0XHRcdFx0c2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcblx0XHRcdFx0XHRmaW5hbGUoc2VsZik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0ZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlbGYuX3N0YXRlID0gMTtcblx0XHRcdHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG5cdFx0XHRmaW5hbGUoc2VsZik7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmVqZWN0KHNlbGYsIGUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlamVjdChzZWxmLCBuZXdWYWx1ZSkge1xuXHRcdHNlbGYuX3N0YXRlID0gMjtcblx0XHRzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdGZpbmFsZShzZWxmKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGZpbmFsZShzZWxmKSB7XG5cdFx0aWYgKHNlbGYuX3N0YXRlID09PSAyICYmIHNlbGYuX2RlZmVycmVkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKCFzZWxmLl9oYW5kbGVkKSB7XG5cdFx0XHRcdFx0UHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oc2VsZi5fdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZi5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcblx0XHR9XG5cdFx0c2VsZi5fZGVmZXJyZWRzID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdGZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcblx0XHR0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xuXHRcdHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG5cdFx0dGhpcy5wcm9taXNlID0gcHJvbWlzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUYWtlIGEgcG90ZW50aWFsbHkgbWlzYmVoYXZpbmcgcmVzb2x2ZXIgZnVuY3Rpb24gYW5kIG1ha2Ugc3VyZVxuXHQgKiBvbkZ1bGZpbGxlZCBhbmQgb25SZWplY3RlZCBhcmUgb25seSBjYWxsZWQgb25jZS5cblx0ICpcblx0ICogTWFrZXMgbm8gZ3VhcmFudGVlcyBhYm91dCBhc3luY2hyb255LlxuXHQgKi9cblx0ZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG5cdFx0dmFyIGRvbmUgPSBmYWxzZTtcblx0XHR0cnkge1xuXHRcdFx0Zm4oXG5cdFx0XHRcdGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdGlmIChkb25lKSByZXR1cm47XG5cdFx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdFx0cmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0XHRcdGRvbmUgPSB0cnVlO1xuXHRcdFx0XHRcdHJlamVjdChzZWxmLCByZWFzb24pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRpZiAoZG9uZSkgcmV0dXJuO1xuXHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRyZWplY3Qoc2VsZiwgZXgpO1xuXHRcdH1cblx0fVxuXG5cdFByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuXHR9O1xuXG5cdFByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0dmFyIHByb20gPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuXHRcdGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbSkpO1xuXHRcdHJldHVybiBwcm9tO1xuXHR9O1xuXG5cdFByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBmaW5hbGx5Q29uc3RydWN0b3I7XG5cblx0UHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAoYXJyKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdGlmICghYXJyIHx8IHR5cGVvZiBhcnIubGVuZ3RoID09PSAndW5kZWZpbmVkJylcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheScpO1xuXHRcdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuXHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG5cdFx0XHR2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG5cblx0XHRcdGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRcdFx0dmFyIHRoZW4gPSB2YWwudGhlbjtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0dmFsLFxuXHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlcyhpLCB2YWwpO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YXJnc1tpXSA9IHZhbDtcblx0XHRcdFx0XHRpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcblx0XHRcdFx0XHRcdHJlc29sdmUoYXJncyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHRcdHJlamVjdChleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHJlcyhpLCBhcmdzW2ldKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRQcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdFx0fSk7XG5cdH07XG5cblx0UHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0cmVqZWN0KHZhbHVlKTtcblx0XHR9KTtcblx0fTtcblxuXHRQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0dmFsdWVzW2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHQvLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcblx0UHJvbWlzZS5faW1tZWRpYXRlRm4gPVxuXHRcdCh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmXG5cdFx0XHRmdW5jdGlvbiAoZm4pIHtcblx0XHRcdFx0c2V0SW1tZWRpYXRlKGZuKTtcblx0XHRcdH0pIHx8XG5cdFx0ZnVuY3Rpb24gKGZuKSB7XG5cdFx0XHRzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XG5cdFx0fTtcblxuXHRQcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcblx0XHRpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUpIHtcblx0XHRcdGNvbnNvbGUud2FybignUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOicsIGVycik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHRcdH1cblx0fTtcblxuXHQvKiogQHN1cHByZXNzIHt1bmRlZmluZWRWYXJzfSAqL1xuXHR2YXIgZ2xvYmFsTlMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xuXHRcdC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuXHRcdC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuXHRcdGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBzZWxmO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiB3aW5kb3c7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGdsb2JhbDtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcblx0fSkoKTtcblxuXHRpZiAoISgnUHJvbWlzZScgaW4gZ2xvYmFsTlMpKSB7XG5cdFx0Z2xvYmFsTlNbJ1Byb21pc2UnXSA9IFByb21pc2U7XG5cdH0gZWxzZSBpZiAoIWdsb2JhbE5TLlByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10pIHtcblx0XHRnbG9iYWxOUy5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddID0gZmluYWxseUNvbnN0cnVjdG9yO1xuXHR9XG5cbn0pKSk7XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCAnLi9wcm9taXNlLXBvbHlmaWxsL3BvbHlmaWxsLmpzJztcbmltcG9ydCB7IENhbmNlbGxhdGlvblRva2VuU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jb21tb24vY2FuY2VsbGF0aW9uLmpzJztcbmltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi9ldmVudC5qcyc7XG5pbXBvcnQgeyBLZXlDaG9yZCB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL2tleUNvZGVzLmpzJztcbmltcG9ydCB7IFVSSSB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL3VyaS5qcyc7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL2NvcmUvcG9zaXRpb24uanMnO1xuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuLi9jb3JlL3JhbmdlLmpzJztcbmltcG9ydCB7IFNlbGVjdGlvbiB9IGZyb20gJy4uL2NvcmUvc2VsZWN0aW9uLmpzJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vY29yZS90b2tlbi5qcyc7XG5pbXBvcnQgKiBhcyBzdGFuZGFsb25lRW51bXMgZnJvbSAnLi9zdGFuZGFsb25lRW51bXMuanMnO1xudmFyIEtleU1vZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZXlNb2QoKSB7XG4gICAgfVxuICAgIEtleU1vZC5jaG9yZCA9IGZ1bmN0aW9uIChmaXJzdFBhcnQsIHNlY29uZFBhcnQpIHtcbiAgICAgICAgcmV0dXJuIEtleUNob3JkKGZpcnN0UGFydCwgc2Vjb25kUGFydCk7XG4gICAgfTtcbiAgICBLZXlNb2QuQ3RybENtZCA9IDIwNDggLyogQ3RybENtZCAqLztcbiAgICBLZXlNb2QuU2hpZnQgPSAxMDI0IC8qIFNoaWZ0ICovO1xuICAgIEtleU1vZC5BbHQgPSA1MTIgLyogQWx0ICovO1xuICAgIEtleU1vZC5XaW5DdHJsID0gMjU2IC8qIFdpbkN0cmwgKi87XG4gICAgcmV0dXJuIEtleU1vZDtcbn0oKSk7XG5leHBvcnQgeyBLZXlNb2QgfTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb25hY29CYXNlQVBJKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVkaXRvcjogdW5kZWZpbmVkLFxuICAgICAgICBsYW5ndWFnZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2U6IENhbmNlbGxhdGlvblRva2VuU291cmNlLFxuICAgICAgICBFbWl0dGVyOiBFbWl0dGVyLFxuICAgICAgICBLZXlDb2RlOiBzdGFuZGFsb25lRW51bXMuS2V5Q29kZSxcbiAgICAgICAgS2V5TW9kOiBLZXlNb2QsXG4gICAgICAgIFBvc2l0aW9uOiBQb3NpdGlvbixcbiAgICAgICAgUmFuZ2U6IFJhbmdlLFxuICAgICAgICBTZWxlY3Rpb246IFNlbGVjdGlvbixcbiAgICAgICAgU2VsZWN0aW9uRGlyZWN0aW9uOiBzdGFuZGFsb25lRW51bXMuU2VsZWN0aW9uRGlyZWN0aW9uLFxuICAgICAgICBNYXJrZXJTZXZlcml0eTogc3RhbmRhbG9uZUVudW1zLk1hcmtlclNldmVyaXR5LFxuICAgICAgICBNYXJrZXJUYWc6IHN0YW5kYWxvbmVFbnVtcy5NYXJrZXJUYWcsXG4gICAgICAgIFVyaTogVVJJLFxuICAgICAgICBUb2tlbjogVG9rZW5cbiAgICB9O1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEUuIERPIE5PVCBFRElUIERJUkVDVExZLlxuZXhwb3J0IHZhciBNYXJrZXJUYWc7XG4oZnVuY3Rpb24gKE1hcmtlclRhZykge1xuICAgIE1hcmtlclRhZ1tNYXJrZXJUYWdbXCJVbm5lY2Vzc2FyeVwiXSA9IDFdID0gXCJVbm5lY2Vzc2FyeVwiO1xuICAgIE1hcmtlclRhZ1tNYXJrZXJUYWdbXCJEZXByZWNhdGVkXCJdID0gMl0gPSBcIkRlcHJlY2F0ZWRcIjtcbn0pKE1hcmtlclRhZyB8fCAoTWFya2VyVGFnID0ge30pKTtcbmV4cG9ydCB2YXIgTWFya2VyU2V2ZXJpdHk7XG4oZnVuY3Rpb24gKE1hcmtlclNldmVyaXR5KSB7XG4gICAgTWFya2VyU2V2ZXJpdHlbTWFya2VyU2V2ZXJpdHlbXCJIaW50XCJdID0gMV0gPSBcIkhpbnRcIjtcbiAgICBNYXJrZXJTZXZlcml0eVtNYXJrZXJTZXZlcml0eVtcIkluZm9cIl0gPSAyXSA9IFwiSW5mb1wiO1xuICAgIE1hcmtlclNldmVyaXR5W01hcmtlclNldmVyaXR5W1wiV2FybmluZ1wiXSA9IDRdID0gXCJXYXJuaW5nXCI7XG4gICAgTWFya2VyU2V2ZXJpdHlbTWFya2VyU2V2ZXJpdHlbXCJFcnJvclwiXSA9IDhdID0gXCJFcnJvclwiO1xufSkoTWFya2VyU2V2ZXJpdHkgfHwgKE1hcmtlclNldmVyaXR5ID0ge30pKTtcbi8qKlxuICogVmlydHVhbCBLZXkgQ29kZXMsIHRoZSB2YWx1ZSBkb2VzIG5vdCBob2xkIGFueSBpbmhlcmVudCBtZWFuaW5nLlxuICogSW5zcGlyZWQgc29tZXdoYXQgZnJvbSBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L3dpbmRvd3MvZGVza3RvcC9kZDM3NTczMSh2PXZzLjg1KS5hc3B4XG4gKiBCdXQgdGhlc2UgYXJlIFwibW9yZSBnZW5lcmFsXCIsIGFzIHRoZXkgc2hvdWxkIHdvcmsgYWNyb3NzIGJyb3dzZXJzICYgT1Ngcy5cbiAqL1xuZXhwb3J0IHZhciBLZXlDb2RlO1xuKGZ1bmN0aW9uIChLZXlDb2RlKSB7XG4gICAgLyoqXG4gICAgICogUGxhY2VkIGZpcnN0IHRvIGNvdmVyIHRoZSAwIHZhbHVlIG9mIHRoZSBlbnVtLlxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVua25vd25cIl0gPSAwXSA9IFwiVW5rbm93blwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkJhY2tzcGFjZVwiXSA9IDFdID0gXCJCYWNrc3BhY2VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJUYWJcIl0gPSAyXSA9IFwiVGFiXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRW50ZXJcIl0gPSAzXSA9IFwiRW50ZXJcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJTaGlmdFwiXSA9IDRdID0gXCJTaGlmdFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkN0cmxcIl0gPSA1XSA9IFwiQ3RybFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkFsdFwiXSA9IDZdID0gXCJBbHRcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJQYXVzZUJyZWFrXCJdID0gN10gPSBcIlBhdXNlQnJlYWtcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJDYXBzTG9ja1wiXSA9IDhdID0gXCJDYXBzTG9ja1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkVzY2FwZVwiXSA9IDldID0gXCJFc2NhcGVcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJTcGFjZVwiXSA9IDEwXSA9IFwiU3BhY2VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJQYWdlVXBcIl0gPSAxMV0gPSBcIlBhZ2VVcFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlBhZ2VEb3duXCJdID0gMTJdID0gXCJQYWdlRG93blwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkVuZFwiXSA9IDEzXSA9IFwiRW5kXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiSG9tZVwiXSA9IDE0XSA9IFwiSG9tZVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkxlZnRBcnJvd1wiXSA9IDE1XSA9IFwiTGVmdEFycm93XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVXBBcnJvd1wiXSA9IDE2XSA9IFwiVXBBcnJvd1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlJpZ2h0QXJyb3dcIl0gPSAxN10gPSBcIlJpZ2h0QXJyb3dcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJEb3duQXJyb3dcIl0gPSAxOF0gPSBcIkRvd25BcnJvd1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkluc2VydFwiXSA9IDE5XSA9IFwiSW5zZXJ0XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRGVsZXRlXCJdID0gMjBdID0gXCJEZWxldGVcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfMFwiXSA9IDIxXSA9IFwiS0VZXzBcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfMVwiXSA9IDIyXSA9IFwiS0VZXzFcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfMlwiXSA9IDIzXSA9IFwiS0VZXzJcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfM1wiXSA9IDI0XSA9IFwiS0VZXzNcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfNFwiXSA9IDI1XSA9IFwiS0VZXzRcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfNVwiXSA9IDI2XSA9IFwiS0VZXzVcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfNlwiXSA9IDI3XSA9IFwiS0VZXzZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfN1wiXSA9IDI4XSA9IFwiS0VZXzdcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfOFwiXSA9IDI5XSA9IFwiS0VZXzhcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfOVwiXSA9IDMwXSA9IFwiS0VZXzlcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfQVwiXSA9IDMxXSA9IFwiS0VZX0FcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfQlwiXSA9IDMyXSA9IFwiS0VZX0JcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfQ1wiXSA9IDMzXSA9IFwiS0VZX0NcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfRFwiXSA9IDM0XSA9IFwiS0VZX0RcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfRVwiXSA9IDM1XSA9IFwiS0VZX0VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfRlwiXSA9IDM2XSA9IFwiS0VZX0ZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfR1wiXSA9IDM3XSA9IFwiS0VZX0dcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfSFwiXSA9IDM4XSA9IFwiS0VZX0hcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfSVwiXSA9IDM5XSA9IFwiS0VZX0lcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfSlwiXSA9IDQwXSA9IFwiS0VZX0pcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfS1wiXSA9IDQxXSA9IFwiS0VZX0tcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfTFwiXSA9IDQyXSA9IFwiS0VZX0xcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfTVwiXSA9IDQzXSA9IFwiS0VZX01cIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfTlwiXSA9IDQ0XSA9IFwiS0VZX05cIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfT1wiXSA9IDQ1XSA9IFwiS0VZX09cIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfUFwiXSA9IDQ2XSA9IFwiS0VZX1BcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfUVwiXSA9IDQ3XSA9IFwiS0VZX1FcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfUlwiXSA9IDQ4XSA9IFwiS0VZX1JcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfU1wiXSA9IDQ5XSA9IFwiS0VZX1NcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfVFwiXSA9IDUwXSA9IFwiS0VZX1RcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfVVwiXSA9IDUxXSA9IFwiS0VZX1VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfVlwiXSA9IDUyXSA9IFwiS0VZX1ZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfV1wiXSA9IDUzXSA9IFwiS0VZX1dcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfWFwiXSA9IDU0XSA9IFwiS0VZX1hcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfWVwiXSA9IDU1XSA9IFwiS0VZX1lcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfWlwiXSA9IDU2XSA9IFwiS0VZX1pcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJNZXRhXCJdID0gNTddID0gXCJNZXRhXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiQ29udGV4dE1lbnVcIl0gPSA1OF0gPSBcIkNvbnRleHRNZW51XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjFcIl0gPSA1OV0gPSBcIkYxXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjJcIl0gPSA2MF0gPSBcIkYyXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjNcIl0gPSA2MV0gPSBcIkYzXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjRcIl0gPSA2Ml0gPSBcIkY0XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjVcIl0gPSA2M10gPSBcIkY1XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjZcIl0gPSA2NF0gPSBcIkY2XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjdcIl0gPSA2NV0gPSBcIkY3XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjhcIl0gPSA2Nl0gPSBcIkY4XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjlcIl0gPSA2N10gPSBcIkY5XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjEwXCJdID0gNjhdID0gXCJGMTBcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJGMTFcIl0gPSA2OV0gPSBcIkYxMVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkYxMlwiXSA9IDcwXSA9IFwiRjEyXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjEzXCJdID0gNzFdID0gXCJGMTNcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJGMTRcIl0gPSA3Ml0gPSBcIkYxNFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkYxNVwiXSA9IDczXSA9IFwiRjE1XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjE2XCJdID0gNzRdID0gXCJGMTZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJGMTdcIl0gPSA3NV0gPSBcIkYxN1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkYxOFwiXSA9IDc2XSA9IFwiRjE4XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjE5XCJdID0gNzddID0gXCJGMTlcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOdW1Mb2NrXCJdID0gNzhdID0gXCJOdW1Mb2NrXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiU2Nyb2xsTG9ja1wiXSA9IDc5XSA9IFwiU2Nyb2xsTG9ja1wiO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1pc2NlbGxhbmVvdXMgY2hhcmFjdGVyczsgaXQgY2FuIHZhcnkgYnkga2V5Ym9hcmQuXG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICc7Oicga2V5XG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVVNfU0VNSUNPTE9OXCJdID0gODBdID0gXCJVU19TRU1JQ09MT05cIjtcbiAgICAvKipcbiAgICAgKiBGb3IgYW55IGNvdW50cnkvcmVnaW9uLCB0aGUgJysnIGtleVxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnPSsnIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0VRVUFMXCJdID0gODFdID0gXCJVU19FUVVBTFwiO1xuICAgIC8qKlxuICAgICAqIEZvciBhbnkgY291bnRyeS9yZWdpb24sIHRoZSAnLCcga2V5XG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICcsPCcga2V5XG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVVNfQ09NTUFcIl0gPSA4Ml0gPSBcIlVTX0NPTU1BXCI7XG4gICAgLyoqXG4gICAgICogRm9yIGFueSBjb3VudHJ5L3JlZ2lvbiwgdGhlICctJyBrZXlcbiAgICAgKiBGb3IgdGhlIFVTIHN0YW5kYXJkIGtleWJvYXJkLCB0aGUgJy1fJyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19NSU5VU1wiXSA9IDgzXSA9IFwiVVNfTUlOVVNcIjtcbiAgICAvKipcbiAgICAgKiBGb3IgYW55IGNvdW50cnkvcmVnaW9uLCB0aGUgJy4nIGtleVxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnLj4nIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0RPVFwiXSA9IDg0XSA9IFwiVVNfRE9UXCI7XG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgbWlzY2VsbGFuZW91cyBjaGFyYWN0ZXJzOyBpdCBjYW4gdmFyeSBieSBrZXlib2FyZC5cbiAgICAgKiBGb3IgdGhlIFVTIHN0YW5kYXJkIGtleWJvYXJkLCB0aGUgJy8/JyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19TTEFTSFwiXSA9IDg1XSA9IFwiVVNfU0xBU0hcIjtcbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBtaXNjZWxsYW5lb3VzIGNoYXJhY3RlcnM7IGl0IGNhbiB2YXJ5IGJ5IGtleWJvYXJkLlxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnYH4nIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0JBQ0tUSUNLXCJdID0gODZdID0gXCJVU19CQUNLVElDS1wiO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1pc2NlbGxhbmVvdXMgY2hhcmFjdGVyczsgaXQgY2FuIHZhcnkgYnkga2V5Ym9hcmQuXG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICdbeycga2V5XG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVVNfT1BFTl9TUVVBUkVfQlJBQ0tFVFwiXSA9IDg3XSA9IFwiVVNfT1BFTl9TUVVBUkVfQlJBQ0tFVFwiO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1pc2NlbGxhbmVvdXMgY2hhcmFjdGVyczsgaXQgY2FuIHZhcnkgYnkga2V5Ym9hcmQuXG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICdcXHwnIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0JBQ0tTTEFTSFwiXSA9IDg4XSA9IFwiVVNfQkFDS1NMQVNIXCI7XG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgbWlzY2VsbGFuZW91cyBjaGFyYWN0ZXJzOyBpdCBjYW4gdmFyeSBieSBrZXlib2FyZC5cbiAgICAgKiBGb3IgdGhlIFVTIHN0YW5kYXJkIGtleWJvYXJkLCB0aGUgJ119JyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19DTE9TRV9TUVVBUkVfQlJBQ0tFVFwiXSA9IDg5XSA9IFwiVVNfQ0xPU0VfU1FVQVJFX0JSQUNLRVRcIjtcbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBtaXNjZWxsYW5lb3VzIGNoYXJhY3RlcnM7IGl0IGNhbiB2YXJ5IGJ5IGtleWJvYXJkLlxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnJ1wiJyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19RVU9URVwiXSA9IDkwXSA9IFwiVVNfUVVPVEVcIjtcbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBtaXNjZWxsYW5lb3VzIGNoYXJhY3RlcnM7IGl0IGNhbiB2YXJ5IGJ5IGtleWJvYXJkLlxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk9FTV84XCJdID0gOTFdID0gXCJPRU1fOFwiO1xuICAgIC8qKlxuICAgICAqIEVpdGhlciB0aGUgYW5nbGUgYnJhY2tldCBrZXkgb3IgdGhlIGJhY2tzbGFzaCBrZXkgb24gdGhlIFJUIDEwMi1rZXkga2V5Ym9hcmQuXG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiT0VNXzEwMlwiXSA9IDkyXSA9IFwiT0VNXzEwMlwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8wXCJdID0gOTNdID0gXCJOVU1QQURfMFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8xXCJdID0gOTRdID0gXCJOVU1QQURfMVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8yXCJdID0gOTVdID0gXCJOVU1QQURfMlwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8zXCJdID0gOTZdID0gXCJOVU1QQURfM1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF80XCJdID0gOTddID0gXCJOVU1QQURfNFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF81XCJdID0gOThdID0gXCJOVU1QQURfNVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF82XCJdID0gOTldID0gXCJOVU1QQURfNlwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF83XCJdID0gMTAwXSA9IFwiTlVNUEFEXzdcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOVU1QQURfOFwiXSA9IDEwMV0gPSBcIk5VTVBBRF84XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiTlVNUEFEXzlcIl0gPSAxMDJdID0gXCJOVU1QQURfOVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF9NVUxUSVBMWVwiXSA9IDEwM10gPSBcIk5VTVBBRF9NVUxUSVBMWVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF9BRERcIl0gPSAxMDRdID0gXCJOVU1QQURfQUREXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiTlVNUEFEX1NFUEFSQVRPUlwiXSA9IDEwNV0gPSBcIk5VTVBBRF9TRVBBUkFUT1JcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOVU1QQURfU1VCVFJBQ1RcIl0gPSAxMDZdID0gXCJOVU1QQURfU1VCVFJBQ1RcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOVU1QQURfREVDSU1BTFwiXSA9IDEwN10gPSBcIk5VTVBBRF9ERUNJTUFMXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiTlVNUEFEX0RJVklERVwiXSA9IDEwOF0gPSBcIk5VTVBBRF9ESVZJREVcIjtcbiAgICAvKipcbiAgICAgKiBDb3ZlciBhbGwga2V5IGNvZGVzIHdoZW4gSU1FIGlzIHByb2Nlc3NpbmcgaW5wdXQuXG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiS0VZX0lOX0NPTVBPU0lUSU9OXCJdID0gMTA5XSA9IFwiS0VZX0lOX0NPTVBPU0lUSU9OXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiQUJOVF9DMVwiXSA9IDExMF0gPSBcIkFCTlRfQzFcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJBQk5UX0MyXCJdID0gMTExXSA9IFwiQUJOVF9DMlwiO1xuICAgIC8qKlxuICAgICAqIFBsYWNlZCBsYXN0IHRvIGNvdmVyIHRoZSBsZW5ndGggb2YgdGhlIGVudW0uXG4gICAgICogUGxlYXNlIGRvIG5vdCBkZXBlbmQgb24gdGhpcyB2YWx1ZSFcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJNQVhfVkFMVUVcIl0gPSAxMTJdID0gXCJNQVhfVkFMVUVcIjtcbn0pKEtleUNvZGUgfHwgKEtleUNvZGUgPSB7fSkpO1xuLyoqXG4gKiBUaGUgZGlyZWN0aW9uIG9mIGEgc2VsZWN0aW9uLlxuICovXG5leHBvcnQgdmFyIFNlbGVjdGlvbkRpcmVjdGlvbjtcbihmdW5jdGlvbiAoU2VsZWN0aW9uRGlyZWN0aW9uKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGlvbiBzdGFydHMgYWJvdmUgd2hlcmUgaXQgZW5kcy5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb25EaXJlY3Rpb25bU2VsZWN0aW9uRGlyZWN0aW9uW1wiTFRSXCJdID0gMF0gPSBcIkxUUlwiO1xuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3Rpb24gc3RhcnRzIGJlbG93IHdoZXJlIGl0IGVuZHMuXG4gICAgICovXG4gICAgU2VsZWN0aW9uRGlyZWN0aW9uW1NlbGVjdGlvbkRpcmVjdGlvbltcIlJUTFwiXSA9IDFdID0gXCJSVExcIjtcbn0pKFNlbGVjdGlvbkRpcmVjdGlvbiB8fCAoU2VsZWN0aW9uRGlyZWN0aW9uID0ge30pKTtcbmV4cG9ydCB2YXIgU2Nyb2xsYmFyVmlzaWJpbGl0eTtcbihmdW5jdGlvbiAoU2Nyb2xsYmFyVmlzaWJpbGl0eSkge1xuICAgIFNjcm9sbGJhclZpc2liaWxpdHlbU2Nyb2xsYmFyVmlzaWJpbGl0eVtcIkF1dG9cIl0gPSAxXSA9IFwiQXV0b1wiO1xuICAgIFNjcm9sbGJhclZpc2liaWxpdHlbU2Nyb2xsYmFyVmlzaWJpbGl0eVtcIkhpZGRlblwiXSA9IDJdID0gXCJIaWRkZW5cIjtcbiAgICBTY3JvbGxiYXJWaXNpYmlsaXR5W1Njcm9sbGJhclZpc2liaWxpdHlbXCJWaXNpYmxlXCJdID0gM10gPSBcIlZpc2libGVcIjtcbn0pKFNjcm9sbGJhclZpc2liaWxpdHkgfHwgKFNjcm9sbGJhclZpc2liaWxpdHkgPSB7fSkpO1xuLyoqXG4gKiBWZXJ0aWNhbCBMYW5lIGluIHRoZSBvdmVydmlldyBydWxlciBvZiB0aGUgZWRpdG9yLlxuICovXG5leHBvcnQgdmFyIE92ZXJ2aWV3UnVsZXJMYW5lO1xuKGZ1bmN0aW9uIChPdmVydmlld1J1bGVyTGFuZSkge1xuICAgIE92ZXJ2aWV3UnVsZXJMYW5lW092ZXJ2aWV3UnVsZXJMYW5lW1wiTGVmdFwiXSA9IDFdID0gXCJMZWZ0XCI7XG4gICAgT3ZlcnZpZXdSdWxlckxhbmVbT3ZlcnZpZXdSdWxlckxhbmVbXCJDZW50ZXJcIl0gPSAyXSA9IFwiQ2VudGVyXCI7XG4gICAgT3ZlcnZpZXdSdWxlckxhbmVbT3ZlcnZpZXdSdWxlckxhbmVbXCJSaWdodFwiXSA9IDRdID0gXCJSaWdodFwiO1xuICAgIE92ZXJ2aWV3UnVsZXJMYW5lW092ZXJ2aWV3UnVsZXJMYW5lW1wiRnVsbFwiXSA9IDddID0gXCJGdWxsXCI7XG59KShPdmVydmlld1J1bGVyTGFuZSB8fCAoT3ZlcnZpZXdSdWxlckxhbmUgPSB7fSkpO1xuLyoqXG4gKiBQb3NpdGlvbiBpbiB0aGUgbWluaW1hcCB0byByZW5kZXIgdGhlIGRlY29yYXRpb24uXG4gKi9cbmV4cG9ydCB2YXIgTWluaW1hcFBvc2l0aW9uO1xuKGZ1bmN0aW9uIChNaW5pbWFwUG9zaXRpb24pIHtcbiAgICBNaW5pbWFwUG9zaXRpb25bTWluaW1hcFBvc2l0aW9uW1wiSW5saW5lXCJdID0gMV0gPSBcIklubGluZVwiO1xufSkoTWluaW1hcFBvc2l0aW9uIHx8IChNaW5pbWFwUG9zaXRpb24gPSB7fSkpO1xuLyoqXG4gKiBFbmQgb2YgbGluZSBjaGFyYWN0ZXIgcHJlZmVyZW5jZS5cbiAqL1xuZXhwb3J0IHZhciBFbmRPZkxpbmVQcmVmZXJlbmNlO1xuKGZ1bmN0aW9uIChFbmRPZkxpbmVQcmVmZXJlbmNlKSB7XG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBlbmQgb2YgbGluZSBjaGFyYWN0ZXIgaWRlbnRpZmllZCBpbiB0aGUgdGV4dCBidWZmZXIuXG4gICAgICovXG4gICAgRW5kT2ZMaW5lUHJlZmVyZW5jZVtFbmRPZkxpbmVQcmVmZXJlbmNlW1wiVGV4dERlZmluZWRcIl0gPSAwXSA9IFwiVGV4dERlZmluZWRcIjtcbiAgICAvKipcbiAgICAgKiBVc2UgbGluZSBmZWVkIChcXG4pIGFzIHRoZSBlbmQgb2YgbGluZSBjaGFyYWN0ZXIuXG4gICAgICovXG4gICAgRW5kT2ZMaW5lUHJlZmVyZW5jZVtFbmRPZkxpbmVQcmVmZXJlbmNlW1wiTEZcIl0gPSAxXSA9IFwiTEZcIjtcbiAgICAvKipcbiAgICAgKiBVc2UgY2FycmlhZ2UgcmV0dXJuIGFuZCBsaW5lIGZlZWQgKFxcclxcbikgYXMgdGhlIGVuZCBvZiBsaW5lIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICBFbmRPZkxpbmVQcmVmZXJlbmNlW0VuZE9mTGluZVByZWZlcmVuY2VbXCJDUkxGXCJdID0gMl0gPSBcIkNSTEZcIjtcbn0pKEVuZE9mTGluZVByZWZlcmVuY2UgfHwgKEVuZE9mTGluZVByZWZlcmVuY2UgPSB7fSkpO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBlbmQgb2YgbGluZSB0byB1c2Ugd2hlbiBpbnN0YW50aWF0aW5nIG1vZGVscy5cbiAqL1xuZXhwb3J0IHZhciBEZWZhdWx0RW5kT2ZMaW5lO1xuKGZ1bmN0aW9uIChEZWZhdWx0RW5kT2ZMaW5lKSB7XG4gICAgLyoqXG4gICAgICogVXNlIGxpbmUgZmVlZCAoXFxuKSBhcyB0aGUgZW5kIG9mIGxpbmUgY2hhcmFjdGVyLlxuICAgICAqL1xuICAgIERlZmF1bHRFbmRPZkxpbmVbRGVmYXVsdEVuZE9mTGluZVtcIkxGXCJdID0gMV0gPSBcIkxGXCI7XG4gICAgLyoqXG4gICAgICogVXNlIGNhcnJpYWdlIHJldHVybiBhbmQgbGluZSBmZWVkIChcXHJcXG4pIGFzIHRoZSBlbmQgb2YgbGluZSBjaGFyYWN0ZXIuXG4gICAgICovXG4gICAgRGVmYXVsdEVuZE9mTGluZVtEZWZhdWx0RW5kT2ZMaW5lW1wiQ1JMRlwiXSA9IDJdID0gXCJDUkxGXCI7XG59KShEZWZhdWx0RW5kT2ZMaW5lIHx8IChEZWZhdWx0RW5kT2ZMaW5lID0ge30pKTtcbi8qKlxuICogRW5kIG9mIGxpbmUgY2hhcmFjdGVyIHByZWZlcmVuY2UuXG4gKi9cbmV4cG9ydCB2YXIgRW5kT2ZMaW5lU2VxdWVuY2U7XG4oZnVuY3Rpb24gKEVuZE9mTGluZVNlcXVlbmNlKSB7XG4gICAgLyoqXG4gICAgICogVXNlIGxpbmUgZmVlZCAoXFxuKSBhcyB0aGUgZW5kIG9mIGxpbmUgY2hhcmFjdGVyLlxuICAgICAqL1xuICAgIEVuZE9mTGluZVNlcXVlbmNlW0VuZE9mTGluZVNlcXVlbmNlW1wiTEZcIl0gPSAwXSA9IFwiTEZcIjtcbiAgICAvKipcbiAgICAgKiBVc2UgY2FycmlhZ2UgcmV0dXJuIGFuZCBsaW5lIGZlZWQgKFxcclxcbikgYXMgdGhlIGVuZCBvZiBsaW5lIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICBFbmRPZkxpbmVTZXF1ZW5jZVtFbmRPZkxpbmVTZXF1ZW5jZVtcIkNSTEZcIl0gPSAxXSA9IFwiQ1JMRlwiO1xufSkoRW5kT2ZMaW5lU2VxdWVuY2UgfHwgKEVuZE9mTGluZVNlcXVlbmNlID0ge30pKTtcbi8qKlxuICogRGVzY3JpYmVzIHRoZSBiZWhhdmlvciBvZiBkZWNvcmF0aW9ucyB3aGVuIHR5cGluZy9lZGl0aW5nIG5lYXIgdGhlaXIgZWRnZXMuXG4gKiBOb3RlOiBQbGVhc2UgZG8gbm90IGVkaXQgdGhlIHZhbHVlcywgYXMgdGhleSB2ZXJ5IGNhcmVmdWxseSBtYXRjaCBgRGVjb3JhdGlvblJhbmdlQmVoYXZpb3JgXG4gKi9cbmV4cG9ydCB2YXIgVHJhY2tlZFJhbmdlU3RpY2tpbmVzcztcbihmdW5jdGlvbiAoVHJhY2tlZFJhbmdlU3RpY2tpbmVzcykge1xuICAgIFRyYWNrZWRSYW5nZVN0aWNraW5lc3NbVHJhY2tlZFJhbmdlU3RpY2tpbmVzc1tcIkFsd2F5c0dyb3dzV2hlblR5cGluZ0F0RWRnZXNcIl0gPSAwXSA9IFwiQWx3YXlzR3Jvd3NXaGVuVHlwaW5nQXRFZGdlc1wiO1xuICAgIFRyYWNrZWRSYW5nZVN0aWNraW5lc3NbVHJhY2tlZFJhbmdlU3RpY2tpbmVzc1tcIk5ldmVyR3Jvd3NXaGVuVHlwaW5nQXRFZGdlc1wiXSA9IDFdID0gXCJOZXZlckdyb3dzV2hlblR5cGluZ0F0RWRnZXNcIjtcbiAgICBUcmFja2VkUmFuZ2VTdGlja2luZXNzW1RyYWNrZWRSYW5nZVN0aWNraW5lc3NbXCJHcm93c09ubHlXaGVuVHlwaW5nQmVmb3JlXCJdID0gMl0gPSBcIkdyb3dzT25seVdoZW5UeXBpbmdCZWZvcmVcIjtcbiAgICBUcmFja2VkUmFuZ2VTdGlja2luZXNzW1RyYWNrZWRSYW5nZVN0aWNraW5lc3NbXCJHcm93c09ubHlXaGVuVHlwaW5nQWZ0ZXJcIl0gPSAzXSA9IFwiR3Jvd3NPbmx5V2hlblR5cGluZ0FmdGVyXCI7XG59KShUcmFja2VkUmFuZ2VTdGlja2luZXNzIHx8IChUcmFja2VkUmFuZ2VTdGlja2luZXNzID0ge30pKTtcbmV4cG9ydCB2YXIgU2Nyb2xsVHlwZTtcbihmdW5jdGlvbiAoU2Nyb2xsVHlwZSkge1xuICAgIFNjcm9sbFR5cGVbU2Nyb2xsVHlwZVtcIlNtb290aFwiXSA9IDBdID0gXCJTbW9vdGhcIjtcbiAgICBTY3JvbGxUeXBlW1Njcm9sbFR5cGVbXCJJbW1lZGlhdGVcIl0gPSAxXSA9IFwiSW1tZWRpYXRlXCI7XG59KShTY3JvbGxUeXBlIHx8IChTY3JvbGxUeXBlID0ge30pKTtcbi8qKlxuICogRGVzY3JpYmVzIHRoZSByZWFzb24gdGhlIGN1cnNvciBoYXMgY2hhbmdlZCBpdHMgcG9zaXRpb24uXG4gKi9cbmV4cG9ydCB2YXIgQ3Vyc29yQ2hhbmdlUmVhc29uO1xuKGZ1bmN0aW9uIChDdXJzb3JDaGFuZ2VSZWFzb24pIHtcbiAgICAvKipcbiAgICAgKiBVbmtub3duIG9yIG5vdCBzZXQuXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIk5vdFNldFwiXSA9IDBdID0gXCJOb3RTZXRcIjtcbiAgICAvKipcbiAgICAgKiBBIGBtb2RlbC5zZXRWYWx1ZSgpYCB3YXMgY2FsbGVkLlxuICAgICAqL1xuICAgIEN1cnNvckNoYW5nZVJlYXNvbltDdXJzb3JDaGFuZ2VSZWFzb25bXCJDb250ZW50Rmx1c2hcIl0gPSAxXSA9IFwiQ29udGVudEZsdXNoXCI7XG4gICAgLyoqXG4gICAgICogVGhlIGBtb2RlbGAgaGFzIGJlZW4gY2hhbmdlZCBvdXRzaWRlIG9mIHRoaXMgY3Vyc29yIGFuZCB0aGUgY3Vyc29yIHJlY292ZXJzIGl0cyBwb3NpdGlvbiBmcm9tIGFzc29jaWF0ZWQgbWFya2Vycy5cbiAgICAgKi9cbiAgICBDdXJzb3JDaGFuZ2VSZWFzb25bQ3Vyc29yQ2hhbmdlUmVhc29uW1wiUmVjb3ZlckZyb21NYXJrZXJzXCJdID0gMl0gPSBcIlJlY292ZXJGcm9tTWFya2Vyc1wiO1xuICAgIC8qKlxuICAgICAqIFRoZXJlIHdhcyBhbiBleHBsaWNpdCB1c2VyIGdlc3R1cmUuXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIkV4cGxpY2l0XCJdID0gM10gPSBcIkV4cGxpY2l0XCI7XG4gICAgLyoqXG4gICAgICogVGhlcmUgd2FzIGEgUGFzdGUuXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIlBhc3RlXCJdID0gNF0gPSBcIlBhc3RlXCI7XG4gICAgLyoqXG4gICAgICogVGhlcmUgd2FzIGFuIFVuZG8uXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIlVuZG9cIl0gPSA1XSA9IFwiVW5kb1wiO1xuICAgIC8qKlxuICAgICAqIFRoZXJlIHdhcyBhIFJlZG8uXG4gICAgICovXG4gICAgQ3Vyc29yQ2hhbmdlUmVhc29uW0N1cnNvckNoYW5nZVJlYXNvbltcIlJlZG9cIl0gPSA2XSA9IFwiUmVkb1wiO1xufSkoQ3Vyc29yQ2hhbmdlUmVhc29uIHx8IChDdXJzb3JDaGFuZ2VSZWFzb24gPSB7fSkpO1xuZXhwb3J0IHZhciBSZW5kZXJNaW5pbWFwO1xuKGZ1bmN0aW9uIChSZW5kZXJNaW5pbWFwKSB7XG4gICAgUmVuZGVyTWluaW1hcFtSZW5kZXJNaW5pbWFwW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgUmVuZGVyTWluaW1hcFtSZW5kZXJNaW5pbWFwW1wiU21hbGxcIl0gPSAxXSA9IFwiU21hbGxcIjtcbiAgICBSZW5kZXJNaW5pbWFwW1JlbmRlck1pbmltYXBbXCJMYXJnZVwiXSA9IDJdID0gXCJMYXJnZVwiO1xuICAgIFJlbmRlck1pbmltYXBbUmVuZGVyTWluaW1hcFtcIlNtYWxsQmxvY2tzXCJdID0gM10gPSBcIlNtYWxsQmxvY2tzXCI7XG4gICAgUmVuZGVyTWluaW1hcFtSZW5kZXJNaW5pbWFwW1wiTGFyZ2VCbG9ja3NcIl0gPSA0XSA9IFwiTGFyZ2VCbG9ja3NcIjtcbn0pKFJlbmRlck1pbmltYXAgfHwgKFJlbmRlck1pbmltYXAgPSB7fSkpO1xuLyoqXG4gKiBEZXNjcmliZXMgaG93IHRvIGluZGVudCB3cmFwcGVkIGxpbmVzLlxuICovXG5leHBvcnQgdmFyIFdyYXBwaW5nSW5kZW50O1xuKGZ1bmN0aW9uIChXcmFwcGluZ0luZGVudCkge1xuICAgIC8qKlxuICAgICAqIE5vIGluZGVudGF0aW9uID0+IHdyYXBwZWQgbGluZXMgYmVnaW4gYXQgY29sdW1uIDEuXG4gICAgICovXG4gICAgV3JhcHBpbmdJbmRlbnRbV3JhcHBpbmdJbmRlbnRbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICAvKipcbiAgICAgKiBTYW1lID0+IHdyYXBwZWQgbGluZXMgZ2V0IHRoZSBzYW1lIGluZGVudGF0aW9uIGFzIHRoZSBwYXJlbnQuXG4gICAgICovXG4gICAgV3JhcHBpbmdJbmRlbnRbV3JhcHBpbmdJbmRlbnRbXCJTYW1lXCJdID0gMV0gPSBcIlNhbWVcIjtcbiAgICAvKipcbiAgICAgKiBJbmRlbnQgPT4gd3JhcHBlZCBsaW5lcyBnZXQgKzEgaW5kZW50YXRpb24gdG93YXJkIHRoZSBwYXJlbnQuXG4gICAgICovXG4gICAgV3JhcHBpbmdJbmRlbnRbV3JhcHBpbmdJbmRlbnRbXCJJbmRlbnRcIl0gPSAyXSA9IFwiSW5kZW50XCI7XG4gICAgLyoqXG4gICAgICogRGVlcEluZGVudCA9PiB3cmFwcGVkIGxpbmVzIGdldCArMiBpbmRlbnRhdGlvbiB0b3dhcmQgdGhlIHBhcmVudC5cbiAgICAgKi9cbiAgICBXcmFwcGluZ0luZGVudFtXcmFwcGluZ0luZGVudFtcIkRlZXBJbmRlbnRcIl0gPSAzXSA9IFwiRGVlcEluZGVudFwiO1xufSkoV3JhcHBpbmdJbmRlbnQgfHwgKFdyYXBwaW5nSW5kZW50ID0ge30pKTtcbi8qKlxuICogVGhlIGtpbmQgb2YgYW5pbWF0aW9uIGluIHdoaWNoIHRoZSBlZGl0b3IncyBjdXJzb3Igc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgdmFyIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlO1xuKGZ1bmN0aW9uIChUZXh0RWRpdG9yQ3Vyc29yQmxpbmtpbmdTdHlsZSkge1xuICAgIC8qKlxuICAgICAqIEhpZGRlblxuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1RleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1wiSGlkZGVuXCJdID0gMF0gPSBcIkhpZGRlblwiO1xuICAgIC8qKlxuICAgICAqIEJsaW5raW5nXG4gICAgICovXG4gICAgVGV4dEVkaXRvckN1cnNvckJsaW5raW5nU3R5bGVbVGV4dEVkaXRvckN1cnNvckJsaW5raW5nU3R5bGVbXCJCbGlua1wiXSA9IDFdID0gXCJCbGlua1wiO1xuICAgIC8qKlxuICAgICAqIEJsaW5raW5nIHdpdGggc21vb3RoIGZhZGluZ1xuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1RleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1wiU21vb3RoXCJdID0gMl0gPSBcIlNtb290aFwiO1xuICAgIC8qKlxuICAgICAqIEJsaW5raW5nIHdpdGggcHJvbG9uZ2VkIGZpbGxlZCBzdGF0ZSBhbmQgc21vb3RoIGZhZGluZ1xuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1RleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1wiUGhhc2VcIl0gPSAzXSA9IFwiUGhhc2VcIjtcbiAgICAvKipcbiAgICAgKiBFeHBhbmQgY29sbGFwc2UgYW5pbWF0aW9uIG9uIHRoZSB5IGF4aXNcbiAgICAgKi9cbiAgICBUZXh0RWRpdG9yQ3Vyc29yQmxpbmtpbmdTdHlsZVtUZXh0RWRpdG9yQ3Vyc29yQmxpbmtpbmdTdHlsZVtcIkV4cGFuZFwiXSA9IDRdID0gXCJFeHBhbmRcIjtcbiAgICAvKipcbiAgICAgKiBOby1CbGlua2luZ1xuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1RleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlW1wiU29saWRcIl0gPSA1XSA9IFwiU29saWRcIjtcbn0pKFRleHRFZGl0b3JDdXJzb3JCbGlua2luZ1N0eWxlIHx8IChUZXh0RWRpdG9yQ3Vyc29yQmxpbmtpbmdTdHlsZSA9IHt9KSk7XG4vKipcbiAqIFRoZSBzdHlsZSBpbiB3aGljaCB0aGUgZWRpdG9yJ3MgY3Vyc29yIHNob3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IHZhciBUZXh0RWRpdG9yQ3Vyc29yU3R5bGU7XG4oZnVuY3Rpb24gKFRleHRFZGl0b3JDdXJzb3JTdHlsZSkge1xuICAgIC8qKlxuICAgICAqIEFzIGEgdmVydGljYWwgbGluZSAoc2l0dGluZyBiZXR3ZWVuIHR3byBjaGFyYWN0ZXJzKS5cbiAgICAgKi9cbiAgICBUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbVGV4dEVkaXRvckN1cnNvclN0eWxlW1wiTGluZVwiXSA9IDFdID0gXCJMaW5lXCI7XG4gICAgLyoqXG4gICAgICogQXMgYSBibG9jayAoc2l0dGluZyBvbiB0b3Agb2YgYSBjaGFyYWN0ZXIpLlxuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JTdHlsZVtUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbXCJCbG9ja1wiXSA9IDJdID0gXCJCbG9ja1wiO1xuICAgIC8qKlxuICAgICAqIEFzIGEgaG9yaXpvbnRhbCBsaW5lIChzaXR0aW5nIHVuZGVyIGEgY2hhcmFjdGVyKS5cbiAgICAgKi9cbiAgICBUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbVGV4dEVkaXRvckN1cnNvclN0eWxlW1wiVW5kZXJsaW5lXCJdID0gM10gPSBcIlVuZGVybGluZVwiO1xuICAgIC8qKlxuICAgICAqIEFzIGEgdGhpbiB2ZXJ0aWNhbCBsaW5lIChzaXR0aW5nIGJldHdlZW4gdHdvIGNoYXJhY3RlcnMpLlxuICAgICAqL1xuICAgIFRleHRFZGl0b3JDdXJzb3JTdHlsZVtUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbXCJMaW5lVGhpblwiXSA9IDRdID0gXCJMaW5lVGhpblwiO1xuICAgIC8qKlxuICAgICAqIEFzIGFuIG91dGxpbmVkIGJsb2NrIChzaXR0aW5nIG9uIHRvcCBvZiBhIGNoYXJhY3RlcikuXG4gICAgICovXG4gICAgVGV4dEVkaXRvckN1cnNvclN0eWxlW1RleHRFZGl0b3JDdXJzb3JTdHlsZVtcIkJsb2NrT3V0bGluZVwiXSA9IDVdID0gXCJCbG9ja091dGxpbmVcIjtcbiAgICAvKipcbiAgICAgKiBBcyBhIHRoaW4gaG9yaXpvbnRhbCBsaW5lIChzaXR0aW5nIHVuZGVyIGEgY2hhcmFjdGVyKS5cbiAgICAgKi9cbiAgICBUZXh0RWRpdG9yQ3Vyc29yU3R5bGVbVGV4dEVkaXRvckN1cnNvclN0eWxlW1wiVW5kZXJsaW5lVGhpblwiXSA9IDZdID0gXCJVbmRlcmxpbmVUaGluXCI7XG59KShUZXh0RWRpdG9yQ3Vyc29yU3R5bGUgfHwgKFRleHRFZGl0b3JDdXJzb3JTdHlsZSA9IHt9KSk7XG5leHBvcnQgdmFyIFJlbmRlckxpbmVOdW1iZXJzVHlwZTtcbihmdW5jdGlvbiAoUmVuZGVyTGluZU51bWJlcnNUeXBlKSB7XG4gICAgUmVuZGVyTGluZU51bWJlcnNUeXBlW1JlbmRlckxpbmVOdW1iZXJzVHlwZVtcIk9mZlwiXSA9IDBdID0gXCJPZmZcIjtcbiAgICBSZW5kZXJMaW5lTnVtYmVyc1R5cGVbUmVuZGVyTGluZU51bWJlcnNUeXBlW1wiT25cIl0gPSAxXSA9IFwiT25cIjtcbiAgICBSZW5kZXJMaW5lTnVtYmVyc1R5cGVbUmVuZGVyTGluZU51bWJlcnNUeXBlW1wiUmVsYXRpdmVcIl0gPSAyXSA9IFwiUmVsYXRpdmVcIjtcbiAgICBSZW5kZXJMaW5lTnVtYmVyc1R5cGVbUmVuZGVyTGluZU51bWJlcnNUeXBlW1wiSW50ZXJ2YWxcIl0gPSAzXSA9IFwiSW50ZXJ2YWxcIjtcbiAgICBSZW5kZXJMaW5lTnVtYmVyc1R5cGVbUmVuZGVyTGluZU51bWJlcnNUeXBlW1wiQ3VzdG9tXCJdID0gNF0gPSBcIkN1c3RvbVwiO1xufSkoUmVuZGVyTGluZU51bWJlcnNUeXBlIHx8IChSZW5kZXJMaW5lTnVtYmVyc1R5cGUgPSB7fSkpO1xuLyoqXG4gKiBBIHBvc2l0aW9uaW5nIHByZWZlcmVuY2UgZm9yIHJlbmRlcmluZyBjb250ZW50IHdpZGdldHMuXG4gKi9cbmV4cG9ydCB2YXIgQ29udGVudFdpZGdldFBvc2l0aW9uUHJlZmVyZW5jZTtcbihmdW5jdGlvbiAoQ29udGVudFdpZGdldFBvc2l0aW9uUHJlZmVyZW5jZSkge1xuICAgIC8qKlxuICAgICAqIFBsYWNlIHRoZSBjb250ZW50IHdpZGdldCBleGFjdGx5IGF0IGEgcG9zaXRpb25cbiAgICAgKi9cbiAgICBDb250ZW50V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW0NvbnRlbnRXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbXCJFWEFDVFwiXSA9IDBdID0gXCJFWEFDVFwiO1xuICAgIC8qKlxuICAgICAqIFBsYWNlIHRoZSBjb250ZW50IHdpZGdldCBhYm92ZSBhIHBvc2l0aW9uXG4gICAgICovXG4gICAgQ29udGVudFdpZGdldFBvc2l0aW9uUHJlZmVyZW5jZVtDb250ZW50V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW1wiQUJPVkVcIl0gPSAxXSA9IFwiQUJPVkVcIjtcbiAgICAvKipcbiAgICAgKiBQbGFjZSB0aGUgY29udGVudCB3aWRnZXQgYmVsb3cgYSBwb3NpdGlvblxuICAgICAqL1xuICAgIENvbnRlbnRXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbQ29udGVudFdpZGdldFBvc2l0aW9uUHJlZmVyZW5jZVtcIkJFTE9XXCJdID0gMl0gPSBcIkJFTE9XXCI7XG59KShDb250ZW50V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlIHx8IChDb250ZW50V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlID0ge30pKTtcbi8qKlxuICogQSBwb3NpdGlvbmluZyBwcmVmZXJlbmNlIGZvciByZW5kZXJpbmcgb3ZlcmxheSB3aWRnZXRzLlxuICovXG5leHBvcnQgdmFyIE92ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2U7XG4oZnVuY3Rpb24gKE92ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2UpIHtcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiB0aGUgb3ZlcmxheSB3aWRnZXQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXJcbiAgICAgKi9cbiAgICBPdmVybGF5V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW092ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbXCJUT1BfUklHSFRfQ09STkVSXCJdID0gMF0gPSBcIlRPUF9SSUdIVF9DT1JORVJcIjtcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiB0aGUgb3ZlcmxheSB3aWRnZXQgaW4gdGhlIGJvdHRvbSByaWdodCBjb3JuZXJcbiAgICAgKi9cbiAgICBPdmVybGF5V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW092ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbXCJCT1RUT01fUklHSFRfQ09STkVSXCJdID0gMV0gPSBcIkJPVFRPTV9SSUdIVF9DT1JORVJcIjtcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiB0aGUgb3ZlcmxheSB3aWRnZXQgaW4gdGhlIHRvcCBjZW50ZXJcbiAgICAgKi9cbiAgICBPdmVybGF5V2lkZ2V0UG9zaXRpb25QcmVmZXJlbmNlW092ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2VbXCJUT1BfQ0VOVEVSXCJdID0gMl0gPSBcIlRPUF9DRU5URVJcIjtcbn0pKE92ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2UgfHwgKE92ZXJsYXlXaWRnZXRQb3NpdGlvblByZWZlcmVuY2UgPSB7fSkpO1xuLyoqXG4gKiBUeXBlIG9mIGhpdCBlbGVtZW50IHdpdGggdGhlIG1vdXNlIGluIHRoZSBlZGl0b3IuXG4gKi9cbmV4cG9ydCB2YXIgTW91c2VUYXJnZXRUeXBlO1xuKGZ1bmN0aW9uIChNb3VzZVRhcmdldFR5cGUpIHtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgYW4gdW5rbm93biBlbGVtZW50LlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJVTktOT1dOXCJdID0gMF0gPSBcIlVOS05PV05cIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgdGhlIHRleHRhcmVhIHVzZWQgZm9yIGlucHV0LlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJURVhUQVJFQVwiXSA9IDFdID0gXCJURVhUQVJFQVwiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0aGUgZ2x5cGggbWFyZ2luXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIkdVVFRFUl9HTFlQSF9NQVJHSU5cIl0gPSAyXSA9IFwiR1VUVEVSX0dMWVBIX01BUkdJTlwiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0aGUgbGluZSBudW1iZXJzXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIkdVVFRFUl9MSU5FX05VTUJFUlNcIl0gPSAzXSA9IFwiR1VUVEVSX0xJTkVfTlVNQkVSU1wiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0aGUgbGluZSBkZWNvcmF0aW9uc1xuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJHVVRURVJfTElORV9ERUNPUkFUSU9OU1wiXSA9IDRdID0gXCJHVVRURVJfTElORV9ERUNPUkFUSU9OU1wiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0aGUgd2hpdGVzcGFjZSBsZWZ0IGluIHRoZSBndXR0ZXIgYnkgYSB2aWV3IHpvbmUuXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIkdVVFRFUl9WSUVXX1pPTkVcIl0gPSA1XSA9IFwiR1VUVEVSX1ZJRVdfWk9ORVwiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiB0ZXh0IGluIHRoZSBjb250ZW50LlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJDT05URU5UX1RFWFRcIl0gPSA2XSA9IFwiQ09OVEVOVF9URVhUXCI7XG4gICAgLyoqXG4gICAgICogTW91c2UgaXMgb24gdG9wIG9mIGVtcHR5IHNwYWNlIGluIHRoZSBjb250ZW50IChlLmcuIGFmdGVyIGxpbmUgdGV4dCBvciBiZWxvdyBsYXN0IGxpbmUpXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIkNPTlRFTlRfRU1QVFlcIl0gPSA3XSA9IFwiQ09OVEVOVF9FTVBUWVwiO1xuICAgIC8qKlxuICAgICAqIE1vdXNlIGlzIG9uIHRvcCBvZiBhIHZpZXcgem9uZSBpbiB0aGUgY29udGVudC5cbiAgICAgKi9cbiAgICBNb3VzZVRhcmdldFR5cGVbTW91c2VUYXJnZXRUeXBlW1wiQ09OVEVOVF9WSUVXX1pPTkVcIl0gPSA4XSA9IFwiQ09OVEVOVF9WSUVXX1pPTkVcIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgYSBjb250ZW50IHdpZGdldC5cbiAgICAgKi9cbiAgICBNb3VzZVRhcmdldFR5cGVbTW91c2VUYXJnZXRUeXBlW1wiQ09OVEVOVF9XSURHRVRcIl0gPSA5XSA9IFwiQ09OVEVOVF9XSURHRVRcIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgdGhlIGRlY29yYXRpb25zIG92ZXJ2aWV3IHJ1bGVyLlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJPVkVSVklFV19SVUxFUlwiXSA9IDEwXSA9IFwiT1ZFUlZJRVdfUlVMRVJcIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvbiB0b3Agb2YgYSBzY3JvbGxiYXIuXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIlNDUk9MTEJBUlwiXSA9IDExXSA9IFwiU0NST0xMQkFSXCI7XG4gICAgLyoqXG4gICAgICogTW91c2UgaXMgb24gdG9wIG9mIGFuIG92ZXJsYXkgd2lkZ2V0LlxuICAgICAqL1xuICAgIE1vdXNlVGFyZ2V0VHlwZVtNb3VzZVRhcmdldFR5cGVbXCJPVkVSTEFZX1dJREdFVFwiXSA9IDEyXSA9IFwiT1ZFUkxBWV9XSURHRVRcIjtcbiAgICAvKipcbiAgICAgKiBNb3VzZSBpcyBvdXRzaWRlIG9mIHRoZSBlZGl0b3IuXG4gICAgICovXG4gICAgTW91c2VUYXJnZXRUeXBlW01vdXNlVGFyZ2V0VHlwZVtcIk9VVFNJREVfRURJVE9SXCJdID0gMTNdID0gXCJPVVRTSURFX0VESVRPUlwiO1xufSkoTW91c2VUYXJnZXRUeXBlIHx8IChNb3VzZVRhcmdldFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBEZXNjcmliZXMgd2hhdCB0byBkbyB3aXRoIHRoZSBpbmRlbnRhdGlvbiB3aGVuIHByZXNzaW5nIEVudGVyLlxuICovXG5leHBvcnQgdmFyIEluZGVudEFjdGlvbjtcbihmdW5jdGlvbiAoSW5kZW50QWN0aW9uKSB7XG4gICAgLyoqXG4gICAgICogSW5zZXJ0IG5ldyBsaW5lIGFuZCBjb3B5IHRoZSBwcmV2aW91cyBsaW5lJ3MgaW5kZW50YXRpb24uXG4gICAgICovXG4gICAgSW5kZW50QWN0aW9uW0luZGVudEFjdGlvbltcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIC8qKlxuICAgICAqIEluc2VydCBuZXcgbGluZSBhbmQgaW5kZW50IG9uY2UgKHJlbGF0aXZlIHRvIHRoZSBwcmV2aW91cyBsaW5lJ3MgaW5kZW50YXRpb24pLlxuICAgICAqL1xuICAgIEluZGVudEFjdGlvbltJbmRlbnRBY3Rpb25bXCJJbmRlbnRcIl0gPSAxXSA9IFwiSW5kZW50XCI7XG4gICAgLyoqXG4gICAgICogSW5zZXJ0IHR3byBuZXcgbGluZXM6XG4gICAgICogIC0gdGhlIGZpcnN0IG9uZSBpbmRlbnRlZCB3aGljaCB3aWxsIGhvbGQgdGhlIGN1cnNvclxuICAgICAqICAtIHRoZSBzZWNvbmQgb25lIGF0IHRoZSBzYW1lIGluZGVudGF0aW9uIGxldmVsXG4gICAgICovXG4gICAgSW5kZW50QWN0aW9uW0luZGVudEFjdGlvbltcIkluZGVudE91dGRlbnRcIl0gPSAyXSA9IFwiSW5kZW50T3V0ZGVudFwiO1xuICAgIC8qKlxuICAgICAqIEluc2VydCBuZXcgbGluZSBhbmQgb3V0ZGVudCBvbmNlIChyZWxhdGl2ZSB0byB0aGUgcHJldmlvdXMgbGluZSdzIGluZGVudGF0aW9uKS5cbiAgICAgKi9cbiAgICBJbmRlbnRBY3Rpb25bSW5kZW50QWN0aW9uW1wiT3V0ZGVudFwiXSA9IDNdID0gXCJPdXRkZW50XCI7XG59KShJbmRlbnRBY3Rpb24gfHwgKEluZGVudEFjdGlvbiA9IHt9KSk7XG5leHBvcnQgdmFyIENvbXBsZXRpb25JdGVtS2luZDtcbihmdW5jdGlvbiAoQ29tcGxldGlvbkl0ZW1LaW5kKSB7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIk1ldGhvZFwiXSA9IDBdID0gXCJNZXRob2RcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRnVuY3Rpb25cIl0gPSAxXSA9IFwiRnVuY3Rpb25cIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiQ29uc3RydWN0b3JcIl0gPSAyXSA9IFwiQ29uc3RydWN0b3JcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRmllbGRcIl0gPSAzXSA9IFwiRmllbGRcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiVmFyaWFibGVcIl0gPSA0XSA9IFwiVmFyaWFibGVcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiQ2xhc3NcIl0gPSA1XSA9IFwiQ2xhc3NcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiU3RydWN0XCJdID0gNl0gPSBcIlN0cnVjdFwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJJbnRlcmZhY2VcIl0gPSA3XSA9IFwiSW50ZXJmYWNlXCI7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIk1vZHVsZVwiXSA9IDhdID0gXCJNb2R1bGVcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiUHJvcGVydHlcIl0gPSA5XSA9IFwiUHJvcGVydHlcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRXZlbnRcIl0gPSAxMF0gPSBcIkV2ZW50XCI7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIk9wZXJhdG9yXCJdID0gMTFdID0gXCJPcGVyYXRvclwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJVbml0XCJdID0gMTJdID0gXCJVbml0XCI7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIlZhbHVlXCJdID0gMTNdID0gXCJWYWx1ZVwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJDb25zdGFudFwiXSA9IDE0XSA9IFwiQ29uc3RhbnRcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRW51bVwiXSA9IDE1XSA9IFwiRW51bVwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJFbnVtTWVtYmVyXCJdID0gMTZdID0gXCJFbnVtTWVtYmVyXCI7XG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kW0NvbXBsZXRpb25JdGVtS2luZFtcIktleXdvcmRcIl0gPSAxN10gPSBcIktleXdvcmRcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiVGV4dFwiXSA9IDE4XSA9IFwiVGV4dFwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJDb2xvclwiXSA9IDE5XSA9IFwiQ29sb3JcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRmlsZVwiXSA9IDIwXSA9IFwiRmlsZVwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJSZWZlcmVuY2VcIl0gPSAyMV0gPSBcIlJlZmVyZW5jZVwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJDdXN0b21jb2xvclwiXSA9IDIyXSA9IFwiQ3VzdG9tY29sb3JcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiRm9sZGVyXCJdID0gMjNdID0gXCJGb2xkZXJcIjtcbiAgICBDb21wbGV0aW9uSXRlbUtpbmRbQ29tcGxldGlvbkl0ZW1LaW5kW1wiVHlwZVBhcmFtZXRlclwiXSA9IDI0XSA9IFwiVHlwZVBhcmFtZXRlclwiO1xuICAgIENvbXBsZXRpb25JdGVtS2luZFtDb21wbGV0aW9uSXRlbUtpbmRbXCJTbmlwcGV0XCJdID0gMjVdID0gXCJTbmlwcGV0XCI7XG59KShDb21wbGV0aW9uSXRlbUtpbmQgfHwgKENvbXBsZXRpb25JdGVtS2luZCA9IHt9KSk7XG5leHBvcnQgdmFyIENvbXBsZXRpb25JdGVtVGFnO1xuKGZ1bmN0aW9uIChDb21wbGV0aW9uSXRlbVRhZykge1xuICAgIENvbXBsZXRpb25JdGVtVGFnW0NvbXBsZXRpb25JdGVtVGFnW1wiRGVwcmVjYXRlZFwiXSA9IDFdID0gXCJEZXByZWNhdGVkXCI7XG59KShDb21wbGV0aW9uSXRlbVRhZyB8fCAoQ29tcGxldGlvbkl0ZW1UYWcgPSB7fSkpO1xuZXhwb3J0IHZhciBDb21wbGV0aW9uSXRlbUluc2VydFRleHRSdWxlO1xuKGZ1bmN0aW9uIChDb21wbGV0aW9uSXRlbUluc2VydFRleHRSdWxlKSB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0IHdoaXRlc3BhY2UvaW5kZW50YXRpb24gb2YgbXVsdGlsaW5lIGluc2VydCB0ZXh0cyB0b1xuICAgICAqIG1hdGNoIHRoZSBjdXJyZW50IGxpbmUgaW5kZW50YXRpb24uXG4gICAgICovXG4gICAgQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZVtDb21wbGV0aW9uSXRlbUluc2VydFRleHRSdWxlW1wiS2VlcFdoaXRlc3BhY2VcIl0gPSAxXSA9IFwiS2VlcFdoaXRlc3BhY2VcIjtcbiAgICAvKipcbiAgICAgKiBgaW5zZXJ0VGV4dGAgaXMgYSBzbmlwcGV0LlxuICAgICAqL1xuICAgIENvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGVbQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZVtcIkluc2VydEFzU25pcHBldFwiXSA9IDRdID0gXCJJbnNlcnRBc1NuaXBwZXRcIjtcbn0pKENvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUgfHwgKENvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUgPSB7fSkpO1xuLyoqXG4gKiBIb3cgYSBzdWdnZXN0IHByb3ZpZGVyIHdhcyB0cmlnZ2VyZWQuXG4gKi9cbmV4cG9ydCB2YXIgQ29tcGxldGlvblRyaWdnZXJLaW5kO1xuKGZ1bmN0aW9uIChDb21wbGV0aW9uVHJpZ2dlcktpbmQpIHtcbiAgICBDb21wbGV0aW9uVHJpZ2dlcktpbmRbQ29tcGxldGlvblRyaWdnZXJLaW5kW1wiSW52b2tlXCJdID0gMF0gPSBcIkludm9rZVwiO1xuICAgIENvbXBsZXRpb25UcmlnZ2VyS2luZFtDb21wbGV0aW9uVHJpZ2dlcktpbmRbXCJUcmlnZ2VyQ2hhcmFjdGVyXCJdID0gMV0gPSBcIlRyaWdnZXJDaGFyYWN0ZXJcIjtcbiAgICBDb21wbGV0aW9uVHJpZ2dlcktpbmRbQ29tcGxldGlvblRyaWdnZXJLaW5kW1wiVHJpZ2dlckZvckluY29tcGxldGVDb21wbGV0aW9uc1wiXSA9IDJdID0gXCJUcmlnZ2VyRm9ySW5jb21wbGV0ZUNvbXBsZXRpb25zXCI7XG59KShDb21wbGV0aW9uVHJpZ2dlcktpbmQgfHwgKENvbXBsZXRpb25UcmlnZ2VyS2luZCA9IHt9KSk7XG5leHBvcnQgdmFyIFNpZ25hdHVyZUhlbHBUcmlnZ2VyS2luZDtcbihmdW5jdGlvbiAoU2lnbmF0dXJlSGVscFRyaWdnZXJLaW5kKSB7XG4gICAgU2lnbmF0dXJlSGVscFRyaWdnZXJLaW5kW1NpZ25hdHVyZUhlbHBUcmlnZ2VyS2luZFtcIkludm9rZVwiXSA9IDFdID0gXCJJbnZva2VcIjtcbiAgICBTaWduYXR1cmVIZWxwVHJpZ2dlcktpbmRbU2lnbmF0dXJlSGVscFRyaWdnZXJLaW5kW1wiVHJpZ2dlckNoYXJhY3RlclwiXSA9IDJdID0gXCJUcmlnZ2VyQ2hhcmFjdGVyXCI7XG4gICAgU2lnbmF0dXJlSGVscFRyaWdnZXJLaW5kW1NpZ25hdHVyZUhlbHBUcmlnZ2VyS2luZFtcIkNvbnRlbnRDaGFuZ2VcIl0gPSAzXSA9IFwiQ29udGVudENoYW5nZVwiO1xufSkoU2lnbmF0dXJlSGVscFRyaWdnZXJLaW5kIHx8IChTaWduYXR1cmVIZWxwVHJpZ2dlcktpbmQgPSB7fSkpO1xuLyoqXG4gKiBBIGRvY3VtZW50IGhpZ2hsaWdodCBraW5kLlxuICovXG5leHBvcnQgdmFyIERvY3VtZW50SGlnaGxpZ2h0S2luZDtcbihmdW5jdGlvbiAoRG9jdW1lbnRIaWdobGlnaHRLaW5kKSB7XG4gICAgLyoqXG4gICAgICogQSB0ZXh0dWFsIG9jY3VycmVuY2UuXG4gICAgICovXG4gICAgRG9jdW1lbnRIaWdobGlnaHRLaW5kW0RvY3VtZW50SGlnaGxpZ2h0S2luZFtcIlRleHRcIl0gPSAwXSA9IFwiVGV4dFwiO1xuICAgIC8qKlxuICAgICAqIFJlYWQtYWNjZXNzIG9mIGEgc3ltYm9sLCBsaWtlIHJlYWRpbmcgYSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBEb2N1bWVudEhpZ2hsaWdodEtpbmRbRG9jdW1lbnRIaWdobGlnaHRLaW5kW1wiUmVhZFwiXSA9IDFdID0gXCJSZWFkXCI7XG4gICAgLyoqXG4gICAgICogV3JpdGUtYWNjZXNzIG9mIGEgc3ltYm9sLCBsaWtlIHdyaXRpbmcgdG8gYSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBEb2N1bWVudEhpZ2hsaWdodEtpbmRbRG9jdW1lbnRIaWdobGlnaHRLaW5kW1wiV3JpdGVcIl0gPSAyXSA9IFwiV3JpdGVcIjtcbn0pKERvY3VtZW50SGlnaGxpZ2h0S2luZCB8fCAoRG9jdW1lbnRIaWdobGlnaHRLaW5kID0ge30pKTtcbi8qKlxuICogQSBzeW1ib2wga2luZC5cbiAqL1xuZXhwb3J0IHZhciBTeW1ib2xLaW5kO1xuKGZ1bmN0aW9uIChTeW1ib2xLaW5kKSB7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiRmlsZVwiXSA9IDBdID0gXCJGaWxlXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiTW9kdWxlXCJdID0gMV0gPSBcIk1vZHVsZVwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIk5hbWVzcGFjZVwiXSA9IDJdID0gXCJOYW1lc3BhY2VcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJQYWNrYWdlXCJdID0gM10gPSBcIlBhY2thZ2VcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJDbGFzc1wiXSA9IDRdID0gXCJDbGFzc1wiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIk1ldGhvZFwiXSA9IDVdID0gXCJNZXRob2RcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJQcm9wZXJ0eVwiXSA9IDZdID0gXCJQcm9wZXJ0eVwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIkZpZWxkXCJdID0gN10gPSBcIkZpZWxkXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiQ29uc3RydWN0b3JcIl0gPSA4XSA9IFwiQ29uc3RydWN0b3JcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJFbnVtXCJdID0gOV0gPSBcIkVudW1cIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJJbnRlcmZhY2VcIl0gPSAxMF0gPSBcIkludGVyZmFjZVwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIkZ1bmN0aW9uXCJdID0gMTFdID0gXCJGdW5jdGlvblwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIlZhcmlhYmxlXCJdID0gMTJdID0gXCJWYXJpYWJsZVwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIkNvbnN0YW50XCJdID0gMTNdID0gXCJDb25zdGFudFwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIlN0cmluZ1wiXSA9IDE0XSA9IFwiU3RyaW5nXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiTnVtYmVyXCJdID0gMTVdID0gXCJOdW1iZXJcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJCb29sZWFuXCJdID0gMTZdID0gXCJCb29sZWFuXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiQXJyYXlcIl0gPSAxN10gPSBcIkFycmF5XCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiT2JqZWN0XCJdID0gMThdID0gXCJPYmplY3RcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJLZXlcIl0gPSAxOV0gPSBcIktleVwiO1xuICAgIFN5bWJvbEtpbmRbU3ltYm9sS2luZFtcIk51bGxcIl0gPSAyMF0gPSBcIk51bGxcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJFbnVtTWVtYmVyXCJdID0gMjFdID0gXCJFbnVtTWVtYmVyXCI7XG4gICAgU3ltYm9sS2luZFtTeW1ib2xLaW5kW1wiU3RydWN0XCJdID0gMjJdID0gXCJTdHJ1Y3RcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJFdmVudFwiXSA9IDIzXSA9IFwiRXZlbnRcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJPcGVyYXRvclwiXSA9IDI0XSA9IFwiT3BlcmF0b3JcIjtcbiAgICBTeW1ib2xLaW5kW1N5bWJvbEtpbmRbXCJUeXBlUGFyYW1ldGVyXCJdID0gMjVdID0gXCJUeXBlUGFyYW1ldGVyXCI7XG59KShTeW1ib2xLaW5kIHx8IChTeW1ib2xLaW5kID0ge30pKTtcbmV4cG9ydCB2YXIgU3ltYm9sVGFnO1xuKGZ1bmN0aW9uIChTeW1ib2xUYWcpIHtcbiAgICBTeW1ib2xUYWdbU3ltYm9sVGFnW1wiRGVwcmVjYXRlZFwiXSA9IDFdID0gXCJEZXByZWNhdGVkXCI7XG59KShTeW1ib2xUYWcgfHwgKFN5bWJvbFRhZyA9IHt9KSk7XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IHRvVWludDMyIH0gZnJvbSAnLi4vY29yZS91aW50LmpzJztcbnZhciBQcmVmaXhTdW1JbmRleE9mUmVzdWx0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByZWZpeFN1bUluZGV4T2ZSZXN1bHQoaW5kZXgsIHJlbWFpbmRlcikge1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMucmVtYWluZGVyID0gcmVtYWluZGVyO1xuICAgIH1cbiAgICByZXR1cm4gUHJlZml4U3VtSW5kZXhPZlJlc3VsdDtcbn0oKSk7XG5leHBvcnQgeyBQcmVmaXhTdW1JbmRleE9mUmVzdWx0IH07XG52YXIgUHJlZml4U3VtQ29tcHV0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJlZml4U3VtQ29tcHV0ZXIodmFsdWVzKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLnByZWZpeFN1bSA9IG5ldyBVaW50MzJBcnJheSh2YWx1ZXMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4ID0gbmV3IEludDMyQXJyYXkoMSk7XG4gICAgICAgIHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSA9IC0xO1xuICAgIH1cbiAgICBQcmVmaXhTdW1Db21wdXRlci5wcm90b3R5cGUuZ2V0Q291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlci5wcm90b3R5cGUuaW5zZXJ0VmFsdWVzID0gZnVuY3Rpb24gKGluc2VydEluZGV4LCBpbnNlcnRWYWx1ZXMpIHtcbiAgICAgICAgaW5zZXJ0SW5kZXggPSB0b1VpbnQzMihpbnNlcnRJbmRleCk7XG4gICAgICAgIHZhciBvbGRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgdmFyIG9sZFByZWZpeFN1bSA9IHRoaXMucHJlZml4U3VtO1xuICAgICAgICB2YXIgaW5zZXJ0VmFsdWVzTGVuID0gaW5zZXJ0VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGluc2VydFZhbHVlc0xlbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IFVpbnQzMkFycmF5KG9sZFZhbHVlcy5sZW5ndGggKyBpbnNlcnRWYWx1ZXNMZW4pO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQob2xkVmFsdWVzLnN1YmFycmF5KDAsIGluc2VydEluZGV4KSwgMCk7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChvbGRWYWx1ZXMuc3ViYXJyYXkoaW5zZXJ0SW5kZXgpLCBpbnNlcnRJbmRleCArIGluc2VydFZhbHVlc0xlbik7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChpbnNlcnRWYWx1ZXMsIGluc2VydEluZGV4KTtcbiAgICAgICAgaWYgKGluc2VydEluZGV4IC0gMSA8IHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID0gaW5zZXJ0SW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZml4U3VtID0gbmV3IFVpbnQzMkFycmF5KHRoaXMudmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0aGlzLnByZWZpeFN1bVZhbGlkSW5kZXhbMF0gPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhTdW0uc2V0KG9sZFByZWZpeFN1bS5zdWJhcnJheSgwLCB0aGlzLnByZWZpeFN1bVZhbGlkSW5kZXhbMF0gKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlci5wcm90b3R5cGUuY2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIGluZGV4ID0gdG9VaW50MzIoaW5kZXgpO1xuICAgICAgICB2YWx1ZSA9IHRvVWludDMyKHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzW2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGluZGV4IC0gMSA8IHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID0gaW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLnJlbW92ZVZhbHVlcyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBjbnQpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IHRvVWludDMyKHN0YXJ0SW5kZXgpO1xuICAgICAgICBjbnQgPSB0b1VpbnQzMihjbnQpO1xuICAgICAgICB2YXIgb2xkVmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHZhciBvbGRQcmVmaXhTdW0gPSB0aGlzLnByZWZpeFN1bTtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPj0gb2xkVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXhDbnQgPSBvbGRWYWx1ZXMubGVuZ3RoIC0gc3RhcnRJbmRleDtcbiAgICAgICAgaWYgKGNudCA+PSBtYXhDbnQpIHtcbiAgICAgICAgICAgIGNudCA9IG1heENudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY250ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgVWludDMyQXJyYXkob2xkVmFsdWVzLmxlbmd0aCAtIGNudCk7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChvbGRWYWx1ZXMuc3ViYXJyYXkoMCwgc3RhcnRJbmRleCksIDApO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQob2xkVmFsdWVzLnN1YmFycmF5KHN0YXJ0SW5kZXggKyBjbnQpLCBzdGFydEluZGV4KTtcbiAgICAgICAgdGhpcy5wcmVmaXhTdW0gPSBuZXcgVWludDMyQXJyYXkodGhpcy52YWx1ZXMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggLSAxIDwgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeFN1bVZhbGlkSW5kZXhbMF0gPSBzdGFydEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID49IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4U3VtLnNldChvbGRQcmVmaXhTdW0uc3ViYXJyYXkoMCwgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLmdldFRvdGFsVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRBY2N1bXVsYXRlZFZhbHVlKHRoaXMudmFsdWVzLmxlbmd0aCAtIDEpO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLmdldEFjY3VtdWxhdGVkVmFsdWUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXggPSB0b1VpbnQzMihpbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRBY2N1bXVsYXRlZFZhbHVlKGluZGV4KTtcbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyLnByb3RvdHlwZS5fZ2V0QWNjdW11bGF0ZWRWYWx1ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPD0gdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVmaXhTdW1baW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdICsgMTtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4U3VtWzBdID0gdGhpcy52YWx1ZXNbMF07XG4gICAgICAgICAgICBzdGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLnZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4U3VtW2ldID0gdGhpcy5wcmVmaXhTdW1baSAtIDFdICsgdGhpcy52YWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID0gTWF0aC5tYXgodGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdLCBpbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZpeFN1bVtpbmRleF07XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlci5wcm90b3R5cGUuZ2V0SW5kZXhPZiA9IGZ1bmN0aW9uIChhY2N1bXVsYXRlZFZhbHVlKSB7XG4gICAgICAgIGFjY3VtdWxhdGVkVmFsdWUgPSBNYXRoLmZsb29yKGFjY3VtdWxhdGVkVmFsdWUpOyAvL0BwZXJmXG4gICAgICAgIC8vIENvbXB1dGUgYWxsIHN1bXMgKHRvIGdldCBhIGZ1bGx5IHZhbGlkIHByZWZpeFN1bSlcbiAgICAgICAgdGhpcy5nZXRUb3RhbFZhbHVlKCk7XG4gICAgICAgIHZhciBsb3cgPSAwO1xuICAgICAgICB2YXIgaGlnaCA9IHRoaXMudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBtaWQgPSAwO1xuICAgICAgICB2YXIgbWlkU3RvcCA9IDA7XG4gICAgICAgIHZhciBtaWRTdGFydCA9IDA7XG4gICAgICAgIHdoaWxlIChsb3cgPD0gaGlnaCkge1xuICAgICAgICAgICAgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSAvIDIpIHwgMDtcbiAgICAgICAgICAgIG1pZFN0b3AgPSB0aGlzLnByZWZpeFN1bVttaWRdO1xuICAgICAgICAgICAgbWlkU3RhcnQgPSBtaWRTdG9wIC0gdGhpcy52YWx1ZXNbbWlkXTtcbiAgICAgICAgICAgIGlmIChhY2N1bXVsYXRlZFZhbHVlIDwgbWlkU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBoaWdoID0gbWlkIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjY3VtdWxhdGVkVmFsdWUgPj0gbWlkU3RvcCkge1xuICAgICAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByZWZpeFN1bUluZGV4T2ZSZXN1bHQobWlkLCBhY2N1bXVsYXRlZFZhbHVlIC0gbWlkU3RhcnQpO1xuICAgIH07XG4gICAgcmV0dXJuIFByZWZpeFN1bUNvbXB1dGVyO1xufSgpKTtcbmV4cG9ydCB7IFByZWZpeFN1bUNvbXB1dGVyIH07XG52YXIgUHJlZml4U3VtQ29tcHV0ZXJXaXRoQ2FjaGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJlZml4U3VtQ29tcHV0ZXJXaXRoQ2FjaGUodmFsdWVzKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlQWNjdW11bGF0ZWRWYWx1ZVN0YXJ0ID0gMDtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9hY3R1YWwgPSBuZXcgUHJlZml4U3VtQ29tcHV0ZXIodmFsdWVzKTtcbiAgICAgICAgdGhpcy5fYnVzdENhY2hlKCk7XG4gICAgfVxuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5fYnVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jYWNoZUFjY3VtdWxhdGVkVmFsdWVTdGFydCA9IDA7XG4gICAgICAgIHRoaXMuX2NhY2hlID0gbnVsbDtcbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5pbnNlcnRWYWx1ZXMgPSBmdW5jdGlvbiAoaW5zZXJ0SW5kZXgsIGluc2VydFZhbHVlcykge1xuICAgICAgICBpZiAodGhpcy5fYWN0dWFsLmluc2VydFZhbHVlcyhpbnNlcnRJbmRleCwgaW5zZXJ0VmFsdWVzKSkge1xuICAgICAgICAgICAgdGhpcy5fYnVzdENhY2hlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5jaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdHVhbC5jaGFuZ2VWYWx1ZShpbmRleCwgdmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9idXN0Q2FjaGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXJXaXRoQ2FjaGUucHJvdG90eXBlLnJlbW92ZVZhbHVlcyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBjbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdHVhbC5yZW1vdmVWYWx1ZXMoc3RhcnRJbmRleCwgY250KSkge1xuICAgICAgICAgICAgdGhpcy5fYnVzdENhY2hlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5nZXRUb3RhbFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0dWFsLmdldFRvdGFsVmFsdWUoKTtcbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5nZXRBY2N1bXVsYXRlZFZhbHVlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3R1YWwuZ2V0QWNjdW11bGF0ZWRWYWx1ZShpbmRleCk7XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlcldpdGhDYWNoZS5wcm90b3R5cGUuZ2V0SW5kZXhPZiA9IGZ1bmN0aW9uIChhY2N1bXVsYXRlZFZhbHVlKSB7XG4gICAgICAgIGFjY3VtdWxhdGVkVmFsdWUgPSBNYXRoLmZsb29yKGFjY3VtdWxhdGVkVmFsdWUpOyAvL0BwZXJmXG4gICAgICAgIGlmICh0aGlzLl9jYWNoZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlSW5kZXggPSBhY2N1bXVsYXRlZFZhbHVlIC0gdGhpcy5fY2FjaGVBY2N1bXVsYXRlZFZhbHVlU3RhcnQ7XG4gICAgICAgICAgICBpZiAoY2FjaGVJbmRleCA+PSAwICYmIGNhY2hlSW5kZXggPCB0aGlzLl9jYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSBoaXQhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2NhY2hlSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENhY2hlIG1pc3MhXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3R1YWwuZ2V0SW5kZXhPZihhY2N1bXVsYXRlZFZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdpdmVzIGEgaGludCB0aGF0IGEgbG90IG9mIHJlcXVlc3RzIGFyZSBhYm91dCB0byBjb21lIGluIGZvciB0aGVzZSBhY2N1bXVsYXRlZCB2YWx1ZXMuXG4gICAgICovXG4gICAgUHJlZml4U3VtQ29tcHV0ZXJXaXRoQ2FjaGUucHJvdG90eXBlLndhcm1VcENhY2hlID0gZnVuY3Rpb24gKGFjY3VtdWxhdGVkVmFsdWVTdGFydCwgYWNjdW11bGF0ZWRWYWx1ZUVuZCkge1xuICAgICAgICB2YXIgbmV3Q2FjaGUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgYWNjdW11bGF0ZWRWYWx1ZSA9IGFjY3VtdWxhdGVkVmFsdWVTdGFydDsgYWNjdW11bGF0ZWRWYWx1ZSA8PSBhY2N1bXVsYXRlZFZhbHVlRW5kOyBhY2N1bXVsYXRlZFZhbHVlKyspIHtcbiAgICAgICAgICAgIG5ld0NhY2hlW2FjY3VtdWxhdGVkVmFsdWUgLSBhY2N1bXVsYXRlZFZhbHVlU3RhcnRdID0gdGhpcy5nZXRJbmRleE9mKGFjY3VtdWxhdGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NhY2hlID0gbmV3Q2FjaGU7XG4gICAgICAgIHRoaXMuX2NhY2hlQWNjdW11bGF0ZWRWYWx1ZVN0YXJ0ID0gYWNjdW11bGF0ZWRWYWx1ZVN0YXJ0O1xuICAgIH07XG4gICAgcmV0dXJuIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlO1xufSgpKTtcbmV4cG9ydCB7IFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IFNpbXBsZVdvcmtlclNlcnZlciB9IGZyb20gJy4uL2Jhc2UvY29tbW9uL3dvcmtlci9zaW1wbGVXb3JrZXIuanMnO1xuaW1wb3J0IHsgRWRpdG9yU2ltcGxlV29ya2VyIH0gZnJvbSAnLi9jb21tb24vc2VydmljZXMvZWRpdG9yU2ltcGxlV29ya2VyLmpzJztcbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoZm9yZWlnbk1vZHVsZSkge1xuICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB2YXIgc2ltcGxlV29ya2VyID0gbmV3IFNpbXBsZVdvcmtlclNlcnZlcihmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UobXNnKTtcbiAgICB9LCBmdW5jdGlvbiAoaG9zdCkgeyByZXR1cm4gbmV3IEVkaXRvclNpbXBsZVdvcmtlcihob3N0LCBmb3JlaWduTW9kdWxlKTsgfSk7XG4gICAgc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzaW1wbGVXb3JrZXIub25tZXNzYWdlKGUuZGF0YSk7XG4gICAgfTtcbn1cbnNlbGYub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBJZ25vcmUgZmlyc3QgbWVzc2FnZSBpbiB0aGlzIGNhc2UgYW5kIGluaXRpYWxpemUgaWYgbm90IHlldCBpbml0aWFsaXplZFxuICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgaW5pdGlhbGl6ZShudWxsKTtcbiAgICB9XG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==