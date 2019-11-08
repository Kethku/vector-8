(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: strokeRectangle, strokeCircle, fillRectangle, fillCircle, getPositions, getColors, getIndices, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeRectangle", function() { return strokeRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeCircle", function() { return strokeCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRectangle", function() { return fillRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillCircle", function() { return fillCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositions", function() { return getPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColors", function() { return getColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndices", function() { return getIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ "./pkg/index_bg.wasm");


function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}
/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
*/
function strokeRectangle(x, y, width, height) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(width);
    _assertNum(height);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeRectangle"](x, y, width, height);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
*/
function strokeCircle(x, y, r) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(r);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeCircle"](x, y, r);
}

/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
*/
function fillRectangle(x, y, width, height) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(width);
    _assertNum(height);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillRectangle"](x, y, width, height);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
*/
function fillCircle(x, y, r) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(r);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillCircle"](x, y, r);
}

let cachegetInt32Memory = null;
function getInt32Memory() {
    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory;
}

let cachegetFloat32Memory = null;
function getFloat32Memory() {
    if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetFloat32Memory = new Float32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetFloat32Memory;
}

function getArrayF32FromWasm(ptr, len) {
    return getFloat32Memory().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @returns {Float32Array}
*/
function getPositions() {
    const retptr = 8;
    _assertNum(retptr);
    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["getPositions"](retptr);
    const memi32 = getInt32Memory();
    const v0 = getArrayF32FromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 4);
    return v0;
}

/**
* @returns {Float32Array}
*/
function getColors() {
    const retptr = 8;
    _assertNum(retptr);
    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["getColors"](retptr);
    const memi32 = getInt32Memory();
    const v0 = getArrayF32FromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 4);
    return v0;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint32Memory = new Uint32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint32Memory;
}

function getArrayU32FromWasm(ptr, len) {
    return getUint32Memory().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @returns {Uint32Array}
*/
function getIndices() {
    const retptr = 8;
    _assertNum(retptr);
    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["getIndices"](retptr);
    const memi32 = getInt32Memory();
    const v0 = getArrayU32FromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 4);
    return v0;
}

/**
*/
function reset() {
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["reset"]();
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}



/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, strokeRectangle, strokeCircle, fillRectangle, fillCircle, getPositions, getColors, getIndices, reset, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wa2cvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQjtBQUN4Qjs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFpQjtBQUNyQjs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFrQjtBQUN0Qjs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUscURBQVc7QUFDbEYsNkNBQTZDLHFEQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFLHFEQUFXO0FBQ3RGLGlEQUFpRCxxREFBVztBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQWlCO0FBQ2pDO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFjO0FBQzlCO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUscURBQVc7QUFDcEYsK0NBQStDLHFEQUFXO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQix5REFBZTtBQUMvQjtBQUNBO0FBQ0EsSUFBSSw4REFBb0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUCxJQUFJLG9EQUFVO0FBQ2Q7O0FBRUEsa0RBQWtELCtCQUErQjs7QUFFakY7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RSxxREFBVztBQUNsRiw2Q0FBNkMscURBQVc7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLjAzMjAzNDZiLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL2luZGV4X2JnLndhc20nO1xuXG5mdW5jdGlvbiBfYXNzZXJ0TnVtKG4pIHtcbiAgICBpZiAodHlwZW9mKG4pICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIG51bWJlciBhcmd1bWVudCcpO1xufVxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cm9rZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgX2Fzc2VydE51bSh4KTtcbiAgICBfYXNzZXJ0TnVtKHkpO1xuICAgIF9hc3NlcnROdW0od2lkdGgpO1xuICAgIF9hc3NlcnROdW0oaGVpZ2h0KTtcbiAgICB3YXNtLnN0cm9rZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSByXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cm9rZUNpcmNsZSh4LCB5LCByKSB7XG4gICAgX2Fzc2VydE51bSh4KTtcbiAgICBfYXNzZXJ0TnVtKHkpO1xuICAgIF9hc3NlcnROdW0ocik7XG4gICAgd2FzbS5zdHJva2VDaXJjbGUoeCwgeSwgcik7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0geFxuKiBAcGFyYW0ge251bWJlcn0geVxuKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBfYXNzZXJ0TnVtKHgpO1xuICAgIF9hc3NlcnROdW0oeSk7XG4gICAgX2Fzc2VydE51bSh3aWR0aCk7XG4gICAgX2Fzc2VydE51bShoZWlnaHQpO1xuICAgIHdhc20uZmlsbFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSByXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbGxDaXJjbGUoeCwgeSwgcikge1xuICAgIF9hc3NlcnROdW0oeCk7XG4gICAgX2Fzc2VydE51bSh5KTtcbiAgICBfYXNzZXJ0TnVtKHIpO1xuICAgIHdhc20uZmlsbENpcmNsZSh4LCB5LCByKTtcbn1cblxubGV0IGNhY2hlZ2V0SW50MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0SW50MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRJbnQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5ID0gbmV3IEludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0SW50MzJNZW1vcnk7XG59XG5cbmxldCBjYWNoZWdldEZsb2F0MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0RmxvYXQzMk1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRGbG9hdDMyTWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0RmxvYXQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEZsb2F0MzJNZW1vcnkgPSBuZXcgRmxvYXQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEZsb2F0MzJNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5RjMyRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gZ2V0RmxvYXQzMk1lbW9yeSgpLnN1YmFycmF5KHB0ciAvIDQsIHB0ciAvIDQgKyBsZW4pO1xufVxuLyoqXG4qIEByZXR1cm5zIHtGbG9hdDMyQXJyYXl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCByZXRwdHIgPSA4O1xuICAgIF9hc3NlcnROdW0ocmV0cHRyKTtcbiAgICBjb25zdCByZXQgPSB3YXNtLmdldFBvc2l0aW9ucyhyZXRwdHIpO1xuICAgIGNvbnN0IG1lbWkzMiA9IGdldEludDMyTWVtb3J5KCk7XG4gICAgY29uc3QgdjAgPSBnZXRBcnJheUYzMkZyb21XYXNtKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUobWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSAqIDQpO1xuICAgIHJldHVybiB2MDtcbn1cblxuLyoqXG4qIEByZXR1cm5zIHtGbG9hdDMyQXJyYXl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9ycygpIHtcbiAgICBjb25zdCByZXRwdHIgPSA4O1xuICAgIF9hc3NlcnROdW0ocmV0cHRyKTtcbiAgICBjb25zdCByZXQgPSB3YXNtLmdldENvbG9ycyhyZXRwdHIpO1xuICAgIGNvbnN0IG1lbWkzMiA9IGdldEludDMyTWVtb3J5KCk7XG4gICAgY29uc3QgdjAgPSBnZXRBcnJheUYzMkZyb21XYXNtKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUobWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSAqIDQpO1xuICAgIHJldHVybiB2MDtcbn1cblxubGV0IGNhY2hlZ2V0VWludDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQzMk1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50MzJNZW1vcnkgPSBuZXcgVWludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDMyTWVtb3J5O1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheVUzMkZyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldFVpbnQzMk1lbW9yeSgpLnN1YmFycmF5KHB0ciAvIDQsIHB0ciAvIDQgKyBsZW4pO1xufVxuLyoqXG4qIEByZXR1cm5zIHtVaW50MzJBcnJheX1cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kaWNlcygpIHtcbiAgICBjb25zdCByZXRwdHIgPSA4O1xuICAgIF9hc3NlcnROdW0ocmV0cHRyKTtcbiAgICBjb25zdCByZXQgPSB3YXNtLmdldEluZGljZXMocmV0cHRyKTtcbiAgICBjb25zdCBtZW1pMzIgPSBnZXRJbnQzMk1lbW9yeSgpO1xuICAgIGNvbnN0IHYwID0gZ2V0QXJyYXlVMzJGcm9tV2FzbShtZW1pMzJbcmV0cHRyIC8gNCArIDBdLCBtZW1pMzJbcmV0cHRyIC8gNCArIDFdKS5zbGljZSgpO1xuICAgIHdhc20uX193YmluZGdlbl9mcmVlKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0gKiA0KTtcbiAgICByZXR1cm4gdjA7XG59XG5cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB3YXNtLnJlc2V0KCk7XG59XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==