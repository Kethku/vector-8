(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./pkg/vector_8.js":
/*!*************************!*\
  !*** ./pkg/vector_8.js ***!
  \*************************/
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
/* harmony import */ var _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector_8_bg.wasm */ "./pkg/vector_8_bg.wasm");


/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
*/
function strokeRectangle(x, y, width, height) {
    _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeRectangle"](x, y, width, height);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
*/
function strokeCircle(x, y, r) {
    _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeCircle"](x, y, r);
}

/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
*/
function fillRectangle(x, y, width, height) {
    _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillRectangle"](x, y, width, height);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
*/
function fillCircle(x, y, r) {
    _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillCircle"](x, y, r);
}

let cachegetInt32Memory = null;
function getInt32Memory() {
    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory = new Int32Array(_vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory;
}

let cachegetFloat32Memory = null;
function getFloat32Memory() {
    if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetFloat32Memory = new Float32Array(_vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
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
    const ret = _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["getPositions"](retptr);
    const memi32 = getInt32Memory();
    const v0 = getArrayF32FromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();
    _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 4);
    return v0;
}

/**
* @returns {Float32Array}
*/
function getColors() {
    const retptr = 8;
    const ret = _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["getColors"](retptr);
    const memi32 = getInt32Memory();
    const v0 = getArrayF32FromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();
    _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 4);
    return v0;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint32Memory = new Uint32Array(_vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
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
    const ret = _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["getIndices"](retptr);
    const memi32 = getInt32Memory();
    const v0 = getArrayU32FromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();
    _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 4);
    return v0;
}

/**
*/
function reset() {
    _vector_8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["reset"]();
}



/***/ }),

/***/ "./pkg/vector_8_bg.wasm":
/*!******************************!*\
  !*** ./pkg/vector_8_bg.wasm ***!
  \******************************/
/*! exports provided: memory, strokeRectangle, strokeCircle, fillRectangle, fillCircle, getPositions, getColors, getIndices, reset, __wbindgen_free */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wa2cvdmVjdG9yXzguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDOztBQUUzQztBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQjtBQUNPO0FBQ1AsSUFBSSxpRUFBb0I7QUFDeEI7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQjtBQUNPO0FBQ1AsSUFBSSw4REFBaUI7QUFDckI7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakI7QUFDTztBQUNQLElBQUksK0RBQWtCO0FBQ3RCOztBQUVBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakI7QUFDTztBQUNQLElBQUksNERBQWU7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RSx3REFBVztBQUNsRiw2Q0FBNkMsd0RBQVc7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRUFBMkUsd0RBQVc7QUFDdEYsaURBQWlELHdEQUFXO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsOERBQWlCO0FBQ2pDO0FBQ0E7QUFDQSxJQUFJLGlFQUFvQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBLGdCQUFnQiwyREFBYztBQUM5QjtBQUNBO0FBQ0EsSUFBSSxpRUFBb0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLHdEQUFXO0FBQ3BGLCtDQUErQyx3REFBVztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0EsZ0JBQWdCLDREQUFlO0FBQy9CO0FBQ0E7QUFDQSxJQUFJLGlFQUFvQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQLElBQUksdURBQVU7QUFDZCIsImZpbGUiOiIwLjEyYTgzYzk5LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL3ZlY3Rvcl84X2JnLndhc20nO1xuXG4vKipcbiogQHBhcmFtIHtudW1iZXJ9IHhcbiogQHBhcmFtIHtudW1iZXJ9IHlcbiogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4qIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiovXG5leHBvcnQgZnVuY3Rpb24gc3Ryb2tlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB3YXNtLnN0cm9rZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSByXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cm9rZUNpcmNsZSh4LCB5LCByKSB7XG4gICAgd2FzbS5zdHJva2VDaXJjbGUoeCwgeSwgcik7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0geFxuKiBAcGFyYW0ge251bWJlcn0geVxuKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB3YXNtLmZpbGxSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0geFxuKiBAcGFyYW0ge251bWJlcn0geVxuKiBAcGFyYW0ge251bWJlcn0gclxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWxsQ2lyY2xlKHgsIHksIHIpIHtcbiAgICB3YXNtLmZpbGxDaXJjbGUoeCwgeSwgcik7XG59XG5cbmxldCBjYWNoZWdldEludDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldEludDMyTWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0SW50MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRJbnQzMk1lbW9yeSA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5O1xufVxuXG5sZXQgY2FjaGVnZXRGbG9hdDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldEZsb2F0MzJNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0RmxvYXQzMk1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldEZsb2F0MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRGbG9hdDMyTWVtb3J5ID0gbmV3IEZsb2F0MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRGbG9hdDMyTWVtb3J5O1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheUYzMkZyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldEZsb2F0MzJNZW1vcnkoKS5zdWJhcnJheShwdHIgLyA0LCBwdHIgLyA0ICsgbGVuKTtcbn1cbi8qKlxuKiBAcmV0dXJucyB7RmxvYXQzMkFycmF5fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgcmV0cHRyID0gODtcbiAgICBjb25zdCByZXQgPSB3YXNtLmdldFBvc2l0aW9ucyhyZXRwdHIpO1xuICAgIGNvbnN0IG1lbWkzMiA9IGdldEludDMyTWVtb3J5KCk7XG4gICAgY29uc3QgdjAgPSBnZXRBcnJheUYzMkZyb21XYXNtKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUobWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSAqIDQpO1xuICAgIHJldHVybiB2MDtcbn1cblxuLyoqXG4qIEByZXR1cm5zIHtGbG9hdDMyQXJyYXl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9ycygpIHtcbiAgICBjb25zdCByZXRwdHIgPSA4O1xuICAgIGNvbnN0IHJldCA9IHdhc20uZ2V0Q29sb3JzKHJldHB0cik7XG4gICAgY29uc3QgbWVtaTMyID0gZ2V0SW50MzJNZW1vcnkoKTtcbiAgICBjb25zdCB2MCA9IGdldEFycmF5RjMyRnJvbVdhc20obWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShtZW1pMzJbcmV0cHRyIC8gNCArIDBdLCBtZW1pMzJbcmV0cHRyIC8gNCArIDFdICogNCk7XG4gICAgcmV0dXJuIHYwO1xufVxuXG5sZXQgY2FjaGVnZXRVaW50MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDMyTWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQzMk1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQzMk1lbW9yeSA9IG5ldyBVaW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50MzJNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5VTMyRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gZ2V0VWludDMyTWVtb3J5KCkuc3ViYXJyYXkocHRyIC8gNCwgcHRyIC8gNCArIGxlbik7XG59XG4vKipcbiogQHJldHVybnMge1VpbnQzMkFycmF5fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmRpY2VzKCkge1xuICAgIGNvbnN0IHJldHB0ciA9IDg7XG4gICAgY29uc3QgcmV0ID0gd2FzbS5nZXRJbmRpY2VzKHJldHB0cik7XG4gICAgY29uc3QgbWVtaTMyID0gZ2V0SW50MzJNZW1vcnkoKTtcbiAgICBjb25zdCB2MCA9IGdldEFycmF5VTMyRnJvbVdhc20obWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShtZW1pMzJbcmV0cHRyIC8gNCArIDBdLCBtZW1pMzJbcmV0cHRyIC8gNCArIDFdICogNCk7XG4gICAgcmV0dXJuIHYwO1xufVxuXG4vKipcbiovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgd2FzbS5yZXNldCgpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9