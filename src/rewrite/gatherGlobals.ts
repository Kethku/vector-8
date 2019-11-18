export function injectGlobalGatheringCode(code: string, expectedGlobals: { [globalName: string]: any }) {
  let codeToInject = `
let result = {};`;

  for (let globalName in expectedGlobals) {
    codeToInject += `
result['${globalName}'] = ${globalName};
`.trimRight();
  }

  codeToInject += `
result
`.trimRight();
  return code + codeToInject;
}
