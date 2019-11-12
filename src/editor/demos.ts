export const orbits = `
const count = 500;

function initCircle() {
  let x = Math.random() * 2 - 1;
  return {
    x,
    y: 0.5,
    vx: 0,
    vy: 0,
    radius: (x + 1.5) / 50,
    color: Math.floor(
      Math.random() * 7
    ) + 1
  }
}

update = (state) => {
  if (!state) {
    state = [];
    for (let i = 0; i < count; i++) {
      state.push(initCircle());
    }
  }

  let newState = [];
  for (let circle of state) {
    let { x, y, vx, vy, radius } = circle;
    let dx = mouseX - x;
    let dy = mouseY - y;

    let dist = Math.sqrt(dx * dx + dy * dy);

    let ax = dx / Math.pow(dist, 1.5);
    let ay = dy / Math.pow(dist, 1.5);

    newState.push({
      ...circle,
      x: x + vx,
      y: y + vy,
      vx: vx * 0.99 + ax / radius / 100000,
      vy: vy * 0.99 + ay / radius / 100000
    });
  }

  return newState;
}

draw = (circles) => {
  clear();
  for (let circle of circles) {
    circFill(
      circle.x, circle.y, 
      circle.radius, 
      circle.color);
  }
}
`.trim();

export const circleGrid = `
update = (state) => {
  if (!state) { // Initialize if state is undefined.
    state = {};
  }
  return state;
}

draw = (state) => {
  let count = 20;
  let border = 10;
  clear();
  for (let x = -count + border; x <= count - border; x++) {
    for (let y = -count + border; y <= count - border; y++) {
      let circleX = x / count;
      let circleY = y / count;
      let dx = circleX - mouseX;
      let dy = circleY - mouseY;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let radius = distance / 10;
      let color = x + y + mouseX * 10 + mouseY * 10;
      circFill(circleX, circleY, radius, color);
    }
  }
}
`.trim();
