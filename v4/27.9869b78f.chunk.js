(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js ***!
  \********************************************************************************/
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
        blockComment: ['<!--', '-->',]
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
        { open: '<', close: '>', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '(', close: ')' },
        { open: '[', close: ']' },
        { open: '`', close: '`' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#?region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#?endregion\\b.*-->")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.md',
    // escape codes
    control: /[\\`*_\[\]{}()#+\-\.!]/,
    noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
    escapes: /\\(?:@control)/,
    // escape codes for javascript/CSS strings
    jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    // non matched elements
    empty: [
        'area', 'base', 'basefont', 'br', 'col', 'frame',
        'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param'
    ],
    tokenizer: {
        root: [
            // headers (with #)
            [/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/, ['white', 'keyword', 'keyword', 'keyword']],
            // headers (with =)
            [/^\s*(=+|\-+)\s*$/, 'keyword'],
            // headers (with ***)
            [/^\s*((\*[ ]?)+)\s*$/, 'meta.separator'],
            // quote
            [/^\s*>+/, 'comment'],
            // list (starting with * or number)
            [/^\s*([\*\-+:]|\d+\.)\s/, 'keyword'],
            // code block (4 spaces indent)
            [/^(\t|[ ]{4})[^ ].*$/, 'string'],
            // code block (3 tilde)
            [/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/, { token: 'string', next: '@codeblock' }],
            // github style code blocks (with backticks and language)
            [/^\s*```\s*((?:\w|[\/\-#])+).*$/, { token: 'string', next: '@codeblockgh', nextEmbedded: '$1' }],
            // github style code blocks (with backticks but no language)
            [/^\s*```\s*$/, { token: 'string', next: '@codeblock' }],
            // markup within lines
            { include: '@linecontent' },
        ],
        codeblock: [
            [/^\s*~~~\s*$/, { token: 'string', next: '@pop' }],
            [/^\s*```\s*$/, { token: 'string', next: '@pop' }],
            [/.*$/, 'variable.source'],
        ],
        // github style code blocks
        codeblockgh: [
            [/```\s*$/, { token: 'variable.source', next: '@pop', nextEmbedded: '@pop' }],
            [/[^`]+/, 'variable.source'],
        ],
        linecontent: [
            // escapes
            [/&\w+;/, 'string.escape'],
            [/@escapes/, 'escape'],
            // various markup
            [/\b__([^\\_]|@escapes|_(?!_))+__\b/, 'strong'],
            [/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, 'strong'],
            [/\b_[^_]+_\b/, 'emphasis'],
            [/\*([^\\*]|@escapes)+\*/, 'emphasis'],
            [/`([^\\`]|@escapes)+`/, 'variable'],
            // links
            [/\{+[^}]+\}+/, 'string.target'],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/, ['string.link', '', 'string.link']],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\])/, 'string.link'],
            // or html
            { include: 'html' },
        ],
        // Note: it is tempting to rather switch to the real HTML mode instead of building our own here
        // but currently there is a limitation in Monarch that prevents us from doing it: The opening
        // '<' would start the HTML mode, however there is no way to jump 1 character back to let the
        // HTML mode also tokenize the opening angle bracket. Thus, even though we could jump to HTML,
        // we cannot correctly tokenize it in that mode yet.
        html: [
            // html tags
            [/<(\w+)\/>/, 'tag'],
            [/<(\w+)/, {
                    cases: {
                        '@empty': { token: 'tag', next: '@tag.$1' },
                        '@default': { token: 'tag', next: '@tag.$1' }
                    }
                }],
            [/<\/(\w+)\s*>/, { token: 'tag' }],
            [/<!--/, 'comment', '@comment']
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, 'comment', '@pop'],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
        // Almost full HTML tag matching, complete with embedded scripts & styles
        tag: [
            [/[ \t\r\n]+/, 'white'],
            [/(type)(\s*=\s*)(")([^"]+)(")/, ['attribute.name.html', 'delimiter.html', 'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html']],
            [/(type)(\s*=\s*)(')([^']+)(')/, ['attribute.name.html', 'delimiter.html', 'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html']],
            [/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/, ['attribute.name.html', 'delimiter.html', 'string.html']],
            [/\w+/, 'attribute.name.html'],
            [/\/>/, 'tag', '@pop'],
            [/>/, {
                    cases: {
                        '$S2==style': { token: 'tag', switchTo: 'embeddedStyle', nextEmbedded: 'text/css' },
                        '$S2==script': {
                            cases: {
                                '$S3': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: '$S3' },
                                '@default': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: 'text/javascript' }
                            }
                        },
                        '@default': { token: 'tag', next: '@pop' }
                    }
                }],
        ],
        embeddedStyle: [
            [/[^<]+/, ''],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
        embeddedScript: [
            [/[^<]+/, ''],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL21hcmtkb3duL21hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLHdEQUF3RCxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsRUFBRTtBQUN6QjtBQUNBLGtEQUFrRCxzQ0FBc0M7QUFDeEY7QUFDQSxnREFBZ0QsNERBQTREO0FBQzVHO0FBQ0EsNkJBQTZCLHNDQUFzQztBQUNuRTtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0E7QUFDQSw2QkFBNkIsZ0NBQWdDO0FBQzdELDZCQUE2QixnQ0FBZ0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQStEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSSxJQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0NBQWdDO0FBQ25FLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQiw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWdEO0FBQ3JFO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWdEO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxvRUFBb0U7QUFDM0c7QUFDQTtBQUNBLHdDQUF3QyxnRUFBZ0U7QUFDeEcsNkNBQTZDO0FBQzdDO0FBQ0EseUJBQXlCO0FBQ3pCLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQXdEO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdEQUF3RDtBQUN2RjtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyNy45ODY5Yjc4Zi5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGJsb2NrQ29tbWVudDogWyc8IS0tJywgJy0tPicsXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+Jywgbm90SW46IFsnc3RyaW5nJ10gfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9LFxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccyo8IS0tXFxcXHMqIz9yZWdpb25cXFxcYi4qLS0+XCIpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKjwhLS1cXFxccyojP2VuZHJlZ2lvblxcXFxiLiotLT5cIilcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLm1kJyxcbiAgICAvLyBlc2NhcGUgY29kZXNcbiAgICBjb250cm9sOiAvW1xcXFxgKl9cXFtcXF17fSgpIytcXC1cXC4hXS8sXG4gICAgbm9uY29udHJvbDogL1teXFxcXGAqX1xcW1xcXXt9KCkjK1xcLVxcLiFdLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OkBjb250cm9sKS8sXG4gICAgLy8gZXNjYXBlIGNvZGVzIGZvciBqYXZhc2NyaXB0L0NTUyBzdHJpbmdzXG4gICAganNlc2NhcGVzOiAvXFxcXCg/OltidG5mclxcXFxcIiddfFswLTddWzAtN10/fFswLTNdWzAtN117Mn0pLyxcbiAgICAvLyBub24gbWF0Y2hlZCBlbGVtZW50c1xuICAgIGVtcHR5OiBbXG4gICAgICAgICdhcmVhJywgJ2Jhc2UnLCAnYmFzZWZvbnQnLCAnYnInLCAnY29sJywgJ2ZyYW1lJyxcbiAgICAgICAgJ2hyJywgJ2ltZycsICdpbnB1dCcsICdpc2luZGV4JywgJ2xpbmsnLCAnbWV0YScsICdwYXJhbSdcbiAgICBdLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBoZWFkZXJzICh3aXRoICMpXG4gICAgICAgICAgICBbL14oXFxzezAsM30pKCMrKSgoPzpbXlxcXFwjXXxAZXNjYXBlcykrKSgoPzojKyk/KS8sIFsnd2hpdGUnLCAna2V5d29yZCcsICdrZXl3b3JkJywgJ2tleXdvcmQnXV0sXG4gICAgICAgICAgICAvLyBoZWFkZXJzICh3aXRoID0pXG4gICAgICAgICAgICBbL15cXHMqKD0rfFxcLSspXFxzKiQvLCAna2V5d29yZCddLFxuICAgICAgICAgICAgLy8gaGVhZGVycyAod2l0aCAqKiopXG4gICAgICAgICAgICBbL15cXHMqKChcXCpbIF0/KSspXFxzKiQvLCAnbWV0YS5zZXBhcmF0b3InXSxcbiAgICAgICAgICAgIC8vIHF1b3RlXG4gICAgICAgICAgICBbL15cXHMqPisvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy8gbGlzdCAoc3RhcnRpbmcgd2l0aCAqIG9yIG51bWJlcilcbiAgICAgICAgICAgIFsvXlxccyooW1xcKlxcLSs6XXxcXGQrXFwuKVxccy8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICAvLyBjb2RlIGJsb2NrICg0IHNwYWNlcyBpbmRlbnQpXG4gICAgICAgICAgICBbL14oXFx0fFsgXXs0fSlbXiBdLiokLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgLy8gY29kZSBibG9jayAoMyB0aWxkZSlcbiAgICAgICAgICAgIFsvXlxccyp+fn5cXHMqKCg/Olxcd3xbXFwvXFwtI10pKyk/XFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bjb2RlYmxvY2snIH1dLFxuICAgICAgICAgICAgLy8gZ2l0aHViIHN0eWxlIGNvZGUgYmxvY2tzICh3aXRoIGJhY2t0aWNrcyBhbmQgbGFuZ3VhZ2UpXG4gICAgICAgICAgICBbL15cXHMqYGBgXFxzKigoPzpcXHd8W1xcL1xcLSNdKSspLiokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAY29kZWJsb2NrZ2gnLCBuZXh0RW1iZWRkZWQ6ICckMScgfV0sXG4gICAgICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3MgKHdpdGggYmFja3RpY2tzIGJ1dCBubyBsYW5ndWFnZSlcbiAgICAgICAgICAgIFsvXlxccypgYGBcXHMqJC8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQGNvZGVibG9jaycgfV0sXG4gICAgICAgICAgICAvLyBtYXJrdXAgd2l0aGluIGxpbmVzXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbGluZWNvbnRlbnQnIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNvZGVibG9jazogW1xuICAgICAgICAgICAgWy9eXFxzKn5+flxccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvXlxccypgYGBcXHMqJC8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLy4qJC8sICd2YXJpYWJsZS5zb3VyY2UnXSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gZ2l0aHViIHN0eWxlIGNvZGUgYmxvY2tzXG4gICAgICAgIGNvZGVibG9ja2doOiBbXG4gICAgICAgICAgICBbL2BgYFxccyokLywgeyB0b2tlbjogJ3ZhcmlhYmxlLnNvdXJjZScsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL1teYF0rLywgJ3ZhcmlhYmxlLnNvdXJjZSddLFxuICAgICAgICBdLFxuICAgICAgICBsaW5lY29udGVudDogW1xuICAgICAgICAgICAgLy8gZXNjYXBlc1xuICAgICAgICAgICAgWy8mXFx3KzsvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdlc2NhcGUnXSxcbiAgICAgICAgICAgIC8vIHZhcmlvdXMgbWFya3VwXG4gICAgICAgICAgICBbL1xcYl9fKFteXFxcXF9dfEBlc2NhcGVzfF8oPyFfKSkrX19cXGIvLCAnc3Ryb25nJ10sXG4gICAgICAgICAgICBbL1xcKlxcKihbXlxcXFwqXXxAZXNjYXBlc3xcXCooPyFcXCopKStcXCpcXCovLCAnc3Ryb25nJ10sXG4gICAgICAgICAgICBbL1xcYl9bXl9dK19cXGIvLCAnZW1waGFzaXMnXSxcbiAgICAgICAgICAgIFsvXFwqKFteXFxcXCpdfEBlc2NhcGVzKStcXCovLCAnZW1waGFzaXMnXSxcbiAgICAgICAgICAgIFsvYChbXlxcXFxgXXxAZXNjYXBlcykrYC8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgLy8gbGlua3NcbiAgICAgICAgICAgIFsvXFx7K1tefV0rXFx9Ky8sICdzdHJpbmcudGFyZ2V0J10sXG4gICAgICAgICAgICBbLyghP1xcWykoKD86W15cXF1cXFxcXXxAZXNjYXBlcykqKShcXF1cXChbXlxcKV0rXFwpKS8sIFsnc3RyaW5nLmxpbmsnLCAnJywgJ3N0cmluZy5saW5rJ11dLFxuICAgICAgICAgICAgWy8oIT9cXFspKCg/OlteXFxdXFxcXF18QGVzY2FwZXMpKikoXFxdKS8sICdzdHJpbmcubGluayddLFxuICAgICAgICAgICAgLy8gb3IgaHRtbFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnaHRtbCcgfSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gTm90ZTogaXQgaXMgdGVtcHRpbmcgdG8gcmF0aGVyIHN3aXRjaCB0byB0aGUgcmVhbCBIVE1MIG1vZGUgaW5zdGVhZCBvZiBidWlsZGluZyBvdXIgb3duIGhlcmVcbiAgICAgICAgLy8gYnV0IGN1cnJlbnRseSB0aGVyZSBpcyBhIGxpbWl0YXRpb24gaW4gTW9uYXJjaCB0aGF0IHByZXZlbnRzIHVzIGZyb20gZG9pbmcgaXQ6IFRoZSBvcGVuaW5nXG4gICAgICAgIC8vICc8JyB3b3VsZCBzdGFydCB0aGUgSFRNTCBtb2RlLCBob3dldmVyIHRoZXJlIGlzIG5vIHdheSB0byBqdW1wIDEgY2hhcmFjdGVyIGJhY2sgdG8gbGV0IHRoZVxuICAgICAgICAvLyBIVE1MIG1vZGUgYWxzbyB0b2tlbml6ZSB0aGUgb3BlbmluZyBhbmdsZSBicmFja2V0LiBUaHVzLCBldmVuIHRob3VnaCB3ZSBjb3VsZCBqdW1wIHRvIEhUTUwsXG4gICAgICAgIC8vIHdlIGNhbm5vdCBjb3JyZWN0bHkgdG9rZW5pemUgaXQgaW4gdGhhdCBtb2RlIHlldC5cbiAgICAgICAgaHRtbDogW1xuICAgICAgICAgICAgLy8gaHRtbCB0YWdzXG4gICAgICAgICAgICBbLzwoXFx3KylcXC8+LywgJ3RhZyddLFxuICAgICAgICAgICAgWy88KFxcdyspLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BlbXB0eSc6IHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZy4kMScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZy4kMScgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBbLzxcXC8oXFx3KylcXHMqPi8sIHsgdG9rZW46ICd0YWcnIH1dLFxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1tePFxcLV0rLywgJ2NvbW1lbnQuY29udGVudCddLFxuICAgICAgICAgICAgWy8tLT4vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudC5jb250ZW50LmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvWzxcXC1dLywgJ2NvbW1lbnQuY29udGVudCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFsbW9zdCBmdWxsIEhUTUwgdGFnIG1hdGNoaW5nLCBjb21wbGV0ZSB3aXRoIGVtYmVkZGVkIHNjcmlwdHMgJiBzdHlsZXNcbiAgICAgICAgdGFnOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFsvKHR5cGUpKFxccyo9XFxzKikoXCIpKFteXCJdKykoXCIpLywgWydhdHRyaWJ1dGUubmFtZS5odG1sJywgJ2RlbGltaXRlci5odG1sJywgJ3N0cmluZy5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5odG1sJywgc3dpdGNoVG86ICdAdGFnLiRTMi4kNCcgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5odG1sJ11dLFxuICAgICAgICAgICAgWy8odHlwZSkoXFxzKj1cXHMqKSgnKShbXiddKykoJykvLCBbJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLCAnZGVsaW1pdGVyLmh0bWwnLCAnc3RyaW5nLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmh0bWwnLCBzd2l0Y2hUbzogJ0B0YWcuJFMyLiQ0JyB9LFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmh0bWwnXV0sXG4gICAgICAgICAgICBbLyhcXHcrKShcXHMqPVxccyopKFwiW15cIl0qXCJ8J1teJ10qJykvLCBbJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLCAnZGVsaW1pdGVyLmh0bWwnLCAnc3RyaW5nLmh0bWwnXV0sXG4gICAgICAgICAgICBbL1xcdysvLCAnYXR0cmlidXRlLm5hbWUuaHRtbCddLFxuICAgICAgICAgICAgWy9cXC8+LywgJ3RhZycsICdAcG9wJ10sXG4gICAgICAgICAgICBbLz4vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1zdHlsZSc6IHsgdG9rZW46ICd0YWcnLCBzd2l0Y2hUbzogJ2VtYmVkZGVkU3R5bGUnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PXNjcmlwdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJFMzJzogeyB0b2tlbjogJ3RhZycsIHN3aXRjaFRvOiAnZW1iZWRkZWRTY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICckUzMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICd0YWcnLCBzd2l0Y2hUbzogJ2VtYmVkZGVkU2NyaXB0JywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHBvcCcgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGVtYmVkZGVkU3R5bGU6IFtcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ10sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvPC8sICcnXVxuICAgICAgICBdLFxuICAgICAgICBlbWJlZGRlZFNjcmlwdDogW1xuICAgICAgICAgICAgWy9bXjxdKy8sICcnXSxcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvPC8sICcnXVxuICAgICAgICBdLFxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9