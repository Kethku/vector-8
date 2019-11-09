(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: setTolerance, strokeRectangle, strokeCircle, fillRectangle, fillCircle, getPositions, getColors, getIndices, reset, __wbindgen_object_drop_ref, __wbg_error_4bb6c2a97407129a, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTolerance", function() { return setTolerance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeRectangle", function() { return strokeRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeCircle", function() { return strokeCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRectangle", function() { return fillRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillCircle", function() { return fillCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositions", function() { return getPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColors", function() { return getColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndices", function() { return getIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return __wbg_error_4bb6c2a97407129a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return __wbg_new_59cb74e423758ede; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return __wbg_stack_558ba5917b466edd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ "./pkg/index_bg.wasm");


function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}
/**
* @param {number} pixel_size
*/
function setTolerance(pixel_size) {
    _assertNum(pixel_size);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["setTolerance"](pixel_size);
}

/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
* @param {number} color
*/
function strokeRectangle(x, y, width, height, color) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(width);
    _assertNum(height);
    _assertNum(color);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeRectangle"](x, y, width, height, color);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
* @param {number} color
*/
function strokeCircle(x, y, r, color) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(r);
    _assertNum(color);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeCircle"](x, y, r, color);
}

/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
* @param {number} color
*/
function fillRectangle(x, y, width, height, color) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(width);
    _assertNum(height);
    _assertNum(color);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillRectangle"](x, y, width, height, color);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
* @param {number} color
*/
function fillCircle(x, y, r, color) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(r);
    _assertNum(color);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillCircle"](x, y, r, color);
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

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

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

function logError(e) {
    let error = (function () {
        try {
            return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
        } catch(_) {
            return "<failed to stringify thrown value>";
        }
    }());
    console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
    throw e;
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

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

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

function passStringToWasm(arg) {

    if (typeof(arg) !== 'string') throw new Error('expected a string argument');

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
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    const v0 = getStringFromWasm(arg0, arg1).slice();
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](arg0, arg1 * 1);
    try {
        console.error(v0);
    } catch (e) {
        logError(e)
    }
};

const __wbg_new_59cb74e423758ede = function() {
    try {
        const ret = new Error();
        return addHeapObject(ret);
    } catch (e) {
        logError(e)
    }
};

const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    try {
        const ret = getObject(arg1).stack;
        const ret0 = passStringToWasm(ret);
        const ret1 = WASM_VECTOR_LEN;
        getInt32Memory()[arg0 / 4 + 0] = ret0;
        getInt32Memory()[arg0 / 4 + 1] = ret1;
    } catch (e) {
        logError(e)
    }
};

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm(arg0, arg1));
};



/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, setTolerance, strokeRectangle, strokeCircle, fillRectangle, fillCircle, getPositions, getColors, getIndices, reset, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wa2cvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNPO0FBQ1A7QUFDQSxJQUFJLDJEQUFpQjtBQUNyQjs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQjtBQUN4Qjs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFpQjtBQUNyQjs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFrQjtBQUN0Qjs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUscURBQVc7QUFDbEYsNkNBQTZDLHFEQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFLHFEQUFXO0FBQ3RGLGlEQUFpRCxxREFBVztBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQWlCO0FBQ2pDO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFjO0FBQzlCO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUscURBQVc7QUFDcEYsK0NBQStDLHFEQUFXO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQix5REFBZTtBQUMvQjtBQUNBO0FBQ0EsSUFBSSw4REFBb0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUCxJQUFJLG9EQUFVO0FBQ2Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEseUJBQXlCLGtCQUFrQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxVQUFVLGNBQWMsUUFBUTtBQUMzRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELCtCQUErQjs7QUFFakY7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RSxxREFBVztBQUNsRiw2Q0FBNkMscURBQVc7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLGdFQUFzQjs7QUFFcEM7O0FBRUE7O0FBRUEsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpRUFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsImZpbGUiOiIxLjc5Y2EwYTcxLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL2luZGV4X2JnLndhc20nO1xuXG5mdW5jdGlvbiBfYXNzZXJ0TnVtKG4pIHtcbiAgICBpZiAodHlwZW9mKG4pICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIG51bWJlciBhcmd1bWVudCcpO1xufVxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSBwaXhlbF9zaXplXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRvbGVyYW5jZShwaXhlbF9zaXplKSB7XG4gICAgX2Fzc2VydE51bShwaXhlbF9zaXplKTtcbiAgICB3YXNtLnNldFRvbGVyYW5jZShwaXhlbF9zaXplKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4qIEBwYXJhbSB7bnVtYmVyfSBjb2xvclxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJva2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcbiAgICBfYXNzZXJ0TnVtKHgpO1xuICAgIF9hc3NlcnROdW0oeSk7XG4gICAgX2Fzc2VydE51bSh3aWR0aCk7XG4gICAgX2Fzc2VydE51bShoZWlnaHQpO1xuICAgIF9hc3NlcnROdW0oY29sb3IpO1xuICAgIHdhc20uc3Ryb2tlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSByXG4qIEBwYXJhbSB7bnVtYmVyfSBjb2xvclxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJva2VDaXJjbGUoeCwgeSwgciwgY29sb3IpIHtcbiAgICBfYXNzZXJ0TnVtKHgpO1xuICAgIF9hc3NlcnROdW0oeSk7XG4gICAgX2Fzc2VydE51bShyKTtcbiAgICBfYXNzZXJ0TnVtKGNvbG9yKTtcbiAgICB3YXNtLnN0cm9rZUNpcmNsZSh4LCB5LCByLCBjb2xvcik7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0geFxuKiBAcGFyYW0ge251bWJlcn0geVxuKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuKiBAcGFyYW0ge251bWJlcn0gY29sb3JcbiovXG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICAgIF9hc3NlcnROdW0oeCk7XG4gICAgX2Fzc2VydE51bSh5KTtcbiAgICBfYXNzZXJ0TnVtKHdpZHRoKTtcbiAgICBfYXNzZXJ0TnVtKGhlaWdodCk7XG4gICAgX2Fzc2VydE51bShjb2xvcik7XG4gICAgd2FzbS5maWxsUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSByXG4qIEBwYXJhbSB7bnVtYmVyfSBjb2xvclxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWxsQ2lyY2xlKHgsIHksIHIsIGNvbG9yKSB7XG4gICAgX2Fzc2VydE51bSh4KTtcbiAgICBfYXNzZXJ0TnVtKHkpO1xuICAgIF9hc3NlcnROdW0ocik7XG4gICAgX2Fzc2VydE51bShjb2xvcik7XG4gICAgd2FzbS5maWxsQ2lyY2xlKHgsIHksIHIsIGNvbG9yKTtcbn1cblxubGV0IGNhY2hlZ2V0SW50MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0SW50MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRJbnQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5ID0gbmV3IEludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0SW50MzJNZW1vcnk7XG59XG5cbmxldCBjYWNoZWdldEZsb2F0MzJNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0RmxvYXQzMk1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRGbG9hdDMyTWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0RmxvYXQzMk1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEZsb2F0MzJNZW1vcnkgPSBuZXcgRmxvYXQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEZsb2F0MzJNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5RjMyRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gZ2V0RmxvYXQzMk1lbW9yeSgpLnN1YmFycmF5KHB0ciAvIDQsIHB0ciAvIDQgKyBsZW4pO1xufVxuLyoqXG4qIEByZXR1cm5zIHtGbG9hdDMyQXJyYXl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCByZXRwdHIgPSA4O1xuICAgIF9hc3NlcnROdW0ocmV0cHRyKTtcbiAgICBjb25zdCByZXQgPSB3YXNtLmdldFBvc2l0aW9ucyhyZXRwdHIpO1xuICAgIGNvbnN0IG1lbWkzMiA9IGdldEludDMyTWVtb3J5KCk7XG4gICAgY29uc3QgdjAgPSBnZXRBcnJheUYzMkZyb21XYXNtKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUobWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSAqIDQpO1xuICAgIHJldHVybiB2MDtcbn1cblxuLyoqXG4qIEByZXR1cm5zIHtGbG9hdDMyQXJyYXl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9ycygpIHtcbiAgICBjb25zdCByZXRwdHIgPSA4O1xuICAgIF9hc3NlcnROdW0ocmV0cHRyKTtcbiAgICBjb25zdCByZXQgPSB3YXNtLmdldENvbG9ycyhyZXRwdHIpO1xuICAgIGNvbnN0IG1lbWkzMiA9IGdldEludDMyTWVtb3J5KCk7XG4gICAgY29uc3QgdjAgPSBnZXRBcnJheUYzMkZyb21XYXNtKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUobWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSAqIDQpO1xuICAgIHJldHVybiB2MDtcbn1cblxubGV0IGNhY2hlZ2V0VWludDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQzMk1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50MzJNZW1vcnkgPSBuZXcgVWludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDMyTWVtb3J5O1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheVUzMkZyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldFVpbnQzMk1lbW9yeSgpLnN1YmFycmF5KHB0ciAvIDQsIHB0ciAvIDQgKyBsZW4pO1xufVxuLyoqXG4qIEByZXR1cm5zIHtVaW50MzJBcnJheX1cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kaWNlcygpIHtcbiAgICBjb25zdCByZXRwdHIgPSA4O1xuICAgIF9hc3NlcnROdW0ocmV0cHRyKTtcbiAgICBjb25zdCByZXQgPSB3YXNtLmdldEluZGljZXMocmV0cHRyKTtcbiAgICBjb25zdCBtZW1pMzIgPSBnZXRJbnQzMk1lbW9yeSgpO1xuICAgIGNvbnN0IHYwID0gZ2V0QXJyYXlVMzJGcm9tV2FzbShtZW1pMzJbcmV0cHRyIC8gNCArIDBdLCBtZW1pMzJbcmV0cHRyIC8gNCArIDFdKS5zbGljZSgpO1xuICAgIHdhc20uX193YmluZGdlbl9mcmVlKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0gKiA0KTtcbiAgICByZXR1cm4gdjA7XG59XG5cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB3YXNtLnJlc2V0KCk7XG59XG5cbmNvbnN0IGhlYXAgPSBuZXcgQXJyYXkoMzIpO1xuXG5oZWFwLmZpbGwodW5kZWZpbmVkKTtcblxuaGVhcC5wdXNoKHVuZGVmaW5lZCwgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xuXG5mdW5jdGlvbiBnZXRPYmplY3QoaWR4KSB7IHJldHVybiBoZWFwW2lkeF07IH1cblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yKGUpIHtcbiAgICBsZXQgZXJyb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvciA/IGAke2UubWVzc2FnZX1cXG5cXG5TdGFjazpcXG4ke2Uuc3RhY2t9YCA6IGUudG9TdHJpbmcoKTtcbiAgICAgICAgfSBjYXRjaChfKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8ZmFpbGVkIHRvIHN0cmluZ2lmeSB0aHJvd24gdmFsdWU+XCI7XG4gICAgICAgIH1cbiAgICB9KCkpO1xuICAgIGNvbnNvbGUuZXJyb3IoXCJ3YXNtLWJpbmRnZW46IGltcG9ydGVkIEpTIGZ1bmN0aW9uIHRoYXQgd2FzIG5vdCBtYXJrZWQgYXMgYGNhdGNoYCB0aHJldyBhbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHRocm93IGU7XG59XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGlmICh0eXBlb2YoaGVhcF9uZXh0KSAhPT0gJ251bWJlcicpIHRocm93IG5ldyBFcnJvcignY29ycnVwdCBoZWFwJyk7XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20oYXJnKSB7XG5cbiAgICBpZiAodHlwZW9mKGFyZykgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIGEgc3RyaW5nIGFyZ3VtZW50Jyk7XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhsZW4pO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcbiAgICAgICAgaWYgKHJldC5yZWFkICE9PSBhcmcubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBwYXNzIHdob2xlIHN0cmluZycpO1xuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB0YWtlT2JqZWN0KGFyZzApO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2Vycm9yXzRiYjZjMmE5NzQwNzEyOWEgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgdjAgPSBnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKS5zbGljZSgpO1xuICAgIHdhc20uX193YmluZGdlbl9mcmVlKGFyZzAsIGFyZzEgKiAxKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHYwKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld181OWNiNzRlNDIzNzU4ZWRlID0gZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmV0ID0gbmV3IEVycm9yKCk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dFcnJvcihlKVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zdGFja181NThiYTU5MTdiNDY2ZWRkID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcxKS5zdGFjaztcbiAgICAgICAgY29uc3QgcmV0MCA9IHBhc3NTdHJpbmdUb1dhc20ocmV0KTtcbiAgICAgICAgY29uc3QgcmV0MSA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgZ2V0SW50MzJNZW1vcnkoKVthcmcwIC8gNCArIDBdID0gcmV0MDtcbiAgICAgICAgZ2V0SW50MzJNZW1vcnkoKVthcmcwIC8gNCArIDFdID0gcmV0MTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fdGhyb3cgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=