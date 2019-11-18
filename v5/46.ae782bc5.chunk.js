(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js ***!
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
        lineComment: '#',
        blockComment: ['=begin', '=end'],
    },
    brackets: [
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
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
    ],
    indentationRules: {
        increaseIndentPattern: new RegExp('^\\s*((begin|class|(private|protected)\\s+def|def|else|elsif|ensure|for|if|module|rescue|unless|until|when|while|case)|([^#]*\\sdo\\b)|([^#]*=\\s*(case|if|unless)))\\b([^#\\{;]|("|\'|\/).*\\4)*(#.*)?$'),
        decreaseIndentPattern: new RegExp('^\\s*([}\\]]([,)]?\\s*(#|$)|\\.[a-zA-Z_]\\w*\\b)|(end|rescue|ensure|else|elsif|when)\\b)'),
    }
};
/*
 * Ruby language definition
 *
 * Quite a complex language due to elaborate escape sequences
 * and quoting of literate strings/regular expressions, and
 * an 'end' keyword that does not always apply to modifiers like until and while,
 * and a 'do' keyword that sometimes starts a block, but sometimes is part of
 * another statement (like 'while').
 *
 * (1) end blocks:
 * 'end' may end declarations like if or until, but sometimes 'if' or 'until'
 * are modifiers where there is no 'end'. Also, 'do' sometimes starts a block
 * that is ended by 'end', but sometimes it is part of a 'while', 'for', or 'until'
 * To do proper brace matching we do some elaborate state manipulation.
 * some examples:
 *
 *   until bla do
 *     work until tired
 *     list.each do
 *       something if test
 *     end
 *   end
 *
 * or
 *
 * if test
 *  something (if test then x end)
 *  bar if bla
 * end
 *
 * or, how about using class as a property..
 *
 * class Test
 *   def endpoint
 *     self.class.endpoint || routes
 *   end
 * end
 *
 * (2) quoting:
 * there are many kinds of strings and escape sequences. But also, one can
 * start many string-like things as '%qx' where q specifies the kind of string
 * (like a command, escape expanded, regular expression, symbol etc.), and x is
 * some character and only another 'x' ends the sequence. Except for brackets
 * where the closing bracket ends the sequence.. and except for a nested bracket
 * inside the string like entity. Also, such strings can contain interpolated
 * ruby expressions again (and span multiple lines). Moreover, expanded
 * regular expression can also contain comments.
 */
var language = {
    tokenPostfix: '.ruby',
    keywords: [
        '__LINE__', '__ENCODING__', '__FILE__', 'BEGIN', 'END', 'alias', 'and', 'begin',
        'break', 'case', 'class', 'def', 'defined?', 'do', 'else', 'elsif', 'end',
        'ensure', 'for', 'false', 'if', 'in', 'module', 'next', 'nil', 'not', 'or', 'redo',
        'rescue', 'retry', 'return', 'self', 'super', 'then', 'true', 'undef', 'unless',
        'until', 'when', 'while', 'yield',
    ],
    keywordops: [
        '::', '..', '...', '?', ':', '=>'
    ],
    builtins: [
        'require', 'public', 'private', 'include', 'extend', 'attr_reader',
        'protected', 'private_class_method', 'protected_class_method', 'new'
    ],
    // these are closed by 'end' (if, while and until are handled separately)
    declarations: [
        'module', 'class', 'def', 'case', 'do', 'begin', 'for', 'if', 'while', 'until', 'unless'
    ],
    linedecls: [
        'def', 'case', 'do', 'begin', 'for', 'if', 'while', 'until', 'unless'
    ],
    operators: [
        '^', '&', '|', '<=>', '==', '===', '!~', '=~', '>', '>=', '<', '<=', '<<', '>>', '+',
        '-', '*', '/', '%', '**', '~', '+@', '-@', '[]', '[]=', '`',
        '+=', '-=', '*=', '**=', '/=', '^=', '%=', '<<=', '>>=', '&=', '&&=', '||=', '|='
    ],
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' }
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%\.]+/,
    // escape sequences
    escape: /(?:[abefnrstv\\"'\n\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,
    escapes: /\\(?:C\-(@escape|.)|c(@escape|.)|@escape)/,
    decpart: /\d(_?\d)*/,
    decimal: /0|@decpart/,
    delim: /[^a-zA-Z0-9\s\n\r]/,
    heredelim: /(?:\w+|'[^']*'|"[^"]*"|`[^`]*`)/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[AzZbBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})?/,
    // The main tokenizer for our languages
    tokenizer: {
        // Main entry.
        // root.<decl> where decl is the current opening declaration (like 'class')
        root: [
            // identifiers and keywords
            // most complexity here is due to matching 'end' correctly with declarations.
            // We distinguish a declaration that comes first on a line, versus declarations further on a line (which are most likey modifiers)
            [/^(\s*)([a-z_]\w*[!?=]?)/, ['white',
                    {
                        cases: {
                            'for|until|while': { token: 'keyword.$2', next: '@dodecl.$2' },
                            '@declarations': { token: 'keyword.$2', next: '@root.$2' },
                            'end': { token: 'keyword.$S2', next: '@pop' },
                            '@keywords': 'keyword',
                            '@builtins': 'predefined',
                            '@default': 'identifier'
                        }
                    }]],
            [/[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        'if|unless|while|until': { token: 'keyword.$0x', next: '@modifier.$0x' },
                        'for': { token: 'keyword.$2', next: '@dodecl.$2' },
                        '@linedecls': { token: 'keyword.$0', next: '@root.$0' },
                        'end': { token: 'keyword.$S2', next: '@pop' },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            [/[A-Z][\w]*[!?=]?/, 'constructor.identifier'],
            [/\$[\w]*/, 'global.constant'],
            [/@[\w]*/, 'namespace.instance.identifier'],
            [/@@[\w]*/, 'namespace.class.identifier'],
            // here document
            [/<<[-~](@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            [/[ \t\r\n]+<<(@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            [/^<<(@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            // whitespace
            { include: '@whitespace' },
            // strings
            [/"/, { token: 'string.d.delim', next: '@dstring.d."' }],
            [/'/, { token: 'string.sq.delim', next: '@sstring.sq' }],
            // % literals. For efficiency, rematch in the 'pstring' state
            [/%([rsqxwW]|Q?)/, { token: '@rematch', next: 'pstring' }],
            // commands and symbols
            [/`/, { token: 'string.x.delim', next: '@dstring.x.`' }],
            [/:(\w|[$@])\w*[!?=]?/, 'string.s'],
            [/:"/, { token: 'string.s.delim', next: '@dstring.s."' }],
            [/:'/, { token: 'string.s.delim', next: '@sstring.s' }],
            // regular expressions. Lookahead for a (not escaped) closing forwardslash on the same line
            [/\/(?=(\\\/|[^\/\n])+\/)/, { token: 'regexp.delim', next: '@regexp' }],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, {
                    cases: {
                        '@keywordops': 'keyword',
                        '@operators': 'operator',
                        '@default': ''
                    }
                }],
            [/[;,]/, 'delimiter'],
            // numbers
            [/0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/, 'number.hex'],
            [/0[_oO][0-7](_?[0-7])*/, 'number.octal'],
            [/0[bB][01](_?[01])*/, 'number.binary'],
            [/0[dD]@decpart/, 'number'],
            [/@decimal((\.@decpart)?([eE][\-+]?@decpart)?)/, {
                    cases: {
                        '$1': 'number.float',
                        '@default': 'number'
                    }
                }],
        ],
        // used to not treat a 'do' as a block opener if it occurs on the same
        // line as a 'do' statement: 'while|until|for'
        // dodecl.<decl> where decl is the declarations started, like 'while'
        dodecl: [
            [/^/, { token: '', switchTo: '@root.$S2' }],
            [/[a-z_]\w*[!?=]?/, {
                    cases: {
                        'end': { token: 'keyword.$S2', next: '@pop' },
                        'do': { token: 'keyword', switchTo: '@root.$S2' },
                        '@linedecls': { token: '@rematch', switchTo: '@root.$S2' },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            { include: '@root' }
        ],
        // used to prevent potential modifiers ('if|until|while|unless') to match
        // with 'end' keywords.
        // modifier.<decl>x where decl is the declaration starter, like 'if'
        modifier: [
            [/^/, '', '@pop'],
            [/[a-z_]\w*[!?=]?/, {
                    cases: {
                        'end': { token: 'keyword.$S2', next: '@pop' },
                        'then|else|elsif|do': { token: 'keyword', switchTo: '@root.$S2' },
                        '@linedecls': { token: '@rematch', switchTo: '@root.$S2' },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            { include: '@root' }
        ],
        // single quote strings (also used for symbols)
        // sstring.<kind>  where kind is 'sq' (single quote) or 's' (symbol)
        sstring: [
            [/[^\\']+/, 'string.$S2'],
            [/\\\\|\\'|\\$/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.invalid'],
            [/'/, { token: 'string.$S2.delim', next: '@pop' }]
        ],
        // double quoted "string".
        // dstring.<kind>.<delim> where kind is 'd' (double quoted), 'x' (command), or 's' (symbol)
        // and delim is the ending delimiter (" or `)
        dstring: [
            [/[^\\`"#]+/, 'string.$S2'],
            [/#/, 'string.$S2.escape', '@interpolated'],
            [/\\$/, 'string.$S2.escape'],
            [/@escapes/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.escape.invalid'],
            [/[`"]/, {
                    cases: {
                        '$#==$S3': { token: 'string.$S2.delim', next: '@pop' },
                        '@default': 'string.$S2'
                    }
                }]
        ],
        // literal documents
        // heredoc.<close> where close is the closing delimiter
        heredoc: [
            [/^(\s*)(@heredelim)$/, {
                    cases: {
                        '$2==$S2': ['string.heredoc', { token: 'string.heredoc.delimiter', next: '@pop' }],
                        '@default': ['string.heredoc', 'string.heredoc']
                    }
                }],
            [/.*/, 'string.heredoc'],
        ],
        // interpolated sequence
        interpolated: [
            [/\$\w*/, 'global.constant', '@pop'],
            [/@\w*/, 'namespace.class.identifier', '@pop'],
            [/@@\w*/, 'namespace.instance.identifier', '@pop'],
            [/[{]/, { token: 'string.escape.curly', switchTo: '@interpolated_compound' }],
            ['', '', '@pop'],
        ],
        // any code
        interpolated_compound: [
            [/[}]/, { token: 'string.escape.curly', next: '@pop' }],
            { include: '@root' },
        ],
        // %r quoted regexp
        // pregexp.<open>.<close> where open/close are the open/close delimiter
        pregexp: [
            { include: '@whitespace' },
            // turns out that you can quote using regex control characters, aargh!
            // for example; %r|kgjgaj| is ok (even though | is used for alternation)
            // so, we need to match those first
            [/[^\(\{\[\\]/, {
                    cases: {
                        '$#==$S3': { token: 'regexp.delim', next: '@pop' },
                        '$#==$S2': { token: 'regexp.delim', next: '@push' },
                        '~[)}\\]]': '@brackets.regexp.escape.control',
                        '~@regexpctl': 'regexp.escape.control',
                        '@default': 'regexp'
                    }
                }],
            { include: '@regexcontrol' },
        ],
        // We match regular expression quite precisely
        regexp: [
            { include: '@regexcontrol' },
            [/[^\\\/]/, 'regexp'],
            ['/[ixmp]*', { token: 'regexp.delim' }, '@pop'],
        ],
        regexcontrol: [
            [/(\{)(\d+(?:,\d*)?)(\})/, ['@brackets.regexp.escape.control', 'regexp.escape.control', '@brackets.regexp.escape.control']],
            [/(\[)(\^?)/, ['@brackets.regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]],
            [/(\()(\?[:=!])/, ['@brackets.regexp.escape.control', 'regexp.escape.control']],
            [/\(\?#/, { token: 'regexp.escape.control', next: '@regexpcomment' }],
            [/[()]/, '@brackets.regexp.escape.control'],
            [/@regexpctl/, 'regexp.escape.control'],
            [/\\$/, 'regexp.escape'],
            [/@regexpesc/, 'regexp.escape'],
            [/\\\./, 'regexp.invalid'],
            [/#/, 'regexp.escape', '@interpolated'],
        ],
        regexrange: [
            [/-/, 'regexp.escape.control'],
            [/\^/, 'regexp.invalid'],
            [/\\$/, 'regexp.escape'],
            [/@regexpesc/, 'regexp.escape'],
            [/[^\]]/, 'regexp'],
            [/\]/, '@brackets.regexp.escape.control', '@pop'],
        ],
        regexpcomment: [
            [/[^)]+/, 'comment'],
            [/\)/, { token: 'regexp.escape.control', next: '@pop' }]
        ],
        // % quoted strings
        // A bit repetitive since we need to often special case the kind of ending delimiter
        pstring: [
            [/%([qws])\(/, { token: 'string.$1.delim', switchTo: '@qstring.$1.(.)' }],
            [/%([qws])\[/, { token: 'string.$1.delim', switchTo: '@qstring.$1.[.]' }],
            [/%([qws])\{/, { token: 'string.$1.delim', switchTo: '@qstring.$1.{.}' }],
            [/%([qws])</, { token: 'string.$1.delim', switchTo: '@qstring.$1.<.>' }],
            [/%([qws])(@delim)/, { token: 'string.$1.delim', switchTo: '@qstring.$1.$2.$2' }],
            [/%r\(/, { token: 'regexp.delim', switchTo: '@pregexp.(.)' }],
            [/%r\[/, { token: 'regexp.delim', switchTo: '@pregexp.[.]' }],
            [/%r\{/, { token: 'regexp.delim', switchTo: '@pregexp.{.}' }],
            [/%r</, { token: 'regexp.delim', switchTo: '@pregexp.<.>' }],
            [/%r(@delim)/, { token: 'regexp.delim', switchTo: '@pregexp.$1.$1' }],
            [/%(x|W|Q?)\(/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.(.)' }],
            [/%(x|W|Q?)\[/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.[.]' }],
            [/%(x|W|Q?)\{/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.{.}' }],
            [/%(x|W|Q?)</, { token: 'string.$1.delim', switchTo: '@qqstring.$1.<.>' }],
            [/%(x|W|Q?)(@delim)/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.$2.$2' }],
            [/%([rqwsxW]|Q?)./, { token: 'invalid', next: '@pop' }],
            [/./, { token: 'invalid', next: '@pop' }],
        ],
        // non-expanded quoted string.
        // qstring.<kind>.<open>.<close>
        //  kind = q|w|s  (single quote, array, symbol)
        //  open = open delimiter
        //  close = close delimiter
        qstring: [
            [/\\$/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.escape'],
            [/./, {
                    cases: {
                        '$#==$S4': { token: 'string.$S2.delim', next: '@pop' },
                        '$#==$S3': { token: 'string.$S2.delim', next: '@push' },
                        '@default': 'string.$S2'
                    }
                }],
        ],
        // expanded quoted string.
        // qqstring.<kind>.<open>.<close>
        //  kind = Q|W|x  (double quote, array, command)
        //  open = open delimiter
        //  close = close delimiter
        qqstring: [
            [/#/, 'string.$S2.escape', '@interpolated'],
            { include: '@qstring' }
        ],
        // whitespace & comments
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/^\s*=begin\b/, 'comment', '@comment'],
            [/#.*$/, 'comment'],
        ],
        comment: [
            [/[^=]+/, 'comment'],
            [/^\s*=begin\b/, 'comment.invalid'],
            [/^\s*=end\b.*/, 'comment', '@pop'],
            [/[=]/, 'comment']
        ],
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3J1YnkvcnVieS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0EsME5BQTBOO0FBQzFOLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0RBQXdE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LHVCQUF1Qix5REFBeUQ7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBK0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQXdEO0FBQ3BGLDRCQUE0Qix3REFBd0Q7QUFDcEYsd0JBQXdCLElBQUksbURBQW1ELEVBQUUsR0FBRztBQUNwRiwyQkFBMkIsd0RBQXdEO0FBQ25GLGtDQUFrQywwREFBMEQ7QUFDNUYsc0JBQXNCLGtEQUFrRDtBQUN4RSxzQkFBc0Isa0RBQWtEO0FBQ3hFLGtCQUFrQixJQUFJLDZDQUE2QyxFQUFFLEdBQUc7QUFDeEUscUJBQXFCLGtEQUFrRDtBQUN2RSw0QkFBNEIsb0RBQW9EO0FBQ2hGLDZCQUE2Qix5REFBeUQ7QUFDdEYsNkJBQTZCLHlEQUF5RDtBQUN0Rix5QkFBeUIsSUFBSSxvREFBb0QsRUFBRSxHQUFHO0FBQ3RGLDRCQUE0Qix5REFBeUQ7QUFDckYsbUNBQW1DLDJEQUEyRDtBQUM5RixpQ0FBaUMsaUNBQWlDO0FBQ2xFLG1CQUFtQixpQ0FBaUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywwQ0FBMEM7QUFDOUUsb0NBQW9DLDJDQUEyQztBQUMvRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQ2LmFlNzgyYmM1LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJz1iZWdpbicsICc9ZW5kJ10sXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJygnLCAnKSddLFxuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgXSxcbiAgICBpbmRlbnRhdGlvblJ1bGVzOiB7XG4gICAgICAgIGluY3JlYXNlSW5kZW50UGF0dGVybjogbmV3IFJlZ0V4cCgnXlxcXFxzKigoYmVnaW58Y2xhc3N8KHByaXZhdGV8cHJvdGVjdGVkKVxcXFxzK2RlZnxkZWZ8ZWxzZXxlbHNpZnxlbnN1cmV8Zm9yfGlmfG1vZHVsZXxyZXNjdWV8dW5sZXNzfHVudGlsfHdoZW58d2hpbGV8Y2FzZSl8KFteI10qXFxcXHNkb1xcXFxiKXwoW14jXSo9XFxcXHMqKGNhc2V8aWZ8dW5sZXNzKSkpXFxcXGIoW14jXFxcXHs7XXwoXCJ8XFwnfFxcLykuKlxcXFw0KSooIy4qKT8kJyksXG4gICAgICAgIGRlY3JlYXNlSW5kZW50UGF0dGVybjogbmV3IFJlZ0V4cCgnXlxcXFxzKihbfVxcXFxdXShbLCldP1xcXFxzKigjfCQpfFxcXFwuW2EtekEtWl9dXFxcXHcqXFxcXGIpfChlbmR8cmVzY3VlfGVuc3VyZXxlbHNlfGVsc2lmfHdoZW4pXFxcXGIpJyksXG4gICAgfVxufTtcbi8qXG4gKiBSdWJ5IGxhbmd1YWdlIGRlZmluaXRpb25cbiAqXG4gKiBRdWl0ZSBhIGNvbXBsZXggbGFuZ3VhZ2UgZHVlIHRvIGVsYWJvcmF0ZSBlc2NhcGUgc2VxdWVuY2VzXG4gKiBhbmQgcXVvdGluZyBvZiBsaXRlcmF0ZSBzdHJpbmdzL3JlZ3VsYXIgZXhwcmVzc2lvbnMsIGFuZFxuICogYW4gJ2VuZCcga2V5d29yZCB0aGF0IGRvZXMgbm90IGFsd2F5cyBhcHBseSB0byBtb2RpZmllcnMgbGlrZSB1bnRpbCBhbmQgd2hpbGUsXG4gKiBhbmQgYSAnZG8nIGtleXdvcmQgdGhhdCBzb21ldGltZXMgc3RhcnRzIGEgYmxvY2ssIGJ1dCBzb21ldGltZXMgaXMgcGFydCBvZlxuICogYW5vdGhlciBzdGF0ZW1lbnQgKGxpa2UgJ3doaWxlJykuXG4gKlxuICogKDEpIGVuZCBibG9ja3M6XG4gKiAnZW5kJyBtYXkgZW5kIGRlY2xhcmF0aW9ucyBsaWtlIGlmIG9yIHVudGlsLCBidXQgc29tZXRpbWVzICdpZicgb3IgJ3VudGlsJ1xuICogYXJlIG1vZGlmaWVycyB3aGVyZSB0aGVyZSBpcyBubyAnZW5kJy4gQWxzbywgJ2RvJyBzb21ldGltZXMgc3RhcnRzIGEgYmxvY2tcbiAqIHRoYXQgaXMgZW5kZWQgYnkgJ2VuZCcsIGJ1dCBzb21ldGltZXMgaXQgaXMgcGFydCBvZiBhICd3aGlsZScsICdmb3InLCBvciAndW50aWwnXG4gKiBUbyBkbyBwcm9wZXIgYnJhY2UgbWF0Y2hpbmcgd2UgZG8gc29tZSBlbGFib3JhdGUgc3RhdGUgbWFuaXB1bGF0aW9uLlxuICogc29tZSBleGFtcGxlczpcbiAqXG4gKiAgIHVudGlsIGJsYSBkb1xuICogICAgIHdvcmsgdW50aWwgdGlyZWRcbiAqICAgICBsaXN0LmVhY2ggZG9cbiAqICAgICAgIHNvbWV0aGluZyBpZiB0ZXN0XG4gKiAgICAgZW5kXG4gKiAgIGVuZFxuICpcbiAqIG9yXG4gKlxuICogaWYgdGVzdFxuICogIHNvbWV0aGluZyAoaWYgdGVzdCB0aGVuIHggZW5kKVxuICogIGJhciBpZiBibGFcbiAqIGVuZFxuICpcbiAqIG9yLCBob3cgYWJvdXQgdXNpbmcgY2xhc3MgYXMgYSBwcm9wZXJ0eS4uXG4gKlxuICogY2xhc3MgVGVzdFxuICogICBkZWYgZW5kcG9pbnRcbiAqICAgICBzZWxmLmNsYXNzLmVuZHBvaW50IHx8IHJvdXRlc1xuICogICBlbmRcbiAqIGVuZFxuICpcbiAqICgyKSBxdW90aW5nOlxuICogdGhlcmUgYXJlIG1hbnkga2luZHMgb2Ygc3RyaW5ncyBhbmQgZXNjYXBlIHNlcXVlbmNlcy4gQnV0IGFsc28sIG9uZSBjYW5cbiAqIHN0YXJ0IG1hbnkgc3RyaW5nLWxpa2UgdGhpbmdzIGFzICclcXgnIHdoZXJlIHEgc3BlY2lmaWVzIHRoZSBraW5kIG9mIHN0cmluZ1xuICogKGxpa2UgYSBjb21tYW5kLCBlc2NhcGUgZXhwYW5kZWQsIHJlZ3VsYXIgZXhwcmVzc2lvbiwgc3ltYm9sIGV0Yy4pLCBhbmQgeCBpc1xuICogc29tZSBjaGFyYWN0ZXIgYW5kIG9ubHkgYW5vdGhlciAneCcgZW5kcyB0aGUgc2VxdWVuY2UuIEV4Y2VwdCBmb3IgYnJhY2tldHNcbiAqIHdoZXJlIHRoZSBjbG9zaW5nIGJyYWNrZXQgZW5kcyB0aGUgc2VxdWVuY2UuLiBhbmQgZXhjZXB0IGZvciBhIG5lc3RlZCBicmFja2V0XG4gKiBpbnNpZGUgdGhlIHN0cmluZyBsaWtlIGVudGl0eS4gQWxzbywgc3VjaCBzdHJpbmdzIGNhbiBjb250YWluIGludGVycG9sYXRlZFxuICogcnVieSBleHByZXNzaW9ucyBhZ2FpbiAoYW5kIHNwYW4gbXVsdGlwbGUgbGluZXMpLiBNb3Jlb3ZlciwgZXhwYW5kZWRcbiAqIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYW4gYWxzbyBjb250YWluIGNvbW1lbnRzLlxuICovXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIHRva2VuUG9zdGZpeDogJy5ydWJ5JyxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnX19MSU5FX18nLCAnX19FTkNPRElOR19fJywgJ19fRklMRV9fJywgJ0JFR0lOJywgJ0VORCcsICdhbGlhcycsICdhbmQnLCAnYmVnaW4nLFxuICAgICAgICAnYnJlYWsnLCAnY2FzZScsICdjbGFzcycsICdkZWYnLCAnZGVmaW5lZD8nLCAnZG8nLCAnZWxzZScsICdlbHNpZicsICdlbmQnLFxuICAgICAgICAnZW5zdXJlJywgJ2ZvcicsICdmYWxzZScsICdpZicsICdpbicsICdtb2R1bGUnLCAnbmV4dCcsICduaWwnLCAnbm90JywgJ29yJywgJ3JlZG8nLFxuICAgICAgICAncmVzY3VlJywgJ3JldHJ5JywgJ3JldHVybicsICdzZWxmJywgJ3N1cGVyJywgJ3RoZW4nLCAndHJ1ZScsICd1bmRlZicsICd1bmxlc3MnLFxuICAgICAgICAndW50aWwnLCAnd2hlbicsICd3aGlsZScsICd5aWVsZCcsXG4gICAgXSxcbiAgICBrZXl3b3Jkb3BzOiBbXG4gICAgICAgICc6OicsICcuLicsICcuLi4nLCAnPycsICc6JywgJz0+J1xuICAgIF0sXG4gICAgYnVpbHRpbnM6IFtcbiAgICAgICAgJ3JlcXVpcmUnLCAncHVibGljJywgJ3ByaXZhdGUnLCAnaW5jbHVkZScsICdleHRlbmQnLCAnYXR0cl9yZWFkZXInLFxuICAgICAgICAncHJvdGVjdGVkJywgJ3ByaXZhdGVfY2xhc3NfbWV0aG9kJywgJ3Byb3RlY3RlZF9jbGFzc19tZXRob2QnLCAnbmV3J1xuICAgIF0sXG4gICAgLy8gdGhlc2UgYXJlIGNsb3NlZCBieSAnZW5kJyAoaWYsIHdoaWxlIGFuZCB1bnRpbCBhcmUgaGFuZGxlZCBzZXBhcmF0ZWx5KVxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAnbW9kdWxlJywgJ2NsYXNzJywgJ2RlZicsICdjYXNlJywgJ2RvJywgJ2JlZ2luJywgJ2ZvcicsICdpZicsICd3aGlsZScsICd1bnRpbCcsICd1bmxlc3MnXG4gICAgXSxcbiAgICBsaW5lZGVjbHM6IFtcbiAgICAgICAgJ2RlZicsICdjYXNlJywgJ2RvJywgJ2JlZ2luJywgJ2ZvcicsICdpZicsICd3aGlsZScsICd1bnRpbCcsICd1bmxlc3MnXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgJ14nLCAnJicsICd8JywgJzw9PicsICc9PScsICc9PT0nLCAnIX4nLCAnPX4nLCAnPicsICc+PScsICc8JywgJzw9JywgJzw8JywgJz4+JywgJysnLFxuICAgICAgICAnLScsICcqJywgJy8nLCAnJScsICcqKicsICd+JywgJytAJywgJy1AJywgJ1tdJywgJ1tdPScsICdgJyxcbiAgICAgICAgJys9JywgJy09JywgJyo9JywgJyoqPScsICcvPScsICdePScsICclPScsICc8PD0nLCAnPj49JywgJyY9JywgJyYmPScsICd8fD0nLCAnfD0nXG4gICAgXSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfVxuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXFwuXSsvLFxuICAgIC8vIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICBlc2NhcGU6IC8oPzpbYWJlZm5yc3R2XFxcXFwiJ1xcblxccl18WzAtN117MSwzfXx4WzAtOUEtRmEtZl17MSwyfXx1WzAtOUEtRmEtZl17NH0pLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OkNcXC0oQGVzY2FwZXwuKXxjKEBlc2NhcGV8Lil8QGVzY2FwZSkvLFxuICAgIGRlY3BhcnQ6IC9cXGQoXz9cXGQpKi8sXG4gICAgZGVjaW1hbDogLzB8QGRlY3BhcnQvLFxuICAgIGRlbGltOiAvW15hLXpBLVowLTlcXHNcXG5cXHJdLyxcbiAgICBoZXJlZGVsaW06IC8oPzpcXHcrfCdbXiddKid8XCJbXlwiXSpcInxgW15gXSpgKS8sXG4gICAgcmVnZXhwY3RsOiAvWygpe31cXFtcXF1cXCRcXF58XFwtKis/XFwuXS8sXG4gICAgcmVnZXhwZXNjOiAvXFxcXCg/OltBelpiQmREZm5yc3R2d1duMFxcXFxcXC9dfEByZWdleHBjdGx8Y1tBLVpdfHhbMC05YS1mQS1GXXsyfXx1WzAtOWEtZkEtRl17NH0pPy8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIC8vIE1haW4gZW50cnkuXG4gICAgICAgIC8vIHJvb3QuPGRlY2w+IHdoZXJlIGRlY2wgaXMgdGhlIGN1cnJlbnQgb3BlbmluZyBkZWNsYXJhdGlvbiAobGlrZSAnY2xhc3MnKVxuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIC8vIG1vc3QgY29tcGxleGl0eSBoZXJlIGlzIGR1ZSB0byBtYXRjaGluZyAnZW5kJyBjb3JyZWN0bHkgd2l0aCBkZWNsYXJhdGlvbnMuXG4gICAgICAgICAgICAvLyBXZSBkaXN0aW5ndWlzaCBhIGRlY2xhcmF0aW9uIHRoYXQgY29tZXMgZmlyc3Qgb24gYSBsaW5lLCB2ZXJzdXMgZGVjbGFyYXRpb25zIGZ1cnRoZXIgb24gYSBsaW5lICh3aGljaCBhcmUgbW9zdCBsaWtleSBtb2RpZmllcnMpXG4gICAgICAgICAgICBbL14oXFxzKikoW2Etel9dXFx3KlshPz1dPykvLCBbJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9yfHVudGlsfHdoaWxlJzogeyB0b2tlbjogJ2tleXdvcmQuJDInLCBuZXh0OiAnQGRvZGVjbC4kMicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGRlY2xhcmF0aW9ucyc6IHsgdG9rZW46ICdrZXl3b3JkLiQyJywgbmV4dDogJ0Byb290LiQyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbmQnOiB7IHRva2VuOiAna2V5d29yZC4kUzInLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbnMnOiAncHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXSxcbiAgICAgICAgICAgIFsvW2Etel9dXFx3KlshPz1dPy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2lmfHVubGVzc3x3aGlsZXx1bnRpbCc6IHsgdG9rZW46ICdrZXl3b3JkLiQweCcsIG5leHQ6ICdAbW9kaWZpZXIuJDB4JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvcic6IHsgdG9rZW46ICdrZXl3b3JkLiQyJywgbmV4dDogJ0Bkb2RlY2wuJDInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGxpbmVkZWNscyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJywgbmV4dDogJ0Byb290LiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VuZCc6IHsgdG9rZW46ICdrZXl3b3JkLiRTMicsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbnMnOiAncHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy9bQS1aXVtcXHddKlshPz1dPy8sICdjb25zdHJ1Y3Rvci5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICBbL1xcJFtcXHddKi8sICdnbG9iYWwuY29uc3RhbnQnXSxcbiAgICAgICAgICAgIFsvQFtcXHddKi8sICduYW1lc3BhY2UuaW5zdGFuY2UuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9AQFtcXHddKi8sICduYW1lc3BhY2UuY2xhc3MuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgLy8gaGVyZSBkb2N1bWVudFxuICAgICAgICAgICAgWy88PFstfl0oQGhlcmVkZWxpbSkuKi8sIHsgdG9rZW46ICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLCBuZXh0OiAnQGhlcmVkb2MuJDEnIH1dLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rPDwoQGhlcmVkZWxpbSkuKi8sIHsgdG9rZW46ICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLCBuZXh0OiAnQGhlcmVkb2MuJDEnIH1dLFxuICAgICAgICAgICAgWy9ePDwoQGhlcmVkZWxpbSkuKi8sIHsgdG9rZW46ICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLCBuZXh0OiAnQGhlcmVkb2MuJDEnIH1dLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5kLmRlbGltJywgbmV4dDogJ0Bkc3RyaW5nLmQuXCInIH1dLFxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5zcS5kZWxpbScsIG5leHQ6ICdAc3N0cmluZy5zcScgfV0sXG4gICAgICAgICAgICAvLyAlIGxpdGVyYWxzLiBGb3IgZWZmaWNpZW5jeSwgcmVtYXRjaCBpbiB0aGUgJ3BzdHJpbmcnIHN0YXRlXG4gICAgICAgICAgICBbLyUoW3JzcXh3V118UT8pLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ3BzdHJpbmcnIH1dLFxuICAgICAgICAgICAgLy8gY29tbWFuZHMgYW5kIHN5bWJvbHNcbiAgICAgICAgICAgIFsvYC8sIHsgdG9rZW46ICdzdHJpbmcueC5kZWxpbScsIG5leHQ6ICdAZHN0cmluZy54LmAnIH1dLFxuICAgICAgICAgICAgWy86KFxcd3xbJEBdKVxcdypbIT89XT8vLCAnc3RyaW5nLnMnXSxcbiAgICAgICAgICAgIFsvOlwiLywgeyB0b2tlbjogJ3N0cmluZy5zLmRlbGltJywgbmV4dDogJ0Bkc3RyaW5nLnMuXCInIH1dLFxuICAgICAgICAgICAgWy86Jy8sIHsgdG9rZW46ICdzdHJpbmcucy5kZWxpbScsIG5leHQ6ICdAc3N0cmluZy5zJyB9XSxcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgZXhwcmVzc2lvbnMuIExvb2thaGVhZCBmb3IgYSAobm90IGVzY2FwZWQpIGNsb3NpbmcgZm9yd2FyZHNsYXNoIG9uIHRoZSBzYW1lIGxpbmVcbiAgICAgICAgICAgIFsvXFwvKD89KFxcXFxcXC98W15cXC9cXG5dKStcXC8pLywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIG5leHQ6ICdAcmVnZXhwJyB9XSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkb3BzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy9bOyxdLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZdKF8/WzAtOWEtZkEtRl0pKi8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLzBbX29PXVswLTddKF8/WzAtN10pKi8sICdudW1iZXIub2N0YWwnXSxcbiAgICAgICAgICAgIFsvMFtiQl1bMDFdKF8/WzAxXSkqLywgJ251bWJlci5iaW5hcnknXSxcbiAgICAgICAgICAgIFsvMFtkRF1AZGVjcGFydC8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvQGRlY2ltYWwoKFxcLkBkZWNwYXJ0KT8oW2VFXVtcXC0rXT9AZGVjcGFydCk/KS8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckMSc6ICdudW1iZXIuZmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICBdLFxuICAgICAgICAvLyB1c2VkIHRvIG5vdCB0cmVhdCBhICdkbycgYXMgYSBibG9jayBvcGVuZXIgaWYgaXQgb2NjdXJzIG9uIHRoZSBzYW1lXG4gICAgICAgIC8vIGxpbmUgYXMgYSAnZG8nIHN0YXRlbWVudDogJ3doaWxlfHVudGlsfGZvcidcbiAgICAgICAgLy8gZG9kZWNsLjxkZWNsPiB3aGVyZSBkZWNsIGlzIHRoZSBkZWNsYXJhdGlvbnMgc3RhcnRlZCwgbGlrZSAnd2hpbGUnXG4gICAgICAgIGRvZGVjbDogW1xuICAgICAgICAgICAgWy9eLywgeyB0b2tlbjogJycsIHN3aXRjaFRvOiAnQHJvb3QuJFMyJyB9XSxcbiAgICAgICAgICAgIFsvW2Etel9dXFx3KlshPz1dPy8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdlbmQnOiB7IHRva2VuOiAna2V5d29yZC4kUzInLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdkbyc6IHsgdG9rZW46ICdrZXl3b3JkJywgc3dpdGNoVG86ICdAcm9vdC4kUzInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGxpbmVkZWNscyc6IHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHJvb3QuJFMyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbnMnOiAncHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHJvb3QnIH1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gdXNlZCB0byBwcmV2ZW50IHBvdGVudGlhbCBtb2RpZmllcnMgKCdpZnx1bnRpbHx3aGlsZXx1bmxlc3MnKSB0byBtYXRjaFxuICAgICAgICAvLyB3aXRoICdlbmQnIGtleXdvcmRzLlxuICAgICAgICAvLyBtb2RpZmllci48ZGVjbD54IHdoZXJlIGRlY2wgaXMgdGhlIGRlY2xhcmF0aW9uIHN0YXJ0ZXIsIGxpa2UgJ2lmJ1xuICAgICAgICBtb2RpZmllcjogW1xuICAgICAgICAgICAgWy9eLywgJycsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1thLXpfXVxcdypbIT89XT8vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZW5kJzogeyB0b2tlbjogJ2tleXdvcmQuJFMyJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAndGhlbnxlbHNlfGVsc2lmfGRvJzogeyB0b2tlbjogJ2tleXdvcmQnLCBzd2l0Y2hUbzogJ0Byb290LiRTMicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAbGluZWRlY2xzJzogeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcm9vdC4kUzInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGlucyc6ICdwcmVkZWZpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcm9vdCcgfVxuICAgICAgICBdLFxuICAgICAgICAvLyBzaW5nbGUgcXVvdGUgc3RyaW5ncyAoYWxzbyB1c2VkIGZvciBzeW1ib2xzKVxuICAgICAgICAvLyBzc3RyaW5nLjxraW5kPiAgd2hlcmUga2luZCBpcyAnc3EnIChzaW5nbGUgcXVvdGUpIG9yICdzJyAoc3ltYm9sKVxuICAgICAgICBzc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXCddKy8sICdzdHJpbmcuJFMyJ10sXG4gICAgICAgICAgICBbL1xcXFxcXFxcfFxcXFwnfFxcXFwkLywgJ3N0cmluZy4kUzIuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy4kUzIuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy4kUzIuZGVsaW0nLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gZG91YmxlIHF1b3RlZCBcInN0cmluZ1wiLlxuICAgICAgICAvLyBkc3RyaW5nLjxraW5kPi48ZGVsaW0+IHdoZXJlIGtpbmQgaXMgJ2QnIChkb3VibGUgcXVvdGVkKSwgJ3gnIChjb21tYW5kKSwgb3IgJ3MnIChzeW1ib2wpXG4gICAgICAgIC8vIGFuZCBkZWxpbSBpcyB0aGUgZW5kaW5nIGRlbGltaXRlciAoXCIgb3IgYClcbiAgICAgICAgZHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxgXCIjXSsvLCAnc3RyaW5nLiRTMiddLFxuICAgICAgICAgICAgWy8jLywgJ3N0cmluZy4kUzIuZXNjYXBlJywgJ0BpbnRlcnBvbGF0ZWQnXSxcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nLiRTMi5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLiRTMi5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLiRTMi5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9bYFwiXS8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMzJzogeyB0b2tlbjogJ3N0cmluZy4kUzIuZGVsaW0nLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcuJFMyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gbGl0ZXJhbCBkb2N1bWVudHNcbiAgICAgICAgLy8gaGVyZWRvYy48Y2xvc2U+IHdoZXJlIGNsb3NlIGlzIHRoZSBjbG9zaW5nIGRlbGltaXRlclxuICAgICAgICBoZXJlZG9jOiBbXG4gICAgICAgICAgICBbL14oXFxzKikoQGhlcmVkZWxpbSkkLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQyPT0kUzInOiBbJ3N0cmluZy5oZXJlZG9jJywgeyB0b2tlbjogJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFsnc3RyaW5nLmhlcmVkb2MnLCAnc3RyaW5nLmhlcmVkb2MnXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBbLy4qLywgJ3N0cmluZy5oZXJlZG9jJ10sXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGludGVycG9sYXRlZCBzZXF1ZW5jZVxuICAgICAgICBpbnRlcnBvbGF0ZWQ6IFtcbiAgICAgICAgICAgIFsvXFwkXFx3Ki8sICdnbG9iYWwuY29uc3RhbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9AXFx3Ki8sICduYW1lc3BhY2UuY2xhc3MuaWRlbnRpZmllcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbL0BAXFx3Ki8sICduYW1lc3BhY2UuaW5zdGFuY2UuaWRlbnRpZmllcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1t7XS8sIHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlLmN1cmx5Jywgc3dpdGNoVG86ICdAaW50ZXJwb2xhdGVkX2NvbXBvdW5kJyB9XSxcbiAgICAgICAgICAgIFsnJywgJycsICdAcG9wJ10sXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGFueSBjb2RlXG4gICAgICAgIGludGVycG9sYXRlZF9jb21wb3VuZDogW1xuICAgICAgICAgICAgWy9bfV0vLCB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZS5jdXJseScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Byb290JyB9LFxuICAgICAgICBdLFxuICAgICAgICAvLyAlciBxdW90ZWQgcmVnZXhwXG4gICAgICAgIC8vIHByZWdleHAuPG9wZW4+LjxjbG9zZT4gd2hlcmUgb3Blbi9jbG9zZSBhcmUgdGhlIG9wZW4vY2xvc2UgZGVsaW1pdGVyXG4gICAgICAgIHByZWdleHA6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gdHVybnMgb3V0IHRoYXQgeW91IGNhbiBxdW90ZSB1c2luZyByZWdleCBjb250cm9sIGNoYXJhY3RlcnMsIGFhcmdoIVxuICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGU7ICVyfGtnamdhanwgaXMgb2sgKGV2ZW4gdGhvdWdoIHwgaXMgdXNlZCBmb3IgYWx0ZXJuYXRpb24pXG4gICAgICAgICAgICAvLyBzbywgd2UgbmVlZCB0byBtYXRjaCB0aG9zZSBmaXJzdFxuICAgICAgICAgICAgWy9bXlxcKFxce1xcW1xcXFxdLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzMnOiB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBuZXh0OiAnQHB1c2gnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnflspfVxcXFxdXSc6ICdAYnJhY2tldHMucmVnZXhwLmVzY2FwZS5jb250cm9sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd+QHJlZ2V4cGN0bCc6ICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3JlZ2V4cCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHJlZ2V4Y29udHJvbCcgfSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gV2UgbWF0Y2ggcmVndWxhciBleHByZXNzaW9uIHF1aXRlIHByZWNpc2VseVxuICAgICAgICByZWdleHA6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0ByZWdleGNvbnRyb2wnIH0sXG4gICAgICAgICAgICBbL1teXFxcXFxcL10vLCAncmVnZXhwJ10sXG4gICAgICAgICAgICBbJy9baXhtcF0qJywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScgfSwgJ0Bwb3AnXSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVnZXhjb250cm9sOiBbXG4gICAgICAgICAgICBbLyhcXHspKFxcZCsoPzosXFxkKik/KShcXH0pLywgWydAYnJhY2tldHMucmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsICdAYnJhY2tldHMucmVnZXhwLmVzY2FwZS5jb250cm9sJ11dLFxuICAgICAgICAgICAgWy8oXFxbKShcXF4/KS8sIFsnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCcsIHsgdG9rZW46ICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCBuZXh0OiAnQHJlZ2V4cmFuZ2UnIH1dXSxcbiAgICAgICAgICAgIFsvKFxcKCkoXFw/Wzo9IV0pLywgWydAYnJhY2tldHMucmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddXSxcbiAgICAgICAgICAgIFsvXFwoXFw/Iy8sIHsgdG9rZW46ICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCBuZXh0OiAnQHJlZ2V4cGNvbW1lbnQnIH1dLFxuICAgICAgICAgICAgWy9bKCldLywgJ0BicmFja2V0cy5yZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGN0bC8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvXFxcXCQvLCAncmVnZXhwLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9AcmVnZXhwZXNjLywgJ3JlZ2V4cC5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXFxcLi8sICdyZWdleHAuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8jLywgJ3JlZ2V4cC5lc2NhcGUnLCAnQGludGVycG9sYXRlZCddLFxuICAgICAgICBdLFxuICAgICAgICByZWdleHJhbmdlOiBbXG4gICAgICAgICAgICBbLy0vLCAncmVnZXhwLmVzY2FwZS5jb250cm9sJ10sXG4gICAgICAgICAgICBbL1xcXi8sICdyZWdleHAuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cXFxcJC8sICdyZWdleHAuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL0ByZWdleHBlc2MvLCAncmVnZXhwLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9bXlxcXV0vLCAncmVnZXhwJ10sXG4gICAgICAgICAgICBbL1xcXS8sICdAYnJhY2tldHMucmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ0Bwb3AnXSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVnZXhwY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXildKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKS8sIHsgdG9rZW46ICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gJSBxdW90ZWQgc3RyaW5nc1xuICAgICAgICAvLyBBIGJpdCByZXBldGl0aXZlIHNpbmNlIHdlIG5lZWQgdG8gb2Z0ZW4gc3BlY2lhbCBjYXNlIHRoZSBraW5kIG9mIGVuZGluZyBkZWxpbWl0ZXJcbiAgICAgICAgcHN0cmluZzogW1xuICAgICAgICAgICAgWy8lKFtxd3NdKVxcKC8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0Bxc3RyaW5nLiQxLiguKScgfV0sXG4gICAgICAgICAgICBbLyUoW3F3c10pXFxbLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDEuWy5dJyB9XSxcbiAgICAgICAgICAgIFsvJShbcXdzXSlcXHsvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy4kMS57Ln0nIH1dLFxuICAgICAgICAgICAgWy8lKFtxd3NdKTwvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy4kMS48Lj4nIH1dLFxuICAgICAgICAgICAgWy8lKFtxd3NdKShAZGVsaW0pLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDEuJDIuJDInIH1dLFxuICAgICAgICAgICAgWy8lclxcKC8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBzd2l0Y2hUbzogJ0BwcmVnZXhwLiguKScgfV0sXG4gICAgICAgICAgICBbLyVyXFxbLywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHByZWdleHAuWy5dJyB9XSxcbiAgICAgICAgICAgIFsvJXJcXHsvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcHJlZ2V4cC57Ln0nIH1dLFxuICAgICAgICAgICAgWy8lcjwvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcHJlZ2V4cC48Lj4nIH1dLFxuICAgICAgICAgICAgWy8lcihAZGVsaW0pLywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHByZWdleHAuJDEuJDEnIH1dLFxuICAgICAgICAgICAgWy8lKHh8V3xRPylcXCgvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXFzdHJpbmcuJDEuKC4pJyB9XSxcbiAgICAgICAgICAgIFsvJSh4fFd8UT8pXFxbLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiQxLlsuXScgfV0sXG4gICAgICAgICAgICBbLyUoeHxXfFE/KVxcey8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4kMS57Ln0nIH1dLFxuICAgICAgICAgICAgWy8lKHh8V3xRPyk8LywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiQxLjwuPicgfV0sXG4gICAgICAgICAgICBbLyUoeHxXfFE/KShAZGVsaW0pLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiQxLiQyLiQyJyB9XSxcbiAgICAgICAgICAgIFsvJShbcnF3c3hXXXxRPykuLywgeyB0b2tlbjogJ2ludmFsaWQnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLy4vLCB7IHRva2VuOiAnaW52YWxpZCcsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gbm9uLWV4cGFuZGVkIHF1b3RlZCBzdHJpbmcuXG4gICAgICAgIC8vIHFzdHJpbmcuPGtpbmQ+LjxvcGVuPi48Y2xvc2U+XG4gICAgICAgIC8vICBraW5kID0gcXx3fHMgIChzaW5nbGUgcXVvdGUsIGFycmF5LCBzeW1ib2wpXG4gICAgICAgIC8vICBvcGVuID0gb3BlbiBkZWxpbWl0ZXJcbiAgICAgICAgLy8gIGNsb3NlID0gY2xvc2UgZGVsaW1pdGVyXG4gICAgICAgIHFzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nLiRTMi5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLiRTMi5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvLi8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFM0JzogeyB0b2tlbjogJ3N0cmluZy4kUzIuZGVsaW0nLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMzJzogeyB0b2tlbjogJ3N0cmluZy4kUzIuZGVsaW0nLCBuZXh0OiAnQHB1c2gnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLiRTMidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICBdLFxuICAgICAgICAvLyBleHBhbmRlZCBxdW90ZWQgc3RyaW5nLlxuICAgICAgICAvLyBxcXN0cmluZy48a2luZD4uPG9wZW4+LjxjbG9zZT5cbiAgICAgICAgLy8gIGtpbmQgPSBRfFd8eCAgKGRvdWJsZSBxdW90ZSwgYXJyYXksIGNvbW1hbmQpXG4gICAgICAgIC8vICBvcGVuID0gb3BlbiBkZWxpbWl0ZXJcbiAgICAgICAgLy8gIGNsb3NlID0gY2xvc2UgZGVsaW1pdGVyXG4gICAgICAgIHFxc3RyaW5nOiBbXG4gICAgICAgICAgICBbLyMvLCAnc3RyaW5nLiRTMi5lc2NhcGUnLCAnQGludGVycG9sYXRlZCddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHFzdHJpbmcnIH1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gd2hpdGVzcGFjZSAmIGNvbW1lbnRzXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvXlxccyo9YmVnaW5cXGIvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXj1dKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL15cXHMqPWJlZ2luXFxiLywgJ2NvbW1lbnQuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9eXFxzKj1lbmRcXGIuKi8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvWz1dLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9