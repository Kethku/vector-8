export let lyonAPI: typeof import("../../pkg");

(async () => {
  lyonAPI = await import("../../pkg");
  publicAPI.clear();
})();

let currentlyHighlighting = false;

const highlightFlickerTime = 5;
let highlightTimer = 0;
let highlight = false;
export function updateHighlightFlicker() {
  highlightTimer += 1;
  if (highlightTimer > highlightFlickerTime) {
    highlight = !highlight;
    highlightTimer = 0;
  }
}

function __injectHighlight__(code: () => any) {
  currentlyHighlighting = true;
  let result = code();
  currentlyHighlighting = false;
  return result;
}

let idR = 0;
let idG = 0;
let idB = 0;
function __injectCodePosition__(line: number, code: () => any) {
  idR = (line & 0xFF);
  idG = (line & 0xFF00) >> 8;
  idB = (line & 0xFF0000) >> 16;
  return code();
}

function assertNumber(x: unknown): asserts x is number {
    if (typeof x !== "number" && x !== NaN) {
        throw new Error(`${x} is not a number`);
    }
}
function correctColor(color: number) {
  if (currentlyHighlighting && highlight) color += 2;
  return Math.abs(Math.floor(color));
}

export let typeDefinition = `
declare var mouseX: number;
declare var mouseY: number;
declare function random(): number;
`;

typeDefinition += `
/**
 * Sets the width of lines used for the stroke draw calls.
 */
declare var setLineWidth: (width: number) => void;
`;
function setLineWidth(width: unknown) {
  assertNumber(width);
  lyonAPI?.setLineWidth(width);
}

typeDefinition += `
/**
 * Strokes a line with the given vertices.
 */
declare var strokeLine: (x1: number, y1: number, x2: number, y2: number, color?: number) => void;
`;
function strokeLine(x1: unknown, y1: unknown, x2: unknown, y2: unknown, color = 7) {
  assertNumber(x1);
  assertNumber(y1);
  assertNumber(x2);
  assertNumber(y2);
  assertNumber(color);
  lyonAPI?.strokePolyLine(new Float32Array([x1, y1, x2, y2]), false, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Strokes a series of lines with the given vertices where the numbers in the passed array are grouped by twos.
 */
declare var strokePolyline: (points: number[], color?: number) => void;
`;
function strokePolyline(points: unknown[], color = 7) {
  for (let pointComponent of points) {
    assertNumber(pointComponent);
  }
  assertNumber(color);
  lyonAPI?.strokePolyLine(new Float32Array(points as number[]), false, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Strokes a triangle with the given vertices.
 */
declare var strokeTriangle: (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color?: number) => void;
`;
function strokeTriangle(x1: unknown, y1: unknown, x2: unknown, y2: unknown, x3: unknown, y3: unknown, color = 7) {
  assertNumber(x1);
  assertNumber(y1);
  assertNumber(x2);
  assertNumber(y2);
  assertNumber(x3);
  assertNumber(y3);
  assertNumber(color);
  lyonAPI?.strokeTriangle(x1, y1, x2, y2, x3, y3, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Strokes a quad with the given vertices.
 */
declare var strokeQuad: (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, color?: number) => void;
`;
function strokeQuad(x1: unknown, y1: unknown, x2: unknown, y2: unknown, x3: unknown, y3: unknown, x4: unknown, y4: unknown, color = 7) {
  assertNumber(x1);
  assertNumber(y1);
  assertNumber(x2);
  assertNumber(y2);
  assertNumber(x3);
  assertNumber(y3);
  assertNumber(x4);
  assertNumber(y4);
  assertNumber(color);
  lyonAPI?.strokeQuad(x1, y1, x2, y2, x3, y3, x4, y4, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Strokes a rectangle at the given position and the given width and height.
 */
declare var strokeRectangle: (x: number, y: number, width: number, height: number, color?: number) => void;
`;
function strokeRectangle(x: unknown, y: unknown, width: unknown, height: unknown, color = 7) {
  assertNumber(x);
  assertNumber(y);
  assertNumber(width);
  assertNumber(height);
  assertNumber(color);
  lyonAPI?.strokeRectangle(x, y, width, height, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Strokes a polygon with the given vertices where the numbers in the passed array are grouped by twos.
 */
declare var strokePolygon: (points: number[], color?: number) => void;
`;
function strokePolygon(points: unknown[], color = 7) {
  for (let pointComponent of points) {
    assertNumber(pointComponent);
  }
  assertNumber(color);
  lyonAPI?.strokePolyLine(new Float32Array(points as number[]), true, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Strokes a circle at the given position and the given radius.
 */
declare var strokeCircle: (x: number, y: number, radius: number, color?: number) => void;
`;
function strokeCircle(x: unknown, y: unknown, radius: unknown, color = 7) {
  assertNumber(x);
  assertNumber(y);
  assertNumber(radius);
  assertNumber(color);
  lyonAPI?.strokeCircle(x, y, radius, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Fills a triangle with the given vertices.
 */
declare var fillTriangle: (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color?: number) => void;
`;
function fillTriangle(x1: unknown, y1: unknown, x2: unknown, y2: unknown, x3: unknown, y3: unknown, color = 7) {
  assertNumber(x1);
  assertNumber(y1);
  assertNumber(x2);
  assertNumber(y2);
  assertNumber(x3);
  assertNumber(y3);
  assertNumber(color);
  lyonAPI?.fillTriangle(x1, y1, x2, y2, x3, y3, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Fills a quad with the given vertices.
 */
declare var fillQuad: (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, color?: number) => void;
`;
function fillQuad(x1: unknown, y1: unknown, x2: unknown, y2: unknown, x3: unknown, y3: unknown, x4: unknown, y4: unknown, color = 7) {
  assertNumber(x1);
  assertNumber(y1);
  assertNumber(x2);
  assertNumber(y2);
  assertNumber(x3);
  assertNumber(y3);
  assertNumber(x4);
  assertNumber(y4);
  assertNumber(color);
  lyonAPI?.fillQuad(x1, y1, x2, y2, x3, y3, x4, y4, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Fills a rectangle at the given position and the given width and height.
 */
declare var fillRectangle: (x: number, y: number, width: number, height: number, color?: number) => void;
`;
function fillRectangle(x: unknown, y: unknown, width: unknown, height: unknown, color = 7) {
  assertNumber(x);
  assertNumber(y);
  assertNumber(width);
  assertNumber(height);
  assertNumber(color);
  lyonAPI?.fillRectangle(x, y, width, height, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Fills a polygon with the given vertices where the numbers in the passed array are grouped by twos.
 */
declare var fillPolygon: (points: number[], color?: number) => void;
`;
function fillPolygon(points: unknown[], color = 7) {
  for (let pointComponent of points) {
    assertNumber(pointComponent);
  }
  assertNumber(color);
  lyonAPI?.fillPolyLine(new Float32Array(points as number[]), correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Fills a circle at the given position and the given radius.
 */
declare var fillCircle: (x: number, y: number, radius: number, color?: number) => void;
`;
function fillCircle(x: unknown, y: unknown, radius: unknown, color = 7) {
  assertNumber(x);
  assertNumber(y);
  assertNumber(radius);
  assertNumber(color);
  lyonAPI?.fillCircle(x, y, radius, correctColor(color), idR, idG, idB);
}

typeDefinition += `
/**
 * Clears the screen to a given color.
 */
declare var clear: (color?: number) => void;
`;
function clear(color = 0) {
  fillRectangle(0, 0, 1000, 1000, color);
}

typeDefinition += "export as namespace typescript;";
export const publicAPI = {
  setLineWidth, clear, __injectHighlight__, __injectCodePosition__,
  strokeLine, strokePolyline, strokeTriangle, strokeQuad, strokeRectangle, strokePolygon, strokeCircle,
  fillTriangle, fillQuad, fillRectangle, fillPolygon, fillCircle
};
