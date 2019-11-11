(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/edit.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/edit.js ***!
  \*****************************************************************************************/
/*! exports provided: removeProperty, setProperty, applyEdit, isWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProperty", function() { return removeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEdit", function() { return applyEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWS", function() { return isWS; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/format.js");
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/parser.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



function removeProperty(text, path, formattingOptions) {
    return setProperty(text, path, void 0, formattingOptions);
}
function setProperty(text, originalPath, value, formattingOptions, getInsertionIndex) {
    var _a;
    var path = originalPath.slice();
    var errors = [];
    var root = Object(_parser_js__WEBPACK_IMPORTED_MODULE_1__["parseTree"])(text, errors);
    var parent = void 0;
    var lastSegment = void 0;
    while (path.length > 0) {
        lastSegment = path.pop();
        parent = Object(_parser_js__WEBPACK_IMPORTED_MODULE_1__["findNodeAtLocation"])(root, path);
        if (parent === void 0 && value !== void 0) {
            if (typeof lastSegment === 'string') {
                value = (_a = {}, _a[lastSegment] = value, _a);
            }
            else {
                value = [value];
            }
        }
        else {
            break;
        }
    }
    if (!parent) {
        // empty document
        if (value === void 0) { // delete
            throw new Error('Can not delete in empty document');
        }
        return withFormatting(text, { offset: root ? root.offset : 0, length: root ? root.length : 0, content: JSON.stringify(value) }, formattingOptions);
    }
    else if (parent.type === 'object' && typeof lastSegment === 'string' && Array.isArray(parent.children)) {
        var existing = Object(_parser_js__WEBPACK_IMPORTED_MODULE_1__["findNodeAtLocation"])(parent, [lastSegment]);
        if (existing !== void 0) {
            if (value === void 0) { // delete
                if (!existing.parent) {
                    throw new Error('Malformed AST');
                }
                var propertyIndex = parent.children.indexOf(existing.parent);
                var removeBegin = void 0;
                var removeEnd = existing.parent.offset + existing.parent.length;
                if (propertyIndex > 0) {
                    // remove the comma of the previous node
                    var previous = parent.children[propertyIndex - 1];
                    removeBegin = previous.offset + previous.length;
                }
                else {
                    removeBegin = parent.offset + 1;
                    if (parent.children.length > 1) {
                        // remove the comma of the next node
                        var next = parent.children[1];
                        removeEnd = next.offset;
                    }
                }
                return withFormatting(text, { offset: removeBegin, length: removeEnd - removeBegin, content: '' }, formattingOptions);
            }
            else {
                // set value of existing property
                return withFormatting(text, { offset: existing.offset, length: existing.length, content: JSON.stringify(value) }, formattingOptions);
            }
        }
        else {
            if (value === void 0) { // delete
                return []; // property does not exist, nothing to do
            }
            var newProperty = JSON.stringify(lastSegment) + ": " + JSON.stringify(value);
            var index = getInsertionIndex ? getInsertionIndex(parent.children.map(function (p) { return p.children[0].value; })) : parent.children.length;
            var edit = void 0;
            if (index > 0) {
                var previous = parent.children[index - 1];
                edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
            }
            else if (parent.children.length === 0) {
                edit = { offset: parent.offset + 1, length: 0, content: newProperty };
            }
            else {
                edit = { offset: parent.offset + 1, length: 0, content: newProperty + ',' };
            }
            return withFormatting(text, edit, formattingOptions);
        }
    }
    else if (parent.type === 'array' && typeof lastSegment === 'number' && Array.isArray(parent.children)) {
        var insertIndex = lastSegment;
        if (insertIndex === -1) {
            // Insert
            var newProperty = "" + JSON.stringify(value);
            var edit = void 0;
            if (parent.children.length === 0) {
                edit = { offset: parent.offset + 1, length: 0, content: newProperty };
            }
            else {
                var previous = parent.children[parent.children.length - 1];
                edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
            }
            return withFormatting(text, edit, formattingOptions);
        }
        else {
            if (value === void 0 && parent.children.length >= 0) {
                //Removal
                var removalIndex = lastSegment;
                var toRemove = parent.children[removalIndex];
                var edit = void 0;
                if (parent.children.length === 1) {
                    // only item
                    edit = { offset: parent.offset + 1, length: parent.length - 2, content: '' };
                }
                else if (parent.children.length - 1 === removalIndex) {
                    // last item
                    var previous = parent.children[removalIndex - 1];
                    var offset = previous.offset + previous.length;
                    var parentEndOffset = parent.offset + parent.length;
                    edit = { offset: offset, length: parentEndOffset - 2 - offset, content: '' };
                }
                else {
                    edit = { offset: toRemove.offset, length: parent.children[removalIndex + 1].offset - toRemove.offset, content: '' };
                }
                return withFormatting(text, edit, formattingOptions);
            }
            else {
                throw new Error('Array modification not supported yet');
            }
        }
    }
    else {
        throw new Error("Can not add " + (typeof lastSegment !== 'number' ? 'index' : 'property') + " to parent of type " + parent.type);
    }
}
function withFormatting(text, edit, formattingOptions) {
    // apply the edit
    var newText = applyEdit(text, edit);
    // format the new text
    var begin = edit.offset;
    var end = edit.offset + edit.content.length;
    if (edit.length === 0 || edit.content.length === 0) { // insert or remove
        while (begin > 0 && !Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["isEOL"])(newText, begin - 1)) {
            begin--;
        }
        while (end < newText.length && !Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["isEOL"])(newText, end)) {
            end++;
        }
    }
    var edits = Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["format"])(newText, { offset: begin, length: end - begin }, formattingOptions);
    // apply the formatting edits and track the begin and end offsets of the changes
    for (var i = edits.length - 1; i >= 0; i--) {
        var edit_1 = edits[i];
        newText = applyEdit(newText, edit_1);
        begin = Math.min(begin, edit_1.offset);
        end = Math.max(end, edit_1.offset + edit_1.length);
        end += edit_1.content.length - edit_1.length;
    }
    // create a single edit with all changes
    var editLength = text.length - (newText.length - end) - begin;
    return [{ offset: begin, length: editLength, content: newText.substring(begin, end) }];
}
function applyEdit(text, edit) {
    return text.substring(0, edit.offset) + edit.content + text.substring(edit.offset + edit.length);
}
function isWS(text, offset) {
    return '\r\n \t'.indexOf(text.charAt(offset)) !== -1;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/format.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/format.js ***!
  \*******************************************************************************************/
/*! exports provided: format, isEOL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEOL", function() { return isEOL; });
/* harmony import */ var _scanner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function format(documentText, range, options) {
    var initialIndentLevel;
    var formatText;
    var formatTextStart;
    var rangeStart;
    var rangeEnd;
    if (range) {
        rangeStart = range.offset;
        rangeEnd = rangeStart + range.length;
        formatTextStart = rangeStart;
        while (formatTextStart > 0 && !isEOL(documentText, formatTextStart - 1)) {
            formatTextStart--;
        }
        var endOffset = rangeEnd;
        while (endOffset < documentText.length && !isEOL(documentText, endOffset)) {
            endOffset++;
        }
        formatText = documentText.substring(formatTextStart, endOffset);
        initialIndentLevel = computeIndentLevel(formatText, options);
    }
    else {
        formatText = documentText;
        initialIndentLevel = 0;
        formatTextStart = 0;
        rangeStart = 0;
        rangeEnd = documentText.length;
    }
    var eol = getEOL(options, documentText);
    var lineBreak = false;
    var indentLevel = 0;
    var indentValue;
    if (options.insertSpaces) {
        indentValue = repeat(' ', options.tabSize || 4);
    }
    else {
        indentValue = '\t';
    }
    var scanner = Object(_scanner_js__WEBPACK_IMPORTED_MODULE_0__["createScanner"])(formatText, false);
    var hasError = false;
    function newLineAndIndent() {
        return eol + repeat(indentValue, initialIndentLevel + indentLevel);
    }
    function scanNext() {
        var token = scanner.scan();
        lineBreak = false;
        while (token === 15 /* Trivia */ || token === 14 /* LineBreakTrivia */) {
            lineBreak = lineBreak || (token === 14 /* LineBreakTrivia */);
            token = scanner.scan();
        }
        hasError = token === 16 /* Unknown */ || scanner.getTokenError() !== 0 /* None */;
        return token;
    }
    var editOperations = [];
    function addEdit(text, startOffset, endOffset) {
        if (!hasError && startOffset < rangeEnd && endOffset > rangeStart && documentText.substring(startOffset, endOffset) !== text) {
            editOperations.push({ offset: startOffset, length: endOffset - startOffset, content: text });
        }
    }
    var firstToken = scanNext();
    if (firstToken !== 17 /* EOF */) {
        var firstTokenStart = scanner.getTokenOffset() + formatTextStart;
        var initialIndent = repeat(indentValue, initialIndentLevel);
        addEdit(initialIndent, formatTextStart, firstTokenStart);
    }
    while (firstToken !== 17 /* EOF */) {
        var firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
        var secondToken = scanNext();
        var replaceContent = '';
        while (!lineBreak && (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */)) {
            // comments on the same line: keep them on the same line, but ignore them otherwise
            var commentTokenStart = scanner.getTokenOffset() + formatTextStart;
            addEdit(' ', firstTokenEnd, commentTokenStart);
            firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
            replaceContent = secondToken === 12 /* LineCommentTrivia */ ? newLineAndIndent() : '';
            secondToken = scanNext();
        }
        if (secondToken === 2 /* CloseBraceToken */) {
            if (firstToken !== 1 /* OpenBraceToken */) {
                indentLevel--;
                replaceContent = newLineAndIndent();
            }
        }
        else if (secondToken === 4 /* CloseBracketToken */) {
            if (firstToken !== 3 /* OpenBracketToken */) {
                indentLevel--;
                replaceContent = newLineAndIndent();
            }
        }
        else {
            switch (firstToken) {
                case 3 /* OpenBracketToken */:
                case 1 /* OpenBraceToken */:
                    indentLevel++;
                    replaceContent = newLineAndIndent();
                    break;
                case 5 /* CommaToken */:
                case 12 /* LineCommentTrivia */:
                    replaceContent = newLineAndIndent();
                    break;
                case 13 /* BlockCommentTrivia */:
                    if (lineBreak) {
                        replaceContent = newLineAndIndent();
                    }
                    else {
                        // symbol following comment on the same line: keep on same line, separate with ' '
                        replaceContent = ' ';
                    }
                    break;
                case 6 /* ColonToken */:
                    replaceContent = ' ';
                    break;
                case 10 /* StringLiteral */:
                    if (secondToken === 6 /* ColonToken */) {
                        replaceContent = '';
                        break;
                    }
                // fall through
                case 7 /* NullKeyword */:
                case 8 /* TrueKeyword */:
                case 9 /* FalseKeyword */:
                case 11 /* NumericLiteral */:
                case 2 /* CloseBraceToken */:
                case 4 /* CloseBracketToken */:
                    if (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */) {
                        replaceContent = ' ';
                    }
                    else if (secondToken !== 5 /* CommaToken */ && secondToken !== 17 /* EOF */) {
                        hasError = true;
                    }
                    break;
                case 16 /* Unknown */:
                    hasError = true;
                    break;
            }
            if (lineBreak && (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */)) {
                replaceContent = newLineAndIndent();
            }
        }
        var secondTokenStart = scanner.getTokenOffset() + formatTextStart;
        addEdit(replaceContent, firstTokenEnd, secondTokenStart);
        firstToken = secondToken;
    }
    return editOperations;
}
function repeat(s, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += s;
    }
    return result;
}
function computeIndentLevel(content, options) {
    var i = 0;
    var nChars = 0;
    var tabSize = options.tabSize || 4;
    while (i < content.length) {
        var ch = content.charAt(i);
        if (ch === ' ') {
            nChars++;
        }
        else if (ch === '\t') {
            nChars += tabSize;
        }
        else {
            break;
        }
        i++;
    }
    return Math.floor(nChars / tabSize);
}
function getEOL(options, text) {
    for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);
        if (ch === '\r') {
            if (i + 1 < text.length && text.charAt(i + 1) === '\n') {
                return '\r\n';
            }
            return '\r';
        }
        else if (ch === '\n') {
            return '\n';
        }
    }
    return (options && options.eol) || '\n';
}
function isEOL(text, offset) {
    return '\r\n'.indexOf(text.charAt(offset)) !== -1;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/parser.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/parser.js ***!
  \*******************************************************************************************/
/*! exports provided: getLocation, parse, parseTree, findNodeAtLocation, getNodePath, getNodeValue, contains, findNodeAtOffset, visit, stripComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTree", function() { return parseTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtLocation", function() { return findNodeAtLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodePath", function() { return getNodePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeValue", function() { return getNodeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtOffset", function() { return findNodeAtOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripComments", function() { return stripComments; });
/* harmony import */ var _scanner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var ParseOptions;
(function (ParseOptions) {
    ParseOptions.DEFAULT = {
        allowTrailingComma: false
    };
})(ParseOptions || (ParseOptions = {}));
/**
 * For a given offset, evaluate the location in the JSON document. Each segment in the location path is either a property name or an array index.
 */
function getLocation(text, position) {
    var segments = []; // strings or numbers
    var earlyReturnException = new Object();
    var previousNode = void 0;
    var previousNodeInst = {
        value: {},
        offset: 0,
        length: 0,
        type: 'object',
        parent: void 0
    };
    var isAtPropertyKey = false;
    function setPreviousNode(value, offset, length, type) {
        previousNodeInst.value = value;
        previousNodeInst.offset = offset;
        previousNodeInst.length = length;
        previousNodeInst.type = type;
        previousNodeInst.colonOffset = void 0;
        previousNode = previousNodeInst;
    }
    try {
        visit(text, {
            onObjectBegin: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = void 0;
                isAtPropertyKey = position > offset;
                segments.push(''); // push a placeholder (will be replaced)
            },
            onObjectProperty: function (name, offset, length) {
                if (position < offset) {
                    throw earlyReturnException;
                }
                setPreviousNode(name, offset, length, 'property');
                segments[segments.length - 1] = name;
                if (position <= offset + length) {
                    throw earlyReturnException;
                }
            },
            onObjectEnd: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = void 0;
                segments.pop();
            },
            onArrayBegin: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = void 0;
                segments.push(0);
            },
            onArrayEnd: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = void 0;
                segments.pop();
            },
            onLiteralValue: function (value, offset, length) {
                if (position < offset) {
                    throw earlyReturnException;
                }
                setPreviousNode(value, offset, length, getLiteralNodeType(value));
                if (position <= offset + length) {
                    throw earlyReturnException;
                }
            },
            onSeparator: function (sep, offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                if (sep === ':' && previousNode && previousNode.type === 'property') {
                    previousNode.colonOffset = offset;
                    isAtPropertyKey = false;
                    previousNode = void 0;
                }
                else if (sep === ',') {
                    var last = segments[segments.length - 1];
                    if (typeof last === 'number') {
                        segments[segments.length - 1] = last + 1;
                    }
                    else {
                        isAtPropertyKey = true;
                        segments[segments.length - 1] = '';
                    }
                    previousNode = void 0;
                }
            }
        });
    }
    catch (e) {
        if (e !== earlyReturnException) {
            throw e;
        }
    }
    return {
        path: segments,
        previousNode: previousNode,
        isAtPropertyKey: isAtPropertyKey,
        matches: function (pattern) {
            var k = 0;
            for (var i = 0; k < pattern.length && i < segments.length; i++) {
                if (pattern[k] === segments[i] || pattern[k] === '*') {
                    k++;
                }
                else if (pattern[k] !== '**') {
                    return false;
                }
            }
            return k === pattern.length;
        }
    };
}
/**
 * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 * Therefore always check the errors list to find out if the input was valid.
 */
function parse(text, errors, options) {
    if (errors === void 0) { errors = []; }
    if (options === void 0) { options = ParseOptions.DEFAULT; }
    var currentProperty = null;
    var currentParent = [];
    var previousParents = [];
    function onValue(value) {
        if (Array.isArray(currentParent)) {
            currentParent.push(value);
        }
        else if (currentProperty) {
            currentParent[currentProperty] = value;
        }
    }
    var visitor = {
        onObjectBegin: function () {
            var object = {};
            onValue(object);
            previousParents.push(currentParent);
            currentParent = object;
            currentProperty = null;
        },
        onObjectProperty: function (name) {
            currentProperty = name;
        },
        onObjectEnd: function () {
            currentParent = previousParents.pop();
        },
        onArrayBegin: function () {
            var array = [];
            onValue(array);
            previousParents.push(currentParent);
            currentParent = array;
            currentProperty = null;
        },
        onArrayEnd: function () {
            currentParent = previousParents.pop();
        },
        onLiteralValue: onValue,
        onError: function (error, offset, length) {
            errors.push({ error: error, offset: offset, length: length });
        }
    };
    visit(text, visitor, options);
    return currentParent[0];
}
/**
 * Parses the given text and returns a tree representation the JSON content. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 */
function parseTree(text, errors, options) {
    if (errors === void 0) { errors = []; }
    if (options === void 0) { options = ParseOptions.DEFAULT; }
    var currentParent = { type: 'array', offset: -1, length: -1, children: [], parent: void 0 }; // artificial root
    function ensurePropertyComplete(endOffset) {
        if (currentParent.type === 'property') {
            currentParent.length = endOffset - currentParent.offset;
            currentParent = currentParent.parent;
        }
    }
    function onValue(valueNode) {
        currentParent.children.push(valueNode);
        return valueNode;
    }
    var visitor = {
        onObjectBegin: function (offset) {
            currentParent = onValue({ type: 'object', offset: offset, length: -1, parent: currentParent, children: [] });
        },
        onObjectProperty: function (name, offset, length) {
            currentParent = onValue({ type: 'property', offset: offset, length: -1, parent: currentParent, children: [] });
            currentParent.children.push({ type: 'string', value: name, offset: offset, length: length, parent: currentParent });
        },
        onObjectEnd: function (offset, length) {
            currentParent.length = offset + length - currentParent.offset;
            currentParent = currentParent.parent;
            ensurePropertyComplete(offset + length);
        },
        onArrayBegin: function (offset, length) {
            currentParent = onValue({ type: 'array', offset: offset, length: -1, parent: currentParent, children: [] });
        },
        onArrayEnd: function (offset, length) {
            currentParent.length = offset + length - currentParent.offset;
            currentParent = currentParent.parent;
            ensurePropertyComplete(offset + length);
        },
        onLiteralValue: function (value, offset, length) {
            onValue({ type: getLiteralNodeType(value), offset: offset, length: length, parent: currentParent, value: value });
            ensurePropertyComplete(offset + length);
        },
        onSeparator: function (sep, offset, length) {
            if (currentParent.type === 'property') {
                if (sep === ':') {
                    currentParent.colonOffset = offset;
                }
                else if (sep === ',') {
                    ensurePropertyComplete(offset);
                }
            }
        },
        onError: function (error, offset, length) {
            errors.push({ error: error, offset: offset, length: length });
        }
    };
    visit(text, visitor, options);
    var result = currentParent.children[0];
    if (result) {
        delete result.parent;
    }
    return result;
}
/**
 * Finds the node at the given path in a JSON DOM.
 */
function findNodeAtLocation(root, path) {
    if (!root) {
        return void 0;
    }
    var node = root;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var segment = path_1[_i];
        if (typeof segment === 'string') {
            if (node.type !== 'object' || !Array.isArray(node.children)) {
                return void 0;
            }
            var found = false;
            for (var _a = 0, _b = node.children; _a < _b.length; _a++) {
                var propertyNode = _b[_a];
                if (Array.isArray(propertyNode.children) && propertyNode.children[0].value === segment) {
                    node = propertyNode.children[1];
                    found = true;
                    break;
                }
            }
            if (!found) {
                return void 0;
            }
        }
        else {
            var index = segment;
            if (node.type !== 'array' || index < 0 || !Array.isArray(node.children) || index >= node.children.length) {
                return void 0;
            }
            node = node.children[index];
        }
    }
    return node;
}
/**
 * Gets the JSON path of the given JSON DOM node
 */
function getNodePath(node) {
    if (!node.parent || !node.parent.children) {
        return [];
    }
    var path = getNodePath(node.parent);
    if (node.parent.type === 'property') {
        var key = node.parent.children[0].value;
        path.push(key);
    }
    else if (node.parent.type === 'array') {
        var index = node.parent.children.indexOf(node);
        if (index !== -1) {
            path.push(index);
        }
    }
    return path;
}
/**
 * Evaluates the JavaScript object of the given JSON DOM node
 */
function getNodeValue(node) {
    switch (node.type) {
        case 'array':
            return node.children.map(getNodeValue);
        case 'object':
            var obj = Object.create(null);
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var prop = _a[_i];
                var valueNode = prop.children[1];
                if (valueNode) {
                    obj[prop.children[0].value] = getNodeValue(valueNode);
                }
            }
            return obj;
        case 'null':
        case 'string':
        case 'number':
        case 'boolean':
            return node.value;
        default:
            return void 0;
    }
}
function contains(node, offset, includeRightBound) {
    if (includeRightBound === void 0) { includeRightBound = false; }
    return (offset >= node.offset && offset < (node.offset + node.length)) || includeRightBound && (offset === (node.offset + node.length));
}
/**
 * Finds the most inner node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
 */
function findNodeAtOffset(node, offset, includeRightBound) {
    if (includeRightBound === void 0) { includeRightBound = false; }
    if (contains(node, offset, includeRightBound)) {
        var children = node.children;
        if (Array.isArray(children)) {
            for (var i = 0; i < children.length && children[i].offset <= offset; i++) {
                var item = findNodeAtOffset(children[i], offset, includeRightBound);
                if (item) {
                    return item;
                }
            }
        }
        return node;
    }
    return void 0;
}
/**
 * Parses the given text and invokes the visitor functions for each object, array and literal reached.
 */
function visit(text, visitor, options) {
    if (options === void 0) { options = ParseOptions.DEFAULT; }
    var _scanner = Object(_scanner_js__WEBPACK_IMPORTED_MODULE_0__["createScanner"])(text, false);
    function toNoArgVisit(visitFunction) {
        return visitFunction ? function () { return visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()); } : function () { return true; };
    }
    function toOneArgVisit(visitFunction) {
        return visitFunction ? function (arg) { return visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()); } : function () { return true; };
    }
    var onObjectBegin = toNoArgVisit(visitor.onObjectBegin), onObjectProperty = toOneArgVisit(visitor.onObjectProperty), onObjectEnd = toNoArgVisit(visitor.onObjectEnd), onArrayBegin = toNoArgVisit(visitor.onArrayBegin), onArrayEnd = toNoArgVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisit(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onComment = toNoArgVisit(visitor.onComment), onError = toOneArgVisit(visitor.onError);
    var disallowComments = options && options.disallowComments;
    var allowTrailingComma = options && options.allowTrailingComma;
    function scanNext() {
        while (true) {
            var token = _scanner.scan();
            switch (_scanner.getTokenError()) {
                case 4 /* InvalidUnicode */:
                    handleError(14 /* InvalidUnicode */);
                    break;
                case 5 /* InvalidEscapeCharacter */:
                    handleError(15 /* InvalidEscapeCharacter */);
                    break;
                case 3 /* UnexpectedEndOfNumber */:
                    handleError(13 /* UnexpectedEndOfNumber */);
                    break;
                case 1 /* UnexpectedEndOfComment */:
                    if (!disallowComments) {
                        handleError(11 /* UnexpectedEndOfComment */);
                    }
                    break;
                case 2 /* UnexpectedEndOfString */:
                    handleError(12 /* UnexpectedEndOfString */);
                    break;
                case 6 /* InvalidCharacter */:
                    handleError(16 /* InvalidCharacter */);
                    break;
            }
            switch (token) {
                case 12 /* LineCommentTrivia */:
                case 13 /* BlockCommentTrivia */:
                    if (disallowComments) {
                        handleError(10 /* InvalidCommentToken */);
                    }
                    else {
                        onComment();
                    }
                    break;
                case 16 /* Unknown */:
                    handleError(1 /* InvalidSymbol */);
                    break;
                case 15 /* Trivia */:
                case 14 /* LineBreakTrivia */:
                    break;
                default:
                    return token;
            }
        }
    }
    function handleError(error, skipUntilAfter, skipUntil) {
        if (skipUntilAfter === void 0) { skipUntilAfter = []; }
        if (skipUntil === void 0) { skipUntil = []; }
        onError(error);
        if (skipUntilAfter.length + skipUntil.length > 0) {
            var token = _scanner.getToken();
            while (token !== 17 /* EOF */) {
                if (skipUntilAfter.indexOf(token) !== -1) {
                    scanNext();
                    break;
                }
                else if (skipUntil.indexOf(token) !== -1) {
                    break;
                }
                token = scanNext();
            }
        }
    }
    function parseString(isValue) {
        var value = _scanner.getTokenValue();
        if (isValue) {
            onLiteralValue(value);
        }
        else {
            onObjectProperty(value);
        }
        scanNext();
        return true;
    }
    function parseLiteral() {
        switch (_scanner.getToken()) {
            case 11 /* NumericLiteral */:
                var value = 0;
                try {
                    value = JSON.parse(_scanner.getTokenValue());
                    if (typeof value !== 'number') {
                        handleError(2 /* InvalidNumberFormat */);
                        value = 0;
                    }
                }
                catch (e) {
                    handleError(2 /* InvalidNumberFormat */);
                }
                onLiteralValue(value);
                break;
            case 7 /* NullKeyword */:
                onLiteralValue(null);
                break;
            case 8 /* TrueKeyword */:
                onLiteralValue(true);
                break;
            case 9 /* FalseKeyword */:
                onLiteralValue(false);
                break;
            default:
                return false;
        }
        scanNext();
        return true;
    }
    function parseProperty() {
        if (_scanner.getToken() !== 10 /* StringLiteral */) {
            handleError(3 /* PropertyNameExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            return false;
        }
        parseString(false);
        if (_scanner.getToken() === 6 /* ColonToken */) {
            onSeparator(':');
            scanNext(); // consume colon
            if (!parseValue()) {
                handleError(4 /* ValueExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            }
        }
        else {
            handleError(5 /* ColonExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
        }
        return true;
    }
    function parseObject() {
        onObjectBegin();
        scanNext(); // consume open brace
        var needsComma = false;
        while (_scanner.getToken() !== 2 /* CloseBraceToken */ && _scanner.getToken() !== 17 /* EOF */) {
            if (_scanner.getToken() === 5 /* CommaToken */) {
                if (!needsComma) {
                    handleError(4 /* ValueExpected */, [], []);
                }
                onSeparator(',');
                scanNext(); // consume comma
                if (_scanner.getToken() === 2 /* CloseBraceToken */ && allowTrailingComma) {
                    break;
                }
            }
            else if (needsComma) {
                handleError(6 /* CommaExpected */, [], []);
            }
            if (!parseProperty()) {
                handleError(4 /* ValueExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            }
            needsComma = true;
        }
        onObjectEnd();
        if (_scanner.getToken() !== 2 /* CloseBraceToken */) {
            handleError(7 /* CloseBraceExpected */, [2 /* CloseBraceToken */], []);
        }
        else {
            scanNext(); // consume close brace
        }
        return true;
    }
    function parseArray() {
        onArrayBegin();
        scanNext(); // consume open bracket
        var needsComma = false;
        while (_scanner.getToken() !== 4 /* CloseBracketToken */ && _scanner.getToken() !== 17 /* EOF */) {
            if (_scanner.getToken() === 5 /* CommaToken */) {
                if (!needsComma) {
                    handleError(4 /* ValueExpected */, [], []);
                }
                onSeparator(',');
                scanNext(); // consume comma
                if (_scanner.getToken() === 4 /* CloseBracketToken */ && allowTrailingComma) {
                    break;
                }
            }
            else if (needsComma) {
                handleError(6 /* CommaExpected */, [], []);
            }
            if (!parseValue()) {
                handleError(4 /* ValueExpected */, [], [4 /* CloseBracketToken */, 5 /* CommaToken */]);
            }
            needsComma = true;
        }
        onArrayEnd();
        if (_scanner.getToken() !== 4 /* CloseBracketToken */) {
            handleError(8 /* CloseBracketExpected */, [4 /* CloseBracketToken */], []);
        }
        else {
            scanNext(); // consume close bracket
        }
        return true;
    }
    function parseValue() {
        switch (_scanner.getToken()) {
            case 3 /* OpenBracketToken */:
                return parseArray();
            case 1 /* OpenBraceToken */:
                return parseObject();
            case 10 /* StringLiteral */:
                return parseString(true);
            default:
                return parseLiteral();
        }
    }
    scanNext();
    if (_scanner.getToken() === 17 /* EOF */) {
        return true;
    }
    if (!parseValue()) {
        handleError(4 /* ValueExpected */, [], []);
        return false;
    }
    if (_scanner.getToken() !== 17 /* EOF */) {
        handleError(9 /* EndOfFileExpected */, [], []);
    }
    return true;
}
/**
 * Takes JSON with JavaScript-style comments and remove
 * them. Optionally replaces every none-newline character
 * of comments with a replaceCharacter
 */
function stripComments(text, replaceCh) {
    var _scanner = Object(_scanner_js__WEBPACK_IMPORTED_MODULE_0__["createScanner"])(text), parts = [], kind, offset = 0, pos;
    do {
        pos = _scanner.getPosition();
        kind = _scanner.scan();
        switch (kind) {
            case 12 /* LineCommentTrivia */:
            case 13 /* BlockCommentTrivia */:
            case 17 /* EOF */:
                if (offset !== pos) {
                    parts.push(text.substring(offset, pos));
                }
                if (replaceCh !== void 0) {
                    parts.push(_scanner.getTokenValue().replace(/[^\r\n]/g, replaceCh));
                }
                offset = _scanner.getPosition();
                break;
        }
    } while (kind !== 17 /* EOF */);
    return parts.join('');
}
function getLiteralNodeType(value) {
    switch (typeof value) {
        case 'boolean': return 'boolean';
        case 'number': return 'number';
        case 'string': return 'string';
        default: return 'null';
    }
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner.js ***!
  \********************************************************************************************/
/*! exports provided: createScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScanner", function() { return createScanner; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Creates a JSON scanner on the given text.
 * If ignoreTrivia is set, whitespaces or comments are ignored.
 */
function createScanner(text, ignoreTrivia) {
    if (ignoreTrivia === void 0) { ignoreTrivia = false; }
    var pos = 0, len = text.length, value = '', tokenOffset = 0, token = 16 /* Unknown */, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0 /* None */;
    function scanHexDigits(count, exact) {
        var digits = 0;
        var value = 0;
        while (digits < count || !exact) {
            var ch = text.charCodeAt(pos);
            if (ch >= 48 /* _0 */ && ch <= 57 /* _9 */) {
                value = value * 16 + ch - 48 /* _0 */;
            }
            else if (ch >= 65 /* A */ && ch <= 70 /* F */) {
                value = value * 16 + ch - 65 /* A */ + 10;
            }
            else if (ch >= 97 /* a */ && ch <= 102 /* f */) {
                value = value * 16 + ch - 97 /* a */ + 10;
            }
            else {
                break;
            }
            pos++;
            digits++;
        }
        if (digits < count) {
            value = -1;
        }
        return value;
    }
    function setPosition(newPosition) {
        pos = newPosition;
        value = '';
        tokenOffset = 0;
        token = 16 /* Unknown */;
        scanError = 0 /* None */;
    }
    function scanNumber() {
        var start = pos;
        if (text.charCodeAt(pos) === 48 /* _0 */) {
            pos++;
        }
        else {
            pos++;
            while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                pos++;
            }
        }
        if (pos < text.length && text.charCodeAt(pos) === 46 /* dot */) {
            pos++;
            if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                pos++;
                while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                }
            }
            else {
                scanError = 3 /* UnexpectedEndOfNumber */;
                return text.substring(start, pos);
            }
        }
        var end = pos;
        if (pos < text.length && (text.charCodeAt(pos) === 69 /* E */ || text.charCodeAt(pos) === 101 /* e */)) {
            pos++;
            if (pos < text.length && text.charCodeAt(pos) === 43 /* plus */ || text.charCodeAt(pos) === 45 /* minus */) {
                pos++;
            }
            if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                pos++;
                while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                }
                end = pos;
            }
            else {
                scanError = 3 /* UnexpectedEndOfNumber */;
            }
        }
        return text.substring(start, end);
    }
    function scanString() {
        var result = '', start = pos;
        while (true) {
            if (pos >= len) {
                result += text.substring(start, pos);
                scanError = 2 /* UnexpectedEndOfString */;
                break;
            }
            var ch = text.charCodeAt(pos);
            if (ch === 34 /* doubleQuote */) {
                result += text.substring(start, pos);
                pos++;
                break;
            }
            if (ch === 92 /* backslash */) {
                result += text.substring(start, pos);
                pos++;
                if (pos >= len) {
                    scanError = 2 /* UnexpectedEndOfString */;
                    break;
                }
                ch = text.charCodeAt(pos++);
                switch (ch) {
                    case 34 /* doubleQuote */:
                        result += '\"';
                        break;
                    case 92 /* backslash */:
                        result += '\\';
                        break;
                    case 47 /* slash */:
                        result += '/';
                        break;
                    case 98 /* b */:
                        result += '\b';
                        break;
                    case 102 /* f */:
                        result += '\f';
                        break;
                    case 110 /* n */:
                        result += '\n';
                        break;
                    case 114 /* r */:
                        result += '\r';
                        break;
                    case 116 /* t */:
                        result += '\t';
                        break;
                    case 117 /* u */:
                        var ch_1 = scanHexDigits(4, true);
                        if (ch_1 >= 0) {
                            result += String.fromCharCode(ch_1);
                        }
                        else {
                            scanError = 4 /* InvalidUnicode */;
                        }
                        break;
                    default:
                        scanError = 5 /* InvalidEscapeCharacter */;
                }
                start = pos;
                continue;
            }
            if (ch >= 0 && ch <= 0x1f) {
                if (isLineBreak(ch)) {
                    result += text.substring(start, pos);
                    scanError = 2 /* UnexpectedEndOfString */;
                    break;
                }
                else {
                    scanError = 6 /* InvalidCharacter */;
                    // mark as error but continue with string
                }
            }
            pos++;
        }
        return result;
    }
    function scanNext() {
        value = '';
        scanError = 0 /* None */;
        tokenOffset = pos;
        lineStartOffset = lineNumber;
        prevTokenLineStartOffset = tokenLineStartOffset;
        if (pos >= len) {
            // at the end
            tokenOffset = len;
            return token = 17 /* EOF */;
        }
        var code = text.charCodeAt(pos);
        // trivia: whitespace
        if (isWhiteSpace(code)) {
            do {
                pos++;
                value += String.fromCharCode(code);
                code = text.charCodeAt(pos);
            } while (isWhiteSpace(code));
            return token = 15 /* Trivia */;
        }
        // trivia: newlines
        if (isLineBreak(code)) {
            pos++;
            value += String.fromCharCode(code);
            if (code === 13 /* carriageReturn */ && text.charCodeAt(pos) === 10 /* lineFeed */) {
                pos++;
                value += '\n';
            }
            lineNumber++;
            tokenLineStartOffset = pos;
            return token = 14 /* LineBreakTrivia */;
        }
        switch (code) {
            // tokens: []{}:,
            case 123 /* openBrace */:
                pos++;
                return token = 1 /* OpenBraceToken */;
            case 125 /* closeBrace */:
                pos++;
                return token = 2 /* CloseBraceToken */;
            case 91 /* openBracket */:
                pos++;
                return token = 3 /* OpenBracketToken */;
            case 93 /* closeBracket */:
                pos++;
                return token = 4 /* CloseBracketToken */;
            case 58 /* colon */:
                pos++;
                return token = 6 /* ColonToken */;
            case 44 /* comma */:
                pos++;
                return token = 5 /* CommaToken */;
            // strings
            case 34 /* doubleQuote */:
                pos++;
                value = scanString();
                return token = 10 /* StringLiteral */;
            // comments
            case 47 /* slash */:
                var start = pos - 1;
                // Single-line comment
                if (text.charCodeAt(pos + 1) === 47 /* slash */) {
                    pos += 2;
                    while (pos < len) {
                        if (isLineBreak(text.charCodeAt(pos))) {
                            break;
                        }
                        pos++;
                    }
                    value = text.substring(start, pos);
                    return token = 12 /* LineCommentTrivia */;
                }
                // Multi-line comment
                if (text.charCodeAt(pos + 1) === 42 /* asterisk */) {
                    pos += 2;
                    var safeLength = len - 1; // For lookahead.
                    var commentClosed = false;
                    while (pos < safeLength) {
                        var ch = text.charCodeAt(pos);
                        if (ch === 42 /* asterisk */ && text.charCodeAt(pos + 1) === 47 /* slash */) {
                            pos += 2;
                            commentClosed = true;
                            break;
                        }
                        pos++;
                        if (isLineBreak(ch)) {
                            if (ch === 13 /* carriageReturn */ && text.charCodeAt(pos) === 10 /* lineFeed */) {
                                pos++;
                            }
                            lineNumber++;
                            tokenLineStartOffset = pos;
                        }
                    }
                    if (!commentClosed) {
                        pos++;
                        scanError = 1 /* UnexpectedEndOfComment */;
                    }
                    value = text.substring(start, pos);
                    return token = 13 /* BlockCommentTrivia */;
                }
                // just a single slash
                value += String.fromCharCode(code);
                pos++;
                return token = 16 /* Unknown */;
            // numbers
            case 45 /* minus */:
                value += String.fromCharCode(code);
                pos++;
                if (pos === len || !isDigit(text.charCodeAt(pos))) {
                    return token = 16 /* Unknown */;
                }
            // found a minus, followed by a number so
            // we fall through to proceed with scanning
            // numbers
            case 48 /* _0 */:
            case 49 /* _1 */:
            case 50 /* _2 */:
            case 51 /* _3 */:
            case 52 /* _4 */:
            case 53 /* _5 */:
            case 54 /* _6 */:
            case 55 /* _7 */:
            case 56 /* _8 */:
            case 57 /* _9 */:
                value += scanNumber();
                return token = 11 /* NumericLiteral */;
            // literals and unknown symbols
            default:
                // is a literal? Read the full word.
                while (pos < len && isUnknownContentCharacter(code)) {
                    pos++;
                    code = text.charCodeAt(pos);
                }
                if (tokenOffset !== pos) {
                    value = text.substring(tokenOffset, pos);
                    // keywords: true, false, null
                    switch (value) {
                        case 'true': return token = 8 /* TrueKeyword */;
                        case 'false': return token = 9 /* FalseKeyword */;
                        case 'null': return token = 7 /* NullKeyword */;
                    }
                    return token = 16 /* Unknown */;
                }
                // some
                value += String.fromCharCode(code);
                pos++;
                return token = 16 /* Unknown */;
        }
    }
    function isUnknownContentCharacter(code) {
        if (isWhiteSpace(code) || isLineBreak(code)) {
            return false;
        }
        switch (code) {
            case 125 /* closeBrace */:
            case 93 /* closeBracket */:
            case 123 /* openBrace */:
            case 91 /* openBracket */:
            case 34 /* doubleQuote */:
            case 58 /* colon */:
            case 44 /* comma */:
            case 47 /* slash */:
                return false;
        }
        return true;
    }
    function scanNextNonTrivia() {
        var result;
        do {
            result = scanNext();
        } while (result >= 12 /* LineCommentTrivia */ && result <= 15 /* Trivia */);
        return result;
    }
    return {
        setPosition: setPosition,
        getPosition: function () { return pos; },
        scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
        getToken: function () { return token; },
        getTokenValue: function () { return value; },
        getTokenOffset: function () { return tokenOffset; },
        getTokenLength: function () { return pos - tokenOffset; },
        getTokenStartLine: function () { return lineStartOffset; },
        getTokenStartCharacter: function () { return tokenOffset - prevTokenLineStartOffset; },
        getTokenError: function () { return scanError; },
    };
}
function isWhiteSpace(ch) {
    return ch === 32 /* space */ || ch === 9 /* tab */ || ch === 11 /* verticalTab */ || ch === 12 /* formFeed */ ||
        ch === 160 /* nonBreakingSpace */ || ch === 5760 /* ogham */ || ch >= 8192 /* enQuad */ && ch <= 8203 /* zeroWidthSpace */ ||
        ch === 8239 /* narrowNoBreakSpace */ || ch === 8287 /* mathematicalSpace */ || ch === 12288 /* ideographicSpace */ || ch === 65279 /* byteOrderMark */;
}
function isLineBreak(ch) {
    return ch === 10 /* lineFeed */ || ch === 13 /* carriageReturn */ || ch === 8232 /* lineSeparator */ || ch === 8233 /* paragraphSeparator */;
}
function isDigit(ch) {
    return ch >= 48 /* _0 */ && ch <= 57 /* _9 */;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/main.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/main.js ***!
  \************************************************************************************/
/*! exports provided: createScanner, getLocation, parse, parseTree, findNodeAtLocation, findNodeAtOffset, getNodePath, getNodeValue, visit, stripComments, printParseErrorCode, format, modify, applyEdits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScanner", function() { return createScanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTree", function() { return parseTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtLocation", function() { return findNodeAtLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtOffset", function() { return findNodeAtOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodePath", function() { return getNodePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeValue", function() { return getNodeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripComments", function() { return stripComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printParseErrorCode", function() { return printParseErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modify", function() { return modify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEdits", function() { return applyEdits; });
/* harmony import */ var _impl_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impl/format.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/format.js");
/* harmony import */ var _impl_edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impl/edit.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/edit.js");
/* harmony import */ var _impl_scanner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/scanner.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner.js");
/* harmony import */ var _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/parser.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/parser.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





/**
 * Creates a JSON scanner on the given text.
 * If ignoreTrivia is set, whitespaces or comments are ignored.
 */
var createScanner = _impl_scanner_js__WEBPACK_IMPORTED_MODULE_2__["createScanner"];
/**
 * For a given offset, evaluate the location in the JSON document. Each segment in the location path is either a property name or an array index.
 */
var getLocation = _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__["getLocation"];
/**
 * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 * Therefore, always check the errors list to find out if the input was valid.
 */
var parse = _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__["parse"];
/**
 * Parses the given text and returns a tree representation the JSON content. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 */
var parseTree = _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__["parseTree"];
/**
 * Finds the node at the given path in a JSON DOM.
 */
var findNodeAtLocation = _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__["findNodeAtLocation"];
/**
 * Finds the innermost node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
 */
var findNodeAtOffset = _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__["findNodeAtOffset"];
/**
 * Gets the JSON path of the given JSON DOM node
 */
var getNodePath = _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__["getNodePath"];
/**
 * Evaluates the JavaScript object of the given JSON DOM node
 */
var getNodeValue = _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__["getNodeValue"];
/**
 * Parses the given text and invokes the visitor functions for each object, array and literal reached.
 */
var visit = _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__["visit"];
/**
 * Takes JSON with JavaScript-style comments and remove
 * them. Optionally replaces every none-newline character
 * of comments with a replaceCharacter
 */
var stripComments = _impl_parser_js__WEBPACK_IMPORTED_MODULE_3__["stripComments"];
function printParseErrorCode(code) {
    switch (code) {
        case 1 /* InvalidSymbol */: return 'InvalidSymbol';
        case 2 /* InvalidNumberFormat */: return 'InvalidNumberFormat';
        case 3 /* PropertyNameExpected */: return 'PropertyNameExpected';
        case 4 /* ValueExpected */: return 'ValueExpected';
        case 5 /* ColonExpected */: return 'ColonExpected';
        case 6 /* CommaExpected */: return 'CommaExpected';
        case 7 /* CloseBraceExpected */: return 'CloseBraceExpected';
        case 8 /* CloseBracketExpected */: return 'CloseBracketExpected';
        case 9 /* EndOfFileExpected */: return 'EndOfFileExpected';
        case 10 /* InvalidCommentToken */: return 'InvalidCommentToken';
        case 11 /* UnexpectedEndOfComment */: return 'UnexpectedEndOfComment';
        case 12 /* UnexpectedEndOfString */: return 'UnexpectedEndOfString';
        case 13 /* UnexpectedEndOfNumber */: return 'UnexpectedEndOfNumber';
        case 14 /* InvalidUnicode */: return 'InvalidUnicode';
        case 15 /* InvalidEscapeCharacter */: return 'InvalidEscapeCharacter';
        case 16 /* InvalidCharacter */: return 'InvalidCharacter';
    }
    return '<unknown ParseErrorCode>';
}
/**
 * Computes the edits needed to format a JSON document.
 *
 * @param documentText The input text
 * @param range The range to format or `undefined` to format the full content
 * @param options The formatting options
 * @returns A list of edit operations describing the formatting changes to the original document. Edits can be either inserts, replacements or
 * removals of text segments. All offsets refer to the original state of the document. No two edits must change or remove the same range of
 * text in the original document. However, multiple edits can have
 * the same offset, for example multiple inserts, or an insert followed by a remove or replace. The order in the array defines which edit is applied first.
 * To apply edits to an input, you can use `applyEdits`.
 */
function format(documentText, range, options) {
    return _impl_format_js__WEBPACK_IMPORTED_MODULE_0__["format"](documentText, range, options);
}
/**
 * Computes the edits needed to modify a value in the JSON document.
 *
 * @param documentText The input text
 * @param path The path of the value to change. The path represents either to the document root, a property or an array item.
 * If the path points to an non-existing property or item, it will be created.
 * @param value The new value for the specified property or item. If the value is undefined,
 * the property or item will be removed.
 * @param options Options
 * @returns A list of edit operations describing the formatting changes to the original document. Edits can be either inserts, replacements or
 * removals of text segments. All offsets refer to the original state of the document. No two edits must change or remove the same range of
 * text in the original document. However, multiple edits can have
 * the same offset, for example multiple inserts, or an insert followed by a remove or replace. The order in the array defines which edit is applied first.
 * To apply edits to an input, you can use `applyEdits`.
 */
function modify(text, path, value, options) {
    return _impl_edit_js__WEBPACK_IMPORTED_MODULE_1__["setProperty"](text, path, value, options.formattingOptions, options.getInsertionIndex);
}
/**
 * Applies edits to a input string.
 */
function applyEdits(text, edits) {
    for (var i = edits.length - 1; i >= 0; i--) {
        text = _impl_edit_js__WEBPACK_IMPORTED_MODULE_1__["applyEdit"](text, edits[i]);
    }
    return text;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-languageserver-types/main.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-languageserver-types/main.js ***!
  \***************************************************************************************************/
/*! exports provided: Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, Diagnostic, Command, TextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolInformation, DocumentSymbol, CodeActionKind, CodeActionContext, CodeAction, CodeLens, FormattingOptions, DocumentLink, EOL, TextDocument, TextDocumentSaveReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationLink", function() { return LocationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInformation", function() { return ColorInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPresentation", function() { return ColorPresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeKind", function() { return FoldingRangeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRange", function() { return FoldingRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticRelatedInformation", function() { return DiagnosticRelatedInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticSeverity", function() { return DiagnosticSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnostic", function() { return Diagnostic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEdit", function() { return TextEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentEdit", function() { return TextDocumentEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFile", function() { return CreateFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameFile", function() { return RenameFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFile", function() { return DeleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceEdit", function() { return WorkspaceEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceChange", function() { return WorkspaceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentIdentifier", function() { return TextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionedTextDocumentIdentifier", function() { return VersionedTextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentItem", function() { return TextDocumentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupKind", function() { return MarkupKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupContent", function() { return MarkupContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemKind", function() { return CompletionItemKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertTextFormat", function() { return InsertTextFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItem", function() { return CompletionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionList", function() { return CompletionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedString", function() { return MarkedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hover", function() { return Hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterInformation", function() { return ParameterInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureInformation", function() { return SignatureInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightKind", function() { return DocumentHighlightKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlight", function() { return DocumentHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolKind", function() { return SymbolKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInformation", function() { return SymbolInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbol", function() { return DocumentSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionKind", function() { return CodeActionKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionContext", function() { return CodeActionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeAction", function() { return CodeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLens", function() { return CodeLens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingOptions", function() { return FormattingOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentLink", function() { return DocumentLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOL", function() { return EOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocument", function() { return TextDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentSaveReason", function() { return TextDocumentSaveReason; });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

/**
 * The Position namespace provides helper functions to work with
 * [Position](#Position) literals.
 */
var Position;
(function (Position) {
    /**
     * Creates a new Position literal from the given line and character.
     * @param line The position's line.
     * @param character The position's character.
     */
    function create(line, character) {
        return { line: line, character: character };
    }
    Position.create = create;
    /**
     * Checks whether the given liternal conforms to the [Position](#Position) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.number(candidate.line) && Is.number(candidate.character);
    }
    Position.is = is;
})(Position || (Position = {}));
/**
 * The Range namespace provides helper functions to work with
 * [Range](#Range) literals.
 */
var Range;
(function (Range) {
    function create(one, two, three, four) {
        if (Is.number(one) && Is.number(two) && Is.number(three) && Is.number(four)) {
            return { start: Position.create(one, two), end: Position.create(three, four) };
        }
        else if (Position.is(one) && Position.is(two)) {
            return { start: one, end: two };
        }
        else {
            throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
        }
    }
    Range.create = create;
    /**
     * Checks whether the given literal conforms to the [Range](#Range) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
    }
    Range.is = is;
})(Range || (Range = {}));
/**
 * The Location namespace provides helper functions to work with
 * [Location](#Location) literals.
 */
var Location;
(function (Location) {
    /**
     * Creates a Location literal.
     * @param uri The location's uri.
     * @param range The location's range.
     */
    function create(uri, range) {
        return { uri: uri, range: range };
    }
    Location.create = create;
    /**
     * Checks whether the given literal conforms to the [Location](#Location) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
    }
    Location.is = is;
})(Location || (Location = {}));
/**
 * The LocationLink namespace provides helper functions to work with
 * [LocationLink](#LocationLink) literals.
 */
var LocationLink;
(function (LocationLink) {
    /**
     * Creates a LocationLink literal.
     * @param targetUri The definition's uri.
     * @param targetRange The full range of the definition.
     * @param targetSelectionRange The span of the symbol definition at the target.
     * @param originSelectionRange The span of the symbol being defined in the originating source file.
     */
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri: targetUri, targetRange: targetRange, targetSelectionRange: targetSelectionRange, originSelectionRange: originSelectionRange };
    }
    LocationLink.create = create;
    /**
     * Checks whether the given literal conforms to the [LocationLink](#LocationLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri)
            && (Range.is(candidate.targetSelectionRange) || Is.undefined(candidate.targetSelectionRange))
            && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
    }
    LocationLink.is = is;
})(LocationLink || (LocationLink = {}));
/**
 * The Color namespace provides helper functions to work with
 * [Color](#Color) literals.
 */
var Color;
(function (Color) {
    /**
     * Creates a new Color literal.
     */
    function create(red, green, blue, alpha) {
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha,
        };
    }
    Color.create = create;
    /**
     * Checks whether the given literal conforms to the [Color](#Color) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.number(candidate.red)
            && Is.number(candidate.green)
            && Is.number(candidate.blue)
            && Is.number(candidate.alpha);
    }
    Color.is = is;
})(Color || (Color = {}));
/**
 * The ColorInformation namespace provides helper functions to work with
 * [ColorInformation](#ColorInformation) literals.
 */
var ColorInformation;
(function (ColorInformation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(range, color) {
        return {
            range: range,
            color: color,
        };
    }
    ColorInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Range.is(candidate.range) && Color.is(candidate.color);
    }
    ColorInformation.is = is;
})(ColorInformation || (ColorInformation = {}));
/**
 * The Color namespace provides helper functions to work with
 * [ColorPresentation](#ColorPresentation) literals.
 */
var ColorPresentation;
(function (ColorPresentation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(label, textEdit, additionalTextEdits) {
        return {
            label: label,
            textEdit: textEdit,
            additionalTextEdits: additionalTextEdits,
        };
    }
    ColorPresentation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate.label)
            && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate))
            && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
    }
    ColorPresentation.is = is;
})(ColorPresentation || (ColorPresentation = {}));
/**
 * Enum of known range kinds
 */
var FoldingRangeKind;
(function (FoldingRangeKind) {
    /**
     * Folding range for a comment
     */
    FoldingRangeKind["Comment"] = "comment";
    /**
     * Folding range for a imports or includes
     */
    FoldingRangeKind["Imports"] = "imports";
    /**
     * Folding range for a region (e.g. `#region`)
     */
    FoldingRangeKind["Region"] = "region";
})(FoldingRangeKind || (FoldingRangeKind = {}));
/**
 * The folding range namespace provides helper functions to work with
 * [FoldingRange](#FoldingRange) literals.
 */
var FoldingRange;
(function (FoldingRange) {
    /**
     * Creates a new FoldingRange literal.
     */
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
            result.kind = kind;
        }
        return result;
    }
    FoldingRange.create = create;
    /**
     * Checks whether the given literal conforms to the [FoldingRange](#FoldingRange) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.number(candidate.startLine) && Is.number(candidate.startLine)
            && (Is.undefined(candidate.startCharacter) || Is.number(candidate.startCharacter))
            && (Is.undefined(candidate.endCharacter) || Is.number(candidate.endCharacter))
            && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
    }
    FoldingRange.is = is;
})(FoldingRange || (FoldingRange = {}));
/**
 * The DiagnosticRelatedInformation namespace provides helper functions to work with
 * [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) literals.
 */
var DiagnosticRelatedInformation;
(function (DiagnosticRelatedInformation) {
    /**
     * Creates a new DiagnosticRelatedInformation literal.
     */
    function create(location, message) {
        return {
            location: location,
            message: message
        };
    }
    DiagnosticRelatedInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
    }
    DiagnosticRelatedInformation.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
/**
 * The diagnostic's severity.
 */
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    /**
     * Reports an error.
     */
    DiagnosticSeverity.Error = 1;
    /**
     * Reports a warning.
     */
    DiagnosticSeverity.Warning = 2;
    /**
     * Reports an information.
     */
    DiagnosticSeverity.Information = 3;
    /**
     * Reports a hint.
     */
    DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
/**
 * The Diagnostic namespace provides helper functions to work with
 * [Diagnostic](#Diagnostic) literals.
 */
var Diagnostic;
(function (Diagnostic) {
    /**
     * Creates a new Diagnostic literal.
     */
    function create(range, message, severity, code, source, relatedInformation) {
        var result = { range: range, message: message };
        if (Is.defined(severity)) {
            result.severity = severity;
        }
        if (Is.defined(code)) {
            result.code = code;
        }
        if (Is.defined(source)) {
            result.source = source;
        }
        if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
        }
        return result;
    }
    Diagnostic.create = create;
    /**
     * Checks whether the given literal conforms to the [Diagnostic](#Diagnostic) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate)
            && Range.is(candidate.range)
            && Is.string(candidate.message)
            && (Is.number(candidate.severity) || Is.undefined(candidate.severity))
            && (Is.number(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code))
            && (Is.string(candidate.source) || Is.undefined(candidate.source))
            && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
    }
    Diagnostic.is = is;
})(Diagnostic || (Diagnostic = {}));
/**
 * The Command namespace provides helper functions to work with
 * [Command](#Command) literals.
 */
var Command;
(function (Command) {
    /**
     * Creates a new Command literal.
     */
    function create(title, command) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var result = { title: title, command: command };
        if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
        }
        return result;
    }
    Command.create = create;
    /**
     * Checks whether the given literal conforms to the [Command](#Command) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
    }
    Command.is = is;
})(Command || (Command = {}));
/**
 * The TextEdit namespace provides helper function to create replace,
 * insert and delete edits more easily.
 */
var TextEdit;
(function (TextEdit) {
    /**
     * Creates a replace text edit.
     * @param range The range of text to be replaced.
     * @param newText The new text.
     */
    function replace(range, newText) {
        return { range: range, newText: newText };
    }
    TextEdit.replace = replace;
    /**
     * Creates a insert text edit.
     * @param position The position to insert the text at.
     * @param newText The text to be inserted.
     */
    function insert(position, newText) {
        return { range: { start: position, end: position }, newText: newText };
    }
    TextEdit.insert = insert;
    /**
     * Creates a delete text edit.
     * @param range The range of text to be deleted.
     */
    function del(range) {
        return { range: range, newText: '' };
    }
    TextEdit.del = del;
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate)
            && Is.string(candidate.newText)
            && Range.is(candidate.range);
    }
    TextEdit.is = is;
})(TextEdit || (TextEdit = {}));
/**
 * The TextDocumentEdit namespace provides helper function to create
 * an edit that manipulates a text document.
 */
var TextDocumentEdit;
(function (TextDocumentEdit) {
    /**
     * Creates a new `TextDocumentEdit`
     */
    function create(textDocument, edits) {
        return { textDocument: textDocument, edits: edits };
    }
    TextDocumentEdit.create = create;
    function is(value) {
        var candidate = value;
        return Is.defined(candidate)
            && VersionedTextDocumentIdentifier.is(candidate.textDocument)
            && Array.isArray(candidate.edits);
    }
    TextDocumentEdit.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));
var CreateFile;
(function (CreateFile) {
    function create(uri, options) {
        var result = {
            kind: 'create',
            uri: uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    CreateFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'create' && Is.string(candidate.uri) &&
            (candidate.options === void 0 ||
                ((candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))));
    }
    CreateFile.is = is;
})(CreateFile || (CreateFile = {}));
var RenameFile;
(function (RenameFile) {
    function create(oldUri, newUri, options) {
        var result = {
            kind: 'rename',
            oldUri: oldUri,
            newUri: newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    RenameFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) &&
            (candidate.options === void 0 ||
                ((candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))));
    }
    RenameFile.is = is;
})(RenameFile || (RenameFile = {}));
var DeleteFile;
(function (DeleteFile) {
    function create(uri, options) {
        var result = {
            kind: 'delete',
            uri: uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    DeleteFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) &&
            (candidate.options === void 0 ||
                ((candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))));
    }
    DeleteFile.is = is;
})(DeleteFile || (DeleteFile = {}));
var WorkspaceEdit;
(function (WorkspaceEdit) {
    function is(value) {
        var candidate = value;
        return candidate &&
            (candidate.changes !== void 0 || candidate.documentChanges !== void 0) &&
            (candidate.documentChanges === void 0 || candidate.documentChanges.every(function (change) {
                if (Is.string(change.kind)) {
                    return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                }
                else {
                    return TextDocumentEdit.is(change);
                }
            }));
    }
    WorkspaceEdit.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));
var TextEditChangeImpl = /** @class */ (function () {
    function TextEditChangeImpl(edits) {
        this.edits = edits;
    }
    TextEditChangeImpl.prototype.insert = function (position, newText) {
        this.edits.push(TextEdit.insert(position, newText));
    };
    TextEditChangeImpl.prototype.replace = function (range, newText) {
        this.edits.push(TextEdit.replace(range, newText));
    };
    TextEditChangeImpl.prototype.delete = function (range) {
        this.edits.push(TextEdit.del(range));
    };
    TextEditChangeImpl.prototype.add = function (edit) {
        this.edits.push(edit);
    };
    TextEditChangeImpl.prototype.all = function () {
        return this.edits;
    };
    TextEditChangeImpl.prototype.clear = function () {
        this.edits.splice(0, this.edits.length);
    };
    return TextEditChangeImpl;
}());
/**
 * A workspace change helps constructing changes to a workspace.
 */
var WorkspaceChange = /** @class */ (function () {
    function WorkspaceChange(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                workspaceEdit.documentChanges.forEach(function (change) {
                    if (TextDocumentEdit.is(change)) {
                        var textEditChange = new TextEditChangeImpl(change.edits);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            }
            else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function (key) {
                    var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                    _this._textEditChanges[key] = textEditChange;
                });
            }
        }
    }
    Object.defineProperty(WorkspaceChange.prototype, "edit", {
        /**
         * Returns the underlying [WorkspaceEdit](#WorkspaceEdit) literal
         * use to be returned from a workspace edit operation like rename.
         */
        get: function () {
            return this._workspaceEdit;
        },
        enumerable: true,
        configurable: true
    });
    WorkspaceChange.prototype.getTextEditChange = function (key) {
        if (VersionedTextDocumentIdentifier.is(key)) {
            if (!this._workspaceEdit) {
                this._workspaceEdit = {
                    documentChanges: []
                };
            }
            if (!this._workspaceEdit.documentChanges) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var textDocument = key;
            var result = this._textEditChanges[textDocument.uri];
            if (!result) {
                var edits = [];
                var textDocumentEdit = {
                    textDocument: textDocument,
                    edits: edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[textDocument.uri] = result;
            }
            return result;
        }
        else {
            if (!this._workspaceEdit) {
                this._workspaceEdit = {
                    changes: Object.create(null)
                };
            }
            if (!this._workspaceEdit.changes) {
                throw new Error('Workspace edit is not configured for normal text edit changes.');
            }
            var result = this._textEditChanges[key];
            if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange.prototype.createFile = function (uri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(CreateFile.create(uri, options));
    };
    WorkspaceChange.prototype.renameFile = function (oldUri, newUri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(RenameFile.create(oldUri, newUri, options));
    };
    WorkspaceChange.prototype.deleteFile = function (uri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(DeleteFile.create(uri, options));
    };
    WorkspaceChange.prototype.checkDocumentChanges = function () {
        if (!this._workspaceEdit || !this._workspaceEdit.documentChanges) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
    };
    return WorkspaceChange;
}());

/**
 * The TextDocumentIdentifier namespace provides helper functions to work with
 * [TextDocumentIdentifier](#TextDocumentIdentifier) literals.
 */
var TextDocumentIdentifier;
(function (TextDocumentIdentifier) {
    /**
     * Creates a new TextDocumentIdentifier literal.
     * @param uri The document's uri.
     */
    function create(uri) {
        return { uri: uri };
    }
    TextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentIdentifier](#TextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
    }
    TextDocumentIdentifier.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
/**
 * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
 * [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) literals.
 */
var VersionedTextDocumentIdentifier;
(function (VersionedTextDocumentIdentifier) {
    /**
     * Creates a new VersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param uri The document's text.
     */
    function create(uri, version) {
        return { uri: uri, version: version };
    }
    VersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.number(candidate.version));
    }
    VersionedTextDocumentIdentifier.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
/**
 * The TextDocumentItem namespace provides helper functions to work with
 * [TextDocumentItem](#TextDocumentItem) literals.
 */
var TextDocumentItem;
(function (TextDocumentItem) {
    /**
     * Creates a new TextDocumentItem literal.
     * @param uri The document's uri.
     * @param languageId The document's language identifier.
     * @param version The document's version number.
     * @param text The document's text.
     */
    function create(uri, languageId, version, text) {
        return { uri: uri, languageId: languageId, version: version, text: text };
    }
    TextDocumentItem.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentItem](#TextDocumentItem) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.number(candidate.version) && Is.string(candidate.text);
    }
    TextDocumentItem.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
/**
 * Describes the content type that a client supports in various
 * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
 *
 * Please note that `MarkupKinds` must not start with a `$`. This kinds
 * are reserved for internal usage.
 */
var MarkupKind;
(function (MarkupKind) {
    /**
     * Plain text is supported as a content format
     */
    MarkupKind.PlainText = 'plaintext';
    /**
     * Markdown is supported as a content format
     */
    MarkupKind.Markdown = 'markdown';
})(MarkupKind || (MarkupKind = {}));
(function (MarkupKind) {
    /**
     * Checks whether the given value is a value of the [MarkupKind](#MarkupKind) type.
     */
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
    }
    MarkupKind.is = is;
})(MarkupKind || (MarkupKind = {}));
var MarkupContent;
(function (MarkupContent) {
    /**
     * Checks whether the given value conforms to the [MarkupContent](#MarkupContent) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
    }
    MarkupContent.is = is;
})(MarkupContent || (MarkupContent = {}));
/**
 * The kind of a completion entry.
 */
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind.Text = 1;
    CompletionItemKind.Method = 2;
    CompletionItemKind.Function = 3;
    CompletionItemKind.Constructor = 4;
    CompletionItemKind.Field = 5;
    CompletionItemKind.Variable = 6;
    CompletionItemKind.Class = 7;
    CompletionItemKind.Interface = 8;
    CompletionItemKind.Module = 9;
    CompletionItemKind.Property = 10;
    CompletionItemKind.Unit = 11;
    CompletionItemKind.Value = 12;
    CompletionItemKind.Enum = 13;
    CompletionItemKind.Keyword = 14;
    CompletionItemKind.Snippet = 15;
    CompletionItemKind.Color = 16;
    CompletionItemKind.File = 17;
    CompletionItemKind.Reference = 18;
    CompletionItemKind.Folder = 19;
    CompletionItemKind.EnumMember = 20;
    CompletionItemKind.Constant = 21;
    CompletionItemKind.Struct = 22;
    CompletionItemKind.Event = 23;
    CompletionItemKind.Operator = 24;
    CompletionItemKind.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
/**
 * Defines whether the insert text in a completion item should be interpreted as
 * plain text or a snippet.
 */
var InsertTextFormat;
(function (InsertTextFormat) {
    /**
     * The primary text to be inserted is treated as a plain string.
     */
    InsertTextFormat.PlainText = 1;
    /**
     * The primary text to be inserted is treated as a snippet.
     *
     * A snippet can define tab stops and placeholders with `$1`, `$2`
     * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
     * the end of the snippet. Placeholders with equal identifiers are linked,
     * that is typing in one will update others too.
     *
     * See also: https://github.com/Microsoft/vscode/blob/master/src/vs/editor/contrib/snippet/common/snippet.md
     */
    InsertTextFormat.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
/**
 * The CompletionItem namespace provides functions to deal with
 * completion items.
 */
var CompletionItem;
(function (CompletionItem) {
    /**
     * Create a completion item and seed it with a label.
     * @param label The completion item's label
     */
    function create(label) {
        return { label: label };
    }
    CompletionItem.create = create;
})(CompletionItem || (CompletionItem = {}));
/**
 * The CompletionList namespace provides functions to deal with
 * completion lists.
 */
var CompletionList;
(function (CompletionList) {
    /**
     * Creates a new completion list.
     *
     * @param items The completion items.
     * @param isIncomplete The list is not complete.
     */
    function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
    }
    CompletionList.create = create;
})(CompletionList || (CompletionList = {}));
var MarkedString;
(function (MarkedString) {
    /**
     * Creates a marked string from plain text.
     *
     * @param plainText The plain text.
     */
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&"); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
    }
    MarkedString.fromPlainText = fromPlainText;
    /**
     * Checks whether the given value conforms to the [MarkedString](#MarkedString) type.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate) || (Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value));
    }
    MarkedString.is = is;
})(MarkedString || (MarkedString = {}));
var Hover;
(function (Hover) {
    /**
     * Checks whether the given value conforms to the [Hover](#Hover) interface.
     */
    function is(value) {
        var candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
            MarkedString.is(candidate.contents) ||
            Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
    }
    Hover.is = is;
})(Hover || (Hover = {}));
/**
 * The ParameterInformation namespace provides helper functions to work with
 * [ParameterInformation](#ParameterInformation) literals.
 */
var ParameterInformation;
(function (ParameterInformation) {
    /**
     * Creates a new parameter information literal.
     *
     * @param label A label string.
     * @param documentation A doc string.
     */
    function create(label, documentation) {
        return documentation ? { label: label, documentation: documentation } : { label: label };
    }
    ParameterInformation.create = create;
    ;
})(ParameterInformation || (ParameterInformation = {}));
/**
 * The SignatureInformation namespace provides helper functions to work with
 * [SignatureInformation](#SignatureInformation) literals.
 */
var SignatureInformation;
(function (SignatureInformation) {
    function create(label, documentation) {
        var parameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
        }
        var result = { label: label };
        if (Is.defined(documentation)) {
            result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
            result.parameters = parameters;
        }
        else {
            result.parameters = [];
        }
        return result;
    }
    SignatureInformation.create = create;
})(SignatureInformation || (SignatureInformation = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind.Text = 1;
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind.Read = 2;
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * DocumentHighlight namespace to provide helper functions to work with
 * [DocumentHighlight](#DocumentHighlight) literals.
 */
var DocumentHighlight;
(function (DocumentHighlight) {
    /**
     * Create a DocumentHighlight object.
     * @param range The range the highlight applies to.
     */
    function create(range, kind) {
        var result = { range: range };
        if (Is.number(kind)) {
            result.kind = kind;
        }
        return result;
    }
    DocumentHighlight.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
/**
 * A symbol kind.
 */
var SymbolKind;
(function (SymbolKind) {
    SymbolKind.File = 1;
    SymbolKind.Module = 2;
    SymbolKind.Namespace = 3;
    SymbolKind.Package = 4;
    SymbolKind.Class = 5;
    SymbolKind.Method = 6;
    SymbolKind.Property = 7;
    SymbolKind.Field = 8;
    SymbolKind.Constructor = 9;
    SymbolKind.Enum = 10;
    SymbolKind.Interface = 11;
    SymbolKind.Function = 12;
    SymbolKind.Variable = 13;
    SymbolKind.Constant = 14;
    SymbolKind.String = 15;
    SymbolKind.Number = 16;
    SymbolKind.Boolean = 17;
    SymbolKind.Array = 18;
    SymbolKind.Object = 19;
    SymbolKind.Key = 20;
    SymbolKind.Null = 21;
    SymbolKind.EnumMember = 22;
    SymbolKind.Struct = 23;
    SymbolKind.Event = 24;
    SymbolKind.Operator = 25;
    SymbolKind.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
var SymbolInformation;
(function (SymbolInformation) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the location of the symbol.
     * @param uri The resource of the location of symbol, defaults to the current document.
     * @param containerName The name of the symbol containing the symbol.
     */
    function create(name, kind, range, uri, containerName) {
        var result = {
            name: name,
            kind: kind,
            location: { uri: uri, range: range }
        };
        if (containerName) {
            result.containerName = containerName;
        }
        return result;
    }
    SymbolInformation.create = create;
})(SymbolInformation || (SymbolInformation = {}));
/**
 * Represents programming constructs like variables, classes, interfaces etc.
 * that appear in a document. Document symbols can be hierarchical and they
 * have two ranges: one that encloses its definition and one that points to
 * its most interesting range, e.g. the range of an identifier.
 */
var DocumentSymbol = /** @class */ (function () {
    function DocumentSymbol() {
    }
    return DocumentSymbol;
}());

(function (DocumentSymbol) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param detail The detail of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the symbol.
     * @param selectionRange The selectionRange of the symbol.
     * @param children Children of the symbol.
     */
    function create(name, detail, kind, range, selectionRange, children) {
        var result = {
            name: name,
            detail: detail,
            kind: kind,
            range: range,
            selectionRange: selectionRange
        };
        if (children !== void 0) {
            result.children = children;
        }
        return result;
    }
    DocumentSymbol.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentSymbol](#DocumentSymbol) interface.
     */
    function is(value) {
        var candidate = value;
        return candidate &&
            Is.string(candidate.name) && Is.number(candidate.kind) &&
            Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
            (candidate.detail === void 0 || Is.string(candidate.detail)) &&
            (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) &&
            (candidate.children === void 0 || Array.isArray(candidate.children));
    }
    DocumentSymbol.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
/**
 * A set of predefined code action kinds
 */
var CodeActionKind;
(function (CodeActionKind) {
    /**
     * Base kind for quickfix actions: 'quickfix'
     */
    CodeActionKind.QuickFix = 'quickfix';
    /**
     * Base kind for refactoring actions: 'refactor'
     */
    CodeActionKind.Refactor = 'refactor';
    /**
     * Base kind for refactoring extraction actions: 'refactor.extract'
     *
     * Example extract actions:
     *
     * - Extract method
     * - Extract function
     * - Extract variable
     * - Extract interface from class
     * - ...
     */
    CodeActionKind.RefactorExtract = 'refactor.extract';
    /**
     * Base kind for refactoring inline actions: 'refactor.inline'
     *
     * Example inline actions:
     *
     * - Inline function
     * - Inline variable
     * - Inline constant
     * - ...
     */
    CodeActionKind.RefactorInline = 'refactor.inline';
    /**
     * Base kind for refactoring rewrite actions: 'refactor.rewrite'
     *
     * Example rewrite actions:
     *
     * - Convert JavaScript function to class
     * - Add or remove parameter
     * - Encapsulate field
     * - Make method static
     * - Move method to base class
     * - ...
     */
    CodeActionKind.RefactorRewrite = 'refactor.rewrite';
    /**
     * Base kind for source actions: `source`
     *
     * Source code actions apply to the entire file.
     */
    CodeActionKind.Source = 'source';
    /**
     * Base kind for an organize imports source action: `source.organizeImports`
     */
    CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
})(CodeActionKind || (CodeActionKind = {}));
/**
 * The CodeActionContext namespace provides helper functions to work with
 * [CodeActionContext](#CodeActionContext) literals.
 */
var CodeActionContext;
(function (CodeActionContext) {
    /**
     * Creates a new CodeActionContext literal.
     */
    function create(diagnostics, only) {
        var result = { diagnostics: diagnostics };
        if (only !== void 0 && only !== null) {
            result.only = only;
        }
        return result;
    }
    CodeActionContext.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeActionContext](#CodeActionContext) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string));
    }
    CodeActionContext.is = is;
})(CodeActionContext || (CodeActionContext = {}));
var CodeAction;
(function (CodeAction) {
    function create(title, commandOrEdit, kind) {
        var result = { title: title };
        if (Command.is(commandOrEdit)) {
            result.command = commandOrEdit;
        }
        else {
            result.edit = commandOrEdit;
        }
        if (kind !== void null) {
            result.kind = kind;
        }
        return result;
    }
    CodeAction.create = create;
    function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.title) &&
            (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) &&
            (candidate.kind === void 0 || Is.string(candidate.kind)) &&
            (candidate.edit !== void 0 || candidate.command !== void 0) &&
            (candidate.command === void 0 || Command.is(candidate.command)) &&
            (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
    }
    CodeAction.is = is;
})(CodeAction || (CodeAction = {}));
/**
 * The CodeLens namespace provides helper functions to work with
 * [CodeLens](#CodeLens) literals.
 */
var CodeLens;
(function (CodeLens) {
    /**
     * Creates a new CodeLens literal.
     */
    function create(range, data) {
        var result = { range: range };
        if (Is.defined(data))
            result.data = data;
        return result;
    }
    CodeLens.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeLens](#CodeLens) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
    }
    CodeLens.is = is;
})(CodeLens || (CodeLens = {}));
/**
 * The FormattingOptions namespace provides helper functions to work with
 * [FormattingOptions](#FormattingOptions) literals.
 */
var FormattingOptions;
(function (FormattingOptions) {
    /**
     * Creates a new FormattingOptions literal.
     */
    function create(tabSize, insertSpaces) {
        return { tabSize: tabSize, insertSpaces: insertSpaces };
    }
    FormattingOptions.create = create;
    /**
     * Checks whether the given literal conforms to the [FormattingOptions](#FormattingOptions) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.number(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions.is = is;
})(FormattingOptions || (FormattingOptions = {}));
/**
 * A document link is a range in a text document that links to an internal or external resource, like another
 * text document or a web site.
 */
var DocumentLink = /** @class */ (function () {
    function DocumentLink() {
    }
    return DocumentLink;
}());

/**
 * The DocumentLink namespace provides helper functions to work with
 * [DocumentLink](#DocumentLink) literals.
 */
(function (DocumentLink) {
    /**
     * Creates a new DocumentLink literal.
     */
    function create(range, target, data) {
        return { range: range, target: target, data: data };
    }
    DocumentLink.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentLink](#DocumentLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
    }
    DocumentLink.is = is;
})(DocumentLink || (DocumentLink = {}));
var EOL = ['\n', '\r\n', '\r'];
var TextDocument;
(function (TextDocument) {
    /**
     * Creates a new ITextDocument literal from the given uri and content.
     * @param uri The document's uri.
     * @param languageId  The document's language Id.
     * @param content The document's content.
     */
    function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument.create = create;
    /**
     * Checks whether the given literal conforms to the [ITextDocument](#ITextDocument) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.number(candidate.lineCount)
            && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument.is = is;
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function (a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        var lastModifiedOffset = text.length;
        for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
                text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            }
            else {
                throw new Error('Overlapping edit');
            }
            lastModifiedOffset = startOffset;
        }
        return text;
    }
    TextDocument.applyEdits = applyEdits;
    function mergeSort(data, compare) {
        if (data.length <= 1) {
            // sorted
            return data;
        }
        var p = (data.length / 2) | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
                // smaller_equal -> take left to preserve order
                data[i++] = left[leftIdx++];
            }
            else {
                // greater -> take right
                data[i++] = right[rightIdx++];
            }
        }
        while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
        }
        return data;
    }
})(TextDocument || (TextDocument = {}));
/**
 * Represents reasons why a text document is saved.
 */
var TextDocumentSaveReason;
(function (TextDocumentSaveReason) {
    /**
     * Manually triggered, e.g. by the user pressing save, by starting debugging,
     * or by an API call.
     */
    TextDocumentSaveReason.Manual = 1;
    /**
     * Automatic after a delay.
     */
    TextDocumentSaveReason.AfterDelay = 2;
    /**
     * When the editor lost focus.
     */
    TextDocumentSaveReason.FocusOut = 3;
})(TextDocumentSaveReason || (TextDocumentSaveReason = {}));
var FullTextDocument = /** @class */ (function () {
    function FullTextDocument(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = null;
    }
    Object.defineProperty(FullTextDocument.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: true,
        configurable: true
    });
    FullTextDocument.prototype.getText = function (range) {
        if (range) {
            var start = this.offsetAt(range.start);
            var end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    };
    FullTextDocument.prototype.update = function (event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = null;
    };
    FullTextDocument.prototype.getLineOffsets = function () {
        if (this._lineOffsets === null) {
            var lineOffsets = [];
            var text = this._content;
            var isLineStart = true;
            for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = (ch === '\r' || ch === '\n');
                if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
                    i++;
                }
            }
            if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
            }
            this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
    };
    FullTextDocument.prototype.positionAt = function (offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) {
            return Position.create(0, offset);
        }
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        var line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
    };
    FullTextDocument.prototype.offsetAt = function (position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        }
        else if (position.line < 0) {
            return 0;
        }
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument.prototype, "lineCount", {
        get: function () {
            return this.getLineOffsets().length;
        },
        enumerable: true,
        configurable: true
    });
    return FullTextDocument;
}());
var Is;
(function (Is) {
    var toString = Object.prototype.toString;
    function defined(value) {
        return typeof value !== 'undefined';
    }
    Is.defined = defined;
    function undefined(value) {
        return typeof value === 'undefined';
    }
    Is.undefined = undefined;
    function boolean(value) {
        return value === true || value === false;
    }
    Is.boolean = boolean;
    function string(value) {
        return toString.call(value) === '[object String]';
    }
    Is.string = string;
    function number(value) {
        return toString.call(value) === '[object Number]';
    }
    Is.number = number;
    function func(value) {
        return toString.call(value) === '[object Function]';
    }
    Is.func = func;
    function objectLiteral(value) {
        // Strictly speaking class instances pass this check as well. Since the LSP
        // doesn't use classes we ignore this for now. If we do we need to add something
        // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
        return value !== null && typeof value === 'object';
    }
    Is.objectLiteral = objectLiteral;
    function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
    }
    Is.typedArray = typedArray;
})(Is || (Is = {}));


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/jsonMode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/jsonMode.js ***!
  \*********************************************************************/
/*! exports provided: setupMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupMode", function() { return setupMode; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "./node_modules/monaco-editor/esm/vs/language/json/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "./node_modules/monaco-editor/esm/vs/language/json/languageFeatures.js");
/* harmony import */ var _tokenization_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenization.js */ "./node_modules/monaco-editor/esm/vs/language/json/tokenization.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




function setupMode(defaults) {
    var disposables = [];
    var providers = [];
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](defaults);
    disposables.push(client);
    var worker = function () {
        var uris = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uris[_i] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, uris);
    };
    function registerProviders() {
        var languageId = defaults.languageId, modeConfiguration = defaults.modeConfiguration;
        disposeAll(providers);
        if (modeConfiguration.documentFormattingEdits) {
            providers.push(monaco.languages.registerDocumentFormattingEditProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentFormattingEditProvider"](worker)));
        }
        if (modeConfiguration.documentRangeFormattingEdits) {
            providers.push(monaco.languages.registerDocumentRangeFormattingEditProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentRangeFormattingEditProvider"](worker)));
        }
        if (modeConfiguration.completionItems) {
            providers.push(monaco.languages.registerCompletionItemProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["CompletionAdapter"](worker)));
        }
        if (modeConfiguration.hovers) {
            providers.push(monaco.languages.registerHoverProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["HoverAdapter"](worker)));
        }
        if (modeConfiguration.documentSymbols) {
            providers.push(monaco.languages.registerDocumentSymbolProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentSymbolAdapter"](worker)));
        }
        if (modeConfiguration.tokens) {
            providers.push(monaco.languages.setTokensProvider(languageId, Object(_tokenization_js__WEBPACK_IMPORTED_MODULE_2__["createTokenizationSupport"])(true)));
        }
        if (modeConfiguration.colors) {
            providers.push(monaco.languages.registerColorProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentColorAdapter"](worker)));
        }
        if (modeConfiguration.foldingRanges) {
            providers.push(monaco.languages.registerFoldingRangeProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FoldingRangeAdapter"](worker)));
        }
        if (modeConfiguration.diagnostics) {
            providers.push(new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnosticsAdapter"](languageId, worker, defaults));
        }
    }
    registerProviders();
    disposables.push(monaco.languages.setLanguageConfiguration(defaults.languageId, richEditConfiguration));
    var modeConfiguration = defaults.modeConfiguration;
    defaults.onDidChange(function (newDefaults) {
        if (newDefaults.modeConfiguration !== modeConfiguration) {
            modeConfiguration = newDefaults.modeConfiguration;
            registerProviders();
        }
    });
    disposables.push(asDisposable(providers));
    return asDisposable(disposables);
}
function asDisposable(disposables) {
    return { dispose: function () { return disposeAll(disposables); } };
}
function disposeAll(disposables) {
    while (disposables.length) {
        disposables.pop().dispose();
    }
}
var richEditConfiguration = {
    wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string'] },
        { open: '[', close: ']', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] }
    ]
};


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/languageFeatures.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/languageFeatures.js ***!
  \*****************************************************************************/
/*! exports provided: DiagnosticsAdapter, CompletionAdapter, HoverAdapter, DocumentSymbolAdapter, DocumentFormattingEditProvider, DocumentRangeFormattingEditProvider, DocumentColorAdapter, FoldingRangeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticsAdapter", function() { return DiagnosticsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionAdapter", function() { return CompletionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverAdapter", function() { return HoverAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbolAdapter", function() { return DocumentSymbolAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFormattingEditProvider", function() { return DocumentFormattingEditProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRangeFormattingEditProvider", function() { return DocumentRangeFormattingEditProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentColorAdapter", function() { return DocumentColorAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeAdapter", function() { return FoldingRangeAdapter; });
/* harmony import */ var _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deps/vscode-languageserver-types/main.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-languageserver-types/main.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var Uri = monaco.Uri;
var Range = monaco.Range;
// --- diagnostics --- ---
var DiagnosticsAdapter = /** @class */ (function () {
    function DiagnosticsAdapter(_languageId, _worker, defaults) {
        var _this = this;
        this._languageId = _languageId;
        this._worker = _worker;
        this._disposables = [];
        this._listener = Object.create(null);
        var onModelAdd = function (model) {
            var modeId = model.getModeId();
            if (modeId !== _this._languageId) {
                return;
            }
            var handle;
            _this._listener[model.uri.toString()] = model.onDidChangeContent(function () {
                clearTimeout(handle);
                handle = setTimeout(function () { return _this._doValidate(model.uri, modeId); }, 500);
            });
            _this._doValidate(model.uri, modeId);
        };
        var onModelRemoved = function (model) {
            monaco.editor.setModelMarkers(model, _this._languageId, []);
            var uriStr = model.uri.toString();
            var listener = _this._listener[uriStr];
            if (listener) {
                listener.dispose();
                delete _this._listener[uriStr];
            }
        };
        this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd));
        this._disposables.push(monaco.editor.onWillDisposeModel(function (model) {
            onModelRemoved(model);
            _this._resetSchema(model.uri);
        }));
        this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
            _this._resetSchema(event.model.uri);
        }));
        this._disposables.push(defaults.onDidChange(function (_) {
            monaco.editor.getModels().forEach(function (model) {
                if (model.getModeId() === _this._languageId) {
                    onModelRemoved(model);
                    onModelAdd(model);
                }
            });
        }));
        this._disposables.push({
            dispose: function () {
                monaco.editor.getModels().forEach(onModelRemoved);
                for (var key in _this._listener) {
                    _this._listener[key].dispose();
                }
            }
        });
        monaco.editor.getModels().forEach(onModelAdd);
    }
    DiagnosticsAdapter.prototype.dispose = function () {
        this._disposables.forEach(function (d) { return d && d.dispose(); });
        this._disposables = [];
    };
    DiagnosticsAdapter.prototype._resetSchema = function (resource) {
        this._worker().then(function (worker) {
            worker.resetSchema(resource.toString());
        });
    };
    DiagnosticsAdapter.prototype._doValidate = function (resource, languageId) {
        this._worker(resource).then(function (worker) {
            return worker.doValidation(resource.toString()).then(function (diagnostics) {
                var markers = diagnostics.map(function (d) { return toDiagnostics(resource, d); });
                var model = monaco.editor.getModel(resource);
                if (model && model.getModeId() === languageId) {
                    monaco.editor.setModelMarkers(model, languageId, markers);
                }
            });
        }).then(undefined, function (err) {
            console.error(err);
        });
    };
    return DiagnosticsAdapter;
}());

function toSeverity(lsSeverity) {
    switch (lsSeverity) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Error: return monaco.MarkerSeverity.Error;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Warning: return monaco.MarkerSeverity.Warning;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Information: return monaco.MarkerSeverity.Info;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Hint: return monaco.MarkerSeverity.Hint;
        default:
            return monaco.MarkerSeverity.Info;
    }
}
function toDiagnostics(resource, diag) {
    var code = typeof diag.code === 'number' ? String(diag.code) : diag.code;
    return {
        severity: toSeverity(diag.severity),
        startLineNumber: diag.range.start.line + 1,
        startColumn: diag.range.start.character + 1,
        endLineNumber: diag.range.end.line + 1,
        endColumn: diag.range.end.character + 1,
        message: diag.message,
        code: code,
        source: diag.source
    };
}
// --- completion ------
function fromPosition(position) {
    if (!position) {
        return void 0;
    }
    return { character: position.column - 1, line: position.lineNumber - 1 };
}
function fromRange(range) {
    if (!range) {
        return void 0;
    }
    return { start: { line: range.startLineNumber - 1, character: range.startColumn - 1 }, end: { line: range.endLineNumber - 1, character: range.endColumn - 1 } };
}
function toRange(range) {
    if (!range) {
        return void 0;
    }
    return new Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function toCompletionItemKind(kind) {
    var mItemKind = monaco.languages.CompletionItemKind;
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Text: return mItemKind.Text;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Method: return mItemKind.Method;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Function: return mItemKind.Function;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Constructor: return mItemKind.Constructor;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Field: return mItemKind.Field;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Variable: return mItemKind.Variable;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Class: return mItemKind.Class;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Interface: return mItemKind.Interface;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Module: return mItemKind.Module;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Property: return mItemKind.Property;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Unit: return mItemKind.Unit;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Value: return mItemKind.Value;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Enum: return mItemKind.Enum;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Keyword: return mItemKind.Keyword;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Snippet: return mItemKind.Snippet;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Color: return mItemKind.Color;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].File: return mItemKind.File;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Reference: return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function fromCompletionItemKind(kind) {
    var mItemKind = monaco.languages.CompletionItemKind;
    switch (kind) {
        case mItemKind.Text: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Text;
        case mItemKind.Method: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Method;
        case mItemKind.Function: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Function;
        case mItemKind.Constructor: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Constructor;
        case mItemKind.Field: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Field;
        case mItemKind.Variable: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Variable;
        case mItemKind.Class: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Class;
        case mItemKind.Interface: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Interface;
        case mItemKind.Module: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Module;
        case mItemKind.Property: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Property;
        case mItemKind.Unit: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Unit;
        case mItemKind.Value: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Value;
        case mItemKind.Enum: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Enum;
        case mItemKind.Keyword: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Keyword;
        case mItemKind.Snippet: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Snippet;
        case mItemKind.Color: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Color;
        case mItemKind.File: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].File;
        case mItemKind.Reference: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Reference;
    }
    return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Property;
}
function toTextEdit(textEdit) {
    if (!textEdit) {
        return void 0;
    }
    return {
        range: toRange(textEdit.range),
        text: textEdit.newText
    };
}
var CompletionAdapter = /** @class */ (function () {
    function CompletionAdapter(_worker) {
        this._worker = _worker;
    }
    Object.defineProperty(CompletionAdapter.prototype, "triggerCharacters", {
        get: function () {
            return [' ', ':'];
        },
        enumerable: true,
        configurable: true
    });
    CompletionAdapter.prototype.provideCompletionItems = function (model, position, context, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.doComplete(resource.toString(), fromPosition(position));
        }).then(function (info) {
            if (!info) {
                return;
            }
            var wordInfo = model.getWordUntilPosition(position);
            var wordRange = new Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            var items = info.items.map(function (entry) {
                var item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    detail: entry.detail,
                    range: wordRange,
                    kind: toCompletionItemKind(entry.kind),
                };
                if (entry.textEdit) {
                    item.range = toRange(entry.textEdit.range);
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) {
                    item.additionalTextEdits = entry.additionalTextEdits.map(toTextEdit);
                }
                if (entry.insertTextFormat === _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["InsertTextFormat"].Snippet) {
                    item.insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
                }
                return item;
            });
            return {
                isIncomplete: info.isIncomplete,
                suggestions: items
            };
        });
    };
    return CompletionAdapter;
}());

function isMarkupContent(thing) {
    return thing && typeof thing === 'object' && typeof thing.kind === 'string';
}
function toMarkdownString(entry) {
    if (typeof entry === 'string') {
        return {
            value: entry
        };
    }
    if (isMarkupContent(entry)) {
        if (entry.kind === 'plaintext') {
            return {
                value: entry.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
            };
        }
        return {
            value: entry.value
        };
    }
    return { value: '```' + entry.language + '\n' + entry.value + '\n```\n' };
}
function toMarkedStringArray(contents) {
    if (!contents) {
        return void 0;
    }
    if (Array.isArray(contents)) {
        return contents.map(toMarkdownString);
    }
    return [toMarkdownString(contents)];
}
// --- hover ------
var HoverAdapter = /** @class */ (function () {
    function HoverAdapter(_worker) {
        this._worker = _worker;
    }
    HoverAdapter.prototype.provideHover = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.doHover(resource.toString(), fromPosition(position));
        }).then(function (info) {
            if (!info) {
                return;
            }
            return {
                range: toRange(info.range),
                contents: toMarkedStringArray(info.contents)
            };
        });
    };
    return HoverAdapter;
}());

// --- definition ------
function toLocation(location) {
    return {
        uri: Uri.parse(location.uri),
        range: toRange(location.range)
    };
}
// --- document symbols ------
function toSymbolKind(kind) {
    var mKind = monaco.languages.SymbolKind;
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].File: return mKind.Array;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Module: return mKind.Module;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Namespace: return mKind.Namespace;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Package: return mKind.Package;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Class: return mKind.Class;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Method: return mKind.Method;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Property: return mKind.Property;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Field: return mKind.Field;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Constructor: return mKind.Constructor;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Enum: return mKind.Enum;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Interface: return mKind.Interface;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Function: return mKind.Function;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Variable: return mKind.Variable;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Constant: return mKind.Constant;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].String: return mKind.String;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Number: return mKind.Number;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Boolean: return mKind.Boolean;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Array: return mKind.Array;
    }
    return mKind.Function;
}
var DocumentSymbolAdapter = /** @class */ (function () {
    function DocumentSymbolAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentSymbolAdapter.prototype.provideDocumentSymbols = function (model, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.findDocumentSymbols(resource.toString()); }).then(function (items) {
            if (!items) {
                return;
            }
            return items.map(function (item) { return ({
                name: item.name,
                detail: '',
                containerName: item.containerName,
                kind: toSymbolKind(item.kind),
                range: toRange(item.location.range),
                selectionRange: toRange(item.location.range),
                tags: []
            }); });
        });
    };
    return DocumentSymbolAdapter;
}());

function fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var DocumentFormattingEditProvider = /** @class */ (function () {
    function DocumentFormattingEditProvider(_worker) {
        this._worker = _worker;
    }
    DocumentFormattingEditProvider.prototype.provideDocumentFormattingEdits = function (model, options, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.format(resource.toString(), null, fromFormattingOptions(options)).then(function (edits) {
                if (!edits || edits.length === 0) {
                    return;
                }
                return edits.map(toTextEdit);
            });
        });
    };
    return DocumentFormattingEditProvider;
}());

var DocumentRangeFormattingEditProvider = /** @class */ (function () {
    function DocumentRangeFormattingEditProvider(_worker) {
        this._worker = _worker;
    }
    DocumentRangeFormattingEditProvider.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.format(resource.toString(), fromRange(range), fromFormattingOptions(options)).then(function (edits) {
                if (!edits || edits.length === 0) {
                    return;
                }
                return edits.map(toTextEdit);
            });
        });
    };
    return DocumentRangeFormattingEditProvider;
}());

var DocumentColorAdapter = /** @class */ (function () {
    function DocumentColorAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentColorAdapter.prototype.provideDocumentColors = function (model, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.findDocumentColors(resource.toString()); }).then(function (infos) {
            if (!infos) {
                return;
            }
            return infos.map(function (item) { return ({
                color: item.color,
                range: toRange(item.range)
            }); });
        });
    };
    DocumentColorAdapter.prototype.provideColorPresentations = function (model, info, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.getColorPresentations(resource.toString(), info.color, fromRange(info.range)); }).then(function (presentations) {
            if (!presentations) {
                return;
            }
            return presentations.map(function (presentation) {
                var item = {
                    label: presentation.label,
                };
                if (presentation.textEdit) {
                    item.textEdit = toTextEdit(presentation.textEdit);
                }
                if (presentation.additionalTextEdits) {
                    item.additionalTextEdits = presentation.additionalTextEdits.map(toTextEdit);
                }
                return item;
            });
        });
    };
    return DocumentColorAdapter;
}());

var FoldingRangeAdapter = /** @class */ (function () {
    function FoldingRangeAdapter(_worker) {
        this._worker = _worker;
    }
    FoldingRangeAdapter.prototype.provideFoldingRanges = function (model, context, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.provideFoldingRanges(resource.toString(), context); }).then(function (ranges) {
            if (!ranges) {
                return;
            }
            return ranges.map(function (range) {
                var result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== 'undefined') {
                    result.kind = toFoldingRangeKind(range.kind);
                }
                return result;
            });
        });
    };
    return FoldingRangeAdapter;
}());

function toFoldingRangeKind(kind) {
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["FoldingRangeKind"].Comment: return monaco.languages.FoldingRangeKind.Comment;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["FoldingRangeKind"].Imports: return monaco.languages.FoldingRangeKind.Imports;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["FoldingRangeKind"].Region: return monaco.languages.FoldingRangeKind.Region;
    }
    return void 0;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/tokenization.js":
/*!*************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/tokenization.js ***!
  \*************************************************************************/
/*! exports provided: createTokenizationSupport, TOKEN_DELIM_OBJECT, TOKEN_DELIM_ARRAY, TOKEN_DELIM_COLON, TOKEN_DELIM_COMMA, TOKEN_VALUE_BOOLEAN, TOKEN_VALUE_NULL, TOKEN_VALUE_STRING, TOKEN_VALUE_NUMBER, TOKEN_PROPERTY_NAME, TOKEN_COMMENT_BLOCK, TOKEN_COMMENT_LINE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTokenizationSupport", function() { return createTokenizationSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_DELIM_OBJECT", function() { return TOKEN_DELIM_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_DELIM_ARRAY", function() { return TOKEN_DELIM_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_DELIM_COLON", function() { return TOKEN_DELIM_COLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_DELIM_COMMA", function() { return TOKEN_DELIM_COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_VALUE_BOOLEAN", function() { return TOKEN_VALUE_BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_VALUE_NULL", function() { return TOKEN_VALUE_NULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_VALUE_STRING", function() { return TOKEN_VALUE_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_VALUE_NUMBER", function() { return TOKEN_VALUE_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_PROPERTY_NAME", function() { return TOKEN_PROPERTY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_COMMENT_BLOCK", function() { return TOKEN_COMMENT_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_COMMENT_LINE", function() { return TOKEN_COMMENT_LINE; });
/* harmony import */ var _deps_jsonc_parser_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deps/jsonc-parser/main.js */ "./node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/main.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function createTokenizationSupport(supportComments) {
    return {
        getInitialState: function () { return new JSONState(null, null, false); },
        tokenize: function (line, state, offsetDelta, stopAtOffset) { return tokenize(supportComments, line, state, offsetDelta, stopAtOffset); }
    };
}
var TOKEN_DELIM_OBJECT = 'delimiter.bracket.json';
var TOKEN_DELIM_ARRAY = 'delimiter.array.json';
var TOKEN_DELIM_COLON = 'delimiter.colon.json';
var TOKEN_DELIM_COMMA = 'delimiter.comma.json';
var TOKEN_VALUE_BOOLEAN = 'keyword.json';
var TOKEN_VALUE_NULL = 'keyword.json';
var TOKEN_VALUE_STRING = 'string.value.json';
var TOKEN_VALUE_NUMBER = 'number.json';
var TOKEN_PROPERTY_NAME = 'string.key.json';
var TOKEN_COMMENT_BLOCK = 'comment.block.json';
var TOKEN_COMMENT_LINE = 'comment.line.json';
var JSONState = /** @class */ (function () {
    function JSONState(state, scanError, lastWasColon) {
        this._state = state;
        this.scanError = scanError;
        this.lastWasColon = lastWasColon;
    }
    JSONState.prototype.clone = function () {
        return new JSONState(this._state, this.scanError, this.lastWasColon);
    };
    JSONState.prototype.equals = function (other) {
        if (other === this) {
            return true;
        }
        if (!other || !(other instanceof JSONState)) {
            return false;
        }
        return this.scanError === other.scanError &&
            this.lastWasColon === other.lastWasColon;
    };
    JSONState.prototype.getStateData = function () {
        return this._state;
    };
    JSONState.prototype.setStateData = function (state) {
        this._state = state;
    };
    return JSONState;
}());
function tokenize(comments, line, state, offsetDelta, stopAtOffset) {
    if (offsetDelta === void 0) { offsetDelta = 0; }
    // handle multiline strings and block comments
    var numberOfInsertedCharacters = 0, adjustOffset = false;
    switch (state.scanError) {
        case 2 /* UnexpectedEndOfString */:
            line = '"' + line;
            numberOfInsertedCharacters = 1;
            break;
        case 1 /* UnexpectedEndOfComment */:
            line = '/*' + line;
            numberOfInsertedCharacters = 2;
            break;
    }
    var scanner = _deps_jsonc_parser_main_js__WEBPACK_IMPORTED_MODULE_0__["createScanner"](line), kind, ret, lastWasColon = state.lastWasColon;
    ret = {
        tokens: [],
        endState: state.clone()
    };
    while (true) {
        var offset = offsetDelta + scanner.getPosition(), type = '';
        kind = scanner.scan();
        if (kind === 17 /* EOF */) {
            break;
        }
        // Check that the scanner has advanced
        if (offset === offsetDelta + scanner.getPosition()) {
            throw new Error('Scanner did not advance, next 3 characters are: ' + line.substr(scanner.getPosition(), 3));
        }
        // In case we inserted /* or " character, we need to
        // adjust the offset of all tokens (except the first)
        if (adjustOffset) {
            offset -= numberOfInsertedCharacters;
        }
        adjustOffset = numberOfInsertedCharacters > 0;
        // brackets and type
        switch (kind) {
            case 1 /* OpenBraceToken */:
                type = TOKEN_DELIM_OBJECT;
                lastWasColon = false;
                break;
            case 2 /* CloseBraceToken */:
                type = TOKEN_DELIM_OBJECT;
                lastWasColon = false;
                break;
            case 3 /* OpenBracketToken */:
                type = TOKEN_DELIM_ARRAY;
                lastWasColon = false;
                break;
            case 4 /* CloseBracketToken */:
                type = TOKEN_DELIM_ARRAY;
                lastWasColon = false;
                break;
            case 6 /* ColonToken */:
                type = TOKEN_DELIM_COLON;
                lastWasColon = true;
                break;
            case 5 /* CommaToken */:
                type = TOKEN_DELIM_COMMA;
                lastWasColon = false;
                break;
            case 8 /* TrueKeyword */:
            case 9 /* FalseKeyword */:
                type = TOKEN_VALUE_BOOLEAN;
                lastWasColon = false;
                break;
            case 7 /* NullKeyword */:
                type = TOKEN_VALUE_NULL;
                lastWasColon = false;
                break;
            case 10 /* StringLiteral */:
                type = lastWasColon ? TOKEN_VALUE_STRING : TOKEN_PROPERTY_NAME;
                lastWasColon = false;
                break;
            case 11 /* NumericLiteral */:
                type = TOKEN_VALUE_NUMBER;
                lastWasColon = false;
                break;
        }
        // comments, iff enabled
        if (comments) {
            switch (kind) {
                case 12 /* LineCommentTrivia */:
                    type = TOKEN_COMMENT_LINE;
                    break;
                case 13 /* BlockCommentTrivia */:
                    type = TOKEN_COMMENT_BLOCK;
                    break;
            }
        }
        ret.endState = new JSONState(state.getStateData(), scanner.getTokenError(), lastWasColon);
        ret.tokens.push({
            startIndex: offset,
            scopes: type
        });
    }
    return ret;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/workerManager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/workerManager.js ***!
  \**************************************************************************/
/*! exports provided: WorkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerManager", function() { return WorkerManager; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var STOP_WHEN_IDLE_FOR = 2 * 60 * 1000; // 2min
var WorkerManager = /** @class */ (function () {
    function WorkerManager(defaults) {
        var _this = this;
        this._defaults = defaults;
        this._worker = null;
        this._idleCheckInterval = setInterval(function () { return _this._checkIfIdle(); }, 30 * 1000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
    }
    WorkerManager.prototype._stopWorker = function () {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    };
    WorkerManager.prototype.dispose = function () {
        clearInterval(this._idleCheckInterval);
        this._configChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._checkIfIdle = function () {
        if (!this._worker) {
            return;
        }
        var timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (timePassedSinceLastUsed > STOP_WHEN_IDLE_FOR) {
            this._stopWorker();
        }
    };
    WorkerManager.prototype._getClient = function () {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = monaco.editor.createWebWorker({
                // module that exports the create() method and returns a `JSONWorker` instance
                moduleId: 'vs/language/json/jsonWorker',
                label: this._defaults.languageId,
                // passed in to the create() method
                createData: {
                    languageSettings: this._defaults.diagnosticsOptions,
                    languageId: this._defaults.languageId,
                    enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest
                }
            });
            this._client = this._worker.getProxy();
        }
        return this._client;
    };
    WorkerManager.prototype.getLanguageServiceWorker = function () {
        var _this = this;
        var resources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            resources[_i] = arguments[_i];
        }
        var _client;
        return this._getClient().then(function (client) {
            _client = client;
        }).then(function (_) {
            return _this._worker.withSyncedResources(resources);
        }).then(function (_) { return _client; });
    };
    return WorkerManager;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvanNvbi9fZGVwcy9qc29uYy1wYXJzZXIvaW1wbC9lZGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS9qc29uL19kZXBzL2pzb25jLXBhcnNlci9pbXBsL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvanNvbi9fZGVwcy9qc29uYy1wYXJzZXIvaW1wbC9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2xhbmd1YWdlL2pzb24vX2RlcHMvanNvbmMtcGFyc2VyL2ltcGwvc2Nhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvanNvbi9fZGVwcy9qc29uYy1wYXJzZXIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvanNvbi9fZGVwcy92c2NvZGUtbGFuZ3VhZ2VzZXJ2ZXItdHlwZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvanNvbi9qc29uTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvanNvbi9sYW5ndWFnZUZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS9qc29uL3Rva2VuaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2Uv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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0JBQXNCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDO0FBQy9DO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0VBQW9FO0FBQ3JFO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0RBQWdEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBCQUEwQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTLGlDQUFpQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QztBQUN0QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDMUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDMUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxDQUFDLHNDQUFzQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBLENBQUM7QUFDd0IiLCJmaWxlIjoiMS40NjZlZDg3Yi5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgZm9ybWF0LCBpc0VPTCB9IGZyb20gJy4vZm9ybWF0LmpzJztcbmltcG9ydCB7IHBhcnNlVHJlZSwgZmluZE5vZGVBdExvY2F0aW9uIH0gZnJvbSAnLi9wYXJzZXIuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KHRleHQsIHBhdGgsIGZvcm1hdHRpbmdPcHRpb25zKSB7XG4gICAgcmV0dXJuIHNldFByb3BlcnR5KHRleHQsIHBhdGgsIHZvaWQgMCwgZm9ybWF0dGluZ09wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5KHRleHQsIG9yaWdpbmFsUGF0aCwgdmFsdWUsIGZvcm1hdHRpbmdPcHRpb25zLCBnZXRJbnNlcnRpb25JbmRleCkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgcGF0aCA9IG9yaWdpbmFsUGF0aC5zbGljZSgpO1xuICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICB2YXIgcm9vdCA9IHBhcnNlVHJlZSh0ZXh0LCBlcnJvcnMpO1xuICAgIHZhciBwYXJlbnQgPSB2b2lkIDA7XG4gICAgdmFyIGxhc3RTZWdtZW50ID0gdm9pZCAwO1xuICAgIHdoaWxlIChwYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGFzdFNlZ21lbnQgPSBwYXRoLnBvcCgpO1xuICAgICAgICBwYXJlbnQgPSBmaW5kTm9kZUF0TG9jYXRpb24ocm9vdCwgcGF0aCk7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHZvaWQgMCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhc3RTZWdtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gKF9hID0ge30sIF9hW2xhc3RTZWdtZW50XSA9IHZhbHVlLCBfYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAvLyBlbXB0eSBkb2N1bWVudFxuICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyAvLyBkZWxldGVcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBkZWxldGUgaW4gZW1wdHkgZG9jdW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2l0aEZvcm1hdHRpbmcodGV4dCwgeyBvZmZzZXQ6IHJvb3QgPyByb290Lm9mZnNldCA6IDAsIGxlbmd0aDogcm9vdCA/IHJvb3QubGVuZ3RoIDogMCwgY29udGVudDogSlNPTi5zdHJpbmdpZnkodmFsdWUpIH0sIGZvcm1hdHRpbmdPcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBsYXN0U2VnbWVudCA9PT0gJ3N0cmluZycgJiYgQXJyYXkuaXNBcnJheShwYXJlbnQuY2hpbGRyZW4pKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IGZpbmROb2RlQXRMb2NhdGlvbihwYXJlbnQsIFtsYXN0U2VnbWVudF0pO1xuICAgICAgICBpZiAoZXhpc3RpbmcgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgLy8gZGVsZXRlXG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQgQVNUJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eUluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoZXhpc3RpbmcucGFyZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlQmVnaW4gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUVuZCA9IGV4aXN0aW5nLnBhcmVudC5vZmZzZXQgKyBleGlzdGluZy5wYXJlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbW1hIG9mIHRoZSBwcmV2aW91cyBub2RlXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IHBhcmVudC5jaGlsZHJlbltwcm9wZXJ0eUluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJlZ2luID0gcHJldmlvdXMub2Zmc2V0ICsgcHJldmlvdXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQmVnaW4gPSBwYXJlbnQub2Zmc2V0ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbW1hIG9mIHRoZSBuZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gcGFyZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRW5kID0gbmV4dC5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpdGhGb3JtYXR0aW5nKHRleHQsIHsgb2Zmc2V0OiByZW1vdmVCZWdpbiwgbGVuZ3RoOiByZW1vdmVFbmQgLSByZW1vdmVCZWdpbiwgY29udGVudDogJycgfSwgZm9ybWF0dGluZ09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHZhbHVlIG9mIGV4aXN0aW5nIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpdGhGb3JtYXR0aW5nKHRleHQsIHsgb2Zmc2V0OiBleGlzdGluZy5vZmZzZXQsIGxlbmd0aDogZXhpc3RpbmcubGVuZ3RoLCBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgfSwgZm9ybWF0dGluZ09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgLy8gZGVsZXRlXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdOyAvLyBwcm9wZXJ0eSBkb2VzIG5vdCBleGlzdCwgbm90aGluZyB0byBkb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld1Byb3BlcnR5ID0gSlNPTi5zdHJpbmdpZnkobGFzdFNlZ21lbnQpICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5zZXJ0aW9uSW5kZXggPyBnZXRJbnNlcnRpb25JbmRleChwYXJlbnQuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLmNoaWxkcmVuWzBdLnZhbHVlOyB9KSkgOiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGVkaXQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gcGFyZW50LmNoaWxkcmVuW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZWRpdCA9IHsgb2Zmc2V0OiBwcmV2aW91cy5vZmZzZXQgKyBwcmV2aW91cy5sZW5ndGgsIGxlbmd0aDogMCwgY29udGVudDogJywnICsgbmV3UHJvcGVydHkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBlZGl0ID0geyBvZmZzZXQ6IHBhcmVudC5vZmZzZXQgKyAxLCBsZW5ndGg6IDAsIGNvbnRlbnQ6IG5ld1Byb3BlcnR5IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0ID0geyBvZmZzZXQ6IHBhcmVudC5vZmZzZXQgKyAxLCBsZW5ndGg6IDAsIGNvbnRlbnQ6IG5ld1Byb3BlcnR5ICsgJywnIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZvcm1hdHRpbmcodGV4dCwgZWRpdCwgZm9ybWF0dGluZ09wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnYXJyYXknICYmIHR5cGVvZiBsYXN0U2VnbWVudCA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShwYXJlbnQuY2hpbGRyZW4pKSB7XG4gICAgICAgIHZhciBpbnNlcnRJbmRleCA9IGxhc3RTZWdtZW50O1xuICAgICAgICBpZiAoaW5zZXJ0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBJbnNlcnRcbiAgICAgICAgICAgIHZhciBuZXdQcm9wZXJ0eSA9IFwiXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICB2YXIgZWRpdCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZWRpdCA9IHsgb2Zmc2V0OiBwYXJlbnQub2Zmc2V0ICsgMSwgbGVuZ3RoOiAwLCBjb250ZW50OiBuZXdQcm9wZXJ0eSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gcGFyZW50LmNoaWxkcmVuW3BhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBlZGl0ID0geyBvZmZzZXQ6IHByZXZpb3VzLm9mZnNldCArIHByZXZpb3VzLmxlbmd0aCwgbGVuZ3RoOiAwLCBjb250ZW50OiAnLCcgKyBuZXdQcm9wZXJ0eSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdpdGhGb3JtYXR0aW5nKHRleHQsIGVkaXQsIGZvcm1hdHRpbmdPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vUmVtb3ZhbFxuICAgICAgICAgICAgICAgIHZhciByZW1vdmFsSW5kZXggPSBsYXN0U2VnbWVudDtcbiAgICAgICAgICAgICAgICB2YXIgdG9SZW1vdmUgPSBwYXJlbnQuY2hpbGRyZW5bcmVtb3ZhbEluZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgZWRpdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgZWRpdCA9IHsgb2Zmc2V0OiBwYXJlbnQub2Zmc2V0ICsgMSwgbGVuZ3RoOiBwYXJlbnQubGVuZ3RoIC0gMiwgY29udGVudDogJycgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEgPT09IHJlbW92YWxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBsYXN0IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gcGFyZW50LmNoaWxkcmVuW3JlbW92YWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcHJldmlvdXMub2Zmc2V0ICsgcHJldmlvdXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50RW5kT2Zmc2V0ID0gcGFyZW50Lm9mZnNldCArIHBhcmVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGVkaXQgPSB7IG9mZnNldDogb2Zmc2V0LCBsZW5ndGg6IHBhcmVudEVuZE9mZnNldCAtIDIgLSBvZmZzZXQsIGNvbnRlbnQ6ICcnIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlZGl0ID0geyBvZmZzZXQ6IHRvUmVtb3ZlLm9mZnNldCwgbGVuZ3RoOiBwYXJlbnQuY2hpbGRyZW5bcmVtb3ZhbEluZGV4ICsgMV0ub2Zmc2V0IC0gdG9SZW1vdmUub2Zmc2V0LCBjb250ZW50OiAnJyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gd2l0aEZvcm1hdHRpbmcodGV4dCwgZWRpdCwgZm9ybWF0dGluZ09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcnJheSBtb2RpZmljYXRpb24gbm90IHN1cHBvcnRlZCB5ZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBhZGQgXCIgKyAodHlwZW9mIGxhc3RTZWdtZW50ICE9PSAnbnVtYmVyJyA/ICdpbmRleCcgOiAncHJvcGVydHknKSArIFwiIHRvIHBhcmVudCBvZiB0eXBlIFwiICsgcGFyZW50LnR5cGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHdpdGhGb3JtYXR0aW5nKHRleHQsIGVkaXQsIGZvcm1hdHRpbmdPcHRpb25zKSB7XG4gICAgLy8gYXBwbHkgdGhlIGVkaXRcbiAgICB2YXIgbmV3VGV4dCA9IGFwcGx5RWRpdCh0ZXh0LCBlZGl0KTtcbiAgICAvLyBmb3JtYXQgdGhlIG5ldyB0ZXh0XG4gICAgdmFyIGJlZ2luID0gZWRpdC5vZmZzZXQ7XG4gICAgdmFyIGVuZCA9IGVkaXQub2Zmc2V0ICsgZWRpdC5jb250ZW50Lmxlbmd0aDtcbiAgICBpZiAoZWRpdC5sZW5ndGggPT09IDAgfHwgZWRpdC5jb250ZW50Lmxlbmd0aCA9PT0gMCkgeyAvLyBpbnNlcnQgb3IgcmVtb3ZlXG4gICAgICAgIHdoaWxlIChiZWdpbiA+IDAgJiYgIWlzRU9MKG5ld1RleHQsIGJlZ2luIC0gMSkpIHtcbiAgICAgICAgICAgIGJlZ2luLS07XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGVuZCA8IG5ld1RleHQubGVuZ3RoICYmICFpc0VPTChuZXdUZXh0LCBlbmQpKSB7XG4gICAgICAgICAgICBlbmQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZWRpdHMgPSBmb3JtYXQobmV3VGV4dCwgeyBvZmZzZXQ6IGJlZ2luLCBsZW5ndGg6IGVuZCAtIGJlZ2luIH0sIGZvcm1hdHRpbmdPcHRpb25zKTtcbiAgICAvLyBhcHBseSB0aGUgZm9ybWF0dGluZyBlZGl0cyBhbmQgdHJhY2sgdGhlIGJlZ2luIGFuZCBlbmQgb2Zmc2V0cyBvZiB0aGUgY2hhbmdlc1xuICAgIGZvciAodmFyIGkgPSBlZGl0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgZWRpdF8xID0gZWRpdHNbaV07XG4gICAgICAgIG5ld1RleHQgPSBhcHBseUVkaXQobmV3VGV4dCwgZWRpdF8xKTtcbiAgICAgICAgYmVnaW4gPSBNYXRoLm1pbihiZWdpbiwgZWRpdF8xLm9mZnNldCk7XG4gICAgICAgIGVuZCA9IE1hdGgubWF4KGVuZCwgZWRpdF8xLm9mZnNldCArIGVkaXRfMS5sZW5ndGgpO1xuICAgICAgICBlbmQgKz0gZWRpdF8xLmNvbnRlbnQubGVuZ3RoIC0gZWRpdF8xLmxlbmd0aDtcbiAgICB9XG4gICAgLy8gY3JlYXRlIGEgc2luZ2xlIGVkaXQgd2l0aCBhbGwgY2hhbmdlc1xuICAgIHZhciBlZGl0TGVuZ3RoID0gdGV4dC5sZW5ndGggLSAobmV3VGV4dC5sZW5ndGggLSBlbmQpIC0gYmVnaW47XG4gICAgcmV0dXJuIFt7IG9mZnNldDogYmVnaW4sIGxlbmd0aDogZWRpdExlbmd0aCwgY29udGVudDogbmV3VGV4dC5zdWJzdHJpbmcoYmVnaW4sIGVuZCkgfV07XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFZGl0KHRleHQsIGVkaXQpIHtcbiAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoMCwgZWRpdC5vZmZzZXQpICsgZWRpdC5jb250ZW50ICsgdGV4dC5zdWJzdHJpbmcoZWRpdC5vZmZzZXQgKyBlZGl0Lmxlbmd0aCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNXUyh0ZXh0LCBvZmZzZXQpIHtcbiAgICByZXR1cm4gJ1xcclxcbiBcXHQnLmluZGV4T2YodGV4dC5jaGFyQXQob2Zmc2V0KSkgIT09IC0xO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBjcmVhdGVTY2FubmVyIH0gZnJvbSAnLi9zY2FubmVyLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZG9jdW1lbnRUZXh0LCByYW5nZSwgb3B0aW9ucykge1xuICAgIHZhciBpbml0aWFsSW5kZW50TGV2ZWw7XG4gICAgdmFyIGZvcm1hdFRleHQ7XG4gICAgdmFyIGZvcm1hdFRleHRTdGFydDtcbiAgICB2YXIgcmFuZ2VTdGFydDtcbiAgICB2YXIgcmFuZ2VFbmQ7XG4gICAgaWYgKHJhbmdlKSB7XG4gICAgICAgIHJhbmdlU3RhcnQgPSByYW5nZS5vZmZzZXQ7XG4gICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIHJhbmdlLmxlbmd0aDtcbiAgICAgICAgZm9ybWF0VGV4dFN0YXJ0ID0gcmFuZ2VTdGFydDtcbiAgICAgICAgd2hpbGUgKGZvcm1hdFRleHRTdGFydCA+IDAgJiYgIWlzRU9MKGRvY3VtZW50VGV4dCwgZm9ybWF0VGV4dFN0YXJ0IC0gMSkpIHtcbiAgICAgICAgICAgIGZvcm1hdFRleHRTdGFydC0tO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbmRPZmZzZXQgPSByYW5nZUVuZDtcbiAgICAgICAgd2hpbGUgKGVuZE9mZnNldCA8IGRvY3VtZW50VGV4dC5sZW5ndGggJiYgIWlzRU9MKGRvY3VtZW50VGV4dCwgZW5kT2Zmc2V0KSkge1xuICAgICAgICAgICAgZW5kT2Zmc2V0Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0VGV4dCA9IGRvY3VtZW50VGV4dC5zdWJzdHJpbmcoZm9ybWF0VGV4dFN0YXJ0LCBlbmRPZmZzZXQpO1xuICAgICAgICBpbml0aWFsSW5kZW50TGV2ZWwgPSBjb21wdXRlSW5kZW50TGV2ZWwoZm9ybWF0VGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3JtYXRUZXh0ID0gZG9jdW1lbnRUZXh0O1xuICAgICAgICBpbml0aWFsSW5kZW50TGV2ZWwgPSAwO1xuICAgICAgICBmb3JtYXRUZXh0U3RhcnQgPSAwO1xuICAgICAgICByYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgcmFuZ2VFbmQgPSBkb2N1bWVudFRleHQubGVuZ3RoO1xuICAgIH1cbiAgICB2YXIgZW9sID0gZ2V0RU9MKG9wdGlvbnMsIGRvY3VtZW50VGV4dCk7XG4gICAgdmFyIGxpbmVCcmVhayA9IGZhbHNlO1xuICAgIHZhciBpbmRlbnRMZXZlbCA9IDA7XG4gICAgdmFyIGluZGVudFZhbHVlO1xuICAgIGlmIChvcHRpb25zLmluc2VydFNwYWNlcykge1xuICAgICAgICBpbmRlbnRWYWx1ZSA9IHJlcGVhdCgnICcsIG9wdGlvbnMudGFiU2l6ZSB8fCA0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluZGVudFZhbHVlID0gJ1xcdCc7XG4gICAgfVxuICAgIHZhciBzY2FubmVyID0gY3JlYXRlU2Nhbm5lcihmb3JtYXRUZXh0LCBmYWxzZSk7XG4gICAgdmFyIGhhc0Vycm9yID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gbmV3TGluZUFuZEluZGVudCgpIHtcbiAgICAgICAgcmV0dXJuIGVvbCArIHJlcGVhdChpbmRlbnRWYWx1ZSwgaW5pdGlhbEluZGVudExldmVsICsgaW5kZW50TGV2ZWwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY2FuTmV4dCgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gc2Nhbm5lci5zY2FuKCk7XG4gICAgICAgIGxpbmVCcmVhayA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodG9rZW4gPT09IDE1IC8qIFRyaXZpYSAqLyB8fCB0b2tlbiA9PT0gMTQgLyogTGluZUJyZWFrVHJpdmlhICovKSB7XG4gICAgICAgICAgICBsaW5lQnJlYWsgPSBsaW5lQnJlYWsgfHwgKHRva2VuID09PSAxNCAvKiBMaW5lQnJlYWtUcml2aWEgKi8pO1xuICAgICAgICAgICAgdG9rZW4gPSBzY2FubmVyLnNjYW4oKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNFcnJvciA9IHRva2VuID09PSAxNiAvKiBVbmtub3duICovIHx8IHNjYW5uZXIuZ2V0VG9rZW5FcnJvcigpICE9PSAwIC8qIE5vbmUgKi87XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG4gICAgdmFyIGVkaXRPcGVyYXRpb25zID0gW107XG4gICAgZnVuY3Rpb24gYWRkRWRpdCh0ZXh0LCBzdGFydE9mZnNldCwgZW5kT2Zmc2V0KSB7XG4gICAgICAgIGlmICghaGFzRXJyb3IgJiYgc3RhcnRPZmZzZXQgPCByYW5nZUVuZCAmJiBlbmRPZmZzZXQgPiByYW5nZVN0YXJ0ICYmIGRvY3VtZW50VGV4dC5zdWJzdHJpbmcoc3RhcnRPZmZzZXQsIGVuZE9mZnNldCkgIT09IHRleHQpIHtcbiAgICAgICAgICAgIGVkaXRPcGVyYXRpb25zLnB1c2goeyBvZmZzZXQ6IHN0YXJ0T2Zmc2V0LCBsZW5ndGg6IGVuZE9mZnNldCAtIHN0YXJ0T2Zmc2V0LCBjb250ZW50OiB0ZXh0IH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBmaXJzdFRva2VuID0gc2Nhbk5leHQoKTtcbiAgICBpZiAoZmlyc3RUb2tlbiAhPT0gMTcgLyogRU9GICovKSB7XG4gICAgICAgIHZhciBmaXJzdFRva2VuU3RhcnQgPSBzY2FubmVyLmdldFRva2VuT2Zmc2V0KCkgKyBmb3JtYXRUZXh0U3RhcnQ7XG4gICAgICAgIHZhciBpbml0aWFsSW5kZW50ID0gcmVwZWF0KGluZGVudFZhbHVlLCBpbml0aWFsSW5kZW50TGV2ZWwpO1xuICAgICAgICBhZGRFZGl0KGluaXRpYWxJbmRlbnQsIGZvcm1hdFRleHRTdGFydCwgZmlyc3RUb2tlblN0YXJ0KTtcbiAgICB9XG4gICAgd2hpbGUgKGZpcnN0VG9rZW4gIT09IDE3IC8qIEVPRiAqLykge1xuICAgICAgICB2YXIgZmlyc3RUb2tlbkVuZCA9IHNjYW5uZXIuZ2V0VG9rZW5PZmZzZXQoKSArIHNjYW5uZXIuZ2V0VG9rZW5MZW5ndGgoKSArIGZvcm1hdFRleHRTdGFydDtcbiAgICAgICAgdmFyIHNlY29uZFRva2VuID0gc2Nhbk5leHQoKTtcbiAgICAgICAgdmFyIHJlcGxhY2VDb250ZW50ID0gJyc7XG4gICAgICAgIHdoaWxlICghbGluZUJyZWFrICYmIChzZWNvbmRUb2tlbiA9PT0gMTIgLyogTGluZUNvbW1lbnRUcml2aWEgKi8gfHwgc2Vjb25kVG9rZW4gPT09IDEzIC8qIEJsb2NrQ29tbWVudFRyaXZpYSAqLykpIHtcbiAgICAgICAgICAgIC8vIGNvbW1lbnRzIG9uIHRoZSBzYW1lIGxpbmU6IGtlZXAgdGhlbSBvbiB0aGUgc2FtZSBsaW5lLCBidXQgaWdub3JlIHRoZW0gb3RoZXJ3aXNlXG4gICAgICAgICAgICB2YXIgY29tbWVudFRva2VuU3RhcnQgPSBzY2FubmVyLmdldFRva2VuT2Zmc2V0KCkgKyBmb3JtYXRUZXh0U3RhcnQ7XG4gICAgICAgICAgICBhZGRFZGl0KCcgJywgZmlyc3RUb2tlbkVuZCwgY29tbWVudFRva2VuU3RhcnQpO1xuICAgICAgICAgICAgZmlyc3RUb2tlbkVuZCA9IHNjYW5uZXIuZ2V0VG9rZW5PZmZzZXQoKSArIHNjYW5uZXIuZ2V0VG9rZW5MZW5ndGgoKSArIGZvcm1hdFRleHRTdGFydDtcbiAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gc2Vjb25kVG9rZW4gPT09IDEyIC8qIExpbmVDb21tZW50VHJpdmlhICovID8gbmV3TGluZUFuZEluZGVudCgpIDogJyc7XG4gICAgICAgICAgICBzZWNvbmRUb2tlbiA9IHNjYW5OZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlY29uZFRva2VuID09PSAyIC8qIENsb3NlQnJhY2VUb2tlbiAqLykge1xuICAgICAgICAgICAgaWYgKGZpcnN0VG9rZW4gIT09IDEgLyogT3BlbkJyYWNlVG9rZW4gKi8pIHtcbiAgICAgICAgICAgICAgICBpbmRlbnRMZXZlbC0tO1xuICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gbmV3TGluZUFuZEluZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlY29uZFRva2VuID09PSA0IC8qIENsb3NlQnJhY2tldFRva2VuICovKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3RUb2tlbiAhPT0gMyAvKiBPcGVuQnJhY2tldFRva2VuICovKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50TGV2ZWwtLTtcbiAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9IG5ld0xpbmVBbmRJbmRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZmlyc3RUb2tlbikge1xuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBPcGVuQnJhY2tldFRva2VuICovOlxuICAgICAgICAgICAgICAgIGNhc2UgMSAvKiBPcGVuQnJhY2VUb2tlbiAqLzpcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50TGV2ZWwrKztcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUNvbnRlbnQgPSBuZXdMaW5lQW5kSW5kZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNSAvKiBDb21tYVRva2VuICovOlxuICAgICAgICAgICAgICAgIGNhc2UgMTIgLyogTGluZUNvbW1lbnRUcml2aWEgKi86XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gbmV3TGluZUFuZEluZGVudCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEzIC8qIEJsb2NrQ29tbWVudFRyaXZpYSAqLzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVCcmVhaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUNvbnRlbnQgPSBuZXdMaW5lQW5kSW5kZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzeW1ib2wgZm9sbG93aW5nIGNvbW1lbnQgb24gdGhlIHNhbWUgbGluZToga2VlcCBvbiBzYW1lIGxpbmUsIHNlcGFyYXRlIHdpdGggJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29udGVudCA9ICcgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDYgLyogQ29sb25Ub2tlbiAqLzpcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUNvbnRlbnQgPSAnICc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTAgLyogU3RyaW5nTGl0ZXJhbCAqLzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlY29uZFRva2VuID09PSA2IC8qIENvbG9uVG9rZW4gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgICAgICAgICAgICAgIGNhc2UgNyAvKiBOdWxsS2V5d29yZCAqLzpcbiAgICAgICAgICAgICAgICBjYXNlIDggLyogVHJ1ZUtleXdvcmQgKi86XG4gICAgICAgICAgICAgICAgY2FzZSA5IC8qIEZhbHNlS2V5d29yZCAqLzpcbiAgICAgICAgICAgICAgICBjYXNlIDExIC8qIE51bWVyaWNMaXRlcmFsICovOlxuICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBDbG9zZUJyYWNlVG9rZW4gKi86XG4gICAgICAgICAgICAgICAgY2FzZSA0IC8qIENsb3NlQnJhY2tldFRva2VuICovOlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vjb25kVG9rZW4gPT09IDEyIC8qIExpbmVDb21tZW50VHJpdmlhICovIHx8IHNlY29uZFRva2VuID09PSAxMyAvKiBCbG9ja0NvbW1lbnRUcml2aWEgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gJyAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlY29uZFRva2VuICE9PSA1IC8qIENvbW1hVG9rZW4gKi8gJiYgc2Vjb25kVG9rZW4gIT09IDE3IC8qIEVPRiAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTYgLyogVW5rbm93biAqLzpcbiAgICAgICAgICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaW5lQnJlYWsgJiYgKHNlY29uZFRva2VuID09PSAxMiAvKiBMaW5lQ29tbWVudFRyaXZpYSAqLyB8fCBzZWNvbmRUb2tlbiA9PT0gMTMgLyogQmxvY2tDb21tZW50VHJpdmlhICovKSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VDb250ZW50ID0gbmV3TGluZUFuZEluZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzZWNvbmRUb2tlblN0YXJ0ID0gc2Nhbm5lci5nZXRUb2tlbk9mZnNldCgpICsgZm9ybWF0VGV4dFN0YXJ0O1xuICAgICAgICBhZGRFZGl0KHJlcGxhY2VDb250ZW50LCBmaXJzdFRva2VuRW5kLCBzZWNvbmRUb2tlblN0YXJ0KTtcbiAgICAgICAgZmlyc3RUb2tlbiA9IHNlY29uZFRva2VuO1xuICAgIH1cbiAgICByZXR1cm4gZWRpdE9wZXJhdGlvbnM7XG59XG5mdW5jdGlvbiByZXBlYXQocywgY291bnQpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSBzO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29tcHV0ZUluZGVudExldmVsKGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIG5DaGFycyA9IDA7XG4gICAgdmFyIHRhYlNpemUgPSBvcHRpb25zLnRhYlNpemUgfHwgNDtcbiAgICB3aGlsZSAoaSA8IGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaCA9IGNvbnRlbnQuY2hhckF0KGkpO1xuICAgICAgICBpZiAoY2ggPT09ICcgJykge1xuICAgICAgICAgICAgbkNoYXJzKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcXHQnKSB7XG4gICAgICAgICAgICBuQ2hhcnMgKz0gdGFiU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobkNoYXJzIC8gdGFiU2l6ZSk7XG59XG5mdW5jdGlvbiBnZXRFT0wob3B0aW9ucywgdGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2ggPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgaWYgKGNoID09PSAnXFxyJykge1xuICAgICAgICAgICAgaWYgKGkgKyAxIDwgdGV4dC5sZW5ndGggJiYgdGV4dC5jaGFyQXQoaSArIDEpID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnXFxyXFxuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnXFxyJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgIHJldHVybiAnXFxuJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKG9wdGlvbnMgJiYgb3B0aW9ucy5lb2wpIHx8ICdcXG4nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRU9MKHRleHQsIG9mZnNldCkge1xuICAgIHJldHVybiAnXFxyXFxuJy5pbmRleE9mKHRleHQuY2hhckF0KG9mZnNldCkpICE9PSAtMTtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgY3JlYXRlU2Nhbm5lciB9IGZyb20gJy4vc2Nhbm5lci5qcyc7XG52YXIgUGFyc2VPcHRpb25zO1xuKGZ1bmN0aW9uIChQYXJzZU9wdGlvbnMpIHtcbiAgICBQYXJzZU9wdGlvbnMuREVGQVVMVCA9IHtcbiAgICAgICAgYWxsb3dUcmFpbGluZ0NvbW1hOiBmYWxzZVxuICAgIH07XG59KShQYXJzZU9wdGlvbnMgfHwgKFBhcnNlT3B0aW9ucyA9IHt9KSk7XG4vKipcbiAqIEZvciBhIGdpdmVuIG9mZnNldCwgZXZhbHVhdGUgdGhlIGxvY2F0aW9uIGluIHRoZSBKU09OIGRvY3VtZW50LiBFYWNoIHNlZ21lbnQgaW4gdGhlIGxvY2F0aW9uIHBhdGggaXMgZWl0aGVyIGEgcHJvcGVydHkgbmFtZSBvciBhbiBhcnJheSBpbmRleC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uKHRleHQsIHBvc2l0aW9uKSB7XG4gICAgdmFyIHNlZ21lbnRzID0gW107IC8vIHN0cmluZ3Mgb3IgbnVtYmVyc1xuICAgIHZhciBlYXJseVJldHVybkV4Y2VwdGlvbiA9IG5ldyBPYmplY3QoKTtcbiAgICB2YXIgcHJldmlvdXNOb2RlID0gdm9pZCAwO1xuICAgIHZhciBwcmV2aW91c05vZGVJbnN0ID0ge1xuICAgICAgICB2YWx1ZToge30sXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcGFyZW50OiB2b2lkIDBcbiAgICB9O1xuICAgIHZhciBpc0F0UHJvcGVydHlLZXkgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBzZXRQcmV2aW91c05vZGUodmFsdWUsIG9mZnNldCwgbGVuZ3RoLCB0eXBlKSB7XG4gICAgICAgIHByZXZpb3VzTm9kZUluc3QudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcHJldmlvdXNOb2RlSW5zdC5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHByZXZpb3VzTm9kZUluc3QubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICBwcmV2aW91c05vZGVJbnN0LnR5cGUgPSB0eXBlO1xuICAgICAgICBwcmV2aW91c05vZGVJbnN0LmNvbG9uT2Zmc2V0ID0gdm9pZCAwO1xuICAgICAgICBwcmV2aW91c05vZGUgPSBwcmV2aW91c05vZGVJbnN0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB2aXNpdCh0ZXh0LCB7XG4gICAgICAgICAgICBvbk9iamVjdEJlZ2luOiBmdW5jdGlvbiAob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVhcmx5UmV0dXJuRXhjZXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaXNBdFByb3BlcnR5S2V5ID0gcG9zaXRpb24gPiBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgc2VnbWVudHMucHVzaCgnJyk7IC8vIHB1c2ggYSBwbGFjZWhvbGRlciAod2lsbCBiZSByZXBsYWNlZClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbk9iamVjdFByb3BlcnR5OiBmdW5jdGlvbiAobmFtZSwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPCBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZWFybHlSZXR1cm5FeGNlcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFByZXZpb3VzTm9kZShuYW1lLCBvZmZzZXQsIGxlbmd0aCwgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0gPSBuYW1lO1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSBvZmZzZXQgKyBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZWFybHlSZXR1cm5FeGNlcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uT2JqZWN0RW5kOiBmdW5jdGlvbiAob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVhcmx5UmV0dXJuRXhjZXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25BcnJheUJlZ2luOiBmdW5jdGlvbiAob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVhcmx5UmV0dXJuRXhjZXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgc2VnbWVudHMucHVzaCgwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkFycmF5RW5kOiBmdW5jdGlvbiAob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVhcmx5UmV0dXJuRXhjZXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MaXRlcmFsVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPCBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZWFybHlSZXR1cm5FeGNlcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFByZXZpb3VzTm9kZSh2YWx1ZSwgb2Zmc2V0LCBsZW5ndGgsIGdldExpdGVyYWxOb2RlVHlwZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSBvZmZzZXQgKyBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZWFybHlSZXR1cm5FeGNlcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2VwYXJhdG9yOiBmdW5jdGlvbiAoc2VwLCBvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZWFybHlSZXR1cm5FeGNlcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZXAgPT09ICc6JyAmJiBwcmV2aW91c05vZGUgJiYgcHJldmlvdXNOb2RlLnR5cGUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlLmNvbG9uT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBpc0F0UHJvcGVydHlLZXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZXAgPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdCA9IHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxhc3QgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXSA9IGxhc3QgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNBdFByb3BlcnR5S2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlICE9PSBlYXJseVJldHVybkV4Y2VwdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoOiBzZWdtZW50cyxcbiAgICAgICAgcHJldmlvdXNOb2RlOiBwcmV2aW91c05vZGUsXG4gICAgICAgIGlzQXRQcm9wZXJ0eUtleTogaXNBdFByb3BlcnR5S2V5LFxuICAgICAgICBtYXRjaGVzOiBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICAgICAgdmFyIGsgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGsgPCBwYXR0ZXJuLmxlbmd0aCAmJiBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0dGVybltrXSA9PT0gc2VnbWVudHNbaV0gfHwgcGF0dGVybltrXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGF0dGVybltrXSAhPT0gJyoqJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGsgPT09IHBhdHRlcm4ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogUGFyc2VzIHRoZSBnaXZlbiB0ZXh0IGFuZCByZXR1cm5zIHRoZSBvYmplY3QgdGhlIEpTT04gY29udGVudCByZXByZXNlbnRzLiBPbiBpbnZhbGlkIGlucHV0LCB0aGUgcGFyc2VyIHRyaWVzIHRvIGJlIGFzIGZhdWx0IHRvbGVyYW50IGFzIHBvc3NpYmxlLCBidXQgc3RpbGwgcmV0dXJuIGEgcmVzdWx0LlxuICogVGhlcmVmb3JlIGFsd2F5cyBjaGVjayB0aGUgZXJyb3JzIGxpc3QgdG8gZmluZCBvdXQgaWYgdGhlIGlucHV0IHdhcyB2YWxpZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHRleHQsIGVycm9ycywgb3B0aW9ucykge1xuICAgIGlmIChlcnJvcnMgPT09IHZvaWQgMCkgeyBlcnJvcnMgPSBbXTsgfVxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IFBhcnNlT3B0aW9ucy5ERUZBVUxUOyB9XG4gICAgdmFyIGN1cnJlbnRQcm9wZXJ0eSA9IG51bGw7XG4gICAgdmFyIGN1cnJlbnRQYXJlbnQgPSBbXTtcbiAgICB2YXIgcHJldmlvdXNQYXJlbnRzID0gW107XG4gICAgZnVuY3Rpb24gb25WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50UGFyZW50KSkge1xuICAgICAgICAgICAgY3VycmVudFBhcmVudC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJyZW50UHJvcGVydHkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnRbY3VycmVudFByb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB2aXNpdG9yID0ge1xuICAgICAgICBvbk9iamVjdEJlZ2luOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgICAgICAgICBvblZhbHVlKG9iamVjdCk7XG4gICAgICAgICAgICBwcmV2aW91c1BhcmVudHMucHVzaChjdXJyZW50UGFyZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBvYmplY3Q7XG4gICAgICAgICAgICBjdXJyZW50UHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBvbk9iamVjdFByb3BlcnR5OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgY3VycmVudFByb3BlcnR5ID0gbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25PYmplY3RFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBwcmV2aW91c1BhcmVudHMucG9wKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQXJyYXlCZWdpbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgICAgICBvblZhbHVlKGFycmF5KTtcbiAgICAgICAgICAgIHByZXZpb3VzUGFyZW50cy5wdXNoKGN1cnJlbnRQYXJlbnQpO1xuICAgICAgICAgICAgY3VycmVudFBhcmVudCA9IGFycmF5O1xuICAgICAgICAgICAgY3VycmVudFByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgb25BcnJheUVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3VycmVudFBhcmVudCA9IHByZXZpb3VzUGFyZW50cy5wb3AoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25MaXRlcmFsVmFsdWU6IG9uVmFsdWUsXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvciwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKHsgZXJyb3I6IGVycm9yLCBvZmZzZXQ6IG9mZnNldCwgbGVuZ3RoOiBsZW5ndGggfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZpc2l0KHRleHQsIHZpc2l0b3IsIG9wdGlvbnMpO1xuICAgIHJldHVybiBjdXJyZW50UGFyZW50WzBdO1xufVxuLyoqXG4gKiBQYXJzZXMgdGhlIGdpdmVuIHRleHQgYW5kIHJldHVybnMgYSB0cmVlIHJlcHJlc2VudGF0aW9uIHRoZSBKU09OIGNvbnRlbnQuIE9uIGludmFsaWQgaW5wdXQsIHRoZSBwYXJzZXIgdHJpZXMgdG8gYmUgYXMgZmF1bHQgdG9sZXJhbnQgYXMgcG9zc2libGUsIGJ1dCBzdGlsbCByZXR1cm4gYSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyZWUodGV4dCwgZXJyb3JzLCBvcHRpb25zKSB7XG4gICAgaWYgKGVycm9ycyA9PT0gdm9pZCAwKSB7IGVycm9ycyA9IFtdOyB9XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gUGFyc2VPcHRpb25zLkRFRkFVTFQ7IH1cbiAgICB2YXIgY3VycmVudFBhcmVudCA9IHsgdHlwZTogJ2FycmF5Jywgb2Zmc2V0OiAtMSwgbGVuZ3RoOiAtMSwgY2hpbGRyZW46IFtdLCBwYXJlbnQ6IHZvaWQgMCB9OyAvLyBhcnRpZmljaWFsIHJvb3RcbiAgICBmdW5jdGlvbiBlbnN1cmVQcm9wZXJ0eUNvbXBsZXRlKGVuZE9mZnNldCkge1xuICAgICAgICBpZiAoY3VycmVudFBhcmVudC50eXBlID09PSAncHJvcGVydHknKSB7XG4gICAgICAgICAgICBjdXJyZW50UGFyZW50Lmxlbmd0aCA9IGVuZE9mZnNldCAtIGN1cnJlbnRQYXJlbnQub2Zmc2V0O1xuICAgICAgICAgICAgY3VycmVudFBhcmVudCA9IGN1cnJlbnRQYXJlbnQucGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uVmFsdWUodmFsdWVOb2RlKSB7XG4gICAgICAgIGN1cnJlbnRQYXJlbnQuY2hpbGRyZW4ucHVzaCh2YWx1ZU5vZGUpO1xuICAgICAgICByZXR1cm4gdmFsdWVOb2RlO1xuICAgIH1cbiAgICB2YXIgdmlzaXRvciA9IHtcbiAgICAgICAgb25PYmplY3RCZWdpbjogZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgY3VycmVudFBhcmVudCA9IG9uVmFsdWUoeyB0eXBlOiAnb2JqZWN0Jywgb2Zmc2V0OiBvZmZzZXQsIGxlbmd0aDogLTEsIHBhcmVudDogY3VycmVudFBhcmVudCwgY2hpbGRyZW46IFtdIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbk9iamVjdFByb3BlcnR5OiBmdW5jdGlvbiAobmFtZSwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBvblZhbHVlKHsgdHlwZTogJ3Byb3BlcnR5Jywgb2Zmc2V0OiBvZmZzZXQsIGxlbmd0aDogLTEsIHBhcmVudDogY3VycmVudFBhcmVudCwgY2hpbGRyZW46IFtdIH0pO1xuICAgICAgICAgICAgY3VycmVudFBhcmVudC5jaGlsZHJlbi5wdXNoKHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiBuYW1lLCBvZmZzZXQ6IG9mZnNldCwgbGVuZ3RoOiBsZW5ndGgsIHBhcmVudDogY3VycmVudFBhcmVudCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25PYmplY3RFbmQ6IGZ1bmN0aW9uIChvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgICAgICAgY3VycmVudFBhcmVudC5sZW5ndGggPSBvZmZzZXQgKyBsZW5ndGggLSBjdXJyZW50UGFyZW50Lm9mZnNldDtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBjdXJyZW50UGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgIGVuc3VyZVByb3BlcnR5Q29tcGxldGUob2Zmc2V0ICsgbGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25BcnJheUJlZ2luOiBmdW5jdGlvbiAob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQgPSBvblZhbHVlKHsgdHlwZTogJ2FycmF5Jywgb2Zmc2V0OiBvZmZzZXQsIGxlbmd0aDogLTEsIHBhcmVudDogY3VycmVudFBhcmVudCwgY2hpbGRyZW46IFtdIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkFycmF5RW5kOiBmdW5jdGlvbiAob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQubGVuZ3RoID0gb2Zmc2V0ICsgbGVuZ3RoIC0gY3VycmVudFBhcmVudC5vZmZzZXQ7XG4gICAgICAgICAgICBjdXJyZW50UGFyZW50ID0gY3VycmVudFBhcmVudC5wYXJlbnQ7XG4gICAgICAgICAgICBlbnN1cmVQcm9wZXJ0eUNvbXBsZXRlKG9mZnNldCArIGxlbmd0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uTGl0ZXJhbFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBvblZhbHVlKHsgdHlwZTogZ2V0TGl0ZXJhbE5vZGVUeXBlKHZhbHVlKSwgb2Zmc2V0OiBvZmZzZXQsIGxlbmd0aDogbGVuZ3RoLCBwYXJlbnQ6IGN1cnJlbnRQYXJlbnQsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIGVuc3VyZVByb3BlcnR5Q29tcGxldGUob2Zmc2V0ICsgbGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TZXBhcmF0b3I6IGZ1bmN0aW9uIChzZXAsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBhcmVudC50eXBlID09PSAncHJvcGVydHknKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlcCA9PT0gJzonKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXJlbnQuY29sb25PZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlcCA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuc3VyZVByb3BlcnR5Q29tcGxldGUob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvciwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKHsgZXJyb3I6IGVycm9yLCBvZmZzZXQ6IG9mZnNldCwgbGVuZ3RoOiBsZW5ndGggfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZpc2l0KHRleHQsIHZpc2l0b3IsIG9wdGlvbnMpO1xuICAgIHZhciByZXN1bHQgPSBjdXJyZW50UGFyZW50LmNoaWxkcmVuWzBdO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEZpbmRzIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBwYXRoIGluIGEgSlNPTiBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTm9kZUF0TG9jYXRpb24ocm9vdCwgcGF0aCkge1xuICAgIGlmICghcm9vdCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IHJvb3Q7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBwYXRoXzEgPSBwYXRoOyBfaSA8IHBhdGhfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSBwYXRoXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHNlZ21lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnb2JqZWN0JyB8fCAhQXJyYXkuaXNBcnJheShub2RlLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgX2IgPSBub2RlLmNoaWxkcmVuOyBfYSA8IF9iLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eU5vZGUgPSBfYltfYV07XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydHlOb2RlLmNoaWxkcmVuKSAmJiBwcm9wZXJ0eU5vZGUuY2hpbGRyZW5bMF0udmFsdWUgPT09IHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZS5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHNlZ21lbnQ7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnYXJyYXknIHx8IGluZGV4IDwgMCB8fCAhQXJyYXkuaXNBcnJheShub2RlLmNoaWxkcmVuKSB8fCBpbmRleCA+PSBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltpbmRleF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG4vKipcbiAqIEdldHMgdGhlIEpTT04gcGF0aCBvZiB0aGUgZ2l2ZW4gSlNPTiBET00gbm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZVBhdGgobm9kZSkge1xuICAgIGlmICghbm9kZS5wYXJlbnQgfHwgIW5vZGUucGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIHBhdGggPSBnZXROb2RlUGF0aChub2RlLnBhcmVudCk7XG4gICAgaWYgKG5vZGUucGFyZW50LnR5cGUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgdmFyIGtleSA9IG5vZGUucGFyZW50LmNoaWxkcmVuWzBdLnZhbHVlO1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICB2YXIgaW5kZXggPSBub2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBwYXRoLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBFdmFsdWF0ZXMgdGhlIEphdmFTY3JpcHQgb2JqZWN0IG9mIHRoZSBnaXZlbiBKU09OIERPTSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlVmFsdWUobm9kZSkge1xuICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIHJldHVybiBub2RlLmNoaWxkcmVuLm1hcChnZXROb2RlVmFsdWUpO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgdmFyIG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gbm9kZS5jaGlsZHJlbjsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVOb2RlID0gcHJvcC5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtwcm9wLmNoaWxkcmVuWzBdLnZhbHVlXSA9IGdldE5vZGVWYWx1ZSh2YWx1ZU5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIGNhc2UgJ251bGwnOlxuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgIHJldHVybiBub2RlLnZhbHVlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMobm9kZSwgb2Zmc2V0LCBpbmNsdWRlUmlnaHRCb3VuZCkge1xuICAgIGlmIChpbmNsdWRlUmlnaHRCb3VuZCA9PT0gdm9pZCAwKSB7IGluY2x1ZGVSaWdodEJvdW5kID0gZmFsc2U7IH1cbiAgICByZXR1cm4gKG9mZnNldCA+PSBub2RlLm9mZnNldCAmJiBvZmZzZXQgPCAobm9kZS5vZmZzZXQgKyBub2RlLmxlbmd0aCkpIHx8IGluY2x1ZGVSaWdodEJvdW5kICYmIChvZmZzZXQgPT09IChub2RlLm9mZnNldCArIG5vZGUubGVuZ3RoKSk7XG59XG4vKipcbiAqIEZpbmRzIHRoZSBtb3N0IGlubmVyIG5vZGUgYXQgdGhlIGdpdmVuIG9mZnNldC4gSWYgaW5jbHVkZVJpZ2h0Qm91bmQgaXMgc2V0LCBhbHNvIGZpbmRzIG5vZGVzIHRoYXQgZW5kIGF0IHRoZSBnaXZlbiBvZmZzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTm9kZUF0T2Zmc2V0KG5vZGUsIG9mZnNldCwgaW5jbHVkZVJpZ2h0Qm91bmQpIHtcbiAgICBpZiAoaW5jbHVkZVJpZ2h0Qm91bmQgPT09IHZvaWQgMCkgeyBpbmNsdWRlUmlnaHRCb3VuZCA9IGZhbHNlOyB9XG4gICAgaWYgKGNvbnRhaW5zKG5vZGUsIG9mZnNldCwgaW5jbHVkZVJpZ2h0Qm91bmQpKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGggJiYgY2hpbGRyZW5baV0ub2Zmc2V0IDw9IG9mZnNldDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBmaW5kTm9kZUF0T2Zmc2V0KGNoaWxkcmVuW2ldLCBvZmZzZXQsIGluY2x1ZGVSaWdodEJvdW5kKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiB2b2lkIDA7XG59XG4vKipcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gdGV4dCBhbmQgaW52b2tlcyB0aGUgdmlzaXRvciBmdW5jdGlvbnMgZm9yIGVhY2ggb2JqZWN0LCBhcnJheSBhbmQgbGl0ZXJhbCByZWFjaGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlzaXQodGV4dCwgdmlzaXRvciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IFBhcnNlT3B0aW9ucy5ERUZBVUxUOyB9XG4gICAgdmFyIF9zY2FubmVyID0gY3JlYXRlU2Nhbm5lcih0ZXh0LCBmYWxzZSk7XG4gICAgZnVuY3Rpb24gdG9Ob0FyZ1Zpc2l0KHZpc2l0RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0RnVuY3Rpb24gPyBmdW5jdGlvbiAoKSB7IHJldHVybiB2aXNpdEZ1bmN0aW9uKF9zY2FubmVyLmdldFRva2VuT2Zmc2V0KCksIF9zY2FubmVyLmdldFRva2VuTGVuZ3RoKCksIF9zY2FubmVyLmdldFRva2VuU3RhcnRMaW5lKCksIF9zY2FubmVyLmdldFRva2VuU3RhcnRDaGFyYWN0ZXIoKSk7IH0gOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b09uZUFyZ1Zpc2l0KHZpc2l0RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0RnVuY3Rpb24gPyBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiB2aXNpdEZ1bmN0aW9uKGFyZywgX3NjYW5uZXIuZ2V0VG9rZW5PZmZzZXQoKSwgX3NjYW5uZXIuZ2V0VG9rZW5MZW5ndGgoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydExpbmUoKSwgX3NjYW5uZXIuZ2V0VG9rZW5TdGFydENoYXJhY3RlcigpKTsgfSA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH07XG4gICAgfVxuICAgIHZhciBvbk9iamVjdEJlZ2luID0gdG9Ob0FyZ1Zpc2l0KHZpc2l0b3Iub25PYmplY3RCZWdpbiksIG9uT2JqZWN0UHJvcGVydHkgPSB0b09uZUFyZ1Zpc2l0KHZpc2l0b3Iub25PYmplY3RQcm9wZXJ0eSksIG9uT2JqZWN0RW5kID0gdG9Ob0FyZ1Zpc2l0KHZpc2l0b3Iub25PYmplY3RFbmQpLCBvbkFycmF5QmVnaW4gPSB0b05vQXJnVmlzaXQodmlzaXRvci5vbkFycmF5QmVnaW4pLCBvbkFycmF5RW5kID0gdG9Ob0FyZ1Zpc2l0KHZpc2l0b3Iub25BcnJheUVuZCksIG9uTGl0ZXJhbFZhbHVlID0gdG9PbmVBcmdWaXNpdCh2aXNpdG9yLm9uTGl0ZXJhbFZhbHVlKSwgb25TZXBhcmF0b3IgPSB0b09uZUFyZ1Zpc2l0KHZpc2l0b3Iub25TZXBhcmF0b3IpLCBvbkNvbW1lbnQgPSB0b05vQXJnVmlzaXQodmlzaXRvci5vbkNvbW1lbnQpLCBvbkVycm9yID0gdG9PbmVBcmdWaXNpdCh2aXNpdG9yLm9uRXJyb3IpO1xuICAgIHZhciBkaXNhbGxvd0NvbW1lbnRzID0gb3B0aW9ucyAmJiBvcHRpb25zLmRpc2FsbG93Q29tbWVudHM7XG4gICAgdmFyIGFsbG93VHJhaWxpbmdDb21tYSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5hbGxvd1RyYWlsaW5nQ29tbWE7XG4gICAgZnVuY3Rpb24gc2Nhbk5leHQoKSB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBfc2Nhbm5lci5zY2FuKCk7XG4gICAgICAgICAgICBzd2l0Y2ggKF9zY2FubmVyLmdldFRva2VuRXJyb3IoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgNCAvKiBJbnZhbGlkVW5pY29kZSAqLzpcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoMTQgLyogSW52YWxpZFVuaWNvZGUgKi8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDUgLyogSW52YWxpZEVzY2FwZUNoYXJhY3RlciAqLzpcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoMTUgLyogSW52YWxpZEVzY2FwZUNoYXJhY3RlciAqLyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBVbmV4cGVjdGVkRW5kT2ZOdW1iZXIgKi86XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDEzIC8qIFVuZXhwZWN0ZWRFbmRPZk51bWJlciAqLyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMSAvKiBVbmV4cGVjdGVkRW5kT2ZDb21tZW50ICovOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc2FsbG93Q29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDExIC8qIFVuZXhwZWN0ZWRFbmRPZkNvbW1lbnQgKi8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBVbmV4cGVjdGVkRW5kT2ZTdHJpbmcgKi86XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDEyIC8qIFVuZXhwZWN0ZWRFbmRPZlN0cmluZyAqLyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNiAvKiBJbnZhbGlkQ2hhcmFjdGVyICovOlxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcigxNiAvKiBJbnZhbGlkQ2hhcmFjdGVyICovKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMiAvKiBMaW5lQ29tbWVudFRyaXZpYSAqLzpcbiAgICAgICAgICAgICAgICBjYXNlIDEzIC8qIEJsb2NrQ29tbWVudFRyaXZpYSAqLzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc2FsbG93Q29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDEwIC8qIEludmFsaWRDb21tZW50VG9rZW4gKi8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Db21tZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxNiAvKiBVbmtub3duICovOlxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcigxIC8qIEludmFsaWRTeW1ib2wgKi8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE1IC8qIFRyaXZpYSAqLzpcbiAgICAgICAgICAgICAgICBjYXNlIDE0IC8qIExpbmVCcmVha1RyaXZpYSAqLzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yLCBza2lwVW50aWxBZnRlciwgc2tpcFVudGlsKSB7XG4gICAgICAgIGlmIChza2lwVW50aWxBZnRlciA9PT0gdm9pZCAwKSB7IHNraXBVbnRpbEFmdGVyID0gW107IH1cbiAgICAgICAgaWYgKHNraXBVbnRpbCA9PT0gdm9pZCAwKSB7IHNraXBVbnRpbCA9IFtdOyB9XG4gICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAoc2tpcFVudGlsQWZ0ZXIubGVuZ3RoICsgc2tpcFVudGlsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IF9zY2FubmVyLmdldFRva2VuKCk7XG4gICAgICAgICAgICB3aGlsZSAodG9rZW4gIT09IDE3IC8qIEVPRiAqLykge1xuICAgICAgICAgICAgICAgIGlmIChza2lwVW50aWxBZnRlci5pbmRleE9mKHRva2VuKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nhbk5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNraXBVbnRpbC5pbmRleE9mKHRva2VuKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRva2VuID0gc2Nhbk5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZVN0cmluZyhpc1ZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IF9zY2FubmVyLmdldFRva2VuVmFsdWUoKTtcbiAgICAgICAgaWYgKGlzVmFsdWUpIHtcbiAgICAgICAgICAgIG9uTGl0ZXJhbFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9uT2JqZWN0UHJvcGVydHkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHNjYW5OZXh0KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZUxpdGVyYWwoKSB7XG4gICAgICAgIHN3aXRjaCAoX3NjYW5uZXIuZ2V0VG9rZW4oKSkge1xuICAgICAgICAgICAgY2FzZSAxMSAvKiBOdW1lcmljTGl0ZXJhbCAqLzpcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZShfc2Nhbm5lci5nZXRUb2tlblZhbHVlKCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoMiAvKiBJbnZhbGlkTnVtYmVyRm9ybWF0ICovKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcigyIC8qIEludmFsaWROdW1iZXJGb3JtYXQgKi8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkxpdGVyYWxWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDcgLyogTnVsbEtleXdvcmQgKi86XG4gICAgICAgICAgICAgICAgb25MaXRlcmFsVmFsdWUobnVsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDggLyogVHJ1ZUtleXdvcmQgKi86XG4gICAgICAgICAgICAgICAgb25MaXRlcmFsVmFsdWUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkgLyogRmFsc2VLZXl3b3JkICovOlxuICAgICAgICAgICAgICAgIG9uTGl0ZXJhbFZhbHVlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNjYW5OZXh0KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZVByb3BlcnR5KCkge1xuICAgICAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSAhPT0gMTAgLyogU3RyaW5nTGl0ZXJhbCAqLykge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoMyAvKiBQcm9wZXJ0eU5hbWVFeHBlY3RlZCAqLywgW10sIFsyIC8qIENsb3NlQnJhY2VUb2tlbiAqLywgNSAvKiBDb21tYVRva2VuICovXSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VTdHJpbmcoZmFsc2UpO1xuICAgICAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSA9PT0gNiAvKiBDb2xvblRva2VuICovKSB7XG4gICAgICAgICAgICBvblNlcGFyYXRvcignOicpO1xuICAgICAgICAgICAgc2Nhbk5leHQoKTsgLy8gY29uc3VtZSBjb2xvblxuICAgICAgICAgICAgaWYgKCFwYXJzZVZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcig0IC8qIFZhbHVlRXhwZWN0ZWQgKi8sIFtdLCBbMiAvKiBDbG9zZUJyYWNlVG9rZW4gKi8sIDUgLyogQ29tbWFUb2tlbiAqL10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoNSAvKiBDb2xvbkV4cGVjdGVkICovLCBbXSwgWzIgLyogQ2xvc2VCcmFjZVRva2VuICovLCA1IC8qIENvbW1hVG9rZW4gKi9dKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VPYmplY3QoKSB7XG4gICAgICAgIG9uT2JqZWN0QmVnaW4oKTtcbiAgICAgICAgc2Nhbk5leHQoKTsgLy8gY29uc3VtZSBvcGVuIGJyYWNlXG4gICAgICAgIHZhciBuZWVkc0NvbW1hID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChfc2Nhbm5lci5nZXRUb2tlbigpICE9PSAyIC8qIENsb3NlQnJhY2VUb2tlbiAqLyAmJiBfc2Nhbm5lci5nZXRUb2tlbigpICE9PSAxNyAvKiBFT0YgKi8pIHtcbiAgICAgICAgICAgIGlmIChfc2Nhbm5lci5nZXRUb2tlbigpID09PSA1IC8qIENvbW1hVG9rZW4gKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5lZWRzQ29tbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoNCAvKiBWYWx1ZUV4cGVjdGVkICovLCBbXSwgW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvblNlcGFyYXRvcignLCcpO1xuICAgICAgICAgICAgICAgIHNjYW5OZXh0KCk7IC8vIGNvbnN1bWUgY29tbWFcbiAgICAgICAgICAgICAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSA9PT0gMiAvKiBDbG9zZUJyYWNlVG9rZW4gKi8gJiYgYWxsb3dUcmFpbGluZ0NvbW1hKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5lZWRzQ29tbWEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcig2IC8qIENvbW1hRXhwZWN0ZWQgKi8sIFtdLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBhcnNlUHJvcGVydHkoKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDQgLyogVmFsdWVFeHBlY3RlZCAqLywgW10sIFsyIC8qIENsb3NlQnJhY2VUb2tlbiAqLywgNSAvKiBDb21tYVRva2VuICovXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZWVkc0NvbW1hID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBvbk9iamVjdEVuZCgpO1xuICAgICAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSAhPT0gMiAvKiBDbG9zZUJyYWNlVG9rZW4gKi8pIHtcbiAgICAgICAgICAgIGhhbmRsZUVycm9yKDcgLyogQ2xvc2VCcmFjZUV4cGVjdGVkICovLCBbMiAvKiBDbG9zZUJyYWNlVG9rZW4gKi9dLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY2FuTmV4dCgpOyAvLyBjb25zdW1lIGNsb3NlIGJyYWNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlQXJyYXkoKSB7XG4gICAgICAgIG9uQXJyYXlCZWdpbigpO1xuICAgICAgICBzY2FuTmV4dCgpOyAvLyBjb25zdW1lIG9wZW4gYnJhY2tldFxuICAgICAgICB2YXIgbmVlZHNDb21tYSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoX3NjYW5uZXIuZ2V0VG9rZW4oKSAhPT0gNCAvKiBDbG9zZUJyYWNrZXRUb2tlbiAqLyAmJiBfc2Nhbm5lci5nZXRUb2tlbigpICE9PSAxNyAvKiBFT0YgKi8pIHtcbiAgICAgICAgICAgIGlmIChfc2Nhbm5lci5nZXRUb2tlbigpID09PSA1IC8qIENvbW1hVG9rZW4gKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5lZWRzQ29tbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoNCAvKiBWYWx1ZUV4cGVjdGVkICovLCBbXSwgW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvblNlcGFyYXRvcignLCcpO1xuICAgICAgICAgICAgICAgIHNjYW5OZXh0KCk7IC8vIGNvbnN1bWUgY29tbWFcbiAgICAgICAgICAgICAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSA9PT0gNCAvKiBDbG9zZUJyYWNrZXRUb2tlbiAqLyAmJiBhbGxvd1RyYWlsaW5nQ29tbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmVlZHNDb21tYSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKDYgLyogQ29tbWFFeHBlY3RlZCAqLywgW10sIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGFyc2VWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoNCAvKiBWYWx1ZUV4cGVjdGVkICovLCBbXSwgWzQgLyogQ2xvc2VCcmFja2V0VG9rZW4gKi8sIDUgLyogQ29tbWFUb2tlbiAqL10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmVlZHNDb21tYSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgb25BcnJheUVuZCgpO1xuICAgICAgICBpZiAoX3NjYW5uZXIuZ2V0VG9rZW4oKSAhPT0gNCAvKiBDbG9zZUJyYWNrZXRUb2tlbiAqLykge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoOCAvKiBDbG9zZUJyYWNrZXRFeHBlY3RlZCAqLywgWzQgLyogQ2xvc2VCcmFja2V0VG9rZW4gKi9dLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY2FuTmV4dCgpOyAvLyBjb25zdW1lIGNsb3NlIGJyYWNrZXRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VWYWx1ZSgpIHtcbiAgICAgICAgc3dpdGNoIChfc2Nhbm5lci5nZXRUb2tlbigpKSB7XG4gICAgICAgICAgICBjYXNlIDMgLyogT3BlbkJyYWNrZXRUb2tlbiAqLzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VBcnJheSgpO1xuICAgICAgICAgICAgY2FzZSAxIC8qIE9wZW5CcmFjZVRva2VuICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZU9iamVjdCgpO1xuICAgICAgICAgICAgY2FzZSAxMCAvKiBTdHJpbmdMaXRlcmFsICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZVN0cmluZyh0cnVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlTGl0ZXJhbCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNjYW5OZXh0KCk7XG4gICAgaWYgKF9zY2FubmVyLmdldFRva2VuKCkgPT09IDE3IC8qIEVPRiAqLykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwYXJzZVZhbHVlKCkpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoNCAvKiBWYWx1ZUV4cGVjdGVkICovLCBbXSwgW10pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChfc2Nhbm5lci5nZXRUb2tlbigpICE9PSAxNyAvKiBFT0YgKi8pIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoOSAvKiBFbmRPZkZpbGVFeHBlY3RlZCAqLywgW10sIFtdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIFRha2VzIEpTT04gd2l0aCBKYXZhU2NyaXB0LXN0eWxlIGNvbW1lbnRzIGFuZCByZW1vdmVcbiAqIHRoZW0uIE9wdGlvbmFsbHkgcmVwbGFjZXMgZXZlcnkgbm9uZS1uZXdsaW5lIGNoYXJhY3RlclxuICogb2YgY29tbWVudHMgd2l0aCBhIHJlcGxhY2VDaGFyYWN0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwQ29tbWVudHModGV4dCwgcmVwbGFjZUNoKSB7XG4gICAgdmFyIF9zY2FubmVyID0gY3JlYXRlU2Nhbm5lcih0ZXh0KSwgcGFydHMgPSBbXSwga2luZCwgb2Zmc2V0ID0gMCwgcG9zO1xuICAgIGRvIHtcbiAgICAgICAgcG9zID0gX3NjYW5uZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAga2luZCA9IF9zY2FubmVyLnNjYW4oKTtcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlIDEyIC8qIExpbmVDb21tZW50VHJpdmlhICovOlxuICAgICAgICAgICAgY2FzZSAxMyAvKiBCbG9ja0NvbW1lbnRUcml2aWEgKi86XG4gICAgICAgICAgICBjYXNlIDE3IC8qIEVPRiAqLzpcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9PSBwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh0ZXh0LnN1YnN0cmluZyhvZmZzZXQsIHBvcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZUNoICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaChfc2Nhbm5lci5nZXRUb2tlblZhbHVlKCkucmVwbGFjZSgvW15cXHJcXG5dL2csIHJlcGxhY2VDaCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBfc2Nhbm5lci5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoa2luZCAhPT0gMTcgLyogRU9GICovKTtcbiAgICByZXR1cm4gcGFydHMuam9pbignJyk7XG59XG5mdW5jdGlvbiBnZXRMaXRlcmFsTm9kZVR5cGUodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdib29sZWFuJzogcmV0dXJuICdib29sZWFuJztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzogcmV0dXJuICdudW1iZXInO1xuICAgICAgICBjYXNlICdzdHJpbmcnOiByZXR1cm4gJ3N0cmluZyc7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAnbnVsbCc7XG4gICAgfVxufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG4vKipcbiAqIENyZWF0ZXMgYSBKU09OIHNjYW5uZXIgb24gdGhlIGdpdmVuIHRleHQuXG4gKiBJZiBpZ25vcmVUcml2aWEgaXMgc2V0LCB3aGl0ZXNwYWNlcyBvciBjb21tZW50cyBhcmUgaWdub3JlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNjYW5uZXIodGV4dCwgaWdub3JlVHJpdmlhKSB7XG4gICAgaWYgKGlnbm9yZVRyaXZpYSA9PT0gdm9pZCAwKSB7IGlnbm9yZVRyaXZpYSA9IGZhbHNlOyB9XG4gICAgdmFyIHBvcyA9IDAsIGxlbiA9IHRleHQubGVuZ3RoLCB2YWx1ZSA9ICcnLCB0b2tlbk9mZnNldCA9IDAsIHRva2VuID0gMTYgLyogVW5rbm93biAqLywgbGluZU51bWJlciA9IDAsIGxpbmVTdGFydE9mZnNldCA9IDAsIHRva2VuTGluZVN0YXJ0T2Zmc2V0ID0gMCwgcHJldlRva2VuTGluZVN0YXJ0T2Zmc2V0ID0gMCwgc2NhbkVycm9yID0gMCAvKiBOb25lICovO1xuICAgIGZ1bmN0aW9uIHNjYW5IZXhEaWdpdHMoY291bnQsIGV4YWN0KSB7XG4gICAgICAgIHZhciBkaWdpdHMgPSAwO1xuICAgICAgICB2YXIgdmFsdWUgPSAwO1xuICAgICAgICB3aGlsZSAoZGlnaXRzIDwgY291bnQgfHwgIWV4YWN0KSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgICAgIGlmIChjaCA+PSA0OCAvKiBfMCAqLyAmJiBjaCA8PSA1NyAvKiBfOSAqLykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxNiArIGNoIC0gNDggLyogXzAgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA+PSA2NSAvKiBBICovICYmIGNoIDw9IDcwIC8qIEYgKi8pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTYgKyBjaCAtIDY1IC8qIEEgKi8gKyAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID49IDk3IC8qIGEgKi8gJiYgY2ggPD0gMTAyIC8qIGYgKi8pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTYgKyBjaCAtIDk3IC8qIGEgKi8gKyAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICBkaWdpdHMrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlnaXRzIDwgY291bnQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRQb3NpdGlvbihuZXdQb3NpdGlvbikge1xuICAgICAgICBwb3MgPSBuZXdQb3NpdGlvbjtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgdG9rZW5PZmZzZXQgPSAwO1xuICAgICAgICB0b2tlbiA9IDE2IC8qIFVua25vd24gKi87XG4gICAgICAgIHNjYW5FcnJvciA9IDAgLyogTm9uZSAqLztcbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nhbk51bWJlcigpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gcG9zO1xuICAgICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KHBvcykgPT09IDQ4IC8qIF8wICovKSB7XG4gICAgICAgICAgICBwb3MrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgd2hpbGUgKHBvcyA8IHRleHQubGVuZ3RoICYmIGlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoICYmIHRleHQuY2hhckNvZGVBdChwb3MpID09PSA0NiAvKiBkb3QgKi8pIHtcbiAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoICYmIGlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBvcyA8IHRleHQubGVuZ3RoICYmIGlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjYW5FcnJvciA9IDMgLyogVW5leHBlY3RlZEVuZE9mTnVtYmVyICovO1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyhzdGFydCwgcG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZW5kID0gcG9zO1xuICAgICAgICBpZiAocG9zIDwgdGV4dC5sZW5ndGggJiYgKHRleHQuY2hhckNvZGVBdChwb3MpID09PSA2OSAvKiBFICovIHx8IHRleHQuY2hhckNvZGVBdChwb3MpID09PSAxMDEgLyogZSAqLykpIHtcbiAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoICYmIHRleHQuY2hhckNvZGVBdChwb3MpID09PSA0MyAvKiBwbHVzICovIHx8IHRleHQuY2hhckNvZGVBdChwb3MpID09PSA0NSAvKiBtaW51cyAqLykge1xuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoICYmIGlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBvcyA8IHRleHQubGVuZ3RoICYmIGlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmQgPSBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2FuRXJyb3IgPSAzIC8qIFVuZXhwZWN0ZWRFbmRPZk51bWJlciAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjYW5TdHJpbmcoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJywgc3RhcnQgPSBwb3M7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAocG9zID49IGxlbikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhzdGFydCwgcG9zKTtcbiAgICAgICAgICAgICAgICBzY2FuRXJyb3IgPSAyIC8qIFVuZXhwZWN0ZWRFbmRPZlN0cmluZyAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaCA9IHRleHQuY2hhckNvZGVBdChwb3MpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAzNCAvKiBkb3VibGVRdW90ZSAqLykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhzdGFydCwgcG9zKTtcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaCA9PT0gOTIgLyogYmFja3NsYXNoICovKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCBwb3MpO1xuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIGlmIChwb3MgPj0gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjYW5FcnJvciA9IDIgLyogVW5leHBlY3RlZEVuZE9mU3RyaW5nICovO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2ggPSB0ZXh0LmNoYXJDb2RlQXQocG9zKyspO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzNCAvKiBkb3VibGVRdW90ZSAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXFxcIic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MiAvKiBiYWNrc2xhc2ggKi86XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1xcXFwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDcgLyogc2xhc2ggKi86XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJy8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTggLyogYiAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXFxiJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMiAvKiBmICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcXGYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTEwIC8qIG4gKi86XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1xcbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTQgLyogciAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXFxyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExNiAvKiB0ICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcXHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE3IC8qIHUgKi86XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hfMSA9IHNjYW5IZXhEaWdpdHMoNCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hfMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FuRXJyb3IgPSA0IC8qIEludmFsaWRVbmljb2RlICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FuRXJyb3IgPSA1IC8qIEludmFsaWRFc2NhcGVDaGFyYWN0ZXIgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gcG9zO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoID49IDAgJiYgY2ggPD0gMHgxZikge1xuICAgICAgICAgICAgICAgIGlmIChpc0xpbmVCcmVhayhjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICBzY2FuRXJyb3IgPSAyIC8qIFVuZXhwZWN0ZWRFbmRPZlN0cmluZyAqLztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzY2FuRXJyb3IgPSA2IC8qIEludmFsaWRDaGFyYWN0ZXIgKi87XG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgYXMgZXJyb3IgYnV0IGNvbnRpbnVlIHdpdGggc3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nhbk5leHQoKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIHNjYW5FcnJvciA9IDAgLyogTm9uZSAqLztcbiAgICAgICAgdG9rZW5PZmZzZXQgPSBwb3M7XG4gICAgICAgIGxpbmVTdGFydE9mZnNldCA9IGxpbmVOdW1iZXI7XG4gICAgICAgIHByZXZUb2tlbkxpbmVTdGFydE9mZnNldCA9IHRva2VuTGluZVN0YXJ0T2Zmc2V0O1xuICAgICAgICBpZiAocG9zID49IGxlbikge1xuICAgICAgICAgICAgLy8gYXQgdGhlIGVuZFxuICAgICAgICAgICAgdG9rZW5PZmZzZXQgPSBsZW47XG4gICAgICAgICAgICByZXR1cm4gdG9rZW4gPSAxNyAvKiBFT0YgKi87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvZGUgPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgLy8gdHJpdmlhOiB3aGl0ZXNwYWNlXG4gICAgICAgIGlmIChpc1doaXRlU3BhY2UoY29kZSkpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICAgICAgICAgIGNvZGUgPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKGlzV2hpdGVTcGFjZShjb2RlKSk7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW4gPSAxNSAvKiBUcml2aWEgKi87XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHJpdmlhOiBuZXdsaW5lc1xuICAgICAgICBpZiAoaXNMaW5lQnJlYWsoY29kZSkpIHtcbiAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgdmFsdWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAxMyAvKiBjYXJyaWFnZVJldHVybiAqLyAmJiB0ZXh0LmNoYXJDb2RlQXQocG9zKSA9PT0gMTAgLyogbGluZUZlZWQgKi8pIHtcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSAnXFxuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmVOdW1iZXIrKztcbiAgICAgICAgICAgIHRva2VuTGluZVN0YXJ0T2Zmc2V0ID0gcG9zO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gMTQgLyogTGluZUJyZWFrVHJpdmlhICovO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAgICAgLy8gdG9rZW5zOiBbXXt9OixcbiAgICAgICAgICAgIGNhc2UgMTIzIC8qIG9wZW5CcmFjZSAqLzpcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW4gPSAxIC8qIE9wZW5CcmFjZVRva2VuICovO1xuICAgICAgICAgICAgY2FzZSAxMjUgLyogY2xvc2VCcmFjZSAqLzpcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW4gPSAyIC8qIENsb3NlQnJhY2VUb2tlbiAqLztcbiAgICAgICAgICAgIGNhc2UgOTEgLyogb3BlbkJyYWNrZXQgKi86XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gMyAvKiBPcGVuQnJhY2tldFRva2VuICovO1xuICAgICAgICAgICAgY2FzZSA5MyAvKiBjbG9zZUJyYWNrZXQgKi86XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gNCAvKiBDbG9zZUJyYWNrZXRUb2tlbiAqLztcbiAgICAgICAgICAgIGNhc2UgNTggLyogY29sb24gKi86XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gNiAvKiBDb2xvblRva2VuICovO1xuICAgICAgICAgICAgY2FzZSA0NCAvKiBjb21tYSAqLzpcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW4gPSA1IC8qIENvbW1hVG9rZW4gKi87XG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBjYXNlIDM0IC8qIGRvdWJsZVF1b3RlICovOlxuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc2NhblN0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDEwIC8qIFN0cmluZ0xpdGVyYWwgKi87XG4gICAgICAgICAgICAvLyBjb21tZW50c1xuICAgICAgICAgICAgY2FzZSA0NyAvKiBzbGFzaCAqLzpcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBwb3MgLSAxO1xuICAgICAgICAgICAgICAgIC8vIFNpbmdsZS1saW5lIGNvbW1lbnRcbiAgICAgICAgICAgICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KHBvcyArIDEpID09PSA0NyAvKiBzbGFzaCAqLykge1xuICAgICAgICAgICAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHBvcyA8IGxlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGluZUJyZWFrKHRleHQuY2hhckNvZGVBdChwb3MpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0ZXh0LnN1YnN0cmluZyhzdGFydCwgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gMTIgLyogTGluZUNvbW1lbnRUcml2aWEgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE11bHRpLWxpbmUgY29tbWVudFxuICAgICAgICAgICAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDQyIC8qIGFzdGVyaXNrICovKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcyArPSAyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2FmZUxlbmd0aCA9IGxlbiAtIDE7IC8vIEZvciBsb29rYWhlYWQuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21tZW50Q2xvc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwb3MgPCBzYWZlTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2ggPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gNDIgLyogYXN0ZXJpc2sgKi8gJiYgdGV4dC5jaGFyQ29kZUF0KHBvcyArIDEpID09PSA0NyAvKiBzbGFzaCAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMaW5lQnJlYWsoY2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoID09PSAxMyAvKiBjYXJyaWFnZVJldHVybiAqLyAmJiB0ZXh0LmNoYXJDb2RlQXQocG9zKSA9PT0gMTAgLyogbGluZUZlZWQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkxpbmVTdGFydE9mZnNldCA9IHBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbW1lbnRDbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbkVycm9yID0gMSAvKiBVbmV4cGVjdGVkRW5kT2ZDb21tZW50ICovO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGV4dC5zdWJzdHJpbmcoc3RhcnQsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDEzIC8qIEJsb2NrQ29tbWVudFRyaXZpYSAqLztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8ganVzdCBhIHNpbmdsZSBzbGFzaFxuICAgICAgICAgICAgICAgIHZhbHVlICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuID0gMTYgLyogVW5rbm93biAqLztcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIGNhc2UgNDUgLyogbWludXMgKi86XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgICAgICBwb3MrKztcbiAgICAgICAgICAgICAgICBpZiAocG9zID09PSBsZW4gfHwgIWlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDE2IC8qIFVua25vd24gKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZm91bmQgYSBtaW51cywgZm9sbG93ZWQgYnkgYSBudW1iZXIgc29cbiAgICAgICAgICAgIC8vIHdlIGZhbGwgdGhyb3VnaCB0byBwcm9jZWVkIHdpdGggc2Nhbm5pbmdcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIGNhc2UgNDggLyogXzAgKi86XG4gICAgICAgICAgICBjYXNlIDQ5IC8qIF8xICovOlxuICAgICAgICAgICAgY2FzZSA1MCAvKiBfMiAqLzpcbiAgICAgICAgICAgIGNhc2UgNTEgLyogXzMgKi86XG4gICAgICAgICAgICBjYXNlIDUyIC8qIF80ICovOlxuICAgICAgICAgICAgY2FzZSA1MyAvKiBfNSAqLzpcbiAgICAgICAgICAgIGNhc2UgNTQgLyogXzYgKi86XG4gICAgICAgICAgICBjYXNlIDU1IC8qIF83ICovOlxuICAgICAgICAgICAgY2FzZSA1NiAvKiBfOCAqLzpcbiAgICAgICAgICAgIGNhc2UgNTcgLyogXzkgKi86XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gc2Nhbk51bWJlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDExIC8qIE51bWVyaWNMaXRlcmFsICovO1xuICAgICAgICAgICAgLy8gbGl0ZXJhbHMgYW5kIHVua25vd24gc3ltYm9sc1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBpcyBhIGxpdGVyYWw/IFJlYWQgdGhlIGZ1bGwgd29yZC5cbiAgICAgICAgICAgICAgICB3aGlsZSAocG9zIDwgbGVuICYmIGlzVW5rbm93bkNvbnRlbnRDaGFyYWN0ZXIoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuT2Zmc2V0ICE9PSBwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0ZXh0LnN1YnN0cmluZyh0b2tlbk9mZnNldCwgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgLy8ga2V5d29yZHM6IHRydWUsIGZhbHNlLCBudWxsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RydWUnOiByZXR1cm4gdG9rZW4gPSA4IC8qIFRydWVLZXl3b3JkICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gdG9rZW4gPSA5IC8qIEZhbHNlS2V5d29yZCAqLztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ251bGwnOiByZXR1cm4gdG9rZW4gPSA3IC8qIE51bGxLZXl3b3JkICovO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDE2IC8qIFVua25vd24gKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbiA9IDE2IC8qIFVua25vd24gKi87XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNVbmtub3duQ29udGVudENoYXJhY3Rlcihjb2RlKSB7XG4gICAgICAgIGlmIChpc1doaXRlU3BhY2UoY29kZSkgfHwgaXNMaW5lQnJlYWsoY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTI1IC8qIGNsb3NlQnJhY2UgKi86XG4gICAgICAgICAgICBjYXNlIDkzIC8qIGNsb3NlQnJhY2tldCAqLzpcbiAgICAgICAgICAgIGNhc2UgMTIzIC8qIG9wZW5CcmFjZSAqLzpcbiAgICAgICAgICAgIGNhc2UgOTEgLyogb3BlbkJyYWNrZXQgKi86XG4gICAgICAgICAgICBjYXNlIDM0IC8qIGRvdWJsZVF1b3RlICovOlxuICAgICAgICAgICAgY2FzZSA1OCAvKiBjb2xvbiAqLzpcbiAgICAgICAgICAgIGNhc2UgNDQgLyogY29tbWEgKi86XG4gICAgICAgICAgICBjYXNlIDQ3IC8qIHNsYXNoICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nhbk5leHROb25Ucml2aWEoKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHNjYW5OZXh0KCk7XG4gICAgICAgIH0gd2hpbGUgKHJlc3VsdCA+PSAxMiAvKiBMaW5lQ29tbWVudFRyaXZpYSAqLyAmJiByZXN1bHQgPD0gMTUgLyogVHJpdmlhICovKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UG9zaXRpb246IHNldFBvc2l0aW9uLFxuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9zOyB9LFxuICAgICAgICBzY2FuOiBpZ25vcmVUcml2aWEgPyBzY2FuTmV4dE5vblRyaXZpYSA6IHNjYW5OZXh0LFxuICAgICAgICBnZXRUb2tlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9rZW47IH0sXG4gICAgICAgIGdldFRva2VuVmFsdWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlOyB9LFxuICAgICAgICBnZXRUb2tlbk9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9rZW5PZmZzZXQ7IH0sXG4gICAgICAgIGdldFRva2VuTGVuZ3RoOiBmdW5jdGlvbiAoKSB7IHJldHVybiBwb3MgLSB0b2tlbk9mZnNldDsgfSxcbiAgICAgICAgZ2V0VG9rZW5TdGFydExpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGxpbmVTdGFydE9mZnNldDsgfSxcbiAgICAgICAgZ2V0VG9rZW5TdGFydENoYXJhY3RlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9rZW5PZmZzZXQgLSBwcmV2VG9rZW5MaW5lU3RhcnRPZmZzZXQ7IH0sXG4gICAgICAgIGdldFRva2VuRXJyb3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjYW5FcnJvcjsgfSxcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNXaGl0ZVNwYWNlKGNoKSB7XG4gICAgcmV0dXJuIGNoID09PSAzMiAvKiBzcGFjZSAqLyB8fCBjaCA9PT0gOSAvKiB0YWIgKi8gfHwgY2ggPT09IDExIC8qIHZlcnRpY2FsVGFiICovIHx8IGNoID09PSAxMiAvKiBmb3JtRmVlZCAqLyB8fFxuICAgICAgICBjaCA9PT0gMTYwIC8qIG5vbkJyZWFraW5nU3BhY2UgKi8gfHwgY2ggPT09IDU3NjAgLyogb2doYW0gKi8gfHwgY2ggPj0gODE5MiAvKiBlblF1YWQgKi8gJiYgY2ggPD0gODIwMyAvKiB6ZXJvV2lkdGhTcGFjZSAqLyB8fFxuICAgICAgICBjaCA9PT0gODIzOSAvKiBuYXJyb3dOb0JyZWFrU3BhY2UgKi8gfHwgY2ggPT09IDgyODcgLyogbWF0aGVtYXRpY2FsU3BhY2UgKi8gfHwgY2ggPT09IDEyMjg4IC8qIGlkZW9ncmFwaGljU3BhY2UgKi8gfHwgY2ggPT09IDY1Mjc5IC8qIGJ5dGVPcmRlck1hcmsgKi87XG59XG5mdW5jdGlvbiBpc0xpbmVCcmVhayhjaCkge1xuICAgIHJldHVybiBjaCA9PT0gMTAgLyogbGluZUZlZWQgKi8gfHwgY2ggPT09IDEzIC8qIGNhcnJpYWdlUmV0dXJuICovIHx8IGNoID09PSA4MjMyIC8qIGxpbmVTZXBhcmF0b3IgKi8gfHwgY2ggPT09IDgyMzMgLyogcGFyYWdyYXBoU2VwYXJhdG9yICovO1xufVxuZnVuY3Rpb24gaXNEaWdpdChjaCkge1xuICAgIHJldHVybiBjaCA+PSA0OCAvKiBfMCAqLyAmJiBjaCA8PSA1NyAvKiBfOSAqLztcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgZm9ybWF0dGVyIGZyb20gJy4vaW1wbC9mb3JtYXQuanMnO1xuaW1wb3J0ICogYXMgZWRpdCBmcm9tICcuL2ltcGwvZWRpdC5qcyc7XG5pbXBvcnQgKiBhcyBzY2FubmVyIGZyb20gJy4vaW1wbC9zY2FubmVyLmpzJztcbmltcG9ydCAqIGFzIHBhcnNlciBmcm9tICcuL2ltcGwvcGFyc2VyLmpzJztcbi8qKlxuICogQ3JlYXRlcyBhIEpTT04gc2Nhbm5lciBvbiB0aGUgZ2l2ZW4gdGV4dC5cbiAqIElmIGlnbm9yZVRyaXZpYSBpcyBzZXQsIHdoaXRlc3BhY2VzIG9yIGNvbW1lbnRzIGFyZSBpZ25vcmVkLlxuICovXG5leHBvcnQgdmFyIGNyZWF0ZVNjYW5uZXIgPSBzY2FubmVyLmNyZWF0ZVNjYW5uZXI7XG4vKipcbiAqIEZvciBhIGdpdmVuIG9mZnNldCwgZXZhbHVhdGUgdGhlIGxvY2F0aW9uIGluIHRoZSBKU09OIGRvY3VtZW50LiBFYWNoIHNlZ21lbnQgaW4gdGhlIGxvY2F0aW9uIHBhdGggaXMgZWl0aGVyIGEgcHJvcGVydHkgbmFtZSBvciBhbiBhcnJheSBpbmRleC5cbiAqL1xuZXhwb3J0IHZhciBnZXRMb2NhdGlvbiA9IHBhcnNlci5nZXRMb2NhdGlvbjtcbi8qKlxuICogUGFyc2VzIHRoZSBnaXZlbiB0ZXh0IGFuZCByZXR1cm5zIHRoZSBvYmplY3QgdGhlIEpTT04gY29udGVudCByZXByZXNlbnRzLiBPbiBpbnZhbGlkIGlucHV0LCB0aGUgcGFyc2VyIHRyaWVzIHRvIGJlIGFzIGZhdWx0IHRvbGVyYW50IGFzIHBvc3NpYmxlLCBidXQgc3RpbGwgcmV0dXJuIGEgcmVzdWx0LlxuICogVGhlcmVmb3JlLCBhbHdheXMgY2hlY2sgdGhlIGVycm9ycyBsaXN0IHRvIGZpbmQgb3V0IGlmIHRoZSBpbnB1dCB3YXMgdmFsaWQuXG4gKi9cbmV4cG9ydCB2YXIgcGFyc2UgPSBwYXJzZXIucGFyc2U7XG4vKipcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gdGV4dCBhbmQgcmV0dXJucyBhIHRyZWUgcmVwcmVzZW50YXRpb24gdGhlIEpTT04gY29udGVudC4gT24gaW52YWxpZCBpbnB1dCwgdGhlIHBhcnNlciB0cmllcyB0byBiZSBhcyBmYXVsdCB0b2xlcmFudCBhcyBwb3NzaWJsZSwgYnV0IHN0aWxsIHJldHVybiBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IHZhciBwYXJzZVRyZWUgPSBwYXJzZXIucGFyc2VUcmVlO1xuLyoqXG4gKiBGaW5kcyB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gcGF0aCBpbiBhIEpTT04gRE9NLlxuICovXG5leHBvcnQgdmFyIGZpbmROb2RlQXRMb2NhdGlvbiA9IHBhcnNlci5maW5kTm9kZUF0TG9jYXRpb247XG4vKipcbiAqIEZpbmRzIHRoZSBpbm5lcm1vc3Qgbm9kZSBhdCB0aGUgZ2l2ZW4gb2Zmc2V0LiBJZiBpbmNsdWRlUmlnaHRCb3VuZCBpcyBzZXQsIGFsc28gZmluZHMgbm9kZXMgdGhhdCBlbmQgYXQgdGhlIGdpdmVuIG9mZnNldC5cbiAqL1xuZXhwb3J0IHZhciBmaW5kTm9kZUF0T2Zmc2V0ID0gcGFyc2VyLmZpbmROb2RlQXRPZmZzZXQ7XG4vKipcbiAqIEdldHMgdGhlIEpTT04gcGF0aCBvZiB0aGUgZ2l2ZW4gSlNPTiBET00gbm9kZVxuICovXG5leHBvcnQgdmFyIGdldE5vZGVQYXRoID0gcGFyc2VyLmdldE5vZGVQYXRoO1xuLyoqXG4gKiBFdmFsdWF0ZXMgdGhlIEphdmFTY3JpcHQgb2JqZWN0IG9mIHRoZSBnaXZlbiBKU09OIERPTSBub2RlXG4gKi9cbmV4cG9ydCB2YXIgZ2V0Tm9kZVZhbHVlID0gcGFyc2VyLmdldE5vZGVWYWx1ZTtcbi8qKlxuICogUGFyc2VzIHRoZSBnaXZlbiB0ZXh0IGFuZCBpbnZva2VzIHRoZSB2aXNpdG9yIGZ1bmN0aW9ucyBmb3IgZWFjaCBvYmplY3QsIGFycmF5IGFuZCBsaXRlcmFsIHJlYWNoZWQuXG4gKi9cbmV4cG9ydCB2YXIgdmlzaXQgPSBwYXJzZXIudmlzaXQ7XG4vKipcbiAqIFRha2VzIEpTT04gd2l0aCBKYXZhU2NyaXB0LXN0eWxlIGNvbW1lbnRzIGFuZCByZW1vdmVcbiAqIHRoZW0uIE9wdGlvbmFsbHkgcmVwbGFjZXMgZXZlcnkgbm9uZS1uZXdsaW5lIGNoYXJhY3RlclxuICogb2YgY29tbWVudHMgd2l0aCBhIHJlcGxhY2VDaGFyYWN0ZXJcbiAqL1xuZXhwb3J0IHZhciBzdHJpcENvbW1lbnRzID0gcGFyc2VyLnN0cmlwQ29tbWVudHM7XG5leHBvcnQgZnVuY3Rpb24gcHJpbnRQYXJzZUVycm9yQ29kZShjb2RlKSB7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgMSAvKiBJbnZhbGlkU3ltYm9sICovOiByZXR1cm4gJ0ludmFsaWRTeW1ib2wnO1xuICAgICAgICBjYXNlIDIgLyogSW52YWxpZE51bWJlckZvcm1hdCAqLzogcmV0dXJuICdJbnZhbGlkTnVtYmVyRm9ybWF0JztcbiAgICAgICAgY2FzZSAzIC8qIFByb3BlcnR5TmFtZUV4cGVjdGVkICovOiByZXR1cm4gJ1Byb3BlcnR5TmFtZUV4cGVjdGVkJztcbiAgICAgICAgY2FzZSA0IC8qIFZhbHVlRXhwZWN0ZWQgKi86IHJldHVybiAnVmFsdWVFeHBlY3RlZCc7XG4gICAgICAgIGNhc2UgNSAvKiBDb2xvbkV4cGVjdGVkICovOiByZXR1cm4gJ0NvbG9uRXhwZWN0ZWQnO1xuICAgICAgICBjYXNlIDYgLyogQ29tbWFFeHBlY3RlZCAqLzogcmV0dXJuICdDb21tYUV4cGVjdGVkJztcbiAgICAgICAgY2FzZSA3IC8qIENsb3NlQnJhY2VFeHBlY3RlZCAqLzogcmV0dXJuICdDbG9zZUJyYWNlRXhwZWN0ZWQnO1xuICAgICAgICBjYXNlIDggLyogQ2xvc2VCcmFja2V0RXhwZWN0ZWQgKi86IHJldHVybiAnQ2xvc2VCcmFja2V0RXhwZWN0ZWQnO1xuICAgICAgICBjYXNlIDkgLyogRW5kT2ZGaWxlRXhwZWN0ZWQgKi86IHJldHVybiAnRW5kT2ZGaWxlRXhwZWN0ZWQnO1xuICAgICAgICBjYXNlIDEwIC8qIEludmFsaWRDb21tZW50VG9rZW4gKi86IHJldHVybiAnSW52YWxpZENvbW1lbnRUb2tlbic7XG4gICAgICAgIGNhc2UgMTEgLyogVW5leHBlY3RlZEVuZE9mQ29tbWVudCAqLzogcmV0dXJuICdVbmV4cGVjdGVkRW5kT2ZDb21tZW50JztcbiAgICAgICAgY2FzZSAxMiAvKiBVbmV4cGVjdGVkRW5kT2ZTdHJpbmcgKi86IHJldHVybiAnVW5leHBlY3RlZEVuZE9mU3RyaW5nJztcbiAgICAgICAgY2FzZSAxMyAvKiBVbmV4cGVjdGVkRW5kT2ZOdW1iZXIgKi86IHJldHVybiAnVW5leHBlY3RlZEVuZE9mTnVtYmVyJztcbiAgICAgICAgY2FzZSAxNCAvKiBJbnZhbGlkVW5pY29kZSAqLzogcmV0dXJuICdJbnZhbGlkVW5pY29kZSc7XG4gICAgICAgIGNhc2UgMTUgLyogSW52YWxpZEVzY2FwZUNoYXJhY3RlciAqLzogcmV0dXJuICdJbnZhbGlkRXNjYXBlQ2hhcmFjdGVyJztcbiAgICAgICAgY2FzZSAxNiAvKiBJbnZhbGlkQ2hhcmFjdGVyICovOiByZXR1cm4gJ0ludmFsaWRDaGFyYWN0ZXInO1xuICAgIH1cbiAgICByZXR1cm4gJzx1bmtub3duIFBhcnNlRXJyb3JDb2RlPic7XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBlZGl0cyBuZWVkZWQgdG8gZm9ybWF0IGEgSlNPTiBkb2N1bWVudC5cbiAqXG4gKiBAcGFyYW0gZG9jdW1lbnRUZXh0IFRoZSBpbnB1dCB0ZXh0XG4gKiBAcGFyYW0gcmFuZ2UgVGhlIHJhbmdlIHRvIGZvcm1hdCBvciBgdW5kZWZpbmVkYCB0byBmb3JtYXQgdGhlIGZ1bGwgY29udGVudFxuICogQHBhcmFtIG9wdGlvbnMgVGhlIGZvcm1hdHRpbmcgb3B0aW9uc1xuICogQHJldHVybnMgQSBsaXN0IG9mIGVkaXQgb3BlcmF0aW9ucyBkZXNjcmliaW5nIHRoZSBmb3JtYXR0aW5nIGNoYW5nZXMgdG8gdGhlIG9yaWdpbmFsIGRvY3VtZW50LiBFZGl0cyBjYW4gYmUgZWl0aGVyIGluc2VydHMsIHJlcGxhY2VtZW50cyBvclxuICogcmVtb3ZhbHMgb2YgdGV4dCBzZWdtZW50cy4gQWxsIG9mZnNldHMgcmVmZXIgdG8gdGhlIG9yaWdpbmFsIHN0YXRlIG9mIHRoZSBkb2N1bWVudC4gTm8gdHdvIGVkaXRzIG11c3QgY2hhbmdlIG9yIHJlbW92ZSB0aGUgc2FtZSByYW5nZSBvZlxuICogdGV4dCBpbiB0aGUgb3JpZ2luYWwgZG9jdW1lbnQuIEhvd2V2ZXIsIG11bHRpcGxlIGVkaXRzIGNhbiBoYXZlXG4gKiB0aGUgc2FtZSBvZmZzZXQsIGZvciBleGFtcGxlIG11bHRpcGxlIGluc2VydHMsIG9yIGFuIGluc2VydCBmb2xsb3dlZCBieSBhIHJlbW92ZSBvciByZXBsYWNlLiBUaGUgb3JkZXIgaW4gdGhlIGFycmF5IGRlZmluZXMgd2hpY2ggZWRpdCBpcyBhcHBsaWVkIGZpcnN0LlxuICogVG8gYXBwbHkgZWRpdHMgdG8gYW4gaW5wdXQsIHlvdSBjYW4gdXNlIGBhcHBseUVkaXRzYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkb2N1bWVudFRleHQsIHJhbmdlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoZG9jdW1lbnRUZXh0LCByYW5nZSwgb3B0aW9ucyk7XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBlZGl0cyBuZWVkZWQgdG8gbW9kaWZ5IGEgdmFsdWUgaW4gdGhlIEpTT04gZG9jdW1lbnQuXG4gKlxuICogQHBhcmFtIGRvY3VtZW50VGV4dCBUaGUgaW5wdXQgdGV4dFxuICogQHBhcmFtIHBhdGggVGhlIHBhdGggb2YgdGhlIHZhbHVlIHRvIGNoYW5nZS4gVGhlIHBhdGggcmVwcmVzZW50cyBlaXRoZXIgdG8gdGhlIGRvY3VtZW50IHJvb3QsIGEgcHJvcGVydHkgb3IgYW4gYXJyYXkgaXRlbS5cbiAqIElmIHRoZSBwYXRoIHBvaW50cyB0byBhbiBub24tZXhpc3RpbmcgcHJvcGVydHkgb3IgaXRlbSwgaXQgd2lsbCBiZSBjcmVhdGVkLlxuICogQHBhcmFtIHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb3IgaXRlbS4gSWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCxcbiAqIHRoZSBwcm9wZXJ0eSBvciBpdGVtIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnNcbiAqIEByZXR1cm5zIEEgbGlzdCBvZiBlZGl0IG9wZXJhdGlvbnMgZGVzY3JpYmluZyB0aGUgZm9ybWF0dGluZyBjaGFuZ2VzIHRvIHRoZSBvcmlnaW5hbCBkb2N1bWVudC4gRWRpdHMgY2FuIGJlIGVpdGhlciBpbnNlcnRzLCByZXBsYWNlbWVudHMgb3JcbiAqIHJlbW92YWxzIG9mIHRleHQgc2VnbWVudHMuIEFsbCBvZmZzZXRzIHJlZmVyIHRvIHRoZSBvcmlnaW5hbCBzdGF0ZSBvZiB0aGUgZG9jdW1lbnQuIE5vIHR3byBlZGl0cyBtdXN0IGNoYW5nZSBvciByZW1vdmUgdGhlIHNhbWUgcmFuZ2Ugb2ZcbiAqIHRleHQgaW4gdGhlIG9yaWdpbmFsIGRvY3VtZW50LiBIb3dldmVyLCBtdWx0aXBsZSBlZGl0cyBjYW4gaGF2ZVxuICogdGhlIHNhbWUgb2Zmc2V0LCBmb3IgZXhhbXBsZSBtdWx0aXBsZSBpbnNlcnRzLCBvciBhbiBpbnNlcnQgZm9sbG93ZWQgYnkgYSByZW1vdmUgb3IgcmVwbGFjZS4gVGhlIG9yZGVyIGluIHRoZSBhcnJheSBkZWZpbmVzIHdoaWNoIGVkaXQgaXMgYXBwbGllZCBmaXJzdC5cbiAqIFRvIGFwcGx5IGVkaXRzIHRvIGFuIGlucHV0LCB5b3UgY2FuIHVzZSBgYXBwbHlFZGl0c2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb2RpZnkodGV4dCwgcGF0aCwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZWRpdC5zZXRQcm9wZXJ0eSh0ZXh0LCBwYXRoLCB2YWx1ZSwgb3B0aW9ucy5mb3JtYXR0aW5nT3B0aW9ucywgb3B0aW9ucy5nZXRJbnNlcnRpb25JbmRleCk7XG59XG4vKipcbiAqIEFwcGxpZXMgZWRpdHMgdG8gYSBpbnB1dCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUVkaXRzKHRleHQsIGVkaXRzKSB7XG4gICAgZm9yICh2YXIgaSA9IGVkaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRleHQgPSBlZGl0LmFwcGx5RWRpdCh0ZXh0LCBlZGl0c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0O1xufVxuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbi8qKlxyXG4gKiBUaGUgUG9zaXRpb24gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtQb3NpdGlvbl0oI1Bvc2l0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgUG9zaXRpb247XHJcbihmdW5jdGlvbiAoUG9zaXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBQb3NpdGlvbiBsaXRlcmFsIGZyb20gdGhlIGdpdmVuIGxpbmUgYW5kIGNoYXJhY3Rlci5cclxuICAgICAqIEBwYXJhbSBsaW5lIFRoZSBwb3NpdGlvbidzIGxpbmUuXHJcbiAgICAgKiBAcGFyYW0gY2hhcmFjdGVyIFRoZSBwb3NpdGlvbidzIGNoYXJhY3Rlci5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGxpbmUsIGNoYXJhY3Rlcikge1xyXG4gICAgICAgIHJldHVybiB7IGxpbmU6IGxpbmUsIGNoYXJhY3RlcjogY2hhcmFjdGVyIH07XHJcbiAgICB9XHJcbiAgICBQb3NpdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcm5hbCBjb25mb3JtcyB0byB0aGUgW1Bvc2l0aW9uXSgjUG9zaXRpb24pIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLm9iamVjdExpdGVyYWwoY2FuZGlkYXRlKSAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmxpbmUpICYmIElzLm51bWJlcihjYW5kaWRhdGUuY2hhcmFjdGVyKTtcclxuICAgIH1cclxuICAgIFBvc2l0aW9uLmlzID0gaXM7XHJcbn0pKFBvc2l0aW9uIHx8IChQb3NpdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgUmFuZ2UgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtSYW5nZV0oI1JhbmdlKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgUmFuZ2U7XHJcbihmdW5jdGlvbiAoUmFuZ2UpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShvbmUsIHR3bywgdGhyZWUsIGZvdXIpIHtcclxuICAgICAgICBpZiAoSXMubnVtYmVyKG9uZSkgJiYgSXMubnVtYmVyKHR3bykgJiYgSXMubnVtYmVyKHRocmVlKSAmJiBJcy5udW1iZXIoZm91cikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQ6IFBvc2l0aW9uLmNyZWF0ZShvbmUsIHR3byksIGVuZDogUG9zaXRpb24uY3JlYXRlKHRocmVlLCBmb3VyKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChQb3NpdGlvbi5pcyhvbmUpICYmIFBvc2l0aW9uLmlzKHR3bykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQ6IG9uZSwgZW5kOiB0d28gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJhbmdlI2NyZWF0ZSBjYWxsZWQgd2l0aCBpbnZhbGlkIGFyZ3VtZW50c1tcIiArIG9uZSArIFwiLCBcIiArIHR3byArIFwiLCBcIiArIHRocmVlICsgXCIsIFwiICsgZm91ciArIFwiXVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSYW5nZS5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbUmFuZ2VdKCNSYW5nZSkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMub2JqZWN0TGl0ZXJhbChjYW5kaWRhdGUpICYmIFBvc2l0aW9uLmlzKGNhbmRpZGF0ZS5zdGFydCkgJiYgUG9zaXRpb24uaXMoY2FuZGlkYXRlLmVuZCk7XHJcbiAgICB9XHJcbiAgICBSYW5nZS5pcyA9IGlzO1xyXG59KShSYW5nZSB8fCAoUmFuZ2UgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIExvY2F0aW9uIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbTG9jYXRpb25dKCNMb2NhdGlvbikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIExvY2F0aW9uO1xyXG4oZnVuY3Rpb24gKExvY2F0aW9uKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBMb2NhdGlvbiBsaXRlcmFsLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgbG9jYXRpb24ncyB1cmkuXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgVGhlIGxvY2F0aW9uJ3MgcmFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmksIHJhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdXJpOiB1cmksIHJhbmdlOiByYW5nZSB9O1xyXG4gICAgfVxyXG4gICAgTG9jYXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0xvY2F0aW9uXSgjTG9jYXRpb24pIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpICYmIChJcy5zdHJpbmcoY2FuZGlkYXRlLnVyaSkgfHwgSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS51cmkpKTtcclxuICAgIH1cclxuICAgIExvY2F0aW9uLmlzID0gaXM7XHJcbn0pKExvY2F0aW9uIHx8IChMb2NhdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgTG9jYXRpb25MaW5rIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbTG9jYXRpb25MaW5rXSgjTG9jYXRpb25MaW5rKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgTG9jYXRpb25MaW5rO1xyXG4oZnVuY3Rpb24gKExvY2F0aW9uTGluaykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTG9jYXRpb25MaW5rIGxpdGVyYWwuXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0VXJpIFRoZSBkZWZpbml0aW9uJ3MgdXJpLlxyXG4gICAgICogQHBhcmFtIHRhcmdldFJhbmdlIFRoZSBmdWxsIHJhbmdlIG9mIHRoZSBkZWZpbml0aW9uLlxyXG4gICAgICogQHBhcmFtIHRhcmdldFNlbGVjdGlvblJhbmdlIFRoZSBzcGFuIG9mIHRoZSBzeW1ib2wgZGVmaW5pdGlvbiBhdCB0aGUgdGFyZ2V0LlxyXG4gICAgICogQHBhcmFtIG9yaWdpblNlbGVjdGlvblJhbmdlIFRoZSBzcGFuIG9mIHRoZSBzeW1ib2wgYmVpbmcgZGVmaW5lZCBpbiB0aGUgb3JpZ2luYXRpbmcgc291cmNlIGZpbGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0YXJnZXRVcmksIHRhcmdldFJhbmdlLCB0YXJnZXRTZWxlY3Rpb25SYW5nZSwgb3JpZ2luU2VsZWN0aW9uUmFuZ2UpIHtcclxuICAgICAgICByZXR1cm4geyB0YXJnZXRVcmk6IHRhcmdldFVyaSwgdGFyZ2V0UmFuZ2U6IHRhcmdldFJhbmdlLCB0YXJnZXRTZWxlY3Rpb25SYW5nZTogdGFyZ2V0U2VsZWN0aW9uUmFuZ2UsIG9yaWdpblNlbGVjdGlvblJhbmdlOiBvcmlnaW5TZWxlY3Rpb25SYW5nZSB9O1xyXG4gICAgfVxyXG4gICAgTG9jYXRpb25MaW5rLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtMb2NhdGlvbkxpbmtdKCNMb2NhdGlvbkxpbmspIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBSYW5nZS5pcyhjYW5kaWRhdGUudGFyZ2V0UmFuZ2UpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudGFyZ2V0VXJpKVxyXG4gICAgICAgICAgICAmJiAoUmFuZ2UuaXMoY2FuZGlkYXRlLnRhcmdldFNlbGVjdGlvblJhbmdlKSB8fCBJcy51bmRlZmluZWQoY2FuZGlkYXRlLnRhcmdldFNlbGVjdGlvblJhbmdlKSlcclxuICAgICAgICAgICAgJiYgKFJhbmdlLmlzKGNhbmRpZGF0ZS5vcmlnaW5TZWxlY3Rpb25SYW5nZSkgfHwgSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5vcmlnaW5TZWxlY3Rpb25SYW5nZSkpO1xyXG4gICAgfVxyXG4gICAgTG9jYXRpb25MaW5rLmlzID0gaXM7XHJcbn0pKExvY2F0aW9uTGluayB8fCAoTG9jYXRpb25MaW5rID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb2xvciBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0NvbG9yXSgjQ29sb3IpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb2xvcjtcclxuKGZ1bmN0aW9uIChDb2xvcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IENvbG9yIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZDogcmVkLFxyXG4gICAgICAgICAgICBncmVlbjogZ3JlZW4sXHJcbiAgICAgICAgICAgIGJsdWU6IGJsdWUsXHJcbiAgICAgICAgICAgIGFscGhhOiBhbHBoYSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgQ29sb3IuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0NvbG9yXSgjQ29sb3IpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLm51bWJlcihjYW5kaWRhdGUucmVkKVxyXG4gICAgICAgICAgICAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmdyZWVuKVxyXG4gICAgICAgICAgICAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmJsdWUpXHJcbiAgICAgICAgICAgICYmIElzLm51bWJlcihjYW5kaWRhdGUuYWxwaGEpO1xyXG4gICAgfVxyXG4gICAgQ29sb3IuaXMgPSBpcztcclxufSkoQ29sb3IgfHwgKENvbG9yID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb2xvckluZm9ybWF0aW9uIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbQ29sb3JJbmZvcm1hdGlvbl0oI0NvbG9ySW5mb3JtYXRpb24pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb2xvckluZm9ybWF0aW9uO1xyXG4oZnVuY3Rpb24gKENvbG9ySW5mb3JtYXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBDb2xvckluZm9ybWF0aW9uIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShyYW5nZSwgY29sb3IpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgQ29sb3JJbmZvcm1hdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbQ29sb3JJbmZvcm1hdGlvbl0oI0NvbG9ySW5mb3JtYXRpb24pIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIFJhbmdlLmlzKGNhbmRpZGF0ZS5yYW5nZSkgJiYgQ29sb3IuaXMoY2FuZGlkYXRlLmNvbG9yKTtcclxuICAgIH1cclxuICAgIENvbG9ySW5mb3JtYXRpb24uaXMgPSBpcztcclxufSkoQ29sb3JJbmZvcm1hdGlvbiB8fCAoQ29sb3JJbmZvcm1hdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgQ29sb3IgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtDb2xvclByZXNlbnRhdGlvbl0oI0NvbG9yUHJlc2VudGF0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29sb3JQcmVzZW50YXRpb247XHJcbihmdW5jdGlvbiAoQ29sb3JQcmVzZW50YXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBDb2xvckluZm9ybWF0aW9uIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsYWJlbCwgdGV4dEVkaXQsIGFkZGl0aW9uYWxUZXh0RWRpdHMpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICAgIHRleHRFZGl0OiB0ZXh0RWRpdCxcclxuICAgICAgICAgICAgYWRkaXRpb25hbFRleHRFZGl0czogYWRkaXRpb25hbFRleHRFZGl0cyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgQ29sb3JQcmVzZW50YXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0NvbG9ySW5mb3JtYXRpb25dKCNDb2xvckluZm9ybWF0aW9uKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5zdHJpbmcoY2FuZGlkYXRlLmxhYmVsKVxyXG4gICAgICAgICAgICAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS50ZXh0RWRpdCkgfHwgVGV4dEVkaXQuaXMoY2FuZGlkYXRlKSlcclxuICAgICAgICAgICAgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUuYWRkaXRpb25hbFRleHRFZGl0cykgfHwgSXMudHlwZWRBcnJheShjYW5kaWRhdGUuYWRkaXRpb25hbFRleHRFZGl0cywgVGV4dEVkaXQuaXMpKTtcclxuICAgIH1cclxuICAgIENvbG9yUHJlc2VudGF0aW9uLmlzID0gaXM7XHJcbn0pKENvbG9yUHJlc2VudGF0aW9uIHx8IChDb2xvclByZXNlbnRhdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBFbnVtIG9mIGtub3duIHJhbmdlIGtpbmRzXHJcbiAqL1xyXG5leHBvcnQgdmFyIEZvbGRpbmdSYW5nZUtpbmQ7XHJcbihmdW5jdGlvbiAoRm9sZGluZ1JhbmdlS2luZCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb2xkaW5nIHJhbmdlIGZvciBhIGNvbW1lbnRcclxuICAgICAqL1xyXG4gICAgRm9sZGluZ1JhbmdlS2luZFtcIkNvbW1lbnRcIl0gPSBcImNvbW1lbnRcIjtcclxuICAgIC8qKlxyXG4gICAgICogRm9sZGluZyByYW5nZSBmb3IgYSBpbXBvcnRzIG9yIGluY2x1ZGVzXHJcbiAgICAgKi9cclxuICAgIEZvbGRpbmdSYW5nZUtpbmRbXCJJbXBvcnRzXCJdID0gXCJpbXBvcnRzXCI7XHJcbiAgICAvKipcclxuICAgICAqIEZvbGRpbmcgcmFuZ2UgZm9yIGEgcmVnaW9uIChlLmcuIGAjcmVnaW9uYClcclxuICAgICAqL1xyXG4gICAgRm9sZGluZ1JhbmdlS2luZFtcIlJlZ2lvblwiXSA9IFwicmVnaW9uXCI7XHJcbn0pKEZvbGRpbmdSYW5nZUtpbmQgfHwgKEZvbGRpbmdSYW5nZUtpbmQgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIGZvbGRpbmcgcmFuZ2UgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtGb2xkaW5nUmFuZ2VdKCNGb2xkaW5nUmFuZ2UpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBGb2xkaW5nUmFuZ2U7XHJcbihmdW5jdGlvbiAoRm9sZGluZ1JhbmdlKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgRm9sZGluZ1JhbmdlIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShzdGFydExpbmUsIGVuZExpbmUsIHN0YXJ0Q2hhcmFjdGVyLCBlbmRDaGFyYWN0ZXIsIGtpbmQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBzdGFydExpbmU6IHN0YXJ0TGluZSxcclxuICAgICAgICAgICAgZW5kTGluZTogZW5kTGluZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoc3RhcnRDaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydENoYXJhY3RlciA9IHN0YXJ0Q2hhcmFjdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChlbmRDaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5lbmRDaGFyYWN0ZXIgPSBlbmRDaGFyYWN0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKGtpbmQpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5raW5kID0ga2luZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIEZvbGRpbmdSYW5nZS5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbRm9sZGluZ1JhbmdlXSgjRm9sZGluZ1JhbmdlKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5udW1iZXIoY2FuZGlkYXRlLnN0YXJ0TGluZSkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS5zdGFydExpbmUpXHJcbiAgICAgICAgICAgICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLnN0YXJ0Q2hhcmFjdGVyKSB8fCBJcy5udW1iZXIoY2FuZGlkYXRlLnN0YXJ0Q2hhcmFjdGVyKSlcclxuICAgICAgICAgICAgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUuZW5kQ2hhcmFjdGVyKSB8fCBJcy5udW1iZXIoY2FuZGlkYXRlLmVuZENoYXJhY3RlcikpXHJcbiAgICAgICAgICAgICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLmtpbmQpIHx8IElzLnN0cmluZyhjYW5kaWRhdGUua2luZCkpO1xyXG4gICAgfVxyXG4gICAgRm9sZGluZ1JhbmdlLmlzID0gaXM7XHJcbn0pKEZvbGRpbmdSYW5nZSB8fCAoRm9sZGluZ1JhbmdlID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbl0oI0RpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uO1xyXG4oZnVuY3Rpb24gKERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsb2NhdGlvbiwgbWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uXSgjRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIExvY2F0aW9uLmlzKGNhbmRpZGF0ZS5sb2NhdGlvbikgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24uaXMgPSBpcztcclxufSkoRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbiB8fCAoRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgZGlhZ25vc3RpYydzIHNldmVyaXR5LlxyXG4gKi9cclxuZXhwb3J0IHZhciBEaWFnbm9zdGljU2V2ZXJpdHk7XHJcbihmdW5jdGlvbiAoRGlhZ25vc3RpY1NldmVyaXR5KSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydHMgYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIERpYWdub3N0aWNTZXZlcml0eS5FcnJvciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydHMgYSB3YXJuaW5nLlxyXG4gICAgICovXHJcbiAgICBEaWFnbm9zdGljU2V2ZXJpdHkuV2FybmluZyA9IDI7XHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydHMgYW4gaW5mb3JtYXRpb24uXHJcbiAgICAgKi9cclxuICAgIERpYWdub3N0aWNTZXZlcml0eS5JbmZvcm1hdGlvbiA9IDM7XHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydHMgYSBoaW50LlxyXG4gICAgICovXHJcbiAgICBEaWFnbm9zdGljU2V2ZXJpdHkuSGludCA9IDQ7XHJcbn0pKERpYWdub3N0aWNTZXZlcml0eSB8fCAoRGlhZ25vc3RpY1NldmVyaXR5ID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBEaWFnbm9zdGljIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbRGlhZ25vc3RpY10oI0RpYWdub3N0aWMpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBEaWFnbm9zdGljO1xyXG4oZnVuY3Rpb24gKERpYWdub3N0aWMpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBEaWFnbm9zdGljIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShyYW5nZSwgbWVzc2FnZSwgc2V2ZXJpdHksIGNvZGUsIHNvdXJjZSwgcmVsYXRlZEluZm9ybWF0aW9uKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgcmFuZ2U6IHJhbmdlLCBtZXNzYWdlOiBtZXNzYWdlIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoc2V2ZXJpdHkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXZlcml0eSA9IHNldmVyaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChjb2RlKSkge1xyXG4gICAgICAgICAgICByZXN1bHQuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKHNvdXJjZSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQocmVsYXRlZEluZm9ybWF0aW9uKSkge1xyXG4gICAgICAgICAgICByZXN1bHQucmVsYXRlZEluZm9ybWF0aW9uID0gcmVsYXRlZEluZm9ybWF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgRGlhZ25vc3RpYy5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbRGlhZ25vc3RpY10oI0RpYWdub3N0aWMpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKVxyXG4gICAgICAgICAgICAmJiBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpXHJcbiAgICAgICAgICAgICYmIElzLnN0cmluZyhjYW5kaWRhdGUubWVzc2FnZSlcclxuICAgICAgICAgICAgJiYgKElzLm51bWJlcihjYW5kaWRhdGUuc2V2ZXJpdHkpIHx8IElzLnVuZGVmaW5lZChjYW5kaWRhdGUuc2V2ZXJpdHkpKVxyXG4gICAgICAgICAgICAmJiAoSXMubnVtYmVyKGNhbmRpZGF0ZS5jb2RlKSB8fCBJcy5zdHJpbmcoY2FuZGlkYXRlLmNvZGUpIHx8IElzLnVuZGVmaW5lZChjYW5kaWRhdGUuY29kZSkpXHJcbiAgICAgICAgICAgICYmIChJcy5zdHJpbmcoY2FuZGlkYXRlLnNvdXJjZSkgfHwgSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5zb3VyY2UpKVxyXG4gICAgICAgICAgICAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5yZWxhdGVkSW5mb3JtYXRpb24pIHx8IElzLnR5cGVkQXJyYXkoY2FuZGlkYXRlLnJlbGF0ZWRJbmZvcm1hdGlvbiwgRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbi5pcykpO1xyXG4gICAgfVxyXG4gICAgRGlhZ25vc3RpYy5pcyA9IGlzO1xyXG59KShEaWFnbm9zdGljIHx8IChEaWFnbm9zdGljID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb21tYW5kIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbQ29tbWFuZF0oI0NvbW1hbmQpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb21tYW5kO1xyXG4oZnVuY3Rpb24gKENvbW1hbmQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBDb21tYW5kIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0aXRsZSwgY29tbWFuZCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgdGl0bGU6IHRpdGxlLCBjb21tYW5kOiBjb21tYW5kIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoYXJncykgJiYgYXJncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hcmd1bWVudHMgPSBhcmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgQ29tbWFuZC5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbQ29tbWFuZF0oI0NvbW1hbmQpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnRpdGxlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLmNvbW1hbmQpO1xyXG4gICAgfVxyXG4gICAgQ29tbWFuZC5pcyA9IGlzO1xyXG59KShDb21tYW5kIHx8IChDb21tYW5kID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBUZXh0RWRpdCBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSByZXBsYWNlLFxyXG4gKiBpbnNlcnQgYW5kIGRlbGV0ZSBlZGl0cyBtb3JlIGVhc2lseS5cclxuICovXHJcbmV4cG9ydCB2YXIgVGV4dEVkaXQ7XHJcbihmdW5jdGlvbiAoVGV4dEVkaXQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHJlcGxhY2UgdGV4dCBlZGl0LlxyXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSByYW5nZSBvZiB0ZXh0IHRvIGJlIHJlcGxhY2VkLlxyXG4gICAgICogQHBhcmFtIG5ld1RleHQgVGhlIG5ldyB0ZXh0LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZXBsYWNlKHJhbmdlLCBuZXdUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgcmFuZ2U6IHJhbmdlLCBuZXdUZXh0OiBuZXdUZXh0IH07XHJcbiAgICB9XHJcbiAgICBUZXh0RWRpdC5yZXBsYWNlID0gcmVwbGFjZTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGluc2VydCB0ZXh0IGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gVGhlIHBvc2l0aW9uIHRvIGluc2VydCB0aGUgdGV4dCBhdC5cclxuICAgICAqIEBwYXJhbSBuZXdUZXh0IFRoZSB0ZXh0IHRvIGJlIGluc2VydGVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbnNlcnQocG9zaXRpb24sIG5ld1RleHQpIHtcclxuICAgICAgICByZXR1cm4geyByYW5nZTogeyBzdGFydDogcG9zaXRpb24sIGVuZDogcG9zaXRpb24gfSwgbmV3VGV4dDogbmV3VGV4dCB9O1xyXG4gICAgfVxyXG4gICAgVGV4dEVkaXQuaW5zZXJ0ID0gaW5zZXJ0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZGVsZXRlIHRleHQgZWRpdC5cclxuICAgICAqIEBwYXJhbSByYW5nZSBUaGUgcmFuZ2Ugb2YgdGV4dCB0byBiZSBkZWxldGVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBkZWwocmFuZ2UpIHtcclxuICAgICAgICByZXR1cm4geyByYW5nZTogcmFuZ2UsIG5ld1RleHQ6ICcnIH07XHJcbiAgICB9XHJcbiAgICBUZXh0RWRpdC5kZWwgPSBkZWw7XHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMub2JqZWN0TGl0ZXJhbChjYW5kaWRhdGUpXHJcbiAgICAgICAgICAgICYmIElzLnN0cmluZyhjYW5kaWRhdGUubmV3VGV4dClcclxuICAgICAgICAgICAgJiYgUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKTtcclxuICAgIH1cclxuICAgIFRleHRFZGl0LmlzID0gaXM7XHJcbn0pKFRleHRFZGl0IHx8IChUZXh0RWRpdCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgVGV4dERvY3VtZW50RWRpdCBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZVxyXG4gKiBhbiBlZGl0IHRoYXQgbWFuaXB1bGF0ZXMgYSB0ZXh0IGRvY3VtZW50LlxyXG4gKi9cclxuZXhwb3J0IHZhciBUZXh0RG9jdW1lbnRFZGl0O1xyXG4oZnVuY3Rpb24gKFRleHREb2N1bWVudEVkaXQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBgVGV4dERvY3VtZW50RWRpdGBcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHRleHREb2N1bWVudCwgZWRpdHMpIHtcclxuICAgICAgICByZXR1cm4geyB0ZXh0RG9jdW1lbnQ6IHRleHREb2N1bWVudCwgZWRpdHM6IGVkaXRzIH07XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnRFZGl0LmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSlcclxuICAgICAgICAgICAgJiYgVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllci5pcyhjYW5kaWRhdGUudGV4dERvY3VtZW50KVxyXG4gICAgICAgICAgICAmJiBBcnJheS5pc0FycmF5KGNhbmRpZGF0ZS5lZGl0cyk7XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnRFZGl0LmlzID0gaXM7XHJcbn0pKFRleHREb2N1bWVudEVkaXQgfHwgKFRleHREb2N1bWVudEVkaXQgPSB7fSkpO1xyXG5leHBvcnQgdmFyIENyZWF0ZUZpbGU7XHJcbihmdW5jdGlvbiAoQ3JlYXRlRmlsZSkge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHVyaSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICdjcmVhdGUnLFxyXG4gICAgICAgICAgICB1cmk6IHVyaVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT09IHZvaWQgMCAmJiAob3B0aW9ucy5vdmVyd3JpdGUgIT09IHZvaWQgMCB8fCBvcHRpb25zLmlnbm9yZUlmRXhpc3RzICE9PSB2b2lkIDApKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIENyZWF0ZUZpbGUuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSAmJiBjYW5kaWRhdGUua2luZCA9PT0gJ2NyZWF0ZScgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUub3B0aW9ucyA9PT0gdm9pZCAwIHx8XHJcbiAgICAgICAgICAgICAgICAoKGNhbmRpZGF0ZS5vcHRpb25zLm92ZXJ3cml0ZSA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLm9wdGlvbnMub3ZlcndyaXRlKSkgJiYgKGNhbmRpZGF0ZS5vcHRpb25zLmlnbm9yZUlmRXhpc3RzID09PSB2b2lkIDAgfHwgSXMuYm9vbGVhbihjYW5kaWRhdGUub3B0aW9ucy5pZ25vcmVJZkV4aXN0cykpKSk7XHJcbiAgICB9XHJcbiAgICBDcmVhdGVGaWxlLmlzID0gaXM7XHJcbn0pKENyZWF0ZUZpbGUgfHwgKENyZWF0ZUZpbGUgPSB7fSkpO1xyXG5leHBvcnQgdmFyIFJlbmFtZUZpbGU7XHJcbihmdW5jdGlvbiAoUmVuYW1lRmlsZSkge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKG9sZFVyaSwgbmV3VXJpLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAga2luZDogJ3JlbmFtZScsXHJcbiAgICAgICAgICAgIG9sZFVyaTogb2xkVXJpLFxyXG4gICAgICAgICAgICBuZXdVcmk6IG5ld1VyaVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT09IHZvaWQgMCAmJiAob3B0aW9ucy5vdmVyd3JpdGUgIT09IHZvaWQgMCB8fCBvcHRpb25zLmlnbm9yZUlmRXhpc3RzICE9PSB2b2lkIDApKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIFJlbmFtZUZpbGUuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSAmJiBjYW5kaWRhdGUua2luZCA9PT0gJ3JlbmFtZScgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5vbGRVcmkpICYmIElzLnN0cmluZyhjYW5kaWRhdGUubmV3VXJpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLm9wdGlvbnMgPT09IHZvaWQgMCB8fFxyXG4gICAgICAgICAgICAgICAgKChjYW5kaWRhdGUub3B0aW9ucy5vdmVyd3JpdGUgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5vcHRpb25zLm92ZXJ3cml0ZSkpICYmIChjYW5kaWRhdGUub3B0aW9ucy5pZ25vcmVJZkV4aXN0cyA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLm9wdGlvbnMuaWdub3JlSWZFeGlzdHMpKSkpO1xyXG4gICAgfVxyXG4gICAgUmVuYW1lRmlsZS5pcyA9IGlzO1xyXG59KShSZW5hbWVGaWxlIHx8IChSZW5hbWVGaWxlID0ge30pKTtcclxuZXhwb3J0IHZhciBEZWxldGVGaWxlO1xyXG4oZnVuY3Rpb24gKERlbGV0ZUZpbGUpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmksIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBraW5kOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgdXJpOiB1cmlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zICE9PSB2b2lkIDAgJiYgKG9wdGlvbnMucmVjdXJzaXZlICE9PSB2b2lkIDAgfHwgb3B0aW9ucy5pZ25vcmVJZk5vdEV4aXN0cyAhPT0gdm9pZCAwKSkge1xyXG4gICAgICAgICAgICByZXN1bHQub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBEZWxldGVGaWxlLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGUgJiYgY2FuZGlkYXRlLmtpbmQgPT09ICdkZWxldGUnICYmIElzLnN0cmluZyhjYW5kaWRhdGUudXJpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLm9wdGlvbnMgPT09IHZvaWQgMCB8fFxyXG4gICAgICAgICAgICAgICAgKChjYW5kaWRhdGUub3B0aW9ucy5yZWN1cnNpdmUgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5vcHRpb25zLnJlY3Vyc2l2ZSkpICYmIChjYW5kaWRhdGUub3B0aW9ucy5pZ25vcmVJZk5vdEV4aXN0cyA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLm9wdGlvbnMuaWdub3JlSWZOb3RFeGlzdHMpKSkpO1xyXG4gICAgfVxyXG4gICAgRGVsZXRlRmlsZS5pcyA9IGlzO1xyXG59KShEZWxldGVGaWxlIHx8IChEZWxldGVGaWxlID0ge30pKTtcclxuZXhwb3J0IHZhciBXb3Jrc3BhY2VFZGl0O1xyXG4oZnVuY3Rpb24gKFdvcmtzcGFjZUVkaXQpIHtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGUgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5jaGFuZ2VzICE9PSB2b2lkIDAgfHwgY2FuZGlkYXRlLmRvY3VtZW50Q2hhbmdlcyAhPT0gdm9pZCAwKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmRvY3VtZW50Q2hhbmdlcyA9PT0gdm9pZCAwIHx8IGNhbmRpZGF0ZS5kb2N1bWVudENoYW5nZXMuZXZlcnkoZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKElzLnN0cmluZyhjaGFuZ2Uua2luZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3JlYXRlRmlsZS5pcyhjaGFuZ2UpIHx8IFJlbmFtZUZpbGUuaXMoY2hhbmdlKSB8fCBEZWxldGVGaWxlLmlzKGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dERvY3VtZW50RWRpdC5pcyhjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBXb3Jrc3BhY2VFZGl0LmlzID0gaXM7XHJcbn0pKFdvcmtzcGFjZUVkaXQgfHwgKFdvcmtzcGFjZUVkaXQgPSB7fSkpO1xyXG52YXIgVGV4dEVkaXRDaGFuZ2VJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGV4dEVkaXRDaGFuZ2VJbXBsKGVkaXRzKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cyA9IGVkaXRzO1xyXG4gICAgfVxyXG4gICAgVGV4dEVkaXRDaGFuZ2VJbXBsLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAocG9zaXRpb24sIG5ld1RleHQpIHtcclxuICAgICAgICB0aGlzLmVkaXRzLnB1c2goVGV4dEVkaXQuaW5zZXJ0KHBvc2l0aW9uLCBuZXdUZXh0KSk7XHJcbiAgICB9O1xyXG4gICAgVGV4dEVkaXRDaGFuZ2VJbXBsLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKHJhbmdlLCBuZXdUZXh0KSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cy5wdXNoKFRleHRFZGl0LnJlcGxhY2UocmFuZ2UsIG5ld1RleHQpKTtcclxuICAgIH07XHJcbiAgICBUZXh0RWRpdENoYW5nZUltcGwucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xyXG4gICAgICAgIHRoaXMuZWRpdHMucHVzaChUZXh0RWRpdC5kZWwocmFuZ2UpKTtcclxuICAgIH07XHJcbiAgICBUZXh0RWRpdENoYW5nZUltcGwucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlZGl0KSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cy5wdXNoKGVkaXQpO1xyXG4gICAgfTtcclxuICAgIFRleHRFZGl0Q2hhbmdlSW1wbC5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRzO1xyXG4gICAgfTtcclxuICAgIFRleHRFZGl0Q2hhbmdlSW1wbC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cy5zcGxpY2UoMCwgdGhpcy5lZGl0cy5sZW5ndGgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUZXh0RWRpdENoYW5nZUltcGw7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiBBIHdvcmtzcGFjZSBjaGFuZ2UgaGVscHMgY29uc3RydWN0aW5nIGNoYW5nZXMgdG8gYSB3b3Jrc3BhY2UuXHJcbiAqL1xyXG52YXIgV29ya3NwYWNlQ2hhbmdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV29ya3NwYWNlQ2hhbmdlKHdvcmtzcGFjZUVkaXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RleHRFZGl0Q2hhbmdlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgICAgaWYgKHdvcmtzcGFjZUVkaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdCA9IHdvcmtzcGFjZUVkaXQ7XHJcbiAgICAgICAgICAgIGlmICh3b3Jrc3BhY2VFZGl0LmRvY3VtZW50Q2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRleHREb2N1bWVudEVkaXQuaXMoY2hhbmdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dEVkaXRDaGFuZ2UgPSBuZXcgVGV4dEVkaXRDaGFuZ2VJbXBsKGNoYW5nZS5lZGl0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl90ZXh0RWRpdENoYW5nZXNbY2hhbmdlLnRleHREb2N1bWVudC51cmldID0gdGV4dEVkaXRDaGFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAod29ya3NwYWNlRWRpdC5jaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3b3Jrc3BhY2VFZGl0LmNoYW5nZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0RWRpdENoYW5nZSA9IG5ldyBUZXh0RWRpdENoYW5nZUltcGwod29ya3NwYWNlRWRpdC5jaGFuZ2VzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl90ZXh0RWRpdENoYW5nZXNba2V5XSA9IHRleHRFZGl0Q2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV29ya3NwYWNlQ2hhbmdlLnByb3RvdHlwZSwgXCJlZGl0XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSB1bmRlcmx5aW5nIFtXb3Jrc3BhY2VFZGl0XSgjV29ya3NwYWNlRWRpdCkgbGl0ZXJhbFxyXG4gICAgICAgICAqIHVzZSB0byBiZSByZXR1cm5lZCBmcm9tIGEgd29ya3NwYWNlIGVkaXQgb3BlcmF0aW9uIGxpa2UgcmVuYW1lLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd29ya3NwYWNlRWRpdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFdvcmtzcGFjZUNoYW5nZS5wcm90b3R5cGUuZ2V0VGV4dEVkaXRDaGFuZ2UgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgaWYgKFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIuaXMoa2V5KSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dvcmtzcGFjZUVkaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRDaGFuZ2VzOiBbXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dvcmtzcGFjZSBlZGl0IGlzIG5vdCBjb25maWd1cmVkIGZvciBkb2N1bWVudCBjaGFuZ2VzLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0ZXh0RG9jdW1lbnQgPSBrZXk7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl90ZXh0RWRpdENoYW5nZXNbdGV4dERvY3VtZW50LnVyaV07XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWRpdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0RG9jdW1lbnRFZGl0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHREb2N1bWVudDogdGV4dERvY3VtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRzOiBlZGl0c1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzLnB1c2godGV4dERvY3VtZW50RWRpdCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgVGV4dEVkaXRDaGFuZ2VJbXBsKGVkaXRzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHRFZGl0Q2hhbmdlc1t0ZXh0RG9jdW1lbnQudXJpXSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl93b3Jrc3BhY2VFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93b3Jrc3BhY2VFZGl0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXM6IE9iamVjdC5jcmVhdGUobnVsbClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl93b3Jrc3BhY2VFZGl0LmNoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV29ya3NwYWNlIGVkaXQgaXMgbm90IGNvbmZpZ3VyZWQgZm9yIG5vcm1hbCB0ZXh0IGVkaXQgY2hhbmdlcy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fdGV4dEVkaXRDaGFuZ2VzW2tleV07XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWRpdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQuY2hhbmdlc1trZXldID0gZWRpdHM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgVGV4dEVkaXRDaGFuZ2VJbXBsKGVkaXRzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHRFZGl0Q2hhbmdlc1trZXldID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFdvcmtzcGFjZUNoYW5nZS5wcm90b3R5cGUuY3JlYXRlRmlsZSA9IGZ1bmN0aW9uICh1cmksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRG9jdW1lbnRDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMucHVzaChDcmVhdGVGaWxlLmNyZWF0ZSh1cmksIG9wdGlvbnMpKTtcclxuICAgIH07XHJcbiAgICBXb3Jrc3BhY2VDaGFuZ2UucHJvdG90eXBlLnJlbmFtZUZpbGUgPSBmdW5jdGlvbiAob2xkVXJpLCBuZXdVcmksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRG9jdW1lbnRDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMucHVzaChSZW5hbWVGaWxlLmNyZWF0ZShvbGRVcmksIG5ld1VyaSwgb3B0aW9ucykpO1xyXG4gICAgfTtcclxuICAgIFdvcmtzcGFjZUNoYW5nZS5wcm90b3R5cGUuZGVsZXRlRmlsZSA9IGZ1bmN0aW9uICh1cmksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRG9jdW1lbnRDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMucHVzaChEZWxldGVGaWxlLmNyZWF0ZSh1cmksIG9wdGlvbnMpKTtcclxuICAgIH07XHJcbiAgICBXb3Jrc3BhY2VDaGFuZ2UucHJvdG90eXBlLmNoZWNrRG9jdW1lbnRDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fd29ya3NwYWNlRWRpdCB8fCAhdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXb3Jrc3BhY2UgZWRpdCBpcyBub3QgY29uZmlndXJlZCBmb3IgZG9jdW1lbnQgY2hhbmdlcy4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdvcmtzcGFjZUNoYW5nZTtcclxufSgpKTtcclxuZXhwb3J0IHsgV29ya3NwYWNlQ2hhbmdlIH07XHJcbi8qKlxyXG4gKiBUaGUgVGV4dERvY3VtZW50SWRlbnRpZmllciBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW1RleHREb2N1bWVudElkZW50aWZpZXJdKCNUZXh0RG9jdW1lbnRJZGVudGlmaWVyKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgVGV4dERvY3VtZW50SWRlbnRpZmllcjtcclxuKGZ1bmN0aW9uIChUZXh0RG9jdW1lbnRJZGVudGlmaWVyKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgVGV4dERvY3VtZW50SWRlbnRpZmllciBsaXRlcmFsLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgZG9jdW1lbnQncyB1cmkuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmkpIHtcclxuICAgICAgICByZXR1cm4geyB1cmk6IHVyaSB9O1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50SWRlbnRpZmllci5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbVGV4dERvY3VtZW50SWRlbnRpZmllcl0oI1RleHREb2N1bWVudElkZW50aWZpZXIpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnVyaSk7XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnRJZGVudGlmaWVyLmlzID0gaXM7XHJcbn0pKFRleHREb2N1bWVudElkZW50aWZpZXIgfHwgKFRleHREb2N1bWVudElkZW50aWZpZXIgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyXSgjVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllcikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXI7XHJcbihmdW5jdGlvbiAoVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIgbGl0ZXJhbC5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIGRvY3VtZW50J3MgdXJpLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgZG9jdW1lbnQncyB0ZXh0LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodXJpLCB2ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdXJpOiB1cmksIHZlcnNpb246IHZlcnNpb24gfTtcclxuICAgIH1cclxuICAgIFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW1ZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXJdKCNWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpICYmIChjYW5kaWRhdGUudmVyc2lvbiA9PT0gbnVsbCB8fCBJcy5udW1iZXIoY2FuZGlkYXRlLnZlcnNpb24pKTtcclxuICAgIH1cclxuICAgIFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIuaXMgPSBpcztcclxufSkoVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllciB8fCAoVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllciA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgVGV4dERvY3VtZW50SXRlbSBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW1RleHREb2N1bWVudEl0ZW1dKCNUZXh0RG9jdW1lbnRJdGVtKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgVGV4dERvY3VtZW50SXRlbTtcclxuKGZ1bmN0aW9uIChUZXh0RG9jdW1lbnRJdGVtKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgVGV4dERvY3VtZW50SXRlbSBsaXRlcmFsLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgZG9jdW1lbnQncyB1cmkuXHJcbiAgICAgKiBAcGFyYW0gbGFuZ3VhZ2VJZCBUaGUgZG9jdW1lbnQncyBsYW5ndWFnZSBpZGVudGlmaWVyLlxyXG4gICAgICogQHBhcmFtIHZlcnNpb24gVGhlIGRvY3VtZW50J3MgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdGV4dCBUaGUgZG9jdW1lbnQncyB0ZXh0LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodXJpLCBsYW5ndWFnZUlkLCB2ZXJzaW9uLCB0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdXJpOiB1cmksIGxhbmd1YWdlSWQ6IGxhbmd1YWdlSWQsIHZlcnNpb246IHZlcnNpb24sIHRleHQ6IHRleHQgfTtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudEl0ZW0uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW1RleHREb2N1bWVudEl0ZW1dKCNUZXh0RG9jdW1lbnRJdGVtKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpICYmIElzLnN0cmluZyhjYW5kaWRhdGUubGFuZ3VhZ2VJZCkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS52ZXJzaW9uKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnRleHQpO1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50SXRlbS5pcyA9IGlzO1xyXG59KShUZXh0RG9jdW1lbnRJdGVtIHx8IChUZXh0RG9jdW1lbnRJdGVtID0ge30pKTtcclxuLyoqXHJcbiAqIERlc2NyaWJlcyB0aGUgY29udGVudCB0eXBlIHRoYXQgYSBjbGllbnQgc3VwcG9ydHMgaW4gdmFyaW91c1xyXG4gKiByZXN1bHQgbGl0ZXJhbHMgbGlrZSBgSG92ZXJgLCBgUGFyYW1ldGVySW5mb2Agb3IgYENvbXBsZXRpb25JdGVtYC5cclxuICpcclxuICogUGxlYXNlIG5vdGUgdGhhdCBgTWFya3VwS2luZHNgIG11c3Qgbm90IHN0YXJ0IHdpdGggYSBgJGAuIFRoaXMga2luZHNcclxuICogYXJlIHJlc2VydmVkIGZvciBpbnRlcm5hbCB1c2FnZS5cclxuICovXHJcbmV4cG9ydCB2YXIgTWFya3VwS2luZDtcclxuKGZ1bmN0aW9uIChNYXJrdXBLaW5kKSB7XHJcbiAgICAvKipcclxuICAgICAqIFBsYWluIHRleHQgaXMgc3VwcG9ydGVkIGFzIGEgY29udGVudCBmb3JtYXRcclxuICAgICAqL1xyXG4gICAgTWFya3VwS2luZC5QbGFpblRleHQgPSAncGxhaW50ZXh0JztcclxuICAgIC8qKlxyXG4gICAgICogTWFya2Rvd24gaXMgc3VwcG9ydGVkIGFzIGEgY29udGVudCBmb3JtYXRcclxuICAgICAqL1xyXG4gICAgTWFya3VwS2luZC5NYXJrZG93biA9ICdtYXJrZG93bic7XHJcbn0pKE1hcmt1cEtpbmQgfHwgKE1hcmt1cEtpbmQgPSB7fSkpO1xyXG4oZnVuY3Rpb24gKE1hcmt1cEtpbmQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGEgdmFsdWUgb2YgdGhlIFtNYXJrdXBLaW5kXSgjTWFya3VwS2luZCkgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSA9PT0gTWFya3VwS2luZC5QbGFpblRleHQgfHwgY2FuZGlkYXRlID09PSBNYXJrdXBLaW5kLk1hcmtkb3duO1xyXG4gICAgfVxyXG4gICAgTWFya3VwS2luZC5pcyA9IGlzO1xyXG59KShNYXJrdXBLaW5kIHx8IChNYXJrdXBLaW5kID0ge30pKTtcclxuZXhwb3J0IHZhciBNYXJrdXBDb250ZW50O1xyXG4oZnVuY3Rpb24gKE1hcmt1cENvbnRlbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGNvbmZvcm1zIHRvIHRoZSBbTWFya3VwQ29udGVudF0oI01hcmt1cENvbnRlbnQpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLm9iamVjdExpdGVyYWwodmFsdWUpICYmIE1hcmt1cEtpbmQuaXMoY2FuZGlkYXRlLmtpbmQpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTWFya3VwQ29udGVudC5pcyA9IGlzO1xyXG59KShNYXJrdXBDb250ZW50IHx8IChNYXJrdXBDb250ZW50ID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBraW5kIG9mIGEgY29tcGxldGlvbiBlbnRyeS5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29tcGxldGlvbkl0ZW1LaW5kO1xyXG4oZnVuY3Rpb24gKENvbXBsZXRpb25JdGVtS2luZCkge1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlRleHQgPSAxO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLk1ldGhvZCA9IDI7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuRnVuY3Rpb24gPSAzO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkNvbnN0cnVjdG9yID0gNDtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5GaWVsZCA9IDU7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuVmFyaWFibGUgPSA2O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkNsYXNzID0gNztcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5JbnRlcmZhY2UgPSA4O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLk1vZHVsZSA9IDk7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuUHJvcGVydHkgPSAxMDtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Vbml0ID0gMTE7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuVmFsdWUgPSAxMjtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5FbnVtID0gMTM7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuS2V5d29yZCA9IDE0O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlNuaXBwZXQgPSAxNTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Db2xvciA9IDE2O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkZpbGUgPSAxNztcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5SZWZlcmVuY2UgPSAxODtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Gb2xkZXIgPSAxOTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5FbnVtTWVtYmVyID0gMjA7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuQ29uc3RhbnQgPSAyMTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5TdHJ1Y3QgPSAyMjtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5FdmVudCA9IDIzO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLk9wZXJhdG9yID0gMjQ7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuVHlwZVBhcmFtZXRlciA9IDI1O1xyXG59KShDb21wbGV0aW9uSXRlbUtpbmQgfHwgKENvbXBsZXRpb25JdGVtS2luZCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBEZWZpbmVzIHdoZXRoZXIgdGhlIGluc2VydCB0ZXh0IGluIGEgY29tcGxldGlvbiBpdGVtIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhc1xyXG4gKiBwbGFpbiB0ZXh0IG9yIGEgc25pcHBldC5cclxuICovXHJcbmV4cG9ydCB2YXIgSW5zZXJ0VGV4dEZvcm1hdDtcclxuKGZ1bmN0aW9uIChJbnNlcnRUZXh0Rm9ybWF0KSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwcmltYXJ5IHRleHQgdG8gYmUgaW5zZXJ0ZWQgaXMgdHJlYXRlZCBhcyBhIHBsYWluIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgSW5zZXJ0VGV4dEZvcm1hdC5QbGFpblRleHQgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJpbWFyeSB0ZXh0IHRvIGJlIGluc2VydGVkIGlzIHRyZWF0ZWQgYXMgYSBzbmlwcGV0LlxyXG4gICAgICpcclxuICAgICAqIEEgc25pcHBldCBjYW4gZGVmaW5lIHRhYiBzdG9wcyBhbmQgcGxhY2Vob2xkZXJzIHdpdGggYCQxYCwgYCQyYFxyXG4gICAgICogYW5kIGAkezM6Zm9vfWAuIGAkMGAgZGVmaW5lcyB0aGUgZmluYWwgdGFiIHN0b3AsIGl0IGRlZmF1bHRzIHRvXHJcbiAgICAgKiB0aGUgZW5kIG9mIHRoZSBzbmlwcGV0LiBQbGFjZWhvbGRlcnMgd2l0aCBlcXVhbCBpZGVudGlmaWVycyBhcmUgbGlua2VkLFxyXG4gICAgICogdGhhdCBpcyB0eXBpbmcgaW4gb25lIHdpbGwgdXBkYXRlIG90aGVycyB0b28uXHJcbiAgICAgKlxyXG4gICAgICogU2VlIGFsc286IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvdnNjb2RlL2Jsb2IvbWFzdGVyL3NyYy92cy9lZGl0b3IvY29udHJpYi9zbmlwcGV0L2NvbW1vbi9zbmlwcGV0Lm1kXHJcbiAgICAgKi9cclxuICAgIEluc2VydFRleHRGb3JtYXQuU25pcHBldCA9IDI7XHJcbn0pKEluc2VydFRleHRGb3JtYXQgfHwgKEluc2VydFRleHRGb3JtYXQgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvbXBsZXRpb25JdGVtIG5hbWVzcGFjZSBwcm92aWRlcyBmdW5jdGlvbnMgdG8gZGVhbCB3aXRoXHJcbiAqIGNvbXBsZXRpb24gaXRlbXMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvbXBsZXRpb25JdGVtO1xyXG4oZnVuY3Rpb24gKENvbXBsZXRpb25JdGVtKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGNvbXBsZXRpb24gaXRlbSBhbmQgc2VlZCBpdCB3aXRoIGEgbGFiZWwuXHJcbiAgICAgKiBAcGFyYW0gbGFiZWwgVGhlIGNvbXBsZXRpb24gaXRlbSdzIGxhYmVsXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsYWJlbCkge1xyXG4gICAgICAgIHJldHVybiB7IGxhYmVsOiBsYWJlbCB9O1xyXG4gICAgfVxyXG4gICAgQ29tcGxldGlvbkl0ZW0uY3JlYXRlID0gY3JlYXRlO1xyXG59KShDb21wbGV0aW9uSXRlbSB8fCAoQ29tcGxldGlvbkl0ZW0gPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvbXBsZXRpb25MaXN0IG5hbWVzcGFjZSBwcm92aWRlcyBmdW5jdGlvbnMgdG8gZGVhbCB3aXRoXHJcbiAqIGNvbXBsZXRpb24gbGlzdHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvbXBsZXRpb25MaXN0O1xyXG4oZnVuY3Rpb24gKENvbXBsZXRpb25MaXN0KSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29tcGxldGlvbiBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpdGVtcyBUaGUgY29tcGxldGlvbiBpdGVtcy5cclxuICAgICAqIEBwYXJhbSBpc0luY29tcGxldGUgVGhlIGxpc3QgaXMgbm90IGNvbXBsZXRlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUoaXRlbXMsIGlzSW5jb21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiB7IGl0ZW1zOiBpdGVtcyA/IGl0ZW1zIDogW10sIGlzSW5jb21wbGV0ZTogISFpc0luY29tcGxldGUgfTtcclxuICAgIH1cclxuICAgIENvbXBsZXRpb25MaXN0LmNyZWF0ZSA9IGNyZWF0ZTtcclxufSkoQ29tcGxldGlvbkxpc3QgfHwgKENvbXBsZXRpb25MaXN0ID0ge30pKTtcclxuZXhwb3J0IHZhciBNYXJrZWRTdHJpbmc7XHJcbihmdW5jdGlvbiAoTWFya2VkU3RyaW5nKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBtYXJrZWQgc3RyaW5nIGZyb20gcGxhaW4gdGV4dC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGxhaW5UZXh0IFRoZSBwbGFpbiB0ZXh0LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBmcm9tUGxhaW5UZXh0KHBsYWluVGV4dCkge1xyXG4gICAgICAgIHJldHVybiBwbGFpblRleHQucmVwbGFjZSgvW1xcXFxgKl97fVtcXF0oKSMrXFwtLiFdL2csIFwiXFxcXCQmXCIpOyAvLyBlc2NhcGUgbWFya2Rvd24gc3ludGF4IHRva2VuczogaHR0cDovL2RhcmluZ2ZpcmViYWxsLm5ldC9wcm9qZWN0cy9tYXJrZG93bi9zeW50YXgjYmFja3NsYXNoXHJcbiAgICB9XHJcbiAgICBNYXJrZWRTdHJpbmcuZnJvbVBsYWluVGV4dCA9IGZyb21QbGFpblRleHQ7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBjb25mb3JtcyB0byB0aGUgW01hcmtlZFN0cmluZ10oI01hcmtlZFN0cmluZykgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLnN0cmluZyhjYW5kaWRhdGUpIHx8IChJcy5vYmplY3RMaXRlcmFsKGNhbmRpZGF0ZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5sYW5ndWFnZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS52YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgTWFya2VkU3RyaW5nLmlzID0gaXM7XHJcbn0pKE1hcmtlZFN0cmluZyB8fCAoTWFya2VkU3RyaW5nID0ge30pKTtcclxuZXhwb3J0IHZhciBIb3ZlcjtcclxuKGZ1bmN0aW9uIChIb3Zlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgY29uZm9ybXMgdG8gdGhlIFtIb3Zlcl0oI0hvdmVyKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiAhIWNhbmRpZGF0ZSAmJiBJcy5vYmplY3RMaXRlcmFsKGNhbmRpZGF0ZSkgJiYgKE1hcmt1cENvbnRlbnQuaXMoY2FuZGlkYXRlLmNvbnRlbnRzKSB8fFxyXG4gICAgICAgICAgICBNYXJrZWRTdHJpbmcuaXMoY2FuZGlkYXRlLmNvbnRlbnRzKSB8fFxyXG4gICAgICAgICAgICBJcy50eXBlZEFycmF5KGNhbmRpZGF0ZS5jb250ZW50cywgTWFya2VkU3RyaW5nLmlzKSkgJiYgKHZhbHVlLnJhbmdlID09PSB2b2lkIDAgfHwgUmFuZ2UuaXModmFsdWUucmFuZ2UpKTtcclxuICAgIH1cclxuICAgIEhvdmVyLmlzID0gaXM7XHJcbn0pKEhvdmVyIHx8IChIb3ZlciA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgUGFyYW1ldGVySW5mb3JtYXRpb24gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtQYXJhbWV0ZXJJbmZvcm1hdGlvbl0oI1BhcmFtZXRlckluZm9ybWF0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgUGFyYW1ldGVySW5mb3JtYXRpb247XHJcbihmdW5jdGlvbiAoUGFyYW1ldGVySW5mb3JtYXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBwYXJhbWV0ZXIgaW5mb3JtYXRpb24gbGl0ZXJhbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbGFiZWwgQSBsYWJlbCBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gZG9jdW1lbnRhdGlvbiBBIGRvYyBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsYWJlbCwgZG9jdW1lbnRhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudGF0aW9uID8geyBsYWJlbDogbGFiZWwsIGRvY3VtZW50YXRpb246IGRvY3VtZW50YXRpb24gfSA6IHsgbGFiZWw6IGxhYmVsIH07XHJcbiAgICB9XHJcbiAgICBQYXJhbWV0ZXJJbmZvcm1hdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICA7XHJcbn0pKFBhcmFtZXRlckluZm9ybWF0aW9uIHx8IChQYXJhbWV0ZXJJbmZvcm1hdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgU2lnbmF0dXJlSW5mb3JtYXRpb24gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtTaWduYXR1cmVJbmZvcm1hdGlvbl0oI1NpZ25hdHVyZUluZm9ybWF0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgU2lnbmF0dXJlSW5mb3JtYXRpb247XHJcbihmdW5jdGlvbiAoU2lnbmF0dXJlSW5mb3JtYXRpb24pIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsYWJlbCwgZG9jdW1lbnRhdGlvbikge1xyXG4gICAgICAgIHZhciBwYXJhbWV0ZXJzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgbGFiZWw6IGxhYmVsIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoZG9jdW1lbnRhdGlvbikpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRvY3VtZW50YXRpb24gPSBkb2N1bWVudGF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChwYXJhbWV0ZXJzKSkge1xyXG4gICAgICAgICAgICByZXN1bHQucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQucGFyYW1ldGVycyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgU2lnbmF0dXJlSW5mb3JtYXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG59KShTaWduYXR1cmVJbmZvcm1hdGlvbiB8fCAoU2lnbmF0dXJlSW5mb3JtYXRpb24gPSB7fSkpO1xyXG4vKipcclxuICogQSBkb2N1bWVudCBoaWdobGlnaHQga2luZC5cclxuICovXHJcbmV4cG9ydCB2YXIgRG9jdW1lbnRIaWdobGlnaHRLaW5kO1xyXG4oZnVuY3Rpb24gKERvY3VtZW50SGlnaGxpZ2h0S2luZCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHRleHR1YWwgb2NjdXJyZW5jZS5cclxuICAgICAqL1xyXG4gICAgRG9jdW1lbnRIaWdobGlnaHRLaW5kLlRleHQgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkLWFjY2VzcyBvZiBhIHN5bWJvbCwgbGlrZSByZWFkaW5nIGEgdmFyaWFibGUuXHJcbiAgICAgKi9cclxuICAgIERvY3VtZW50SGlnaGxpZ2h0S2luZC5SZWFkID0gMjtcclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUtYWNjZXNzIG9mIGEgc3ltYm9sLCBsaWtlIHdyaXRpbmcgdG8gYSB2YXJpYWJsZS5cclxuICAgICAqL1xyXG4gICAgRG9jdW1lbnRIaWdobGlnaHRLaW5kLldyaXRlID0gMztcclxufSkoRG9jdW1lbnRIaWdobGlnaHRLaW5kIHx8IChEb2N1bWVudEhpZ2hsaWdodEtpbmQgPSB7fSkpO1xyXG4vKipcclxuICogRG9jdW1lbnRIaWdobGlnaHQgbmFtZXNwYWNlIHRvIHByb3ZpZGUgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0RvY3VtZW50SGlnaGxpZ2h0XSgjRG9jdW1lbnRIaWdobGlnaHQpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBEb2N1bWVudEhpZ2hsaWdodDtcclxuKGZ1bmN0aW9uIChEb2N1bWVudEhpZ2hsaWdodCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBEb2N1bWVudEhpZ2hsaWdodCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgVGhlIHJhbmdlIHRoZSBoaWdobGlnaHQgYXBwbGllcyB0by5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHJhbmdlLCBraW5kKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgcmFuZ2U6IHJhbmdlIH07XHJcbiAgICAgICAgaWYgKElzLm51bWJlcihraW5kKSkge1xyXG4gICAgICAgICAgICByZXN1bHQua2luZCA9IGtpbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBEb2N1bWVudEhpZ2hsaWdodC5jcmVhdGUgPSBjcmVhdGU7XHJcbn0pKERvY3VtZW50SGlnaGxpZ2h0IHx8IChEb2N1bWVudEhpZ2hsaWdodCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBBIHN5bWJvbCBraW5kLlxyXG4gKi9cclxuZXhwb3J0IHZhciBTeW1ib2xLaW5kO1xyXG4oZnVuY3Rpb24gKFN5bWJvbEtpbmQpIHtcclxuICAgIFN5bWJvbEtpbmQuRmlsZSA9IDE7XHJcbiAgICBTeW1ib2xLaW5kLk1vZHVsZSA9IDI7XHJcbiAgICBTeW1ib2xLaW5kLk5hbWVzcGFjZSA9IDM7XHJcbiAgICBTeW1ib2xLaW5kLlBhY2thZ2UgPSA0O1xyXG4gICAgU3ltYm9sS2luZC5DbGFzcyA9IDU7XHJcbiAgICBTeW1ib2xLaW5kLk1ldGhvZCA9IDY7XHJcbiAgICBTeW1ib2xLaW5kLlByb3BlcnR5ID0gNztcclxuICAgIFN5bWJvbEtpbmQuRmllbGQgPSA4O1xyXG4gICAgU3ltYm9sS2luZC5Db25zdHJ1Y3RvciA9IDk7XHJcbiAgICBTeW1ib2xLaW5kLkVudW0gPSAxMDtcclxuICAgIFN5bWJvbEtpbmQuSW50ZXJmYWNlID0gMTE7XHJcbiAgICBTeW1ib2xLaW5kLkZ1bmN0aW9uID0gMTI7XHJcbiAgICBTeW1ib2xLaW5kLlZhcmlhYmxlID0gMTM7XHJcbiAgICBTeW1ib2xLaW5kLkNvbnN0YW50ID0gMTQ7XHJcbiAgICBTeW1ib2xLaW5kLlN0cmluZyA9IDE1O1xyXG4gICAgU3ltYm9sS2luZC5OdW1iZXIgPSAxNjtcclxuICAgIFN5bWJvbEtpbmQuQm9vbGVhbiA9IDE3O1xyXG4gICAgU3ltYm9sS2luZC5BcnJheSA9IDE4O1xyXG4gICAgU3ltYm9sS2luZC5PYmplY3QgPSAxOTtcclxuICAgIFN5bWJvbEtpbmQuS2V5ID0gMjA7XHJcbiAgICBTeW1ib2xLaW5kLk51bGwgPSAyMTtcclxuICAgIFN5bWJvbEtpbmQuRW51bU1lbWJlciA9IDIyO1xyXG4gICAgU3ltYm9sS2luZC5TdHJ1Y3QgPSAyMztcclxuICAgIFN5bWJvbEtpbmQuRXZlbnQgPSAyNDtcclxuICAgIFN5bWJvbEtpbmQuT3BlcmF0b3IgPSAyNTtcclxuICAgIFN5bWJvbEtpbmQuVHlwZVBhcmFtZXRlciA9IDI2O1xyXG59KShTeW1ib2xLaW5kIHx8IChTeW1ib2xLaW5kID0ge30pKTtcclxuZXhwb3J0IHZhciBTeW1ib2xJbmZvcm1hdGlvbjtcclxuKGZ1bmN0aW9uIChTeW1ib2xJbmZvcm1hdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHN5bWJvbCBpbmZvcm1hdGlvbiBsaXRlcmFsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0ga2luZCBUaGUga2luZCBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSByYW5nZSBvZiB0aGUgbG9jYXRpb24gb2YgdGhlIHN5bWJvbC5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIHJlc291cmNlIG9mIHRoZSBsb2NhdGlvbiBvZiBzeW1ib2wsIGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IGRvY3VtZW50LlxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lck5hbWUgVGhlIG5hbWUgb2YgdGhlIHN5bWJvbCBjb250YWluaW5nIHRoZSBzeW1ib2wuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShuYW1lLCBraW5kLCByYW5nZSwgdXJpLCBjb250YWluZXJOYW1lKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAga2luZDoga2luZCxcclxuICAgICAgICAgICAgbG9jYXRpb246IHsgdXJpOiB1cmksIHJhbmdlOiByYW5nZSB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY29udGFpbmVyTmFtZSkge1xyXG4gICAgICAgICAgICByZXN1bHQuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lck5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBTeW1ib2xJbmZvcm1hdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbn0pKFN5bWJvbEluZm9ybWF0aW9uIHx8IChTeW1ib2xJbmZvcm1hdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHByb2dyYW1taW5nIGNvbnN0cnVjdHMgbGlrZSB2YXJpYWJsZXMsIGNsYXNzZXMsIGludGVyZmFjZXMgZXRjLlxyXG4gKiB0aGF0IGFwcGVhciBpbiBhIGRvY3VtZW50LiBEb2N1bWVudCBzeW1ib2xzIGNhbiBiZSBoaWVyYXJjaGljYWwgYW5kIHRoZXlcclxuICogaGF2ZSB0d28gcmFuZ2VzOiBvbmUgdGhhdCBlbmNsb3NlcyBpdHMgZGVmaW5pdGlvbiBhbmQgb25lIHRoYXQgcG9pbnRzIHRvXHJcbiAqIGl0cyBtb3N0IGludGVyZXN0aW5nIHJhbmdlLCBlLmcuIHRoZSByYW5nZSBvZiBhbiBpZGVudGlmaWVyLlxyXG4gKi9cclxudmFyIERvY3VtZW50U3ltYm9sID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRG9jdW1lbnRTeW1ib2woKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRG9jdW1lbnRTeW1ib2w7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IERvY3VtZW50U3ltYm9sIH07XHJcbihmdW5jdGlvbiAoRG9jdW1lbnRTeW1ib2wpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzeW1ib2wgaW5mb3JtYXRpb24gbGl0ZXJhbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIGRldGFpbCBUaGUgZGV0YWlsIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0ga2luZCBUaGUga2luZCBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSByYW5nZSBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIHNlbGVjdGlvblJhbmdlIFRoZSBzZWxlY3Rpb25SYW5nZSBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIGNoaWxkcmVuIENoaWxkcmVuIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShuYW1lLCBkZXRhaWwsIGtpbmQsIHJhbmdlLCBzZWxlY3Rpb25SYW5nZSwgY2hpbGRyZW4pIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBkZXRhaWw6IGRldGFpbCxcclxuICAgICAgICAgICAga2luZDoga2luZCxcclxuICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25SYW5nZTogc2VsZWN0aW9uUmFuZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjaGlsZHJlbiAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgRG9jdW1lbnRTeW1ib2wuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0RvY3VtZW50U3ltYm9sXSgjRG9jdW1lbnRTeW1ib2wpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSAmJlxyXG4gICAgICAgICAgICBJcy5zdHJpbmcoY2FuZGlkYXRlLm5hbWUpICYmIElzLm51bWJlcihjYW5kaWRhdGUua2luZCkgJiZcclxuICAgICAgICAgICAgUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKSAmJiBSYW5nZS5pcyhjYW5kaWRhdGUuc2VsZWN0aW9uUmFuZ2UpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuZGV0YWlsID09PSB2b2lkIDAgfHwgSXMuc3RyaW5nKGNhbmRpZGF0ZS5kZXRhaWwpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmRlcHJlY2F0ZWQgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5kZXByZWNhdGVkKSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5jaGlsZHJlbiA9PT0gdm9pZCAwIHx8IEFycmF5LmlzQXJyYXkoY2FuZGlkYXRlLmNoaWxkcmVuKSk7XHJcbiAgICB9XHJcbiAgICBEb2N1bWVudFN5bWJvbC5pcyA9IGlzO1xyXG59KShEb2N1bWVudFN5bWJvbCB8fCAoRG9jdW1lbnRTeW1ib2wgPSB7fSkpO1xyXG4vKipcclxuICogQSBzZXQgb2YgcHJlZGVmaW5lZCBjb2RlIGFjdGlvbiBraW5kc1xyXG4gKi9cclxuZXhwb3J0IHZhciBDb2RlQWN0aW9uS2luZDtcclxuKGZ1bmN0aW9uIChDb2RlQWN0aW9uS2luZCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHF1aWNrZml4IGFjdGlvbnM6ICdxdWlja2ZpeCdcclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuUXVpY2tGaXggPSAncXVpY2tmaXgnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHJlZmFjdG9yaW5nIGFjdGlvbnM6ICdyZWZhY3RvcidcclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuUmVmYWN0b3IgPSAncmVmYWN0b3InO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHJlZmFjdG9yaW5nIGV4dHJhY3Rpb24gYWN0aW9uczogJ3JlZmFjdG9yLmV4dHJhY3QnXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZSBleHRyYWN0IGFjdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogLSBFeHRyYWN0IG1ldGhvZFxyXG4gICAgICogLSBFeHRyYWN0IGZ1bmN0aW9uXHJcbiAgICAgKiAtIEV4dHJhY3QgdmFyaWFibGVcclxuICAgICAqIC0gRXh0cmFjdCBpbnRlcmZhY2UgZnJvbSBjbGFzc1xyXG4gICAgICogLSAuLi5cclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuUmVmYWN0b3JFeHRyYWN0ID0gJ3JlZmFjdG9yLmV4dHJhY3QnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHJlZmFjdG9yaW5nIGlubGluZSBhY3Rpb25zOiAncmVmYWN0b3IuaW5saW5lJ1xyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGUgaW5saW5lIGFjdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogLSBJbmxpbmUgZnVuY3Rpb25cclxuICAgICAqIC0gSW5saW5lIHZhcmlhYmxlXHJcbiAgICAgKiAtIElubGluZSBjb25zdGFudFxyXG4gICAgICogLSAuLi5cclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuUmVmYWN0b3JJbmxpbmUgPSAncmVmYWN0b3IuaW5saW5lJztcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBraW5kIGZvciByZWZhY3RvcmluZyByZXdyaXRlIGFjdGlvbnM6ICdyZWZhY3Rvci5yZXdyaXRlJ1xyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGUgcmV3cml0ZSBhY3Rpb25zOlxyXG4gICAgICpcclxuICAgICAqIC0gQ29udmVydCBKYXZhU2NyaXB0IGZ1bmN0aW9uIHRvIGNsYXNzXHJcbiAgICAgKiAtIEFkZCBvciByZW1vdmUgcGFyYW1ldGVyXHJcbiAgICAgKiAtIEVuY2Fwc3VsYXRlIGZpZWxkXHJcbiAgICAgKiAtIE1ha2UgbWV0aG9kIHN0YXRpY1xyXG4gICAgICogLSBNb3ZlIG1ldGhvZCB0byBiYXNlIGNsYXNzXHJcbiAgICAgKiAtIC4uLlxyXG4gICAgICovXHJcbiAgICBDb2RlQWN0aW9uS2luZC5SZWZhY3RvclJld3JpdGUgPSAncmVmYWN0b3IucmV3cml0ZSc7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2Uga2luZCBmb3Igc291cmNlIGFjdGlvbnM6IGBzb3VyY2VgXHJcbiAgICAgKlxyXG4gICAgICogU291cmNlIGNvZGUgYWN0aW9ucyBhcHBseSB0byB0aGUgZW50aXJlIGZpbGUuXHJcbiAgICAgKi9cclxuICAgIENvZGVBY3Rpb25LaW5kLlNvdXJjZSA9ICdzb3VyY2UnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIGFuIG9yZ2FuaXplIGltcG9ydHMgc291cmNlIGFjdGlvbjogYHNvdXJjZS5vcmdhbml6ZUltcG9ydHNgXHJcbiAgICAgKi9cclxuICAgIENvZGVBY3Rpb25LaW5kLlNvdXJjZU9yZ2FuaXplSW1wb3J0cyA9ICdzb3VyY2Uub3JnYW5pemVJbXBvcnRzJztcclxufSkoQ29kZUFjdGlvbktpbmQgfHwgKENvZGVBY3Rpb25LaW5kID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb2RlQWN0aW9uQ29udGV4dCBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0NvZGVBY3Rpb25Db250ZXh0XSgjQ29kZUFjdGlvbkNvbnRleHQpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb2RlQWN0aW9uQ29udGV4dDtcclxuKGZ1bmN0aW9uIChDb2RlQWN0aW9uQ29udGV4dCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IENvZGVBY3Rpb25Db250ZXh0IGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShkaWFnbm9zdGljcywgb25seSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IGRpYWdub3N0aWNzOiBkaWFnbm9zdGljcyB9O1xyXG4gICAgICAgIGlmIChvbmx5ICE9PSB2b2lkIDAgJiYgb25seSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXN1bHQub25seSA9IG9ubHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBDb2RlQWN0aW9uQ29udGV4dC5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbQ29kZUFjdGlvbkNvbnRleHRdKCNDb2RlQWN0aW9uQ29udGV4dCkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIElzLnR5cGVkQXJyYXkoY2FuZGlkYXRlLmRpYWdub3N0aWNzLCBEaWFnbm9zdGljLmlzKSAmJiAoY2FuZGlkYXRlLm9ubHkgPT09IHZvaWQgMCB8fCBJcy50eXBlZEFycmF5KGNhbmRpZGF0ZS5vbmx5LCBJcy5zdHJpbmcpKTtcclxuICAgIH1cclxuICAgIENvZGVBY3Rpb25Db250ZXh0LmlzID0gaXM7XHJcbn0pKENvZGVBY3Rpb25Db250ZXh0IHx8IChDb2RlQWN0aW9uQ29udGV4dCA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgQ29kZUFjdGlvbjtcclxuKGZ1bmN0aW9uIChDb2RlQWN0aW9uKSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodGl0bGUsIGNvbW1hbmRPckVkaXQsIGtpbmQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0geyB0aXRsZTogdGl0bGUgfTtcclxuICAgICAgICBpZiAoQ29tbWFuZC5pcyhjb21tYW5kT3JFZGl0KSkge1xyXG4gICAgICAgICAgICByZXN1bHQuY29tbWFuZCA9IGNvbW1hbmRPckVkaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQuZWRpdCA9IGNvbW1hbmRPckVkaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChraW5kICE9PSB2b2lkIG51bGwpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmtpbmQgPSBraW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgQ29kZUFjdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlICYmIElzLnN0cmluZyhjYW5kaWRhdGUudGl0bGUpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuZGlhZ25vc3RpY3MgPT09IHZvaWQgMCB8fCBJcy50eXBlZEFycmF5KGNhbmRpZGF0ZS5kaWFnbm9zdGljcywgRGlhZ25vc3RpYy5pcykpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUua2luZCA9PT0gdm9pZCAwIHx8IElzLnN0cmluZyhjYW5kaWRhdGUua2luZCkpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuZWRpdCAhPT0gdm9pZCAwIHx8IGNhbmRpZGF0ZS5jb21tYW5kICE9PSB2b2lkIDApICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuY29tbWFuZCA9PT0gdm9pZCAwIHx8IENvbW1hbmQuaXMoY2FuZGlkYXRlLmNvbW1hbmQpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmVkaXQgPT09IHZvaWQgMCB8fCBXb3Jrc3BhY2VFZGl0LmlzKGNhbmRpZGF0ZS5lZGl0KSk7XHJcbiAgICB9XHJcbiAgICBDb2RlQWN0aW9uLmlzID0gaXM7XHJcbn0pKENvZGVBY3Rpb24gfHwgKENvZGVBY3Rpb24gPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvZGVMZW5zIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbQ29kZUxlbnNdKCNDb2RlTGVucykgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvZGVMZW5zO1xyXG4oZnVuY3Rpb24gKENvZGVMZW5zKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgQ29kZUxlbnMgbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHJhbmdlLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgcmFuZ2U6IHJhbmdlIH07XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoZGF0YSkpXHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgQ29kZUxlbnMuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0NvZGVMZW5zXSgjQ29kZUxlbnMpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLmNvbW1hbmQpIHx8IENvbW1hbmQuaXMoY2FuZGlkYXRlLmNvbW1hbmQpKTtcclxuICAgIH1cclxuICAgIENvZGVMZW5zLmlzID0gaXM7XHJcbn0pKENvZGVMZW5zIHx8IChDb2RlTGVucyA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgRm9ybWF0dGluZ09wdGlvbnMgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtGb3JtYXR0aW5nT3B0aW9uc10oI0Zvcm1hdHRpbmdPcHRpb25zKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgRm9ybWF0dGluZ09wdGlvbnM7XHJcbihmdW5jdGlvbiAoRm9ybWF0dGluZ09wdGlvbnMpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBGb3JtYXR0aW5nT3B0aW9ucyBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodGFiU2l6ZSwgaW5zZXJ0U3BhY2VzKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdGFiU2l6ZTogdGFiU2l6ZSwgaW5zZXJ0U3BhY2VzOiBpbnNlcnRTcGFjZXMgfTtcclxuICAgIH1cclxuICAgIEZvcm1hdHRpbmdPcHRpb25zLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtGb3JtYXR0aW5nT3B0aW9uc10oI0Zvcm1hdHRpbmdPcHRpb25zKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS50YWJTaXplKSAmJiBJcy5ib29sZWFuKGNhbmRpZGF0ZS5pbnNlcnRTcGFjZXMpO1xyXG4gICAgfVxyXG4gICAgRm9ybWF0dGluZ09wdGlvbnMuaXMgPSBpcztcclxufSkoRm9ybWF0dGluZ09wdGlvbnMgfHwgKEZvcm1hdHRpbmdPcHRpb25zID0ge30pKTtcclxuLyoqXHJcbiAqIEEgZG9jdW1lbnQgbGluayBpcyBhIHJhbmdlIGluIGEgdGV4dCBkb2N1bWVudCB0aGF0IGxpbmtzIHRvIGFuIGludGVybmFsIG9yIGV4dGVybmFsIHJlc291cmNlLCBsaWtlIGFub3RoZXJcclxuICogdGV4dCBkb2N1bWVudCBvciBhIHdlYiBzaXRlLlxyXG4gKi9cclxudmFyIERvY3VtZW50TGluayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERvY3VtZW50TGluaygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBEb2N1bWVudExpbms7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IERvY3VtZW50TGluayB9O1xyXG4vKipcclxuICogVGhlIERvY3VtZW50TGluayBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0RvY3VtZW50TGlua10oI0RvY3VtZW50TGluaykgbGl0ZXJhbHMuXHJcbiAqL1xyXG4oZnVuY3Rpb24gKERvY3VtZW50TGluaykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IERvY3VtZW50TGluayBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUocmFuZ2UsIHRhcmdldCwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB7IHJhbmdlOiByYW5nZSwgdGFyZ2V0OiB0YXJnZXQsIGRhdGE6IGRhdGEgfTtcclxuICAgIH1cclxuICAgIERvY3VtZW50TGluay5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbRG9jdW1lbnRMaW5rXSgjRG9jdW1lbnRMaW5rKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKSAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS50YXJnZXQpIHx8IElzLnN0cmluZyhjYW5kaWRhdGUudGFyZ2V0KSk7XHJcbiAgICB9XHJcbiAgICBEb2N1bWVudExpbmsuaXMgPSBpcztcclxufSkoRG9jdW1lbnRMaW5rIHx8IChEb2N1bWVudExpbmsgPSB7fSkpO1xyXG5leHBvcnQgdmFyIEVPTCA9IFsnXFxuJywgJ1xcclxcbicsICdcXHInXTtcclxuZXhwb3J0IHZhciBUZXh0RG9jdW1lbnQ7XHJcbihmdW5jdGlvbiAoVGV4dERvY3VtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgSVRleHREb2N1bWVudCBsaXRlcmFsIGZyb20gdGhlIGdpdmVuIHVyaSBhbmQgY29udGVudC5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIGRvY3VtZW50J3MgdXJpLlxyXG4gICAgICogQHBhcmFtIGxhbmd1YWdlSWQgIFRoZSBkb2N1bWVudCdzIGxhbmd1YWdlIElkLlxyXG4gICAgICogQHBhcmFtIGNvbnRlbnQgVGhlIGRvY3VtZW50J3MgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHVyaSwgbGFuZ3VhZ2VJZCwgdmVyc2lvbiwgY29udGVudCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRnVsbFRleHREb2N1bWVudCh1cmksIGxhbmd1YWdlSWQsIHZlcnNpb24sIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50LmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtJVGV4dERvY3VtZW50XSgjSVRleHREb2N1bWVudCkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudXJpKSAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5sYW5ndWFnZUlkKSB8fCBJcy5zdHJpbmcoY2FuZGlkYXRlLmxhbmd1YWdlSWQpKSAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmxpbmVDb3VudClcclxuICAgICAgICAgICAgJiYgSXMuZnVuYyhjYW5kaWRhdGUuZ2V0VGV4dCkgJiYgSXMuZnVuYyhjYW5kaWRhdGUucG9zaXRpb25BdCkgJiYgSXMuZnVuYyhjYW5kaWRhdGUub2Zmc2V0QXQpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50LmlzID0gaXM7XHJcbiAgICBmdW5jdGlvbiBhcHBseUVkaXRzKGRvY3VtZW50LCBlZGl0cykge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuZ2V0VGV4dCgpO1xyXG4gICAgICAgIHZhciBzb3J0ZWRFZGl0cyA9IG1lcmdlU29ydChlZGl0cywgZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgdmFyIGRpZmYgPSBhLnJhbmdlLnN0YXJ0LmxpbmUgLSBiLnJhbmdlLnN0YXJ0LmxpbmU7XHJcbiAgICAgICAgICAgIGlmIChkaWZmID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5yYW5nZS5zdGFydC5jaGFyYWN0ZXIgLSBiLnJhbmdlLnN0YXJ0LmNoYXJhY3RlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGlmZjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbGFzdE1vZGlmaWVkT2Zmc2V0ID0gdGV4dC5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHNvcnRlZEVkaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gc29ydGVkRWRpdHNbaV07XHJcbiAgICAgICAgICAgIHZhciBzdGFydE9mZnNldCA9IGRvY3VtZW50Lm9mZnNldEF0KGUucmFuZ2Uuc3RhcnQpO1xyXG4gICAgICAgICAgICB2YXIgZW5kT2Zmc2V0ID0gZG9jdW1lbnQub2Zmc2V0QXQoZS5yYW5nZS5lbmQpO1xyXG4gICAgICAgICAgICBpZiAoZW5kT2Zmc2V0IDw9IGxhc3RNb2RpZmllZE9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIHN0YXJ0T2Zmc2V0KSArIGUubmV3VGV4dCArIHRleHQuc3Vic3RyaW5nKGVuZE9mZnNldCwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPdmVybGFwcGluZyBlZGl0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkT2Zmc2V0ID0gc3RhcnRPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50LmFwcGx5RWRpdHMgPSBhcHBseUVkaXRzO1xyXG4gICAgZnVuY3Rpb24gbWVyZ2VTb3J0KGRhdGEsIGNvbXBhcmUpIHtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICAvLyBzb3J0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwID0gKGRhdGEubGVuZ3RoIC8gMikgfCAwO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gZGF0YS5zbGljZSgwLCBwKTtcclxuICAgICAgICB2YXIgcmlnaHQgPSBkYXRhLnNsaWNlKHApO1xyXG4gICAgICAgIG1lcmdlU29ydChsZWZ0LCBjb21wYXJlKTtcclxuICAgICAgICBtZXJnZVNvcnQocmlnaHQsIGNvbXBhcmUpO1xyXG4gICAgICAgIHZhciBsZWZ0SWR4ID0gMDtcclxuICAgICAgICB2YXIgcmlnaHRJZHggPSAwO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB3aGlsZSAobGVmdElkeCA8IGxlZnQubGVuZ3RoICYmIHJpZ2h0SWR4IDwgcmlnaHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXQgPSBjb21wYXJlKGxlZnRbbGVmdElkeF0sIHJpZ2h0W3JpZ2h0SWR4XSk7XHJcbiAgICAgICAgICAgIGlmIChyZXQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc21hbGxlcl9lcXVhbCAtPiB0YWtlIGxlZnQgdG8gcHJlc2VydmUgb3JkZXJcclxuICAgICAgICAgICAgICAgIGRhdGFbaSsrXSA9IGxlZnRbbGVmdElkeCsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGdyZWF0ZXIgLT4gdGFrZSByaWdodFxyXG4gICAgICAgICAgICAgICAgZGF0YVtpKytdID0gcmlnaHRbcmlnaHRJZHgrK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGxlZnRJZHggPCBsZWZ0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkYXRhW2krK10gPSBsZWZ0W2xlZnRJZHgrK107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChyaWdodElkeCA8IHJpZ2h0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkYXRhW2krK10gPSByaWdodFtyaWdodElkeCsrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn0pKFRleHREb2N1bWVudCB8fCAoVGV4dERvY3VtZW50ID0ge30pKTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgcmVhc29ucyB3aHkgYSB0ZXh0IGRvY3VtZW50IGlzIHNhdmVkLlxyXG4gKi9cclxuZXhwb3J0IHZhciBUZXh0RG9jdW1lbnRTYXZlUmVhc29uO1xyXG4oZnVuY3Rpb24gKFRleHREb2N1bWVudFNhdmVSZWFzb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogTWFudWFsbHkgdHJpZ2dlcmVkLCBlLmcuIGJ5IHRoZSB1c2VyIHByZXNzaW5nIHNhdmUsIGJ5IHN0YXJ0aW5nIGRlYnVnZ2luZyxcclxuICAgICAqIG9yIGJ5IGFuIEFQSSBjYWxsLlxyXG4gICAgICovXHJcbiAgICBUZXh0RG9jdW1lbnRTYXZlUmVhc29uLk1hbnVhbCA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIEF1dG9tYXRpYyBhZnRlciBhIGRlbGF5LlxyXG4gICAgICovXHJcbiAgICBUZXh0RG9jdW1lbnRTYXZlUmVhc29uLkFmdGVyRGVsYXkgPSAyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRoZSBlZGl0b3IgbG9zdCBmb2N1cy5cclxuICAgICAqL1xyXG4gICAgVGV4dERvY3VtZW50U2F2ZVJlYXNvbi5Gb2N1c091dCA9IDM7XHJcbn0pKFRleHREb2N1bWVudFNhdmVSZWFzb24gfHwgKFRleHREb2N1bWVudFNhdmVSZWFzb24gPSB7fSkpO1xyXG52YXIgRnVsbFRleHREb2N1bWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZ1bGxUZXh0RG9jdW1lbnQodXJpLCBsYW5ndWFnZUlkLCB2ZXJzaW9uLCBjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fdXJpID0gdXJpO1xyXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlSWQgPSBsYW5ndWFnZUlkO1xyXG4gICAgICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuX2xpbmVPZmZzZXRzID0gbnVsbDtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZSwgXCJ1cmlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLCBcImxhbmd1YWdlSWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VJZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZSwgXCJ2ZXJzaW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZS5nZXRUZXh0ID0gZnVuY3Rpb24gKHJhbmdlKSB7XHJcbiAgICAgICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHRoaXMub2Zmc2V0QXQocmFuZ2Uuc3RhcnQpO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gdGhpcy5vZmZzZXRBdChyYW5nZS5lbmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xyXG4gICAgfTtcclxuICAgIEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChldmVudCwgdmVyc2lvbikge1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBldmVudC50ZXh0O1xyXG4gICAgICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuX2xpbmVPZmZzZXRzID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZS5nZXRMaW5lT2Zmc2V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGluZU9mZnNldHMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGxpbmVPZmZzZXRzID0gW107XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdGhpcy5fY29udGVudDtcclxuICAgICAgICAgICAgdmFyIGlzTGluZVN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMaW5lU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lT2Zmc2V0cy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTGluZVN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgY2ggPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIGlzTGluZVN0YXJ0ID0gKGNoID09PSAnXFxyJyB8fCBjaCA9PT0gJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnXFxyJyAmJiBpICsgMSA8IHRleHQubGVuZ3RoICYmIHRleHQuY2hhckF0KGkgKyAxKSA9PT0gJ1xcbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzTGluZVN0YXJ0ICYmIHRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGluZU9mZnNldHMucHVzaCh0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbGluZU9mZnNldHMgPSBsaW5lT2Zmc2V0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVPZmZzZXRzO1xyXG4gICAgfTtcclxuICAgIEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLnBvc2l0aW9uQXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XHJcbiAgICAgICAgb2Zmc2V0ID0gTWF0aC5tYXgoTWF0aC5taW4ob2Zmc2V0LCB0aGlzLl9jb250ZW50Lmxlbmd0aCksIDApO1xyXG4gICAgICAgIHZhciBsaW5lT2Zmc2V0cyA9IHRoaXMuZ2V0TGluZU9mZnNldHMoKTtcclxuICAgICAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGxpbmVPZmZzZXRzLmxlbmd0aDtcclxuICAgICAgICBpZiAoaGlnaCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zaXRpb24uY3JlYXRlKDAsIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XHJcbiAgICAgICAgICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xyXG4gICAgICAgICAgICBpZiAobGluZU9mZnNldHNbbWlkXSA+IG9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgaGlnaCA9IG1pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbG93IGlzIHRoZSBsZWFzdCB4IGZvciB3aGljaCB0aGUgbGluZSBvZmZzZXQgaXMgbGFyZ2VyIHRoYW4gdGhlIGN1cnJlbnQgb2Zmc2V0XHJcbiAgICAgICAgLy8gb3IgYXJyYXkubGVuZ3RoIGlmIG5vIGxpbmUgb2Zmc2V0IGlzIGxhcmdlciB0aGFuIHRoZSBjdXJyZW50IG9mZnNldFxyXG4gICAgICAgIHZhciBsaW5lID0gbG93IC0gMTtcclxuICAgICAgICByZXR1cm4gUG9zaXRpb24uY3JlYXRlKGxpbmUsIG9mZnNldCAtIGxpbmVPZmZzZXRzW2xpbmVdKTtcclxuICAgIH07XHJcbiAgICBGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZS5vZmZzZXRBdCA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBsaW5lT2Zmc2V0cyA9IHRoaXMuZ2V0TGluZU9mZnNldHMoKTtcclxuICAgICAgICBpZiAocG9zaXRpb24ubGluZSA+PSBsaW5lT2Zmc2V0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwb3NpdGlvbi5saW5lIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxpbmVPZmZzZXQgPSBsaW5lT2Zmc2V0c1twb3NpdGlvbi5saW5lXTtcclxuICAgICAgICB2YXIgbmV4dExpbmVPZmZzZXQgPSAocG9zaXRpb24ubGluZSArIDEgPCBsaW5lT2Zmc2V0cy5sZW5ndGgpID8gbGluZU9mZnNldHNbcG9zaXRpb24ubGluZSArIDFdIDogdGhpcy5fY29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGxpbmVPZmZzZXQgKyBwb3NpdGlvbi5jaGFyYWN0ZXIsIG5leHRMaW5lT2Zmc2V0KSwgbGluZU9mZnNldCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLCBcImxpbmVDb3VudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExpbmVPZmZzZXRzKCkubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEZ1bGxUZXh0RG9jdW1lbnQ7XHJcbn0oKSk7XHJcbnZhciBJcztcclxuKGZ1bmN0aW9uIChJcykge1xyXG4gICAgdmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxuICAgIGZ1bmN0aW9uIGRlZmluZWQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcclxuICAgIH1cclxuICAgIElzLmRlZmluZWQgPSBkZWZpbmVkO1xyXG4gICAgZnVuY3Rpb24gdW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcbiAgICBJcy51bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICBmdW5jdGlvbiBib29sZWFuKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcclxuICAgIH1cclxuICAgIElzLmJvb2xlYW4gPSBib29sZWFuO1xyXG4gICAgZnVuY3Rpb24gc3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcclxuICAgIH1cclxuICAgIElzLnN0cmluZyA9IHN0cmluZztcclxuICAgIGZ1bmN0aW9uIG51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XHJcbiAgICB9XHJcbiAgICBJcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgICBmdW5jdGlvbiBmdW5jKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG4gICAgSXMuZnVuYyA9IGZ1bmM7XHJcbiAgICBmdW5jdGlvbiBvYmplY3RMaXRlcmFsKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gU3RyaWN0bHkgc3BlYWtpbmcgY2xhc3MgaW5zdGFuY2VzIHBhc3MgdGhpcyBjaGVjayBhcyB3ZWxsLiBTaW5jZSB0aGUgTFNQXHJcbiAgICAgICAgLy8gZG9lc24ndCB1c2UgY2xhc3NlcyB3ZSBpZ25vcmUgdGhpcyBmb3Igbm93LiBJZiB3ZSBkbyB3ZSBuZWVkIHRvIGFkZCBzb21ldGhpbmdcclxuICAgICAgICAvLyBsaWtlIHRoaXM6IGBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpKSA9PT0gbnVsbGBcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxuICAgIH1cclxuICAgIElzLm9iamVjdExpdGVyYWwgPSBvYmplY3RMaXRlcmFsO1xyXG4gICAgZnVuY3Rpb24gdHlwZWRBcnJheSh2YWx1ZSwgY2hlY2spIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuZXZlcnkoY2hlY2spO1xyXG4gICAgfVxyXG4gICAgSXMudHlwZWRBcnJheSA9IHR5cGVkQXJyYXk7XHJcbn0pKElzIHx8IChJcyA9IHt9KSk7XHJcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgV29ya2VyTWFuYWdlciB9IGZyb20gJy4vd29ya2VyTWFuYWdlci5qcyc7XG5pbXBvcnQgKiBhcyBsYW5ndWFnZUZlYXR1cmVzIGZyb20gJy4vbGFuZ3VhZ2VGZWF0dXJlcy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVUb2tlbml6YXRpb25TdXBwb3J0IH0gZnJvbSAnLi90b2tlbml6YXRpb24uanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTW9kZShkZWZhdWx0cykge1xuICAgIHZhciBkaXNwb3NhYmxlcyA9IFtdO1xuICAgIHZhciBwcm92aWRlcnMgPSBbXTtcbiAgICB2YXIgY2xpZW50ID0gbmV3IFdvcmtlck1hbmFnZXIoZGVmYXVsdHMpO1xuICAgIGRpc3Bvc2FibGVzLnB1c2goY2xpZW50KTtcbiAgICB2YXIgd29ya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJpcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdXJpc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGllbnQuZ2V0TGFuZ3VhZ2VTZXJ2aWNlV29ya2VyLmFwcGx5KGNsaWVudCwgdXJpcyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiByZWdpc3RlclByb3ZpZGVycygpIHtcbiAgICAgICAgdmFyIGxhbmd1YWdlSWQgPSBkZWZhdWx0cy5sYW5ndWFnZUlkLCBtb2RlQ29uZmlndXJhdGlvbiA9IGRlZmF1bHRzLm1vZGVDb25maWd1cmF0aW9uO1xuICAgICAgICBkaXNwb3NlQWxsKHByb3ZpZGVycyk7XG4gICAgICAgIGlmIChtb2RlQ29uZmlndXJhdGlvbi5kb2N1bWVudEZvcm1hdHRpbmdFZGl0cykge1xuICAgICAgICAgICAgcHJvdmlkZXJzLnB1c2gobW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckRvY3VtZW50Rm9ybWF0dGluZ0VkaXRQcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Eb2N1bWVudEZvcm1hdHRpbmdFZGl0UHJvdmlkZXIod29ya2VyKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlQ29uZmlndXJhdGlvbi5kb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRzKSB7XG4gICAgICAgICAgICBwcm92aWRlcnMucHVzaChtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0UHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0UHJvdmlkZXIod29ya2VyKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlQ29uZmlndXJhdGlvbi5jb21wbGV0aW9uSXRlbXMpIHtcbiAgICAgICAgICAgIHByb3ZpZGVycy5wdXNoKG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkNvbXBsZXRpb25BZGFwdGVyKHdvcmtlcikpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kZUNvbmZpZ3VyYXRpb24uaG92ZXJzKSB7XG4gICAgICAgICAgICBwcm92aWRlcnMucHVzaChtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVySG92ZXJQcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Ib3ZlckFkYXB0ZXIod29ya2VyKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlQ29uZmlndXJhdGlvbi5kb2N1bWVudFN5bWJvbHMpIHtcbiAgICAgICAgICAgIHByb3ZpZGVycy5wdXNoKG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudFN5bWJvbFByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkRvY3VtZW50U3ltYm9sQWRhcHRlcih3b3JrZXIpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGVDb25maWd1cmF0aW9uLnRva2Vucykge1xuICAgICAgICAgICAgcHJvdmlkZXJzLnB1c2gobW9uYWNvLmxhbmd1YWdlcy5zZXRUb2tlbnNQcm92aWRlcihsYW5ndWFnZUlkLCBjcmVhdGVUb2tlbml6YXRpb25TdXBwb3J0KHRydWUpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGVDb25maWd1cmF0aW9uLmNvbG9ycykge1xuICAgICAgICAgICAgcHJvdmlkZXJzLnB1c2gobW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckNvbG9yUHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRG9jdW1lbnRDb2xvckFkYXB0ZXIod29ya2VyKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlQ29uZmlndXJhdGlvbi5mb2xkaW5nUmFuZ2VzKSB7XG4gICAgICAgICAgICBwcm92aWRlcnMucHVzaChtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRm9sZGluZ1JhbmdlUHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRm9sZGluZ1JhbmdlQWRhcHRlcih3b3JrZXIpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGVDb25maWd1cmF0aW9uLmRpYWdub3N0aWNzKSB7XG4gICAgICAgICAgICBwcm92aWRlcnMucHVzaChuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5EaWFnbm9zdGljc0FkYXB0ZXIobGFuZ3VhZ2VJZCwgd29ya2VyLCBkZWZhdWx0cykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZ2lzdGVyUHJvdmlkZXJzKCk7XG4gICAgZGlzcG9zYWJsZXMucHVzaChtb25hY28ubGFuZ3VhZ2VzLnNldExhbmd1YWdlQ29uZmlndXJhdGlvbihkZWZhdWx0cy5sYW5ndWFnZUlkLCByaWNoRWRpdENvbmZpZ3VyYXRpb24pKTtcbiAgICB2YXIgbW9kZUNvbmZpZ3VyYXRpb24gPSBkZWZhdWx0cy5tb2RlQ29uZmlndXJhdGlvbjtcbiAgICBkZWZhdWx0cy5vbkRpZENoYW5nZShmdW5jdGlvbiAobmV3RGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKG5ld0RlZmF1bHRzLm1vZGVDb25maWd1cmF0aW9uICE9PSBtb2RlQ29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgbW9kZUNvbmZpZ3VyYXRpb24gPSBuZXdEZWZhdWx0cy5tb2RlQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgIHJlZ2lzdGVyUHJvdmlkZXJzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkaXNwb3NhYmxlcy5wdXNoKGFzRGlzcG9zYWJsZShwcm92aWRlcnMpKTtcbiAgICByZXR1cm4gYXNEaXNwb3NhYmxlKGRpc3Bvc2FibGVzKTtcbn1cbmZ1bmN0aW9uIGFzRGlzcG9zYWJsZShkaXNwb3NhYmxlcykge1xuICAgIHJldHVybiB7IGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRpc3Bvc2VBbGwoZGlzcG9zYWJsZXMpOyB9IH07XG59XG5mdW5jdGlvbiBkaXNwb3NlQWxsKGRpc3Bvc2FibGVzKSB7XG4gICAgd2hpbGUgKGRpc3Bvc2FibGVzLmxlbmd0aCkge1xuICAgICAgICBkaXNwb3NhYmxlcy5wb3AoKS5kaXNwb3NlKCk7XG4gICAgfVxufVxudmFyIHJpY2hFZGl0Q29uZmlndXJhdGlvbiA9IHtcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXFtcXHtcXF1cXH1cXDpcXFwiXFwsXFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJ10gfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJ10gfVxuICAgIF1cbn07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIGxzIGZyb20gJy4vX2RlcHMvdnNjb2RlLWxhbmd1YWdlc2VydmVyLXR5cGVzL21haW4uanMnO1xudmFyIFVyaSA9IG1vbmFjby5Vcmk7XG52YXIgUmFuZ2UgPSBtb25hY28uUmFuZ2U7XG4vLyAtLS0gZGlhZ25vc3RpY3MgLS0tIC0tLVxudmFyIERpYWdub3N0aWNzQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaWFnbm9zdGljc0FkYXB0ZXIoX2xhbmd1YWdlSWQsIF93b3JrZXIsIGRlZmF1bHRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2xhbmd1YWdlSWQgPSBfbGFuZ3VhZ2VJZDtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgb25Nb2RlbEFkZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIG1vZGVJZCA9IG1vZGVsLmdldE1vZGVJZCgpO1xuICAgICAgICAgICAgaWYgKG1vZGVJZCAhPT0gX3RoaXMuX2xhbmd1YWdlSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW21vZGVsLnVyaS50b1N0cmluZygpXSA9IG1vZGVsLm9uRGlkQ2hhbmdlQ29udGVudChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fZG9WYWxpZGF0ZShtb2RlbC51cmksIG1vZGVJZCk7IH0sIDUwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLl9kb1ZhbGlkYXRlKG1vZGVsLnVyaSwgbW9kZUlkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uTW9kZWxSZW1vdmVkID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICBtb25hY28uZWRpdG9yLnNldE1vZGVsTWFya2Vycyhtb2RlbCwgX3RoaXMuX2xhbmd1YWdlSWQsIFtdKTtcbiAgICAgICAgICAgIHZhciB1cmlTdHIgPSBtb2RlbC51cmkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IF90aGlzLl9saXN0ZW5lclt1cmlTdHJdO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5fbGlzdGVuZXJbdXJpU3RyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMucHVzaChtb25hY28uZWRpdG9yLm9uRGlkQ3JlYXRlTW9kZWwob25Nb2RlbEFkZCkpO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5wdXNoKG1vbmFjby5lZGl0b3Iub25XaWxsRGlzcG9zZU1vZGVsKGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQobW9kZWwpO1xuICAgICAgICAgICAgX3RoaXMuX3Jlc2V0U2NoZW1hKG1vZGVsLnVyaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMucHVzaChtb25hY28uZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxMYW5ndWFnZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKGV2ZW50Lm1vZGVsKTtcbiAgICAgICAgICAgIG9uTW9kZWxBZGQoZXZlbnQubW9kZWwpO1xuICAgICAgICAgICAgX3RoaXMuX3Jlc2V0U2NoZW1hKGV2ZW50Lm1vZGVsLnVyaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMucHVzaChkZWZhdWx0cy5vbkRpZENoYW5nZShmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbC5nZXRNb2RlSWQoKSA9PT0gX3RoaXMuX2xhbmd1YWdlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICBvbk1vZGVsQWRkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5wdXNoKHtcbiAgICAgICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtb25hY28uZWRpdG9yLmdldE1vZGVscygpLmZvckVhY2gob25Nb2RlbFJlbW92ZWQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBfdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW2tleV0uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCkuZm9yRWFjaChvbk1vZGVsQWRkKTtcbiAgICB9XG4gICAgRGlhZ25vc3RpY3NBZGFwdGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkICYmIGQuZGlzcG9zZSgpOyB9KTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMgPSBbXTtcbiAgICB9O1xuICAgIERpYWdub3N0aWNzQWRhcHRlci5wcm90b3R5cGUuX3Jlc2V0U2NoZW1hID0gZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlcigpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgd29ya2VyLnJlc2V0U2NoZW1hKHJlc291cmNlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERpYWdub3N0aWNzQWRhcHRlci5wcm90b3R5cGUuX2RvVmFsaWRhdGUgPSBmdW5jdGlvbiAocmVzb3VyY2UsIGxhbmd1YWdlSWQpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZG9WYWxpZGF0aW9uKHJlc291cmNlLnRvU3RyaW5nKCkpLnRoZW4oZnVuY3Rpb24gKGRpYWdub3N0aWNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlcnMgPSBkaWFnbm9zdGljcy5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHRvRGlhZ25vc3RpY3MocmVzb3VyY2UsIGQpOyB9KTtcbiAgICAgICAgICAgICAgICB2YXIgbW9kZWwgPSBtb25hY28uZWRpdG9yLmdldE1vZGVsKHJlc291cmNlKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZWwgJiYgbW9kZWwuZ2V0TW9kZUlkKCkgPT09IGxhbmd1YWdlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9kZWwsIGxhbmd1YWdlSWQsIG1hcmtlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEaWFnbm9zdGljc0FkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgRGlhZ25vc3RpY3NBZGFwdGVyIH07XG5mdW5jdGlvbiB0b1NldmVyaXR5KGxzU2V2ZXJpdHkpIHtcbiAgICBzd2l0Y2ggKGxzU2V2ZXJpdHkpIHtcbiAgICAgICAgY2FzZSBscy5EaWFnbm9zdGljU2V2ZXJpdHkuRXJyb3I6IHJldHVybiBtb25hY28uTWFya2VyU2V2ZXJpdHkuRXJyb3I7XG4gICAgICAgIGNhc2UgbHMuRGlhZ25vc3RpY1NldmVyaXR5Lldhcm5pbmc6IHJldHVybiBtb25hY28uTWFya2VyU2V2ZXJpdHkuV2FybmluZztcbiAgICAgICAgY2FzZSBscy5EaWFnbm9zdGljU2V2ZXJpdHkuSW5mb3JtYXRpb246IHJldHVybiBtb25hY28uTWFya2VyU2V2ZXJpdHkuSW5mbztcbiAgICAgICAgY2FzZSBscy5EaWFnbm9zdGljU2V2ZXJpdHkuSGludDogcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5IaW50O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5JbmZvO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRvRGlhZ25vc3RpY3MocmVzb3VyY2UsIGRpYWcpIHtcbiAgICB2YXIgY29kZSA9IHR5cGVvZiBkaWFnLmNvZGUgPT09ICdudW1iZXInID8gU3RyaW5nKGRpYWcuY29kZSkgOiBkaWFnLmNvZGU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V2ZXJpdHk6IHRvU2V2ZXJpdHkoZGlhZy5zZXZlcml0eSksXG4gICAgICAgIHN0YXJ0TGluZU51bWJlcjogZGlhZy5yYW5nZS5zdGFydC5saW5lICsgMSxcbiAgICAgICAgc3RhcnRDb2x1bW46IGRpYWcucmFuZ2Uuc3RhcnQuY2hhcmFjdGVyICsgMSxcbiAgICAgICAgZW5kTGluZU51bWJlcjogZGlhZy5yYW5nZS5lbmQubGluZSArIDEsXG4gICAgICAgIGVuZENvbHVtbjogZGlhZy5yYW5nZS5lbmQuY2hhcmFjdGVyICsgMSxcbiAgICAgICAgbWVzc2FnZTogZGlhZy5tZXNzYWdlLFxuICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICBzb3VyY2U6IGRpYWcuc291cmNlXG4gICAgfTtcbn1cbi8vIC0tLSBjb21wbGV0aW9uIC0tLS0tLVxuZnVuY3Rpb24gZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgaWYgKCFwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4geyBjaGFyYWN0ZXI6IHBvc2l0aW9uLmNvbHVtbiAtIDEsIGxpbmU6IHBvc2l0aW9uLmxpbmVOdW1iZXIgLSAxIH07XG59XG5mdW5jdGlvbiBmcm9tUmFuZ2UocmFuZ2UpIHtcbiAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiB7IHN0YXJ0OiB7IGxpbmU6IHJhbmdlLnN0YXJ0TGluZU51bWJlciAtIDEsIGNoYXJhY3RlcjogcmFuZ2Uuc3RhcnRDb2x1bW4gLSAxIH0sIGVuZDogeyBsaW5lOiByYW5nZS5lbmRMaW5lTnVtYmVyIC0gMSwgY2hhcmFjdGVyOiByYW5nZS5lbmRDb2x1bW4gLSAxIH0gfTtcbn1cbmZ1bmN0aW9uIHRvUmFuZ2UocmFuZ2UpIHtcbiAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2Uuc3RhcnQubGluZSArIDEsIHJhbmdlLnN0YXJ0LmNoYXJhY3RlciArIDEsIHJhbmdlLmVuZC5saW5lICsgMSwgcmFuZ2UuZW5kLmNoYXJhY3RlciArIDEpO1xufVxuZnVuY3Rpb24gdG9Db21wbGV0aW9uSXRlbUtpbmQoa2luZCkge1xuICAgIHZhciBtSXRlbUtpbmQgPSBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZDtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuVGV4dDogcmV0dXJuIG1JdGVtS2luZC5UZXh0O1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5NZXRob2Q6IHJldHVybiBtSXRlbUtpbmQuTWV0aG9kO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5GdW5jdGlvbjogcmV0dXJuIG1JdGVtS2luZC5GdW5jdGlvbjtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuQ29uc3RydWN0b3I6IHJldHVybiBtSXRlbUtpbmQuQ29uc3RydWN0b3I7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkZpZWxkOiByZXR1cm4gbUl0ZW1LaW5kLkZpZWxkO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5WYXJpYWJsZTogcmV0dXJuIG1JdGVtS2luZC5WYXJpYWJsZTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuQ2xhc3M6IHJldHVybiBtSXRlbUtpbmQuQ2xhc3M7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkludGVyZmFjZTogcmV0dXJuIG1JdGVtS2luZC5JbnRlcmZhY2U7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLk1vZHVsZTogcmV0dXJuIG1JdGVtS2luZC5Nb2R1bGU7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlByb3BlcnR5OiByZXR1cm4gbUl0ZW1LaW5kLlByb3BlcnR5O1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Vbml0OiByZXR1cm4gbUl0ZW1LaW5kLlVuaXQ7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlZhbHVlOiByZXR1cm4gbUl0ZW1LaW5kLlZhbHVlO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5FbnVtOiByZXR1cm4gbUl0ZW1LaW5kLkVudW07XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLktleXdvcmQ6IHJldHVybiBtSXRlbUtpbmQuS2V5d29yZDtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuU25pcHBldDogcmV0dXJuIG1JdGVtS2luZC5TbmlwcGV0O1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Db2xvcjogcmV0dXJuIG1JdGVtS2luZC5Db2xvcjtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuRmlsZTogcmV0dXJuIG1JdGVtS2luZC5GaWxlO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5SZWZlcmVuY2U6IHJldHVybiBtSXRlbUtpbmQuUmVmZXJlbmNlO1xuICAgIH1cbiAgICByZXR1cm4gbUl0ZW1LaW5kLlByb3BlcnR5O1xufVxuZnVuY3Rpb24gZnJvbUNvbXBsZXRpb25JdGVtS2luZChraW5kKSB7XG4gICAgdmFyIG1JdGVtS2luZCA9IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5UZXh0OiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlRleHQ7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLk1ldGhvZDogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5NZXRob2Q7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLkZ1bmN0aW9uOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkZ1bmN0aW9uO1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5Db25zdHJ1Y3RvcjogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Db25zdHJ1Y3RvcjtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuRmllbGQ6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuRmllbGQ7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLlZhcmlhYmxlOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlZhcmlhYmxlO1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5DbGFzczogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5DbGFzcztcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuSW50ZXJmYWNlOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkludGVyZmFjZTtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuTW9kdWxlOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLk1vZHVsZTtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuUHJvcGVydHk6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuUHJvcGVydHk7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLlVuaXQ6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuVW5pdDtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuVmFsdWU6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuVmFsdWU7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLkVudW06IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuRW51bTtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuS2V5d29yZDogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5LZXl3b3JkO1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5TbmlwcGV0OiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlNuaXBwZXQ7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLkNvbG9yOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkNvbG9yO1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5GaWxlOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkZpbGU7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLlJlZmVyZW5jZTogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5SZWZlcmVuY2U7XG4gICAgfVxuICAgIHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuUHJvcGVydHk7XG59XG5mdW5jdGlvbiB0b1RleHRFZGl0KHRleHRFZGl0KSB7XG4gICAgaWYgKCF0ZXh0RWRpdCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByYW5nZTogdG9SYW5nZSh0ZXh0RWRpdC5yYW5nZSksXG4gICAgICAgIHRleHQ6IHRleHRFZGl0Lm5ld1RleHRcbiAgICB9O1xufVxudmFyIENvbXBsZXRpb25BZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbXBsZXRpb25BZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBsZXRpb25BZGFwdGVyLnByb3RvdHlwZSwgXCJ0cmlnZ2VyQ2hhcmFjdGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnICcsICc6J107XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENvbXBsZXRpb25BZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlQ29tcGxldGlvbkl0ZW1zID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY29udGV4dCwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZG9Db21wbGV0ZShyZXNvdXJjZS50b1N0cmluZygpLCBmcm9tUG9zaXRpb24ocG9zaXRpb24pKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHdvcmRJbmZvID0gbW9kZWwuZ2V0V29yZFVudGlsUG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICAgICAgdmFyIHdvcmRSYW5nZSA9IG5ldyBSYW5nZShwb3NpdGlvbi5saW5lTnVtYmVyLCB3b3JkSW5mby5zdGFydENvbHVtbiwgcG9zaXRpb24ubGluZU51bWJlciwgd29yZEluZm8uZW5kQ29sdW1uKTtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGluZm8uaXRlbXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZW50cnkubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGluc2VydFRleHQ6IGVudHJ5Lmluc2VydFRleHQgfHwgZW50cnkubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRUZXh0OiBlbnRyeS5zb3J0VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyVGV4dDogZW50cnkuZmlsdGVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjogZW50cnkuZG9jdW1lbnRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBlbnRyeS5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB3b3JkUmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IHRvQ29tcGxldGlvbkl0ZW1LaW5kKGVudHJ5LmtpbmQpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LnRleHRFZGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmFuZ2UgPSB0b1JhbmdlKGVudHJ5LnRleHRFZGl0LnJhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbnNlcnRUZXh0ID0gZW50cnkudGV4dEVkaXQubmV3VGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmFkZGl0aW9uYWxUZXh0RWRpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRpdGlvbmFsVGV4dEVkaXRzID0gZW50cnkuYWRkaXRpb25hbFRleHRFZGl0cy5tYXAodG9UZXh0RWRpdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pbnNlcnRUZXh0Rm9ybWF0ID09PSBscy5JbnNlcnRUZXh0Rm9ybWF0LlNuaXBwZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbnNlcnRUZXh0UnVsZXMgPSBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUuSW5zZXJ0QXNTbmlwcGV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0luY29tcGxldGU6IGluZm8uaXNJbmNvbXBsZXRlLFxuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBpdGVtc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcGxldGlvbkFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgQ29tcGxldGlvbkFkYXB0ZXIgfTtcbmZ1bmN0aW9uIGlzTWFya3VwQ29udGVudCh0aGluZykge1xuICAgIHJldHVybiB0aGluZyAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0aGluZy5raW5kID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIHRvTWFya2Rvd25TdHJpbmcoZW50cnkpIHtcbiAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGVudHJ5XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChpc01hcmt1cENvbnRlbnQoZW50cnkpKSB7XG4gICAgICAgIGlmIChlbnRyeS5raW5kID09PSAncGxhaW50ZXh0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW50cnkudmFsdWUucmVwbGFjZSgvW1xcXFxgKl97fVtcXF0oKSMrXFwtLiFdL2csICdcXFxcJCYnKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGVudHJ5LnZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnYGBgJyArIGVudHJ5Lmxhbmd1YWdlICsgJ1xcbicgKyBlbnRyeS52YWx1ZSArICdcXG5gYGBcXG4nIH07XG59XG5mdW5jdGlvbiB0b01hcmtlZFN0cmluZ0FycmF5KGNvbnRlbnRzKSB7XG4gICAgaWYgKCFjb250ZW50cykge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50cykpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRzLm1hcCh0b01hcmtkb3duU3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIFt0b01hcmtkb3duU3RyaW5nKGNvbnRlbnRzKV07XG59XG4vLyAtLS0gaG92ZXIgLS0tLS0tXG52YXIgSG92ZXJBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhvdmVyQWRhcHRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIEhvdmVyQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZUhvdmVyID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZG9Ib3ZlcihyZXNvdXJjZS50b1N0cmluZygpLCBmcm9tUG9zaXRpb24ocG9zaXRpb24pKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByYW5nZTogdG9SYW5nZShpbmZvLnJhbmdlKSxcbiAgICAgICAgICAgICAgICBjb250ZW50czogdG9NYXJrZWRTdHJpbmdBcnJheShpbmZvLmNvbnRlbnRzKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSG92ZXJBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IEhvdmVyQWRhcHRlciB9O1xuLy8gLS0tIGRlZmluaXRpb24gLS0tLS0tXG5mdW5jdGlvbiB0b0xvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJpOiBVcmkucGFyc2UobG9jYXRpb24udXJpKSxcbiAgICAgICAgcmFuZ2U6IHRvUmFuZ2UobG9jYXRpb24ucmFuZ2UpXG4gICAgfTtcbn1cbi8vIC0tLSBkb2N1bWVudCBzeW1ib2xzIC0tLS0tLVxuZnVuY3Rpb24gdG9TeW1ib2xLaW5kKGtpbmQpIHtcbiAgICB2YXIgbUtpbmQgPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQ7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5GaWxlOiByZXR1cm4gbUtpbmQuQXJyYXk7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5Nb2R1bGU6IHJldHVybiBtS2luZC5Nb2R1bGU7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5OYW1lc3BhY2U6IHJldHVybiBtS2luZC5OYW1lc3BhY2U7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5QYWNrYWdlOiByZXR1cm4gbUtpbmQuUGFja2FnZTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkNsYXNzOiByZXR1cm4gbUtpbmQuQ2xhc3M7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5NZXRob2Q6IHJldHVybiBtS2luZC5NZXRob2Q7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5Qcm9wZXJ0eTogcmV0dXJuIG1LaW5kLlByb3BlcnR5O1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuRmllbGQ6IHJldHVybiBtS2luZC5GaWVsZDtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkNvbnN0cnVjdG9yOiByZXR1cm4gbUtpbmQuQ29uc3RydWN0b3I7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5FbnVtOiByZXR1cm4gbUtpbmQuRW51bTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkludGVyZmFjZTogcmV0dXJuIG1LaW5kLkludGVyZmFjZTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkZ1bmN0aW9uOiByZXR1cm4gbUtpbmQuRnVuY3Rpb247XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5WYXJpYWJsZTogcmV0dXJuIG1LaW5kLlZhcmlhYmxlO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuQ29uc3RhbnQ6IHJldHVybiBtS2luZC5Db25zdGFudDtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLlN0cmluZzogcmV0dXJuIG1LaW5kLlN0cmluZztcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLk51bWJlcjogcmV0dXJuIG1LaW5kLk51bWJlcjtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkJvb2xlYW46IHJldHVybiBtS2luZC5Cb29sZWFuO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuQXJyYXk6IHJldHVybiBtS2luZC5BcnJheTtcbiAgICB9XG4gICAgcmV0dXJuIG1LaW5kLkZ1bmN0aW9uO1xufVxudmFyIERvY3VtZW50U3ltYm9sQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEb2N1bWVudFN5bWJvbEFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBEb2N1bWVudFN5bWJvbEFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudFN5bWJvbHMgPSBmdW5jdGlvbiAobW9kZWwsIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7IHJldHVybiB3b3JrZXIuZmluZERvY3VtZW50U3ltYm9scyhyZXNvdXJjZS50b1N0cmluZygpKTsgfSkudGhlbihmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6ICcnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IGl0ZW0uY29udGFpbmVyTmFtZSxcbiAgICAgICAgICAgICAgICBraW5kOiB0b1N5bWJvbEtpbmQoaXRlbS5raW5kKSxcbiAgICAgICAgICAgICAgICByYW5nZTogdG9SYW5nZShpdGVtLmxvY2F0aW9uLnJhbmdlKSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25SYW5nZTogdG9SYW5nZShpdGVtLmxvY2F0aW9uLnJhbmdlKSxcbiAgICAgICAgICAgICAgICB0YWdzOiBbXVxuICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudFN5bWJvbEFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgRG9jdW1lbnRTeW1ib2xBZGFwdGVyIH07XG5mdW5jdGlvbiBmcm9tRm9ybWF0dGluZ09wdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRhYlNpemU6IG9wdGlvbnMudGFiU2l6ZSxcbiAgICAgICAgaW5zZXJ0U3BhY2VzOiBvcHRpb25zLmluc2VydFNwYWNlc1xuICAgIH07XG59XG52YXIgRG9jdW1lbnRGb3JtYXR0aW5nRWRpdFByb3ZpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvY3VtZW50Rm9ybWF0dGluZ0VkaXRQcm92aWRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIERvY3VtZW50Rm9ybWF0dGluZ0VkaXRQcm92aWRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50Rm9ybWF0dGluZ0VkaXRzID0gZnVuY3Rpb24gKG1vZGVsLCBvcHRpb25zLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5mb3JtYXQocmVzb3VyY2UudG9TdHJpbmcoKSwgbnVsbCwgZnJvbUZvcm1hdHRpbmdPcHRpb25zKG9wdGlvbnMpKS50aGVuKGZ1bmN0aW9uIChlZGl0cykge1xuICAgICAgICAgICAgICAgIGlmICghZWRpdHMgfHwgZWRpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRzLm1hcCh0b1RleHRFZGl0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudEZvcm1hdHRpbmdFZGl0UHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgRG9jdW1lbnRGb3JtYXR0aW5nRWRpdFByb3ZpZGVyIH07XG52YXIgRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0UHJvdmlkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0UHJvdmlkZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBEb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRQcm92aWRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdHMgPSBmdW5jdGlvbiAobW9kZWwsIHJhbmdlLCBvcHRpb25zLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5mb3JtYXQocmVzb3VyY2UudG9TdHJpbmcoKSwgZnJvbVJhbmdlKHJhbmdlKSwgZnJvbUZvcm1hdHRpbmdPcHRpb25zKG9wdGlvbnMpKS50aGVuKGZ1bmN0aW9uIChlZGl0cykge1xuICAgICAgICAgICAgICAgIGlmICghZWRpdHMgfHwgZWRpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRzLm1hcCh0b1RleHRFZGl0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRQcm92aWRlcjtcbn0oKSk7XG5leHBvcnQgeyBEb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRQcm92aWRlciB9O1xudmFyIERvY3VtZW50Q29sb3JBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvY3VtZW50Q29sb3JBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRG9jdW1lbnRDb2xvckFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudENvbG9ycyA9IGZ1bmN0aW9uIChtb2RlbCwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHsgcmV0dXJuIHdvcmtlci5maW5kRG9jdW1lbnRDb2xvcnMocmVzb3VyY2UudG9TdHJpbmcoKSk7IH0pLnRoZW4oZnVuY3Rpb24gKGluZm9zKSB7XG4gICAgICAgICAgICBpZiAoIWluZm9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZm9zLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogaXRlbS5jb2xvcixcbiAgICAgICAgICAgICAgICByYW5nZTogdG9SYW5nZShpdGVtLnJhbmdlKVxuICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERvY3VtZW50Q29sb3JBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlQ29sb3JQcmVzZW50YXRpb25zID0gZnVuY3Rpb24gKG1vZGVsLCBpbmZvLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikgeyByZXR1cm4gd29ya2VyLmdldENvbG9yUHJlc2VudGF0aW9ucyhyZXNvdXJjZS50b1N0cmluZygpLCBpbmZvLmNvbG9yLCBmcm9tUmFuZ2UoaW5mby5yYW5nZSkpOyB9KS50aGVuKGZ1bmN0aW9uIChwcmVzZW50YXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIXByZXNlbnRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJlc2VudGF0aW9ucy5tYXAoZnVuY3Rpb24gKHByZXNlbnRhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJlc2VudGF0aW9uLmxhYmVsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHByZXNlbnRhdGlvbi50ZXh0RWRpdCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRFZGl0ID0gdG9UZXh0RWRpdChwcmVzZW50YXRpb24udGV4dEVkaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJlc2VudGF0aW9uLmFkZGl0aW9uYWxUZXh0RWRpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRpdGlvbmFsVGV4dEVkaXRzID0gcHJlc2VudGF0aW9uLmFkZGl0aW9uYWxUZXh0RWRpdHMubWFwKHRvVGV4dEVkaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudENvbG9yQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBEb2N1bWVudENvbG9yQWRhcHRlciB9O1xudmFyIEZvbGRpbmdSYW5nZUFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9sZGluZ1JhbmdlQWRhcHRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIEZvbGRpbmdSYW5nZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVGb2xkaW5nUmFuZ2VzID0gZnVuY3Rpb24gKG1vZGVsLCBjb250ZXh0LCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikgeyByZXR1cm4gd29ya2VyLnByb3ZpZGVGb2xkaW5nUmFuZ2VzKHJlc291cmNlLnRvU3RyaW5nKCksIGNvbnRleHQpOyB9KS50aGVuKGZ1bmN0aW9uIChyYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICghcmFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJhbmdlcy5tYXAoZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHJhbmdlLnN0YXJ0TGluZSArIDEsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogcmFuZ2UuZW5kTGluZSArIDFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmFuZ2Uua2luZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmtpbmQgPSB0b0ZvbGRpbmdSYW5nZUtpbmQocmFuZ2Uua2luZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9sZGluZ1JhbmdlQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBGb2xkaW5nUmFuZ2VBZGFwdGVyIH07XG5mdW5jdGlvbiB0b0ZvbGRpbmdSYW5nZUtpbmQoa2luZCkge1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIGxzLkZvbGRpbmdSYW5nZUtpbmQuQ29tbWVudDogcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuRm9sZGluZ1JhbmdlS2luZC5Db21tZW50O1xuICAgICAgICBjYXNlIGxzLkZvbGRpbmdSYW5nZUtpbmQuSW1wb3J0czogcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuRm9sZGluZ1JhbmdlS2luZC5JbXBvcnRzO1xuICAgICAgICBjYXNlIGxzLkZvbGRpbmdSYW5nZUtpbmQuUmVnaW9uOiByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Gb2xkaW5nUmFuZ2VLaW5kLlJlZ2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIHZvaWQgMDtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMganNvbiBmcm9tICcuL19kZXBzL2pzb25jLXBhcnNlci9tYWluLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2tlbml6YXRpb25TdXBwb3J0KHN1cHBvcnRDb21tZW50cykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEpTT05TdGF0ZShudWxsLCBudWxsLCBmYWxzZSk7IH0sXG4gICAgICAgIHRva2VuaXplOiBmdW5jdGlvbiAobGluZSwgc3RhdGUsIG9mZnNldERlbHRhLCBzdG9wQXRPZmZzZXQpIHsgcmV0dXJuIHRva2VuaXplKHN1cHBvcnRDb21tZW50cywgbGluZSwgc3RhdGUsIG9mZnNldERlbHRhLCBzdG9wQXRPZmZzZXQpOyB9XG4gICAgfTtcbn1cbmV4cG9ydCB2YXIgVE9LRU5fREVMSU1fT0JKRUNUID0gJ2RlbGltaXRlci5icmFja2V0Lmpzb24nO1xuZXhwb3J0IHZhciBUT0tFTl9ERUxJTV9BUlJBWSA9ICdkZWxpbWl0ZXIuYXJyYXkuanNvbic7XG5leHBvcnQgdmFyIFRPS0VOX0RFTElNX0NPTE9OID0gJ2RlbGltaXRlci5jb2xvbi5qc29uJztcbmV4cG9ydCB2YXIgVE9LRU5fREVMSU1fQ09NTUEgPSAnZGVsaW1pdGVyLmNvbW1hLmpzb24nO1xuZXhwb3J0IHZhciBUT0tFTl9WQUxVRV9CT09MRUFOID0gJ2tleXdvcmQuanNvbic7XG5leHBvcnQgdmFyIFRPS0VOX1ZBTFVFX05VTEwgPSAna2V5d29yZC5qc29uJztcbmV4cG9ydCB2YXIgVE9LRU5fVkFMVUVfU1RSSU5HID0gJ3N0cmluZy52YWx1ZS5qc29uJztcbmV4cG9ydCB2YXIgVE9LRU5fVkFMVUVfTlVNQkVSID0gJ251bWJlci5qc29uJztcbmV4cG9ydCB2YXIgVE9LRU5fUFJPUEVSVFlfTkFNRSA9ICdzdHJpbmcua2V5Lmpzb24nO1xuZXhwb3J0IHZhciBUT0tFTl9DT01NRU5UX0JMT0NLID0gJ2NvbW1lbnQuYmxvY2suanNvbic7XG5leHBvcnQgdmFyIFRPS0VOX0NPTU1FTlRfTElORSA9ICdjb21tZW50LmxpbmUuanNvbic7XG52YXIgSlNPTlN0YXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpTT05TdGF0ZShzdGF0ZSwgc2NhbkVycm9yLCBsYXN0V2FzQ29sb24pIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5zY2FuRXJyb3IgPSBzY2FuRXJyb3I7XG4gICAgICAgIHRoaXMubGFzdFdhc0NvbG9uID0gbGFzdFdhc0NvbG9uO1xuICAgIH1cbiAgICBKU09OU3RhdGUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEpTT05TdGF0ZSh0aGlzLl9zdGF0ZSwgdGhpcy5zY2FuRXJyb3IsIHRoaXMubGFzdFdhc0NvbG9uKTtcbiAgICB9O1xuICAgIEpTT05TdGF0ZS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIGlmIChvdGhlciA9PT0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvdGhlciB8fCAhKG90aGVyIGluc3RhbmNlb2YgSlNPTlN0YXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5FcnJvciA9PT0gb3RoZXIuc2NhbkVycm9yICYmXG4gICAgICAgICAgICB0aGlzLmxhc3RXYXNDb2xvbiA9PT0gb3RoZXIubGFzdFdhc0NvbG9uO1xuICAgIH07XG4gICAgSlNPTlN0YXRlLnByb3RvdHlwZS5nZXRTdGF0ZURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9O1xuICAgIEpTT05TdGF0ZS5wcm90b3R5cGUuc2V0U3RhdGVEYXRhID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgfTtcbiAgICByZXR1cm4gSlNPTlN0YXRlO1xufSgpKTtcbmZ1bmN0aW9uIHRva2VuaXplKGNvbW1lbnRzLCBsaW5lLCBzdGF0ZSwgb2Zmc2V0RGVsdGEsIHN0b3BBdE9mZnNldCkge1xuICAgIGlmIChvZmZzZXREZWx0YSA9PT0gdm9pZCAwKSB7IG9mZnNldERlbHRhID0gMDsgfVxuICAgIC8vIGhhbmRsZSBtdWx0aWxpbmUgc3RyaW5ncyBhbmQgYmxvY2sgY29tbWVudHNcbiAgICB2YXIgbnVtYmVyT2ZJbnNlcnRlZENoYXJhY3RlcnMgPSAwLCBhZGp1c3RPZmZzZXQgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHN0YXRlLnNjYW5FcnJvcikge1xuICAgICAgICBjYXNlIDIgLyogVW5leHBlY3RlZEVuZE9mU3RyaW5nICovOlxuICAgICAgICAgICAgbGluZSA9ICdcIicgKyBsaW5lO1xuICAgICAgICAgICAgbnVtYmVyT2ZJbnNlcnRlZENoYXJhY3RlcnMgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMSAvKiBVbmV4cGVjdGVkRW5kT2ZDb21tZW50ICovOlxuICAgICAgICAgICAgbGluZSA9ICcvKicgKyBsaW5lO1xuICAgICAgICAgICAgbnVtYmVyT2ZJbnNlcnRlZENoYXJhY3RlcnMgPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBzY2FubmVyID0ganNvbi5jcmVhdGVTY2FubmVyKGxpbmUpLCBraW5kLCByZXQsIGxhc3RXYXNDb2xvbiA9IHN0YXRlLmxhc3RXYXNDb2xvbjtcbiAgICByZXQgPSB7XG4gICAgICAgIHRva2VuczogW10sXG4gICAgICAgIGVuZFN0YXRlOiBzdGF0ZS5jbG9uZSgpXG4gICAgfTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGVsdGEgKyBzY2FubmVyLmdldFBvc2l0aW9uKCksIHR5cGUgPSAnJztcbiAgICAgICAga2luZCA9IHNjYW5uZXIuc2NhbigpO1xuICAgICAgICBpZiAoa2luZCA9PT0gMTcgLyogRU9GICovKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBzY2FubmVyIGhhcyBhZHZhbmNlZFxuICAgICAgICBpZiAob2Zmc2V0ID09PSBvZmZzZXREZWx0YSArIHNjYW5uZXIuZ2V0UG9zaXRpb24oKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2FubmVyIGRpZCBub3QgYWR2YW5jZSwgbmV4dCAzIGNoYXJhY3RlcnMgYXJlOiAnICsgbGluZS5zdWJzdHIoc2Nhbm5lci5nZXRQb3NpdGlvbigpLCAzKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW4gY2FzZSB3ZSBpbnNlcnRlZCAvKiBvciBcIiBjaGFyYWN0ZXIsIHdlIG5lZWQgdG9cbiAgICAgICAgLy8gYWRqdXN0IHRoZSBvZmZzZXQgb2YgYWxsIHRva2VucyAoZXhjZXB0IHRoZSBmaXJzdClcbiAgICAgICAgaWYgKGFkanVzdE9mZnNldCkge1xuICAgICAgICAgICAgb2Zmc2V0IC09IG51bWJlck9mSW5zZXJ0ZWRDaGFyYWN0ZXJzO1xuICAgICAgICB9XG4gICAgICAgIGFkanVzdE9mZnNldCA9IG51bWJlck9mSW5zZXJ0ZWRDaGFyYWN0ZXJzID4gMDtcbiAgICAgICAgLy8gYnJhY2tldHMgYW5kIHR5cGVcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlIDEgLyogT3BlbkJyYWNlVG9rZW4gKi86XG4gICAgICAgICAgICAgICAgdHlwZSA9IFRPS0VOX0RFTElNX09CSkVDVDtcbiAgICAgICAgICAgICAgICBsYXN0V2FzQ29sb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMiAvKiBDbG9zZUJyYWNlVG9rZW4gKi86XG4gICAgICAgICAgICAgICAgdHlwZSA9IFRPS0VOX0RFTElNX09CSkVDVDtcbiAgICAgICAgICAgICAgICBsYXN0V2FzQ29sb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMyAvKiBPcGVuQnJhY2tldFRva2VuICovOlxuICAgICAgICAgICAgICAgIHR5cGUgPSBUT0tFTl9ERUxJTV9BUlJBWTtcbiAgICAgICAgICAgICAgICBsYXN0V2FzQ29sb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNCAvKiBDbG9zZUJyYWNrZXRUb2tlbiAqLzpcbiAgICAgICAgICAgICAgICB0eXBlID0gVE9LRU5fREVMSU1fQVJSQVk7XG4gICAgICAgICAgICAgICAgbGFzdFdhc0NvbG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYgLyogQ29sb25Ub2tlbiAqLzpcbiAgICAgICAgICAgICAgICB0eXBlID0gVE9LRU5fREVMSU1fQ09MT047XG4gICAgICAgICAgICAgICAgbGFzdFdhc0NvbG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNSAvKiBDb21tYVRva2VuICovOlxuICAgICAgICAgICAgICAgIHR5cGUgPSBUT0tFTl9ERUxJTV9DT01NQTtcbiAgICAgICAgICAgICAgICBsYXN0V2FzQ29sb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOCAvKiBUcnVlS2V5d29yZCAqLzpcbiAgICAgICAgICAgIGNhc2UgOSAvKiBGYWxzZUtleXdvcmQgKi86XG4gICAgICAgICAgICAgICAgdHlwZSA9IFRPS0VOX1ZBTFVFX0JPT0xFQU47XG4gICAgICAgICAgICAgICAgbGFzdFdhc0NvbG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDcgLyogTnVsbEtleXdvcmQgKi86XG4gICAgICAgICAgICAgICAgdHlwZSA9IFRPS0VOX1ZBTFVFX05VTEw7XG4gICAgICAgICAgICAgICAgbGFzdFdhc0NvbG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwIC8qIFN0cmluZ0xpdGVyYWwgKi86XG4gICAgICAgICAgICAgICAgdHlwZSA9IGxhc3RXYXNDb2xvbiA/IFRPS0VOX1ZBTFVFX1NUUklORyA6IFRPS0VOX1BST1BFUlRZX05BTUU7XG4gICAgICAgICAgICAgICAgbGFzdFdhc0NvbG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDExIC8qIE51bWVyaWNMaXRlcmFsICovOlxuICAgICAgICAgICAgICAgIHR5cGUgPSBUT0tFTl9WQUxVRV9OVU1CRVI7XG4gICAgICAgICAgICAgICAgbGFzdFdhc0NvbG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29tbWVudHMsIGlmZiBlbmFibGVkXG4gICAgICAgIGlmIChjb21tZW50cykge1xuICAgICAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMiAvKiBMaW5lQ29tbWVudFRyaXZpYSAqLzpcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFRPS0VOX0NPTU1FTlRfTElORTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMyAvKiBCbG9ja0NvbW1lbnRUcml2aWEgKi86XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBUT0tFTl9DT01NRU5UX0JMT0NLO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXQuZW5kU3RhdGUgPSBuZXcgSlNPTlN0YXRlKHN0YXRlLmdldFN0YXRlRGF0YSgpLCBzY2FubmVyLmdldFRva2VuRXJyb3IoKSwgbGFzdFdhc0NvbG9uKTtcbiAgICAgICAgcmV0LnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXg6IG9mZnNldCxcbiAgICAgICAgICAgIHNjb3BlczogdHlwZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xudmFyIFNUT1BfV0hFTl9JRExFX0ZPUiA9IDIgKiA2MCAqIDEwMDA7IC8vIDJtaW5cbnZhciBXb3JrZXJNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvcmtlck1hbmFnZXIoZGVmYXVsdHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgdGhpcy5fd29ya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5faWRsZUNoZWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fY2hlY2tJZklkbGUoKTsgfSwgMzAgKiAxMDAwKTtcbiAgICAgICAgdGhpcy5fbGFzdFVzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIgPSB0aGlzLl9kZWZhdWx0cy5vbkRpZENoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fc3RvcFdvcmtlcigpOyB9KTtcbiAgICB9XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX3N0b3BXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2lkbGVDaGVja0ludGVydmFsKTtcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9zdG9wV29ya2VyKCk7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5fY2hlY2tJZklkbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpbWVQYXNzZWRTaW5jZUxhc3RVc2VkID0gRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RVc2VkVGltZTtcbiAgICAgICAgaWYgKHRpbWVQYXNzZWRTaW5jZUxhc3RVc2VkID4gU1RPUF9XSEVOX0lETEVfRk9SKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wV29ya2VyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9nZXRDbGllbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2xhc3RVc2VkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICghdGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBtb25hY28uZWRpdG9yLmNyZWF0ZVdlYldvcmtlcih7XG4gICAgICAgICAgICAgICAgLy8gbW9kdWxlIHRoYXQgZXhwb3J0cyB0aGUgY3JlYXRlKCkgbWV0aG9kIGFuZCByZXR1cm5zIGEgYEpTT05Xb3JrZXJgIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6ICd2cy9sYW5ndWFnZS9qc29uL2pzb25Xb3JrZXInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLl9kZWZhdWx0cy5sYW5ndWFnZUlkLFxuICAgICAgICAgICAgICAgIC8vIHBhc3NlZCBpbiB0byB0aGUgY3JlYXRlKCkgbWV0aG9kXG4gICAgICAgICAgICAgICAgY3JlYXRlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZVNldHRpbmdzOiB0aGlzLl9kZWZhdWx0cy5kaWFnbm9zdGljc09wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlSWQ6IHRoaXMuX2RlZmF1bHRzLmxhbmd1YWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVNjaGVtYVJlcXVlc3Q6IHRoaXMuX2RlZmF1bHRzLmRpYWdub3N0aWNzT3B0aW9ucy5lbmFibGVTY2hlbWFSZXF1ZXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSB0aGlzLl93b3JrZXIuZ2V0UHJveHkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH07XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuZ2V0TGFuZ3VhZ2VTZXJ2aWNlV29ya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2VzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICByZXNvdXJjZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2NsaWVudDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldENsaWVudCgpLnRoZW4oZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICAgICAgX2NsaWVudCA9IGNsaWVudDtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl93b3JrZXIud2l0aFN5bmNlZFJlc291cmNlcyhyZXNvdXJjZXMpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfKSB7IHJldHVybiBfY2xpZW50OyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBXb3JrZXJNYW5hZ2VyO1xufSgpKTtcbmV4cG9ydCB7IFdvcmtlck1hbmFnZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=