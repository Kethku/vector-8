import { parse } from 'acorn';
import { simple as walk } from 'acorn-walk';

export type Node = import("estree").Node["type"] & { 
  loc: { 
    start: { line: number, column: number };
    end: { line: number, column: number };
  },
  start: number, 
  end: number 
};

export function callUnderMouse(code: string, position: { lineNumber: number, column: number }) {
  let smallestNode = null
  let smallestSize = Infinity
  try {
    // Use Acorn to walk over the parsed code looking for each call expression. If the mouse is currently inside
    // the call expression text bounds, and is smaller than the previously smallest node, then store it away
    walk(parse(code, {locations: true}), {
      // Call expression is used because it is pretty consistent.
      // https://github.com/estree/estree/blob/master/es5.md#callexpression
      CallExpression(node: any) {
        // If the mouse is in bounds, then continue to checking node size
        if (position.lineNumber >= node.loc.start.line &&
            position.lineNumber <= node.loc.end.line &&
            position.column >= node.loc.start.column &&
            position.column <= node.loc.end.column) {
          let nodeSize = node.end - node.start
          if (!smallestNode || nodeSize < smallestSize) {
            smallestNode = node
            smallestSize = nodeSize
          }
        }
      }
    })
  } catch { }

  return smallestNode as Node;
}

export function injectHighlights(code: string, callUnderMouse: Node) {
  if (callUnderMouse) {
    let before = code.slice(0, callUnderMouse.start);
    let nodeCode = code.slice(callUnderMouse.start, callUnderMouse.end);
    let after = code.slice(callUnderMouse.end);
    return `${before}__injectHighlight__(() => ${nodeCode})${after}`;
  } else {
    return code;
  }
}
