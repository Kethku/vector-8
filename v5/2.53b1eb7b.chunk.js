(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main.js ***!
  \**************************************************************************************************/
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

/***/ "./node_modules/monaco-editor/esm/vs/language/css/cssMode.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/css/cssMode.js ***!
  \*******************************************************************/
/*! exports provided: setupMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupMode", function() { return setupMode; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "./node_modules/monaco-editor/esm/vs/language/css/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "./node_modules/monaco-editor/esm/vs/language/css/languageFeatures.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



function setupMode(defaults) {
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](defaults);
    var worker = function (first) {
        var more = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            more[_i - 1] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, [first].concat(more));
    };
    var languageId = defaults.languageId;
    monaco.languages.registerCompletionItemProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["CompletionAdapter"](worker));
    monaco.languages.registerHoverProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["HoverAdapter"](worker));
    monaco.languages.registerDocumentHighlightProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentHighlightAdapter"](worker));
    monaco.languages.registerDefinitionProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DefinitionAdapter"](worker));
    monaco.languages.registerReferenceProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["ReferenceAdapter"](worker));
    monaco.languages.registerDocumentSymbolProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentSymbolAdapter"](worker));
    monaco.languages.registerRenameProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["RenameAdapter"](worker));
    monaco.languages.registerColorProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentColorAdapter"](worker));
    monaco.languages.registerFoldingRangeProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FoldingRangeAdapter"](worker));
    new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnosticsAdapter"](languageId, worker, defaults);
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/css/languageFeatures.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/css/languageFeatures.js ***!
  \****************************************************************************/
/*! exports provided: DiagnosticsAdapter, CompletionAdapter, HoverAdapter, DocumentHighlightAdapter, DefinitionAdapter, ReferenceAdapter, RenameAdapter, DocumentSymbolAdapter, DocumentColorAdapter, FoldingRangeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticsAdapter", function() { return DiagnosticsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionAdapter", function() { return CompletionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverAdapter", function() { return HoverAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightAdapter", function() { return DocumentHighlightAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionAdapter", function() { return DefinitionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceAdapter", function() { return ReferenceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameAdapter", function() { return RenameAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbolAdapter", function() { return DocumentSymbolAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentColorAdapter", function() { return DocumentColorAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeAdapter", function() { return FoldingRangeAdapter; });
/* harmony import */ var _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deps/vscode-languageserver-types/main.js */ "./node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main.js");
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
        this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));
        this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        defaults.onDidChange(function (_) {
            monaco.editor.getModels().forEach(function (model) {
                if (model.getModeId() === _this._languageId) {
                    onModelRemoved(model);
                    onModelAdd(model);
                }
            });
        });
        this._disposables.push({
            dispose: function () {
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
    DiagnosticsAdapter.prototype._doValidate = function (resource, languageId) {
        this._worker(resource).then(function (worker) {
            return worker.doValidation(resource.toString());
        }).then(function (diagnostics) {
            var markers = diagnostics.map(function (d) { return toDiagnostics(resource, d); });
            var model = monaco.editor.getModel(resource);
            if (model.getModeId() === languageId) {
                monaco.editor.setModelMarkers(model, languageId, markers);
            }
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
    return new monaco.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
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

// --- document highlights ------
function toDocumentHighlightKind(kind) {
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DocumentHighlightKind"].Read: return monaco.languages.DocumentHighlightKind.Read;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DocumentHighlightKind"].Write: return monaco.languages.DocumentHighlightKind.Write;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DocumentHighlightKind"].Text: return monaco.languages.DocumentHighlightKind.Text;
    }
    return monaco.languages.DocumentHighlightKind.Text;
}
var DocumentHighlightAdapter = /** @class */ (function () {
    function DocumentHighlightAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentHighlightAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.findDocumentHighlights(resource.toString(), fromPosition(position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            return entries.map(function (entry) {
                return {
                    range: toRange(entry.range),
                    kind: toDocumentHighlightKind(entry.kind)
                };
            });
        });
    };
    return DocumentHighlightAdapter;
}());

// --- definition ------
function toLocation(location) {
    return {
        uri: Uri.parse(location.uri),
        range: toRange(location.range)
    };
}
var DefinitionAdapter = /** @class */ (function () {
    function DefinitionAdapter(_worker) {
        this._worker = _worker;
    }
    DefinitionAdapter.prototype.provideDefinition = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.findDefinition(resource.toString(), fromPosition(position));
        }).then(function (definition) {
            if (!definition) {
                return;
            }
            return [toLocation(definition)];
        });
    };
    return DefinitionAdapter;
}());

// --- references ------
var ReferenceAdapter = /** @class */ (function () {
    function ReferenceAdapter(_worker) {
        this._worker = _worker;
    }
    ReferenceAdapter.prototype.provideReferences = function (model, position, context, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.findReferences(resource.toString(), fromPosition(position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            return entries.map(toLocation);
        });
    };
    return ReferenceAdapter;
}());

// --- rename ------
function toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) {
        return void 0;
    }
    var resourceEdits = [];
    for (var uri in edit.changes) {
        var edits = [];
        for (var _i = 0, _a = edit.changes[uri]; _i < _a.length; _i++) {
            var e = _a[_i];
            edits.push({
                range: toRange(e.range),
                text: e.newText
            });
        }
        resourceEdits.push({ resource: Uri.parse(uri), edits: edits });
    }
    return {
        edits: resourceEdits
    };
}
var RenameAdapter = /** @class */ (function () {
    function RenameAdapter(_worker) {
        this._worker = _worker;
    }
    RenameAdapter.prototype.provideRenameEdits = function (model, position, newName, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.doRename(resource.toString(), fromPosition(position), newName);
        }).then(function (edit) {
            return toWorkspaceEdit(edit);
        });
    };
    return RenameAdapter;
}());

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
                tags: [],
                range: toRange(item.location.range),
                selectionRange: toRange(item.location.range)
            }); });
        });
    };
    return DocumentSymbolAdapter;
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

/***/ "./node_modules/monaco-editor/esm/vs/language/css/workerManager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/css/workerManager.js ***!
  \*************************************************************************/
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
                // module that exports the create() method and returns a `CSSWorker` instance
                moduleId: 'vs/language/css/cssWorker',
                label: this._defaults.languageId,
                // passed in to the create() method
                createData: {
                    languageSettings: this._defaults.diagnosticsOptions,
                    languageId: this._defaults.languageId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvY3NzL19kZXBzL3ZzY29kZS1sYW5ndWFnZXNlcnZlci10eXBlcy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS9jc3MvY3NzTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvY3NzL2xhbmd1YWdlRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2xhbmd1YWdlL2Nzcy93b3JrZXJNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9FQUFvRTtBQUNyRTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdEQUFnRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQkFBMEI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUyxpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7QUFDdEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUMxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUMwQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3REFBd0Q7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwRUFBMEU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUMxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0RBQWdEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLENBQUMsd0NBQXdDO0FBQ2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsd0JBQXdCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7QUFDOUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQTZDLElBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0Q7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9EQUFvRDtBQUNyRDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzREFBc0Q7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN5QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDekM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0NBQXdDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUN4QztBQUNQO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4Q0FBOEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7QUFDOUI7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdEQUF3RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQWdCOzs7Ozs7Ozs7Ozs7O0FDMThDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ3NDO0FBQ087QUFDbkQ7QUFDUCxxQkFBcUIsK0RBQWE7QUFDbEM7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxzRUFBa0M7QUFDdEcsMkRBQTJELGlFQUE2QjtBQUN4Rix1RUFBdUUsNkVBQXlDO0FBQ2hILGdFQUFnRSxzRUFBa0M7QUFDbEcsK0RBQStELHFFQUFpQztBQUNoRyxvRUFBb0UsMEVBQXNDO0FBQzFHLDREQUE0RCxrRUFBOEI7QUFDMUYsMkRBQTJELHlFQUFxQztBQUNoRyxrRUFBa0Usd0VBQW9DO0FBQ3RHLFFBQVEsdUVBQW1DO0FBQzNDOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDcUQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDZDQUE2QyxFQUFFO0FBQ2hHLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QseUJBQXlCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3REFBd0QsbUNBQW1DLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDNkI7QUFDOUI7QUFDQTtBQUNBLGFBQWEsNEZBQXFCO0FBQ2xDLGFBQWEsNEZBQXFCO0FBQ2xDLGFBQWEsNEZBQXFCO0FBQ2xDLGFBQWEsNEZBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVMsb0VBQW9FLFFBQVEsZ0VBQWdFO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEMsYUFBYSw0RkFBcUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBGQUFtQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUN1QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtGQUF3QjtBQUNyQyxhQUFhLCtGQUF3QjtBQUNyQyxhQUFhLCtGQUF3QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ21DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUM0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDMkI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIseUNBQXlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ3dCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUIsYUFBYSxvRkFBYTtBQUMxQixhQUFhLG9GQUFhO0FBQzFCLGFBQWEsb0ZBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHdEQUF3RCxFQUFFO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRSxFQUFFO0FBQ2pCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsdURBQXVELEVBQUU7QUFDdkg7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxhQUFhLEVBQUUsRUFBRTtBQUNqQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsOERBQThELDZGQUE2RixFQUFFO0FBQzdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQytCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxrRUFBa0UsRUFBRTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQzhCO0FBQy9CO0FBQ0E7QUFDQSxhQUFhLDBGQUFtQjtBQUNoQyxhQUFhLDBGQUFtQjtBQUNoQyxhQUFhLDBGQUFtQjtBQUNoQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1ZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYix1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCw2QkFBNkIsRUFBRTtBQUMxRjtBQUNBLDZFQUE2RSw0QkFBNEIsRUFBRTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMscUJBQXFCLGdCQUFnQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQSxDQUFDO0FBQ3dCIiwiZmlsZSI6IjIuNTNiMWViN2IuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbid1c2Ugc3RyaWN0JztcclxuLyoqXHJcbiAqIFRoZSBQb3NpdGlvbiBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW1Bvc2l0aW9uXSgjUG9zaXRpb24pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBQb3NpdGlvbjtcclxuKGZ1bmN0aW9uIChQb3NpdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFBvc2l0aW9uIGxpdGVyYWwgZnJvbSB0aGUgZ2l2ZW4gbGluZSBhbmQgY2hhcmFjdGVyLlxyXG4gICAgICogQHBhcmFtIGxpbmUgVGhlIHBvc2l0aW9uJ3MgbGluZS5cclxuICAgICAqIEBwYXJhbSBjaGFyYWN0ZXIgVGhlIHBvc2l0aW9uJ3MgY2hhcmFjdGVyLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUobGluZSwgY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbGluZTogbGluZSwgY2hhcmFjdGVyOiBjaGFyYWN0ZXIgfTtcclxuICAgIH1cclxuICAgIFBvc2l0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVybmFsIGNvbmZvcm1zIHRvIHRoZSBbUG9zaXRpb25dKCNQb3NpdGlvbikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMub2JqZWN0TGl0ZXJhbChjYW5kaWRhdGUpICYmIElzLm51bWJlcihjYW5kaWRhdGUubGluZSkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS5jaGFyYWN0ZXIpO1xyXG4gICAgfVxyXG4gICAgUG9zaXRpb24uaXMgPSBpcztcclxufSkoUG9zaXRpb24gfHwgKFBvc2l0aW9uID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBSYW5nZSBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW1JhbmdlXSgjUmFuZ2UpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBSYW5nZTtcclxuKGZ1bmN0aW9uIChSYW5nZSkge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKG9uZSwgdHdvLCB0aHJlZSwgZm91cikge1xyXG4gICAgICAgIGlmIChJcy5udW1iZXIob25lKSAmJiBJcy5udW1iZXIodHdvKSAmJiBJcy5udW1iZXIodGhyZWUpICYmIElzLm51bWJlcihmb3VyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdGFydDogUG9zaXRpb24uY3JlYXRlKG9uZSwgdHdvKSwgZW5kOiBQb3NpdGlvbi5jcmVhdGUodGhyZWUsIGZvdXIpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKFBvc2l0aW9uLmlzKG9uZSkgJiYgUG9zaXRpb24uaXModHdvKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdGFydDogb25lLCBlbmQ6IHR3byB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmFuZ2UjY3JlYXRlIGNhbGxlZCB3aXRoIGludmFsaWQgYXJndW1lbnRzW1wiICsgb25lICsgXCIsIFwiICsgdHdvICsgXCIsIFwiICsgdGhyZWUgKyBcIiwgXCIgKyBmb3VyICsgXCJdXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJhbmdlLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtSYW5nZV0oI1JhbmdlKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5vYmplY3RMaXRlcmFsKGNhbmRpZGF0ZSkgJiYgUG9zaXRpb24uaXMoY2FuZGlkYXRlLnN0YXJ0KSAmJiBQb3NpdGlvbi5pcyhjYW5kaWRhdGUuZW5kKTtcclxuICAgIH1cclxuICAgIFJhbmdlLmlzID0gaXM7XHJcbn0pKFJhbmdlIHx8IChSYW5nZSA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgTG9jYXRpb24gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtMb2NhdGlvbl0oI0xvY2F0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgTG9jYXRpb247XHJcbihmdW5jdGlvbiAoTG9jYXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIExvY2F0aW9uIGxpdGVyYWwuXHJcbiAgICAgKiBAcGFyYW0gdXJpIFRoZSBsb2NhdGlvbidzIHVyaS5cclxuICAgICAqIEBwYXJhbSByYW5nZSBUaGUgbG9jYXRpb24ncyByYW5nZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHVyaSwgcmFuZ2UpIHtcclxuICAgICAgICByZXR1cm4geyB1cmk6IHVyaSwgcmFuZ2U6IHJhbmdlIH07XHJcbiAgICB9XHJcbiAgICBMb2NhdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbTG9jYXRpb25dKCNMb2NhdGlvbikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIFJhbmdlLmlzKGNhbmRpZGF0ZS5yYW5nZSkgJiYgKElzLnN0cmluZyhjYW5kaWRhdGUudXJpKSB8fCBJcy51bmRlZmluZWQoY2FuZGlkYXRlLnVyaSkpO1xyXG4gICAgfVxyXG4gICAgTG9jYXRpb24uaXMgPSBpcztcclxufSkoTG9jYXRpb24gfHwgKExvY2F0aW9uID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBMb2NhdGlvbkxpbmsgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtMb2NhdGlvbkxpbmtdKCNMb2NhdGlvbkxpbmspIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBMb2NhdGlvbkxpbms7XHJcbihmdW5jdGlvbiAoTG9jYXRpb25MaW5rKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBMb2NhdGlvbkxpbmsgbGl0ZXJhbC5cclxuICAgICAqIEBwYXJhbSB0YXJnZXRVcmkgVGhlIGRlZmluaXRpb24ncyB1cmkuXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0UmFuZ2UgVGhlIGZ1bGwgcmFuZ2Ugb2YgdGhlIGRlZmluaXRpb24uXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0U2VsZWN0aW9uUmFuZ2UgVGhlIHNwYW4gb2YgdGhlIHN5bWJvbCBkZWZpbml0aW9uIGF0IHRoZSB0YXJnZXQuXHJcbiAgICAgKiBAcGFyYW0gb3JpZ2luU2VsZWN0aW9uUmFuZ2UgVGhlIHNwYW4gb2YgdGhlIHN5bWJvbCBiZWluZyBkZWZpbmVkIGluIHRoZSBvcmlnaW5hdGluZyBzb3VyY2UgZmlsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHRhcmdldFVyaSwgdGFyZ2V0UmFuZ2UsIHRhcmdldFNlbGVjdGlvblJhbmdlLCBvcmlnaW5TZWxlY3Rpb25SYW5nZSkge1xyXG4gICAgICAgIHJldHVybiB7IHRhcmdldFVyaTogdGFyZ2V0VXJpLCB0YXJnZXRSYW5nZTogdGFyZ2V0UmFuZ2UsIHRhcmdldFNlbGVjdGlvblJhbmdlOiB0YXJnZXRTZWxlY3Rpb25SYW5nZSwgb3JpZ2luU2VsZWN0aW9uUmFuZ2U6IG9yaWdpblNlbGVjdGlvblJhbmdlIH07XHJcbiAgICB9XHJcbiAgICBMb2NhdGlvbkxpbmsuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0xvY2F0aW9uTGlua10oI0xvY2F0aW9uTGluaykgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIFJhbmdlLmlzKGNhbmRpZGF0ZS50YXJnZXRSYW5nZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS50YXJnZXRVcmkpXHJcbiAgICAgICAgICAgICYmIChSYW5nZS5pcyhjYW5kaWRhdGUudGFyZ2V0U2VsZWN0aW9uUmFuZ2UpIHx8IElzLnVuZGVmaW5lZChjYW5kaWRhdGUudGFyZ2V0U2VsZWN0aW9uUmFuZ2UpKVxyXG4gICAgICAgICAgICAmJiAoUmFuZ2UuaXMoY2FuZGlkYXRlLm9yaWdpblNlbGVjdGlvblJhbmdlKSB8fCBJcy51bmRlZmluZWQoY2FuZGlkYXRlLm9yaWdpblNlbGVjdGlvblJhbmdlKSk7XHJcbiAgICB9XHJcbiAgICBMb2NhdGlvbkxpbmsuaXMgPSBpcztcclxufSkoTG9jYXRpb25MaW5rIHx8IChMb2NhdGlvbkxpbmsgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvbG9yIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbQ29sb3JdKCNDb2xvcikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvbG9yO1xyXG4oZnVuY3Rpb24gKENvbG9yKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgQ29sb3IgbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkOiByZWQsXHJcbiAgICAgICAgICAgIGdyZWVuOiBncmVlbixcclxuICAgICAgICAgICAgYmx1ZTogYmx1ZSxcclxuICAgICAgICAgICAgYWxwaGE6IGFscGhhLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBDb2xvci5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbQ29sb3JdKCNDb2xvcikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMubnVtYmVyKGNhbmRpZGF0ZS5yZWQpXHJcbiAgICAgICAgICAgICYmIElzLm51bWJlcihjYW5kaWRhdGUuZ3JlZW4pXHJcbiAgICAgICAgICAgICYmIElzLm51bWJlcihjYW5kaWRhdGUuYmx1ZSlcclxuICAgICAgICAgICAgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS5hbHBoYSk7XHJcbiAgICB9XHJcbiAgICBDb2xvci5pcyA9IGlzO1xyXG59KShDb2xvciB8fCAoQ29sb3IgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvbG9ySW5mb3JtYXRpb24gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtDb2xvckluZm9ybWF0aW9uXSgjQ29sb3JJbmZvcm1hdGlvbikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvbG9ySW5mb3JtYXRpb247XHJcbihmdW5jdGlvbiAoQ29sb3JJbmZvcm1hdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IENvbG9ySW5mb3JtYXRpb24gbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHJhbmdlLCBjb2xvcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBDb2xvckluZm9ybWF0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtDb2xvckluZm9ybWF0aW9uXSgjQ29sb3JJbmZvcm1hdGlvbikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKSAmJiBDb2xvci5pcyhjYW5kaWRhdGUuY29sb3IpO1xyXG4gICAgfVxyXG4gICAgQ29sb3JJbmZvcm1hdGlvbi5pcyA9IGlzO1xyXG59KShDb2xvckluZm9ybWF0aW9uIHx8IChDb2xvckluZm9ybWF0aW9uID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb2xvciBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0NvbG9yUHJlc2VudGF0aW9uXSgjQ29sb3JQcmVzZW50YXRpb24pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb2xvclByZXNlbnRhdGlvbjtcclxuKGZ1bmN0aW9uIChDb2xvclByZXNlbnRhdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IENvbG9ySW5mb3JtYXRpb24gbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGxhYmVsLCB0ZXh0RWRpdCwgYWRkaXRpb25hbFRleHRFZGl0cykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcclxuICAgICAgICAgICAgdGV4dEVkaXQ6IHRleHRFZGl0LFxyXG4gICAgICAgICAgICBhZGRpdGlvbmFsVGV4dEVkaXRzOiBhZGRpdGlvbmFsVGV4dEVkaXRzLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBDb2xvclByZXNlbnRhdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbQ29sb3JJbmZvcm1hdGlvbl0oI0NvbG9ySW5mb3JtYXRpb24pIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLnN0cmluZyhjYW5kaWRhdGUubGFiZWwpXHJcbiAgICAgICAgICAgICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLnRleHRFZGl0KSB8fCBUZXh0RWRpdC5pcyhjYW5kaWRhdGUpKVxyXG4gICAgICAgICAgICAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5hZGRpdGlvbmFsVGV4dEVkaXRzKSB8fCBJcy50eXBlZEFycmF5KGNhbmRpZGF0ZS5hZGRpdGlvbmFsVGV4dEVkaXRzLCBUZXh0RWRpdC5pcykpO1xyXG4gICAgfVxyXG4gICAgQ29sb3JQcmVzZW50YXRpb24uaXMgPSBpcztcclxufSkoQ29sb3JQcmVzZW50YXRpb24gfHwgKENvbG9yUHJlc2VudGF0aW9uID0ge30pKTtcclxuLyoqXHJcbiAqIEVudW0gb2Yga25vd24gcmFuZ2Uga2luZHNcclxuICovXHJcbmV4cG9ydCB2YXIgRm9sZGluZ1JhbmdlS2luZDtcclxuKGZ1bmN0aW9uIChGb2xkaW5nUmFuZ2VLaW5kKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZvbGRpbmcgcmFuZ2UgZm9yIGEgY29tbWVudFxyXG4gICAgICovXHJcbiAgICBGb2xkaW5nUmFuZ2VLaW5kW1wiQ29tbWVudFwiXSA9IFwiY29tbWVudFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb2xkaW5nIHJhbmdlIGZvciBhIGltcG9ydHMgb3IgaW5jbHVkZXNcclxuICAgICAqL1xyXG4gICAgRm9sZGluZ1JhbmdlS2luZFtcIkltcG9ydHNcIl0gPSBcImltcG9ydHNcIjtcclxuICAgIC8qKlxyXG4gICAgICogRm9sZGluZyByYW5nZSBmb3IgYSByZWdpb24gKGUuZy4gYCNyZWdpb25gKVxyXG4gICAgICovXHJcbiAgICBGb2xkaW5nUmFuZ2VLaW5kW1wiUmVnaW9uXCJdID0gXCJyZWdpb25cIjtcclxufSkoRm9sZGluZ1JhbmdlS2luZCB8fCAoRm9sZGluZ1JhbmdlS2luZCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgZm9sZGluZyByYW5nZSBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0ZvbGRpbmdSYW5nZV0oI0ZvbGRpbmdSYW5nZSkgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIEZvbGRpbmdSYW5nZTtcclxuKGZ1bmN0aW9uIChGb2xkaW5nUmFuZ2UpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBGb2xkaW5nUmFuZ2UgbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHN0YXJ0TGluZSwgZW5kTGluZSwgc3RhcnRDaGFyYWN0ZXIsIGVuZENoYXJhY3Rlciwga2luZCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0TGluZTogc3RhcnRMaW5lLFxyXG4gICAgICAgICAgICBlbmRMaW5lOiBlbmRMaW5lXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChzdGFydENoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0Q2hhcmFjdGVyID0gc3RhcnRDaGFyYWN0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKGVuZENoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmVuZENoYXJhY3RlciA9IGVuZENoYXJhY3RlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoa2luZCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmtpbmQgPSBraW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgRm9sZGluZ1JhbmdlLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtGb2xkaW5nUmFuZ2VdKCNGb2xkaW5nUmFuZ2UpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLm51bWJlcihjYW5kaWRhdGUuc3RhcnRMaW5lKSAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLnN0YXJ0TGluZSlcclxuICAgICAgICAgICAgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUuc3RhcnRDaGFyYWN0ZXIpIHx8IElzLm51bWJlcihjYW5kaWRhdGUuc3RhcnRDaGFyYWN0ZXIpKVxyXG4gICAgICAgICAgICAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5lbmRDaGFyYWN0ZXIpIHx8IElzLm51bWJlcihjYW5kaWRhdGUuZW5kQ2hhcmFjdGVyKSlcclxuICAgICAgICAgICAgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUua2luZCkgfHwgSXMuc3RyaW5nKGNhbmRpZGF0ZS5raW5kKSk7XHJcbiAgICB9XHJcbiAgICBGb2xkaW5nUmFuZ2UuaXMgPSBpcztcclxufSkoRm9sZGluZ1JhbmdlIHx8IChGb2xkaW5nUmFuZ2UgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uXSgjRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb247XHJcbihmdW5jdGlvbiAoRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24gbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGxvY2F0aW9uLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0RpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb25dKCNEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgTG9jYXRpb24uaXMoY2FuZGlkYXRlLmxvY2F0aW9uKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbi5pcyA9IGlzO1xyXG59KShEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uIHx8IChEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBkaWFnbm9zdGljJ3Mgc2V2ZXJpdHkuXHJcbiAqL1xyXG5leHBvcnQgdmFyIERpYWdub3N0aWNTZXZlcml0eTtcclxuKGZ1bmN0aW9uIChEaWFnbm9zdGljU2V2ZXJpdHkpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyBhbiBlcnJvci5cclxuICAgICAqL1xyXG4gICAgRGlhZ25vc3RpY1NldmVyaXR5LkVycm9yID0gMTtcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyBhIHdhcm5pbmcuXHJcbiAgICAgKi9cclxuICAgIERpYWdub3N0aWNTZXZlcml0eS5XYXJuaW5nID0gMjtcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyBhbiBpbmZvcm1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgRGlhZ25vc3RpY1NldmVyaXR5LkluZm9ybWF0aW9uID0gMztcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyBhIGhpbnQuXHJcbiAgICAgKi9cclxuICAgIERpYWdub3N0aWNTZXZlcml0eS5IaW50ID0gNDtcclxufSkoRGlhZ25vc3RpY1NldmVyaXR5IHx8IChEaWFnbm9zdGljU2V2ZXJpdHkgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIERpYWdub3N0aWMgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtEaWFnbm9zdGljXSgjRGlhZ25vc3RpYykgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIERpYWdub3N0aWM7XHJcbihmdW5jdGlvbiAoRGlhZ25vc3RpYykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IERpYWdub3N0aWMgbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHJhbmdlLCBtZXNzYWdlLCBzZXZlcml0eSwgY29kZSwgc291cmNlLCByZWxhdGVkSW5mb3JtYXRpb24pIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0geyByYW5nZTogcmFuZ2UsIG1lc3NhZ2U6IG1lc3NhZ2UgfTtcclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChzZXZlcml0eSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldmVyaXR5ID0gc2V2ZXJpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKGNvZGUpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5jb2RlID0gY29kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoc291cmNlKSkge1xyXG4gICAgICAgICAgICByZXN1bHQuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChyZWxhdGVkSW5mb3JtYXRpb24pKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5yZWxhdGVkSW5mb3JtYXRpb24gPSByZWxhdGVkSW5mb3JtYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBEaWFnbm9zdGljLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtEaWFnbm9zdGljXSgjRGlhZ25vc3RpYykgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpXHJcbiAgICAgICAgICAgICYmIFJhbmdlLmlzKGNhbmRpZGF0ZS5yYW5nZSlcclxuICAgICAgICAgICAgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAmJiAoSXMubnVtYmVyKGNhbmRpZGF0ZS5zZXZlcml0eSkgfHwgSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5zZXZlcml0eSkpXHJcbiAgICAgICAgICAgICYmIChJcy5udW1iZXIoY2FuZGlkYXRlLmNvZGUpIHx8IElzLnN0cmluZyhjYW5kaWRhdGUuY29kZSkgfHwgSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5jb2RlKSlcclxuICAgICAgICAgICAgJiYgKElzLnN0cmluZyhjYW5kaWRhdGUuc291cmNlKSB8fCBJcy51bmRlZmluZWQoY2FuZGlkYXRlLnNvdXJjZSkpXHJcbiAgICAgICAgICAgICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLnJlbGF0ZWRJbmZvcm1hdGlvbikgfHwgSXMudHlwZWRBcnJheShjYW5kaWRhdGUucmVsYXRlZEluZm9ybWF0aW9uLCBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uLmlzKSk7XHJcbiAgICB9XHJcbiAgICBEaWFnbm9zdGljLmlzID0gaXM7XHJcbn0pKERpYWdub3N0aWMgfHwgKERpYWdub3N0aWMgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvbW1hbmQgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtDb21tYW5kXSgjQ29tbWFuZCkgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvbW1hbmQ7XHJcbihmdW5jdGlvbiAoQ29tbWFuZCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IENvbW1hbmQgbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHRpdGxlLCBjb21tYW5kKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0geyB0aXRsZTogdGl0bGUsIGNvbW1hbmQ6IGNvbW1hbmQgfTtcclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChhcmdzKSAmJiBhcmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LmFyZ3VtZW50cyA9IGFyZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBDb21tYW5kLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtDb21tYW5kXSgjQ29tbWFuZCkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudGl0bGUpICYmIElzLnN0cmluZyhjYW5kaWRhdGUuY29tbWFuZCk7XHJcbiAgICB9XHJcbiAgICBDb21tYW5kLmlzID0gaXM7XHJcbn0pKENvbW1hbmQgfHwgKENvbW1hbmQgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIFRleHRFZGl0IG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHJlcGxhY2UsXHJcbiAqIGluc2VydCBhbmQgZGVsZXRlIGVkaXRzIG1vcmUgZWFzaWx5LlxyXG4gKi9cclxuZXhwb3J0IHZhciBUZXh0RWRpdDtcclxuKGZ1bmN0aW9uIChUZXh0RWRpdCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgcmVwbGFjZSB0ZXh0IGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgVGhlIHJhbmdlIG9mIHRleHQgdG8gYmUgcmVwbGFjZWQuXHJcbiAgICAgKiBAcGFyYW0gbmV3VGV4dCBUaGUgbmV3IHRleHQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2UocmFuZ2UsIG5ld1RleHQpIHtcclxuICAgICAgICByZXR1cm4geyByYW5nZTogcmFuZ2UsIG5ld1RleHQ6IG5ld1RleHQgfTtcclxuICAgIH1cclxuICAgIFRleHRFZGl0LnJlcGxhY2UgPSByZXBsYWNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgaW5zZXJ0IHRleHQgZWRpdC5cclxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgcG9zaXRpb24gdG8gaW5zZXJ0IHRoZSB0ZXh0IGF0LlxyXG4gICAgICogQHBhcmFtIG5ld1RleHQgVGhlIHRleHQgdG8gYmUgaW5zZXJ0ZWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluc2VydChwb3NpdGlvbiwgbmV3VGV4dCkge1xyXG4gICAgICAgIHJldHVybiB7IHJhbmdlOiB7IHN0YXJ0OiBwb3NpdGlvbiwgZW5kOiBwb3NpdGlvbiB9LCBuZXdUZXh0OiBuZXdUZXh0IH07XHJcbiAgICB9XHJcbiAgICBUZXh0RWRpdC5pbnNlcnQgPSBpbnNlcnQ7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBkZWxldGUgdGV4dCBlZGl0LlxyXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSByYW5nZSBvZiB0ZXh0IHRvIGJlIGRlbGV0ZWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRlbChyYW5nZSkge1xyXG4gICAgICAgIHJldHVybiB7IHJhbmdlOiByYW5nZSwgbmV3VGV4dDogJycgfTtcclxuICAgIH1cclxuICAgIFRleHRFZGl0LmRlbCA9IGRlbDtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5vYmplY3RMaXRlcmFsKGNhbmRpZGF0ZSlcclxuICAgICAgICAgICAgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5uZXdUZXh0KVxyXG4gICAgICAgICAgICAmJiBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpO1xyXG4gICAgfVxyXG4gICAgVGV4dEVkaXQuaXMgPSBpcztcclxufSkoVGV4dEVkaXQgfHwgKFRleHRFZGl0ID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBUZXh0RG9jdW1lbnRFZGl0IG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlXHJcbiAqIGFuIGVkaXQgdGhhdCBtYW5pcHVsYXRlcyBhIHRleHQgZG9jdW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFRleHREb2N1bWVudEVkaXQ7XHJcbihmdW5jdGlvbiAoVGV4dERvY3VtZW50RWRpdCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGBUZXh0RG9jdW1lbnRFZGl0YFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodGV4dERvY3VtZW50LCBlZGl0cykge1xyXG4gICAgICAgIHJldHVybiB7IHRleHREb2N1bWVudDogdGV4dERvY3VtZW50LCBlZGl0czogZWRpdHMgfTtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudEVkaXQuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKVxyXG4gICAgICAgICAgICAmJiBWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyLmlzKGNhbmRpZGF0ZS50ZXh0RG9jdW1lbnQpXHJcbiAgICAgICAgICAgICYmIEFycmF5LmlzQXJyYXkoY2FuZGlkYXRlLmVkaXRzKTtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudEVkaXQuaXMgPSBpcztcclxufSkoVGV4dERvY3VtZW50RWRpdCB8fCAoVGV4dERvY3VtZW50RWRpdCA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgQ3JlYXRlRmlsZTtcclxuKGZ1bmN0aW9uIChDcmVhdGVGaWxlKSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodXJpLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAga2luZDogJ2NyZWF0ZScsXHJcbiAgICAgICAgICAgIHVyaTogdXJpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob3B0aW9ucyAhPT0gdm9pZCAwICYmIChvcHRpb25zLm92ZXJ3cml0ZSAhPT0gdm9pZCAwIHx8IG9wdGlvbnMuaWdub3JlSWZFeGlzdHMgIT09IHZvaWQgMCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgQ3JlYXRlRmlsZS5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlICYmIGNhbmRpZGF0ZS5raW5kID09PSAnY3JlYXRlJyAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnVyaSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5vcHRpb25zID09PSB2b2lkIDAgfHxcclxuICAgICAgICAgICAgICAgICgoY2FuZGlkYXRlLm9wdGlvbnMub3ZlcndyaXRlID09PSB2b2lkIDAgfHwgSXMuYm9vbGVhbihjYW5kaWRhdGUub3B0aW9ucy5vdmVyd3JpdGUpKSAmJiAoY2FuZGlkYXRlLm9wdGlvbnMuaWdub3JlSWZFeGlzdHMgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5vcHRpb25zLmlnbm9yZUlmRXhpc3RzKSkpKTtcclxuICAgIH1cclxuICAgIENyZWF0ZUZpbGUuaXMgPSBpcztcclxufSkoQ3JlYXRlRmlsZSB8fCAoQ3JlYXRlRmlsZSA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgUmVuYW1lRmlsZTtcclxuKGZ1bmN0aW9uIChSZW5hbWVGaWxlKSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGUob2xkVXJpLCBuZXdVcmksIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBraW5kOiAncmVuYW1lJyxcclxuICAgICAgICAgICAgb2xkVXJpOiBvbGRVcmksXHJcbiAgICAgICAgICAgIG5ld1VyaTogbmV3VXJpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob3B0aW9ucyAhPT0gdm9pZCAwICYmIChvcHRpb25zLm92ZXJ3cml0ZSAhPT0gdm9pZCAwIHx8IG9wdGlvbnMuaWdub3JlSWZFeGlzdHMgIT09IHZvaWQgMCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgUmVuYW1lRmlsZS5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlICYmIGNhbmRpZGF0ZS5raW5kID09PSAncmVuYW1lJyAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLm9sZFVyaSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5uZXdVcmkpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUub3B0aW9ucyA9PT0gdm9pZCAwIHx8XHJcbiAgICAgICAgICAgICAgICAoKGNhbmRpZGF0ZS5vcHRpb25zLm92ZXJ3cml0ZSA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLm9wdGlvbnMub3ZlcndyaXRlKSkgJiYgKGNhbmRpZGF0ZS5vcHRpb25zLmlnbm9yZUlmRXhpc3RzID09PSB2b2lkIDAgfHwgSXMuYm9vbGVhbihjYW5kaWRhdGUub3B0aW9ucy5pZ25vcmVJZkV4aXN0cykpKSk7XHJcbiAgICB9XHJcbiAgICBSZW5hbWVGaWxlLmlzID0gaXM7XHJcbn0pKFJlbmFtZUZpbGUgfHwgKFJlbmFtZUZpbGUgPSB7fSkpO1xyXG5leHBvcnQgdmFyIERlbGV0ZUZpbGU7XHJcbihmdW5jdGlvbiAoRGVsZXRlRmlsZSkge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHVyaSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICB1cmk6IHVyaVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT09IHZvaWQgMCAmJiAob3B0aW9ucy5yZWN1cnNpdmUgIT09IHZvaWQgMCB8fCBvcHRpb25zLmlnbm9yZUlmTm90RXhpc3RzICE9PSB2b2lkIDApKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIERlbGV0ZUZpbGUuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSAmJiBjYW5kaWRhdGUua2luZCA9PT0gJ2RlbGV0ZScgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUub3B0aW9ucyA9PT0gdm9pZCAwIHx8XHJcbiAgICAgICAgICAgICAgICAoKGNhbmRpZGF0ZS5vcHRpb25zLnJlY3Vyc2l2ZSA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLm9wdGlvbnMucmVjdXJzaXZlKSkgJiYgKGNhbmRpZGF0ZS5vcHRpb25zLmlnbm9yZUlmTm90RXhpc3RzID09PSB2b2lkIDAgfHwgSXMuYm9vbGVhbihjYW5kaWRhdGUub3B0aW9ucy5pZ25vcmVJZk5vdEV4aXN0cykpKSk7XHJcbiAgICB9XHJcbiAgICBEZWxldGVGaWxlLmlzID0gaXM7XHJcbn0pKERlbGV0ZUZpbGUgfHwgKERlbGV0ZUZpbGUgPSB7fSkpO1xyXG5leHBvcnQgdmFyIFdvcmtzcGFjZUVkaXQ7XHJcbihmdW5jdGlvbiAoV29ya3NwYWNlRWRpdCkge1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmNoYW5nZXMgIT09IHZvaWQgMCB8fCBjYW5kaWRhdGUuZG9jdW1lbnRDaGFuZ2VzICE9PSB2b2lkIDApICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuZG9jdW1lbnRDaGFuZ2VzID09PSB2b2lkIDAgfHwgY2FuZGlkYXRlLmRvY3VtZW50Q2hhbmdlcy5ldmVyeShmdW5jdGlvbiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoSXMuc3RyaW5nKGNoYW5nZS5raW5kKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDcmVhdGVGaWxlLmlzKGNoYW5nZSkgfHwgUmVuYW1lRmlsZS5pcyhjaGFuZ2UpIHx8IERlbGV0ZUZpbGUuaXMoY2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0RG9jdW1lbnRFZGl0LmlzKGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIFdvcmtzcGFjZUVkaXQuaXMgPSBpcztcclxufSkoV29ya3NwYWNlRWRpdCB8fCAoV29ya3NwYWNlRWRpdCA9IHt9KSk7XHJcbnZhciBUZXh0RWRpdENoYW5nZUltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZXh0RWRpdENoYW5nZUltcGwoZWRpdHMpIHtcclxuICAgICAgICB0aGlzLmVkaXRzID0gZWRpdHM7XHJcbiAgICB9XHJcbiAgICBUZXh0RWRpdENoYW5nZUltcGwucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgbmV3VGV4dCkge1xyXG4gICAgICAgIHRoaXMuZWRpdHMucHVzaChUZXh0RWRpdC5pbnNlcnQocG9zaXRpb24sIG5ld1RleHQpKTtcclxuICAgIH07XHJcbiAgICBUZXh0RWRpdENoYW5nZUltcGwucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAocmFuZ2UsIG5ld1RleHQpIHtcclxuICAgICAgICB0aGlzLmVkaXRzLnB1c2goVGV4dEVkaXQucmVwbGFjZShyYW5nZSwgbmV3VGV4dCkpO1xyXG4gICAgfTtcclxuICAgIFRleHRFZGl0Q2hhbmdlSW1wbC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHJhbmdlKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cy5wdXNoKFRleHRFZGl0LmRlbChyYW5nZSkpO1xyXG4gICAgfTtcclxuICAgIFRleHRFZGl0Q2hhbmdlSW1wbC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVkaXQpIHtcclxuICAgICAgICB0aGlzLmVkaXRzLnB1c2goZWRpdCk7XHJcbiAgICB9O1xyXG4gICAgVGV4dEVkaXRDaGFuZ2VJbXBsLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdHM7XHJcbiAgICB9O1xyXG4gICAgVGV4dEVkaXRDaGFuZ2VJbXBsLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVkaXRzLnNwbGljZSgwLCB0aGlzLmVkaXRzLmxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHRFZGl0Q2hhbmdlSW1wbDtcclxufSgpKTtcclxuLyoqXHJcbiAqIEEgd29ya3NwYWNlIGNoYW5nZSBoZWxwcyBjb25zdHJ1Y3RpbmcgY2hhbmdlcyB0byBhIHdvcmtzcGFjZS5cclxuICovXHJcbnZhciBXb3Jrc3BhY2VDaGFuZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXb3Jrc3BhY2VDaGFuZ2Uod29ya3NwYWNlRWRpdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fdGV4dEVkaXRDaGFuZ2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICBpZiAod29ya3NwYWNlRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLl93b3Jrc3BhY2VFZGl0ID0gd29ya3NwYWNlRWRpdDtcclxuICAgICAgICAgICAgaWYgKHdvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICB3b3Jrc3BhY2VFZGl0LmRvY3VtZW50Q2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVGV4dERvY3VtZW50RWRpdC5pcyhjaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0RWRpdENoYW5nZSA9IG5ldyBUZXh0RWRpdENoYW5nZUltcGwoY2hhbmdlLmVkaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3RleHRFZGl0Q2hhbmdlc1tjaGFuZ2UudGV4dERvY3VtZW50LnVyaV0gPSB0ZXh0RWRpdENoYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh3b3Jrc3BhY2VFZGl0LmNoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHdvcmtzcGFjZUVkaXQuY2hhbmdlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHRFZGl0Q2hhbmdlID0gbmV3IFRleHRFZGl0Q2hhbmdlSW1wbCh3b3Jrc3BhY2VFZGl0LmNoYW5nZXNba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3RleHRFZGl0Q2hhbmdlc1trZXldID0gdGV4dEVkaXRDaGFuZ2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXb3Jrc3BhY2VDaGFuZ2UucHJvdG90eXBlLCBcImVkaXRcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIHVuZGVybHlpbmcgW1dvcmtzcGFjZUVkaXRdKCNXb3Jrc3BhY2VFZGl0KSBsaXRlcmFsXHJcbiAgICAgICAgICogdXNlIHRvIGJlIHJldHVybmVkIGZyb20gYSB3b3Jrc3BhY2UgZWRpdCBvcGVyYXRpb24gbGlrZSByZW5hbWUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2VFZGl0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgV29ya3NwYWNlQ2hhbmdlLnByb3RvdHlwZS5nZXRUZXh0RWRpdENoYW5nZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBpZiAoVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllci5pcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fd29ya3NwYWNlRWRpdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudENoYW5nZXM6IFtdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV29ya3NwYWNlIGVkaXQgaXMgbm90IGNvbmZpZ3VyZWQgZm9yIGRvY3VtZW50IGNoYW5nZXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRleHREb2N1bWVudCA9IGtleTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3RleHRFZGl0Q2hhbmdlc1t0ZXh0RG9jdW1lbnQudXJpXTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlZGl0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHREb2N1bWVudEVkaXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dERvY3VtZW50OiB0ZXh0RG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdHM6IGVkaXRzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMucHVzaCh0ZXh0RG9jdW1lbnRFZGl0KTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBUZXh0RWRpdENoYW5nZUltcGwoZWRpdHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dEVkaXRDaGFuZ2VzW3RleHREb2N1bWVudC51cmldID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dvcmtzcGFjZUVkaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlczogT2JqZWN0LmNyZWF0ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dvcmtzcGFjZUVkaXQuY2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXb3Jrc3BhY2UgZWRpdCBpcyBub3QgY29uZmlndXJlZCBmb3Igbm9ybWFsIHRleHQgZWRpdCBjaGFuZ2VzLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl90ZXh0RWRpdENoYW5nZXNba2V5XTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlZGl0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdC5jaGFuZ2VzW2tleV0gPSBlZGl0cztcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBUZXh0RWRpdENoYW5nZUltcGwoZWRpdHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dEVkaXRDaGFuZ2VzW2tleV0gPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgV29ya3NwYWNlQ2hhbmdlLnByb3RvdHlwZS5jcmVhdGVGaWxlID0gZnVuY3Rpb24gKHVyaSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEb2N1bWVudENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLl93b3Jrc3BhY2VFZGl0LmRvY3VtZW50Q2hhbmdlcy5wdXNoKENyZWF0ZUZpbGUuY3JlYXRlKHVyaSwgb3B0aW9ucykpO1xyXG4gICAgfTtcclxuICAgIFdvcmtzcGFjZUNoYW5nZS5wcm90b3R5cGUucmVuYW1lRmlsZSA9IGZ1bmN0aW9uIChvbGRVcmksIG5ld1VyaSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEb2N1bWVudENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLl93b3Jrc3BhY2VFZGl0LmRvY3VtZW50Q2hhbmdlcy5wdXNoKFJlbmFtZUZpbGUuY3JlYXRlKG9sZFVyaSwgbmV3VXJpLCBvcHRpb25zKSk7XHJcbiAgICB9O1xyXG4gICAgV29ya3NwYWNlQ2hhbmdlLnByb3RvdHlwZS5kZWxldGVGaWxlID0gZnVuY3Rpb24gKHVyaSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEb2N1bWVudENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLl93b3Jrc3BhY2VFZGl0LmRvY3VtZW50Q2hhbmdlcy5wdXNoKERlbGV0ZUZpbGUuY3JlYXRlKHVyaSwgb3B0aW9ucykpO1xyXG4gICAgfTtcclxuICAgIFdvcmtzcGFjZUNoYW5nZS5wcm90b3R5cGUuY2hlY2tEb2N1bWVudENoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93b3Jrc3BhY2VFZGl0IHx8ICF0aGlzLl93b3Jrc3BhY2VFZGl0LmRvY3VtZW50Q2hhbmdlcykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dvcmtzcGFjZSBlZGl0IGlzIG5vdCBjb25maWd1cmVkIGZvciBkb2N1bWVudCBjaGFuZ2VzLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gV29ya3NwYWNlQ2hhbmdlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBXb3Jrc3BhY2VDaGFuZ2UgfTtcclxuLyoqXHJcbiAqIFRoZSBUZXh0RG9jdW1lbnRJZGVudGlmaWVyIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbVGV4dERvY3VtZW50SWRlbnRpZmllcl0oI1RleHREb2N1bWVudElkZW50aWZpZXIpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBUZXh0RG9jdW1lbnRJZGVudGlmaWVyO1xyXG4oZnVuY3Rpb24gKFRleHREb2N1bWVudElkZW50aWZpZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBUZXh0RG9jdW1lbnRJZGVudGlmaWVyIGxpdGVyYWwuXHJcbiAgICAgKiBAcGFyYW0gdXJpIFRoZSBkb2N1bWVudCdzIHVyaS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHVyaSkge1xyXG4gICAgICAgIHJldHVybiB7IHVyaTogdXJpIH07XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnRJZGVudGlmaWVyLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtUZXh0RG9jdW1lbnRJZGVudGlmaWVyXSgjVGV4dERvY3VtZW50SWRlbnRpZmllcikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudXJpKTtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudElkZW50aWZpZXIuaXMgPSBpcztcclxufSkoVGV4dERvY3VtZW50SWRlbnRpZmllciB8fCAoVGV4dERvY3VtZW50SWRlbnRpZmllciA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllciBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW1ZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXJdKCNWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllcjtcclxuKGZ1bmN0aW9uIChWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllciBsaXRlcmFsLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgZG9jdW1lbnQncyB1cmkuXHJcbiAgICAgKiBAcGFyYW0gdXJpIFRoZSBkb2N1bWVudCdzIHRleHQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmksIHZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4geyB1cmk6IHVyaSwgdmVyc2lvbjogdmVyc2lvbiB9O1xyXG4gICAgfVxyXG4gICAgVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllci5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllcl0oI1ZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnVyaSkgJiYgKGNhbmRpZGF0ZS52ZXJzaW9uID09PSBudWxsIHx8IElzLm51bWJlcihjYW5kaWRhdGUudmVyc2lvbikpO1xyXG4gICAgfVxyXG4gICAgVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllci5pcyA9IGlzO1xyXG59KShWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyIHx8IChWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBUZXh0RG9jdW1lbnRJdGVtIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbVGV4dERvY3VtZW50SXRlbV0oI1RleHREb2N1bWVudEl0ZW0pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBUZXh0RG9jdW1lbnRJdGVtO1xyXG4oZnVuY3Rpb24gKFRleHREb2N1bWVudEl0ZW0pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBUZXh0RG9jdW1lbnRJdGVtIGxpdGVyYWwuXHJcbiAgICAgKiBAcGFyYW0gdXJpIFRoZSBkb2N1bWVudCdzIHVyaS5cclxuICAgICAqIEBwYXJhbSBsYW5ndWFnZUlkIFRoZSBkb2N1bWVudCdzIGxhbmd1YWdlIGlkZW50aWZpZXIuXHJcbiAgICAgKiBAcGFyYW0gdmVyc2lvbiBUaGUgZG9jdW1lbnQncyB2ZXJzaW9uIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB0ZXh0IFRoZSBkb2N1bWVudCdzIHRleHQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmksIGxhbmd1YWdlSWQsIHZlcnNpb24sIHRleHQpIHtcclxuICAgICAgICByZXR1cm4geyB1cmk6IHVyaSwgbGFuZ3VhZ2VJZDogbGFuZ3VhZ2VJZCwgdmVyc2lvbjogdmVyc2lvbiwgdGV4dDogdGV4dCB9O1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50SXRlbS5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbVGV4dERvY3VtZW50SXRlbV0oI1RleHREb2N1bWVudEl0ZW0pIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnVyaSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5sYW5ndWFnZUlkKSAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLnZlcnNpb24pICYmIElzLnN0cmluZyhjYW5kaWRhdGUudGV4dCk7XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnRJdGVtLmlzID0gaXM7XHJcbn0pKFRleHREb2N1bWVudEl0ZW0gfHwgKFRleHREb2N1bWVudEl0ZW0gPSB7fSkpO1xyXG4vKipcclxuICogRGVzY3JpYmVzIHRoZSBjb250ZW50IHR5cGUgdGhhdCBhIGNsaWVudCBzdXBwb3J0cyBpbiB2YXJpb3VzXHJcbiAqIHJlc3VsdCBsaXRlcmFscyBsaWtlIGBIb3ZlcmAsIGBQYXJhbWV0ZXJJbmZvYCBvciBgQ29tcGxldGlvbkl0ZW1gLlxyXG4gKlxyXG4gKiBQbGVhc2Ugbm90ZSB0aGF0IGBNYXJrdXBLaW5kc2AgbXVzdCBub3Qgc3RhcnQgd2l0aCBhIGAkYC4gVGhpcyBraW5kc1xyXG4gKiBhcmUgcmVzZXJ2ZWQgZm9yIGludGVybmFsIHVzYWdlLlxyXG4gKi9cclxuZXhwb3J0IHZhciBNYXJrdXBLaW5kO1xyXG4oZnVuY3Rpb24gKE1hcmt1cEtpbmQpIHtcclxuICAgIC8qKlxyXG4gICAgICogUGxhaW4gdGV4dCBpcyBzdXBwb3J0ZWQgYXMgYSBjb250ZW50IGZvcm1hdFxyXG4gICAgICovXHJcbiAgICBNYXJrdXBLaW5kLlBsYWluVGV4dCA9ICdwbGFpbnRleHQnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrZG93biBpcyBzdXBwb3J0ZWQgYXMgYSBjb250ZW50IGZvcm1hdFxyXG4gICAgICovXHJcbiAgICBNYXJrdXBLaW5kLk1hcmtkb3duID0gJ21hcmtkb3duJztcclxufSkoTWFya3VwS2luZCB8fCAoTWFya3VwS2luZCA9IHt9KSk7XHJcbihmdW5jdGlvbiAoTWFya3VwS2luZCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSB2YWx1ZSBvZiB0aGUgW01hcmt1cEtpbmRdKCNNYXJrdXBLaW5kKSB0eXBlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlID09PSBNYXJrdXBLaW5kLlBsYWluVGV4dCB8fCBjYW5kaWRhdGUgPT09IE1hcmt1cEtpbmQuTWFya2Rvd247XHJcbiAgICB9XHJcbiAgICBNYXJrdXBLaW5kLmlzID0gaXM7XHJcbn0pKE1hcmt1cEtpbmQgfHwgKE1hcmt1cEtpbmQgPSB7fSkpO1xyXG5leHBvcnQgdmFyIE1hcmt1cENvbnRlbnQ7XHJcbihmdW5jdGlvbiAoTWFya3VwQ29udGVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgY29uZm9ybXMgdG8gdGhlIFtNYXJrdXBDb250ZW50XSgjTWFya3VwQ29udGVudCkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMub2JqZWN0TGl0ZXJhbCh2YWx1ZSkgJiYgTWFya3VwS2luZC5pcyhjYW5kaWRhdGUua2luZCkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBNYXJrdXBDb250ZW50LmlzID0gaXM7XHJcbn0pKE1hcmt1cENvbnRlbnQgfHwgKE1hcmt1cENvbnRlbnQgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIGtpbmQgb2YgYSBjb21wbGV0aW9uIGVudHJ5LlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb21wbGV0aW9uSXRlbUtpbmQ7XHJcbihmdW5jdGlvbiAoQ29tcGxldGlvbkl0ZW1LaW5kKSB7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuVGV4dCA9IDE7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuTWV0aG9kID0gMjtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5GdW5jdGlvbiA9IDM7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuQ29uc3RydWN0b3IgPSA0O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkZpZWxkID0gNTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5WYXJpYWJsZSA9IDY7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuQ2xhc3MgPSA3O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkludGVyZmFjZSA9IDg7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuTW9kdWxlID0gOTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Qcm9wZXJ0eSA9IDEwO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlVuaXQgPSAxMTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5WYWx1ZSA9IDEyO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkVudW0gPSAxMztcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5LZXl3b3JkID0gMTQ7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuU25pcHBldCA9IDE1O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkNvbG9yID0gMTY7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuRmlsZSA9IDE3O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlJlZmVyZW5jZSA9IDE4O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkZvbGRlciA9IDE5O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkVudW1NZW1iZXIgPSAyMDtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Db25zdGFudCA9IDIxO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlN0cnVjdCA9IDIyO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkV2ZW50ID0gMjM7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuT3BlcmF0b3IgPSAyNDtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5UeXBlUGFyYW1ldGVyID0gMjU7XHJcbn0pKENvbXBsZXRpb25JdGVtS2luZCB8fCAoQ29tcGxldGlvbkl0ZW1LaW5kID0ge30pKTtcclxuLyoqXHJcbiAqIERlZmluZXMgd2hldGhlciB0aGUgaW5zZXJ0IHRleHQgaW4gYSBjb21wbGV0aW9uIGl0ZW0gc2hvdWxkIGJlIGludGVycHJldGVkIGFzXHJcbiAqIHBsYWluIHRleHQgb3IgYSBzbmlwcGV0LlxyXG4gKi9cclxuZXhwb3J0IHZhciBJbnNlcnRUZXh0Rm9ybWF0O1xyXG4oZnVuY3Rpb24gKEluc2VydFRleHRGb3JtYXQpIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHByaW1hcnkgdGV4dCB0byBiZSBpbnNlcnRlZCBpcyB0cmVhdGVkIGFzIGEgcGxhaW4gc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBJbnNlcnRUZXh0Rm9ybWF0LlBsYWluVGV4dCA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwcmltYXJ5IHRleHQgdG8gYmUgaW5zZXJ0ZWQgaXMgdHJlYXRlZCBhcyBhIHNuaXBwZXQuXHJcbiAgICAgKlxyXG4gICAgICogQSBzbmlwcGV0IGNhbiBkZWZpbmUgdGFiIHN0b3BzIGFuZCBwbGFjZWhvbGRlcnMgd2l0aCBgJDFgLCBgJDJgXHJcbiAgICAgKiBhbmQgYCR7Mzpmb299YC4gYCQwYCBkZWZpbmVzIHRoZSBmaW5hbCB0YWIgc3RvcCwgaXQgZGVmYXVsdHMgdG9cclxuICAgICAqIHRoZSBlbmQgb2YgdGhlIHNuaXBwZXQuIFBsYWNlaG9sZGVycyB3aXRoIGVxdWFsIGlkZW50aWZpZXJzIGFyZSBsaW5rZWQsXHJcbiAgICAgKiB0aGF0IGlzIHR5cGluZyBpbiBvbmUgd2lsbCB1cGRhdGUgb3RoZXJzIHRvby5cclxuICAgICAqXHJcbiAgICAgKiBTZWUgYWxzbzogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC92c2NvZGUvYmxvYi9tYXN0ZXIvc3JjL3ZzL2VkaXRvci9jb250cmliL3NuaXBwZXQvY29tbW9uL3NuaXBwZXQubWRcclxuICAgICAqL1xyXG4gICAgSW5zZXJ0VGV4dEZvcm1hdC5TbmlwcGV0ID0gMjtcclxufSkoSW5zZXJ0VGV4dEZvcm1hdCB8fCAoSW5zZXJ0VGV4dEZvcm1hdCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgQ29tcGxldGlvbkl0ZW0gbmFtZXNwYWNlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0byBkZWFsIHdpdGhcclxuICogY29tcGxldGlvbiBpdGVtcy5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29tcGxldGlvbkl0ZW07XHJcbihmdW5jdGlvbiAoQ29tcGxldGlvbkl0ZW0pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY29tcGxldGlvbiBpdGVtIGFuZCBzZWVkIGl0IHdpdGggYSBsYWJlbC5cclxuICAgICAqIEBwYXJhbSBsYWJlbCBUaGUgY29tcGxldGlvbiBpdGVtJ3MgbGFiZWxcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGxhYmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbGFiZWw6IGxhYmVsIH07XHJcbiAgICB9XHJcbiAgICBDb21wbGV0aW9uSXRlbS5jcmVhdGUgPSBjcmVhdGU7XHJcbn0pKENvbXBsZXRpb25JdGVtIHx8IChDb21wbGV0aW9uSXRlbSA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgQ29tcGxldGlvbkxpc3QgbmFtZXNwYWNlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0byBkZWFsIHdpdGhcclxuICogY29tcGxldGlvbiBsaXN0cy5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29tcGxldGlvbkxpc3Q7XHJcbihmdW5jdGlvbiAoQ29tcGxldGlvbkxpc3QpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb21wbGV0aW9uIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGl0ZW1zIFRoZSBjb21wbGV0aW9uIGl0ZW1zLlxyXG4gICAgICogQHBhcmFtIGlzSW5jb21wbGV0ZSBUaGUgbGlzdCBpcyBub3QgY29tcGxldGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShpdGVtcywgaXNJbmNvbXBsZXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaXRlbXM6IGl0ZW1zID8gaXRlbXMgOiBbXSwgaXNJbmNvbXBsZXRlOiAhIWlzSW5jb21wbGV0ZSB9O1xyXG4gICAgfVxyXG4gICAgQ29tcGxldGlvbkxpc3QuY3JlYXRlID0gY3JlYXRlO1xyXG59KShDb21wbGV0aW9uTGlzdCB8fCAoQ29tcGxldGlvbkxpc3QgPSB7fSkpO1xyXG5leHBvcnQgdmFyIE1hcmtlZFN0cmluZztcclxuKGZ1bmN0aW9uIChNYXJrZWRTdHJpbmcpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG1hcmtlZCBzdHJpbmcgZnJvbSBwbGFpbiB0ZXh0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwbGFpblRleHQgVGhlIHBsYWluIHRleHQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGZyb21QbGFpblRleHQocGxhaW5UZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHBsYWluVGV4dC5yZXBsYWNlKC9bXFxcXGAqX3t9W1xcXSgpIytcXC0uIV0vZywgXCJcXFxcJCZcIik7IC8vIGVzY2FwZSBtYXJrZG93biBzeW50YXggdG9rZW5zOiBodHRwOi8vZGFyaW5nZmlyZWJhbGwubmV0L3Byb2plY3RzL21hcmtkb3duL3N5bnRheCNiYWNrc2xhc2hcclxuICAgIH1cclxuICAgIE1hcmtlZFN0cmluZy5mcm9tUGxhaW5UZXh0ID0gZnJvbVBsYWluVGV4dDtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGNvbmZvcm1zIHRvIHRoZSBbTWFya2VkU3RyaW5nXSgjTWFya2VkU3RyaW5nKSB0eXBlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuc3RyaW5nKGNhbmRpZGF0ZSkgfHwgKElzLm9iamVjdExpdGVyYWwoY2FuZGlkYXRlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLmxhbmd1YWdlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBNYXJrZWRTdHJpbmcuaXMgPSBpcztcclxufSkoTWFya2VkU3RyaW5nIHx8IChNYXJrZWRTdHJpbmcgPSB7fSkpO1xyXG5leHBvcnQgdmFyIEhvdmVyO1xyXG4oZnVuY3Rpb24gKEhvdmVyKSB7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBjb25mb3JtcyB0byB0aGUgW0hvdmVyXSgjSG92ZXIpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuICEhY2FuZGlkYXRlICYmIElzLm9iamVjdExpdGVyYWwoY2FuZGlkYXRlKSAmJiAoTWFya3VwQ29udGVudC5pcyhjYW5kaWRhdGUuY29udGVudHMpIHx8XHJcbiAgICAgICAgICAgIE1hcmtlZFN0cmluZy5pcyhjYW5kaWRhdGUuY29udGVudHMpIHx8XHJcbiAgICAgICAgICAgIElzLnR5cGVkQXJyYXkoY2FuZGlkYXRlLmNvbnRlbnRzLCBNYXJrZWRTdHJpbmcuaXMpKSAmJiAodmFsdWUucmFuZ2UgPT09IHZvaWQgMCB8fCBSYW5nZS5pcyh2YWx1ZS5yYW5nZSkpO1xyXG4gICAgfVxyXG4gICAgSG92ZXIuaXMgPSBpcztcclxufSkoSG92ZXIgfHwgKEhvdmVyID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBQYXJhbWV0ZXJJbmZvcm1hdGlvbiBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW1BhcmFtZXRlckluZm9ybWF0aW9uXSgjUGFyYW1ldGVySW5mb3JtYXRpb24pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBQYXJhbWV0ZXJJbmZvcm1hdGlvbjtcclxuKGZ1bmN0aW9uIChQYXJhbWV0ZXJJbmZvcm1hdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHBhcmFtZXRlciBpbmZvcm1hdGlvbiBsaXRlcmFsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYWJlbCBBIGxhYmVsIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSBkb2N1bWVudGF0aW9uIEEgZG9jIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGxhYmVsLCBkb2N1bWVudGF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50YXRpb24gPyB7IGxhYmVsOiBsYWJlbCwgZG9jdW1lbnRhdGlvbjogZG9jdW1lbnRhdGlvbiB9IDogeyBsYWJlbDogbGFiZWwgfTtcclxuICAgIH1cclxuICAgIFBhcmFtZXRlckluZm9ybWF0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIDtcclxufSkoUGFyYW1ldGVySW5mb3JtYXRpb24gfHwgKFBhcmFtZXRlckluZm9ybWF0aW9uID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBTaWduYXR1cmVJbmZvcm1hdGlvbiBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW1NpZ25hdHVyZUluZm9ybWF0aW9uXSgjU2lnbmF0dXJlSW5mb3JtYXRpb24pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBTaWduYXR1cmVJbmZvcm1hdGlvbjtcclxuKGZ1bmN0aW9uIChTaWduYXR1cmVJbmZvcm1hdGlvbikge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGxhYmVsLCBkb2N1bWVudGF0aW9uKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0geyBsYWJlbDogbGFiZWwgfTtcclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChkb2N1bWVudGF0aW9uKSkge1xyXG4gICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRhdGlvbiA9IGRvY3VtZW50YXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKHBhcmFtZXRlcnMpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wYXJhbWV0ZXJzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBTaWduYXR1cmVJbmZvcm1hdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbn0pKFNpZ25hdHVyZUluZm9ybWF0aW9uIHx8IChTaWduYXR1cmVJbmZvcm1hdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBBIGRvY3VtZW50IGhpZ2hsaWdodCBraW5kLlxyXG4gKi9cclxuZXhwb3J0IHZhciBEb2N1bWVudEhpZ2hsaWdodEtpbmQ7XHJcbihmdW5jdGlvbiAoRG9jdW1lbnRIaWdobGlnaHRLaW5kKSB7XHJcbiAgICAvKipcclxuICAgICAqIEEgdGV4dHVhbCBvY2N1cnJlbmNlLlxyXG4gICAgICovXHJcbiAgICBEb2N1bWVudEhpZ2hsaWdodEtpbmQuVGV4dCA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIFJlYWQtYWNjZXNzIG9mIGEgc3ltYm9sLCBsaWtlIHJlYWRpbmcgYSB2YXJpYWJsZS5cclxuICAgICAqL1xyXG4gICAgRG9jdW1lbnRIaWdobGlnaHRLaW5kLlJlYWQgPSAyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZS1hY2Nlc3Mgb2YgYSBzeW1ib2wsIGxpa2Ugd3JpdGluZyB0byBhIHZhcmlhYmxlLlxyXG4gICAgICovXHJcbiAgICBEb2N1bWVudEhpZ2hsaWdodEtpbmQuV3JpdGUgPSAzO1xyXG59KShEb2N1bWVudEhpZ2hsaWdodEtpbmQgfHwgKERvY3VtZW50SGlnaGxpZ2h0S2luZCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBEb2N1bWVudEhpZ2hsaWdodCBuYW1lc3BhY2UgdG8gcHJvdmlkZSBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbRG9jdW1lbnRIaWdobGlnaHRdKCNEb2N1bWVudEhpZ2hsaWdodCkgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIERvY3VtZW50SGlnaGxpZ2h0O1xyXG4oZnVuY3Rpb24gKERvY3VtZW50SGlnaGxpZ2h0KSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIERvY3VtZW50SGlnaGxpZ2h0IG9iamVjdC5cclxuICAgICAqIEBwYXJhbSByYW5nZSBUaGUgcmFuZ2UgdGhlIGhpZ2hsaWdodCBhcHBsaWVzIHRvLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUocmFuZ2UsIGtpbmQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0geyByYW5nZTogcmFuZ2UgfTtcclxuICAgICAgICBpZiAoSXMubnVtYmVyKGtpbmQpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5raW5kID0ga2luZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIERvY3VtZW50SGlnaGxpZ2h0LmNyZWF0ZSA9IGNyZWF0ZTtcclxufSkoRG9jdW1lbnRIaWdobGlnaHQgfHwgKERvY3VtZW50SGlnaGxpZ2h0ID0ge30pKTtcclxuLyoqXHJcbiAqIEEgc3ltYm9sIGtpbmQuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFN5bWJvbEtpbmQ7XHJcbihmdW5jdGlvbiAoU3ltYm9sS2luZCkge1xyXG4gICAgU3ltYm9sS2luZC5GaWxlID0gMTtcclxuICAgIFN5bWJvbEtpbmQuTW9kdWxlID0gMjtcclxuICAgIFN5bWJvbEtpbmQuTmFtZXNwYWNlID0gMztcclxuICAgIFN5bWJvbEtpbmQuUGFja2FnZSA9IDQ7XHJcbiAgICBTeW1ib2xLaW5kLkNsYXNzID0gNTtcclxuICAgIFN5bWJvbEtpbmQuTWV0aG9kID0gNjtcclxuICAgIFN5bWJvbEtpbmQuUHJvcGVydHkgPSA3O1xyXG4gICAgU3ltYm9sS2luZC5GaWVsZCA9IDg7XHJcbiAgICBTeW1ib2xLaW5kLkNvbnN0cnVjdG9yID0gOTtcclxuICAgIFN5bWJvbEtpbmQuRW51bSA9IDEwO1xyXG4gICAgU3ltYm9sS2luZC5JbnRlcmZhY2UgPSAxMTtcclxuICAgIFN5bWJvbEtpbmQuRnVuY3Rpb24gPSAxMjtcclxuICAgIFN5bWJvbEtpbmQuVmFyaWFibGUgPSAxMztcclxuICAgIFN5bWJvbEtpbmQuQ29uc3RhbnQgPSAxNDtcclxuICAgIFN5bWJvbEtpbmQuU3RyaW5nID0gMTU7XHJcbiAgICBTeW1ib2xLaW5kLk51bWJlciA9IDE2O1xyXG4gICAgU3ltYm9sS2luZC5Cb29sZWFuID0gMTc7XHJcbiAgICBTeW1ib2xLaW5kLkFycmF5ID0gMTg7XHJcbiAgICBTeW1ib2xLaW5kLk9iamVjdCA9IDE5O1xyXG4gICAgU3ltYm9sS2luZC5LZXkgPSAyMDtcclxuICAgIFN5bWJvbEtpbmQuTnVsbCA9IDIxO1xyXG4gICAgU3ltYm9sS2luZC5FbnVtTWVtYmVyID0gMjI7XHJcbiAgICBTeW1ib2xLaW5kLlN0cnVjdCA9IDIzO1xyXG4gICAgU3ltYm9sS2luZC5FdmVudCA9IDI0O1xyXG4gICAgU3ltYm9sS2luZC5PcGVyYXRvciA9IDI1O1xyXG4gICAgU3ltYm9sS2luZC5UeXBlUGFyYW1ldGVyID0gMjY7XHJcbn0pKFN5bWJvbEtpbmQgfHwgKFN5bWJvbEtpbmQgPSB7fSkpO1xyXG5leHBvcnQgdmFyIFN5bWJvbEluZm9ybWF0aW9uO1xyXG4oZnVuY3Rpb24gKFN5bWJvbEluZm9ybWF0aW9uKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgc3ltYm9sIGluZm9ybWF0aW9uIGxpdGVyYWwuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN5bWJvbC5cclxuICAgICAqIEBwYXJhbSBraW5kIFRoZSBraW5kIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgVGhlIHJhbmdlIG9mIHRoZSBsb2NhdGlvbiBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgcmVzb3VyY2Ugb2YgdGhlIGxvY2F0aW9uIG9mIHN5bWJvbCwgZGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgZG9jdW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyTmFtZSBUaGUgbmFtZSBvZiB0aGUgc3ltYm9sIGNvbnRhaW5pbmcgdGhlIHN5bWJvbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKG5hbWUsIGtpbmQsIHJhbmdlLCB1cmksIGNvbnRhaW5lck5hbWUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBraW5kOiBraW5kLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogeyB1cmk6IHVyaSwgcmFuZ2U6IHJhbmdlIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjb250YWluZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5jb250YWluZXJOYW1lID0gY29udGFpbmVyTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIFN5bWJvbEluZm9ybWF0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxufSkoU3ltYm9sSW5mb3JtYXRpb24gfHwgKFN5bWJvbEluZm9ybWF0aW9uID0ge30pKTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgcHJvZ3JhbW1pbmcgY29uc3RydWN0cyBsaWtlIHZhcmlhYmxlcywgY2xhc3NlcywgaW50ZXJmYWNlcyBldGMuXHJcbiAqIHRoYXQgYXBwZWFyIGluIGEgZG9jdW1lbnQuIERvY3VtZW50IHN5bWJvbHMgY2FuIGJlIGhpZXJhcmNoaWNhbCBhbmQgdGhleVxyXG4gKiBoYXZlIHR3byByYW5nZXM6IG9uZSB0aGF0IGVuY2xvc2VzIGl0cyBkZWZpbml0aW9uIGFuZCBvbmUgdGhhdCBwb2ludHMgdG9cclxuICogaXRzIG1vc3QgaW50ZXJlc3RpbmcgcmFuZ2UsIGUuZy4gdGhlIHJhbmdlIG9mIGFuIGlkZW50aWZpZXIuXHJcbiAqL1xyXG52YXIgRG9jdW1lbnRTeW1ib2wgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEb2N1bWVudFN5bWJvbCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBEb2N1bWVudFN5bWJvbDtcclxufSgpKTtcclxuZXhwb3J0IHsgRG9jdW1lbnRTeW1ib2wgfTtcclxuKGZ1bmN0aW9uIChEb2N1bWVudFN5bWJvbCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHN5bWJvbCBpbmZvcm1hdGlvbiBsaXRlcmFsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0gZGV0YWlsIFRoZSBkZXRhaWwgb2YgdGhlIHN5bWJvbC5cclxuICAgICAqIEBwYXJhbSBraW5kIFRoZSBraW5kIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgVGhlIHJhbmdlIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0aW9uUmFuZ2UgVGhlIHNlbGVjdGlvblJhbmdlIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0gY2hpbGRyZW4gQ2hpbGRyZW4gb2YgdGhlIHN5bWJvbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKG5hbWUsIGRldGFpbCwga2luZCwgcmFuZ2UsIHNlbGVjdGlvblJhbmdlLCBjaGlsZHJlbikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGRldGFpbDogZGV0YWlsLFxyXG4gICAgICAgICAgICBraW5kOiBraW5kLFxyXG4gICAgICAgICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvblJhbmdlOiBzZWxlY3Rpb25SYW5nZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuICE9PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBEb2N1bWVudFN5bWJvbC5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbRG9jdW1lbnRTeW1ib2xdKCNEb2N1bWVudFN5bWJvbCkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlICYmXHJcbiAgICAgICAgICAgIElzLnN0cmluZyhjYW5kaWRhdGUubmFtZSkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS5raW5kKSAmJlxyXG4gICAgICAgICAgICBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpICYmIFJhbmdlLmlzKGNhbmRpZGF0ZS5zZWxlY3Rpb25SYW5nZSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5kZXRhaWwgPT09IHZvaWQgMCB8fCBJcy5zdHJpbmcoY2FuZGlkYXRlLmRldGFpbCkpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuZGVwcmVjYXRlZCA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLmRlcHJlY2F0ZWQpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmNoaWxkcmVuID09PSB2b2lkIDAgfHwgQXJyYXkuaXNBcnJheShjYW5kaWRhdGUuY2hpbGRyZW4pKTtcclxuICAgIH1cclxuICAgIERvY3VtZW50U3ltYm9sLmlzID0gaXM7XHJcbn0pKERvY3VtZW50U3ltYm9sIHx8IChEb2N1bWVudFN5bWJvbCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBBIHNldCBvZiBwcmVkZWZpbmVkIGNvZGUgYWN0aW9uIGtpbmRzXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvZGVBY3Rpb25LaW5kO1xyXG4oZnVuY3Rpb24gKENvZGVBY3Rpb25LaW5kKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2Uga2luZCBmb3IgcXVpY2tmaXggYWN0aW9uczogJ3F1aWNrZml4J1xyXG4gICAgICovXHJcbiAgICBDb2RlQWN0aW9uS2luZC5RdWlja0ZpeCA9ICdxdWlja2ZpeCc7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2Uga2luZCBmb3IgcmVmYWN0b3JpbmcgYWN0aW9uczogJ3JlZmFjdG9yJ1xyXG4gICAgICovXHJcbiAgICBDb2RlQWN0aW9uS2luZC5SZWZhY3RvciA9ICdyZWZhY3Rvcic7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2Uga2luZCBmb3IgcmVmYWN0b3JpbmcgZXh0cmFjdGlvbiBhY3Rpb25zOiAncmVmYWN0b3IuZXh0cmFjdCdcclxuICAgICAqXHJcbiAgICAgKiBFeGFtcGxlIGV4dHJhY3QgYWN0aW9uczpcclxuICAgICAqXHJcbiAgICAgKiAtIEV4dHJhY3QgbWV0aG9kXHJcbiAgICAgKiAtIEV4dHJhY3QgZnVuY3Rpb25cclxuICAgICAqIC0gRXh0cmFjdCB2YXJpYWJsZVxyXG4gICAgICogLSBFeHRyYWN0IGludGVyZmFjZSBmcm9tIGNsYXNzXHJcbiAgICAgKiAtIC4uLlxyXG4gICAgICovXHJcbiAgICBDb2RlQWN0aW9uS2luZC5SZWZhY3RvckV4dHJhY3QgPSAncmVmYWN0b3IuZXh0cmFjdCc7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2Uga2luZCBmb3IgcmVmYWN0b3JpbmcgaW5saW5lIGFjdGlvbnM6ICdyZWZhY3Rvci5pbmxpbmUnXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZSBpbmxpbmUgYWN0aW9uczpcclxuICAgICAqXHJcbiAgICAgKiAtIElubGluZSBmdW5jdGlvblxyXG4gICAgICogLSBJbmxpbmUgdmFyaWFibGVcclxuICAgICAqIC0gSW5saW5lIGNvbnN0YW50XHJcbiAgICAgKiAtIC4uLlxyXG4gICAgICovXHJcbiAgICBDb2RlQWN0aW9uS2luZC5SZWZhY3RvcklubGluZSA9ICdyZWZhY3Rvci5pbmxpbmUnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHJlZmFjdG9yaW5nIHJld3JpdGUgYWN0aW9uczogJ3JlZmFjdG9yLnJld3JpdGUnXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZSByZXdyaXRlIGFjdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogLSBDb252ZXJ0IEphdmFTY3JpcHQgZnVuY3Rpb24gdG8gY2xhc3NcclxuICAgICAqIC0gQWRkIG9yIHJlbW92ZSBwYXJhbWV0ZXJcclxuICAgICAqIC0gRW5jYXBzdWxhdGUgZmllbGRcclxuICAgICAqIC0gTWFrZSBtZXRob2Qgc3RhdGljXHJcbiAgICAgKiAtIE1vdmUgbWV0aG9kIHRvIGJhc2UgY2xhc3NcclxuICAgICAqIC0gLi4uXHJcbiAgICAgKi9cclxuICAgIENvZGVBY3Rpb25LaW5kLlJlZmFjdG9yUmV3cml0ZSA9ICdyZWZhY3Rvci5yZXdyaXRlJztcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBraW5kIGZvciBzb3VyY2UgYWN0aW9uczogYHNvdXJjZWBcclxuICAgICAqXHJcbiAgICAgKiBTb3VyY2UgY29kZSBhY3Rpb25zIGFwcGx5IHRvIHRoZSBlbnRpcmUgZmlsZS5cclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuU291cmNlID0gJ3NvdXJjZSc7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2Uga2luZCBmb3IgYW4gb3JnYW5pemUgaW1wb3J0cyBzb3VyY2UgYWN0aW9uOiBgc291cmNlLm9yZ2FuaXplSW1wb3J0c2BcclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuU291cmNlT3JnYW5pemVJbXBvcnRzID0gJ3NvdXJjZS5vcmdhbml6ZUltcG9ydHMnO1xyXG59KShDb2RlQWN0aW9uS2luZCB8fCAoQ29kZUFjdGlvbktpbmQgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvZGVBY3Rpb25Db250ZXh0IG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbQ29kZUFjdGlvbkNvbnRleHRdKCNDb2RlQWN0aW9uQ29udGV4dCkgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvZGVBY3Rpb25Db250ZXh0O1xyXG4oZnVuY3Rpb24gKENvZGVBY3Rpb25Db250ZXh0KSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgQ29kZUFjdGlvbkNvbnRleHQgbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGRpYWdub3N0aWNzLCBvbmx5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgZGlhZ25vc3RpY3M6IGRpYWdub3N0aWNzIH07XHJcbiAgICAgICAgaWYgKG9ubHkgIT09IHZvaWQgMCAmJiBvbmx5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5vbmx5ID0gb25seTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIENvZGVBY3Rpb25Db250ZXh0LmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtDb2RlQWN0aW9uQ29udGV4dF0oI0NvZGVBY3Rpb25Db250ZXh0KSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMudHlwZWRBcnJheShjYW5kaWRhdGUuZGlhZ25vc3RpY3MsIERpYWdub3N0aWMuaXMpICYmIChjYW5kaWRhdGUub25seSA9PT0gdm9pZCAwIHx8IElzLnR5cGVkQXJyYXkoY2FuZGlkYXRlLm9ubHksIElzLnN0cmluZykpO1xyXG4gICAgfVxyXG4gICAgQ29kZUFjdGlvbkNvbnRleHQuaXMgPSBpcztcclxufSkoQ29kZUFjdGlvbkNvbnRleHQgfHwgKENvZGVBY3Rpb25Db250ZXh0ID0ge30pKTtcclxuZXhwb3J0IHZhciBDb2RlQWN0aW9uO1xyXG4oZnVuY3Rpb24gKENvZGVBY3Rpb24pIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0aXRsZSwgY29tbWFuZE9yRWRpdCwga2luZCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IHRpdGxlOiB0aXRsZSB9O1xyXG4gICAgICAgIGlmIChDb21tYW5kLmlzKGNvbW1hbmRPckVkaXQpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5jb21tYW5kID0gY29tbWFuZE9yRWRpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5lZGl0ID0gY29tbWFuZE9yRWRpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtpbmQgIT09IHZvaWQgbnVsbCkge1xyXG4gICAgICAgICAgICByZXN1bHQua2luZCA9IGtpbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBDb2RlQWN0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGUgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS50aXRsZSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5kaWFnbm9zdGljcyA9PT0gdm9pZCAwIHx8IElzLnR5cGVkQXJyYXkoY2FuZGlkYXRlLmRpYWdub3N0aWNzLCBEaWFnbm9zdGljLmlzKSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5raW5kID09PSB2b2lkIDAgfHwgSXMuc3RyaW5nKGNhbmRpZGF0ZS5raW5kKSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5lZGl0ICE9PSB2b2lkIDAgfHwgY2FuZGlkYXRlLmNvbW1hbmQgIT09IHZvaWQgMCkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5jb21tYW5kID09PSB2b2lkIDAgfHwgQ29tbWFuZC5pcyhjYW5kaWRhdGUuY29tbWFuZCkpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuZWRpdCA9PT0gdm9pZCAwIHx8IFdvcmtzcGFjZUVkaXQuaXMoY2FuZGlkYXRlLmVkaXQpKTtcclxuICAgIH1cclxuICAgIENvZGVBY3Rpb24uaXMgPSBpcztcclxufSkoQ29kZUFjdGlvbiB8fCAoQ29kZUFjdGlvbiA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgQ29kZUxlbnMgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtDb2RlTGVuc10oI0NvZGVMZW5zKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29kZUxlbnM7XHJcbihmdW5jdGlvbiAoQ29kZUxlbnMpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBDb2RlTGVucyBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUocmFuZ2UsIGRhdGEpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0geyByYW5nZTogcmFuZ2UgfTtcclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChkYXRhKSlcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBDb2RlTGVucy5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbQ29kZUxlbnNdKCNDb2RlTGVucykgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIFJhbmdlLmlzKGNhbmRpZGF0ZS5yYW5nZSkgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUuY29tbWFuZCkgfHwgQ29tbWFuZC5pcyhjYW5kaWRhdGUuY29tbWFuZCkpO1xyXG4gICAgfVxyXG4gICAgQ29kZUxlbnMuaXMgPSBpcztcclxufSkoQ29kZUxlbnMgfHwgKENvZGVMZW5zID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBGb3JtYXR0aW5nT3B0aW9ucyBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0Zvcm1hdHRpbmdPcHRpb25zXSgjRm9ybWF0dGluZ09wdGlvbnMpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBGb3JtYXR0aW5nT3B0aW9ucztcclxuKGZ1bmN0aW9uIChGb3JtYXR0aW5nT3B0aW9ucykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IEZvcm1hdHRpbmdPcHRpb25zIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0YWJTaXplLCBpbnNlcnRTcGFjZXMpIHtcclxuICAgICAgICByZXR1cm4geyB0YWJTaXplOiB0YWJTaXplLCBpbnNlcnRTcGFjZXM6IGluc2VydFNwYWNlcyB9O1xyXG4gICAgfVxyXG4gICAgRm9ybWF0dGluZ09wdGlvbnMuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0Zvcm1hdHRpbmdPcHRpb25zXSgjRm9ybWF0dGluZ09wdGlvbnMpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLnRhYlNpemUpICYmIElzLmJvb2xlYW4oY2FuZGlkYXRlLmluc2VydFNwYWNlcyk7XHJcbiAgICB9XHJcbiAgICBGb3JtYXR0aW5nT3B0aW9ucy5pcyA9IGlzO1xyXG59KShGb3JtYXR0aW5nT3B0aW9ucyB8fCAoRm9ybWF0dGluZ09wdGlvbnMgPSB7fSkpO1xyXG4vKipcclxuICogQSBkb2N1bWVudCBsaW5rIGlzIGEgcmFuZ2UgaW4gYSB0ZXh0IGRvY3VtZW50IHRoYXQgbGlua3MgdG8gYW4gaW50ZXJuYWwgb3IgZXh0ZXJuYWwgcmVzb3VyY2UsIGxpa2UgYW5vdGhlclxyXG4gKiB0ZXh0IGRvY3VtZW50IG9yIGEgd2ViIHNpdGUuXHJcbiAqL1xyXG52YXIgRG9jdW1lbnRMaW5rID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRG9jdW1lbnRMaW5rKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIERvY3VtZW50TGluaztcclxufSgpKTtcclxuZXhwb3J0IHsgRG9jdW1lbnRMaW5rIH07XHJcbi8qKlxyXG4gKiBUaGUgRG9jdW1lbnRMaW5rIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbRG9jdW1lbnRMaW5rXSgjRG9jdW1lbnRMaW5rKSBsaXRlcmFscy5cclxuICovXHJcbihmdW5jdGlvbiAoRG9jdW1lbnRMaW5rKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgRG9jdW1lbnRMaW5rIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShyYW5nZSwgdGFyZ2V0LCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgcmFuZ2U6IHJhbmdlLCB0YXJnZXQ6IHRhcmdldCwgZGF0YTogZGF0YSB9O1xyXG4gICAgfVxyXG4gICAgRG9jdW1lbnRMaW5rLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtEb2N1bWVudExpbmtdKCNEb2N1bWVudExpbmspIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLnRhcmdldCkgfHwgSXMuc3RyaW5nKGNhbmRpZGF0ZS50YXJnZXQpKTtcclxuICAgIH1cclxuICAgIERvY3VtZW50TGluay5pcyA9IGlzO1xyXG59KShEb2N1bWVudExpbmsgfHwgKERvY3VtZW50TGluayA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgRU9MID0gWydcXG4nLCAnXFxyXFxuJywgJ1xcciddO1xyXG5leHBvcnQgdmFyIFRleHREb2N1bWVudDtcclxuKGZ1bmN0aW9uIChUZXh0RG9jdW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBJVGV4dERvY3VtZW50IGxpdGVyYWwgZnJvbSB0aGUgZ2l2ZW4gdXJpIGFuZCBjb250ZW50LlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgZG9jdW1lbnQncyB1cmkuXHJcbiAgICAgKiBAcGFyYW0gbGFuZ3VhZ2VJZCAgVGhlIGRvY3VtZW50J3MgbGFuZ3VhZ2UgSWQuXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCBUaGUgZG9jdW1lbnQncyBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodXJpLCBsYW5ndWFnZUlkLCB2ZXJzaW9uLCBjb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGdWxsVGV4dERvY3VtZW50KHVyaSwgbGFuZ3VhZ2VJZCwgdmVyc2lvbiwgY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnQuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0lUZXh0RG9jdW1lbnRdKCNJVGV4dERvY3VtZW50KSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLmxhbmd1YWdlSWQpIHx8IElzLnN0cmluZyhjYW5kaWRhdGUubGFuZ3VhZ2VJZCkpICYmIElzLm51bWJlcihjYW5kaWRhdGUubGluZUNvdW50KVxyXG4gICAgICAgICAgICAmJiBJcy5mdW5jKGNhbmRpZGF0ZS5nZXRUZXh0KSAmJiBJcy5mdW5jKGNhbmRpZGF0ZS5wb3NpdGlvbkF0KSAmJiBJcy5mdW5jKGNhbmRpZGF0ZS5vZmZzZXRBdCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnQuaXMgPSBpcztcclxuICAgIGZ1bmN0aW9uIGFwcGx5RWRpdHMoZG9jdW1lbnQsIGVkaXRzKSB7XHJcbiAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5nZXRUZXh0KCk7XHJcbiAgICAgICAgdmFyIHNvcnRlZEVkaXRzID0gbWVyZ2VTb3J0KGVkaXRzLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICB2YXIgZGlmZiA9IGEucmFuZ2Uuc3RhcnQubGluZSAtIGIucmFuZ2Uuc3RhcnQubGluZTtcclxuICAgICAgICAgICAgaWYgKGRpZmYgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLnJhbmdlLnN0YXJ0LmNoYXJhY3RlciAtIGIucmFuZ2Uuc3RhcnQuY2hhcmFjdGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBsYXN0TW9kaWZpZWRPZmZzZXQgPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gc29ydGVkRWRpdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIGUgPSBzb3J0ZWRFZGl0c1tpXTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0T2Zmc2V0ID0gZG9jdW1lbnQub2Zmc2V0QXQoZS5yYW5nZS5zdGFydCk7XHJcbiAgICAgICAgICAgIHZhciBlbmRPZmZzZXQgPSBkb2N1bWVudC5vZmZzZXRBdChlLnJhbmdlLmVuZCk7XHJcbiAgICAgICAgICAgIGlmIChlbmRPZmZzZXQgPD0gbGFzdE1vZGlmaWVkT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgc3RhcnRPZmZzZXQpICsgZS5uZXdUZXh0ICsgdGV4dC5zdWJzdHJpbmcoZW5kT2Zmc2V0LCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ092ZXJsYXBwaW5nIGVkaXQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0TW9kaWZpZWRPZmZzZXQgPSBzdGFydE9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnQuYXBwbHlFZGl0cyA9IGFwcGx5RWRpdHM7XHJcbiAgICBmdW5jdGlvbiBtZXJnZVNvcnQoZGF0YSwgY29tcGFyZSkge1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHNvcnRlZFxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHAgPSAoZGF0YS5sZW5ndGggLyAyKSB8IDA7XHJcbiAgICAgICAgdmFyIGxlZnQgPSBkYXRhLnNsaWNlKDAsIHApO1xyXG4gICAgICAgIHZhciByaWdodCA9IGRhdGEuc2xpY2UocCk7XHJcbiAgICAgICAgbWVyZ2VTb3J0KGxlZnQsIGNvbXBhcmUpO1xyXG4gICAgICAgIG1lcmdlU29ydChyaWdodCwgY29tcGFyZSk7XHJcbiAgICAgICAgdmFyIGxlZnRJZHggPSAwO1xyXG4gICAgICAgIHZhciByaWdodElkeCA9IDA7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChsZWZ0SWR4IDwgbGVmdC5sZW5ndGggJiYgcmlnaHRJZHggPCByaWdodC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHJldCA9IGNvbXBhcmUobGVmdFtsZWZ0SWR4XSwgcmlnaHRbcmlnaHRJZHhdKTtcclxuICAgICAgICAgICAgaWYgKHJldCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzbWFsbGVyX2VxdWFsIC0+IHRha2UgbGVmdCB0byBwcmVzZXJ2ZSBvcmRlclxyXG4gICAgICAgICAgICAgICAgZGF0YVtpKytdID0gbGVmdFtsZWZ0SWR4KytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZ3JlYXRlciAtPiB0YWtlIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICBkYXRhW2krK10gPSByaWdodFtyaWdodElkeCsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAobGVmdElkeCA8IGxlZnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRhdGFbaSsrXSA9IGxlZnRbbGVmdElkeCsrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHJpZ2h0SWR4IDwgcmlnaHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRhdGFbaSsrXSA9IHJpZ2h0W3JpZ2h0SWR4KytdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufSkoVGV4dERvY3VtZW50IHx8IChUZXh0RG9jdW1lbnQgPSB7fSkpO1xyXG4vKipcclxuICogUmVwcmVzZW50cyByZWFzb25zIHdoeSBhIHRleHQgZG9jdW1lbnQgaXMgc2F2ZWQuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFRleHREb2N1bWVudFNhdmVSZWFzb247XHJcbihmdW5jdGlvbiAoVGV4dERvY3VtZW50U2F2ZVJlYXNvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYW51YWxseSB0cmlnZ2VyZWQsIGUuZy4gYnkgdGhlIHVzZXIgcHJlc3Npbmcgc2F2ZSwgYnkgc3RhcnRpbmcgZGVidWdnaW5nLFxyXG4gICAgICogb3IgYnkgYW4gQVBJIGNhbGwuXHJcbiAgICAgKi9cclxuICAgIFRleHREb2N1bWVudFNhdmVSZWFzb24uTWFudWFsID0gMTtcclxuICAgIC8qKlxyXG4gICAgICogQXV0b21hdGljIGFmdGVyIGEgZGVsYXkuXHJcbiAgICAgKi9cclxuICAgIFRleHREb2N1bWVudFNhdmVSZWFzb24uQWZ0ZXJEZWxheSA9IDI7XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdGhlIGVkaXRvciBsb3N0IGZvY3VzLlxyXG4gICAgICovXHJcbiAgICBUZXh0RG9jdW1lbnRTYXZlUmVhc29uLkZvY3VzT3V0ID0gMztcclxufSkoVGV4dERvY3VtZW50U2F2ZVJlYXNvbiB8fCAoVGV4dERvY3VtZW50U2F2ZVJlYXNvbiA9IHt9KSk7XHJcbnZhciBGdWxsVGV4dERvY3VtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRnVsbFRleHREb2N1bWVudCh1cmksIGxhbmd1YWdlSWQsIHZlcnNpb24sIGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLl91cmkgPSB1cmk7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VJZCA9IGxhbmd1YWdlSWQ7XHJcbiAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICAgICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5fbGluZU9mZnNldHMgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLCBcInVyaVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVsbFRleHREb2N1bWVudC5wcm90b3R5cGUsIFwibGFuZ3VhZ2VJZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUlkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLCBcInZlcnNpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLmdldFRleHQgPSBmdW5jdGlvbiAocmFuZ2UpIHtcclxuICAgICAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5vZmZzZXRBdChyYW5nZS5zdGFydCk7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSB0aGlzLm9mZnNldEF0KHJhbmdlLmVuZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50LnN1YnN0cmluZyhzdGFydCwgZW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XHJcbiAgICB9O1xyXG4gICAgRnVsbFRleHREb2N1bWVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGV2ZW50LCB2ZXJzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGVudCA9IGV2ZW50LnRleHQ7XHJcbiAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICAgICAgdGhpcy5fbGluZU9mZnNldHMgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLmdldExpbmVPZmZzZXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9saW5lT2Zmc2V0cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgbGluZU9mZnNldHMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSB0aGlzLl9jb250ZW50O1xyXG4gICAgICAgICAgICB2YXIgaXNMaW5lU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0xpbmVTdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVPZmZzZXRzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNMaW5lU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBjaCA9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICAgICAgaXNMaW5lU3RhcnQgPSAoY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFxuJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICdcXHInICYmIGkgKyAxIDwgdGV4dC5sZW5ndGggJiYgdGV4dC5jaGFyQXQoaSArIDEpID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNMaW5lU3RhcnQgJiYgdGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lT2Zmc2V0cy5wdXNoKHRleHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9saW5lT2Zmc2V0cyA9IGxpbmVPZmZzZXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fbGluZU9mZnNldHM7XHJcbiAgICB9O1xyXG4gICAgRnVsbFRleHREb2N1bWVudC5wcm90b3R5cGUucG9zaXRpb25BdCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcclxuICAgICAgICBvZmZzZXQgPSBNYXRoLm1heChNYXRoLm1pbihvZmZzZXQsIHRoaXMuX2NvbnRlbnQubGVuZ3RoKSwgMCk7XHJcbiAgICAgICAgdmFyIGxpbmVPZmZzZXRzID0gdGhpcy5nZXRMaW5lT2Zmc2V0cygpO1xyXG4gICAgICAgIHZhciBsb3cgPSAwLCBoaWdoID0gbGluZU9mZnNldHMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChoaWdoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3NpdGlvbi5jcmVhdGUoMCwgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcclxuICAgICAgICAgICAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XHJcbiAgICAgICAgICAgIGlmIChsaW5lT2Zmc2V0c1ttaWRdID4gb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBoaWdoID0gbWlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG93ID0gbWlkICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsb3cgaXMgdGhlIGxlYXN0IHggZm9yIHdoaWNoIHRoZSBsaW5lIG9mZnNldCBpcyBsYXJnZXIgdGhhbiB0aGUgY3VycmVudCBvZmZzZXRcclxuICAgICAgICAvLyBvciBhcnJheS5sZW5ndGggaWYgbm8gbGluZSBvZmZzZXQgaXMgbGFyZ2VyIHRoYW4gdGhlIGN1cnJlbnQgb2Zmc2V0XHJcbiAgICAgICAgdmFyIGxpbmUgPSBsb3cgLSAxO1xyXG4gICAgICAgIHJldHVybiBQb3NpdGlvbi5jcmVhdGUobGluZSwgb2Zmc2V0IC0gbGluZU9mZnNldHNbbGluZV0pO1xyXG4gICAgfTtcclxuICAgIEZ1bGxUZXh0RG9jdW1lbnQucHJvdG90eXBlLm9mZnNldEF0ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIGxpbmVPZmZzZXRzID0gdGhpcy5nZXRMaW5lT2Zmc2V0cygpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbi5saW5lID49IGxpbmVPZmZzZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBvc2l0aW9uLmxpbmUgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGluZU9mZnNldCA9IGxpbmVPZmZzZXRzW3Bvc2l0aW9uLmxpbmVdO1xyXG4gICAgICAgIHZhciBuZXh0TGluZU9mZnNldCA9IChwb3NpdGlvbi5saW5lICsgMSA8IGxpbmVPZmZzZXRzLmxlbmd0aCkgPyBsaW5lT2Zmc2V0c1twb3NpdGlvbi5saW5lICsgMV0gOiB0aGlzLl9jb250ZW50Lmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obGluZU9mZnNldCArIHBvc2l0aW9uLmNoYXJhY3RlciwgbmV4dExpbmVPZmZzZXQpLCBsaW5lT2Zmc2V0KTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVsbFRleHREb2N1bWVudC5wcm90b3R5cGUsIFwibGluZUNvdW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGluZU9mZnNldHMoKS5sZW5ndGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gRnVsbFRleHREb2N1bWVudDtcclxufSgpKTtcclxudmFyIElzO1xyXG4oZnVuY3Rpb24gKElzKSB7XHJcbiAgICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG4gICAgZnVuY3Rpb24gZGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgfVxyXG4gICAgSXMuZGVmaW5lZCA9IGRlZmluZWQ7XHJcbiAgICBmdW5jdGlvbiB1bmRlZmluZWQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcclxuICAgIH1cclxuICAgIElzLnVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIGZ1bmN0aW9uIGJvb2xlYW4odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgSXMuYm9vbGVhbiA9IGJvb2xlYW47XHJcbiAgICBmdW5jdGlvbiBzdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xyXG4gICAgfVxyXG4gICAgSXMuc3RyaW5nID0gc3RyaW5nO1xyXG4gICAgZnVuY3Rpb24gbnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBOdW1iZXJdJztcclxuICAgIH1cclxuICAgIElzLm51bWJlciA9IG51bWJlcjtcclxuICAgIGZ1bmN0aW9uIGZ1bmModmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcbiAgICBJcy5mdW5jID0gZnVuYztcclxuICAgIGZ1bmN0aW9uIG9iamVjdExpdGVyYWwodmFsdWUpIHtcclxuICAgICAgICAvLyBTdHJpY3RseSBzcGVha2luZyBjbGFzcyBpbnN0YW5jZXMgcGFzcyB0aGlzIGNoZWNrIGFzIHdlbGwuIFNpbmNlIHRoZSBMU1BcclxuICAgICAgICAvLyBkb2Vzbid0IHVzZSBjbGFzc2VzIHdlIGlnbm9yZSB0aGlzIGZvciBub3cuIElmIHdlIGRvIHdlIG5lZWQgdG8gYWRkIHNvbWV0aGluZ1xyXG4gICAgICAgIC8vIGxpa2UgdGhpczogYE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCkpID09PSBudWxsYFxyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG4gICAgfVxyXG4gICAgSXMub2JqZWN0TGl0ZXJhbCA9IG9iamVjdExpdGVyYWw7XHJcbiAgICBmdW5jdGlvbiB0eXBlZEFycmF5KHZhbHVlLCBjaGVjaykge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeShjaGVjayk7XHJcbiAgICB9XHJcbiAgICBJcy50eXBlZEFycmF5ID0gdHlwZWRBcnJheTtcclxufSkoSXMgfHwgKElzID0ge30pKTtcclxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBXb3JrZXJNYW5hZ2VyIH0gZnJvbSAnLi93b3JrZXJNYW5hZ2VyLmpzJztcbmltcG9ydCAqIGFzIGxhbmd1YWdlRmVhdHVyZXMgZnJvbSAnLi9sYW5ndWFnZUZlYXR1cmVzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE1vZGUoZGVmYXVsdHMpIHtcbiAgICB2YXIgY2xpZW50ID0gbmV3IFdvcmtlck1hbmFnZXIoZGVmYXVsdHMpO1xuICAgIHZhciB3b3JrZXIgPSBmdW5jdGlvbiAoZmlyc3QpIHtcbiAgICAgICAgdmFyIG1vcmUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1vcmVbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsaWVudC5nZXRMYW5ndWFnZVNlcnZpY2VXb3JrZXIuYXBwbHkoY2xpZW50LCBbZmlyc3RdLmNvbmNhdChtb3JlKSk7XG4gICAgfTtcbiAgICB2YXIgbGFuZ3VhZ2VJZCA9IGRlZmF1bHRzLmxhbmd1YWdlSWQ7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuQ29tcGxldGlvbkFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckhvdmVyUHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuSG92ZXJBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudEhpZ2hsaWdodFByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkRvY3VtZW50SGlnaGxpZ2h0QWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRGVmaW5pdGlvblByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkRlZmluaXRpb25BZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJSZWZlcmVuY2VQcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5SZWZlcmVuY2VBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudFN5bWJvbFByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkRvY3VtZW50U3ltYm9sQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyUmVuYW1lUHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuUmVuYW1lQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyQ29sb3JQcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Eb2N1bWVudENvbG9yQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRm9sZGluZ1JhbmdlUHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRm9sZGluZ1JhbmdlQWRhcHRlcih3b3JrZXIpKTtcbiAgICBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5EaWFnbm9zdGljc0FkYXB0ZXIobGFuZ3VhZ2VJZCwgd29ya2VyLCBkZWZhdWx0cyk7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIGxzIGZyb20gJy4vX2RlcHMvdnNjb2RlLWxhbmd1YWdlc2VydmVyLXR5cGVzL21haW4uanMnO1xudmFyIFVyaSA9IG1vbmFjby5Vcmk7XG52YXIgUmFuZ2UgPSBtb25hY28uUmFuZ2U7XG4vLyAtLS0gZGlhZ25vc3RpY3MgLS0tIC0tLVxudmFyIERpYWdub3N0aWNzQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaWFnbm9zdGljc0FkYXB0ZXIoX2xhbmd1YWdlSWQsIF93b3JrZXIsIGRlZmF1bHRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2xhbmd1YWdlSWQgPSBfbGFuZ3VhZ2VJZDtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgb25Nb2RlbEFkZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIG1vZGVJZCA9IG1vZGVsLmdldE1vZGVJZCgpO1xuICAgICAgICAgICAgaWYgKG1vZGVJZCAhPT0gX3RoaXMuX2xhbmd1YWdlSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW21vZGVsLnVyaS50b1N0cmluZygpXSA9IG1vZGVsLm9uRGlkQ2hhbmdlQ29udGVudChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fZG9WYWxpZGF0ZShtb2RlbC51cmksIG1vZGVJZCk7IH0sIDUwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLl9kb1ZhbGlkYXRlKG1vZGVsLnVyaSwgbW9kZUlkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uTW9kZWxSZW1vdmVkID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICBtb25hY28uZWRpdG9yLnNldE1vZGVsTWFya2Vycyhtb2RlbCwgX3RoaXMuX2xhbmd1YWdlSWQsIFtdKTtcbiAgICAgICAgICAgIHZhciB1cmlTdHIgPSBtb2RlbC51cmkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IF90aGlzLl9saXN0ZW5lclt1cmlTdHJdO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5fbGlzdGVuZXJbdXJpU3RyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMucHVzaChtb25hY28uZWRpdG9yLm9uRGlkQ3JlYXRlTW9kZWwob25Nb2RlbEFkZCkpO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5wdXNoKG1vbmFjby5lZGl0b3Iub25XaWxsRGlzcG9zZU1vZGVsKG9uTW9kZWxSZW1vdmVkKSk7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzLnB1c2gobW9uYWNvLmVkaXRvci5vbkRpZENoYW5nZU1vZGVsTGFuZ3VhZ2UoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBvbk1vZGVsUmVtb3ZlZChldmVudC5tb2RlbCk7XG4gICAgICAgICAgICBvbk1vZGVsQWRkKGV2ZW50Lm1vZGVsKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBkZWZhdWx0cy5vbkRpZENoYW5nZShmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbC5nZXRNb2RlSWQoKSA9PT0gX3RoaXMuX2xhbmd1YWdlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICBvbk1vZGVsQWRkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzLnB1c2goe1xuICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBfdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW2tleV0uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCkuZm9yRWFjaChvbk1vZGVsQWRkKTtcbiAgICB9XG4gICAgRGlhZ25vc3RpY3NBZGFwdGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkICYmIGQuZGlzcG9zZSgpOyB9KTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMgPSBbXTtcbiAgICB9O1xuICAgIERpYWdub3N0aWNzQWRhcHRlci5wcm90b3R5cGUuX2RvVmFsaWRhdGUgPSBmdW5jdGlvbiAocmVzb3VyY2UsIGxhbmd1YWdlSWQpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZG9WYWxpZGF0aW9uKHJlc291cmNlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkaWFnbm9zdGljcykge1xuICAgICAgICAgICAgdmFyIG1hcmtlcnMgPSBkaWFnbm9zdGljcy5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHRvRGlhZ25vc3RpY3MocmVzb3VyY2UsIGQpOyB9KTtcbiAgICAgICAgICAgIHZhciBtb2RlbCA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwocmVzb3VyY2UpO1xuICAgICAgICAgICAgaWYgKG1vZGVsLmdldE1vZGVJZCgpID09PSBsYW5ndWFnZUlkKSB7XG4gICAgICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9kZWwsIGxhbmd1YWdlSWQsIG1hcmtlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEaWFnbm9zdGljc0FkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgRGlhZ25vc3RpY3NBZGFwdGVyIH07XG5mdW5jdGlvbiB0b1NldmVyaXR5KGxzU2V2ZXJpdHkpIHtcbiAgICBzd2l0Y2ggKGxzU2V2ZXJpdHkpIHtcbiAgICAgICAgY2FzZSBscy5EaWFnbm9zdGljU2V2ZXJpdHkuRXJyb3I6IHJldHVybiBtb25hY28uTWFya2VyU2V2ZXJpdHkuRXJyb3I7XG4gICAgICAgIGNhc2UgbHMuRGlhZ25vc3RpY1NldmVyaXR5Lldhcm5pbmc6IHJldHVybiBtb25hY28uTWFya2VyU2V2ZXJpdHkuV2FybmluZztcbiAgICAgICAgY2FzZSBscy5EaWFnbm9zdGljU2V2ZXJpdHkuSW5mb3JtYXRpb246IHJldHVybiBtb25hY28uTWFya2VyU2V2ZXJpdHkuSW5mbztcbiAgICAgICAgY2FzZSBscy5EaWFnbm9zdGljU2V2ZXJpdHkuSGludDogcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5IaW50O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5JbmZvO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRvRGlhZ25vc3RpY3MocmVzb3VyY2UsIGRpYWcpIHtcbiAgICB2YXIgY29kZSA9IHR5cGVvZiBkaWFnLmNvZGUgPT09ICdudW1iZXInID8gU3RyaW5nKGRpYWcuY29kZSkgOiBkaWFnLmNvZGU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V2ZXJpdHk6IHRvU2V2ZXJpdHkoZGlhZy5zZXZlcml0eSksXG4gICAgICAgIHN0YXJ0TGluZU51bWJlcjogZGlhZy5yYW5nZS5zdGFydC5saW5lICsgMSxcbiAgICAgICAgc3RhcnRDb2x1bW46IGRpYWcucmFuZ2Uuc3RhcnQuY2hhcmFjdGVyICsgMSxcbiAgICAgICAgZW5kTGluZU51bWJlcjogZGlhZy5yYW5nZS5lbmQubGluZSArIDEsXG4gICAgICAgIGVuZENvbHVtbjogZGlhZy5yYW5nZS5lbmQuY2hhcmFjdGVyICsgMSxcbiAgICAgICAgbWVzc2FnZTogZGlhZy5tZXNzYWdlLFxuICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICBzb3VyY2U6IGRpYWcuc291cmNlXG4gICAgfTtcbn1cbi8vIC0tLSBjb21wbGV0aW9uIC0tLS0tLVxuZnVuY3Rpb24gZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgaWYgKCFwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4geyBjaGFyYWN0ZXI6IHBvc2l0aW9uLmNvbHVtbiAtIDEsIGxpbmU6IHBvc2l0aW9uLmxpbmVOdW1iZXIgLSAxIH07XG59XG5mdW5jdGlvbiBmcm9tUmFuZ2UocmFuZ2UpIHtcbiAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiB7IHN0YXJ0OiB7IGxpbmU6IHJhbmdlLnN0YXJ0TGluZU51bWJlciAtIDEsIGNoYXJhY3RlcjogcmFuZ2Uuc3RhcnRDb2x1bW4gLSAxIH0sIGVuZDogeyBsaW5lOiByYW5nZS5lbmRMaW5lTnVtYmVyIC0gMSwgY2hhcmFjdGVyOiByYW5nZS5lbmRDb2x1bW4gLSAxIH0gfTtcbn1cbmZ1bmN0aW9uIHRvUmFuZ2UocmFuZ2UpIHtcbiAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiBuZXcgbW9uYWNvLlJhbmdlKHJhbmdlLnN0YXJ0LmxpbmUgKyAxLCByYW5nZS5zdGFydC5jaGFyYWN0ZXIgKyAxLCByYW5nZS5lbmQubGluZSArIDEsIHJhbmdlLmVuZC5jaGFyYWN0ZXIgKyAxKTtcbn1cbmZ1bmN0aW9uIHRvQ29tcGxldGlvbkl0ZW1LaW5kKGtpbmQpIHtcbiAgICB2YXIgbUl0ZW1LaW5kID0gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQ7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlRleHQ6IHJldHVybiBtSXRlbUtpbmQuVGV4dDtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuTWV0aG9kOiByZXR1cm4gbUl0ZW1LaW5kLk1ldGhvZDtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuRnVuY3Rpb246IHJldHVybiBtSXRlbUtpbmQuRnVuY3Rpb247XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkNvbnN0cnVjdG9yOiByZXR1cm4gbUl0ZW1LaW5kLkNvbnN0cnVjdG9yO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5GaWVsZDogcmV0dXJuIG1JdGVtS2luZC5GaWVsZDtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuVmFyaWFibGU6IHJldHVybiBtSXRlbUtpbmQuVmFyaWFibGU7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkNsYXNzOiByZXR1cm4gbUl0ZW1LaW5kLkNsYXNzO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5JbnRlcmZhY2U6IHJldHVybiBtSXRlbUtpbmQuSW50ZXJmYWNlO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Nb2R1bGU6IHJldHVybiBtSXRlbUtpbmQuTW9kdWxlO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Qcm9wZXJ0eTogcmV0dXJuIG1JdGVtS2luZC5Qcm9wZXJ0eTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuVW5pdDogcmV0dXJuIG1JdGVtS2luZC5Vbml0O1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5WYWx1ZTogcmV0dXJuIG1JdGVtS2luZC5WYWx1ZTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuRW51bTogcmV0dXJuIG1JdGVtS2luZC5FbnVtO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5LZXl3b3JkOiByZXR1cm4gbUl0ZW1LaW5kLktleXdvcmQ7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlNuaXBwZXQ6IHJldHVybiBtSXRlbUtpbmQuU25pcHBldDtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuQ29sb3I6IHJldHVybiBtSXRlbUtpbmQuQ29sb3I7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkZpbGU6IHJldHVybiBtSXRlbUtpbmQuRmlsZTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuUmVmZXJlbmNlOiByZXR1cm4gbUl0ZW1LaW5kLlJlZmVyZW5jZTtcbiAgICB9XG4gICAgcmV0dXJuIG1JdGVtS2luZC5Qcm9wZXJ0eTtcbn1cbmZ1bmN0aW9uIHRvVGV4dEVkaXQodGV4dEVkaXQpIHtcbiAgICBpZiAoIXRleHRFZGl0KSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJhbmdlOiB0b1JhbmdlKHRleHRFZGl0LnJhbmdlKSxcbiAgICAgICAgdGV4dDogdGV4dEVkaXQubmV3VGV4dFxuICAgIH07XG59XG52YXIgQ29tcGxldGlvbkFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tcGxldGlvbkFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcGxldGlvbkFkYXB0ZXIucHJvdG90eXBlLCBcInRyaWdnZXJDaGFyYWN0ZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gWycgJywgJzonXTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ29tcGxldGlvbkFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVDb21wbGV0aW9uSXRlbXMgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCBjb250ZXh0LCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5kb0NvbXBsZXRlKHJlc291cmNlLnRvU3RyaW5nKCksIGZyb21Qb3NpdGlvbihwb3NpdGlvbikpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgd29yZEluZm8gPSBtb2RlbC5nZXRXb3JkVW50aWxQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgICAgICB2YXIgd29yZFJhbmdlID0gbmV3IFJhbmdlKHBvc2l0aW9uLmxpbmVOdW1iZXIsIHdvcmRJbmZvLnN0YXJ0Q29sdW1uLCBwb3NpdGlvbi5saW5lTnVtYmVyLCB3b3JkSW5mby5lbmRDb2x1bW4pO1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gaW5mby5pdGVtcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBlbnRyeS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogZW50cnkuaW5zZXJ0VGV4dCB8fCBlbnRyeS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgc29ydFRleHQ6IGVudHJ5LnNvcnRUZXh0LFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUZXh0OiBlbnRyeS5maWx0ZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudGF0aW9uOiBlbnRyeS5kb2N1bWVudGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGVudHJ5LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHdvcmRSYW5nZSxcbiAgICAgICAgICAgICAgICAgICAga2luZDogdG9Db21wbGV0aW9uSXRlbUtpbmQoZW50cnkua2luZCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkudGV4dEVkaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yYW5nZSA9IHRvUmFuZ2UoZW50cnkudGV4dEVkaXQucmFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmluc2VydFRleHQgPSBlbnRyeS50ZXh0RWRpdC5uZXdUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuYWRkaXRpb25hbFRleHRFZGl0cykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZGl0aW9uYWxUZXh0RWRpdHMgPSBlbnRyeS5hZGRpdGlvbmFsVGV4dEVkaXRzLm1hcCh0b1RleHRFZGl0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5Lmluc2VydFRleHRGb3JtYXQgPT09IGxzLkluc2VydFRleHRGb3JtYXQuU25pcHBldCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmluc2VydFRleHRSdWxlcyA9IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZS5JbnNlcnRBc1NuaXBwZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzSW5jb21wbGV0ZTogaW5mby5pc0luY29tcGxldGUsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IGl0ZW1zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb21wbGV0aW9uQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBDb21wbGV0aW9uQWRhcHRlciB9O1xuZnVuY3Rpb24gaXNNYXJrdXBDb250ZW50KHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHRoaW5nLmtpbmQgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gdG9NYXJrZG93blN0cmluZyhlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogZW50cnlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGlzTWFya3VwQ29udGVudChlbnRyeSkpIHtcbiAgICAgICAgaWYgKGVudHJ5LmtpbmQgPT09ICdwbGFpbnRleHQnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbnRyeS52YWx1ZS5yZXBsYWNlKC9bXFxcXGAqX3t9W1xcXSgpIytcXC0uIV0vZywgJ1xcXFwkJicpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogZW50cnkudmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICdgYGAnICsgZW50cnkubGFuZ3VhZ2UgKyAnXFxuJyArIGVudHJ5LnZhbHVlICsgJ1xcbmBgYFxcbicgfTtcbn1cbmZ1bmN0aW9uIHRvTWFya2VkU3RyaW5nQXJyYXkoY29udGVudHMpIHtcbiAgICBpZiAoIWNvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnRzKSkge1xuICAgICAgICByZXR1cm4gY29udGVudHMubWFwKHRvTWFya2Rvd25TdHJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gW3RvTWFya2Rvd25TdHJpbmcoY29udGVudHMpXTtcbn1cbi8vIC0tLSBob3ZlciAtLS0tLS1cbnZhciBIb3ZlckFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSG92ZXJBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgSG92ZXJBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlSG92ZXIgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5kb0hvdmVyKHJlc291cmNlLnRvU3RyaW5nKCksIGZyb21Qb3NpdGlvbihwb3NpdGlvbikpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJhbmdlOiB0b1JhbmdlKGluZm8ucmFuZ2UpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiB0b01hcmtlZFN0cmluZ0FycmF5KGluZm8uY29udGVudHMpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBIb3ZlckFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgSG92ZXJBZGFwdGVyIH07XG4vLyAtLS0gZG9jdW1lbnQgaGlnaGxpZ2h0cyAtLS0tLS1cbmZ1bmN0aW9uIHRvRG9jdW1lbnRIaWdobGlnaHRLaW5kKGtpbmQpIHtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgY2FzZSBscy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuUmVhZDogcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLlJlYWQ7XG4gICAgICAgIGNhc2UgbHMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLldyaXRlOiByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuV3JpdGU7XG4gICAgICAgIGNhc2UgbHMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLlRleHQ6IHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkRvY3VtZW50SGlnaGxpZ2h0S2luZC5UZXh0O1xuICAgIH1cbiAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuVGV4dDtcbn1cbnZhciBEb2N1bWVudEhpZ2hsaWdodEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRIaWdobGlnaHRBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRG9jdW1lbnRIaWdobGlnaHRBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRIaWdobGlnaHRzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZmluZERvY3VtZW50SGlnaGxpZ2h0cyhyZXNvdXJjZS50b1N0cmluZygpLCBmcm9tUG9zaXRpb24ocG9zaXRpb24pKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgaWYgKCFlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0b1JhbmdlKGVudHJ5LnJhbmdlKSxcbiAgICAgICAgICAgICAgICAgICAga2luZDogdG9Eb2N1bWVudEhpZ2hsaWdodEtpbmQoZW50cnkua2luZClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERvY3VtZW50SGlnaGxpZ2h0QWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBEb2N1bWVudEhpZ2hsaWdodEFkYXB0ZXIgfTtcbi8vIC0tLSBkZWZpbml0aW9uIC0tLS0tLVxuZnVuY3Rpb24gdG9Mb2NhdGlvbihsb2NhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVyaTogVXJpLnBhcnNlKGxvY2F0aW9uLnVyaSksXG4gICAgICAgIHJhbmdlOiB0b1JhbmdlKGxvY2F0aW9uLnJhbmdlKVxuICAgIH07XG59XG52YXIgRGVmaW5pdGlvbkFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVmaW5pdGlvbkFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBEZWZpbml0aW9uQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURlZmluaXRpb24gPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5maW5kRGVmaW5pdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBmcm9tUG9zaXRpb24ocG9zaXRpb24pKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFt0b0xvY2F0aW9uKGRlZmluaXRpb24pXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVmaW5pdGlvbkFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgRGVmaW5pdGlvbkFkYXB0ZXIgfTtcbi8vIC0tLSByZWZlcmVuY2VzIC0tLS0tLVxudmFyIFJlZmVyZW5jZUFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVmZXJlbmNlQWRhcHRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIFJlZmVyZW5jZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVSZWZlcmVuY2VzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY29udGV4dCwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZmluZFJlZmVyZW5jZXMocmVzb3VyY2UudG9TdHJpbmcoKSwgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICghZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLm1hcCh0b0xvY2F0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVmZXJlbmNlQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBSZWZlcmVuY2VBZGFwdGVyIH07XG4vLyAtLS0gcmVuYW1lIC0tLS0tLVxuZnVuY3Rpb24gdG9Xb3Jrc3BhY2VFZGl0KGVkaXQpIHtcbiAgICBpZiAoIWVkaXQgfHwgIWVkaXQuY2hhbmdlcykge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICB2YXIgcmVzb3VyY2VFZGl0cyA9IFtdO1xuICAgIGZvciAodmFyIHVyaSBpbiBlZGl0LmNoYW5nZXMpIHtcbiAgICAgICAgdmFyIGVkaXRzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBlZGl0LmNoYW5nZXNbdXJpXTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBlID0gX2FbX2ldO1xuICAgICAgICAgICAgZWRpdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IHRvUmFuZ2UoZS5yYW5nZSksXG4gICAgICAgICAgICAgICAgdGV4dDogZS5uZXdUZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXNvdXJjZUVkaXRzLnB1c2goeyByZXNvdXJjZTogVXJpLnBhcnNlKHVyaSksIGVkaXRzOiBlZGl0cyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRpdHM6IHJlc291cmNlRWRpdHNcbiAgICB9O1xufVxudmFyIFJlbmFtZUFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVuYW1lQWRhcHRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIFJlbmFtZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVSZW5hbWVFZGl0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIG5ld05hbWUsIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmRvUmVuYW1lKHJlc291cmNlLnRvU3RyaW5nKCksIGZyb21Qb3NpdGlvbihwb3NpdGlvbiksIG5ld05hbWUpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChlZGl0KSB7XG4gICAgICAgICAgICByZXR1cm4gdG9Xb3Jrc3BhY2VFZGl0KGVkaXQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSZW5hbWVBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IFJlbmFtZUFkYXB0ZXIgfTtcbi8vIC0tLSBkb2N1bWVudCBzeW1ib2xzIC0tLS0tLVxuZnVuY3Rpb24gdG9TeW1ib2xLaW5kKGtpbmQpIHtcbiAgICB2YXIgbUtpbmQgPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQ7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5GaWxlOiByZXR1cm4gbUtpbmQuQXJyYXk7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5Nb2R1bGU6IHJldHVybiBtS2luZC5Nb2R1bGU7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5OYW1lc3BhY2U6IHJldHVybiBtS2luZC5OYW1lc3BhY2U7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5QYWNrYWdlOiByZXR1cm4gbUtpbmQuUGFja2FnZTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkNsYXNzOiByZXR1cm4gbUtpbmQuQ2xhc3M7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5NZXRob2Q6IHJldHVybiBtS2luZC5NZXRob2Q7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5Qcm9wZXJ0eTogcmV0dXJuIG1LaW5kLlByb3BlcnR5O1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuRmllbGQ6IHJldHVybiBtS2luZC5GaWVsZDtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkNvbnN0cnVjdG9yOiByZXR1cm4gbUtpbmQuQ29uc3RydWN0b3I7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5FbnVtOiByZXR1cm4gbUtpbmQuRW51bTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkludGVyZmFjZTogcmV0dXJuIG1LaW5kLkludGVyZmFjZTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkZ1bmN0aW9uOiByZXR1cm4gbUtpbmQuRnVuY3Rpb247XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5WYXJpYWJsZTogcmV0dXJuIG1LaW5kLlZhcmlhYmxlO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuQ29uc3RhbnQ6IHJldHVybiBtS2luZC5Db25zdGFudDtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLlN0cmluZzogcmV0dXJuIG1LaW5kLlN0cmluZztcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLk51bWJlcjogcmV0dXJuIG1LaW5kLk51bWJlcjtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkJvb2xlYW46IHJldHVybiBtS2luZC5Cb29sZWFuO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuQXJyYXk6IHJldHVybiBtS2luZC5BcnJheTtcbiAgICB9XG4gICAgcmV0dXJuIG1LaW5kLkZ1bmN0aW9uO1xufVxudmFyIERvY3VtZW50U3ltYm9sQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEb2N1bWVudFN5bWJvbEFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBEb2N1bWVudFN5bWJvbEFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudFN5bWJvbHMgPSBmdW5jdGlvbiAobW9kZWwsIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7IHJldHVybiB3b3JrZXIuZmluZERvY3VtZW50U3ltYm9scyhyZXNvdXJjZS50b1N0cmluZygpKTsgfSkudGhlbihmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6ICcnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IGl0ZW0uY29udGFpbmVyTmFtZSxcbiAgICAgICAgICAgICAgICBraW5kOiB0b1N5bWJvbEtpbmQoaXRlbS5raW5kKSxcbiAgICAgICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICAgICAgICByYW5nZTogdG9SYW5nZShpdGVtLmxvY2F0aW9uLnJhbmdlKSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25SYW5nZTogdG9SYW5nZShpdGVtLmxvY2F0aW9uLnJhbmdlKVxuICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudFN5bWJvbEFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgRG9jdW1lbnRTeW1ib2xBZGFwdGVyIH07XG52YXIgRG9jdW1lbnRDb2xvckFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRDb2xvckFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBEb2N1bWVudENvbG9yQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50Q29sb3JzID0gZnVuY3Rpb24gKG1vZGVsLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikgeyByZXR1cm4gd29ya2VyLmZpbmREb2N1bWVudENvbG9ycyhyZXNvdXJjZS50b1N0cmluZygpKTsgfSkudGhlbihmdW5jdGlvbiAoaW5mb3MpIHtcbiAgICAgICAgICAgIGlmICghaW5mb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5mb3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpdGVtLmNvbG9yLFxuICAgICAgICAgICAgICAgIHJhbmdlOiB0b1JhbmdlKGl0ZW0ucmFuZ2UpXG4gICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRG9jdW1lbnRDb2xvckFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVDb2xvclByZXNlbnRhdGlvbnMgPSBmdW5jdGlvbiAobW9kZWwsIGluZm8sIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7IHJldHVybiB3b3JrZXIuZ2V0Q29sb3JQcmVzZW50YXRpb25zKHJlc291cmNlLnRvU3RyaW5nKCksIGluZm8uY29sb3IsIGZyb21SYW5nZShpbmZvLnJhbmdlKSk7IH0pLnRoZW4oZnVuY3Rpb24gKHByZXNlbnRhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghcHJlc2VudGF0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcmVzZW50YXRpb25zLm1hcChmdW5jdGlvbiAocHJlc2VudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBwcmVzZW50YXRpb24ubGFiZWwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAocHJlc2VudGF0aW9uLnRleHRFZGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dEVkaXQgPSB0b1RleHRFZGl0KHByZXNlbnRhdGlvbi50ZXh0RWRpdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmVzZW50YXRpb24uYWRkaXRpb25hbFRleHRFZGl0cykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZGl0aW9uYWxUZXh0RWRpdHMgPSBwcmVzZW50YXRpb24uYWRkaXRpb25hbFRleHRFZGl0cy5tYXAodG9UZXh0RWRpdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERvY3VtZW50Q29sb3JBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IERvY3VtZW50Q29sb3JBZGFwdGVyIH07XG52YXIgRm9sZGluZ1JhbmdlQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb2xkaW5nUmFuZ2VBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRm9sZGluZ1JhbmdlQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZUZvbGRpbmdSYW5nZXMgPSBmdW5jdGlvbiAobW9kZWwsIGNvbnRleHQsIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7IHJldHVybiB3b3JrZXIucHJvdmlkZUZvbGRpbmdSYW5nZXMocmVzb3VyY2UudG9TdHJpbmcoKSwgY29udGV4dCk7IH0pLnRoZW4oZnVuY3Rpb24gKHJhbmdlcykge1xuICAgICAgICAgICAgaWYgKCFyYW5nZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VzLm1hcChmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogcmFuZ2Uuc3RhcnRMaW5lICsgMSxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiByYW5nZS5lbmRMaW5lICsgMVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByYW5nZS5raW5kICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQua2luZCA9IHRvRm9sZGluZ1JhbmdlS2luZChyYW5nZS5raW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBGb2xkaW5nUmFuZ2VBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IEZvbGRpbmdSYW5nZUFkYXB0ZXIgfTtcbmZ1bmN0aW9uIHRvRm9sZGluZ1JhbmdlS2luZChraW5kKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgbHMuRm9sZGluZ1JhbmdlS2luZC5Db21tZW50OiByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Gb2xkaW5nUmFuZ2VLaW5kLkNvbW1lbnQ7XG4gICAgICAgIGNhc2UgbHMuRm9sZGluZ1JhbmdlS2luZC5JbXBvcnRzOiByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Gb2xkaW5nUmFuZ2VLaW5kLkltcG9ydHM7XG4gICAgICAgIGNhc2UgbHMuRm9sZGluZ1JhbmdlS2luZC5SZWdpb246IHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkZvbGRpbmdSYW5nZUtpbmQuUmVnaW9uO1xuICAgIH1cbiAgICByZXR1cm4gdm9pZCAwO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgU1RPUF9XSEVOX0lETEVfRk9SID0gMiAqIDYwICogMTAwMDsgLy8gMm1pblxudmFyIFdvcmtlck1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29ya2VyTWFuYWdlcihkZWZhdWx0cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9pZGxlQ2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9jaGVja0lmSWRsZSgpOyB9LCAzMCAqIDEwMDApO1xuICAgICAgICB0aGlzLl9sYXN0VXNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLl9jb25maWdDaGFuZ2VMaXN0ZW5lciA9IHRoaXMuX2RlZmF1bHRzLm9uRGlkQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9zdG9wV29ya2VyKCk7IH0pO1xuICAgIH1cbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5fc3RvcFdvcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dvcmtlcikge1xuICAgICAgICAgICAgdGhpcy5fd29ya2VyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbnVsbDtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faWRsZUNoZWNrSW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9jb25maWdDaGFuZ2VMaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3N0b3BXb3JrZXIoKTtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9jaGVja0lmSWRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGltZVBhc3NlZFNpbmNlTGFzdFVzZWQgPSBEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFVzZWRUaW1lO1xuICAgICAgICBpZiAodGltZVBhc3NlZFNpbmNlTGFzdFVzZWQgPiBTVE9QX1dIRU5fSURMRV9GT1IpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3BXb3JrZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX2dldENsaWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbGFzdFVzZWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKCF0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlV2ViV29ya2VyKHtcbiAgICAgICAgICAgICAgICAvLyBtb2R1bGUgdGhhdCBleHBvcnRzIHRoZSBjcmVhdGUoKSBtZXRob2QgYW5kIHJldHVybnMgYSBgQ1NTV29ya2VyYCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAndnMvbGFuZ3VhZ2UvY3NzL2Nzc1dvcmtlcicsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuX2RlZmF1bHRzLmxhbmd1YWdlSWQsXG4gICAgICAgICAgICAgICAgLy8gcGFzc2VkIGluIHRvIHRoZSBjcmVhdGUoKSBtZXRob2RcbiAgICAgICAgICAgICAgICBjcmVhdGVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlU2V0dGluZ3M6IHRoaXMuX2RlZmF1bHRzLmRpYWdub3N0aWNzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VJZDogdGhpcy5fZGVmYXVsdHMubGFuZ3VhZ2VJZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY2xpZW50ID0gdGhpcy5fd29ya2VyLmdldFByb3h5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudDtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLmdldExhbmd1YWdlU2VydmljZVdvcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc291cmNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgcmVzb3VyY2VzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9jbGllbnQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDbGllbnQoKS50aGVuKGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICAgICAgICAgIF9jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fd29ya2VyLndpdGhTeW5jZWRSZXNvdXJjZXMocmVzb3VyY2VzKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoXykgeyByZXR1cm4gX2NsaWVudDsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gV29ya2VyTWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBXb3JrZXJNYW5hZ2VyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9