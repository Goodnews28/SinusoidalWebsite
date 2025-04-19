const canvas = document.getElementById('sineCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const centerY = height / 2;

const amplitudeSlider = document.getElementById('amplitude');
const frequencySlider = document.getElementById('frequency');

let t = 0;

function drawGrid() {
  ctx.strokeStyle = '#e7d3b1'; // warm gold grid
  ctx.lineWidth = 1;

  // vertical grid lines
  for (let x = 0; x <= width; x += 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // horizontal grid lines
  for (let y = 0; y <= height; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

function drawAxes() {
  ctx.strokeStyle = '#b07527';
  ctx.lineWidth = 2;

  // x-axis
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();

  // y-axis
  ctx.beginPath();
  ctx.moveTo(50, 0);
  ctx.lineTo(50, height);
  ctx.stroke();

  // labels
  ctx.fillStyle = '#321b0e';
  ctx.font = '16px Montserrat';
  ctx.fillText('y(t)', 10, 30);
  ctx.fillText('t', width - 20, centerY + 20);
}

function drawSine(amplitude, frequency) {
  ctx.beginPath();
  ctx.strokeStyle = '#4d2c15'; // earthy brown
  ctx.lineWidth = 3;

  const amp = amplitude * 20;
  const waveLength = width / (frequency * 2 * Math.PI);

  for (let x = 0; x < width; x++) {
    const angle = (x / waveLength);
    const y = centerY - amp * Math.sin(angle);
    if (x === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.stroke();
}

function animate() {
  const amplitude = parseFloat(amplitudeSlider.value);
  const frequency = parseFloat(frequencySlider.value);

  ctx.clearRect(0, 0, width, height);
  drawGrid();
  drawAxes();
  drawSine(amplitude, frequency);

 // speed of movement
  requestAnimationFrame(animate);
}

amplitudeSlider.addEventListener('input', () => {});
frequencySlider.addEventListener('input', () => {});

animate();
