(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    comments: {
        lineComment: '*',
    },
    brackets: [
        ['[', ']'],
        ['(', ')']
    ],
};
var abapKeywords = [
    'abstract', 'add', 'add-corresponding', 'adjacent', 'alias', 'aliases', 'all', 'append', 'appending', 'ascending', 'as', 'assert', 'assign', 'assigned', 'assigning', 'association', 'authority-check',
    'back', 'begin', 'binary', 'block', 'bound', 'break-point', 'by', 'byte',
    'class', 'call', 'cast', 'changing', 'check', 'class-data', 'class-method', 'class-methods', 'clear', 'close', 'cnt', 'collect', 'commit', 'cond', 'character',
    'corresponding', 'communication', 'component', 'compute', 'concatenate', 'condense', 'constants', 'conv', 'count',
    'controls', 'convert', 'create', 'currency',
    'data', 'descending', 'default', 'define', 'deferred', 'delete', 'describe', 'detail', 'display', 'divide', 'divide-corresponding', 'display-mode', 'duplicates',
    'deleting',
    'editor-call', 'end', 'endexec', 'endfunction', 'ending', 'endmodule', 'end-of-definition', 'end-of-page', 'end-of-selection', 'end-test-injection', 'end-test-seam', 'exit-command', 'endclass', 'endmethod', 'endform', 'endinterface',
    'endprovide', 'endselect', 'endtry', 'endwhile', 'enum', 'event', 'events', 'exec', 'exit', 'export',
    'exporting', 'extract', 'exception', 'exceptions',
    'field-symbols', 'field-groups', 'field', 'first', 'fetch', 'fields', 'format', 'frame', 'free', 'from', 'function', 'find', 'for', 'found', 'function-pool',
    'generate', 'get',
    'handle', 'hide', 'hashed',
    'include', 'import', 'importing', 'index', 'infotypes', 'initial', 'initialization',
    'id', 'is', 'in', 'interface', 'interfaces', 'init', 'input', 'insert', 'instance', 'into',
    'key',
    'left-justified', 'leave', 'like', 'line', 'line-count', 'line-size', 'load', 'local', 'log-point', 'length', 'left', 'leading', 'lower',
    'matchcode', 'method', 'mesh', 'message', 'message-id', 'methods', 'modify', 'module', 'move', 'move-corresponding', 'multiply', 'multiply-corresponding', 'match',
    'new', 'new-line', 'new-page', 'new-section', 'next', 'no', 'no-gap', 'no-gaps', 'no-sign', 'no-zero', 'non-unique', 'number',
    'occurrence', 'object', 'obligatory', 'of', 'output', 'overlay', 'optional', 'others', 'occurrences', 'occurs', 'offset', 'options',
    'pack', 'parameters', 'perform', 'places', 'position', 'print-control', 'private', 'program', 'protected', 'provide', 'public', 'put',
    'radiobutton', 'raising', 'ranges', 'receive', 'receiving', 'redefinition', 'reduce', 'reference', 'refresh', 'regex', 'reject', 'results', 'requested',
    'ref', 'replace', 'report', 'reserve', 'restore', 'result', 'return', 'returning', 'right-justified', 'rollback', 'read', 'read-only', 'rp-provide-from-last', 'run',
    'scan', 'screen', 'scroll', 'search', 'select', 'select-options', 'selection-screen', 'stamp', 'source', 'subkey',
    'separated', 'set', 'shift', 'single', 'skip', 'sort', 'sorted', 'split', 'standard', 'stamp', 'starting', 'start-of-selection', 'sum', 'subtract-corresponding', 'statics', 'step', 'stop', 'structure', 'submatches', 'submit', 'subtract', 'summary', 'supplied', 'suppress', 'section', 'syntax-check', 'syntax-trace', 'system-call', 'switch',
    'tables', 'table', 'task', 'testing', 'test-seam', 'test-injection', 'then', 'time', 'times', 'title', 'titlebar', 'to', 'top-of-page', 'trailing', 'transfer', 'transformation', 'translate', 'transporting', 'types', 'type', 'type-pool', 'type-pools',
    'unassign', 'unique', 'uline', 'unpack', 'update', 'upper', 'using',
    'value',
    'when', 'while', 'window', 'write', 'where', 'with', 'work',
    'at', 'case', 'catch', 'continue', 'do', 'elseif', 'else', 'endat', 'endcase', 'enddo', 'endif', 'endloop', 'endon', 'if', 'loop', 'on', 'raise', 'try',
    'abs', 'sign', 'ceil', 'floor', 'trunc', 'frac', 'acos', 'asin', 'atan', 'cos', 'sin', 'tan', 'cosh', 'sinh', 'tanh', 'exp', 'log', 'log10', 'sqrt', 'strlen', 'xstrlen', 'charlen', 'lines', 'numofchar', 'dbmaxlen', 'round', 'rescale', 'nmax', 'nmin', 'cmax', 'cmin', 'boolc', 'boolx', 'xsdbool', 'contains', 'contains_any_of', 'contains_any_not_of', 'matches', 'line_exists', 'ipow', 'char_off', 'count', 'count_any_of', 'count_any_not_of', 'distance', 'condense', 'concat_lines_of', 'escape', 'find', 'find_end', 'find_any_of', 'find_any_not_of', 'insert', 'match', 'repeat', 'replace', 'reverse', 'segment', 'shift_left', 'shift_right', 'substring', 'substring_after', 'substring_from', 'substring_before', 'substring_to', 'to_upper', 'to_lower', 'to_mixed', 'from_mixed', 'translate', 'bit-set', 'line_index',
    'definition', 'implementation', 'public', 'inheriting', 'final'
];
var language = {
    defaultToken: 'invalid',
    ignoreCase: true,
    tokenPostfix: '.abap',
    keywords: abapKeywords,
    typeKeywords: [
        'abap_bool', 'string', 'xstring', 'any', 'clike', 'csequence', 'numeric',
        'xsequence', 'c', 'n', 'i', 'p', 'f', 'd', 't', 'x'
    ],
    operators: [
        '+', '-', '/', '*',
        '=', '<', '>', '<=', '>=', '<>', '><', '=<', '=>',
        'EQ', 'NE', 'GE', 'LE',
        'CS', 'CN', 'CA', 'CO', 'CP', 'NS', 'NA', 'NP',
    ],
    symbols: /[=><!~?&+\-*\/\^%]+/,
    tokenizer: {
        root: [
            [/[a-z_$][\w$]*/, { cases: { '@typeKeywords': 'keyword',
                        '@keywords': 'keyword',
                        '@default': 'identifier' } }],
            { include: '@whitespace' },
            [/[:,.]/, 'delimiter'],
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, { cases: { '@operators': 'operator',
                        '@default': '' } }],
            [/'/, { token: 'string', bracket: '@open', next: '@stringquote' }],
            [/\|/, { token: 'string', bracket: '@open', next: '@stringtemplate' }],
            [/\d+/, 'number'],
        ],
        stringtemplate: [
            [/[^\\\|]+/, 'string'],
            [/\\\|/, 'string'],
            [/\|/, { token: 'string', bracket: '@close', next: '@pop' }]
        ],
        stringquote: [
            [/[^\\']+/, 'string'],
            [/'/, { token: 'string', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/^\*.*$/, 'comment'],
            [/\".*$/, 'comment'],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2FiYXAvYWJhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUztBQUN4QztBQUNBLGtEQUFrRCxFQUFFO0FBQ3BELGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsaUJBQWlCO0FBQ2pCLDBCQUEwQixTQUFTO0FBQ25DLHdDQUF3QyxFQUFFO0FBQzFDLG1CQUFtQiwwREFBMEQ7QUFDN0Usb0JBQW9CLDZEQUE2RDtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFtRDtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQW1EO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiI3LjM0Y2ZkOGU1LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcqJyxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxufTtcbnZhciBhYmFwS2V5d29yZHMgPSBbXG4gICAgJ2Fic3RyYWN0JywgJ2FkZCcsICdhZGQtY29ycmVzcG9uZGluZycsICdhZGphY2VudCcsICdhbGlhcycsICdhbGlhc2VzJywgJ2FsbCcsICdhcHBlbmQnLCAnYXBwZW5kaW5nJywgJ2FzY2VuZGluZycsICdhcycsICdhc3NlcnQnLCAnYXNzaWduJywgJ2Fzc2lnbmVkJywgJ2Fzc2lnbmluZycsICdhc3NvY2lhdGlvbicsICdhdXRob3JpdHktY2hlY2snLFxuICAgICdiYWNrJywgJ2JlZ2luJywgJ2JpbmFyeScsICdibG9jaycsICdib3VuZCcsICdicmVhay1wb2ludCcsICdieScsICdieXRlJyxcbiAgICAnY2xhc3MnLCAnY2FsbCcsICdjYXN0JywgJ2NoYW5naW5nJywgJ2NoZWNrJywgJ2NsYXNzLWRhdGEnLCAnY2xhc3MtbWV0aG9kJywgJ2NsYXNzLW1ldGhvZHMnLCAnY2xlYXInLCAnY2xvc2UnLCAnY250JywgJ2NvbGxlY3QnLCAnY29tbWl0JywgJ2NvbmQnLCAnY2hhcmFjdGVyJyxcbiAgICAnY29ycmVzcG9uZGluZycsICdjb21tdW5pY2F0aW9uJywgJ2NvbXBvbmVudCcsICdjb21wdXRlJywgJ2NvbmNhdGVuYXRlJywgJ2NvbmRlbnNlJywgJ2NvbnN0YW50cycsICdjb252JywgJ2NvdW50JyxcbiAgICAnY29udHJvbHMnLCAnY29udmVydCcsICdjcmVhdGUnLCAnY3VycmVuY3knLFxuICAgICdkYXRhJywgJ2Rlc2NlbmRpbmcnLCAnZGVmYXVsdCcsICdkZWZpbmUnLCAnZGVmZXJyZWQnLCAnZGVsZXRlJywgJ2Rlc2NyaWJlJywgJ2RldGFpbCcsICdkaXNwbGF5JywgJ2RpdmlkZScsICdkaXZpZGUtY29ycmVzcG9uZGluZycsICdkaXNwbGF5LW1vZGUnLCAnZHVwbGljYXRlcycsXG4gICAgJ2RlbGV0aW5nJyxcbiAgICAnZWRpdG9yLWNhbGwnLCAnZW5kJywgJ2VuZGV4ZWMnLCAnZW5kZnVuY3Rpb24nLCAnZW5kaW5nJywgJ2VuZG1vZHVsZScsICdlbmQtb2YtZGVmaW5pdGlvbicsICdlbmQtb2YtcGFnZScsICdlbmQtb2Ytc2VsZWN0aW9uJywgJ2VuZC10ZXN0LWluamVjdGlvbicsICdlbmQtdGVzdC1zZWFtJywgJ2V4aXQtY29tbWFuZCcsICdlbmRjbGFzcycsICdlbmRtZXRob2QnLCAnZW5kZm9ybScsICdlbmRpbnRlcmZhY2UnLFxuICAgICdlbmRwcm92aWRlJywgJ2VuZHNlbGVjdCcsICdlbmR0cnknLCAnZW5kd2hpbGUnLCAnZW51bScsICdldmVudCcsICdldmVudHMnLCAnZXhlYycsICdleGl0JywgJ2V4cG9ydCcsXG4gICAgJ2V4cG9ydGluZycsICdleHRyYWN0JywgJ2V4Y2VwdGlvbicsICdleGNlcHRpb25zJyxcbiAgICAnZmllbGQtc3ltYm9scycsICdmaWVsZC1ncm91cHMnLCAnZmllbGQnLCAnZmlyc3QnLCAnZmV0Y2gnLCAnZmllbGRzJywgJ2Zvcm1hdCcsICdmcmFtZScsICdmcmVlJywgJ2Zyb20nLCAnZnVuY3Rpb24nLCAnZmluZCcsICdmb3InLCAnZm91bmQnLCAnZnVuY3Rpb24tcG9vbCcsXG4gICAgJ2dlbmVyYXRlJywgJ2dldCcsXG4gICAgJ2hhbmRsZScsICdoaWRlJywgJ2hhc2hlZCcsXG4gICAgJ2luY2x1ZGUnLCAnaW1wb3J0JywgJ2ltcG9ydGluZycsICdpbmRleCcsICdpbmZvdHlwZXMnLCAnaW5pdGlhbCcsICdpbml0aWFsaXphdGlvbicsXG4gICAgJ2lkJywgJ2lzJywgJ2luJywgJ2ludGVyZmFjZScsICdpbnRlcmZhY2VzJywgJ2luaXQnLCAnaW5wdXQnLCAnaW5zZXJ0JywgJ2luc3RhbmNlJywgJ2ludG8nLFxuICAgICdrZXknLFxuICAgICdsZWZ0LWp1c3RpZmllZCcsICdsZWF2ZScsICdsaWtlJywgJ2xpbmUnLCAnbGluZS1jb3VudCcsICdsaW5lLXNpemUnLCAnbG9hZCcsICdsb2NhbCcsICdsb2ctcG9pbnQnLCAnbGVuZ3RoJywgJ2xlZnQnLCAnbGVhZGluZycsICdsb3dlcicsXG4gICAgJ21hdGNoY29kZScsICdtZXRob2QnLCAnbWVzaCcsICdtZXNzYWdlJywgJ21lc3NhZ2UtaWQnLCAnbWV0aG9kcycsICdtb2RpZnknLCAnbW9kdWxlJywgJ21vdmUnLCAnbW92ZS1jb3JyZXNwb25kaW5nJywgJ211bHRpcGx5JywgJ211bHRpcGx5LWNvcnJlc3BvbmRpbmcnLCAnbWF0Y2gnLFxuICAgICduZXcnLCAnbmV3LWxpbmUnLCAnbmV3LXBhZ2UnLCAnbmV3LXNlY3Rpb24nLCAnbmV4dCcsICdubycsICduby1nYXAnLCAnbm8tZ2FwcycsICduby1zaWduJywgJ25vLXplcm8nLCAnbm9uLXVuaXF1ZScsICdudW1iZXInLFxuICAgICdvY2N1cnJlbmNlJywgJ29iamVjdCcsICdvYmxpZ2F0b3J5JywgJ29mJywgJ291dHB1dCcsICdvdmVybGF5JywgJ29wdGlvbmFsJywgJ290aGVycycsICdvY2N1cnJlbmNlcycsICdvY2N1cnMnLCAnb2Zmc2V0JywgJ29wdGlvbnMnLFxuICAgICdwYWNrJywgJ3BhcmFtZXRlcnMnLCAncGVyZm9ybScsICdwbGFjZXMnLCAncG9zaXRpb24nLCAncHJpbnQtY29udHJvbCcsICdwcml2YXRlJywgJ3Byb2dyYW0nLCAncHJvdGVjdGVkJywgJ3Byb3ZpZGUnLCAncHVibGljJywgJ3B1dCcsXG4gICAgJ3JhZGlvYnV0dG9uJywgJ3JhaXNpbmcnLCAncmFuZ2VzJywgJ3JlY2VpdmUnLCAncmVjZWl2aW5nJywgJ3JlZGVmaW5pdGlvbicsICdyZWR1Y2UnLCAncmVmZXJlbmNlJywgJ3JlZnJlc2gnLCAncmVnZXgnLCAncmVqZWN0JywgJ3Jlc3VsdHMnLCAncmVxdWVzdGVkJyxcbiAgICAncmVmJywgJ3JlcGxhY2UnLCAncmVwb3J0JywgJ3Jlc2VydmUnLCAncmVzdG9yZScsICdyZXN1bHQnLCAncmV0dXJuJywgJ3JldHVybmluZycsICdyaWdodC1qdXN0aWZpZWQnLCAncm9sbGJhY2snLCAncmVhZCcsICdyZWFkLW9ubHknLCAncnAtcHJvdmlkZS1mcm9tLWxhc3QnLCAncnVuJyxcbiAgICAnc2NhbicsICdzY3JlZW4nLCAnc2Nyb2xsJywgJ3NlYXJjaCcsICdzZWxlY3QnLCAnc2VsZWN0LW9wdGlvbnMnLCAnc2VsZWN0aW9uLXNjcmVlbicsICdzdGFtcCcsICdzb3VyY2UnLCAnc3Via2V5JyxcbiAgICAnc2VwYXJhdGVkJywgJ3NldCcsICdzaGlmdCcsICdzaW5nbGUnLCAnc2tpcCcsICdzb3J0JywgJ3NvcnRlZCcsICdzcGxpdCcsICdzdGFuZGFyZCcsICdzdGFtcCcsICdzdGFydGluZycsICdzdGFydC1vZi1zZWxlY3Rpb24nLCAnc3VtJywgJ3N1YnRyYWN0LWNvcnJlc3BvbmRpbmcnLCAnc3RhdGljcycsICdzdGVwJywgJ3N0b3AnLCAnc3RydWN0dXJlJywgJ3N1Ym1hdGNoZXMnLCAnc3VibWl0JywgJ3N1YnRyYWN0JywgJ3N1bW1hcnknLCAnc3VwcGxpZWQnLCAnc3VwcHJlc3MnLCAnc2VjdGlvbicsICdzeW50YXgtY2hlY2snLCAnc3ludGF4LXRyYWNlJywgJ3N5c3RlbS1jYWxsJywgJ3N3aXRjaCcsXG4gICAgJ3RhYmxlcycsICd0YWJsZScsICd0YXNrJywgJ3Rlc3RpbmcnLCAndGVzdC1zZWFtJywgJ3Rlc3QtaW5qZWN0aW9uJywgJ3RoZW4nLCAndGltZScsICd0aW1lcycsICd0aXRsZScsICd0aXRsZWJhcicsICd0bycsICd0b3Atb2YtcGFnZScsICd0cmFpbGluZycsICd0cmFuc2ZlcicsICd0cmFuc2Zvcm1hdGlvbicsICd0cmFuc2xhdGUnLCAndHJhbnNwb3J0aW5nJywgJ3R5cGVzJywgJ3R5cGUnLCAndHlwZS1wb29sJywgJ3R5cGUtcG9vbHMnLFxuICAgICd1bmFzc2lnbicsICd1bmlxdWUnLCAndWxpbmUnLCAndW5wYWNrJywgJ3VwZGF0ZScsICd1cHBlcicsICd1c2luZycsXG4gICAgJ3ZhbHVlJyxcbiAgICAnd2hlbicsICd3aGlsZScsICd3aW5kb3cnLCAnd3JpdGUnLCAnd2hlcmUnLCAnd2l0aCcsICd3b3JrJyxcbiAgICAnYXQnLCAnY2FzZScsICdjYXRjaCcsICdjb250aW51ZScsICdkbycsICdlbHNlaWYnLCAnZWxzZScsICdlbmRhdCcsICdlbmRjYXNlJywgJ2VuZGRvJywgJ2VuZGlmJywgJ2VuZGxvb3AnLCAnZW5kb24nLCAnaWYnLCAnbG9vcCcsICdvbicsICdyYWlzZScsICd0cnknLFxuICAgICdhYnMnLCAnc2lnbicsICdjZWlsJywgJ2Zsb29yJywgJ3RydW5jJywgJ2ZyYWMnLCAnYWNvcycsICdhc2luJywgJ2F0YW4nLCAnY29zJywgJ3NpbicsICd0YW4nLCAnY29zaCcsICdzaW5oJywgJ3RhbmgnLCAnZXhwJywgJ2xvZycsICdsb2cxMCcsICdzcXJ0JywgJ3N0cmxlbicsICd4c3RybGVuJywgJ2NoYXJsZW4nLCAnbGluZXMnLCAnbnVtb2ZjaGFyJywgJ2RibWF4bGVuJywgJ3JvdW5kJywgJ3Jlc2NhbGUnLCAnbm1heCcsICdubWluJywgJ2NtYXgnLCAnY21pbicsICdib29sYycsICdib29seCcsICd4c2Rib29sJywgJ2NvbnRhaW5zJywgJ2NvbnRhaW5zX2FueV9vZicsICdjb250YWluc19hbnlfbm90X29mJywgJ21hdGNoZXMnLCAnbGluZV9leGlzdHMnLCAnaXBvdycsICdjaGFyX29mZicsICdjb3VudCcsICdjb3VudF9hbnlfb2YnLCAnY291bnRfYW55X25vdF9vZicsICdkaXN0YW5jZScsICdjb25kZW5zZScsICdjb25jYXRfbGluZXNfb2YnLCAnZXNjYXBlJywgJ2ZpbmQnLCAnZmluZF9lbmQnLCAnZmluZF9hbnlfb2YnLCAnZmluZF9hbnlfbm90X29mJywgJ2luc2VydCcsICdtYXRjaCcsICdyZXBlYXQnLCAncmVwbGFjZScsICdyZXZlcnNlJywgJ3NlZ21lbnQnLCAnc2hpZnRfbGVmdCcsICdzaGlmdF9yaWdodCcsICdzdWJzdHJpbmcnLCAnc3Vic3RyaW5nX2FmdGVyJywgJ3N1YnN0cmluZ19mcm9tJywgJ3N1YnN0cmluZ19iZWZvcmUnLCAnc3Vic3RyaW5nX3RvJywgJ3RvX3VwcGVyJywgJ3RvX2xvd2VyJywgJ3RvX21peGVkJywgJ2Zyb21fbWl4ZWQnLCAndHJhbnNsYXRlJywgJ2JpdC1zZXQnLCAnbGluZV9pbmRleCcsXG4gICAgJ2RlZmluaXRpb24nLCAnaW1wbGVtZW50YXRpb24nLCAncHVibGljJywgJ2luaGVyaXRpbmcnLCAnZmluYWwnXG5dO1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIHRva2VuUG9zdGZpeDogJy5hYmFwJyxcbiAgICBrZXl3b3JkczogYWJhcEtleXdvcmRzLFxuICAgIHR5cGVLZXl3b3JkczogW1xuICAgICAgICAnYWJhcF9ib29sJywgJ3N0cmluZycsICd4c3RyaW5nJywgJ2FueScsICdjbGlrZScsICdjc2VxdWVuY2UnLCAnbnVtZXJpYycsXG4gICAgICAgICd4c2VxdWVuY2UnLCAnYycsICduJywgJ2knLCAncCcsICdmJywgJ2QnLCAndCcsICd4J1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICcrJywgJy0nLCAnLycsICcqJyxcbiAgICAgICAgJz0nLCAnPCcsICc+JywgJzw9JywgJz49JywgJzw+JywgJz48JywgJz08JywgJz0+JyxcbiAgICAgICAgJ0VRJywgJ05FJywgJ0dFJywgJ0xFJyxcbiAgICAgICAgJ0NTJywgJ0NOJywgJ0NBJywgJ0NPJywgJ0NQJywgJ05TJywgJ05BJywgJ05QJyxcbiAgICBdLFxuICAgIHN5bWJvbHM6IC9bPT48IX4/JitcXC0qXFwvXFxeJV0rLyxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgWy9bYS16XyRdW1xcdyRdKi8sIHsgY2FzZXM6IHsgJ0B0eXBlS2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInIH0gfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIFsvWzosLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCB7IGNhc2VzOiB7ICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnIH0gfV0sXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0BzdHJpbmdxdW90ZScgfV0sXG4gICAgICAgICAgICBbL1xcfC8sIHsgdG9rZW46ICdzdHJpbmcnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHN0cmluZ3RlbXBsYXRlJyB9XSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5ndGVtcGxhdGU6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXFx8XSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcXFxcXHwvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcfC8sIHsgdG9rZW46ICdzdHJpbmcnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ3F1b3RlOiBbXG4gICAgICAgICAgICBbL1teXFxcXCddKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvXlxcKi4qJC8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcXCIuKiQvLCAnY29tbWVudCddLFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==