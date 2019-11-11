(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        blockComment: ['###', '###'],
        lineComment: '#'
    },
    folding: {
        markers: {
            start: new RegExp("^\\s*#region\\b"),
            end: new RegExp("^\\s*#endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    ignoreCase: false,
    tokenPostfix: '.mips',
    regEx: /\/(?!\/\/)(?:[^\/\\]|\\.)*\/[igm]*/,
    keywords: [
        '.data', '.text', 'syscall', 'trap',
        'add', 'addu', 'addi', 'addiu', 'and', 'andi',
        'div', 'divu', 'mult', 'multu', 'nor', 'or', 'ori',
        'sll', 'slv', 'sra', 'srav', 'srl', 'srlv',
        'sub', 'subu', 'xor', 'xori', 'lhi', 'lho',
        'lhi', 'llo', 'slt', 'slti', 'sltu', 'sltiu',
        'beq', 'bgtz', 'blez', 'bne', 'j', 'jal', 'jalr', 'jr',
        'lb', 'lbu', 'lh', 'lhu', 'lw', 'li', 'la',
        'sb', 'sh', 'sw', 'mfhi', 'mflo', 'mthi', 'mtlo', 'move',
    ],
    // we include these common regular expressions
    symbols: /[\.,\:]+/,
    escapes: /\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/\$[a-zA-Z_]\w*/, 'variable.predefined'],
            [/[.a-zA-Z_]\w*/, {
                    cases: {
                        'this': 'variable.predefined',
                        '@keywords': { token: 'keyword.$0' },
                        '@default': ''
                    }
                }],
            // whitespace
            [/[ \t\r\n]+/, ''],
            // Comments
            [/#.*$/, 'comment'],
            // regular expressions
            ['///', { token: 'regexp', next: '@hereregexp' }],
            [/^(\s*)(@regEx)/, ['', 'regexp']],
            [/(\,)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\:)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            // delimiters
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d+[eE]([\-+]?\d+)?/, 'number.float'],
            [/\d+\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/0[0-7]+(?!\d)/, 'number.octal'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[,.]/, 'delimiter'],
            // strings:
            [/"""/, 'string', '@herestring."""'],
            [/'''/, 'string', '@herestring.\'\'\''],
            [/"/, {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: '@string."' }
                    }
                }],
            [/'/, {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: '@string.\'' }
                    }
                }],
        ],
        string: [
            [/[^"'\#\\]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/\./, 'string.escape.invalid'],
            [/#{/, {
                    cases: {
                        '$S2=="': { token: 'string', next: 'root.interpolatedstring' },
                        '@default': 'string'
                    }
                }],
            [/["']/, {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }],
            [/#/, 'string']
        ],
        herestring: [
            [/("""|''')/, {
                    cases: {
                        '$1==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }],
            [/[^#\\'"]+/, 'string'],
            [/['"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/#{/, { token: 'string.quote', next: 'root.interpolatedstring' }],
            [/#/, 'string']
        ],
        comment: [
            [/[^#]+/, 'comment',],
            [/#/, 'comment'],
        ],
        hereregexp: [
            [/[^\\\/#]+/, 'regexp'],
            [/\\./, 'regexp'],
            [/#.*$/, 'comment'],
            ['///[igm]*', { token: 'regexp', next: '@pop' }],
            [/\//, 'regexp'],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL21pcHMvbWlwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1AscUVBQXFFLElBQUksTUFBTTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1Q0FBdUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLG1DQUFtQyxtREFBbUQ7QUFDdEY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDO0FBQ3BFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSSx5REFBeUQ7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0NBQWdDO0FBQzNEO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiMjguZmEzNGUzMzAuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXEBcXCMlXFxeXFwmXFwqXFwoXFwpXFw9XFwkXFwtXFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXD9cXHNdKykvZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnIyMjJywgJyMjIyddLFxuICAgICAgICBsaW5lQ29tbWVudDogJyMnXG4gICAgfSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNyZWdpb25cXFxcYlwiKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojZW5kcmVnaW9uXFxcXGJcIilcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgaWdub3JlQ2FzZTogZmFsc2UsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLm1pcHMnLFxuICAgIHJlZ0V4OiAvXFwvKD8hXFwvXFwvKSg/OlteXFwvXFxcXF18XFxcXC4pKlxcL1tpZ21dKi8sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJy5kYXRhJywgJy50ZXh0JywgJ3N5c2NhbGwnLCAndHJhcCcsXG4gICAgICAgICdhZGQnLCAnYWRkdScsICdhZGRpJywgJ2FkZGl1JywgJ2FuZCcsICdhbmRpJyxcbiAgICAgICAgJ2RpdicsICdkaXZ1JywgJ211bHQnLCAnbXVsdHUnLCAnbm9yJywgJ29yJywgJ29yaScsXG4gICAgICAgICdzbGwnLCAnc2x2JywgJ3NyYScsICdzcmF2JywgJ3NybCcsICdzcmx2JyxcbiAgICAgICAgJ3N1YicsICdzdWJ1JywgJ3hvcicsICd4b3JpJywgJ2xoaScsICdsaG8nLFxuICAgICAgICAnbGhpJywgJ2xsbycsICdzbHQnLCAnc2x0aScsICdzbHR1JywgJ3NsdGl1JyxcbiAgICAgICAgJ2JlcScsICdiZ3R6JywgJ2JsZXonLCAnYm5lJywgJ2onLCAnamFsJywgJ2phbHInLCAnanInLFxuICAgICAgICAnbGInLCAnbGJ1JywgJ2xoJywgJ2xodScsICdsdycsICdsaScsICdsYScsXG4gICAgICAgICdzYicsICdzaCcsICdzdycsICdtZmhpJywgJ21mbG8nLCAnbXRoaScsICdtdGxvJywgJ21vdmUnLFxuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bXFwuLFxcOl0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJyRdfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbL1xcJFthLXpBLVpfXVxcdyovLCAndmFyaWFibGUucHJlZGVmaW5lZCddLFxuICAgICAgICAgICAgWy9bLmEtekEtWl9dXFx3Ki8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aGlzJzogJ3ZhcmlhYmxlLnByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgLy8gQ29tbWVudHNcbiAgICAgICAgICAgIFsvIy4qJC8sICdjb21tZW50J10sXG4gICAgICAgICAgICAvLyByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgICAgICAgICBbJy8vLycsIHsgdG9rZW46ICdyZWdleHAnLCBuZXh0OiAnQGhlcmVyZWdleHAnIH1dLFxuICAgICAgICAgICAgWy9eKFxccyopKEByZWdFeCkvLCBbJycsICdyZWdleHAnXV0sXG4gICAgICAgICAgICBbLyhcXCwpKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxuICAgICAgICAgICAgWy8oXFw6KShcXHMqKShAcmVnRXgpLywgWydkZWxpbWl0ZXInLCAnJywgJ3JlZ2V4cCddXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnNcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCtbZUVdKFtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZCtcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZdKy8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLzBbMC03XSsoPyFcXGQpLywgJ251bWJlci5vY3RhbCddLFxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bLC5dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gc3RyaW5nczpcbiAgICAgICAgICAgIFsvXCJcIlwiLywgJ3N0cmluZycsICdAaGVyZXN0cmluZy5cIlwiXCInXSxcbiAgICAgICAgICAgIFsvJycnLywgJ3N0cmluZycsICdAaGVyZXN0cmluZy5cXCdcXCdcXCcnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAc3RyaW5nLlwiJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvJy8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BzdHJpbmcuXFwnJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXCInXFwjXFxcXF0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8jey8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PVwiJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdyb290LmludGVycG9sYXRlZHN0cmluZycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvW1wiJ10vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvIy8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBoZXJlc3RyaW5nOiBbXG4gICAgICAgICAgICBbLyhcIlwiXCJ8JycnKS8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckMT09JFMyJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy9bXiNcXFxcJ1wiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1snXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbLyN7LywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdyb290LmludGVycG9sYXRlZHN0cmluZycgfV0sXG4gICAgICAgICAgICBbLyMvLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXiNdKy8sICdjb21tZW50JyxdLFxuICAgICAgICAgICAgWy8jLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgaGVyZXJlZ2V4cDogW1xuICAgICAgICAgICAgWy9bXlxcXFxcXC8jXSsvLCAncmVnZXhwJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3JlZ2V4cCddLFxuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsnLy8vW2lnbV0qJywgeyB0b2tlbjogJ3JlZ2V4cCcsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvXFwvLywgJ3JlZ2V4cCddLFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==