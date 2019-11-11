(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js ***!
  \***********************************************************************************/
/*! exports provided: flattenDiagnosticMessageText, Adapter, DiagnostcsAdapter, SuggestAdapter, SignatureHelpAdapter, QuickInfoAdapter, OccurrencesAdapter, DefinitionAdapter, ReferenceAdapter, OutlineAdapter, Kind, FormatHelper, FormatAdapter, FormatOnTypeAdapter, RenameAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenDiagnosticMessageText", function() { return flattenDiagnosticMessageText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnostcsAdapter", function() { return DiagnostcsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestAdapter", function() { return SuggestAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpAdapter", function() { return SignatureHelpAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickInfoAdapter", function() { return QuickInfoAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccurrencesAdapter", function() { return OccurrencesAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionAdapter", function() { return DefinitionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceAdapter", function() { return ReferenceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineAdapter", function() { return OutlineAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatHelper", function() { return FormatHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatAdapter", function() { return FormatAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatOnTypeAdapter", function() { return FormatOnTypeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameAdapter", function() { return RenameAdapter; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Uri = monaco.Uri;
var Range = monaco.Range;
//#region utils copied from typescript to prevent loading the entire typescriptServices ---
var IndentStyle;
(function (IndentStyle) {
    IndentStyle[IndentStyle["None"] = 0] = "None";
    IndentStyle[IndentStyle["Block"] = 1] = "Block";
    IndentStyle[IndentStyle["Smart"] = 2] = "Smart";
})(IndentStyle || (IndentStyle = {}));
function flattenDiagnosticMessageText(diag, newLine, indent) {
    if (indent === void 0) { indent = 0; }
    if (typeof diag === "string") {
        return diag;
    }
    else if (diag === undefined) {
        return "";
    }
    var result = "";
    if (indent) {
        result += newLine;
        for (var i = 0; i < indent; i++) {
            result += "  ";
        }
    }
    result += diag.messageText;
    indent++;
    if (diag.next) {
        for (var _i = 0, _a = diag.next; _i < _a.length; _i++) {
            var kid = _a[_i];
            result += flattenDiagnosticMessageText(kid, newLine, indent);
        }
    }
    return result;
}
function displayPartsToString(displayParts) {
    if (displayParts) {
        return displayParts.map(function (displayPart) { return displayPart.text; }).join("");
    }
    return "";
}
//#endregion
var Adapter = /** @class */ (function () {
    function Adapter(_worker) {
        this._worker = _worker;
    }
    Adapter.prototype._positionToOffset = function (uri, position) {
        var model = monaco.editor.getModel(uri);
        return model.getOffsetAt(position);
    };
    Adapter.prototype._offsetToPosition = function (uri, offset) {
        var model = monaco.editor.getModel(uri);
        return model.getPositionAt(offset);
    };
    Adapter.prototype._textSpanToRange = function (uri, span) {
        var p1 = this._offsetToPosition(uri, span.start);
        var p2 = this._offsetToPosition(uri, span.start + span.length);
        var startLineNumber = p1.lineNumber, startColumn = p1.column;
        var endLineNumber = p2.lineNumber, endColumn = p2.column;
        return { startLineNumber: startLineNumber, startColumn: startColumn, endLineNumber: endLineNumber, endColumn: endColumn };
    };
    return Adapter;
}());

// --- diagnostics --- ---
var DiagnostcsAdapter = /** @class */ (function (_super) {
    __extends(DiagnostcsAdapter, _super);
    function DiagnostcsAdapter(_defaults, _selector, worker) {
        var _this = _super.call(this, worker) || this;
        _this._defaults = _defaults;
        _this._selector = _selector;
        _this._disposables = [];
        _this._listener = Object.create(null);
        var onModelAdd = function (model) {
            if (model.getModeId() !== _selector) {
                return;
            }
            var handle;
            var changeSubscription = model.onDidChangeContent(function () {
                clearTimeout(handle);
                handle = setTimeout(function () { return _this._doValidate(model.uri); }, 500);
            });
            _this._listener[model.uri.toString()] = {
                dispose: function () {
                    changeSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            _this._doValidate(model.uri);
        };
        var onModelRemoved = function (model) {
            monaco.editor.setModelMarkers(model, _this._selector, []);
            var key = model.uri.toString();
            if (_this._listener[key]) {
                _this._listener[key].dispose();
                delete _this._listener[key];
            }
        };
        _this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd));
        _this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));
        _this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        _this._disposables.push({
            dispose: function () {
                for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
                    var model = _a[_i];
                    onModelRemoved(model);
                }
            }
        });
        var recomputeDiagostics = function () {
            // redo diagnostics when options change
            for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
                var model = _a[_i];
                onModelRemoved(model);
                onModelAdd(model);
            }
        };
        _this._disposables.push(_this._defaults.onDidChange(recomputeDiagostics));
        _this._disposables.push(_this._defaults.onDidExtraLibsChange(recomputeDiagostics));
        monaco.editor.getModels().forEach(onModelAdd);
        return _this;
    }
    DiagnostcsAdapter.prototype.dispose = function () {
        this._disposables.forEach(function (d) { return d && d.dispose(); });
        this._disposables = [];
    };
    DiagnostcsAdapter.prototype._doValidate = function (resource) {
        var _this = this;
        this._worker(resource).then(function (worker) {
            if (!monaco.editor.getModel(resource)) {
                // model was disposed in the meantime
                return null;
            }
            var promises = [];
            var _a = _this._defaults.getDiagnosticsOptions(), noSyntaxValidation = _a.noSyntaxValidation, noSemanticValidation = _a.noSemanticValidation;
            if (!noSyntaxValidation) {
                promises.push(worker.getSyntacticDiagnostics(resource.toString()));
            }
            if (!noSemanticValidation) {
                promises.push(worker.getSemanticDiagnostics(resource.toString()));
            }
            return Promise.all(promises);
        }).then(function (diagnostics) {
            if (!diagnostics || !monaco.editor.getModel(resource)) {
                // model was disposed in the meantime
                return null;
            }
            var markers = diagnostics
                .reduce(function (p, c) { return c.concat(p); }, [])
                .map(function (d) { return _this._convertDiagnostics(resource, d); });
            monaco.editor.setModelMarkers(monaco.editor.getModel(resource), _this._selector, markers);
        }).then(undefined, function (err) {
            console.error(err);
        });
    };
    DiagnostcsAdapter.prototype._convertDiagnostics = function (resource, diag) {
        var _a = this._offsetToPosition(resource, diag.start), startLineNumber = _a.lineNumber, startColumn = _a.column;
        var _b = this._offsetToPosition(resource, diag.start + diag.length), endLineNumber = _b.lineNumber, endColumn = _b.column;
        return {
            severity: monaco.MarkerSeverity.Error,
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn,
            message: flattenDiagnosticMessageText(diag.messageText, '\n')
        };
    };
    return DiagnostcsAdapter;
}(Adapter));

var SuggestAdapter = /** @class */ (function (_super) {
    __extends(SuggestAdapter, _super);
    function SuggestAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SuggestAdapter.prototype, "triggerCharacters", {
        get: function () {
            return ['.'];
        },
        enumerable: true,
        configurable: true
    });
    SuggestAdapter.prototype.provideCompletionItems = function (model, position, _context, token) {
        var wordInfo = model.getWordUntilPosition(position);
        var wordRange = new Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
        var resource = model.uri;
        var offset = this._positionToOffset(resource, position);
        return this._worker(resource).then(function (worker) {
            return worker.getCompletionsAtPosition(resource.toString(), offset);
        }).then(function (info) {
            if (!info) {
                return;
            }
            var suggestions = info.entries.map(function (entry) {
                var range = wordRange;
                if (entry.replacementSpan) {
                    var p1 = model.getPositionAt(entry.replacementSpan.start);
                    var p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                    range = new Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
                }
                return {
                    uri: resource,
                    position: position,
                    range: range,
                    label: entry.name,
                    insertText: entry.name,
                    sortText: entry.sortText,
                    kind: SuggestAdapter.convertKind(entry.kind)
                };
            });
            return {
                suggestions: suggestions
            };
        });
    };
    SuggestAdapter.prototype.resolveCompletionItem = function (_model, _position, item, token) {
        var _this = this;
        var myItem = item;
        var resource = myItem.uri;
        var position = myItem.position;
        return this._worker(resource).then(function (worker) {
            return worker.getCompletionEntryDetails(resource.toString(), _this._positionToOffset(resource, position), myItem.label);
        }).then(function (details) {
            if (!details) {
                return myItem;
            }
            return {
                uri: resource,
                position: position,
                label: details.name,
                kind: SuggestAdapter.convertKind(details.kind),
                detail: displayPartsToString(details.displayParts),
                documentation: {
                    value: displayPartsToString(details.documentation)
                }
            };
        });
    };
    SuggestAdapter.convertKind = function (kind) {
        switch (kind) {
            case Kind.primitiveType:
            case Kind.keyword:
                return monaco.languages.CompletionItemKind.Keyword;
            case Kind.variable:
            case Kind.localVariable:
                return monaco.languages.CompletionItemKind.Variable;
            case Kind.memberVariable:
            case Kind.memberGetAccessor:
            case Kind.memberSetAccessor:
                return monaco.languages.CompletionItemKind.Field;
            case Kind.function:
            case Kind.memberFunction:
            case Kind.constructSignature:
            case Kind.callSignature:
            case Kind.indexSignature:
                return monaco.languages.CompletionItemKind.Function;
            case Kind.enum:
                return monaco.languages.CompletionItemKind.Enum;
            case Kind.module:
                return monaco.languages.CompletionItemKind.Module;
            case Kind.class:
                return monaco.languages.CompletionItemKind.Class;
            case Kind.interface:
                return monaco.languages.CompletionItemKind.Interface;
            case Kind.warning:
                return monaco.languages.CompletionItemKind.File;
        }
        return monaco.languages.CompletionItemKind.Property;
    };
    return SuggestAdapter;
}(Adapter));

var SignatureHelpAdapter = /** @class */ (function (_super) {
    __extends(SignatureHelpAdapter, _super);
    function SignatureHelpAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signatureHelpTriggerCharacters = ['(', ','];
        return _this;
    }
    SignatureHelpAdapter.prototype.provideSignatureHelp = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.getSignatureHelpItems(resource.toString(), _this._positionToOffset(resource, position)); }).then(function (info) {
            if (!info) {
                return;
            }
            var ret = {
                activeSignature: info.selectedItemIndex,
                activeParameter: info.argumentIndex,
                signatures: []
            };
            info.items.forEach(function (item) {
                var signature = {
                    label: '',
                    parameters: []
                };
                signature.label += displayPartsToString(item.prefixDisplayParts);
                item.parameters.forEach(function (p, i, a) {
                    var label = displayPartsToString(p.displayParts);
                    var parameter = {
                        label: label,
                        documentation: displayPartsToString(p.documentation)
                    };
                    signature.label += label;
                    signature.parameters.push(parameter);
                    if (i < a.length - 1) {
                        signature.label += displayPartsToString(item.separatorDisplayParts);
                    }
                });
                signature.label += displayPartsToString(item.suffixDisplayParts);
                ret.signatures.push(signature);
            });
            return {
                value: ret,
                dispose: function () { }
            };
        });
    };
    return SignatureHelpAdapter;
}(Adapter));

// --- hover ------
var QuickInfoAdapter = /** @class */ (function (_super) {
    __extends(QuickInfoAdapter, _super);
    function QuickInfoAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickInfoAdapter.prototype.provideHover = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getQuickInfoAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (info) {
            if (!info) {
                return;
            }
            var documentation = displayPartsToString(info.documentation);
            var tags = info.tags ? info.tags.map(function (tag) {
                var label = "*@" + tag.name + "*";
                if (!tag.text) {
                    return label;
                }
                return label + (tag.text.match(/\r\n|\n/g) ? ' \n' + tag.text : " - " + tag.text);
            })
                .join('  \n\n') : '';
            var contents = displayPartsToString(info.displayParts);
            return {
                range: _this._textSpanToRange(resource, info.textSpan),
                contents: [{
                        value: '```js\n' + contents + '\n```\n'
                    }, {
                        value: documentation + (tags ? '\n\n' + tags : '')
                    }]
            };
        });
    };
    return QuickInfoAdapter;
}(Adapter));

// --- occurrences ------
var OccurrencesAdapter = /** @class */ (function (_super) {
    __extends(OccurrencesAdapter, _super);
    function OccurrencesAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OccurrencesAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getOccurrencesAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            return entries.map(function (entry) {
                return {
                    range: _this._textSpanToRange(resource, entry.textSpan),
                    kind: entry.isWriteAccess ? monaco.languages.DocumentHighlightKind.Write : monaco.languages.DocumentHighlightKind.Text
                };
            });
        });
    };
    return OccurrencesAdapter;
}(Adapter));

// --- definition ------
var DefinitionAdapter = /** @class */ (function (_super) {
    __extends(DefinitionAdapter, _super);
    function DefinitionAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinitionAdapter.prototype.provideDefinition = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getDefinitionAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            var result = [];
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                var uri = Uri.parse(entry.fileName);
                if (monaco.editor.getModel(uri)) {
                    result.push({
                        uri: uri,
                        range: _this._textSpanToRange(uri, entry.textSpan)
                    });
                }
            }
            return result;
        });
    };
    return DefinitionAdapter;
}(Adapter));

// --- references ------
var ReferenceAdapter = /** @class */ (function (_super) {
    __extends(ReferenceAdapter, _super);
    function ReferenceAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReferenceAdapter.prototype.provideReferences = function (model, position, context, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getReferencesAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            var result = [];
            for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
                var entry = entries_2[_i];
                var uri = Uri.parse(entry.fileName);
                if (monaco.editor.getModel(uri)) {
                    result.push({
                        uri: uri,
                        range: _this._textSpanToRange(uri, entry.textSpan)
                    });
                }
            }
            return result;
        });
    };
    return ReferenceAdapter;
}(Adapter));

// --- outline ------
var OutlineAdapter = /** @class */ (function (_super) {
    __extends(OutlineAdapter, _super);
    function OutlineAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlineAdapter.prototype.provideDocumentSymbols = function (model, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.getNavigationBarItems(resource.toString()); }).then(function (items) {
            if (!items) {
                return;
            }
            var convert = function (bucket, item, containerLabel) {
                var result = {
                    name: item.text,
                    detail: '',
                    kind: (outlineTypeTable[item.kind] || monaco.languages.SymbolKind.Variable),
                    range: _this._textSpanToRange(resource, item.spans[0]),
                    selectionRange: _this._textSpanToRange(resource, item.spans[0]),
                    tags: [],
                    containerName: containerLabel
                };
                if (item.childItems && item.childItems.length > 0) {
                    for (var _i = 0, _a = item.childItems; _i < _a.length; _i++) {
                        var child = _a[_i];
                        convert(bucket, child, result.name);
                    }
                }
                bucket.push(result);
            };
            var result = [];
            items.forEach(function (item) { return convert(result, item); });
            return result;
        });
    };
    return OutlineAdapter;
}(Adapter));

var Kind = /** @class */ (function () {
    function Kind() {
    }
    Kind.unknown = '';
    Kind.keyword = 'keyword';
    Kind.script = 'script';
    Kind.module = 'module';
    Kind.class = 'class';
    Kind.interface = 'interface';
    Kind.type = 'type';
    Kind.enum = 'enum';
    Kind.variable = 'var';
    Kind.localVariable = 'local var';
    Kind.function = 'function';
    Kind.localFunction = 'local function';
    Kind.memberFunction = 'method';
    Kind.memberGetAccessor = 'getter';
    Kind.memberSetAccessor = 'setter';
    Kind.memberVariable = 'property';
    Kind.constructorImplementation = 'constructor';
    Kind.callSignature = 'call';
    Kind.indexSignature = 'index';
    Kind.constructSignature = 'construct';
    Kind.parameter = 'parameter';
    Kind.typeParameter = 'type parameter';
    Kind.primitiveType = 'primitive type';
    Kind.label = 'label';
    Kind.alias = 'alias';
    Kind.const = 'const';
    Kind.let = 'let';
    Kind.warning = 'warning';
    return Kind;
}());

var outlineTypeTable = Object.create(null);
outlineTypeTable[Kind.module] = monaco.languages.SymbolKind.Module;
outlineTypeTable[Kind.class] = monaco.languages.SymbolKind.Class;
outlineTypeTable[Kind.enum] = monaco.languages.SymbolKind.Enum;
outlineTypeTable[Kind.interface] = monaco.languages.SymbolKind.Interface;
outlineTypeTable[Kind.memberFunction] = monaco.languages.SymbolKind.Method;
outlineTypeTable[Kind.memberVariable] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberGetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberSetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.const] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.localVariable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.function] = monaco.languages.SymbolKind.Function;
outlineTypeTable[Kind.localFunction] = monaco.languages.SymbolKind.Function;
// --- formatting ----
var FormatHelper = /** @class */ (function (_super) {
    __extends(FormatHelper, _super);
    function FormatHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatHelper._convertOptions = function (options) {
        return {
            ConvertTabsToSpaces: options.insertSpaces,
            TabSize: options.tabSize,
            IndentSize: options.tabSize,
            IndentStyle: IndentStyle.Smart,
            NewLineCharacter: '\n',
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
            PlaceOpenBraceOnNewLineForFunctions: false
        };
    };
    FormatHelper.prototype._convertTextChanges = function (uri, change) {
        return {
            text: change.newText,
            range: this._textSpanToRange(uri, change.span)
        };
    };
    return FormatHelper;
}(Adapter));

var FormatAdapter = /** @class */ (function (_super) {
    __extends(FormatAdapter, _super);
    function FormatAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatAdapter.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getFormattingEditsForRange(resource.toString(), _this._positionToOffset(resource, { lineNumber: range.startLineNumber, column: range.startColumn }), _this._positionToOffset(resource, { lineNumber: range.endLineNumber, column: range.endColumn }), FormatHelper._convertOptions(options));
        }).then(function (edits) {
            if (edits) {
                return edits.map(function (edit) { return _this._convertTextChanges(resource, edit); });
            }
        });
    };
    return FormatAdapter;
}(FormatHelper));

var FormatOnTypeAdapter = /** @class */ (function (_super) {
    __extends(FormatOnTypeAdapter, _super);
    function FormatOnTypeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormatOnTypeAdapter.prototype, "autoFormatTriggerCharacters", {
        get: function () {
            return [';', '}', '\n'];
        },
        enumerable: true,
        configurable: true
    });
    FormatOnTypeAdapter.prototype.provideOnTypeFormattingEdits = function (model, position, ch, options, token) {
        var _this = this;
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.getFormattingEditsAfterKeystroke(resource.toString(), _this._positionToOffset(resource, position), ch, FormatHelper._convertOptions(options));
        }).then(function (edits) {
            if (edits) {
                return edits.map(function (edit) { return _this._convertTextChanges(resource, edit); });
            }
        });
    };
    return FormatOnTypeAdapter;
}(FormatHelper));

// --- rename ----
var RenameAdapter = /** @class */ (function (_super) {
    __extends(RenameAdapter, _super);
    function RenameAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenameAdapter.prototype.provideRenameEdits = function (model, position, newName, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, fileName, offset, worker, renameInfo, renameLocations, fileNameToResourceTextEditMap, edits, _i, renameLocations_1, renameLocation, resourceTextEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        fileName = resource.toString();
                        offset = this._positionToOffset(resource, position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getRenameInfo(fileName, offset, { allowRenameOfImportPath: false })];
                    case 2:
                        renameInfo = _a.sent();
                        if (renameInfo.canRename === false) { // use explicit comparison so that the discriminated union gets resolved properly
                            return [2 /*return*/, {
                                    edits: [],
                                    rejectReason: renameInfo.localizedErrorMessage
                                }];
                        }
                        if (renameInfo.fileToRename !== undefined) {
                            throw new Error("Renaming files is not supported.");
                        }
                        return [4 /*yield*/, worker.findRenameLocations(fileName, offset, /*strings*/ false, /*comments*/ false, /*prefixAndSuffix*/ false)];
                    case 3:
                        renameLocations = _a.sent();
                        fileNameToResourceTextEditMap = {};
                        edits = [];
                        for (_i = 0, renameLocations_1 = renameLocations; _i < renameLocations_1.length; _i++) {
                            renameLocation = renameLocations_1[_i];
                            if (!(renameLocation.fileName in fileNameToResourceTextEditMap)) {
                                resourceTextEdit = {
                                    edits: [],
                                    resource: monaco.Uri.parse(renameLocation.fileName)
                                };
                                fileNameToResourceTextEditMap[renameLocation.fileName] = resourceTextEdit;
                                edits.push(resourceTextEdit);
                            }
                            fileNameToResourceTextEditMap[renameLocation.fileName].edits.push({
                                range: this._textSpanToRange(resource, renameLocation.textSpan),
                                text: newName
                            });
                        }
                        return [2 /*return*/, { edits: edits }];
                }
            });
        });
    };
    return RenameAdapter;
}(Adapter));



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":
/*!*************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js ***!
  \*************************************************************************/
/*! exports provided: setupTypeScript, setupJavaScript, getJavaScriptWorker, getTypeScriptWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTypeScript", function() { return setupTypeScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupJavaScript", function() { return setupJavaScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJavaScriptWorker", function() { return getJavaScriptWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeScriptWorker", function() { return getTypeScriptWorker; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var javaScriptWorker;
var typeScriptWorker;
function setupTypeScript(defaults) {
    typeScriptWorker = setupMode(defaults, 'typescript');
}
function setupJavaScript(defaults) {
    javaScriptWorker = setupMode(defaults, 'javascript');
}
function getJavaScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!javaScriptWorker) {
            return reject("JavaScript not registered!");
        }
        resolve(javaScriptWorker);
    });
}
function getTypeScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!typeScriptWorker) {
            return reject("TypeScript not registered!");
        }
        resolve(typeScriptWorker);
    });
}
function setupMode(defaults, modeId) {
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](modeId, defaults);
    var worker = function (first) {
        var more = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            more[_i - 1] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, [first].concat(more));
    };
    monaco.languages.registerCompletionItemProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SuggestAdapter"](worker));
    monaco.languages.registerSignatureHelpProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SignatureHelpAdapter"](worker));
    monaco.languages.registerHoverProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["QuickInfoAdapter"](worker));
    monaco.languages.registerDocumentHighlightProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OccurrencesAdapter"](worker));
    monaco.languages.registerDefinitionProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DefinitionAdapter"](worker));
    monaco.languages.registerReferenceProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["ReferenceAdapter"](worker));
    monaco.languages.registerDocumentSymbolProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OutlineAdapter"](worker));
    monaco.languages.registerDocumentRangeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatAdapter"](worker));
    monaco.languages.registerOnTypeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatOnTypeAdapter"](worker));
    monaco.languages.registerRenameProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["RenameAdapter"](worker));
    new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnostcsAdapter"](defaults, modeId, worker);
    return worker;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js ***!
  \********************************************************************************/
/*! exports provided: WorkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerManager", function() { return WorkerManager; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var WorkerManager = /** @class */ (function () {
    function WorkerManager(modeId, defaults) {
        var _this = this;
        this._modeId = modeId;
        this._defaults = defaults;
        this._worker = null;
        this._idleCheckInterval = setInterval(function () { return _this._checkIfIdle(); }, 30 * 1000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
        this._updateExtraLibsToken = 0;
        this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(function () { return _this._updateExtraLibs(); });
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
        this._extraLibsChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._updateExtraLibs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myToken, proxy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._worker) {
                            return [2 /*return*/];
                        }
                        myToken = ++this._updateExtraLibsToken;
                        return [4 /*yield*/, this._worker.getProxy()];
                    case 1:
                        proxy = _a.sent();
                        if (this._updateExtraLibsToken !== myToken) {
                            // avoid multiple calls
                            return [2 /*return*/];
                        }
                        proxy.updateExtraLibs(this._defaults.getExtraLibs());
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkerManager.prototype._checkIfIdle = function () {
        if (!this._worker) {
            return;
        }
        var maxIdleTime = this._defaults.getWorkerMaxIdleTime();
        var timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (maxIdleTime > 0 && timePassedSinceLastUsed > maxIdleTime) {
            this._stopWorker();
        }
    };
    WorkerManager.prototype._getClient = function () {
        var _this = this;
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = monaco.editor.createWebWorker({
                // module that exports the create() method and returns a `TypeScriptWorker` instance
                moduleId: 'vs/language/typescript/tsWorker',
                label: this._modeId,
                // passed in to the create() method
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs()
                }
            });
            var p = this._worker.getProxy();
            if (this._defaults.getEagerModelSync()) {
                p = p.then(function (worker) {
                    return _this._worker.withSyncedResources(monaco.editor.getModels()
                        .filter(function (model) { return model.getModeId() === _this._modeId; })
                        .map(function (model) { return model.uri; }));
                });
            }
            this._client = p;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC9sYW5ndWFnZUZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS90eXBlc2NyaXB0L3RzTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC93b3JrZXJNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYixpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFC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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHVHQUF1RyxFQUFFO0FBQ3ZLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUMrQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUMyQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQzZCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q1Q7QUFDQSxTQUFTLHFCQUFxQixnQkFBZ0IsRUFBRTtBQUNoRDtBQUNBO0FBQ0EsQ0FBQztBQUN3QiIsImZpbGUiOiI0Ljg5M2M0NDA5LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgVXJpID0gbW9uYWNvLlVyaTtcbnZhciBSYW5nZSA9IG1vbmFjby5SYW5nZTtcbi8vI3JlZ2lvbiB1dGlscyBjb3BpZWQgZnJvbSB0eXBlc2NyaXB0IHRvIHByZXZlbnQgbG9hZGluZyB0aGUgZW50aXJlIHR5cGVzY3JpcHRTZXJ2aWNlcyAtLS1cbnZhciBJbmRlbnRTdHlsZTtcbihmdW5jdGlvbiAoSW5kZW50U3R5bGUpIHtcbiAgICBJbmRlbnRTdHlsZVtJbmRlbnRTdHlsZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIEluZGVudFN0eWxlW0luZGVudFN0eWxlW1wiQmxvY2tcIl0gPSAxXSA9IFwiQmxvY2tcIjtcbiAgICBJbmRlbnRTdHlsZVtJbmRlbnRTdHlsZVtcIlNtYXJ0XCJdID0gMl0gPSBcIlNtYXJ0XCI7XG59KShJbmRlbnRTdHlsZSB8fCAoSW5kZW50U3R5bGUgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQoZGlhZywgbmV3TGluZSwgaW5kZW50KSB7XG4gICAgaWYgKGluZGVudCA9PT0gdm9pZCAwKSB7IGluZGVudCA9IDA7IH1cbiAgICBpZiAodHlwZW9mIGRpYWcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGRpYWc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpYWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgaWYgKGluZGVudCkge1xuICAgICAgICByZXN1bHQgKz0gbmV3TGluZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRlbnQ7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiICBcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgKz0gZGlhZy5tZXNzYWdlVGV4dDtcbiAgICBpbmRlbnQrKztcbiAgICBpZiAoZGlhZy5uZXh0KSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBkaWFnLm5leHQ7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIga2lkID0gX2FbX2ldO1xuICAgICAgICAgICAgcmVzdWx0ICs9IGZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQoa2lkLCBuZXdMaW5lLCBpbmRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBkaXNwbGF5UGFydHNUb1N0cmluZyhkaXNwbGF5UGFydHMpIHtcbiAgICBpZiAoZGlzcGxheVBhcnRzKSB7XG4gICAgICAgIHJldHVybiBkaXNwbGF5UGFydHMubWFwKGZ1bmN0aW9uIChkaXNwbGF5UGFydCkgeyByZXR1cm4gZGlzcGxheVBhcnQudGV4dDsgfSkuam9pbihcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG4vLyNlbmRyZWdpb25cbnZhciBBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5fcG9zaXRpb25Ub09mZnNldCA9IGZ1bmN0aW9uICh1cmksIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwodXJpKTtcbiAgICAgICAgcmV0dXJuIG1vZGVsLmdldE9mZnNldEF0KHBvc2l0aW9uKTtcbiAgICB9O1xuICAgIEFkYXB0ZXIucHJvdG90eXBlLl9vZmZzZXRUb1Bvc2l0aW9uID0gZnVuY3Rpb24gKHVyaSwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciBtb2RlbCA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwodXJpKTtcbiAgICAgICAgcmV0dXJuIG1vZGVsLmdldFBvc2l0aW9uQXQob2Zmc2V0KTtcbiAgICB9O1xuICAgIEFkYXB0ZXIucHJvdG90eXBlLl90ZXh0U3BhblRvUmFuZ2UgPSBmdW5jdGlvbiAodXJpLCBzcGFuKSB7XG4gICAgICAgIHZhciBwMSA9IHRoaXMuX29mZnNldFRvUG9zaXRpb24odXJpLCBzcGFuLnN0YXJ0KTtcbiAgICAgICAgdmFyIHAyID0gdGhpcy5fb2Zmc2V0VG9Qb3NpdGlvbih1cmksIHNwYW4uc3RhcnQgKyBzcGFuLmxlbmd0aCk7XG4gICAgICAgIHZhciBzdGFydExpbmVOdW1iZXIgPSBwMS5saW5lTnVtYmVyLCBzdGFydENvbHVtbiA9IHAxLmNvbHVtbjtcbiAgICAgICAgdmFyIGVuZExpbmVOdW1iZXIgPSBwMi5saW5lTnVtYmVyLCBlbmRDb2x1bW4gPSBwMi5jb2x1bW47XG4gICAgICAgIHJldHVybiB7IHN0YXJ0TGluZU51bWJlcjogc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbjogc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXI6IGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbjogZW5kQ29sdW1uIH07XG4gICAgfTtcbiAgICByZXR1cm4gQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBBZGFwdGVyIH07XG4vLyAtLS0gZGlhZ25vc3RpY3MgLS0tIC0tLVxudmFyIERpYWdub3N0Y3NBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEaWFnbm9zdGNzQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEaWFnbm9zdGNzQWRhcHRlcihfZGVmYXVsdHMsIF9zZWxlY3Rvciwgd29ya2VyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHdvcmtlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2RlZmF1bHRzID0gX2RlZmF1bHRzO1xuICAgICAgICBfdGhpcy5fc2VsZWN0b3IgPSBfc2VsZWN0b3I7XG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcyA9IFtdO1xuICAgICAgICBfdGhpcy5fbGlzdGVuZXIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgb25Nb2RlbEFkZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgaWYgKG1vZGVsLmdldE1vZGVJZCgpICE9PSBfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgdmFyIGNoYW5nZVN1YnNjcmlwdGlvbiA9IG1vZGVsLm9uRGlkQ2hhbmdlQ29udGVudChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fZG9WYWxpZGF0ZShtb2RlbC51cmkpOyB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJbbW9kZWwudXJpLnRvU3RyaW5nKCldID0ge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLl9kb1ZhbGlkYXRlKG1vZGVsLnVyaSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbk1vZGVsUmVtb3ZlZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9kZWwsIF90aGlzLl9zZWxlY3RvciwgW10pO1xuICAgICAgICAgICAgdmFyIGtleSA9IG1vZGVsLnVyaS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKF90aGlzLl9saXN0ZW5lcltrZXldKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW2tleV0uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5fbGlzdGVuZXJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2gobW9uYWNvLmVkaXRvci5vbkRpZENyZWF0ZU1vZGVsKG9uTW9kZWxBZGQpKTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2gobW9uYWNvLmVkaXRvci5vbldpbGxEaXNwb3NlTW9kZWwob25Nb2RlbFJlbW92ZWQpKTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2gobW9uYWNvLmVkaXRvci5vbkRpZENoYW5nZU1vZGVsTGFuZ3VhZ2UoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBvbk1vZGVsUmVtb3ZlZChldmVudC5tb2RlbCk7XG4gICAgICAgICAgICBvbk1vZGVsQWRkKGV2ZW50Lm1vZGVsKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaCh7XG4gICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RlbCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZWNvbXB1dGVEaWFnb3N0aWNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gcmVkbyBkaWFnbm9zdGljcyB3aGVuIG9wdGlvbnMgY2hhbmdlXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gbW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9kZWwgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIG9uTW9kZWxBZGQobW9kZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChfdGhpcy5fZGVmYXVsdHMub25EaWRDaGFuZ2UocmVjb21wdXRlRGlhZ29zdGljcykpO1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChfdGhpcy5fZGVmYXVsdHMub25EaWRFeHRyYUxpYnNDaGFuZ2UocmVjb21wdXRlRGlhZ29zdGljcykpO1xuICAgICAgICBtb25hY28uZWRpdG9yLmdldE1vZGVscygpLmZvckVhY2gob25Nb2RlbEFkZCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRGlhZ25vc3Rjc0FkYXB0ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgJiYgZC5kaXNwb3NlKCk7IH0pO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcyA9IFtdO1xuICAgIH07XG4gICAgRGlhZ25vc3Rjc0FkYXB0ZXIucHJvdG90eXBlLl9kb1ZhbGlkYXRlID0gZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICBpZiAoIW1vbmFjby5lZGl0b3IuZ2V0TW9kZWwocmVzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgLy8gbW9kZWwgd2FzIGRpc3Bvc2VkIGluIHRoZSBtZWFudGltZVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5fZGVmYXVsdHMuZ2V0RGlhZ25vc3RpY3NPcHRpb25zKCksIG5vU3ludGF4VmFsaWRhdGlvbiA9IF9hLm5vU3ludGF4VmFsaWRhdGlvbiwgbm9TZW1hbnRpY1ZhbGlkYXRpb24gPSBfYS5ub1NlbWFudGljVmFsaWRhdGlvbjtcbiAgICAgICAgICAgIGlmICghbm9TeW50YXhWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3b3JrZXIuZ2V0U3ludGFjdGljRGlhZ25vc3RpY3MocmVzb3VyY2UudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFub1NlbWFudGljVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god29ya2VyLmdldFNlbWFudGljRGlhZ25vc3RpY3MocmVzb3VyY2UudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGlhZ25vc3RpY3MpIHtcbiAgICAgICAgICAgIGlmICghZGlhZ25vc3RpY3MgfHwgIW1vbmFjby5lZGl0b3IuZ2V0TW9kZWwocmVzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgLy8gbW9kZWwgd2FzIGRpc3Bvc2VkIGluIHRoZSBtZWFudGltZVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1hcmtlcnMgPSBkaWFnbm9zdGljc1xuICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHsgcmV0dXJuIGMuY29uY2F0KHApOyB9LCBbXSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBfdGhpcy5fY29udmVydERpYWdub3N0aWNzKHJlc291cmNlLCBkKTsgfSk7XG4gICAgICAgICAgICBtb25hY28uZWRpdG9yLnNldE1vZGVsTWFya2Vycyhtb25hY28uZWRpdG9yLmdldE1vZGVsKHJlc291cmNlKSwgX3RoaXMuX3NlbGVjdG9yLCBtYXJrZXJzKTtcbiAgICAgICAgfSkudGhlbih1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEaWFnbm9zdGNzQWRhcHRlci5wcm90b3R5cGUuX2NvbnZlcnREaWFnbm9zdGljcyA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgZGlhZykge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLl9vZmZzZXRUb1Bvc2l0aW9uKHJlc291cmNlLCBkaWFnLnN0YXJ0KSwgc3RhcnRMaW5lTnVtYmVyID0gX2EubGluZU51bWJlciwgc3RhcnRDb2x1bW4gPSBfYS5jb2x1bW47XG4gICAgICAgIHZhciBfYiA9IHRoaXMuX29mZnNldFRvUG9zaXRpb24ocmVzb3VyY2UsIGRpYWcuc3RhcnQgKyBkaWFnLmxlbmd0aCksIGVuZExpbmVOdW1iZXIgPSBfYi5saW5lTnVtYmVyLCBlbmRDb2x1bW4gPSBfYi5jb2x1bW47XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXZlcml0eTogbW9uYWNvLk1hcmtlclNldmVyaXR5LkVycm9yLFxuICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyOiBzdGFydExpbmVOdW1iZXIsXG4gICAgICAgICAgICBzdGFydENvbHVtbjogc3RhcnRDb2x1bW4sXG4gICAgICAgICAgICBlbmRMaW5lTnVtYmVyOiBlbmRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgZW5kQ29sdW1uOiBlbmRDb2x1bW4sXG4gICAgICAgICAgICBtZXNzYWdlOiBmbGF0dGVuRGlhZ25vc3RpY01lc3NhZ2VUZXh0KGRpYWcubWVzc2FnZVRleHQsICdcXG4nKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIERpYWdub3N0Y3NBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBEaWFnbm9zdGNzQWRhcHRlciB9O1xudmFyIFN1Z2dlc3RBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWdnZXN0QWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWdnZXN0QWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3VnZ2VzdEFkYXB0ZXIucHJvdG90eXBlLCBcInRyaWdnZXJDaGFyYWN0ZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gWycuJ107XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFN1Z2dlc3RBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlQ29tcGxldGlvbkl0ZW1zID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgX2NvbnRleHQsIHRva2VuKSB7XG4gICAgICAgIHZhciB3b3JkSW5mbyA9IG1vZGVsLmdldFdvcmRVbnRpbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdmFyIHdvcmRSYW5nZSA9IG5ldyBSYW5nZShwb3NpdGlvbi5saW5lTnVtYmVyLCB3b3JkSW5mby5zdGFydENvbHVtbiwgcG9zaXRpb24ubGluZU51bWJlciwgd29yZEluZm8uZW5kQ29sdW1uKTtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fcG9zaXRpb25Ub09mZnNldChyZXNvdXJjZSwgcG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZ2V0Q29tcGxldGlvbnNBdFBvc2l0aW9uKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdWdnZXN0aW9ucyA9IGluZm8uZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gd29yZFJhbmdlO1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5yZXBsYWNlbWVudFNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAxID0gbW9kZWwuZ2V0UG9zaXRpb25BdChlbnRyeS5yZXBsYWNlbWVudFNwYW4uc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcDIgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KGVudHJ5LnJlcGxhY2VtZW50U3Bhbi5zdGFydCArIGVudHJ5LnJlcGxhY2VtZW50U3Bhbi5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICByYW5nZSA9IG5ldyBSYW5nZShwMS5saW5lTnVtYmVyLCBwMS5jb2x1bW4sIHAyLmxpbmVOdW1iZXIsIHAyLmNvbHVtbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHVyaTogcmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZW50cnkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogZW50cnkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc29ydFRleHQ6IGVudHJ5LnNvcnRUZXh0LFxuICAgICAgICAgICAgICAgICAgICBraW5kOiBTdWdnZXN0QWRhcHRlci5jb252ZXJ0S2luZChlbnRyeS5raW5kKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHN1Z2dlc3Rpb25zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1Z2dlc3RBZGFwdGVyLnByb3RvdHlwZS5yZXNvbHZlQ29tcGxldGlvbkl0ZW0gPSBmdW5jdGlvbiAoX21vZGVsLCBfcG9zaXRpb24sIGl0ZW0sIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBteUl0ZW0gPSBpdGVtO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBteUl0ZW0udXJpO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBteUl0ZW0ucG9zaXRpb247XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5nZXRDb21wbGV0aW9uRW50cnlEZXRhaWxzKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCBwb3NpdGlvbiksIG15SXRlbS5sYWJlbCk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICAgICAgICAgIGlmICghZGV0YWlscykge1xuICAgICAgICAgICAgICAgIHJldHVybiBteUl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVyaTogcmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBkZXRhaWxzLm5hbWUsXG4gICAgICAgICAgICAgICAga2luZDogU3VnZ2VzdEFkYXB0ZXIuY29udmVydEtpbmQoZGV0YWlscy5raW5kKSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGRldGFpbHMuZGlzcGxheVBhcnRzKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkaXNwbGF5UGFydHNUb1N0cmluZyhkZXRhaWxzLmRvY3VtZW50YXRpb24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWdnZXN0QWRhcHRlci5jb252ZXJ0S2luZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSBLaW5kLnByaW1pdGl2ZVR5cGU6XG4gICAgICAgICAgICBjYXNlIEtpbmQua2V5d29yZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuS2V5d29yZDtcbiAgICAgICAgICAgIGNhc2UgS2luZC52YXJpYWJsZTpcbiAgICAgICAgICAgIGNhc2UgS2luZC5sb2NhbFZhcmlhYmxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5WYXJpYWJsZTtcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJWYXJpYWJsZTpcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJHZXRBY2Nlc3NvcjpcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJTZXRBY2Nlc3NvcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRmllbGQ7XG4gICAgICAgICAgICBjYXNlIEtpbmQuZnVuY3Rpb246XG4gICAgICAgICAgICBjYXNlIEtpbmQubWVtYmVyRnVuY3Rpb246XG4gICAgICAgICAgICBjYXNlIEtpbmQuY29uc3RydWN0U2lnbmF0dXJlOlxuICAgICAgICAgICAgY2FzZSBLaW5kLmNhbGxTaWduYXR1cmU6XG4gICAgICAgICAgICBjYXNlIEtpbmQuaW5kZXhTaWduYXR1cmU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkZ1bmN0aW9uO1xuICAgICAgICAgICAgY2FzZSBLaW5kLmVudW06XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkVudW07XG4gICAgICAgICAgICBjYXNlIEtpbmQubW9kdWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5Nb2R1bGU7XG4gICAgICAgICAgICBjYXNlIEtpbmQuY2xhc3M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkNsYXNzO1xuICAgICAgICAgICAgY2FzZSBLaW5kLmludGVyZmFjZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuSW50ZXJmYWNlO1xuICAgICAgICAgICAgY2FzZSBLaW5kLndhcm5pbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlByb3BlcnR5O1xuICAgIH07XG4gICAgcmV0dXJuIFN1Z2dlc3RBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBTdWdnZXN0QWRhcHRlciB9O1xudmFyIFNpZ25hdHVyZUhlbHBBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTaWduYXR1cmVIZWxwQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTaWduYXR1cmVIZWxwQWRhcHRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNpZ25hdHVyZUhlbHBUcmlnZ2VyQ2hhcmFjdGVycyA9IFsnKCcsICcsJ107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU2lnbmF0dXJlSGVscEFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVTaWduYXR1cmVIZWxwID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHsgcmV0dXJuIHdvcmtlci5nZXRTaWduYXR1cmVIZWxwSXRlbXMocmVzb3VyY2UudG9TdHJpbmcoKSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKSk7IH0pLnRoZW4oZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlU2lnbmF0dXJlOiBpbmZvLnNlbGVjdGVkSXRlbUluZGV4LFxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhcmFtZXRlcjogaW5mby5hcmd1bWVudEluZGV4LFxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZXM6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW5mby5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNpZ25hdHVyZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiBbXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlLmxhYmVsICs9IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGl0ZW0ucHJlZml4RGlzcGxheVBhcnRzKTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbiAocCwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBkaXNwbGF5UGFydHNUb1N0cmluZyhwLmRpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudGF0aW9uOiBkaXNwbGF5UGFydHNUb1N0cmluZyhwLmRvY3VtZW50YXRpb24pXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBsYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLnBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLmxhYmVsICs9IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGl0ZW0uc2VwYXJhdG9yRGlzcGxheVBhcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnN1ZmZpeERpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgcmV0LnNpZ25hdHVyZXMucHVzaChzaWduYXR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByZXQsXG4gICAgICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTaWduYXR1cmVIZWxwQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgU2lnbmF0dXJlSGVscEFkYXB0ZXIgfTtcbi8vIC0tLSBob3ZlciAtLS0tLS1cbnZhciBRdWlja0luZm9BZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRdWlja0luZm9BZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFF1aWNrSW5mb0FkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUXVpY2tJbmZvQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZUhvdmVyID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBfdGhpcy5fcG9zaXRpb25Ub09mZnNldChyZXNvdXJjZSwgcG9zaXRpb24pKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRvY3VtZW50YXRpb24gPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpbmZvLmRvY3VtZW50YXRpb24pO1xuICAgICAgICAgICAgdmFyIHRhZ3MgPSBpbmZvLnRhZ3MgPyBpbmZvLnRhZ3MubWFwKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBcIipAXCIgKyB0YWcubmFtZSArIFwiKlwiO1xuICAgICAgICAgICAgICAgIGlmICghdGFnLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwgKyAodGFnLnRleHQubWF0Y2goL1xcclxcbnxcXG4vZykgPyAnIFxcbicgKyB0YWcudGV4dCA6IFwiIC0gXCIgKyB0YWcudGV4dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKCcgIFxcblxcbicpIDogJyc7XG4gICAgICAgICAgICB2YXIgY29udGVudHMgPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpbmZvLmRpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJhbmdlOiBfdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHJlc291cmNlLCBpbmZvLnRleHRTcGFuKSxcbiAgICAgICAgICAgICAgICBjb250ZW50czogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYGBganNcXG4nICsgY29udGVudHMgKyAnXFxuYGBgXFxuJ1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZG9jdW1lbnRhdGlvbiArICh0YWdzID8gJ1xcblxcbicgKyB0YWdzIDogJycpXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBRdWlja0luZm9BZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBRdWlja0luZm9BZGFwdGVyIH07XG4vLyAtLS0gb2NjdXJyZW5jZXMgLS0tLS0tXG52YXIgT2NjdXJyZW5jZXNBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPY2N1cnJlbmNlc0FkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2NjdXJyZW5jZXNBZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9jY3VycmVuY2VzQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50SGlnaGxpZ2h0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldE9jY3VycmVuY2VzQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBfdGhpcy5fcG9zaXRpb25Ub09mZnNldChyZXNvdXJjZSwgcG9zaXRpb24pKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgaWYgKCFlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBfdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHJlc291cmNlLCBlbnRyeS50ZXh0U3BhbiksXG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGVudHJ5LmlzV3JpdGVBY2Nlc3MgPyBtb25hY28ubGFuZ3VhZ2VzLkRvY3VtZW50SGlnaGxpZ2h0S2luZC5Xcml0ZSA6IG1vbmFjby5sYW5ndWFnZXMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLlRleHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE9jY3VycmVuY2VzQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgT2NjdXJyZW5jZXNBZGFwdGVyIH07XG4vLyAtLS0gZGVmaW5pdGlvbiAtLS0tLS1cbnZhciBEZWZpbml0aW9uQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGVmaW5pdGlvbkFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGVmaW5pdGlvbkFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRGVmaW5pdGlvbkFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEZWZpbml0aW9uID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZ2V0RGVmaW5pdGlvbkF0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICghZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZW50cmllc18xID0gZW50cmllczsgX2kgPCBlbnRyaWVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gZW50cmllc18xW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgdXJpID0gVXJpLnBhcnNlKGVudHJ5LmZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobW9uYWNvLmVkaXRvci5nZXRNb2RlbCh1cmkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogdXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IF90aGlzLl90ZXh0U3BhblRvUmFuZ2UodXJpLCBlbnRyeS50ZXh0U3BhbilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVmaW5pdGlvbkFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IERlZmluaXRpb25BZGFwdGVyIH07XG4vLyAtLS0gcmVmZXJlbmNlcyAtLS0tLS1cbnZhciBSZWZlcmVuY2VBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZWZlcmVuY2VBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlZmVyZW5jZUFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUmVmZXJlbmNlQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZVJlZmVyZW5jZXMgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCBjb250ZXh0LCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5nZXRSZWZlcmVuY2VzQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBfdGhpcy5fcG9zaXRpb25Ub09mZnNldChyZXNvdXJjZSwgcG9zaXRpb24pKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgaWYgKCFlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBlbnRyaWVzXzIgPSBlbnRyaWVzOyBfaSA8IGVudHJpZXNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBlbnRyaWVzXzJbX2ldO1xuICAgICAgICAgICAgICAgIHZhciB1cmkgPSBVcmkucGFyc2UoZW50cnkuZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChtb25hY28uZWRpdG9yLmdldE1vZGVsKHVyaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiB1cmksXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZSh1cmksIGVudHJ5LnRleHRTcGFuKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSZWZlcmVuY2VBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBSZWZlcmVuY2VBZGFwdGVyIH07XG4vLyAtLS0gb3V0bGluZSAtLS0tLS1cbnZhciBPdXRsaW5lQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT3V0bGluZUFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT3V0bGluZUFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT3V0bGluZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudFN5bWJvbHMgPSBmdW5jdGlvbiAobW9kZWwsIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7IHJldHVybiB3b3JrZXIuZ2V0TmF2aWdhdGlvbkJhckl0ZW1zKHJlc291cmNlLnRvU3RyaW5nKCkpOyB9KS50aGVuKGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgaWYgKCFpdGVtcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb252ZXJ0ID0gZnVuY3Rpb24gKGJ1Y2tldCwgaXRlbSwgY29udGFpbmVyTGFiZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IChvdXRsaW5lVHlwZVRhYmxlW2l0ZW0ua2luZF0gfHwgbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IF90aGlzLl90ZXh0U3BhblRvUmFuZ2UocmVzb3VyY2UsIGl0ZW0uc3BhbnNbMF0pLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25SYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZShyZXNvdXJjZSwgaXRlbS5zcGFuc1swXSksXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOYW1lOiBjb250YWluZXJMYWJlbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRJdGVtcyAmJiBpdGVtLmNoaWxkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gaXRlbS5jaGlsZEl0ZW1zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydChidWNrZXQsIGNoaWxkLCByZXN1bHQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnVja2V0LnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBjb252ZXJ0KHJlc3VsdCwgaXRlbSk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gT3V0bGluZUFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IE91dGxpbmVBZGFwdGVyIH07XG52YXIgS2luZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLaW5kKCkge1xuICAgIH1cbiAgICBLaW5kLnVua25vd24gPSAnJztcbiAgICBLaW5kLmtleXdvcmQgPSAna2V5d29yZCc7XG4gICAgS2luZC5zY3JpcHQgPSAnc2NyaXB0JztcbiAgICBLaW5kLm1vZHVsZSA9ICdtb2R1bGUnO1xuICAgIEtpbmQuY2xhc3MgPSAnY2xhc3MnO1xuICAgIEtpbmQuaW50ZXJmYWNlID0gJ2ludGVyZmFjZSc7XG4gICAgS2luZC50eXBlID0gJ3R5cGUnO1xuICAgIEtpbmQuZW51bSA9ICdlbnVtJztcbiAgICBLaW5kLnZhcmlhYmxlID0gJ3Zhcic7XG4gICAgS2luZC5sb2NhbFZhcmlhYmxlID0gJ2xvY2FsIHZhcic7XG4gICAgS2luZC5mdW5jdGlvbiA9ICdmdW5jdGlvbic7XG4gICAgS2luZC5sb2NhbEZ1bmN0aW9uID0gJ2xvY2FsIGZ1bmN0aW9uJztcbiAgICBLaW5kLm1lbWJlckZ1bmN0aW9uID0gJ21ldGhvZCc7XG4gICAgS2luZC5tZW1iZXJHZXRBY2Nlc3NvciA9ICdnZXR0ZXInO1xuICAgIEtpbmQubWVtYmVyU2V0QWNjZXNzb3IgPSAnc2V0dGVyJztcbiAgICBLaW5kLm1lbWJlclZhcmlhYmxlID0gJ3Byb3BlcnR5JztcbiAgICBLaW5kLmNvbnN0cnVjdG9ySW1wbGVtZW50YXRpb24gPSAnY29uc3RydWN0b3InO1xuICAgIEtpbmQuY2FsbFNpZ25hdHVyZSA9ICdjYWxsJztcbiAgICBLaW5kLmluZGV4U2lnbmF0dXJlID0gJ2luZGV4JztcbiAgICBLaW5kLmNvbnN0cnVjdFNpZ25hdHVyZSA9ICdjb25zdHJ1Y3QnO1xuICAgIEtpbmQucGFyYW1ldGVyID0gJ3BhcmFtZXRlcic7XG4gICAgS2luZC50eXBlUGFyYW1ldGVyID0gJ3R5cGUgcGFyYW1ldGVyJztcbiAgICBLaW5kLnByaW1pdGl2ZVR5cGUgPSAncHJpbWl0aXZlIHR5cGUnO1xuICAgIEtpbmQubGFiZWwgPSAnbGFiZWwnO1xuICAgIEtpbmQuYWxpYXMgPSAnYWxpYXMnO1xuICAgIEtpbmQuY29uc3QgPSAnY29uc3QnO1xuICAgIEtpbmQubGV0ID0gJ2xldCc7XG4gICAgS2luZC53YXJuaW5nID0gJ3dhcm5pbmcnO1xuICAgIHJldHVybiBLaW5kO1xufSgpKTtcbmV4cG9ydCB7IEtpbmQgfTtcbnZhciBvdXRsaW5lVHlwZVRhYmxlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tb2R1bGVdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLk1vZHVsZTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5jbGFzc10gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuQ2xhc3M7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQuZW51bV0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuRW51bTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5pbnRlcmZhY2VdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLkludGVyZmFjZTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJGdW5jdGlvbl0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuTWV0aG9kO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLm1lbWJlclZhcmlhYmxlXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5Qcm9wZXJ0eTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJHZXRBY2Nlc3Nvcl0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuUHJvcGVydHk7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubWVtYmVyU2V0QWNjZXNzb3JdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLlByb3BlcnR5O1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLnZhcmlhYmxlXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5WYXJpYWJsZTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5jb25zdF0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGU7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubG9jYWxWYXJpYWJsZV0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGU7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQudmFyaWFibGVdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmZ1bmN0aW9uXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5GdW5jdGlvbjtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5sb2NhbEZ1bmN0aW9uXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5GdW5jdGlvbjtcbi8vIC0tLSBmb3JtYXR0aW5nIC0tLS1cbnZhciBGb3JtYXRIZWxwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvcm1hdEhlbHBlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb3JtYXRIZWxwZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRm9ybWF0SGVscGVyLl9jb252ZXJ0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBDb252ZXJ0VGFic1RvU3BhY2VzOiBvcHRpb25zLmluc2VydFNwYWNlcyxcbiAgICAgICAgICAgIFRhYlNpemU6IG9wdGlvbnMudGFiU2l6ZSxcbiAgICAgICAgICAgIEluZGVudFNpemU6IG9wdGlvbnMudGFiU2l6ZSxcbiAgICAgICAgICAgIEluZGVudFN0eWxlOiBJbmRlbnRTdHlsZS5TbWFydCxcbiAgICAgICAgICAgIE5ld0xpbmVDaGFyYWN0ZXI6ICdcXG4nLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlckNvbW1hRGVsaW1pdGVyOiB0cnVlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlclNlbWljb2xvbkluRm9yU3RhdGVtZW50czogdHJ1ZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQmVmb3JlQW5kQWZ0ZXJCaW5hcnlPcGVyYXRvcnM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyS2V5d29yZHNJbkNvbnRyb2xGbG93U3RhdGVtZW50czogdHJ1ZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJGdW5jdGlvbktleXdvcmRGb3JBbm9ueW1vdXNGdW5jdGlvbnM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyT3BlbmluZ0FuZEJlZm9yZUNsb3NpbmdOb25lbXB0eVBhcmVudGhlc2lzOiBmYWxzZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJPcGVuaW5nQW5kQmVmb3JlQ2xvc2luZ05vbmVtcHR5QnJhY2tldHM6IGZhbHNlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlck9wZW5pbmdBbmRCZWZvcmVDbG9zaW5nVGVtcGxhdGVTdHJpbmdCcmFjZXM6IGZhbHNlLFxuICAgICAgICAgICAgUGxhY2VPcGVuQnJhY2VPbk5ld0xpbmVGb3JDb250cm9sQmxvY2tzOiBmYWxzZSxcbiAgICAgICAgICAgIFBsYWNlT3BlbkJyYWNlT25OZXdMaW5lRm9yRnVuY3Rpb25zOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgRm9ybWF0SGVscGVyLnByb3RvdHlwZS5fY29udmVydFRleHRDaGFuZ2VzID0gZnVuY3Rpb24gKHVyaSwgY2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiBjaGFuZ2UubmV3VGV4dCxcbiAgICAgICAgICAgIHJhbmdlOiB0aGlzLl90ZXh0U3BhblRvUmFuZ2UodXJpLCBjaGFuZ2Uuc3BhbilcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtYXRIZWxwZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IEZvcm1hdEhlbHBlciB9O1xudmFyIEZvcm1hdEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvcm1hdEFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybWF0QWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBGb3JtYXRBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcmFuZ2UsIG9wdGlvbnMsIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldEZvcm1hdHRpbmdFZGl0c0ZvclJhbmdlKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCB7IGxpbmVOdW1iZXI6IHJhbmdlLnN0YXJ0TGluZU51bWJlciwgY29sdW1uOiByYW5nZS5zdGFydENvbHVtbiB9KSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHsgbGluZU51bWJlcjogcmFuZ2UuZW5kTGluZU51bWJlciwgY29sdW1uOiByYW5nZS5lbmRDb2x1bW4gfSksIEZvcm1hdEhlbHBlci5fY29udmVydE9wdGlvbnMob3B0aW9ucykpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChlZGl0cykge1xuICAgICAgICAgICAgaWYgKGVkaXRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRzLm1hcChmdW5jdGlvbiAoZWRpdCkgeyByZXR1cm4gX3RoaXMuX2NvbnZlcnRUZXh0Q2hhbmdlcyhyZXNvdXJjZSwgZWRpdCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtYXRBZGFwdGVyO1xufShGb3JtYXRIZWxwZXIpKTtcbmV4cG9ydCB7IEZvcm1hdEFkYXB0ZXIgfTtcbnZhciBGb3JtYXRPblR5cGVBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtYXRPblR5cGVBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvcm1hdE9uVHlwZUFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1hdE9uVHlwZUFkYXB0ZXIucHJvdG90eXBlLCBcImF1dG9Gb3JtYXRUcmlnZ2VyQ2hhcmFjdGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnOycsICd9JywgJ1xcbiddO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBGb3JtYXRPblR5cGVBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlT25UeXBlRm9ybWF0dGluZ0VkaXRzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY2gsIG9wdGlvbnMsIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldEZvcm1hdHRpbmdFZGl0c0FmdGVyS2V5c3Ryb2tlKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCBwb3NpdGlvbiksIGNoLCBGb3JtYXRIZWxwZXIuX2NvbnZlcnRPcHRpb25zKG9wdGlvbnMpKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZWRpdHMpIHtcbiAgICAgICAgICAgIGlmIChlZGl0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0cy5tYXAoZnVuY3Rpb24gKGVkaXQpIHsgcmV0dXJuIF90aGlzLl9jb252ZXJ0VGV4dENoYW5nZXMocmVzb3VyY2UsIGVkaXQpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9ybWF0T25UeXBlQWRhcHRlcjtcbn0oRm9ybWF0SGVscGVyKSk7XG5leHBvcnQgeyBGb3JtYXRPblR5cGVBZGFwdGVyIH07XG4vLyAtLS0gcmVuYW1lIC0tLS1cbnZhciBSZW5hbWVBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZW5hbWVBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlbmFtZUFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUmVuYW1lQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZVJlbmFtZUVkaXRzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgbmV3TmFtZSwgdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlLCBmaWxlTmFtZSwgb2Zmc2V0LCB3b3JrZXIsIHJlbmFtZUluZm8sIHJlbmFtZUxvY2F0aW9ucywgZmlsZU5hbWVUb1Jlc291cmNlVGV4dEVkaXRNYXAsIGVkaXRzLCBfaSwgcmVuYW1lTG9jYXRpb25zXzEsIHJlbmFtZUxvY2F0aW9uLCByZXNvdXJjZVRleHRFZGl0O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZSA9IHJlc291cmNlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldFJlbmFtZUluZm8oZmlsZU5hbWUsIG9mZnNldCwgeyBhbGxvd1JlbmFtZU9mSW1wb3J0UGF0aDogZmFsc2UgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5hbWVJbmZvID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbmFtZUluZm8uY2FuUmVuYW1lID09PSBmYWxzZSkgeyAvLyB1c2UgZXhwbGljaXQgY29tcGFyaXNvbiBzbyB0aGF0IHRoZSBkaXNjcmltaW5hdGVkIHVuaW9uIGdldHMgcmVzb2x2ZWQgcHJvcGVybHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0UmVhc29uOiByZW5hbWVJbmZvLmxvY2FsaXplZEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5hbWVJbmZvLmZpbGVUb1JlbmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVuYW1pbmcgZmlsZXMgaXMgbm90IHN1cHBvcnRlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZmluZFJlbmFtZUxvY2F0aW9ucyhmaWxlTmFtZSwgb2Zmc2V0LCAvKnN0cmluZ3MqLyBmYWxzZSwgLypjb21tZW50cyovIGZhbHNlLCAvKnByZWZpeEFuZFN1ZmZpeCovIGZhbHNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmFtZUxvY2F0aW9ucyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lVG9SZXNvdXJjZVRleHRFZGl0TWFwID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIHJlbmFtZUxvY2F0aW9uc18xID0gcmVuYW1lTG9jYXRpb25zOyBfaSA8IHJlbmFtZUxvY2F0aW9uc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmFtZUxvY2F0aW9uID0gcmVuYW1lTG9jYXRpb25zXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHJlbmFtZUxvY2F0aW9uLmZpbGVOYW1lIGluIGZpbGVOYW1lVG9SZXNvdXJjZVRleHRFZGl0TWFwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVRleHRFZGl0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IG1vbmFjby5VcmkucGFyc2UocmVuYW1lTG9jYXRpb24uZmlsZU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lVG9SZXNvdXJjZVRleHRFZGl0TWFwW3JlbmFtZUxvY2F0aW9uLmZpbGVOYW1lXSA9IHJlc291cmNlVGV4dEVkaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRzLnB1c2gocmVzb3VyY2VUZXh0RWRpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lVG9SZXNvdXJjZVRleHRFZGl0TWFwW3JlbmFtZUxvY2F0aW9uLmZpbGVOYW1lXS5lZGl0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRoaXMuX3RleHRTcGFuVG9SYW5nZShyZXNvdXJjZSwgcmVuYW1lTG9jYXRpb24udGV4dFNwYW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXdOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBlZGl0czogZWRpdHMgfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFJlbmFtZUFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IFJlbmFtZUFkYXB0ZXIgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgV29ya2VyTWFuYWdlciB9IGZyb20gJy4vd29ya2VyTWFuYWdlci5qcyc7XG5pbXBvcnQgKiBhcyBsYW5ndWFnZUZlYXR1cmVzIGZyb20gJy4vbGFuZ3VhZ2VGZWF0dXJlcy5qcyc7XG52YXIgamF2YVNjcmlwdFdvcmtlcjtcbnZhciB0eXBlU2NyaXB0V29ya2VyO1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwVHlwZVNjcmlwdChkZWZhdWx0cykge1xuICAgIHR5cGVTY3JpcHRXb3JrZXIgPSBzZXR1cE1vZGUoZGVmYXVsdHMsICd0eXBlc2NyaXB0Jyk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBKYXZhU2NyaXB0KGRlZmF1bHRzKSB7XG4gICAgamF2YVNjcmlwdFdvcmtlciA9IHNldHVwTW9kZShkZWZhdWx0cywgJ2phdmFzY3JpcHQnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRKYXZhU2NyaXB0V29ya2VyKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICghamF2YVNjcmlwdFdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcIkphdmFTY3JpcHQgbm90IHJlZ2lzdGVyZWQhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoamF2YVNjcmlwdFdvcmtlcik7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZVNjcmlwdFdvcmtlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIXR5cGVTY3JpcHRXb3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXCJUeXBlU2NyaXB0IG5vdCByZWdpc3RlcmVkIVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHR5cGVTY3JpcHRXb3JrZXIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0dXBNb2RlKGRlZmF1bHRzLCBtb2RlSWQpIHtcbiAgICB2YXIgY2xpZW50ID0gbmV3IFdvcmtlck1hbmFnZXIobW9kZUlkLCBkZWZhdWx0cyk7XG4gICAgdmFyIHdvcmtlciA9IGZ1bmN0aW9uIChmaXJzdCkge1xuICAgICAgICB2YXIgbW9yZSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbW9yZVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpZW50LmdldExhbmd1YWdlU2VydmljZVdvcmtlci5hcHBseShjbGllbnQsIFtmaXJzdF0uY29uY2F0KG1vcmUpKTtcbiAgICB9O1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuU3VnZ2VzdEFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlclNpZ25hdHVyZUhlbHBQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlNpZ25hdHVyZUhlbHBBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJIb3ZlclByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuUXVpY2tJbmZvQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRIaWdobGlnaHRQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLk9jY3VycmVuY2VzQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRGVmaW5pdGlvblByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRGVmaW5pdGlvbkFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlclJlZmVyZW5jZVByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuUmVmZXJlbmNlQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRTeW1ib2xQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLk91dGxpbmVBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkZvcm1hdEFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3Rlck9uVHlwZUZvcm1hdHRpbmdFZGl0UHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Gb3JtYXRPblR5cGVBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJSZW5hbWVQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlJlbmFtZUFkYXB0ZXIod29ya2VyKSk7XG4gICAgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRGlhZ25vc3Rjc0FkYXB0ZXIoZGVmYXVsdHMsIG1vZGVJZCwgd29ya2VyKTtcbiAgICByZXR1cm4gd29ya2VyO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIFdvcmtlck1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29ya2VyTWFuYWdlcihtb2RlSWQsIGRlZmF1bHRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX21vZGVJZCA9IG1vZGVJZDtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgdGhpcy5fd29ya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5faWRsZUNoZWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fY2hlY2tJZklkbGUoKTsgfSwgMzAgKiAxMDAwKTtcbiAgICAgICAgdGhpcy5fbGFzdFVzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIgPSB0aGlzLl9kZWZhdWx0cy5vbkRpZENoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fc3RvcFdvcmtlcigpOyB9KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRXh0cmFMaWJzVG9rZW4gPSAwO1xuICAgICAgICB0aGlzLl9leHRyYUxpYnNDaGFuZ2VMaXN0ZW5lciA9IHRoaXMuX2RlZmF1bHRzLm9uRGlkRXh0cmFMaWJzQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl91cGRhdGVFeHRyYUxpYnMoKTsgfSk7XG4gICAgfVxuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9zdG9wV29ya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fd29ya2VyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgIH07XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pZGxlQ2hlY2tJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2NvbmZpZ0NoYW5nZUxpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fZXh0cmFMaWJzQ2hhbmdlTGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9zdG9wV29ya2VyKCk7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5fdXBkYXRlRXh0cmFMaWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbXlUb2tlbiwgcHJveHk7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3dvcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG15VG9rZW4gPSArK3RoaXMuX3VwZGF0ZUV4dHJhTGlic1Rva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyLmdldFByb3h5KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl91cGRhdGVFeHRyYUxpYnNUb2tlbiAhPT0gbXlUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF2b2lkIG11bHRpcGxlIGNhbGxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHkudXBkYXRlRXh0cmFMaWJzKHRoaXMuX2RlZmF1bHRzLmdldEV4dHJhTGlicygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5fY2hlY2tJZklkbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heElkbGVUaW1lID0gdGhpcy5fZGVmYXVsdHMuZ2V0V29ya2VyTWF4SWRsZVRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWVQYXNzZWRTaW5jZUxhc3RVc2VkID0gRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RVc2VkVGltZTtcbiAgICAgICAgaWYgKG1heElkbGVUaW1lID4gMCAmJiB0aW1lUGFzc2VkU2luY2VMYXN0VXNlZCA+IG1heElkbGVUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wV29ya2VyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9nZXRDbGllbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2xhc3RVc2VkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICghdGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBtb25hY28uZWRpdG9yLmNyZWF0ZVdlYldvcmtlcih7XG4gICAgICAgICAgICAgICAgLy8gbW9kdWxlIHRoYXQgZXhwb3J0cyB0aGUgY3JlYXRlKCkgbWV0aG9kIGFuZCByZXR1cm5zIGEgYFR5cGVTY3JpcHRXb3JrZXJgIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6ICd2cy9sYW5ndWFnZS90eXBlc2NyaXB0L3RzV29ya2VyJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5fbW9kZUlkLFxuICAgICAgICAgICAgICAgIC8vIHBhc3NlZCBpbiB0byB0aGUgY3JlYXRlKCkgbWV0aG9kXG4gICAgICAgICAgICAgICAgY3JlYXRlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IHRoaXMuX2RlZmF1bHRzLmdldENvbXBpbGVyT3B0aW9ucygpLFxuICAgICAgICAgICAgICAgICAgICBleHRyYUxpYnM6IHRoaXMuX2RlZmF1bHRzLmdldEV4dHJhTGlicygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuX3dvcmtlci5nZXRQcm94eSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRzLmdldEVhZ2VyTW9kZWxTeW5jKCkpIHtcbiAgICAgICAgICAgICAgICBwID0gcC50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl93b3JrZXIud2l0aFN5bmNlZFJlc291cmNlcyhtb25hY28uZWRpdG9yLmdldE1vZGVscygpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtb2RlbCkgeyByZXR1cm4gbW9kZWwuZ2V0TW9kZUlkKCkgPT09IF90aGlzLl9tb2RlSWQ7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtb2RlbCkgeyByZXR1cm4gbW9kZWwudXJpOyB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5nZXRMYW5ndWFnZVNlcnZpY2VXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHJlc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfY2xpZW50O1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Q2xpZW50KCkudGhlbihmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgICAgICBfY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3dvcmtlci53aXRoU3luY2VkUmVzb3VyY2VzKHJlc291cmNlcyk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF9jbGllbnQ7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFdvcmtlck1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgV29ya2VyTWFuYWdlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==