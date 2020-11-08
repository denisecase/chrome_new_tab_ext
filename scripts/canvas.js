/**
 * Provides a simple canvas example.
 * Can be easily customized and added to any web page.
 * @module canvas
 * @author Denise Case
 */

const redrawEveryMillisecs = 1000 / 60;
const radius = 12; // Ball radius
const innerRadius = 2; // inner glow
const outerRadius = 10; // outer glow
const startAngle = 0;
const endAngle = 2 * Math.PI;
const isAntiClockwise = true;

let deltaX = 0.5;
let deltaY = -0.5;

const getCursorPosition = (canvas, event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x, y };
};

export default function addBall(canvasElement, e) {
  const cursorPosition = getCursorPosition(canvasElement, e);
  const context = canvasElement.getContext('2d');

  // 0,0 is upper left
  let centerX = cursorPosition.x; // canvasElement.width / 2;
  let centerY = cursorPosition.y; // canvasElement.height / 2;

  const redraw = () => {
    // clear
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);

    // update
    if (centerX > canvasElement.width - radius || centerX < radius) {
      deltaX = -deltaX;
    }
    if (centerY > canvasElement.height - radius || centerY < radius) {
      deltaY = -deltaY;
    }
    centerX += deltaX;
    centerY += deltaY;

    // draw inside
    context.beginPath();
    context.arc(
      centerX,
      centerY,
      radius,
      startAngle,
      endAngle,
      isAntiClockwise,
    );
    const gradient = context.createRadialGradient(
      centerX,
      centerY,
      innerRadius,
      centerX,
      centerY,
      outerRadius,
    );
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, '#006747');
    context.fillStyle = gradient;
    context.fill();

    // draw border
    context.lineWidth = 2;
    context.strokeStyle = '#006747';
    context.stroke();
  };
  setInterval(redraw, redrawEveryMillisecs);
}
