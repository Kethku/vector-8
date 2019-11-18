export const color0Hex = '#0A0A10'
export const color0HexText = color0Hex.substr(1);
export const color1Hex = '#181B22'
export const color1HexText = color1Hex.substr(1);
export const color2Hex = '#272F3B'
export const color2HexText = color2Hex.substr(1);
export const color3Hex = '#35544A'
export const color3HexText = color3Hex.substr(1);
export const color4Hex = '#757F55'
export const color4HexText = color4Hex.substr(1);
export const color5Hex = '#C5BB63'
export const color5HexText = color5Hex.substr(1);
export const color6Hex = '#EFD98D'
export const color6HexText = color6Hex.substr(1);
export const color7Hex = '#F9E0BC'
export const color7HexText = color7Hex.substr(1);

export const theme = {
  base: 'vs-dark',
  inherit: false,
  rules: [
    { token: '', foreground: color7HexText /* #F9E0BC */, background: color0HexText /* #0A0A10 */},
    { token: 'invalid', foreground: 'FF0000' }, // #F9E0BC
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },

    { token: 'variable', foreground: color4HexText }, // #757F55
    { token: 'variable.predefined', foreground: color3HexText }, // #35544A
    { token: 'constant', foreground: color4HexText }, // #757F55
    { token: 'comment', foreground: color3HexText }, // #35544A
    { token: 'number', foreground: color5HexText }, // #C5BB63
    { token: 'number.hex', foreground: color5HexText }, // #C5BB63
    { token: 'regexp', foreground: color5HexText }, // #C5BB63
    { token: 'annotation', foreground: color6HexText }, // #EFD98D
    { token: 'type', foreground: color4HexText }, // #757F55

    { token: 'delimiter', foreground: color6HexText }, // #EFD98D
    { token: 'delimiter.html', foreground: color6HexText }, // #EFD98D
    { token: 'delimiter.xml', foreground: color6HexText }, // #EFD98D

    { token: 'tag', foreground: color6HexText }, // #EFD98D
    { token: 'tag.id.pug', foreground: color3HexText }, // #35544A
    { token: 'tag.class.pug', foreground: color3HexText }, // #35544A
    { token: 'meta.scss', foreground: color7HexText }, // #F9E0BC
    { token: 'metatag', foreground: color7HexText }, // #F9E0BC
    { token: 'metatag.content.html', foreground: color7HexText }, // #F9E0BC
    { token: 'metatag.html', foreground: color3HexText }, // #35544A
    { token: 'metatag.xml', foreground: color3HexText }, // #35544A
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'key', foreground: color4HexText }, // #757F55
    { token: 'string.key.json', foreground: color4HexText }, // #757F55
    { token: 'string.value.json', foreground: color7HexText }, // #F9E0BC

    { token: 'attribute.name', foreground: '#FF0000' },
    { token: 'attribute.value', foreground: color5HexText }, // #C5BB63
    { token: 'attribute.value.number', foreground: color5HexText }, // #C5BB63
    { token: 'attribute.value.unit', foreground: color5HexText }, // #C5BB63
    { token: 'attribute.value.html', foreground: color5HexText }, // #C5BB63
    { token: 'attribute.value.xml', foreground: color5HexText }, // #C5BB63

    { token: 'string', foreground: color6HexText }, // #EFD98D
    { token: 'string.html', foreground: color6HexText }, // #EFD98D
    { token: 'string.sql', foreground: color6HexText }, // #EFD98D
    { token: 'string.yaml', foreground: color6HexText }, // #EFD98D

    { token: 'keyword', foreground: color4HexText }, // #757F55
    { token: 'keyword.json', foreground: color4HexText }, // #757F55
    { token: 'keyword.flow', foreground: color4HexText }, // #757F55
    { token: 'keyword.flow.scss', foreground: color4HexText }, // #757F55

    { token: 'operator.scss', foreground: color4HexText }, // #757F55
    { token: 'operator.sql', foreground: color4HexText }, // #757F55
    { token: 'operator.swift', foreground: color4HexText }, // #757F55
    { token: 'predefined.sql', foreground: color4HexText }, // #757F55
  ],
  colors: {
    'editor.background': '#0A0A10',
    'editor.foreground': '#F9E0BC',
    'editor.inactiveSelection': '#EFD98D',
    'editor.indentGuides': '#EFD98D',
    'editor.activeIndentGuides': '#EFD98D',
    'editor.selectionHighlight': '#EFD98D',
    'editor.selectionBackground': '#272F3B',
    'editorLineNumber.foreground': '#272F3B',

    'editorSuggestWidget.background': '#181B22',
    'editorSuggestWidget.border': '#272F3B',
    'editorSuggestWidget.selectedBackground': '#272F3B',
    'editorSuggestWidget.highlightForeground': '#757F55',

    'editorHoverWidget.background': '#181B22',
    'editorHoverWidget.border': '#272F3B',

    'editor.wordHighlightBackground': '#181B22',
    'editor.wordHighlightStrongBackground': '#272F3B',
  }
};
