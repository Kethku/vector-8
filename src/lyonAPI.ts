import { currentCanvas } from "./renderer/component";

export let lyonAPI: typeof import("../pkg");

(async () => {
  lyonAPI = await import("../pkg");
  publicAPI.clear();
})();

function assertNumber(x: unknown): asserts x is number {
    if (typeof x !== "number") {
        throw new Error(`${x} is not a number`);
    }
}

function correctColor(color: number) {
  return Math.abs(Math.floor(color));
}

export const publicAPI = {
  rectStroke(x: unknown, y: unknown, width: unknown, height: unknown, color: unknown = 7) {
    assertNumber(x);
    assertNumber(y);
    assertNumber(width);
    assertNumber(height);
    assertNumber(color);
    lyonAPI?.strokeRectangle(x - width / 2, y - height / 2, width, height, correctColor(color));
  },

  circStroke(x: unknown, y: unknown, radius: unknown, color: unknown = 7) {
    assertNumber(x);
    assertNumber(y);
    assertNumber(radius);
    assertNumber(color);
    lyonAPI?.strokeCircle(x, y, radius, correctColor(color));
  },

  rectFill(x: unknown, y: unknown, width: unknown, height: unknown, color: unknown = 7) {
    assertNumber(x);
    assertNumber(y);
    assertNumber(width);
    assertNumber(height);
    assertNumber(color);
    lyonAPI?.fillRectangle(x - width / 2, y - height / 2, width, height, correctColor(color));
  },

  circFill(x: unknown, y: unknown, radius: unknown, color: unknown = 7) {
    assertNumber(x);
    assertNumber(y);
    assertNumber(radius);
    assertNumber(color);
    lyonAPI?.fillCircle(x, y, radius, correctColor(color));
  },

  clear(color = 0) {
    assertNumber(color);
    this.rectFill(0, 0, 2, 2 * currentCanvas.height / currentCanvas.width, correctColor(color));
  }
};
