(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: strokeRectangle, strokeCircle, fillRectangle, fillCircle, getPositions, getColors, getIndices, reset, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return __wbg_new_59cb74e423758ede; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return __wbg_stack_558ba5917b466edd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return __wbg_error_4bb6c2a97407129a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ "./pkg/index_bg.wasm");


/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
*/
function strokeRectangle(x, y, width, height) {
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeRectangle"](x, y, width, height);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
*/
function strokeCircle(x, y, r) {
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeCircle"](x, y, r);
}

/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
*/
function fillRectangle(x, y, width, height) {
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillRectangle"](x, y, width, height);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
*/
function fillCircle(x, y, r) {
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

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function passStringToWasm(arg) {

    let len = arg.length;
    let ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](len);

    const mem = getUint8Memory();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"](ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const __wbg_new_59cb74e423758ede = function() {
    const ret = new Error();
    return addHeapObject(ret);
};

const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ret0 = passStringToWasm(ret);
    const ret1 = WASM_VECTOR_LEN;
    getInt32Memory()[arg0 / 4 + 0] = ret0;
    getInt32Memory()[arg0 / 4 + 1] = ret1;
};

const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    const v0 = getStringFromWasm(arg0, arg1).slice();
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](arg0, arg1 * 1);
    console.error(v0);
};

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm(arg0, arg1));
};



/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, strokeRectangle, strokeCircle, fillRectangle, fillCircle, getPositions, getColors, getIndices, reset, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./index.js */ "./pkg/index.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wa2cvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3Qzs7QUFFeEM7QUFDQSxVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakI7QUFDTztBQUNQLElBQUksOERBQW9CO0FBQ3hCOztBQUVBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakI7QUFDTztBQUNQLElBQUksMkRBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCO0FBQ087QUFDUCxJQUFJLDREQUFrQjtBQUN0Qjs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCO0FBQ087QUFDUCxJQUFJLHlEQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUscURBQVc7QUFDbEYsNkNBQTZDLHFEQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFLHFEQUFXO0FBQ3RGLGlEQUFpRCxxREFBVztBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0EsZ0JBQWdCLDJEQUFpQjtBQUNqQztBQUNBO0FBQ0EsSUFBSSw4REFBb0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0Isd0RBQWM7QUFDOUI7QUFDQTtBQUNBLElBQUksOERBQW9CO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSxxREFBVztBQUNwRiwrQ0FBK0MscURBQVc7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBLGdCQUFnQix5REFBZTtBQUMvQjtBQUNBO0FBQ0EsSUFBSSw4REFBb0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUCxJQUFJLG9EQUFVO0FBQ2Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixrQkFBa0I7O0FBRTNDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSx1RUFBdUUscURBQVc7QUFDbEYsNkNBQTZDLHFEQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGNBQWMsZ0VBQXNCOztBQUVwQzs7QUFFQTs7QUFFQSxVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlFQUF1QjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCwrQkFBK0I7O0FBRWpGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLElBQUksOERBQW9CO0FBQ3hCO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsImZpbGUiOiIwLjQwYzE1MWMzLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL2luZGV4X2JnLndhc20nO1xuXG4vKipcbiogQHBhcmFtIHtudW1iZXJ9IHhcbiogQHBhcmFtIHtudW1iZXJ9IHlcbiogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4qIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiovXG5leHBvcnQgZnVuY3Rpb24gc3Ryb2tlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB3YXNtLnN0cm9rZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSByXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cm9rZUNpcmNsZSh4LCB5LCByKSB7XG4gICAgd2FzbS5zdHJva2VDaXJjbGUoeCwgeSwgcik7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0geFxuKiBAcGFyYW0ge251bWJlcn0geVxuKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB3YXNtLmZpbGxSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0geFxuKiBAcGFyYW0ge251bWJlcn0geVxuKiBAcGFyYW0ge251bWJlcn0gclxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWxsQ2lyY2xlKHgsIHksIHIpIHtcbiAgICB3YXNtLmZpbGxDaXJjbGUoeCwgeSwgcik7XG59XG5cbmxldCBjYWNoZWdldEludDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldEludDMyTWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0SW50MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRJbnQzMk1lbW9yeSA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5O1xufVxuXG5sZXQgY2FjaGVnZXRGbG9hdDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldEZsb2F0MzJNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0RmxvYXQzMk1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldEZsb2F0MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRGbG9hdDMyTWVtb3J5ID0gbmV3IEZsb2F0MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRGbG9hdDMyTWVtb3J5O1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheUYzMkZyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldEZsb2F0MzJNZW1vcnkoKS5zdWJhcnJheShwdHIgLyA0LCBwdHIgLyA0ICsgbGVuKTtcbn1cbi8qKlxuKiBAcmV0dXJucyB7RmxvYXQzMkFycmF5fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgcmV0cHRyID0gODtcbiAgICBjb25zdCByZXQgPSB3YXNtLmdldFBvc2l0aW9ucyhyZXRwdHIpO1xuICAgIGNvbnN0IG1lbWkzMiA9IGdldEludDMyTWVtb3J5KCk7XG4gICAgY29uc3QgdjAgPSBnZXRBcnJheUYzMkZyb21XYXNtKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUobWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSAqIDQpO1xuICAgIHJldHVybiB2MDtcbn1cblxuLyoqXG4qIEByZXR1cm5zIHtGbG9hdDMyQXJyYXl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9ycygpIHtcbiAgICBjb25zdCByZXRwdHIgPSA4O1xuICAgIGNvbnN0IHJldCA9IHdhc20uZ2V0Q29sb3JzKHJldHB0cik7XG4gICAgY29uc3QgbWVtaTMyID0gZ2V0SW50MzJNZW1vcnkoKTtcbiAgICBjb25zdCB2MCA9IGdldEFycmF5RjMyRnJvbVdhc20obWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShtZW1pMzJbcmV0cHRyIC8gNCArIDBdLCBtZW1pMzJbcmV0cHRyIC8gNCArIDFdICogNCk7XG4gICAgcmV0dXJuIHYwO1xufVxuXG5sZXQgY2FjaGVnZXRVaW50MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDMyTWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQzMk1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQzMk1lbW9yeSA9IG5ldyBVaW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50MzJNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5VTMyRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gZ2V0VWludDMyTWVtb3J5KCkuc3ViYXJyYXkocHRyIC8gNCwgcHRyIC8gNCArIGxlbik7XG59XG4vKipcbiogQHJldHVybnMge1VpbnQzMkFycmF5fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmRpY2VzKCkge1xuICAgIGNvbnN0IHJldHB0ciA9IDg7XG4gICAgY29uc3QgcmV0ID0gd2FzbS5nZXRJbmRpY2VzKHJldHB0cik7XG4gICAgY29uc3QgbWVtaTMyID0gZ2V0SW50MzJNZW1vcnkoKTtcbiAgICBjb25zdCB2MCA9IGdldEFycmF5VTMyRnJvbVdhc20obWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShtZW1pMzJbcmV0cHRyIC8gNCArIDBdLCBtZW1pMzJbcmV0cHRyIC8gNCArIDFdICogNCk7XG4gICAgcmV0dXJuIHYwO1xufVxuXG4vKipcbiovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgd2FzbS5yZXNldCgpO1xufVxuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKTtcblxuaGVhcC5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQ4TWVtb3J5ID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20oYXJnKSB7XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhsZW4pO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbShwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfNTljYjc0ZTQyMzc1OGVkZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBFcnJvcigpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc3RhY2tfNTU4YmE1OTE3YjQ2NmVkZCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMSkuc3RhY2s7XG4gICAgY29uc3QgcmV0MCA9IHBhc3NTdHJpbmdUb1dhc20ocmV0KTtcbiAgICBjb25zdCByZXQxID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldEludDMyTWVtb3J5KClbYXJnMCAvIDQgKyAwXSA9IHJldDA7XG4gICAgZ2V0SW50MzJNZW1vcnkoKVthcmcwIC8gNCArIDFdID0gcmV0MTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19lcnJvcl80YmI2YzJhOTc0MDcxMjlhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHYwID0gZ2V0U3RyaW5nRnJvbVdhc20oYXJnMCwgYXJnMSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShhcmcwLCBhcmcxICogMSk7XG4gICAgY29uc29sZS5lcnJvcih2MCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdGFrZU9iamVjdChhcmcwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX3Rocm93ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKSk7XG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9