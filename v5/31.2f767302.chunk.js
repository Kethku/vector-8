(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js ***!
  \**************************************************************************************/
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
        lineComment: '//',
        blockComment: ['/*', '*/'],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.objective-c',
    keywords: [
        '#import',
        '#include',
        '#define',
        '#else',
        '#endif',
        '#if',
        '#ifdef',
        '#ifndef',
        '#ident',
        '#undef',
        '@class',
        '@defs',
        '@dynamic',
        '@encode',
        '@end',
        '@implementation',
        '@interface',
        '@package',
        '@private',
        '@protected',
        '@property',
        '@protocol',
        '@public',
        '@selector',
        '@synthesize',
        '__declspec',
        'assign',
        'auto',
        'BOOL',
        'break',
        'bycopy',
        'byref',
        'case',
        'char',
        'Class',
        'const',
        'copy',
        'continue',
        'default',
        'do',
        'double',
        'else',
        'enum',
        'extern',
        'FALSE',
        'false',
        'float',
        'for',
        'goto',
        'if',
        'in',
        'int',
        'id',
        'inout',
        'IMP',
        'long',
        'nil',
        'nonatomic',
        'NULL',
        'oneway',
        'out',
        'private',
        'public',
        'protected',
        'readwrite',
        'readonly',
        'register',
        'return',
        'SEL',
        'self',
        'short',
        'signed',
        'sizeof',
        'static',
        'struct',
        'super',
        'switch',
        'typedef',
        'TRUE',
        'true',
        'union',
        'unsigned',
        'volatile',
        'void',
        'while',
    ],
    decpart: /\d(_?\d)*/,
    decimal: /0|@decpart/,
    tokenizer: {
        root: [
            { include: '@comments' },
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()<>]/, '@brackets'],
            [/[a-zA-Z@#]\w*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }],
            [/[<>=\\+\\-\\*\\/\\^\\|\\~,]|and\\b|or\\b|not\\b]/, 'operator'],
        ],
        whitespace: [
            [/\s+/, 'white'],
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment'],
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            ['.', 'comment',],
        ],
        numbers: [
            [/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/, 'number.hex'],
            [/@decimal((\.@decpart)?([eE][\-+]?@decpart)?)[fF]*/, {
                    cases: {
                        '(\\d)*': 'number',
                        '$0': 'number.float'
                    }
                }]
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL29iamVjdGl2ZS1jL29iamVjdGl2ZS1jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIzMS4yZjc2NzMwMi5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5vYmplY3RpdmUtYycsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJyNpbXBvcnQnLFxuICAgICAgICAnI2luY2x1ZGUnLFxuICAgICAgICAnI2RlZmluZScsXG4gICAgICAgICcjZWxzZScsXG4gICAgICAgICcjZW5kaWYnLFxuICAgICAgICAnI2lmJyxcbiAgICAgICAgJyNpZmRlZicsXG4gICAgICAgICcjaWZuZGVmJyxcbiAgICAgICAgJyNpZGVudCcsXG4gICAgICAgICcjdW5kZWYnLFxuICAgICAgICAnQGNsYXNzJyxcbiAgICAgICAgJ0BkZWZzJyxcbiAgICAgICAgJ0BkeW5hbWljJyxcbiAgICAgICAgJ0BlbmNvZGUnLFxuICAgICAgICAnQGVuZCcsXG4gICAgICAgICdAaW1wbGVtZW50YXRpb24nLFxuICAgICAgICAnQGludGVyZmFjZScsXG4gICAgICAgICdAcGFja2FnZScsXG4gICAgICAgICdAcHJpdmF0ZScsXG4gICAgICAgICdAcHJvdGVjdGVkJyxcbiAgICAgICAgJ0Bwcm9wZXJ0eScsXG4gICAgICAgICdAcHJvdG9jb2wnLFxuICAgICAgICAnQHB1YmxpYycsXG4gICAgICAgICdAc2VsZWN0b3InLFxuICAgICAgICAnQHN5bnRoZXNpemUnLFxuICAgICAgICAnX19kZWNsc3BlYycsXG4gICAgICAgICdhc3NpZ24nLFxuICAgICAgICAnYXV0bycsXG4gICAgICAgICdCT09MJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2J5Y29weScsXG4gICAgICAgICdieXJlZicsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2NoYXInLFxuICAgICAgICAnQ2xhc3MnLFxuICAgICAgICAnY29uc3QnLFxuICAgICAgICAnY29weScsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2RvdWJsZScsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2VudW0nLFxuICAgICAgICAnZXh0ZXJuJyxcbiAgICAgICAgJ0ZBTFNFJyxcbiAgICAgICAgJ2ZhbHNlJyxcbiAgICAgICAgJ2Zsb2F0JyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdnb3RvJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2ludCcsXG4gICAgICAgICdpZCcsXG4gICAgICAgICdpbm91dCcsXG4gICAgICAgICdJTVAnLFxuICAgICAgICAnbG9uZycsXG4gICAgICAgICduaWwnLFxuICAgICAgICAnbm9uYXRvbWljJyxcbiAgICAgICAgJ05VTEwnLFxuICAgICAgICAnb25ld2F5JyxcbiAgICAgICAgJ291dCcsXG4gICAgICAgICdwcml2YXRlJyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAncmVhZHdyaXRlJyxcbiAgICAgICAgJ3JlYWRvbmx5JyxcbiAgICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdTRUwnLFxuICAgICAgICAnc2VsZicsXG4gICAgICAgICdzaG9ydCcsXG4gICAgICAgICdzaWduZWQnLFxuICAgICAgICAnc2l6ZW9mJyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdzdHJ1Y3QnLFxuICAgICAgICAnc3VwZXInLFxuICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgJ3R5cGVkZWYnLFxuICAgICAgICAnVFJVRScsXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ3VuaW9uJyxcbiAgICAgICAgJ3Vuc2lnbmVkJyxcbiAgICAgICAgJ3ZvbGF0aWxlJyxcbiAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAnd2hpbGUnLFxuICAgIF0sXG4gICAgZGVjcGFydDogL1xcZChfP1xcZCkqLyxcbiAgICBkZWNpbWFsOiAvMHxAZGVjcGFydC8sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIFsvWyw6O10vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1t7fVxcW1xcXSgpPD5dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bYS16QS1aQCNdXFx3Ki8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy9bPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH4sXXxhbmRcXFxcYnxvclxcXFxifG5vdFxcXFxiXS8sICdvcGVyYXRvciddLFxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1xccysvLCAnd2hpdGUnXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudHM6IFtcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcKicsICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXC8rLionLCAnY29tbWVudCddLFxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbJ1xcXFwqXFxcXC8nLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbJy4nLCAnY29tbWVudCcsXSxcbiAgICAgICAgXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZdKihfP1swLTlhLWZBLUZdKSovLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9AZGVjaW1hbCgoXFwuQGRlY3BhcnQpPyhbZUVdW1xcLStdP0BkZWNwYXJ0KT8pW2ZGXSovLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnKFxcXFxkKSonOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICckMCc6ICdudW1iZXIuZmxvYXQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBSZWNvZ25pemUgc3RyaW5ncywgaW5jbHVkaW5nIHRob3NlIGJyb2tlbiBhY3Jvc3MgbGluZXMgd2l0aCBcXCAoYnV0IG5vdCB3aXRob3V0KVxuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbLyckLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5lc2NhcGUnLCAnQHN0cmluZ0JvZHknXSxcbiAgICAgICAgICAgIFsvXCIkLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcuZXNjYXBlJywgJ0BkYmxTdHJpbmdCb2R5J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nQm9keTogW1xuICAgICAgICAgICAgWy9bXlxcXFwnXSskLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1teXFxcXCddKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGRibFN0cmluZ0JvZHk6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKyQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9cXFxcJC8sICdzdHJpbmcnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=