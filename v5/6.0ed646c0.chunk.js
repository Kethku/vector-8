(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: setPixelSize, setLineWidth, strokeTriangle, strokeQuad, strokeRectangle, strokePolyLine, strokeCircle, fillTriangle, fillQuad, fillRectangle, fillPolyLine, fillCircle, getPositions, getColors, getId, getIndices, reset, __wbindgen_object_drop_ref, __wbg_error_4bb6c2a97407129a, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPixelSize", function() { return setPixelSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLineWidth", function() { return setLineWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeTriangle", function() { return strokeTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeQuad", function() { return strokeQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeRectangle", function() { return strokeRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokePolyLine", function() { return strokePolyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeCircle", function() { return strokeCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillTriangle", function() { return fillTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillQuad", function() { return fillQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRectangle", function() { return fillRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillPolyLine", function() { return fillPolyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillCircle", function() { return fillCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositions", function() { return getPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColors", function() { return getColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
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
function setPixelSize(pixel_size) {
    _assertNum(pixel_size);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["setPixelSize"](pixel_size);
}

/**
* @param {number} width
*/
function setLineWidth(width) {
    _assertNum(width);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["setLineWidth"](width);
}

/**
* @param {number} x1
* @param {number} y1
* @param {number} x2
* @param {number} y2
* @param {number} x3
* @param {number} y3
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function strokeTriangle(x1, y1, x2, y2, x3, y3, color, id_r, id_g, id_b) {
    _assertNum(x1);
    _assertNum(y1);
    _assertNum(x2);
    _assertNum(y2);
    _assertNum(x3);
    _assertNum(y3);
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeTriangle"](x1, y1, x2, y2, x3, y3, color, id_r, id_g, id_b);
}

/**
* @param {number} x1
* @param {number} y1
* @param {number} x2
* @param {number} y2
* @param {number} x3
* @param {number} y3
* @param {number} x4
* @param {number} y4
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function strokeQuad(x1, y1, x2, y2, x3, y3, x4, y4, color, id_r, id_g, id_b) {
    _assertNum(x1);
    _assertNum(y1);
    _assertNum(x2);
    _assertNum(y2);
    _assertNum(x3);
    _assertNum(y3);
    _assertNum(x4);
    _assertNum(y4);
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeQuad"](x1, y1, x2, y2, x3, y3, x4, y4, color, id_r, id_g, id_b);
}

/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function strokeRectangle(x, y, width, height, color, id_r, id_g, id_b) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(width);
    _assertNum(height);
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeRectangle"](x, y, width, height, color, id_r, id_g, id_b);
}

let cachegetFloat32Memory = null;
function getFloat32Memory() {
    if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetFloat32Memory = new Float32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetFloat32Memory;
}

let WASM_VECTOR_LEN = 0;

function passArrayF32ToWasm(arg) {
    const ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](arg.length * 4);
    getFloat32Memory().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error('expected a boolean argument');
    }
}
/**
* @param {Float32Array} points
* @param {boolean} closed
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function strokePolyLine(points, closed, color, id_r, id_g, id_b) {
    _assertBoolean(closed);
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokePolyLine"](passArrayF32ToWasm(points), WASM_VECTOR_LEN, closed, color, id_r, id_g, id_b);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function strokeCircle(x, y, r, color, id_r, id_g, id_b) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(r);
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["strokeCircle"](x, y, r, color, id_r, id_g, id_b);
}

/**
* @param {number} x1
* @param {number} y1
* @param {number} x2
* @param {number} y2
* @param {number} x3
* @param {number} y3
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function fillTriangle(x1, y1, x2, y2, x3, y3, color, id_r, id_g, id_b) {
    _assertNum(x1);
    _assertNum(y1);
    _assertNum(x2);
    _assertNum(y2);
    _assertNum(x3);
    _assertNum(y3);
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillTriangle"](x1, y1, x2, y2, x3, y3, color, id_r, id_g, id_b);
}

/**
* @param {number} x1
* @param {number} y1
* @param {number} x2
* @param {number} y2
* @param {number} x3
* @param {number} y3
* @param {number} x4
* @param {number} y4
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function fillQuad(x1, y1, x2, y2, x3, y3, x4, y4, color, id_r, id_g, id_b) {
    _assertNum(x1);
    _assertNum(y1);
    _assertNum(x2);
    _assertNum(y2);
    _assertNum(x3);
    _assertNum(y3);
    _assertNum(x4);
    _assertNum(y4);
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillQuad"](x1, y1, x2, y2, x3, y3, x4, y4, color, id_r, id_g, id_b);
}

/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function fillRectangle(x, y, width, height, color, id_r, id_g, id_b) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(width);
    _assertNum(height);
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillRectangle"](x, y, width, height, color, id_r, id_g, id_b);
}

/**
* @param {Float32Array} points
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function fillPolyLine(points, color, id_r, id_g, id_b) {
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillPolyLine"](passArrayF32ToWasm(points), WASM_VECTOR_LEN, color, id_r, id_g, id_b);
}

/**
* @param {number} x
* @param {number} y
* @param {number} r
* @param {number} color
* @param {number} id_r
* @param {number} id_g
* @param {number} id_b
*/
function fillCircle(x, y, r, color, id_r, id_g, id_b) {
    _assertNum(x);
    _assertNum(y);
    _assertNum(r);
    _assertNum(color);
    _assertNum(id_r);
    _assertNum(id_g);
    _assertNum(id_b);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["fillCircle"](x, y, r, color, id_r, id_g, id_b);
}

let cachegetInt32Memory = null;
function getInt32Memory() {
    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory;
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

/**
* @returns {Float32Array}
*/
function getId() {
    const retptr = 8;
    _assertNum(retptr);
    const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["getId"](retptr);
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
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, setPixelSize, setLineWidth, strokeTriangle, strokeQuad, strokeRectangle, strokePolyLine, strokeCircle, fillTriangle, fillQuad, fillRectangle, fillPolyLine, fillCircle, getPositions, getColors, getId, getIndices, reset, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wa2cvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDTztBQUNQO0FBQ0EsSUFBSSwyREFBaUI7QUFDckI7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDTztBQUNQO0FBQ0EsSUFBSSwyREFBaUI7QUFDckI7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBbUI7QUFDdkI7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBZTtBQUNuQjs7QUFFQTtBQUNBLFVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLGdFQUFzQjs7QUFFcEM7O0FBRUE7O0FBRUEsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpRUFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsImZpbGUiOiI2LjBlZDY0NmMwLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL2luZGV4X2JnLndhc20nO1xuXG5mdW5jdGlvbiBfYXNzZXJ0TnVtKG4pIHtcbiAgICBpZiAodHlwZW9mKG4pICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIG51bWJlciBhcmd1bWVudCcpO1xufVxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSBwaXhlbF9zaXplXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFBpeGVsU2l6ZShwaXhlbF9zaXplKSB7XG4gICAgX2Fzc2VydE51bShwaXhlbF9zaXplKTtcbiAgICB3YXNtLnNldFBpeGVsU2l6ZShwaXhlbF9zaXplKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMaW5lV2lkdGgod2lkdGgpIHtcbiAgICBfYXNzZXJ0TnVtKHdpZHRoKTtcbiAgICB3YXNtLnNldExpbmVXaWR0aCh3aWR0aCk7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0geDFcbiogQHBhcmFtIHtudW1iZXJ9IHkxXG4qIEBwYXJhbSB7bnVtYmVyfSB4MlxuKiBAcGFyYW0ge251bWJlcn0geTJcbiogQHBhcmFtIHtudW1iZXJ9IHgzXG4qIEBwYXJhbSB7bnVtYmVyfSB5M1xuKiBAcGFyYW0ge251bWJlcn0gY29sb3JcbiogQHBhcmFtIHtudW1iZXJ9IGlkX3JcbiogQHBhcmFtIHtudW1iZXJ9IGlkX2dcbiogQHBhcmFtIHtudW1iZXJ9IGlkX2JcbiovXG5leHBvcnQgZnVuY3Rpb24gc3Ryb2tlVHJpYW5nbGUoeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgY29sb3IsIGlkX3IsIGlkX2csIGlkX2IpIHtcbiAgICBfYXNzZXJ0TnVtKHgxKTtcbiAgICBfYXNzZXJ0TnVtKHkxKTtcbiAgICBfYXNzZXJ0TnVtKHgyKTtcbiAgICBfYXNzZXJ0TnVtKHkyKTtcbiAgICBfYXNzZXJ0TnVtKHgzKTtcbiAgICBfYXNzZXJ0TnVtKHkzKTtcbiAgICBfYXNzZXJ0TnVtKGNvbG9yKTtcbiAgICBfYXNzZXJ0TnVtKGlkX3IpO1xuICAgIF9hc3NlcnROdW0oaWRfZyk7XG4gICAgX2Fzc2VydE51bShpZF9iKTtcbiAgICB3YXNtLnN0cm9rZVRyaWFuZ2xlKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIGNvbG9yLCBpZF9yLCBpZF9nLCBpZF9iKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4MVxuKiBAcGFyYW0ge251bWJlcn0geTFcbiogQHBhcmFtIHtudW1iZXJ9IHgyXG4qIEBwYXJhbSB7bnVtYmVyfSB5MlxuKiBAcGFyYW0ge251bWJlcn0geDNcbiogQHBhcmFtIHtudW1iZXJ9IHkzXG4qIEBwYXJhbSB7bnVtYmVyfSB4NFxuKiBAcGFyYW0ge251bWJlcn0geTRcbiogQHBhcmFtIHtudW1iZXJ9IGNvbG9yXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9yXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9nXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9iXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cm9rZVF1YWQoeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgeDQsIHk0LCBjb2xvciwgaWRfciwgaWRfZywgaWRfYikge1xuICAgIF9hc3NlcnROdW0oeDEpO1xuICAgIF9hc3NlcnROdW0oeTEpO1xuICAgIF9hc3NlcnROdW0oeDIpO1xuICAgIF9hc3NlcnROdW0oeTIpO1xuICAgIF9hc3NlcnROdW0oeDMpO1xuICAgIF9hc3NlcnROdW0oeTMpO1xuICAgIF9hc3NlcnROdW0oeDQpO1xuICAgIF9hc3NlcnROdW0oeTQpO1xuICAgIF9hc3NlcnROdW0oY29sb3IpO1xuICAgIF9hc3NlcnROdW0oaWRfcik7XG4gICAgX2Fzc2VydE51bShpZF9nKTtcbiAgICBfYXNzZXJ0TnVtKGlkX2IpO1xuICAgIHdhc20uc3Ryb2tlUXVhZCh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzLCB4NCwgeTQsIGNvbG9yLCBpZF9yLCBpZF9nLCBpZF9iKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4qIEBwYXJhbSB7bnVtYmVyfSBjb2xvclxuKiBAcGFyYW0ge251bWJlcn0gaWRfclxuKiBAcGFyYW0ge251bWJlcn0gaWRfZ1xuKiBAcGFyYW0ge251bWJlcn0gaWRfYlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJva2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGlkX3IsIGlkX2csIGlkX2IpIHtcbiAgICBfYXNzZXJ0TnVtKHgpO1xuICAgIF9hc3NlcnROdW0oeSk7XG4gICAgX2Fzc2VydE51bSh3aWR0aCk7XG4gICAgX2Fzc2VydE51bShoZWlnaHQpO1xuICAgIF9hc3NlcnROdW0oY29sb3IpO1xuICAgIF9hc3NlcnROdW0oaWRfcik7XG4gICAgX2Fzc2VydE51bShpZF9nKTtcbiAgICBfYXNzZXJ0TnVtKGlkX2IpO1xuICAgIHdhc20uc3Ryb2tlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBpZF9yLCBpZF9nLCBpZF9iKTtcbn1cblxubGV0IGNhY2hlZ2V0RmxvYXQzMk1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRGbG9hdDMyTWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldEZsb2F0MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRGbG9hdDMyTWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0RmxvYXQzMk1lbW9yeSA9IG5ldyBGbG9hdDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0RmxvYXQzMk1lbW9yeTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmZ1bmN0aW9uIHBhc3NBcnJheUYzMlRvV2FzbShhcmcpIHtcbiAgICBjb25zdCBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jKGFyZy5sZW5ndGggKiA0KTtcbiAgICBnZXRGbG9hdDMyTWVtb3J5KCkuc2V0KGFyZywgcHRyIC8gNCk7XG4gICAgV0FTTV9WRUNUT1JfTEVOID0gYXJnLmxlbmd0aDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0Qm9vbGVhbihuKSB7XG4gICAgaWYgKHR5cGVvZihuKSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYSBib29sZWFuIGFyZ3VtZW50Jyk7XG4gICAgfVxufVxuLyoqXG4qIEBwYXJhbSB7RmxvYXQzMkFycmF5fSBwb2ludHNcbiogQHBhcmFtIHtib29sZWFufSBjbG9zZWRcbiogQHBhcmFtIHtudW1iZXJ9IGNvbG9yXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9yXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9nXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9iXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cm9rZVBvbHlMaW5lKHBvaW50cywgY2xvc2VkLCBjb2xvciwgaWRfciwgaWRfZywgaWRfYikge1xuICAgIF9hc3NlcnRCb29sZWFuKGNsb3NlZCk7XG4gICAgX2Fzc2VydE51bShjb2xvcik7XG4gICAgX2Fzc2VydE51bShpZF9yKTtcbiAgICBfYXNzZXJ0TnVtKGlkX2cpO1xuICAgIF9hc3NlcnROdW0oaWRfYik7XG4gICAgd2FzbS5zdHJva2VQb2x5TGluZShwYXNzQXJyYXlGMzJUb1dhc20ocG9pbnRzKSwgV0FTTV9WRUNUT1JfTEVOLCBjbG9zZWQsIGNvbG9yLCBpZF9yLCBpZF9nLCBpZF9iKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSB4XG4qIEBwYXJhbSB7bnVtYmVyfSB5XG4qIEBwYXJhbSB7bnVtYmVyfSByXG4qIEBwYXJhbSB7bnVtYmVyfSBjb2xvclxuKiBAcGFyYW0ge251bWJlcn0gaWRfclxuKiBAcGFyYW0ge251bWJlcn0gaWRfZ1xuKiBAcGFyYW0ge251bWJlcn0gaWRfYlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJva2VDaXJjbGUoeCwgeSwgciwgY29sb3IsIGlkX3IsIGlkX2csIGlkX2IpIHtcbiAgICBfYXNzZXJ0TnVtKHgpO1xuICAgIF9hc3NlcnROdW0oeSk7XG4gICAgX2Fzc2VydE51bShyKTtcbiAgICBfYXNzZXJ0TnVtKGNvbG9yKTtcbiAgICBfYXNzZXJ0TnVtKGlkX3IpO1xuICAgIF9hc3NlcnROdW0oaWRfZyk7XG4gICAgX2Fzc2VydE51bShpZF9iKTtcbiAgICB3YXNtLnN0cm9rZUNpcmNsZSh4LCB5LCByLCBjb2xvciwgaWRfciwgaWRfZywgaWRfYik7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0geDFcbiogQHBhcmFtIHtudW1iZXJ9IHkxXG4qIEBwYXJhbSB7bnVtYmVyfSB4MlxuKiBAcGFyYW0ge251bWJlcn0geTJcbiogQHBhcmFtIHtudW1iZXJ9IHgzXG4qIEBwYXJhbSB7bnVtYmVyfSB5M1xuKiBAcGFyYW0ge251bWJlcn0gY29sb3JcbiogQHBhcmFtIHtudW1iZXJ9IGlkX3JcbiogQHBhcmFtIHtudW1iZXJ9IGlkX2dcbiogQHBhcmFtIHtudW1iZXJ9IGlkX2JcbiovXG5leHBvcnQgZnVuY3Rpb24gZmlsbFRyaWFuZ2xlKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIGNvbG9yLCBpZF9yLCBpZF9nLCBpZF9iKSB7XG4gICAgX2Fzc2VydE51bSh4MSk7XG4gICAgX2Fzc2VydE51bSh5MSk7XG4gICAgX2Fzc2VydE51bSh4Mik7XG4gICAgX2Fzc2VydE51bSh5Mik7XG4gICAgX2Fzc2VydE51bSh4Myk7XG4gICAgX2Fzc2VydE51bSh5Myk7XG4gICAgX2Fzc2VydE51bShjb2xvcik7XG4gICAgX2Fzc2VydE51bShpZF9yKTtcbiAgICBfYXNzZXJ0TnVtKGlkX2cpO1xuICAgIF9hc3NlcnROdW0oaWRfYik7XG4gICAgd2FzbS5maWxsVHJpYW5nbGUoeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgY29sb3IsIGlkX3IsIGlkX2csIGlkX2IpO1xufVxuXG4vKipcbiogQHBhcmFtIHtudW1iZXJ9IHgxXG4qIEBwYXJhbSB7bnVtYmVyfSB5MVxuKiBAcGFyYW0ge251bWJlcn0geDJcbiogQHBhcmFtIHtudW1iZXJ9IHkyXG4qIEBwYXJhbSB7bnVtYmVyfSB4M1xuKiBAcGFyYW0ge251bWJlcn0geTNcbiogQHBhcmFtIHtudW1iZXJ9IHg0XG4qIEBwYXJhbSB7bnVtYmVyfSB5NFxuKiBAcGFyYW0ge251bWJlcn0gY29sb3JcbiogQHBhcmFtIHtudW1iZXJ9IGlkX3JcbiogQHBhcmFtIHtudW1iZXJ9IGlkX2dcbiogQHBhcmFtIHtudW1iZXJ9IGlkX2JcbiovXG5leHBvcnQgZnVuY3Rpb24gZmlsbFF1YWQoeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgeDQsIHk0LCBjb2xvciwgaWRfciwgaWRfZywgaWRfYikge1xuICAgIF9hc3NlcnROdW0oeDEpO1xuICAgIF9hc3NlcnROdW0oeTEpO1xuICAgIF9hc3NlcnROdW0oeDIpO1xuICAgIF9hc3NlcnROdW0oeTIpO1xuICAgIF9hc3NlcnROdW0oeDMpO1xuICAgIF9hc3NlcnROdW0oeTMpO1xuICAgIF9hc3NlcnROdW0oeDQpO1xuICAgIF9hc3NlcnROdW0oeTQpO1xuICAgIF9hc3NlcnROdW0oY29sb3IpO1xuICAgIF9hc3NlcnROdW0oaWRfcik7XG4gICAgX2Fzc2VydE51bShpZF9nKTtcbiAgICBfYXNzZXJ0TnVtKGlkX2IpO1xuICAgIHdhc20uZmlsbFF1YWQoeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgeDQsIHk0LCBjb2xvciwgaWRfciwgaWRfZywgaWRfYik7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0geFxuKiBAcGFyYW0ge251bWJlcn0geVxuKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuKiBAcGFyYW0ge251bWJlcn0gY29sb3JcbiogQHBhcmFtIHtudW1iZXJ9IGlkX3JcbiogQHBhcmFtIHtudW1iZXJ9IGlkX2dcbiogQHBhcmFtIHtudW1iZXJ9IGlkX2JcbiovXG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgaWRfciwgaWRfZywgaWRfYikge1xuICAgIF9hc3NlcnROdW0oeCk7XG4gICAgX2Fzc2VydE51bSh5KTtcbiAgICBfYXNzZXJ0TnVtKHdpZHRoKTtcbiAgICBfYXNzZXJ0TnVtKGhlaWdodCk7XG4gICAgX2Fzc2VydE51bShjb2xvcik7XG4gICAgX2Fzc2VydE51bShpZF9yKTtcbiAgICBfYXNzZXJ0TnVtKGlkX2cpO1xuICAgIF9hc3NlcnROdW0oaWRfYik7XG4gICAgd2FzbS5maWxsUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBpZF9yLCBpZF9nLCBpZF9iKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7RmxvYXQzMkFycmF5fSBwb2ludHNcbiogQHBhcmFtIHtudW1iZXJ9IGNvbG9yXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9yXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9nXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9iXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbGxQb2x5TGluZShwb2ludHMsIGNvbG9yLCBpZF9yLCBpZF9nLCBpZF9iKSB7XG4gICAgX2Fzc2VydE51bShjb2xvcik7XG4gICAgX2Fzc2VydE51bShpZF9yKTtcbiAgICBfYXNzZXJ0TnVtKGlkX2cpO1xuICAgIF9hc3NlcnROdW0oaWRfYik7XG4gICAgd2FzbS5maWxsUG9seUxpbmUocGFzc0FycmF5RjMyVG9XYXNtKHBvaW50cyksIFdBU01fVkVDVE9SX0xFTiwgY29sb3IsIGlkX3IsIGlkX2csIGlkX2IpO1xufVxuXG4vKipcbiogQHBhcmFtIHtudW1iZXJ9IHhcbiogQHBhcmFtIHtudW1iZXJ9IHlcbiogQHBhcmFtIHtudW1iZXJ9IHJcbiogQHBhcmFtIHtudW1iZXJ9IGNvbG9yXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9yXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9nXG4qIEBwYXJhbSB7bnVtYmVyfSBpZF9iXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbGxDaXJjbGUoeCwgeSwgciwgY29sb3IsIGlkX3IsIGlkX2csIGlkX2IpIHtcbiAgICBfYXNzZXJ0TnVtKHgpO1xuICAgIF9hc3NlcnROdW0oeSk7XG4gICAgX2Fzc2VydE51bShyKTtcbiAgICBfYXNzZXJ0TnVtKGNvbG9yKTtcbiAgICBfYXNzZXJ0TnVtKGlkX3IpO1xuICAgIF9hc3NlcnROdW0oaWRfZyk7XG4gICAgX2Fzc2VydE51bShpZF9iKTtcbiAgICB3YXNtLmZpbGxDaXJjbGUoeCwgeSwgciwgY29sb3IsIGlkX3IsIGlkX2csIGlkX2IpO1xufVxuXG5sZXQgY2FjaGVnZXRJbnQzMk1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRJbnQzMk1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRJbnQzMk1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldEludDMyTWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0SW50MzJNZW1vcnkgPSBuZXcgSW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRJbnQzMk1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlGMzJGcm9tV2FzbShwdHIsIGxlbikge1xuICAgIHJldHVybiBnZXRGbG9hdDMyTWVtb3J5KCkuc3ViYXJyYXkocHRyIC8gNCwgcHRyIC8gNCArIGxlbik7XG59XG4vKipcbiogQHJldHVybnMge0Zsb2F0MzJBcnJheX1cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHJldHB0ciA9IDg7XG4gICAgX2Fzc2VydE51bShyZXRwdHIpO1xuICAgIGNvbnN0IHJldCA9IHdhc20uZ2V0UG9zaXRpb25zKHJldHB0cik7XG4gICAgY29uc3QgbWVtaTMyID0gZ2V0SW50MzJNZW1vcnkoKTtcbiAgICBjb25zdCB2MCA9IGdldEFycmF5RjMyRnJvbVdhc20obWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShtZW1pMzJbcmV0cHRyIC8gNCArIDBdLCBtZW1pMzJbcmV0cHRyIC8gNCArIDFdICogNCk7XG4gICAgcmV0dXJuIHYwO1xufVxuXG4vKipcbiogQHJldHVybnMge0Zsb2F0MzJBcnJheX1cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JzKCkge1xuICAgIGNvbnN0IHJldHB0ciA9IDg7XG4gICAgX2Fzc2VydE51bShyZXRwdHIpO1xuICAgIGNvbnN0IHJldCA9IHdhc20uZ2V0Q29sb3JzKHJldHB0cik7XG4gICAgY29uc3QgbWVtaTMyID0gZ2V0SW50MzJNZW1vcnkoKTtcbiAgICBjb25zdCB2MCA9IGdldEFycmF5RjMyRnJvbVdhc20obWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShtZW1pMzJbcmV0cHRyIC8gNCArIDBdLCBtZW1pMzJbcmV0cHRyIC8gNCArIDFdICogNCk7XG4gICAgcmV0dXJuIHYwO1xufVxuXG4vKipcbiogQHJldHVybnMge0Zsb2F0MzJBcnJheX1cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWQoKSB7XG4gICAgY29uc3QgcmV0cHRyID0gODtcbiAgICBfYXNzZXJ0TnVtKHJldHB0cik7XG4gICAgY29uc3QgcmV0ID0gd2FzbS5nZXRJZChyZXRwdHIpO1xuICAgIGNvbnN0IG1lbWkzMiA9IGdldEludDMyTWVtb3J5KCk7XG4gICAgY29uc3QgdjAgPSBnZXRBcnJheUYzMkZyb21XYXNtKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUobWVtaTMyW3JldHB0ciAvIDQgKyAwXSwgbWVtaTMyW3JldHB0ciAvIDQgKyAxXSAqIDQpO1xuICAgIHJldHVybiB2MDtcbn1cblxubGV0IGNhY2hlZ2V0VWludDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQzMk1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50MzJNZW1vcnkgPSBuZXcgVWludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDMyTWVtb3J5O1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheVUzMkZyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldFVpbnQzMk1lbW9yeSgpLnN1YmFycmF5KHB0ciAvIDQsIHB0ciAvIDQgKyBsZW4pO1xufVxuLyoqXG4qIEByZXR1cm5zIHtVaW50MzJBcnJheX1cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kaWNlcygpIHtcbiAgICBjb25zdCByZXRwdHIgPSA4O1xuICAgIF9hc3NlcnROdW0ocmV0cHRyKTtcbiAgICBjb25zdCByZXQgPSB3YXNtLmdldEluZGljZXMocmV0cHRyKTtcbiAgICBjb25zdCBtZW1pMzIgPSBnZXRJbnQzMk1lbW9yeSgpO1xuICAgIGNvbnN0IHYwID0gZ2V0QXJyYXlVMzJGcm9tV2FzbShtZW1pMzJbcmV0cHRyIC8gNCArIDBdLCBtZW1pMzJbcmV0cHRyIC8gNCArIDFdKS5zbGljZSgpO1xuICAgIHdhc20uX193YmluZGdlbl9mcmVlKG1lbWkzMltyZXRwdHIgLyA0ICsgMF0sIG1lbWkzMltyZXRwdHIgLyA0ICsgMV0gKiA0KTtcbiAgICByZXR1cm4gdjA7XG59XG5cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB3YXNtLnJlc2V0KCk7XG59XG5cbmNvbnN0IGhlYXAgPSBuZXcgQXJyYXkoMzIpO1xuXG5oZWFwLmZpbGwodW5kZWZpbmVkKTtcblxuaGVhcC5wdXNoKHVuZGVmaW5lZCwgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xuXG5mdW5jdGlvbiBnZXRPYmplY3QoaWR4KSB7IHJldHVybiBoZWFwW2lkeF07IH1cblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yKGUpIHtcbiAgICBsZXQgZXJyb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvciA/IGAke2UubWVzc2FnZX1cXG5cXG5TdGFjazpcXG4ke2Uuc3RhY2t9YCA6IGUudG9TdHJpbmcoKTtcbiAgICAgICAgfSBjYXRjaChfKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8ZmFpbGVkIHRvIHN0cmluZ2lmeSB0aHJvd24gdmFsdWU+XCI7XG4gICAgICAgIH1cbiAgICB9KCkpO1xuICAgIGNvbnNvbGUuZXJyb3IoXCJ3YXNtLWJpbmRnZW46IGltcG9ydGVkIEpTIGZ1bmN0aW9uIHRoYXQgd2FzIG5vdCBtYXJrZWQgYXMgYGNhdGNoYCB0aHJldyBhbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHRocm93IGU7XG59XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGlmICh0eXBlb2YoaGVhcF9uZXh0KSAhPT0gJ251bWJlcicpIHRocm93IG5ldyBFcnJvcignY29ycnVwdCBoZWFwJyk7XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbShhcmcpIHtcblxuICAgIGlmICh0eXBlb2YoYXJnKSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYSBzdHJpbmcgYXJndW1lbnQnKTtcblxuICAgIGxldCBsZW4gPSBhcmcubGVuZ3RoO1xuICAgIGxldCBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jKGxlbik7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeSgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgbGVuOyBvZmZzZXQrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXQgIT09IGxlbikge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMpO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIGxlbik7XG4gICAgICAgIGNvbnN0IHJldCA9IGVuY29kZVN0cmluZyhhcmcsIHZpZXcpO1xuICAgICAgICBpZiAocmV0LnJlYWQgIT09IGFyZy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHBhc3Mgd2hvbGUgc3RyaW5nJyk7XG4gICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICB9XG5cbiAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHB0cjtcbn1cblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHRha2VPYmplY3QoYXJnMCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfZXJyb3JfNGJiNmMyYTk3NDA3MTI5YSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCB2MCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoYXJnMCwgYXJnMSAqIDEpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodjApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nRXJyb3IoZSlcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3XzU5Y2I3NGU0MjM3NThlZGUgPSBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXQgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3N0YWNrXzU1OGJhNTkxN2I0NjZlZGQgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzEpLnN0YWNrO1xuICAgICAgICBjb25zdCByZXQwID0gcGFzc1N0cmluZ1RvV2FzbShyZXQpO1xuICAgICAgICBjb25zdCByZXQxID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICBnZXRJbnQzMk1lbW9yeSgpW2FyZzAgLyA0ICsgMF0gPSByZXQwO1xuICAgICAgICBnZXRJbnQzMk1lbW9yeSgpW2FyZzAgLyA0ICsgMV0gPSByZXQxO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nRXJyb3IoZSlcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl90aHJvdyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20oYXJnMCwgYXJnMSkpO1xufTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==