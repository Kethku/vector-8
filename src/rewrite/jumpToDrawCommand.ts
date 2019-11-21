import { parse } from 'acorn';
import { simple as walk } from 'acorn-walk';

export function injectCodeLines(code: string) {
  let calls = [];
  try {
    walk(parse(code, {locations: true}), {
      CallExpression(node: any) {
        calls.push(node);
      }
    }); 
  } catch { }

  for (let i = 0; i < calls.length; i++) {
    let call = calls[i];
    let before = code.slice(0, call.start);
    let nodeCode = code.slice(call.start, call.end);
    let after = code.slice(call.end);

    let injectedCallPrefix = `__injectCodePosition__(${call.loc.start.line - 1}, () => `;
    let newNodeCode =  `${injectedCallPrefix}${nodeCode})`;

    let newCode = `${before}${newNodeCode}${after}`;

    for (let j = i + 1; j < calls.length; j++) {
      let subsequentCall = calls[j];

      if (subsequentCall.start > call.start) {
        if (subsequentCall.start > call.end) {
          subsequentCall.start += 1;
        }
        subsequentCall.start += injectedCallPrefix.length;
      }

      if (subsequentCall.end > call.start) {
        if (subsequentCall.end > call.end) {
          subsequentCall.end += 1;
        }
        subsequentCall.end += injectedCallPrefix.length;
      }
    }
    code = newCode;
  }

  return code;
}
