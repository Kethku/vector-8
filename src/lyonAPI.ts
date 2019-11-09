export let lyonAPI: typeof import("../pkg");

(async () => {
  lyonAPI = await import("../pkg");
})();

export const publicAPI = {
  rectStroke(x: number, y: number, width: number, height: number, color = 7) {
    lyonAPI?.strokeRectangle(x - width / 2, y - height / 2, width, height, color);
  },

  circStroke(x: number, y: number, radius: number, color = 7) {
    lyonAPI?.strokeCircle(x, y, radius, color);
  },

  rectFill(x: number, y: number, width: number, height: number, color = 7) {
    lyonAPI?.fillRectangle(x - width / 2, y - height / 2, width, height, color);
  },

  circFill(x: number, y: number, radius: number, color = 7) {
    lyonAPI?.fillCircle(x, y, radius, color);
  },

  clear(color = 0) {
    this.rectFill(0, 0, 2, 2, color)
  }
};
